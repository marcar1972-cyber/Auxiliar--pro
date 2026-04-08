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
  const [quizQuestions, setQuizQuestions] = useState([]);
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

  // --- AUTH ---
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            const isAdmin = currentUser.email === "marcar1972@gmail.com";
            
            // --- LÓGICA DEL PORTERO (GATING) ---
            const pasoInicialCompleto = (data.unlockedLevels && data.unlockedLevels.length > 7);
            const esUsuarioFundador = (data.unlockedLevelsPro && data.unlockedLevelsPro.length > 1);

            if (!isAdmin && !pasoInicialCompleto && !esUsuarioFundador) {
                router.push('/quiz/pro'); 
                return;
            }
            // ------------------------------------

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

  // --- LÓGICA DE INICIO NORMAL (SIN SHUFFLE) ---
  const startQuiz = () => {
    // Cargamos las preguntas tal como vienen en el JSON para no romper las opciones "A y B son correctas"
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
      
      // MODO DIOS: Si el admin está logueado, siempre aprueba.
      const isAdmin = user?.email === "marcar1972@gmail.com";
      const isApproved = score >= Math.ceil(quizQuestions.length * 0.8) || isAdmin;
      
      // Solo actualizamos Firebase si aprobó (o es admin), para desbloquear el siguiente nivel
      if (user && isApproved) {
        try {
          const userRef = doc(db, "users", user.uid);
          await updateDoc(userRef, {
            unlockedLevelsPro: arrayUnion(levelId + 1)
          });
        } catch (e) { console.error(e); } 
      }
      setIsSavingRecord(false); 
      setShowResults(true);
    }
  };

  if (!level) return null;
  if (!isAuthorized) return null;

  // --- PANTALLA DE RESULTADOS ---
  if (showResults) {
    // MODO DIOS: Reflejar la aprobación en la UI para el admin.
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
                <RotateCcw size={20} /> REINTENTAR
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

  // --- PANTALLA DE INICIO (PRE-QUIZ) ---
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
             <div className="flex items-center gap-3 border-t pt-3 mt-3 text-blue-500"><RotateCcw size={18} /> Intentos Ilimitados</div>
          </div>
          <button onClick={startQuiz} className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl uppercase tracking-widest shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-colors">
            Iniciar Examen
          </button>
          <Link href="/quiz/pro" className="block mt-6 text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-slate-600 transition-colors">Abandonar</Link>
        </div>
      </main>
    );
  }

  // --- VISTA DEL EXAMEN ACTIVO ---
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