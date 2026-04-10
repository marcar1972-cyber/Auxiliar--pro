"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRO_LEVELS } from "../../../quizData/index"; 
import { 
  ChevronLeft, CheckCircle, XCircle, ArrowRight, Trophy, 
  RotateCcw, BookOpen, Clock, AlertCircle, ShieldCheck, Timer
} from "lucide-react";
import Link from "next/link";
import { auth, db } from "../../../firebase/config";
import { doc, getDoc, updateDoc, arrayUnion, collection, addDoc, serverTimestamp } from "firebase/firestore";

const cleanOptionText = (text) => {
  return text.replace(/^[A-Za-z][\.\)\-\s]+/, '').trim();
};

export default function QuizProDetailPage() {
  const params = useParams();
  const router = useRouter();
  const levelId = parseInt(params.id);
  const level = PRO_LEVELS.find(l => l.id === levelId);
  
  const [quizStarted, setQuizStarted] = useState(false); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [isSavingRecord, setIsSavingRecord] = useState(false);

  // --- NUEVOS ESTADOS PARA INTENTOS Y BLOQUEO ---
  const [intentosActuales, setIntentosActuales] = useState(0);
  const [bloqueadoHasta, setBloqueadoHasta] = useState(null);

  const durationMins = (id) => ({1:20, 2:25, 3:30, 4:40, 5:45, 6:50, 7:60}[id] || 15);
  const [timeLeft, setTimeLeft] = useState(durationMins(levelId) * 60);

  useEffect(() => {
    if (!quizStarted || showResults || !isAuthorized) return; 
    if (timeLeft <= 0) { setShowResults(true); return; }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, quizStarted, showResults, isAuthorized]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            const isAdmin = currentUser.email === "marcar1972@gmail.com";
            
            // --- VERIFICACIÓN DE BLOQUEO POR TIEMPO ---
            if (data.lockUntilPro && data.lockUntilPro.toDate() > new Date() && !isAdmin) {
                router.push('/quiz/pro');
                return;
            }

            // Sincronizar intentos fallidos de este nivel
            const failedAttempts = data.failedAttemptsPro || {};
            setIntentosActuales(failedAttempts[levelId] || 0);

            const pasoInicialCompleto = (data.unlockedLevels && data.unlockedLevels.length > 7);
            const esUsuarioFundador = (data.unlockedLevelsPro && data.unlockedLevelsPro.length > 1);

            if (!isAdmin && !pasoInicialCompleto && !esUsuarioFundador) {
                router.push('/quiz/pro'); 
                return;
            }

            const hasActiveSubscription = isAdmin || data.isPro || (data.proUntil?.toDate() >= new Date());
            
            if (hasActiveSubscription) {
              const currentLevels = data.unlockedLevelsPro || [];
              if (!currentLevels.includes(1)) {
                await updateDoc(userRef, { unlockedLevelsPro: arrayUnion(1) });
              }
            } else if (new Date() > new Date("2026-03-31T23:59:59")) {
              router.push('/planes'); 
              return; 
            }
            setUser(currentUser);
            setIsAuthorized(true);
          } else { router.push('/planes'); }
        } catch (e) { console.error(e); router.push('/planes'); }
      } else { router.push('/login'); }
    });
    return () => unsubscribe();
  }, [router, levelId]);

  const startQuiz = () => {
    setQuizQuestions(level.questions);
    setQuizStarted(true);
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === quizQuestions[currentQuestion].correctAnswer) setScore(prev => prev + 1);
  };

  const nextQuestion = async () => {
    if (isSavingRecord) return;
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsSavingRecord(true);
      
      const isAdmin = user?.email === "marcar1972@gmail.com";
      const totalQuestions = quizQuestions.length;
      const percentage = (score / totalQuestions) * 100;
      const isApproved = score >= Math.ceil(totalQuestions * 0.8) || isAdmin;
      
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const attemptRef = collection(db, "exam_logs");
          
          await addDoc(attemptRef, {
            uid: user.uid,
            email: user.email,
            levelId: levelId,
            score: score,
            totalQuestions: totalQuestions,
            percentage: percentage.toFixed(2) + "%",
            status: isApproved ? "APROBADO" : "REPROBADO",
            date: new Date().toLocaleString("es-CL"),
            createdAt: serverTimestamp()
          });

          if (isApproved) {
            // SI APRUEBA: Limpiamos intentos fallidos de este nivel y desbloqueamos el siguiente
            const failedAttempts = (await getDoc(userRef)).data().failedAttemptsPro || {};
            failedAttempts[levelId] = 0;
            
            await updateDoc(userRef, {
              unlockedLevelsPro: arrayUnion(levelId + 1),
              failedAttemptsPro: failedAttempts
            });
          } else if (!isAdmin) {
            // SI REPRUEBA: Aumentamos contador de intentos
            const newAttempts = intentosActuales + 1;
            const failedAttempts = (await getDoc(userRef)).data().failedAttemptsPro || {};
            failedAttempts[levelId] = newAttempts;

            let updatePayload = { failedAttemptsPro: failedAttempts };

            // Si llega a 3 intentos fallidos, bloqueamos 30 minutos
            if (newAttempts >= 3) {
                const lockoutTime = new Date(Date.now() + 30 * 60000); // 30 mins
                updatePayload.lockUntilPro = lockoutTime;
                updatePayload.failedAttemptsPro[levelId] = 0; // Reiniciamos para después del bloqueo
            }

            await updateDoc(userRef, updatePayload);
          }
        } catch (e) { console.error(e); } 
      }
      setIsSavingRecord(false); 
      setShowResults(true);
    }
  };

  if (!level) return null;
  if (!isAuthorized) return null;

  if (showResults) {
    const isAdmin = user?.email === "marcar1972@gmail.com";
    const isApproved = score >= Math.ceil(quizQuestions.length * 0.8) || isAdmin;
    
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl text-center border border-slate-100">
          {isApproved ? <Trophy size={64} className="mx-auto mb-6 text-amber-500" /> : <AlertCircle size={64} className="mx-auto mb-6 text-red-500" />}
          <h2 className="text-3xl font-black text-slate-900 mb-2">{isApproved ? "¡Nivel Aprobado!" : "Sigue Intentando"}</h2>
          <p className="text-slate-500 mb-8 font-medium">Lograste <span className="text-emerald-600 font-black">{score}</span> de {quizQuestions.length} correctas.</p>
          <div className="space-y-3">
            {!isApproved && (
              <button onClick={() => window.location.reload()} className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2">
                <RotateCcw size={20} /> REINTENTAR ({3 - intentosActuales - 1} de 3 intentos restantes)
              </button>
            )}
            <Link href="/quiz/pro" className="block w-full bg-slate-100 text-slate-600 font-black py-4 rounded-2xl text-center uppercase text-sm">
              {isApproved ? "CONTINUAR RUTA PRO" : "VOLVER AL MENÚ"}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!quizStarted) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl border border-slate-100">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">{level.title}</h2>
          <div className="space-y-4 mb-8 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-slate-600">
             <div className="flex items-center gap-3"><Clock size={18} className="text-emerald-500" /> Tiempo: {durationMins(levelId)}:00 min</div>
             <div className="flex items-center gap-3"><BookOpen size={18} className="text-emerald-500" /> Preguntas: {level.questions.length}</div>
             <div className="flex items-center gap-3 border-t pt-3 mt-3 text-red-500 font-black">
                <Timer size={18} /> Intentos: {intentosActuales}/3 
                <span className="text-[10px] bg-red-100 px-2 py-0.5 rounded-lg ml-auto">BLOQUEO SI FALLAS 3</span>
             </div>
          </div>
          <button onClick={startQuiz} className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl uppercase tracking-widest shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-colors">
            Iniciar Examen
          </button>
          <Link href="/quiz/pro" className="block mt-6 text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-slate-600 transition-colors">Abandonar</Link>
        </div>
      </main>
    );
  }

  const q = quizQuestions[currentQuestion];
  const getLetter = (index) => String.fromCharCode(65 + index) + ")";

  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">PREGUNTA {currentQuestion + 1} DE {quizQuestions.length}</div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full font-black text-sm border border-emerald-100 shadow-sm">
          <Clock size={16} /> {formatTime(timeLeft)}
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 mt-4">
        <h2 className="text-3xl font-black text-slate-900 mb-10 leading-tight">{q.question}</h2>
        <div className="space-y-4">
          {q.options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswer(index)} 
              className={`w-full p-7 rounded-[2rem] border-2 text-left font-bold transition-all flex items-center justify-between text-lg
                ${!isAnswered ? "bg-white border-slate-100 text-slate-600 hover:border-emerald-500 hover:shadow-md" : 
                  index === q.correctAnswer ? "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-sm" : 
                  index === selectedOption ? "bg-red-50 border-red-500 text-red-700" : "bg-white border-slate-50 text-slate-300"}
              `}
            >
              <span className="flex-1 pr-4">
                <span className="text-emerald-600 mr-2">{getLetter(index)}</span> {cleanOptionText(option)}
              </span>
              {isAnswered && index === q.correctAnswer && <CheckCircle className="text-emerald-500 shrink-0" />}
              {isAnswered && index === selectedOption && index !== q.correctAnswer && <XCircle className="text-red-500 shrink-0" />}
            </button>
          ))}
        </div>

        {!isAnswered && (
          <div className="mt-12 text-center">
            <Link href="/quiz/pro" className="text-slate-400 font-bold hover:text-red-500 transition-colors text-sm uppercase tracking-widest flex items-center justify-center gap-2 mx-auto">
              <XCircle size={16} /> Abandonar Examen
            </Link>
          </div>
        )}

        {isAnswered && (
          <div className="mt-10 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 mb-8 shadow-inner">
              <h4 className="font-black text-slate-900 flex items-center gap-2 mb-2 uppercase text-xs tracking-tighter"><BookOpen size={16} /> Explicación Técnica</h4>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">{q.explanation}</p>
            </div>
            <button onClick={nextQuestion} disabled={isSavingRecord} className={`w-full text-white font-black py-6 rounded-[2rem] shadow-xl transition-all flex items-center justify-center gap-3 text-lg ${isSavingRecord ? 'bg-slate-400' : 'bg-slate-900 hover:bg-black'}`}>
              {isSavingRecord ? "GUARDANDO..." : (currentQuestion + 1 === quizQuestions.length ? "FINALIZAR EXAMEN" : "CONTINUAR")}
              {!isSavingRecord && <ArrowRight size={22} />}
            </button>
          </div>
        )}
      </div>
      <footer className="fixed bottom-4 w-full text-center text-[10px] font-black text-slate-300 uppercase tracking-widest">AuxiliarPro v4.0 | &lt; macz.dev /&gt;</footer>
    </main>
  );
}