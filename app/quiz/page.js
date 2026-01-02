"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../data"; 
import Link from "next/link";
import { Lock, Play, CheckCircle, XCircle, ChevronLeft, ArrowRight, AlertCircle, FileText, Library, MessageCircle, HelpCircle, Clock, ShieldCheck, Trophy, Loader2, Users, ThumbsUp, OctagonAlert } from "lucide-react"; // Agregué OctagonAlert para el icono de peligro

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

  // --- 1. EL PORTERO: PROTECCIÓN Y CARGA ---
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

  // --- CRONÓMETRO ---
  useEffect(() => {
    if (activeLevelId && !showResult && timeLeft > 0) {
        const timerId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerId);
                    handleGlobalTimeOut(); 
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerId);
    }
  }, [activeLevelId, showResult]);

  const handleGlobalTimeOut = () => setShowResult(true);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --- LÓGICA JUEGO ---
  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      const level = LEVELS.find(l => l.id === levelId);
      setActiveLevelId(levelId);
      resetGame(level.timeLimit); 
    }
  };

  const resetGame = (initialTime = 0) => {
    setCurrentQIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setMistakes([]);
    setTimeLeft(initialTime); 
  };

  const returnToMenu = () => {
    setShowResult(false);      
    setActiveLevelId(null);    
    setScore(0);                
    setCurrentQIndex(0);        
    setIsAnswered(false); 
    setMistakes([]);      
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

  const handleAnswer = (optionIndex, correctIndex, questionText, options, studyGuide) => {
    if (isAnswered) return; 
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === correctIndex) {
      setScore((prev) => prev + 1);
    } else {
      setMistakes(prev => [...prev, {
        id: currentQIndex,
        question: questionText,
        yourAnswer: options[optionIndex],
        correctAnswer: options[correctIndex],
        studyGuide: studyGuide 
      }]);
    }
    setTimeout(nextQuestion, 1000); 
  };

  const getCurrentLevel = () => LEVELS.find((l) => l.id === activeLevelId);

  // --- GRABADORA FIREBASE ---
  useEffect(() => {
    const saveProgressToFirebase = async () => {
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
                    const nextLevel = activeLevelId + 1;
                    if (LEVELS.find(l => l.id === nextLevel)) {
                        if (!unlockedLevels.includes(nextLevel)) {
                            setUnlockedLevels(prev => [...prev, nextLevel]);
                            await updateDoc(userRef, {
                                unlockedLevels: arrayUnion(nextLevel)
                            });
                        }
                    }
                }
            } catch (error) {
                console.error("Error guardando:", error);
            }
            setSavingData(false);
        }
    };
    saveProgressToFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResult, score, activeLevelId]);

  // FUNCIÓN PARA UNIRSE AL GRUPO - ENLACE ACTUALIZADO
  const handleJoinWhatsapp = () => {
      window.open("https://chat.whatsapp.com/Gm30JCRLvx9HoSZ4JTipQX", "_blank");
      setShowRulesModal(false);
  };

  // --- VISTAS ---

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-aux-green" size={48} /></div>;

  // 1. GRAND FINALE
  if (showGrandFinale) {
      return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center font-sans relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl max-w-md w-full text-white">
                <Trophy size={64} className="text-yellow-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
                <h1 className="text-3xl font-black mb-4">¡CERTIFICADO!</h1>
                <p className="mb-8 text-slate-300">Has dominado todos los niveles de AuxiliarPro.</p>
                <button onClick={returnToMenu} className="bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl w-full hover:bg-emerald-400 transition-colors">Volver al Menú</button>
            </div>
        </div>
      );
  }

  // 2. JUGANDO
  if (activeLevelId && !showResult) {
    const level = getCurrentLevel();
    if (!level) return null;
    const question = level.questions[currentQIndex];

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full bg-slate-100 h-2">
                <div className="bg-aux-green h-2 transition-all" style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}></div>
            </div>
            <div className="p-6">
                <div className="flex justify-between mb-6">
                    <span className="text-xs font-bold text-slate-400">PREGUNTA {currentQIndex + 1} / {level.questions.length}</span>
                    {level.timeLimit > 0 && <div className="font-mono font-bold text-slate-500 flex gap-1"><Clock size={16}/> {formatTime(timeLeft)}</div>}
                </div>
                <h2 className="text-xl font-black text-slate-800 mb-6">{question.text}</h2>
                <div className="space-y-3">
                    {question.options.map((opt, idx) => {
                        let style = "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100";
                        if (isAnswered) {
                            if (idx === question.correctIndex) style = "bg-green-100 border-green-500 text-green-800";
                            else if (idx === selectedOption) style = "bg-red-100 border-red-500 text-red-800";
                            else style = "opacity-50";
                        }
                        return (
                            <button key={idx} onClick={() => handleAnswer(idx, question.correctIndex, question.text, question.options, question.studyGuide)} disabled={isAnswered} className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all ${style}`}>
                                <div className="flex gap-3"><span className="font-bold">{["A","B","C","D"][idx]}</span>{opt}</div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
        <button onClick={returnToMenu} className="mt-6 text-slate-400 text-sm hover:text-red-500 underline">Salir</button>
      </div>
    );
  }

  // 3. RESULTADOS
  if (showResult) {
    const level = getCurrentLevel();
    const passed = score >= level.passingScore;
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full">
                {savingData && <p className="text-xs text-blue-500 mb-2 animate-pulse">Guardando...</p>}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl ${passed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {passed ? <CheckCircle size={40} /> : <XCircle size={40} />}
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-2">{passed ? "¡APROBADO!" : "Sigue Practicando"}</h2>
                <p className="text-slate-500 mb-6">Puntaje: {score} / {level.questions.length}</p>
                
                {mistakes.length > 0 && (
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-left mb-6 max-h-40 overflow-y-auto">
                        <p className="text-xs font-bold text-red-700 mb-2">Errores cometidos:</p>
                        {mistakes.map((m, i) => (
                            <div key={i} className="mb-2 text-xs border-b border-red-100 pb-2 last:border-0">
                                <p className="font-bold text-slate-700">{m.question}</p>
                                <p className="text-red-500">Tuya: {m.yourAnswer}</p>
                                <p className="text-green-600">Correcta: {m.correctAnswer}</p>
                            </div>
                        ))}
                    </div>
                )}

                {passed ? (
                    <button onClick={returnToMenu} className="w-full bg-aux-dark text-white font-bold py-3 rounded-xl">Continuar</button>
                ) : (
                    <button onClick={() => resetGame(level.timeLimit)} className="w-full bg-aux-green text-white font-bold py-3 rounded-xl">Reintentar</button>
                )}
                {!passed && <button onClick={returnToMenu} className="mt-3 text-slate-400 text-sm">Volver</button>}
            </div>
        </div>
    );
  }

  // 4. MENÚ PRINCIPAL
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* HEADER */}
      <div className="bg-white p-4 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-aux-dark"><ChevronLeft size={24} /></Link>
        <h1 className="text-lg font-black text-aux-dark">Tu Ruta</h1>
      </div>

      <div className="p-6 max-w-md mx-auto space-y-6 mt-4">
        {/* BIENVENIDA */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6 flex items-center gap-3">
             {user?.photoURL ? (
                <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
             ) : (
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{user?.displayName?.[0]}</div>
             )}
             <div>
                <p className="text-xs text-blue-500 font-bold uppercase">Auxiliar en entrenamiento</p>
                <p className="text-sm text-blue-900 font-bold">{user?.displayName}, Nivel {unlockedLevels.length} alcanzado.</p>
             </div>
        </div>
        
        {/* NIVELES */}
        {LEVELS.map((level) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            const isPassed = unlockedLevels.includes(level.id + 1) || (level.id === 4 && unlockedLevels.includes(5)); 
            return (
                <div key={level.id} onClick={() => startLevel(level.id)} className={`relative overflow-hidden rounded-2xl border-2 transition-all p-6 flex items-center gap-4 ${isPassed ? "bg-emerald-50 border-emerald-200" : isUnlocked ? "bg-white border-white shadow-md hover:scale-[1.02]" : "bg-slate-100 opacity-60 grayscale"}`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${isPassed ? "bg-emerald-500 text-white" : isUnlocked ? "bg-emerald-100" : "bg-slate-300"}`}>
                        {isPassed ? <CheckCircle size={24} /> : (isUnlocked ? level.icon : <Lock size={20}/>)}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-black text-lg text-slate-800">{level.title}</h3>
                        <p className="text-xs text-slate-500">{level.qCount} Preguntas</p>
                    </div>
                </div>
            );
        })}

        {/* HERRAMIENTAS (FOOTER MENU) */}
        <div className="mt-8 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-center">Comunidad & Ayuda</h3>
            <div className="grid grid-cols-2 gap-4">
                <Link href="/biblioteca" className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-aux-green flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center"><Library size={18} /></div>
                    <span className="text-xs font-bold text-slate-600">Biblioteca</span>
                </Link>

                {/* BOTÓN WHATSAPP CON MODAL */}
                <button onClick={() => setShowRulesModal(true)} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-aux-green flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center"><MessageCircle size={18} /></div>
                    <span className="text-xs font-bold text-slate-600">Foro WhatsApp</span>
                </button>
            </div>
        </div>
      </div>

      {/* --- MODAL DE REGLAS DE CONVIVENCIA --- */}
      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white text-center">
                    <Users size={48} className="mx-auto mb-2 opacity-90" />
                    <h2 className="text-2xl font-black">Comunidad Auxiliar Pro</h2>
                    <p className="text-pink-100 text-sm">Normas del Grupo</p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex gap-3 items-start">
                        <ShieldCheck className="text-green-500 shrink-0 mt-1" size={20} />
                        <p className="text-sm text-slate-600"><strong>Respeto ante todo:</strong> Somos colegas ayudándonos. Cero tolerancia al bullying.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                        <p className="text-sm text-slate-600"><strong>No Spam:</strong> Prohibido vender cursos externos, mensajes masivos o publicidad no autorizada.</p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <Clock className="text-blue-500 shrink-0 mt-1" size={20} />
                        <p className="text-sm text-slate-600"><strong>Horario:</strong> Intenta escribir en horas prudentes.</p>
                    </div>

                    {/* --- AVISO DE ELIMINACIÓN --- */}
                    <div className="flex gap-2 items-center justify-center bg-red-50 p-2 rounded-lg border border-red-100">
                         <OctagonAlert className="text-red-500" size={16} />
                         <p className="text-[10px] font-bold text-red-600 text-center">
                            Quien no respete estas normas será eliminado.
                         </p>
                    </div>
                    
                    <button onClick={handleJoinWhatsapp} className="w-full bg-aux-dark text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 mt-2">
                        <ThumbsUp size={20} /> Acepto y Unirme
                    </button>
                    <button onClick={() => setShowRulesModal(false)} className="w-full text-slate-400 text-sm font-bold py-2">Cancelar</button>
                </div>
            </div>
        </div>
      )}

    </main>
  );
}
