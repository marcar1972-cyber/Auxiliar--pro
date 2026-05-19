"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { LEVELS, PRO_LEVELS } from "../../../quizData/index"; 
import { Trophy, Clock, AlertCircle, X, ChevronRight, Share2, ArrowRight, ChevronLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { auth, db } from "../../../firebase/config";
import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp, increment, arrayUnion } from "firebase/firestore";
import SocialContact from "../../../components/SocialContact";

const cleanOptionText = (text) => text.replace(/^[A-Za-z][\.\)\-\s]+/, '').trim();

export default function QuizEnginePage() {
  const params = useParams();
  const router = useRouter();
  const mode = params.mode;
  const rawId = params.id;
  const sourceData = mode === 'pro' ? PRO_LEVELS : LEVELS;
  const numericId = String(rawId).replace(/\D/g, "");
  
  // CTO FIX: Búsqueda hiper-resistente para evitar el "undefined"
  let level = sourceData.find(l => {
    const item = l?.default || l;
    return String(item?.id) === String(rawId) || String(item?.id) === numericId;
  });
  level = level?.default || level; // Desempaquetar si viene de un import dinámico

  // Si no lo pilla por ID, lo busca por posición (ej: 1 = primer elemento)
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
  
  const initialTime = level?.timeLimit ? level.timeLimit * 60 : 15 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  const [failedAttempts, setFailedAttempts] = useState(0); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.email === 'marcar1972@gmail.com') return;

        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          const now = Date.now();
          setFailedAttempts(data.failedAttempts || 0); 
          if (data.lockoutUntil && data.lockoutUntil.toDate().getTime() > now) {
            setLockout(true);
          }
        }
      }
    });
    return () => unsubscribe();
  }, [rawId]);

  useEffect(() => {
    if (!quizStarted || showResults || lockout) return;
    if (timeLeft <= 0) { handleFinish(false); return; }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, quizStarted, showResults, lockout]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `AuxiliarPro - ${level?.title || 'Evaluación'}`,
          text: `¡Estoy rindiendo la evaluación de ${level?.title || 'Auxiliar de Farmacia'} en AuxiliarPro! Únete y prepárate para tu certificación SEREMI.`,
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
    if (index === level.questions[currentQuestion].correctAnswer) setScore(s => s + 1);
  };

  const handleFinish = async (isApproved) => {
    setShowResults(true);
    if (!user || user.email === 'marcar1972@gmail.com') return;
    
    const userRef = doc(db, "users", user.uid);
    
    if (isApproved) {
      // FIX: Guardar progreso según el modo (Básico o Pro)
      if (mode === 'pro') {
        // Para el Campus: Guardamos en approvedModules para desbloquear el siguiente
        await updateDoc(userRef, {
          approvedModules: arrayUnion(rawId), // Guarda 'mod-1', 'mod-2', etc.
          failedAttempts: 0
        });
      } else {
        // Para modo Básico
        await updateDoc(userRef, {
          completedBasicLevels: arrayUnion(parseInt(numericId)),
          failedAttempts: 0
        });
      }
    } else {
      // Lógica de fallos
      const userSnap = await getDoc(userRef);
      const currentFailures = (userSnap.data().failedAttempts || 0) + 1;
      const updates = { failedAttempts: currentFailures };
      if (currentFailures >= 3) {
        updates.lockoutUntil = new Date(Date.now() + 30 * 60000); 
        updates.failedAttempts = 0; 
      }
      await updateDoc(userRef, updates);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < level.questions.length) {
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
    const isGlobal = rawId === 'pro-eval-global';
    if(confirm("¿Seguro que quieres abandonar?")) {
      if (isGlobal && user?.email !== 'marcar1972@gmail.com') {
        handleFinish(false);
      } else {
        router.push(mode === 'pro' ? '/campus' : '/quiz');
      }
    }
  };

  if (!level || !level.questions) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50">
        <AlertCircle size={64} className="text-red-500 mb-6" />
        <h2 className="text-2xl font-black mb-4 text-[#003366]">Buscando Nivel...</h2>
        <p className="text-slate-600 max-w-sm mb-6">Si esto no carga, el nivel {rawId} no está leyendo correctamente la base de datos o el archivo está vacío.</p>
        <button onClick={() => router.back()} className="bg-[#003366] text-white px-8 py-3 rounded-xl font-bold">Volver atrás</button>
      </div>
    );
  }

  if (lockout) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 text-center bg-slate-50">
        <AlertCircle size={64} className="text-red-500 mb-6" />
        <h2 className="text-2xl font-black mb-4">Has superado el límite de intentos</h2>
        <p className="text-slate-600 max-w-sm mb-6">El sistema te ha bloqueado por 30 minutos. ¡Es momento de repasar tus apuntes y volver más preparado!</p>
        <Link href={mode === 'pro' ? '/campus' : '/quiz'} className="bg-[#003366] text-white px-8 py-3 rounded-xl font-bold mb-12">Volver a estudiar</Link>
        <div className="w-full max-w-lg border-t border-slate-200 pt-8 mt-4">
           <SocialContact />
        </div>
    </div>
  );

  if (showResults) {
    const passingLogic = level?.passingScore ? Math.ceil(level.questions.length * (level.passingScore / 100)) : Math.ceil(level.questions.length * 0.8);
    const isApproved = score >= passingLogic;
    const nextLevel = parseInt(numericId) + 1;
    const canGoToNext = isApproved && mode !== 'pro' && nextLevel <= 6;

    return (
      <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl text-center mb-8">
          {isApproved ? <Trophy size={64} className="mx-auto mb-6 text-amber-500" /> : <AlertCircle size={64} className="mx-auto mb-6 text-red-500" />}
          <h2 className="text-3xl font-black mb-2">{isApproved ? "¡Aprobado!" : "Inténtalo de nuevo"}</h2>
          <p className="mb-8 text-slate-600">Lograste {score} de {level.questions.length}. {!isApproved && "Te sugerimos repasar el material antes de volver a intentar."}</p>
          
          {canGoToNext ? (
             <Link href={`/quiz/basic/basic-eval-${nextLevel}`} className="block w-full bg-emerald-600 text-white font-black py-4 rounded-2xl text-center uppercase text-sm mb-4">
               IR AL NIVEL {nextLevel} <ArrowRight className="inline ml-2" size={16}/>
             </Link>
          ) : (
             <Link href={mode === 'pro' ? '/campus' : '/quiz'} className="block w-full bg-slate-900 text-white font-black py-4 rounded-2xl text-center uppercase text-sm mb-4">
               {mode === 'pro' ? "VOLVER AL CAMPUS" : "VOLVER AL LOBBY"}
             </Link>
          )}

          <button onClick={handleShare} className="flex items-center justify-center gap-2 w-full text-slate-400 hover:text-[#28a745] font-bold text-sm transition-colors py-2">
             <Share2 size={18} /> Compartir mi resultado
          </button>
        </div>
        <div className="w-full max-w-lg mt-4">
           <SocialContact />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6 flex flex-col">
      <div className="max-w-2xl mx-auto w-full mb-4">
          <Link href={level?.backRoute || (mode === 'pro' ? '/campus' : '/quiz')} className="flex items-center gap-2 text-slate-400 hover:text-[#003366] font-bold text-sm transition-colors">
            <ChevronLeft size={16} /> Volver al Lobby
          </Link>
      </div>

      <div className="flex-1">
        {!quizStarted ? (
          <div className="text-center p-8 bg-white rounded-3xl max-w-md mx-auto shadow-sm border mt-8">
             <div className="flex flex-col items-center gap-2 mb-6">
                <h1 className="text-2xl font-black text-[#003366] leading-tight">
                  {level?.seo?.h1 || level.title}
                </h1>
                {level?.seo?.h2 && (
                  <h2 className="text-sm text-slate-500 font-semibold">
                    {level.seo.h2}
                  </h2>
                )}
             </div>

             <p className="mb-6 text-slate-600 text-sm leading-relaxed">
               {level?.seo?.description || `Tienes ${level?.timeLimit || 15} minutos para completar esta evaluación.`}
               <br/><br/>
               <strong>Importante:</strong> Si repruebas 3 veces, el sistema te bloqueará por 30 minutos para que repases los contenidos antes de volver a intentar.
             </p>

             <button onClick={() => setQuizStarted(true)} className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-black w-full mb-4">
                Iniciar Examen
             </button>
             
             <button onClick={handleShare} className="flex items-center justify-center gap-2 w-full text-slate-400 hover:text-[#28a745] font-bold text-sm transition-colors py-2">
                 <Share2 size={18} /> Compartir evaluación
             </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex justify-between items-center text-sm">
                 <div>
                     <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Evaluación</p>
                     <p className="font-black text-[#003366] text-sm">{level?.title}</p>
                 </div>
                 <div className="text-center">
                     <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Intento</p>
                     <p className="font-bold text-slate-800">{failedAttempts + 1} / 3</p>
                 </div>
                 <div className="text-right">
                     <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Progreso</p>
                     <p className="font-bold text-slate-800">{currentQuestion + 1} / {level.questions.length}</p>
                 </div>
             </div>

             <div className="font-mono text-xl font-bold text-emerald-600 mb-4 flex items-center gap-2">
                 <Clock size={20} />
                 {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,'0')}
             </div>
               
             <h2 className="text-2xl font-bold mb-8">{level.questions[currentQuestion].question}</h2>
             <div className="space-y-4">
                {level.questions[currentQuestion].options.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(i)} className={`w-full p-6 border-2 rounded-2xl text-left font-bold transition-all ${!isAnswered ? "hover:border-emerald-500" : i === level.questions[currentQuestion].correctAnswer ? "bg-emerald-50 border-emerald-500" : i === selectedOption ? "bg-red-50 border-red-500" : "opacity-40"}`}>
                     <span className="mr-3 text-slate-400 font-mono">{String.fromCharCode(65 + i)}.</span>
                     {cleanOptionText(opt)}
                  </button>
                ))}
             </div>
               
             {isAnswered && (
                <button onClick={nextQuestion} className="mt-8 w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                    {currentQuestion + 1 === level.questions.length ? "FINALIZAR EVALUACIÓN" : "SIGUIENTE PREGUNTA"}
                    <ChevronRight size={20} />
                </button>
             )}

             <div className="mt-12 pt-8 border-t border-slate-200">
                <button onClick={handleAbandon} className="mx-auto flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-all">
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