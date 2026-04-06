"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRO_LEVELS } from "../../../quizData/index"; 
import { 
  ChevronLeft, CheckCircle, XCircle, ArrowRight, Trophy, 
  RotateCcw, BookOpen, Clock, AlertCircle, ShieldCheck, Lock
} from "lucide-react";
import Link from "next/link";
import { auth, db } from "../../../firebase/config";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

// --- FUNCIÓN DE BARAJADO DE CTO (FISHER-YATES) ---
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

// --- FUNCIÓN LIMPIADORA DE TEXTO (CTO FIX) ---
// Elimina prefijos manuales como "A) ", "B. ", "c - " para evitar letras repetidas.
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
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // --- ESTADOS DE INTENTOS Y BLOQUEO ---
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [isLocked, setIsLocked] = useState(false);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [checkingAttempts, setCheckingAttempts] = useState(true);
  const [isSavingRecord, setIsSavingRecord] = useState(false);

  const durationMins = (id) => ({1:20, 2:25, 3:30, 4:40, 5:45, 6:50, 7:60}[id] || 15);
  const [timeLeft, setTimeLeft] = useState(durationMins(levelId) * 60);

  // --- TIMER ---
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

  // --- AUTH Y CARGA DE INTENTOS ---
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            const isAdmin = currentUser.email === "marcar1972@gmail.com";
            const hasActiveSubscription = isAdmin || data.isPro || (data.proUntil?.toDate() >= new Date());
            
            if (hasActiveSubscription) {
              const currentLevels = data.unlockedLevelsPro || [];
              if (!currentLevels.includes(1)) {
                await updateDoc(userRef, { unlockedLevelsPro: arrayUnion(1) });
              }
              const attemptsData = data.proAttempts || {};
              const currentLevelAttempts = attemptsData[levelId] || { left: 3, lockedUntil: null };
              setAttemptsLeft(currentLevelAttempts.left);

              if (currentLevelAttempts.lockedUntil) {
                const lockDate = typeof currentLevelAttempts.lockedUntil.toDate === 'function' 
                  ? currentLevelAttempts.lockedUntil.toDate() 
                  : new Date(currentLevelAttempts.lockedUntil);

                if (new Date() < lockDate && !isAdmin) {
                  setIsLocked(true);
                  setLockedUntil(lockDate);
                } else if (new Date() >= lockDate) {
                  setAttemptsLeft(3);
                  setIsLocked(false);
                  await updateDoc(userRef, { [`proAttempts.${levelId}`]: { left: 3, lockedUntil: null } });
                }
              }
            }
            if (new Date() > new Date("2026-03-31T23:59:59") && !hasActiveSubscription) { router.push('/planes'); return; }
            setUser(currentUser);
            setIsAuthorized(true);
          } else { router.push('/planes'); }
        } catch (e) { console.error(e); router.push('/planes'); } finally { setCheckingAttempts(false); }
      } else { router.push('/login'); }
    });
    return () => unsubscribe();
  }, [router, levelId]);

  // --- LÓGICA DE INICIO CON SHUFFLE ---
  const startQuizWithShuffle = () => {
    const clonedQuestions = JSON.parse(JSON.stringify(level.questions));
    const randomizedQuestions = clonedQuestions.map(q => {
      const correctText = q.options[q.correctAnswer];
      const shuffledOptions = shuffleArray([...q.options]);
      return {
        ...q,
        options: shuffledOptions,
        correctAnswer: shuffledOptions.indexOf(correctText)
      };
    });
    setShuffledQuestions(shuffleArray(randomizedQuestions));
    setQuizStarted(true);
  };

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === shuffledQuestions[currentQuestion].correctAnswer) setScore(prev => prev + 1);
  };

  const nextQuestion = async () => {
    if (isSavingRecord) return;
    if (currentQuestion + 1 < shuffledQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsSavingRecord(true);
      const isApproved = score >= Math.ceil(shuffledQuestions.length * 0.8);
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const proAttemptsObj = docSnap.data().proAttempts || {};
            if (isApproved) {
              await updateDoc(userRef, {
                unlockedLevelsPro: arrayUnion(levelId + 1),
                proAttempts: { ...proAttemptsObj, [levelId]: { left: 3, lockedUntil: null } }
              });
            } else {
              const currentAt = proAttemptsObj[levelId]?.left ?? 3;
              const newLeft = currentAt - 1;
              const newLock = newLeft <= 0 ? new Date(Date.now() + 86400000) : null;
              await updateDoc(userRef, {
                proAttempts: { ...proAttemptsObj, [levelId]: { left: Math.max(0, newLeft), lockedUntil: newLock } }
              });
              setAttemptsLeft(Math.max(0, newLeft));
              if (newLock) { setIsLocked(true); setLockedUntil(newLock); }
            }
          }
        } catch (e) { console.error(e); } finally { setIsSavingRecord(false); setShowResults(true); }
      }
    }
  };

  if (!level) return null;
  if (!isAuthorized || checkingAttempts) return null;

  // --- PANTALLA DE RESULTADOS ---
  if (showResults) {
    const isApproved = score >= Math.ceil(shuffledQuestions.length * 0.8);
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl text-center border border-slate-100">
          {isApproved ? <Trophy size={64} className="mx-auto mb-6 text-amber-500" /> : <AlertCircle size={64} className="mx-auto mb-6 text-red-500" />}
          <h2 className="text-3xl font-black text-slate-900 mb-2">{isApproved ? "¡Nivel Aprobado!" : "Sigue Intentando"}</h2>
          <p className="text-slate-500 mb-8 font-medium">Lograste <span className="text-emerald-600 font-black">{score}</span> de {shuffledQuestions.length} correctas.</p>
          <div className="space-y-3">
            {!isApproved && !isLocked && (
              <button onClick={() => window.location.reload()} className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2">
                <RotateCcw size={20} /> REINTENTAR ({attemptsLeft} INTENTOS)
              </button>
            )}
            {!isApproved && isLocked && (
              <Link href={`/guias/nivel-${levelId}`} className="block w-full bg-red-600 text-white font-black py-4 rounded-2xl text-center uppercase text-sm">
                REPASAR GUÍA PARA DESBLOQUEAR
              </Link>
            )}
            <Link href="/quiz/pro" className="block w-full bg-slate-100 text-slate-600 font-black py-4 rounded-2xl text-center uppercase text-sm">
              {isApproved ? "CONTINUAR RUTA PRO" : "VOLVER AL MENÚ"}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // --- PANTALLA DE INICIO (PRE-QUIZ) ---
  if (!quizStarted) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl border border-slate-100">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            {isLocked ? <Lock size={40} /> : <ShieldCheck size={40} />}
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">{level.title}</h2>
          <div className="space-y-4 mb-8 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-slate-600">
             <div className="flex items-center gap-3"><Clock size={18} className="text-emerald-500" /> Tiempo: {durationMins(levelId)}:00 min</div>
             <div className="flex items-center gap-3"><BookOpen size={18} className="text-emerald-500" /> Preguntas: {level.questions.length}</div>
             {!isLocked && <div className="flex items-center gap-3 border-t pt-3 mt-3"><RotateCcw size={18} className="text-blue-500" /> Intentos: {attemptsLeft}</div>}
          </div>
          {isLocked ? (
             <div className="space-y-4">
                <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm font-bold">Bloqueado hasta: {lockedUntil?.toLocaleString()}</div>
                <Link href={`/guias/nivel-${levelId}`} className="block w-full bg-slate-900 text-white font-black py-4 rounded-2xl text-center">REPASAR GUÍA</Link>
             </div>
          ) : (
            <button onClick={startQuizWithShuffle} className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl uppercase tracking-widest shadow-lg shadow-emerald-100">Iniciar Examen</button>
          )}
          <Link href="/quiz/pro" className="block mt-6 text-slate-400 font-bold text-sm uppercase tracking-widest">Abandonar</Link>
        </div>
      </main>
    );
  }

  // --- VISTA DEL EXAMEN ACTIVO ---
  const q = shuffledQuestions[currentQuestion];
  const getLetter = (index) => String.fromCharCode(65 + index) + ")";

  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">PREGUNTA {currentQuestion + 1} DE {shuffledQuestions.length}</div>
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
                {/* AQUÍ APLICAMOS EL CTO FIX PARA LIMPIAR EL TEXTO */}
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
              {isSavingRecord ? "GUARDANDO..." : (currentQuestion + 1 === shuffledQuestions.length ? "FINALIZAR EXAMEN" : "CONTINUAR")}
              {!isSavingRecord && <ArrowRight size={22} />}
            </button>
          </div>
        )}
      </div>
      <footer className="fixed bottom-4 w-full text-center text-[10px] font-black text-slate-300 uppercase tracking-widest">AuxiliarPro v4.0 | &lt; macz.dev /&gt;</footer>
    </main>
  );
}