"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../quizData/index"; 
import Link from "next/link";
import { 
  Lock, CheckCircle, XCircle, ChevronLeft, Clock, 
  ShieldCheck, Trophy, Loader2, Library, MessageCircle, 
  Users, ThumbsUp, OctagonAlert, GraduationCap, BookOpen, Scale, ThermometerSnowflake,
  AlertCircle
} from "lucide-react"; 

import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

// Mapeador de iconos para los niveles
const iconMap = {
  BookOpen: <BookOpen size={32} />,
  Scale: <Scale size={32} />,
  ThermometerSnowflake: <ThermometerSnowflake size={32} />,
  GraduationCap: <GraduationCap size={32} />,
};

export default function QuizPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [savingData, setSavingData] = useState(false);

  // ESTADOS DEL JUEGO
  const [unlockedLevels, setUnlockedLevels] = useState([1]); 
  const [activeLevelId, setActiveLevelId] = useState(null);  
  const [currentQIndex, setCurrentQIndex] = useState(0);      
  const [score, setScore] = useState(0);                      
  const [showResult, setShowResult] = useState(false);        
  const [selectedOption, setSelectedOption] = useState(null); 
  const [isAnswered, setIsAnswered] = useState(false);        
  const [mistakes, setMistakes] = useState([]); 
  const [timeLeft, setTimeLeft] = useState(0); 
  const [showGrandFinale, setShowGrandFinale] = useState(false); 
  const [showRulesModal, setShowRulesModal] = useState(false);

  // --- 1. SINCRONIZACIÓN FIREBASE ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (!currentUser) {
            router.push("/login");
        } else {
            setUser(currentUser);
            try {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists() && docSnap.data().unlockedLevels) {
                    setUnlockedLevels(docSnap.data().unlockedLevels);
                } else {
                    await setDoc(docRef, { 
                        email: currentUser.email,
                        unlockedLevels: [1],
                        createdAt: serverTimestamp()
                    }, { merge: true });
                }
            } catch (error) {
                console.error("Error cargando progreso:", error);
            }
            setLoadingAuth(false);
        }
    });
    return () => unsubscribe();
  }, [router]);

  // --- 2. MOTOR DEL CRONÓMETRO (CON CORRECCIÓN DE TIEMPOS) ---
  useEffect(() => {
    // Solo activar si hay tiempo límite (Niveles 2, 3 y 4)
    if (activeLevelId && !showResult && timeLeft > 0) {
        const timerId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerId);
                    setShowResult(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerId);
    }
  }, [activeLevelId, showResult, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --- 3. LÓGICA DE NAVEGACIÓN ---
  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      const level = LEVELS.find(l => l.id === levelId);
      if (!level) return;
      setActiveLevelId(levelId);
      setCurrentQIndex(0);
      setScore(0);
      setShowResult(false);
      setSelectedOption(null);
      setIsAnswered(false);
      setMistakes([]);
      
      // Asignación de tiempos solicitados
      // Nivel 1: 0 (Sin tiempo) | Nivel 2: 1200 (20m) | Nivel 3: 1800 (30m) | Nivel 4: 3600 (60m)
      setTimeLeft(level.timeLimit); 
    }
  };

  const returnToMenu = () => {
    setShowResult(false);      
    setActiveLevelId(null);    
    setShowGrandFinale(false);
  };

  const handleAnswer = (optionIndex) => {
    if (isAnswered) return;
    const level = LEVELS.find(l => l.id === activeLevelId);
    const question = level.questions[currentQIndex];
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === question.correctIndex) {
      setScore((prev) => prev + 1);
    } else {
      setMistakes(prev => [...prev, {
        question: question.text,
        yourAnswer: question.options[optionIndex],
        correctAnswer: question.options[question.correctIndex],
        studyGuide: question.studyGuide
      }]);
    }

    setTimeout(() => {
      if (currentQIndex + 1 < level.questions.length) {
          setCurrentQIndex(prev => prev + 1);
          setIsAnswered(false);
          setSelectedOption(null);
      } else {
          setShowResult(true);
      }
    }, 1200); 
  };

  // --- 4. GUARDADO DE PROGRESO ---
  useEffect(() => {
    const saveProgress = async () => {
        if (showResult && activeLevelId && user) {
            const level = LEVELS.find(l => l.id === activeLevelId);
            const passed = score >= level.passingScore;
            setSavingData(true);

            try {
                const userRef = doc(db, "users", user.uid);
                await updateDoc(userRef, {
                    quizHistory: arrayUnion({
                        levelId: activeLevelId,
                        score: score,
                        totalQuestions: level.questions.length,
                        passed: passed,
                        date: new Date().toISOString()
                    })
                });

                if (passed) {
                    const nextLevelId = activeLevelId + 1;
                    if (LEVELS.find(l => l.id === nextLevelId)) {
                        if (!unlockedLevels.includes(nextLevelId)) {
                            setUnlockedLevels(prev => [...prev, nextLevelId]);
                            await updateDoc(userRef, {
                                unlockedLevels: arrayUnion(nextLevelId)
                            });
                        }
                    } else if (activeLevelId === 4) {
                        setShowGrandFinale(true);
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            }
            setSavingData(false);
        }
    };
    saveProgress();
  }, [showResult]);

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  // --- VISTA: EXAMEN ACTIVO ---
  if (activeLevelId && !showResult) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    const question = level?.questions[currentQIndex];

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans text-left">
        <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="w-full bg-slate-100 h-3">
                <div className="bg-emerald-500 h-3 transition-all duration-500" style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}></div>
            </div>
            <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Pregunta {currentQIndex + 1} de {level.questions.length}</span>
                    {timeLeft > 0 ? (
                        <div className="bg-slate-100 px-4 py-2 rounded-full font-mono font-bold text-slate-600 flex items-center gap-2">
                          <Clock size={16} className="text-emerald-500"/> {formatTime(timeLeft)}
                        </div>
                    ) : (
                        <div className="bg-emerald-50 px-4 py-2 rounded-full font-bold text-emerald-600 text-[10px] uppercase tracking-wider">
                          Sin tiempo (Práctica)
                        </div>
                    )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 leading-tight">{question.text}</h2>
                <div className="space-y-4">
                    {question.options.map((opt, idx) => {
                        let style = "bg-slate-50 border-slate-100 text-slate-600 hover:border-emerald-500 hover:bg-emerald-50";
                        if (isAnswered) {
                            if (idx === question.correctIndex) style = "bg-green-50 border-green-500 text-green-700 shadow-sm";
                            else if (idx === selectedOption) style = "bg-red-50 border-red-500 text-red-700";
                            else style = "opacity-40 grayscale";
                        }
                        return (
                            <button key={idx} onClick={() => handleAnswer(idx)} disabled={isAnswered} className={`w-full text-left p-5 rounded-2xl border-2 font-bold transition-all duration-200 flex items-center gap-4 ${style}`}>
                                <span className="w-8 h-8 rounded-lg bg-white border border-inherit flex items-center justify-center text-sm">{["A","B","C","D"][idx]}</span>
                                <span className="flex-1">{opt}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
        <button onClick={returnToMenu} className="mt-8 text-slate-400 font-bold hover:text-red-500 transition-colors">Abandonar Examen</button>
      </div>
    );
  }

  // --- VISTA: RESULTADOS ---
  if (showResult) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    const passed = score >= level.passingScore;
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 font-sans text-left">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-lg w-full border border-white">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${passed ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
                    {passed ? <CheckCircle size={48} /> : <XCircle size={48} />}
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight text-center">{passed ? "¡Nivel Superado!" : "Sigue Practicando"}</h2>
                <p className="text-slate-500 text-lg mb-8 font-medium text-center">Lograste {score} de {level.questions.length} correctas</p>
                
                {mistakes.length > 0 && (
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left mb-8 max-h-60 overflow-y-auto">
                        <p className="text-xs font-black text-slate-400 uppercase mb-4 tracking-widest">Revisión técnica:</p>
                        {mistakes.map((m, i) => (
                            <div key={i} className="mb-6 last:mb-0 border-b border-slate-200 pb-4 last:border-0">
                                <p className="font-bold text-slate-800 mb-2 text-sm
