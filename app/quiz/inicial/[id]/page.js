"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../../../data"; 
import Link from "next/link";
import { ArrowLeft, Check, X, Clock, BookOpen, Loader2 } from "lucide-react";

// NUEVO: Importaciones de Firebase para guardar el progreso y auditoría
import { auth, db } from "../../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion, collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * < macz.dev />
 * ARCHIVO: GameRoom - Simulador AuxiliarPro v4.0 (Inicial)
 * ESTADO: Con Auditoría exam_logs y 80% de exigencia unificada
 */

export default function GameRoom({ params }) {
  const router = useRouter();

  // --- CONFIGURACIÓN DE PRUEBA TRANSITORIA ---
  const now = new Date("2026-03-16");
  const isPro = true;
  // -------------------------------------------

  const levelId = parseInt(params.id);
  const level = LEVELS.find((l) => l.id === levelId);

  // Estados del juego
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(level?.timeLimit || 0);
  const [mistakes, setMistakes] = useState([]);
  
  // Estado para evitar doble guardado
  const [isSavingRecord, setIsSavingRecord] = useState(false);
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // TEMPORIZADOR
  useEffect(() => {
    if (level && !isFinished && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => { 
          if (prev <= 1) { 
            clearInterval(timerId); 
            
            // Si el tiempo se acaba, forzamos el final pero guardamos el progreso
            if (!isSavingRecord) {
                finalizeQuiz(true);
            }
            return 0; 
          } 
          return prev - 1; 
        });
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [level, isFinished, timeLeft, isSavingRecord]);

  // BLOQUEO DE NIVELES PRO
  if (now >= new Date("2026-03-31") && levelId >= 3 && !isPro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center font-sans">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200 max-w-sm">
          <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="rotate-45" /> 
          </div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">
            Nivel Pro Bloqueado
          </h1>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed">
            Los niveles 3 al 7 requieren una suscripción activa para preparar tu examen SEREMI.
          </p>
          <Link
            href="/quiz/inicial"
            className="mt-8 block w-full bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
          >
            Volver al menú
          </Link>
        </div>
      </div>
    );
  }

  if (!level) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
            <h1 className="text-xl font-bold text-slate-400">Nivel no encontrado</h1>
            <Link href="/quiz/inicial" className="mt-4 text-emerald-600 font-bold hover:underline">Volver al Menú</Link>
        </div>
    );
  }

  const question = level.questions[currentQ];
  const isLastQuestion = currentQ === level.questions.length - 1;

  const handleOptionClick = (index) => {
    if (showFeedback || isSavingRecord) return;
    setSelected(index);
    setShowFeedback(true);
    
    if (index === question.correctIndex) {
      setScore(prev => prev + 1);
    } else {
      setMistakes((prev) => [
        ...prev,
        {
          questionText: question.text,
          userAnswer: question.options[index],
          correctAnswer: question.options[question.correctIndex],
          studyGuide: question.studyGuide,
        },
      ]);
    }
  };

  // --- CTO FIX: Lógica centralizada de Guardado (Auditoría + 80% Fijo) ---
  const finalizeQuiz = async (timeOut = false) => {
      setIsSavingRecord(true);
      
      const totalQuestions = level.questions.length;
      const isAdmin = user?.email === "marcar1972@gmail.com";
      
      // La regla del 80% (igual que en el PRO)
      const isApproved = score >= Math.ceil(totalQuestions * 0.8) || isAdmin;
      const percentage = (score / totalQuestions) * 100;

      if (user) {
          try {
              // 1. REGISTRO DE AUDITORÍA (Aquí se crea la carpeta en Firestore)
              const attemptRef = collection(db, "exam_logs");
              await addDoc(attemptRef, {
                  uid: user.uid,
                  email: user.email,
                  levelId: levelId,
                  mode: "inicial", // Identificador para separar de los PRO
                  score: score,
                  totalQuestions: totalQuestions,
                  percentage: percentage.toFixed(2) + "%",
                  status: timeOut ? "TIEMPO AGOTADO" : (isApproved ? "APROBADO" : "REPROBADO"),
                  date: new Date().toLocaleString("es-CL"),
                  createdAt: serverTimestamp()
              });

              // 2. DESBLOQUEO DE NIVEL SI APRUEBA
              if (isApproved) {
                  const nextLevel = levelId + 1;
                  const userRef = doc(db, "users", user.uid);
                  await updateDoc(userRef, { unlockedLevels: arrayUnion(nextLevel) });
              }
          } catch (error) {
              console.error("Error guardando auditoría en Firebase:", error);
          }
      }
      
      setIsSavingRecord(false);
      setIsFinished(true);
  };

  const handleNext = () => {
    if (isSavingRecord) return;
    
    if (isLastQuestion) {
      // Disparamos la lógica de finalización
      finalizeQuiz(false);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  // ----------------------------------------------------------------------
  // PANTALLA DE RESULTADOS (Escenario B)
  // ----------------------------------------------------------------------
  if (isFinished) {
    const totalQuestions = level.questions.length;
    const isAdmin = user?.email === "marcar1972@gmail.com";
    
    // Mostramos el resultado visual basado en el 80% o si es Admin
    const passed = score >= Math.ceil(totalQuestions * 0.8) || isAdmin;
    const timeOut = timeLeft <= 0;
    const passingScoreCalculated = Math.ceil(totalQuestions * 0.8);

    return (
      <main className="min-h-screen flex flex-col items-center p-6 bg-slate-50 font-sans py-12">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl max-w-lg w-full border border-slate-100">
            
            {/* Cabecera del Resultado */}
            <div className="text-center mb-8">
                <div className={`mb-6 flex justify-center w-24 h-24 rounded-full items-center mx-auto ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                    {passed ? <Check size={48} /> : <X size={48} />}
                </div>
                <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                    {timeOut ? "¡TIEMPO AGOTADO!" : passed ? "¡NIVEL SUPERADO!" : "INTÉNTALO DE NUEVO"}
                </h1>
                <p className="text-slate-500 text-lg">
                    Lograste <span className="font-bold text-slate-900">{score}</span> de {totalQuestions} respuestas correctas.
                </p>
                <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">
                    Puntaje de aprobación (80%): {passingScoreCalculated}
                </p>
            </div>

            {/* Lista de Errores y Enlaces de Estudio */}
            {mistakes.length > 0 && (
                <div className="mb-8">
                    <h3 className="font-black text-slate-800 mb-4 flex items-center gap-2">
                        <BookOpen size={20} className="text-blue-500" />
                        Plan de Refuerzo Personalizado:
                    </h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                        {mistakes.map((mistake, idx) => (
                            <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm">
                                <p className="font-bold text-slate-800 mb-3">{mistake.questionText}</p>
                                <div className="space-y-2 mb-4">
                                    <p className="text-rose-600 flex items-start gap-2 line-through opacity-80">
                                        <X size={16} className="shrink-0 mt-0.5" /> {mistake.userAnswer}
                                    </p>
                                    <p className="text-emerald-700 flex items-start gap-2 font-medium">
                                        <Check size={16} className="shrink-0 mt-0.5" /> {mistake.correctAnswer}
                                    </p>
                                </div>
                                <Link 
                                    href="/guias" 
                                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                                >
                                    Repasar: {mistake.studyGuide} <ArrowLeft size={12} className="rotate-180" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-3">
                {!passed && (
                   <button onClick={() => window.location.reload()} className="w-full bg-slate-900 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:bg-black transition-colors">
                     REINTENTAR NIVEL
                   </button>
                )}
                <Link href="/quiz/inicial" className="block text-center w-full bg-slate-100 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-200 transition-colors uppercase tracking-widest text-sm">
                    Volver al Menú Principal
                </Link>
            </div>
        </div>
      </main>
    );
  }

  // ----------------------------------------------------------------------
  // PANTALLA DE JUEGO (Escenario A)
  // ----------------------------------------------------------------------
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-slate-100 sticky top-0 bg-white z-10">
        <Link href="/quiz/inicial" className="text-slate-400 hover:text-slate-900 p-2 transition-colors">
            <ArrowLeft size={24} />
        </Link>
        <span className="font-black text-emerald-600 text-[10px] uppercase tracking-[0.2em]">
            {level.title}
        </span>
        <div className="w-8"></div>
      </div>

      <div className="w-full bg-slate-100 h-1.5">
        <div 
            className="bg-emerald-500 h-1.5 transition-all duration-500 ease-out" 
            style={{ width: `${((currentQ + 1) / level.questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
        <div className="flex justify-between items-center mb-6 mt-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Pregunta {currentQ + 1} de {level.questions.length}
            </span>
            {timeLeft > 0 && (
                <div className="bg-slate-50 px-3 py-1.5 rounded-full font-mono font-bold text-slate-600 text-xs flex items-center gap-2 border border-slate-100">
                    <Clock size={14} className={timeLeft < 300 ? "text-red-500 animate-pulse" : "text-emerald-500"}/> 
                    {Math.floor(timeLeft/60)}:{timeLeft%60<10?'0':''}{timeLeft%60}
                </div>
            )}
        </div>
        
        <h2 className="text-xl font-bold text-slate-900 leading-tight mb-8">
            {question.text}
        </h2>

        <div className="space-y-3 flex-1">
            {question.options.map((option, index) => {
                let style = "bg-white border-2 border-slate-100 text-slate-600 hover:border-slate-200"; 
                
                if (showFeedback) {
                    if (index === question.correctIndex) style = "bg-emerald-50 border-emerald-500 text-emerald-700 font-bold shadow-sm";
                    else if (index === selected) style = "bg-rose-50 border-rose-500 text-rose-700 opacity-90";
                    else style = "opacity-40 border-slate-50";
                } else if (selected === index) {
                    style = "border-slate-900 bg-slate-900 text-white shadow-md";
                }

                return (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={showFeedback || isSavingRecord}
                        className={`w-full text-left p-5 rounded-2xl text-sm md:text-base transition-all duration-200 ${style}`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>

        {showFeedback && (
            <div className="mt-8 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <button 
                    onClick={handleNext}
                    disabled={isSavingRecord}
                    className={`w-full text-white font-bold py-5 rounded-2xl shadow-xl flex justify-center items-center gap-3 transition-colors ${isSavingRecord ? 'bg-slate-400' : 'bg-slate-900 hover:bg-black'}`}
                >
                    {isSavingRecord ? (
                        <>
                           <Loader2 className="animate-spin" size={16} /> GUARDANDO...
                        </>
                    ) : (
                        <>
                           <span className="uppercase tracking-widest text-xs">
                             {isLastQuestion ? "Ver resultados finales" : "Siguiente pregunta"} 
                           </span>
                           {!isLastQuestion && <ArrowLeft size={16} className="rotate-180" />}
                        </>
                    )}
                </button>
            </div>
        )}

        {!showFeedback && !isSavingRecord && (
            <div className="mt-8 text-center animate-in fade-in duration-500">
                <button 
                    onClick={() => router.push('/quiz/inicial')} 
                    className="text-slate-400 font-bold text-sm hover:text-red-500 transition-colors cursor-pointer"
                >
                    Abandonar Examen
                </button>
            </div>
        )}
      </div>

      <footer className="p-4 text-center">
         <span className="text-[9px] font-mono text-slate-300 uppercase tracking-tighter">AuxiliarPro v4.0 Engine <span className="mx-1">|</span> &lt; macz.dev /&gt;</span>
      </footer>
    </main>
  );
}