"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRO_LEVELS } from "../../../quizData/index"; 
import { 
  ChevronLeft, CheckCircle, XCircle, ArrowRight, Trophy, 
  RotateCcw, BookOpen, Clock, AlertCircle, ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { auth, db } from "../../../firebase/config";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

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
  const [isAuthorized, setIsAuthorized] = useState(false); // Estado para controlar si renderizamos o no

  // --- LÓGICA DE TIEMPOS ESTRATÉGICA MACZDEV ---
  const getDurationByLevel = (id) => {
    const map = {
      1: 20, // Zafiro
      2: 25, // Rubí
      3: 30, // Esmeralda
      4: 40, // Amatista
      5: 45, // Topacio
      6: 50, // Ópalo
      7: 60  // Diamante
    };
    return map[id] || 15;
  };

  const durationMins = getDurationByLevel(levelId);
  const [timeLeft, setTimeLeft] = useState(durationMins * 60);

  useEffect(() => {
    if (!quizStarted || showResults || !isAuthorized) return; 

    if (timeLeft <= 0) {
      setShowResults(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
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
        
        // --- PROTECCIÓN ESTRICTA CONTRA BYPASS POR URL EN TODO EL MODO PRO ---
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            const isPro = data.isPro || false;
            const isAdmin = currentUser.email === "marcar1972@gmail.com";
            const proUntil = data.proUntil ? data.proUntil.toDate() : null;
            const hasActiveSubscription = isAdmin || isPro || (proUntil && new Date() <= proUntil);
            const IS_LAUNCH_DAY = new Date() > new Date("2026-03-31T23:59:59");
            
            // Si ya fue el lanzamiento y NO tiene suscripción activa, se va a planes, sin importar si es el Nivel 1.
            if (IS_LAUNCH_DAY && !hasActiveSubscription) {
              router.push('/planes');
              return; // Detenemos aquí
            }
            
            // Si pasó las validaciones, está autorizado
            setUser(currentUser);
            setIsAuthorized(true);

          } else {
            router.push('/planes');
          }
        } catch (e) {
          console.error("Error validando acceso PRO:", e);
          router.push('/planes');
        }
      } else {
        setUser(null);
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!level) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-xl font-bold text-slate-800">Nivel no encontrado</h1>
        <Link href="/quiz/pro" className="mt-4 text-emerald-600 underline">Volver al Simulador PRO</Link>
      </div>
    );
  }

  // Prevenir parpadeo de contenido mientras valida la suscripción
  if (!isAuthorized) {
    return null; 
  }

  if (!quizStarted) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full shadow-2xl text-center border border-slate-100">
          <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">{level.title}</h2>
          <div className="space-y-4 mb-10 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 text-slate-600 font-bold">
              <Clock size={18} className="text-emerald-500" /> Tiempo: {durationMins}:00 min
            </div>
            <div className="flex items-center gap-3 text-slate-600 font-bold">
              <BookOpen size={18} className="text-emerald-500" /> Preguntas: {level.questions.length}
            </div>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => setQuizStarted(true)} 
              className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 uppercase tracking-widest"
            >
              Iniciar Examen
            </button>
            <Link 
              href="/quiz/pro" 
              className="block w-full bg-slate-100 text-slate-500 font-bold py-4 rounded-2xl hover:bg-slate-200 transition-all uppercase text-sm"
            >
              Abandonar / Volver
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleAnswer = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === level.questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = async () => {
    if (currentQuestion + 1 < level.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      if (user && score + (selectedOption === level.questions[currentQuestion].correctAnswer ? 1 : 0) === level.questions.length) {
        try {
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, {
            unlockedLevelsPro: arrayUnion(levelId + 1)
          });
        } catch (e) {
          console.error("Error guardando progreso PRO:", e);
        }
      }
    }
  };

  if (showResults) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full shadow-2xl text-center border border-slate-100">
          <Trophy size={64} className="mx-auto mb-6 text-yellow-500" />
          <h2 className="text-3xl font-black text-slate-900 mb-2">¡Cuestionario PRO Terminado!</h2>
          <p className="text-slate-500 mb-8 font-medium">Lograste <span className="text-emerald-600 font-black">{score}</span> de <span className="text-slate-900 font-black">{level.questions.length}</span> correctas.</p>
          <div className="space-y-3">
            <button onClick={() => window.location.reload()} className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2">
              <RotateCcw size={20} /> REINTENTAR
            </button>
            <Link href="/quiz/pro" className="block w-full bg-slate-100 text-slate-600 font-black py-4 rounded-2xl text-center">
              VOLVER AL MENÚ PRO
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const q = level.questions[currentQuestion];

  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
          PREGUNTA {currentQuestion + 1} DE {level.questions.length}
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full font-black text-sm border border-emerald-100 shadow-sm">
          <Clock size={16} />
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6 mt-4">
        <h2 className="text-3xl font-black text-slate-900 mb-10 leading-tight">
          {q.question}
        </h2>
        
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
              <span className="flex-1 pr-4">{option}</span>
              {isAnswered && index === q.correctAnswer && <CheckCircle className="text-emerald-500 shrink-0" />}
              {isAnswered && index === selectedOption && index !== q.correctAnswer && <XCircle className="text-red-500 shrink-0" />}
            </button>
          ))}
        </div>

        {isAnswered ? (
          <div className="mt-10 animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 mb-8 shadow-inner">
              <h4 className="font-black text-slate-900 flex items-center gap-2 mb-2 uppercase text-xs tracking-tighter">
                <BookOpen size={16} /> Explicación Técnica
              </h4>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">{q.explanation}</p>
            </div>
            <button onClick={nextQuestion} className="w-full bg-slate-900 text-white font-black py-6 rounded-[2rem] shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 text-lg">
              {currentQuestion + 1 === level.questions.length ? "FINALIZAR EXAMEN" : "CONTINUAR"} <ArrowRight size={22} />
            </button>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <Link href="/quiz/pro" className="text-slate-400 font-bold hover:text-red-500 transition-colors text-sm uppercase tracking-widest">
              Abandonar Examen
            </Link>
          </div>
        )}
      </div>

      <footer className="fixed bottom-4 w-full text-center">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
          AuxiliarPro v3.0 Engine | &lt; macz.dev /&gt;
        </p>
      </footer>
    </main>
  );
}