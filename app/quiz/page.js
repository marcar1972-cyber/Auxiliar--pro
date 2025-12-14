"use client";

import { useState, useEffect } from "react";
import { LEVELS } from "../data"; 
import Link from "next/link";
import { Lock, Play, CheckCircle, XCircle, ChevronLeft, RefreshCcw, ArrowRight, AlertCircle, FileText, Library, MessageCircle, HelpCircle, Clock, Award, Star, ShieldCheck, Trophy, AlertTriangle } from "lucide-react";

export default function QuizPage() {
  // ESTADOS
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

  // --- CRONÓMETRO GLOBAL ---
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

  // LÓGICA DE APROBACIÓN
  useEffect(() => {
    if (showResult && activeLevelId) {
        const level = getCurrentLevel();
        if (level && score >= level.passingScore) {
            const nextLevel = activeLevelId + 1;
            if (LEVELS.find(l => l.id === nextLevel) && !unlockedLevels.includes(nextLevel)) {
                setUnlockedLevels(prev => [...prev, nextLevel]);
            }
        }
    }
  }, [showResult, score, activeLevelId]);

  // --- VISTAS ---

  // 1. VISTA "PREMIUM" DE CERTIFICACIÓN
  if (showGrandFinale) {
      return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center font-sans relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-aux-green rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>

            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl max-w-md w-full text-white overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600"></div>
                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-30 rounded-full"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-2 border-yellow-500/50 shadow-xl mx-auto">
                        <Trophy size={48} className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                    </div>
                </div>
                <h2 className="text-sm font-bold text-yellow-400 tracking-[0.2em] uppercase mb-2">Entrenamiento Completado</h2>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                    Auxiliar Pro <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Certificado</span>
                </h1>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10 mb-8 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck className="text-emerald-400 shrink-0" size={24} />
                        <p className="text-left text-sm text-slate-300 font-medium">Dominio de Normativa Sanitaria (D.S. 466)</p>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <ShieldCheck className="text-emerald-400 shrink-0" size={24} />
                        <p className="text-left text-sm text-slate-300 font-medium">Manejo de Controlados (D.S. 404/405)</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="text-emerald-400 shrink-0" size={24} />
                        <p className="text-left text-sm text-slate-300 font-medium">Cálculo de Dosis y Posología</p>
                    </div>
                </div>
                <button onClick={returnToMenu} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/50 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                    <RefreshCcw size={18} /> Volver al Entrenamiento
                </button>
            </div>
            <p className="mt-8 text-slate-500 text-xs font-medium relative z-10">Este es un reconocimiento simbólico de tu preparación en AuxiliarPro.</p>
        </div>
      );
  }

  // 2. VISTA JUGANDO
  if (activeLevelId && !showResult) {
    const level = getCurrentLevel();
    if (!level) return <div className="p-10 text-center">Error: No encuentro el Nivel {activeLevelId}</div>;
    const question = level.questions ? level.questions[currentQIndex] : null;
    if (!question) return <div className="p-10 text-center">Error de Datos. <button onClick={returnToMenu}>Volver</button></div>;

    let timerColor = "text-slate-500";
    if (timeLeft <= 60) timerColor = "text-orange-500";
    if (timeLeft <= 10) timerColor = "text-red-600 animate-pulse";

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full bg-slate-100 h-2">
                <div className="bg-aux-green h-2 transition-all duration-500" style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}></div>
            </div>
            <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pregunta {currentQIndex + 1} de {level.questions.length}</span>
                        <div className="flex gap-2 mt-1">
                            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Nivel {activeLevelId}</span>
                        </div>
                    </div>
                    {level.timeLimit > 0 ? (
                        <div className={`flex items-center gap-1 font-mono font-bold text-xl ${timerColor}`}>
                            <Clock size={20} />
                            <span>{formatTime(timeLeft)}</span>
                        </div>
                    ) : (
                        <div className="text-slate-300 text-xs font-bold flex items-center gap-1"><Clock size={14} /> Sin tiempo</div>
                    )}
                </div>
                <h2 className="text-xl font-black text-aux-dark mb-8 leading-tight">{question.text}</h2>
                <div className="space-y-3">
                    {question.options.map((opt, idx) => {
                        let btnColor = "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100";
                        if (isAnswered) {
                            if (idx === question.correctIndex) btnColor = "bg-green-100 border-green-500 text-green-800";
                            else if (idx === selectedOption) btnColor = "bg-red-100 border-red-500 text-red-800"; 
                            else btnColor = "opacity-50 grayscale";
                        }
                        return (
                            <button key={idx} onClick={() => handleAnswer(idx, question.correctIndex, question.text, question.options, question.studyGuide)} disabled={isAnswered} className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all duration-200 ${btnColor}`}>
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${idx === question.correctIndex && isAnswered ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'}`}>{["A", "B", "C", "D"][idx]}</div>
                                    {opt}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
        <button onClick={returnToMenu} className="mt-6 text-slate-400 text-sm hover:text-red-500 underline">Cancelar y Salir</button>
      </div>
    );
  }

  // 3. VISTA RESULTADOS
  if (showResult) {
    const level = getCurrentLevel();
    if (!level) { returnToMenu(); return null; }
    const passed = score >= level.passingScore;
    const isTimeout = timeLeft === 0 && level.timeLimit > 0;
    const isGrandFinaleReady = activeLevelId === 4 && passed;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 py-12">
            <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
                {isTimeout && (
                    <div className="mb-4 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-bold text-sm inline-flex items-center gap-2">
                        <Clock size={16} /> ¡Se acabó el tiempo!
                    </div>
                )}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-sm ${passed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {passed ? <CheckCircle size={40} /> : <XCircle size={40} />}
                </div>
                <h2 className="text-2xl font-black text-aux-dark mb-2">{passed ? "¡APROBADO!" : "Sigue Practicando"}</h2>
                <p className="text-slate-500 mb-6">Obtuviste <strong className={passed ? "text-green-600" : "text-red-600"}>{score}</strong> de <strong>{level.questions.length}</strong> puntos.</p>

                {mistakes.length > 0 && (
                    <div className="mb-8 text-left bg-red-50 p-4 rounded-xl border border-red-100">
                        <h3 className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2"><AlertCircle size={16} /> Revisa tus errores ({mistakes.length}):</h3>
                        <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                            {mistakes.map((mistake, i) => (
                                <div key={i} className="bg-white p-3 rounded-lg border border-red-100 shadow-sm text-xs">
                                    <p className="font-bold text-slate-700 mb-2">{mistake.question}</p>
                                    <div className="space-y-1 mb-3">
                                        <p className="text-red-500 flex items-center gap-1"><XCircle size={12} /> Tu respuesta: <span className="font-medium">{mistake.yourAnswer}</span></p>
                                        <p className="text-green-600 flex items-center gap-1"><CheckCircle size={12} /> Correcta: <span className="font-bold">{mistake.correctAnswer}</span></p>
                                    </div>
                                    {mistake.studyGuide && (
                                        <Link href={`/${mistake.studyGuide}`} target="_blank" className="block w-full bg-slate-50 border border-slate-200 text-slate-600 text-center py-2 rounded hover:bg-aux-green hover:text-white hover:border-aux-green transition-colors font-bold flex items-center justify-center gap-2">
                                            <FileText size={14} /> Repasar Material de Estudio
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="space-y-3">
                    {passed ? (
                        isGrandFinaleReady ? (
                            <button onClick={() => setShowGrandFinale(true)} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-black py-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 border-b-4 border-yellow-600">
                                <Trophy size={20} className="animate-bounce" /> RECLAMAR CERTIFICACIÓN
                            </button>
                        ) : (
                            <button onClick={returnToMenu} className="w-full bg-aux-dark text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                SIGUIENTE NIVEL <ArrowRight size={18} />
                            </button>
                        )
                    ) : (
                        <button onClick={() => resetGame(level.timeLimit)} className="w-full bg-aux-green text-white font-bold py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"><RefreshCcw size={18} /> INTENTAR DE NUEVO</button>
                    )}
                   {!passed && <button onClick={returnToMenu} className="w-full bg-white text-slate-500 font-bold py-3 rounded-xl border border-slate-200 hover:bg-slate-50">Volver al Menú</button>}
                </div>
            </div>
        </div>
    );
  }

  // 4. MENÚ PRINCIPAL
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-aux-dark"><ChevronLeft size={24} /></Link>
        <h1 className="text-lg font-black text-aux-dark">Tu Ruta de Aprendizaje</h1>
      </div>
      <div className="p-6 max-w-md mx-auto space-y-6 mt-4">
        
        {/* SALUDO DE BIENVENIDA */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6">
            <p className="text-sm text-blue-800 font-medium">{unlockedLevels.length === 1 ? "👋 Hola Colega: Completa el Nivel 1 para desbloquear el siguiente." : `🔥 ¡Llevas ${unlockedLevels.length - 1} niveles desbloqueados! Sigue así.`}</p>
        </div>

        {/* AVISO DE SEGURIDAD (CON MOVIMIENTO EN EL CUADRO COMPLETO) */}
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-6 flex gap-3 items-start animate-bounce">
            <div className="mt-0.5 text-amber-600 shrink-0">
                <AlertTriangle size={20} />
            </div>
            <div className="text-xs text-amber-800 leading-relaxed">
                <p className="font-bold mb-1">Aviso Importante sobre tu Progreso</p>
                <p>
                    Tu avance se guarda localmente en <strong>tu dispositivo</strong>. 
                    Si borras el historial/caché o cambias de navegador, perderás tus medallas. 
                    ¡Ten cuidado al limpiar tu equipo!
                </p>
            </div>
        </div>
        
        {LEVELS.map((level) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            const isPassed = unlockedLevels.includes(level.id + 1) || (level.id === 4 && unlockedLevels.includes(5)); 
            const isLevel4Completed = level.id === 4 && showGrandFinale; 

            return (
                <div key={level.id} onClick={() => startLevel(level.id)} className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${isPassed || isLevel4Completed ? "bg-emerald-50 border-emerald-200 cursor-pointer" : isUnlocked ? "bg-white border-aux-green/20 shadow-lg cursor-pointer hover:scale-[1.02]" : "bg-slate-100 border-slate-200 opacity-80 cursor-not-allowed grayscale"}`}>
                    <div className="p-6 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm ${isPassed || isLevel4Completed ? "bg-emerald-500 text-white" : (isUnlocked ? "bg-emerald-100" : "bg-slate-200")}`}>
                            {isPassed || isLevel4Completed ? <CheckCircle size={28} /> : (isUnlocked ? level.icon : "🔒")}
                        </div>
                        <div className="flex-1">
                            <h3 className={`font-black text-lg ${isPassed || isLevel4Completed ? "text-emerald-800" : (unlockedLevels.includes(level.id) ? "text-aux-dark" : "text-slate-400")}`}>{level.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                {(isPassed || isLevel4Completed) && <span className="bg-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">APROBADO</span>}
                                <p className="text-xs text-slate-500 font-medium">{level.qCount} Pregs • {level.timeLimit === 0 ? "Sin Tiempo" : `${Math.floor(level.timeLimit / 60)} min`}</p>
                            </div>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPassed || isLevel4Completed ? "bg-emerald-200 text-emerald-700" : (unlockedLevels.includes(level.id) ? "bg-aux-dark text-white" : "bg-slate-300 text-white")}`}>{unlockedLevels.includes(level.id) ? <Play size={20} className="ml-1" /> : <Lock size={18} />}</div>
                    </div>
                </div>
            );
        })}
        <div className="mt-8 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 text-center flex items-center justify-center gap-2"><HelpCircle size={16} /> Herramientas de Apoyo</h3>
            <div className="grid grid-cols-2 gap-4">
                <Link href="/biblioteca" className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-aux-green hover:shadow-md transition-all flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-aux-green group-hover:text-white transition-colors"><Library size={18} /></div>
                    <span className="text-xs font-bold text-slate-600 group-hover:text-aux-dark text-left leading-tight">Biblioteca<br/>Digital</span>
                </Link>
                <Link href="https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz" target="_blank" className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm hover:border-aux-green hover:shadow-md transition-all flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center group-hover:bg-aux-green group-hover:text-white transition-colors"><MessageCircle size={18} /></div>
                    <span className="text-xs font-bold text-slate-600 group-hover:text-aux-dark text-left leading-tight">Foro de<br/>Consultas</span>
                </Link>
            </div>
        </div>
      </div>
    </main>
  );
}
