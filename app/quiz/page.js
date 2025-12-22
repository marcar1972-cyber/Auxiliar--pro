"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// --- AJUSTE LÍNEA 5: APUNTANDO A LA NUEVA CARPETA MODULAR ---
import { LEVELS } from "../quizData/index"; 
import Link from "next/link";
import { 
  Lock, CheckCircle, XCircle, ChevronLeft, Clock, 
  ShieldCheck, Trophy, Loader2, Library, MessageCircle, 
  Users, ThumbsUp, OctagonAlert 
} from "lucide-react"; 

import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

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

  // ESTADO PARA EL MODAL DE REGLAS (WHATSAPP)
  const [showRulesModal, setShowRulesModal] = useState(false);

  // --- 1. SINCRONIZACIÓN CON FIREBASE ---
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

  // --- 2. MOTOR DEL CRONÓMETRO ---
  useEffect(() => {
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

  // --- 3. LÓGICA DEL JUEGO ---
  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      const level = LEVELS.find(l => l.id === levelId);
      setActiveLevelId(levelId);
      setCurrentQIndex(0);
      setScore(0);
      setShowResult(false);
      setSelectedOption(null);
      setIsAnswered(false);
      setMistakes([]);
      setTimeLeft(level.timeLimit || 600); 
    }
  };

  const resetGame = () => {
    const level = getCurrentLevel();
    startLevel(level.id);
  };

  const returnToMenu = () => {
    setShowResult(false);      
    setActiveLevelId(null);    
    setShowGrandFinale(false);
  };

  const nextQuestion = () => {
    const level = getCurrentLevel();
    if (level && currentQIndex + 1 < level.questions.length) {
        setCurrentQIndex(prev => prev + 1);
        setIsAnswered(false);
        setSelectedOption(null);
    } else {
        setShowResult(true);
    }
  };

  const handleAnswer = (optionIndex) => {
    if (isAnswered) return;
    const level = getCurrentLevel();
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
    setTimeout(nextQuestion, 1200); 
  };

  const getCurrentLevel = () => LEVELS.find((l) => l.id === activeLevelId);

  // --- 4. GUARDADO AUTOMÁTICO DE PROGRESO ---
  useEffect(() => {
    const saveProgress = async () => {
        if (showResult && activeLevelId && user) {
            const level = getCurrentLevel();
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
                console.error("Error al guardar:", error);
            }
            setSavingData(false);
        }
    };
    saveProgress();
  }, [showResult]);

  const handleJoinWhatsapp = () => {
      window.open("https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz", "_blank");
      setShowRulesModal(false);
  };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  // --- VISTA: FINAL DE LA RUTA ---
  if (showGrandFinale) {
      return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-50"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 shadow-2xl max-w-md w-full text-white">
                <Trophy size={80} className="text-yellow-400 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]" />
                <h1 className="text-4xl font-black mb-4 tracking-tighter">¡Ruta Completada!</h1>
                <p className="mb-8 text-slate-300">Has demostrado tener los conocimientos técnicos para ser un Auxiliar de Farmacia de excelencia.</p>
                <button onClick={returnToMenu} className="bg-emerald-500 text-white font-bold py-4 px-8 rounded-2xl w-full hover:bg-emerald-400 transition-all shadow-lg">Regresar al Inicio</button>
            </div>
        </div>
      );
  }

  // --- VISTA: EL EXAMEN (JUGANDO) ---
  if (activeLevelId && !showResult) {
    const level = getCurrentLevel();
    const question = level.questions[currentQIndex];

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="w-full bg-slate-100 h-3">
                <div className="bg-emerald-500 h-3 transition-all duration-500" style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}></div>
            </div>
            <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-10">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Pregunta {currentQIndex + 1} de {level.questions.length}</span>
                    <div className="bg-slate-100 px-4 py-2 rounded-full font-mono font-bold text-slate-600 flex items-center gap-2">
                      <Clock size={16} className="text-emerald-500"/> {formatTime(timeLeft)}
                    </div>
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
    const level = getCurrentLevel();
    const passed = score >= level.passingScore;
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-lg w-full border border-white">
                {savingData && <p className="text-xs text-blue-500 mb-4 animate-pulse font-bold tracking-widest uppercase">Sincronizando con la nube...</p>}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${passed ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
                    {passed ? <CheckCircle size={48} /> : <XCircle size={48} />}
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">{passed ? "¡EXAMEN APROBADO!" : "REPROBADO"}</h2>
                <p className="text-slate-500 text-lg mb-8 font-medium">Lograste {score} de {level.questions.length} correctas</p>
                
                {mistakes.length > 0 && (
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left mb-8 max-h-60 overflow-y-auto">
                        <p className="text-xs font-black text-slate-400 uppercase mb-4 tracking-widest">Revisión de Errores:</p>
                        {mistakes.map((m, i) => (
                            <div key={i} className="mb-6 last:mb-0 border-b border-slate-200 pb-4 last:border-0">
                                <p className="font-bold text-slate-800 mb-2 text-sm leading-snug">{m.question}</p>
                                <div className="space-y-1">
                                  <p className="text-xs text-red-500 font-bold">Tu respuesta: {m.yourAnswer}</p>
                                  <p className="text-xs text-emerald-600 font-bold">Correcta: {m.correctAnswer}</p>
                                  <p className="text-xs text-slate-500 mt-2 bg-white p-2 rounded-lg border border-slate-100 italic">{m.studyGuide}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex flex-col gap-3">
                  <button onClick={passed ? returnToMenu : resetGame} className={`w-full font-black py-5 rounded-2xl shadow-lg transition-transform active:scale-95 ${passed ? "bg-slate-900 text-white" : "bg-emerald-500 text-white"}`}>
                    {passed ? "Continuar a la Ruta" : "Reintentar Examen"}
                  </button>
                  <button onClick={returnToMenu} className="py-4 text-slate-400 font-bold text-sm">Cerrar</button>
                </div>
            </div>
        </div>
    );
  }

  // --- VISTA: MENÚ PRINCIPAL (RUTA) ---
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-slate-400 hover:text-slate-900 transition-colors"><ChevronLeft size={28} /></Link>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter">Mi Ruta de Certificación</h1>
        </div>
        <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-full">
           <Trophy size={18} className="text-yellow-500"/>
           <span className="text-sm font-black text-slate-700">{unlockedLevels.length - 1} / 4</span>
        </div>
      </div>

      <div className="p-6 max-w-xl mx-auto space-y-8 mt-6">
        {/* PERFIL DEL ALUMNO */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5">
             <div className="relative">
                {user?.photoURL ? (
                    <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-2xl border-4 border-slate-50 shadow-md" />
                ) : (
                    <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-emerald-200">{user?.displayName?.[0]}</div>
                )}
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-lg border-2 border-white"><ShieldCheck size={14}/></div>
             </div>
             <div>
                <p className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em]">Auxiliar en formación</p>
                <h2 className="text-xl font-black text-slate-900 leading-none mb-1">{user?.displayName}</h2>
                <p className="text-xs text-slate-400 font-medium italic">Faltan {4 - (unlockedLevels.length - 1)} niveles para tu credencial.</p>
             </div>
        </div>
        
        {/* LISTADO DE NIVELES */}
        <div className="space-y-4">
          {LEVELS.map((level) => {
              const isUnlocked = unlockedLevels.includes(level.id);
              const isPassed = unlockedLevels.includes(level.id + 1) || (level.id === 4 && unlockedLevels.length > 4); 
              return (
                  <button 
                    key={level.id} 
                    onClick={() => startLevel(level.id)} 
                    disabled={!isUnlocked}
                    className={`w-full group relative overflow-hidden rounded-[2rem] border-2 transition-all p-6 flex items-center gap-6 ${
                      isPassed ? "bg-emerald-50 border-emerald-100" : 
                      isUnlocked ? "bg-white border-white shadow-xl hover:translate-y-[-4px]" : 
                      "bg-slate-100 border-transparent opacity-60 grayscale"
                    }`}
                  >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-inner transition-transform group-hover:scale-110 ${isPassed ? "bg-emerald-500 text-white" : isUnlocked ? "bg-slate-900 text-white" : "bg-slate-300 text-slate-400"}`}>
                          {isPassed ? <CheckCircle size={32} /> : (isUnlocked ? level.icon : <Lock size={28}/>)}
                      </div>
                      <div className="text-left">
                          <h3 className="font-black text-lg text-slate-800 leading-tight">{level.title}</h3>
                          <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${isPassed ? "text-emerald-500" : isUnlocked ? "text-blue-500" : "text-slate-400"}`}>
                            {isPassed ? "Nivel Dominado" : isUnlocked ? "Disponible" : "Bloqueado"}
                          </p>
                      </div>
                  </button>
              );
          })}
        </div>

        {/* COMUNIDAD WHATSAPP */}
        <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-xl font-black text-white mb-2 italic">¿Dudas con la materia?</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">Únete a nuestro grupo de apoyo para auxiliares y técnicos. Resolvemos dudas de la SEREMI en comunidad.</p>
            <button 
              onClick={() => setShowRulesModal(true)} 
              className="bg-white text-slate-900 font-black py-4 px-8 rounded-2xl w-full flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-lg"
            >
              <MessageCircle size={20} className="text-pink-500"/> Entrar al Foro
            </button>
        </div>
      </div>

      {/* --- MODAL DE REGLAS WHATSAPP --- */}
      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-200">
            <div className="bg-white rounded-[3rem] shadow-2xl max-w-sm w-full overflow-hidden border border-white">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
                    <Users size={56} className="mx-auto mb-4 text-emerald-400" />
                    <h2 className="text-2xl font-black tracking-tighter leading-none mb-1">Comunidad Auxiliar Pro</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Reglamento de Honor</p>
                </div>
                <div className="p-8 space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><ShieldCheck size={20} /></div>
                        <p className="text-sm text-slate-600 leading-snug"><strong>Colaboración real:</strong> Estamos para ayudarnos a estudiar, no para generar spam.</p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="bg-red-100 p-2 rounded-lg text-red-600"><OctagonAlert size={20} /></div>
                        <p className="text-sm text-slate-600 leading-snug"><strong>Cero Tolerancia:</strong> Insultos o publicidad externa significan eliminación inmediata.</p>
                    </div>
                    
                    <button onClick={handleJoinWhatsapp} className="w-full bg-emerald-500 text-white font-black py-5 rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3 mt-4">
                        <ThumbsUp size={20} /> Acepto e Ingresar
                    </button>
                    <button onClick={() => setShowRulesModal(false)} className="w-full text-slate-400 text-sm font-bold py-2">Volver</button>
                </div>
            </div>
        </div>
      )}
    </main>
  );
}
