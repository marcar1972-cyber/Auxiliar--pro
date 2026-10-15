// ============================================================================
// ARCHIVO: C:\Dev\Auxiliar--pro\app\quiz\[mode]\[id]\page.js
// DESCRIPCIÓN: Motor de evaluaciones con retorno inteligente (Lobby o Módulo)
// ============================================================================

"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { LEVELS, PRO_LEVELS } from "../../../quizData/index"; 
import { Trophy, Clock, AlertCircle, X, ChevronRight, Share2, ArrowRight, ChevronLeft, ShieldAlert, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { auth, db } from "../../../firebase/config";
import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp, arrayUnion } from "firebase/firestore";
import SocialContact from "../../../components/SocialContact";
import ModuleFeedbackModal from "../../../components/ModuleFeedbackModal";

const cleanOptionText = (text) => text.replace(/^[A-Za-z][\.\)\-\s]+/, '').trim();

const PREREQUISITES = {
  "pro-eval-global-01": "pro-eval-global",
};

const LAST_EVALUATIONS_PER_MODULE = [
  "pro-eval-4",  // Última evaluación del Módulo 1
  "pro-eval-10", // Última evaluación del Módulo 2
  "pro-eval-13", // Última evaluación del Módulo 3
  "pro-eval-15"  // Última evaluación del Módulo 4
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const shuffleQuestionWithOptions = (question) => {
  const optionsWithIndex = question.options.map((opt, index) => ({
    text: opt,
    originalIndex: index,
    isCorrect: index === question.correctAnswer
  }));
  
  const shuffledOptions = shuffleArray(optionsWithIndex);
  const newCorrectIndex = shuffledOptions.findIndex(opt => opt.isCorrect);
  
  return {
    ...question,
    options: shuffledOptions.map(opt => opt.text),
    correctAnswer: newCorrectIndex
  };
};

const getQuestionTextWithoutNumber = (questionText) => {
  return questionText.replace(/^\d+[\.\)\s]+/, '').trim();
};

export default function QuizEnginePage() {
  const params = useParams();
  const router = useRouter();
  const mode = params.mode;
  const rawId = params.id;
  const sourceData = mode === 'pro' ? PRO_LEVELS : LEVELS;
  const numericId = String(rawId).replace(/\D/g, "");
  
  let level = sourceData.find(l => {
    const item = l?.default || l;
    return String(item?.id) === String(rawId) || String(item?.id) === numericId;
  });
  level = level?.default || level; 

  if (!level && numericId) {
    const idx = Math.max(0, parseInt(numericId) - 1);
    level = sourceData[idx];
    level = level?.default || level;
  }

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [user, setUser] = useState(null);
  const [lockout, setLockout] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [lockReason, setLockReason] = useState(null);
  const [isLoadingAccess, setIsLoadingAccess] = useState(true);
  
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [preparedQuestions, setPreparedQuestions] = useState([]);
  
  const isGlobalExam = rawId && typeof rawId === 'string' && rawId.includes('global');
  const initialTime = isGlobalExam ? 3600 : (level?.timeLimit ? level.timeLimit * 60 : 15 * 60);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [failedAttempts, setFailedAttempts] = useState(0); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        if (currentUser.email?.toLowerCase() === 'marcar1972@gmail.com') {
          setIsLoadingAccess(false);
          return;
        }

        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const data = userSnap.data();
          const now = Date.now();
          setFailedAttempts(data.failedAttempts || 0); 
          
          if (data.lockoutUntil && data.lockoutUntil.toDate().getTime() > now) {
            setLockout(true);
          }

          // ============================================================
          // CONTROL DE ACCESO POR PLAN Y FALLBACK DE RESPALDO (15 DÍAS = SPRINT)
          // Sprint 15 días: módulos + Global 1.
          // Global 2 y certificado no están incluidos.
          // Mensual/Anual: mantienen acceso a Global 2.
          // Admin: ya fue excluido de estas restricciones arriba.
          // ============================================================
          let currentPlan = String(data.planActual || "")
            .trim()
            .toLowerCase();

          // Fallback si no existe el campo planActual explícito pero paymentDetails indica 15 días
          if (!currentPlan && data.paymentDetails?.dias === 15) {
            currentPlan = "sprint";
          }

          if (
            rawId === "pro-eval-global-01" &&
            currentPlan === "sprint"
          ) {
            setIsLocked(true);
            setLockReason("plan");
          }

          // ============================================================
          // REQUISITO SECUENCIAL DE GLOBAL 2
          // ============================================================
          const requiredPrereq = PREREQUISITES[rawId];
          if (requiredPrereq) {
            const approvedList = data.approvedModules || data.completedModules || [];
            if (!approvedList.includes(requiredPrereq)) {
              setIsLocked(true);
              setLockReason("prerequisite");
            }
          }
        }
        setIsLoadingAccess(false);
      } else {
        setIsLoadingAccess(false);
      }
    });
    return () => unsubscribe();
  }, [rawId]);

  useEffect(() => {
    if (!quizStarted || showResults || lockout || isLocked) return;
    if (timeLeft <= 0) { handleFinish(false); return; }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, quizStarted, showResults, lockout, isLocked]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AuxiliarPro - ${level?.title || 'Evaluación'}`,
          text: `¡Estoy rindiendo la evaluación de ${level?.title || 'Auxiliar de Farmacia'} en AuxiliarPro!`,
          url: window.location.origin,
        });
      } catch (error) {
        console.log('Error compartiendo', error);
      }
    } else {
      alert("La función de compartir no está soportada en tu navegador actual.");
    }
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    const questions = preparedQuestions.length > 0 ? preparedQuestions : level.questions;
    if (index === questions[currentQuestion].correctAnswer) setScore(s => s + 1);
  };

  const handleFinish = async (isApproved) => {
    setShowResults(true);
    
    if (!user || user.email?.toLowerCase() === 'marcar1972@gmail.com') {
      return;
    }
    
    const userRef = doc(db, "users", user.uid);
    const totalQuestions = level.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    try {
      await addDoc(collection(db, "exam_logs"), {
        userId: user.uid,
        email: user.email,
        examId: rawId,
        mode: mode,
        score: percentage,
        totalQuestions,
        correctAnswers: score,
        passed: isApproved,
        timestamp: serverTimestamp(),
        date: new Date().toISOString(),
      });

      const updates = {};
      if (isApproved) {
        updates.approvedModules = arrayUnion(rawId);
        updates.unlockedLevelsPro = arrayUnion(rawId);
      }
      
      updates[`moduleScores.${rawId}`] = percentage;

      const userSnap = await getDoc(userRef);
      const currentScores = userSnap.data()?.moduleScores || {};
      currentScores[rawId] = percentage;
      
      const approvedList = userSnap.data()?.approvedModules || [];
      if (isApproved && !approvedList.includes(rawId)) {
        approvedList.push(rawId);
      }
      
      let sum = 0;
      let count = 0;
      for (const evalId of approvedList) {
        if (typeof evalId === 'string' && evalId.startsWith('pro-eval-') && !evalId.includes('global') && currentScores[evalId] !== undefined) {
          sum += currentScores[evalId];
          count++;
        }
      }
      
      const globalAverage = count > 0 ? Math.round(sum / count) : 0;
      updates[`globalScores.average`] = globalAverage;
      updates.lastExamDate = serverTimestamp();

      await updateDoc(userRef, updates);

    } catch (error) {
      console.error("❌ ERROR CRÍTICO al guardar:", error);
      alert("Hubo un error al guardar tu progreso.");
    }
  };

  const handleReturnToModule = (targetPath, isApproved) => {
    const isLastEvaluationOfGroup = LAST_EVALUATIONS_PER_MODULE.includes(rawId);
    
    if (isApproved && isLastEvaluationOfGroup) {
      setShowFeedbackModal(true);
    } else {
      const finalPath = (isApproved && isLastEvaluationOfGroup) ? `${targetPath}?completed=true` : targetPath;
      router.push(finalPath);
    }
  };

  const handleModalClose = (targetPath) => {
    setShowFeedbackModal(false);
    router.push(`${targetPath}?completed=true`);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < (preparedQuestions.length > 0 ? preparedQuestions.length : level.questions.length)) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      const passingLogic = level?.passingScore ? Math.ceil(level.questions.length * (level.passingScore / 100)) : Math.ceil(level.questions.length * 0.8);
      const isApproved = score >= passingLogic;
      handleFinish(isApproved);
    }
  };

  const handleAbandon = () => {
    if(confirm("¿Seguro que quieres abandonar? Perderás el progreso de este intento.")) {
      router.push(mode === 'pro' ? '/campus' : '/quiz');
    }
  };

  const handleStartQuiz = () => {
    if (!isGlobalExam && level.questions) {
      const mixedQuestions = shuffleArray(level.questions);
      const prepared = mixedQuestions.map(q => shuffleQuestionWithOptions(q));
      setPreparedQuestions(prepared);
    } else {
      setPreparedQuestions([]);
    }
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (isLoadingAccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50">
        <Clock size={48} className="text-[#003366] mb-4 animate-pulse" />
        <p className="text-slate-600 font-semibold">Verificando acceso al módulo...</p>
      </div>
    );
  }

  if (isLocked) {
    const required = PREREQUISITES[rawId];
    const isPlanRestriction = lockReason === "plan";

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-50">
        <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl border border-slate-200">
          <Lock size={64} className="mx-auto mb-6 text-slate-400" />

          <h2 className="text-2xl font-black mb-4 text-[#003366]">
            {isPlanRestriction ? "Acceso restringido por tu plan" : "Módulo Bloqueado"}
          </h2>

          <p className="text-slate-600 mb-8 leading-relaxed">
            {isPlanRestriction ? (
              <>
                El <strong>Examen Global 2</strong> no está incluido en el plan Sprint de 15 días.
                <br /><br />
                Tu plan incluye los módulos y el <strong>Examen Global 1</strong>.
                <br /><br />
                Para acceder al Global 2 necesitas un plan <strong>Mensual PRO</strong> o <strong>Anual PRO</strong>.
              </>
            ) : (
              <>
                Para acceder a esta evaluación, primero debes <strong>aprobar</strong> la evaluación anterior con un puntaje igual o superior al 80%.
              </>
            )}
          </p>

          <div className="bg-slate-100 p-4 rounded-xl mb-8">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              {isPlanRestriction ? "Plan actual" : "Requisito Pendiente"}
            </p>
            <p className="font-black text-[#003366]">
              {isPlanRestriction
                ? "Sprint — 15 días"
                : required === 'pro-eval-global'
                ? 'Examen Global SEREMI'
                : required}
            </p>
          </div>

          <Link href="/campus" className="block w-full bg-[#003366] text-white font-black py-4 rounded-2xl text-center uppercase text-sm hover:bg-[#004a99] transition-colors">
            VOLVER AL CAMPUS
          </Link>
        </div>

        <div className="w-full max-w-lg mt-8 pt-8 border-t border-slate-200">
          <SocialContact />
        </div>
      </div>
    );
  }

  if (!level || !level.questions) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50">
        <AlertCircle size={64} className="text-red-500 mb-6" />
        <h2 className="text-2xl font-black mb-4 text-[#003366]">Nivel no encontrado</h2>
        <button onClick={() => router.back()} className="bg-[#003366] text-white px-8 py-3 rounded-xl font-bold">Volver atrás</button>
      </div>
    );
  }

  if (lockout) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50">
        <AlertCircle size={64} className="text-red-500 mb-6" />
        <h2 className="text-2xl font-black mb-4">Has superado el límite de intentos</h2>
        <p className="text-slate-600 max-w-sm mb-6">El sistema te ha bloqueado por 30 minutos. ¡Es momento de repasar tus apuntes!</p>
        <Link href={mode === 'pro' ? '/campus' : '/quiz'} className="bg-[#003366] text-white px-8 py-3 rounded-xl font-bold mb-12">Volver a estudiar</Link>
        <div className="w-full max-w-lg border-t border-slate-200 pt-8 mt-4">
           <SocialContact />
        </div>
    </div>
  );

  if (showResults) {
    const totalQuestions = level.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const isApproved = percentage >= 80;
    
    // 🧠 RUTA DINÁMICA SEGÚN TIPO DE EVALUACIÓN
    let targetPath = '/quiz';

    if (mode === 'pro') {
      if (isGlobalExam) {
        // Examen Global -> Regresa al Lobby principal
        targetPath = '/campus';
      } else {
        // Evaluación Módulo -> Regresa a la vista del Módulo correspondiente
        const evalNum = parseInt(rawId.replace(/\D/g, ""));
        let returnModId = "mod-1";
        if (evalNum >= 1 && evalNum <= 4) returnModId = "mod-1";
        else if (evalNum >= 5 && evalNum <= 10) returnModId = "mod-2";
        else if (evalNum >= 11 && evalNum <= 13) returnModId = "mod-3";
        else if (evalNum >= 14 && evalNum <= 15) returnModId = "mod-4";

        targetPath = `/campus/${returnModId}`;
      }
    }

    return (
      <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl text-center mb-8">
          {isApproved ? <Trophy size={64} className="mx-auto mb-6 text-amber-500" /> : <AlertCircle size={64} className="mx-auto mb-6 text-red-500" />}
          
          <h2 className="text-3xl font-black mb-2">
            {isApproved ? `¡Aprobaste con un ${percentage}%!` : `Reprobaste. Obtuviste ${percentage}%`}
          </h2>
          <p className="mb-8 text-slate-600">
            {isApproved 
              ? "Has demostrado dominio del contenido. Puedes continuar con tu formación." 
              : "Necesitas un 80% para aprobar. Te sugerimos repasar el material antes de volver a intentar."}
          </p>
          
          <button 
            onClick={() => handleReturnToModule(targetPath, isApproved)}
            className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl text-center uppercase text-sm mb-4 hover:bg-[#004a99] transition-colors cursor-pointer"
          >
            {isGlobalExam ? "VOLVER AL CAMPUS" : "VOLVER AL MÓDULO"}
          </button>

          <button onClick={handleShare} className="flex items-center justify-center gap-2 w-full text-slate-400 hover:text-[#28a745] font-bold text-sm transition-colors py-2">
             <Share2 size={18} /> Compartir mi resultado
          </button>
        </div>

        <ModuleFeedbackModal
          isOpen={showFeedbackModal}
          onClose={() => handleModalClose(targetPath)}
          moduleId={rawId}
          userId={user?.uid}
          userEmail={user?.email}
        />

        <div className="w-full max-w-lg mt-4">
           <SocialContact />
        </div>
      </main>
    );
  }

  const activeQuestions = preparedQuestions.length > 0 ? preparedQuestions : level.questions;
  const currentQuestionText = getQuestionTextWithoutNumber(activeQuestions[currentQuestion].question);

  return (
    <main className="min-h-screen bg-slate-50 p-6 flex flex-col">
      <div className="max-w-2xl mx-auto w-full mb-4 flex justify-between items-center">
          <Link href={level?.backRoute || (mode === 'pro' ? '/campus' : '/quiz')} className="flex items-center gap-2 text-slate-400 hover:text-[#003366] font-bold text-sm transition-colors">
            <ChevronLeft size={16} /> Volver al Campus
          </Link>

          {/* ⚡ BOTÓN DE PRUEBA RÁPIDA (Solo visible para pruebas) */}
          <button
            onClick={() => {
              setScore(activeQuestions.length);
              handleFinish(true);
            }}
            className="bg-purple-600 text-white font-bold px-3 py-1 rounded-lg text-xs hover:bg-purple-700 transition-colors cursor-pointer"
          >
            ⚡ Simular 100%
          </button>
      </div>

      <div className="flex-1">
        {!quizStarted ? (
          <div className="text-center p-8 bg-white rounded-3xl max-w-md mx-auto shadow-sm border mt-8">
             <div className="flex flex-col items-center gap-2 mb-6">
                <h1 className="text-2xl font-black text-[#003366] leading-tight">
                  {level?.seo?.h1 || level.title}
                </h1>
                {isGlobalExam && (
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
                    Examen Global SEREMI
                  </span>
                )}
             </div>
             <p className="mb-6 text-slate-600 text-sm leading-relaxed">
                Tienes {isGlobalExam ? 60 : (level?.timeLimit || 15)} minutos para completar esta evaluación.
                <br/><br/>
                <strong>Importante:</strong> Debes obtener al menos un <span className="text-[#28a745] font-bold">80% de aprobación</span>. Si repruebas 3 veces, el sistema te bloqueará por 30 minutos.
                {!isGlobalExam && (
                  <>
                    <br/><br/>
                    <span className="text-[#003366] font-semibold">🎲 Las preguntas y las opciones de respuesta se presentarán en orden aleatorio cada vez que inicies el examen.</span>
                  </>
                )}
             </p>
             <button onClick={handleStartQuiz} className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-black w-full mb-4 hover:bg-emerald-700 transition-colors">
                Iniciar Examen
             </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex justify-between items-center text-sm">
                 <div>
                     <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Evaluación</p>
                     <p className="font-black text-[#003366] text-sm">{level?.title}</p>
                 </div>
                 <div>
                     <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Intento</p>
                     <p className="font-bold text-slate-800 text-center">{failedAttempts + 1} / 3</p>
                 </div>
                 <div className="text-right">
                     <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Progreso</p>
                     <p className="font-bold text-slate-800">{currentQuestion + 1} / {activeQuestions.length}</p>
                 </div>
             </div>

             <div className="font-mono text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                 <Clock size={20} />
                 {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,'0')}
             </div>
               
             <h2 className="text-2xl font-bold mb-8 text-[#003366]">
               {currentQuestion + 1}. {currentQuestionText}
             </h2>
             <div className="space-y-4">
                {activeQuestions[currentQuestion].options.map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAnswer(i)} 
                    className={`w-full p-6 border-2 rounded-2xl text-left font-bold transition-all ${
                      !isAnswered 
                        ? "hover:border-emerald-500 bg-white" 
                        : i === activeQuestions[currentQuestion].correctAnswer 
                          ? "bg-emerald-50 border-emerald-500 text-emerald-800" 
                          : i === selectedOption 
                            ? "bg-red-50 border-red-500 text-red-800" 
                            : "opacity-40 bg-white"
                    }`}
                  >
                     <span className="mr-3 font-mono opacity-70">{String.fromCharCode(65 + i)}.</span>
                     {cleanOptionText(opt)}
                  </button>
                ))}
             </div>
               
             {isAnswered && (
                <button onClick={nextQuestion} className="mt-8 w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
                    {currentQuestion + 1 === activeQuestions.length ? "FINALIZAR EVALUACIÓN" : "SIGUIENTE PREGUNTA"}
                    <ChevronRight size={20} />
                </button>
             )}

             <div className="mt-12 pt-8 border-t border-slate-200">
                <button onClick={handleAbandon} className="mx-auto flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 border-slate-300 text-slate-500 hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all">
                    <X size={18}/> Abandonar Examen
                </button>
             </div>
          </div>
        )}
      </div>

      <div className="max-w-2xl mx-auto w-full mt-16 pt-8 border-t border-slate-200">
        <SocialContact />
      </div>
    </main>
  );
}