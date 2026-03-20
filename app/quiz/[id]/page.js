"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../../data"; 
import Link from "next/link";
import { ArrowLeft, Check, X, Clock, BookOpen } from "lucide-react";

// NUEVO: Importaciones de Firebase para guardar el progreso
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

/**
 * < macz.dev />
 * ARCHIVO: GameRoom - Simulador AuxiliarPro v4.0
 * ESTADO: Prueba Transitoria de Acceso Pro
 */

export default function GameRoom({ params }) {
  const router = useRouter();

  // --- CONFIGURACIÓN DE PRUEBA TRANSITORIA ---
  // Seteamos la fecha al 16 de marzo para estar "dentro del plazo"
  const now = new Date("2026-03-16");

  // Activamos el flag isPro para abrir los candados del 3 al 7
  const isPro = true;
  // -------------------------------------------

  // 1. Identificamos el nivel
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

  // NUEVO: Estado del usuario para poder escribir en su perfil
  const [user, setUser] = useState(null);

  // NUEVO: Recuperar al usuario activo
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // NUEVO: Guardar en Firebase cuando el examen termina y está aprobado
  useEffect(() => {
    if (isFinished && level && score >= level.passingScore && user) {
      const saveProgress = async () => {
        try {
          const nextLevel = levelId + 1;
          const docRef = doc(db, "users", user.uid);
          await updateDoc(docRef, { unlockedLevels: arrayUnion(nextLevel) });
          console.log("Progreso guardado en Firebase exitosamente.");
        } catch (error) {
          console.error("Error al guardar progreso:", error);
        }
      };
      saveProgress();
    }
  }, [isFinished, score, level, levelId, user]);

  // TEMPORIZADOR
  useEffect(() => {
    if (level && !isFinished && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => { 
          if (prev <= 1) { 
            clearInterval(timerId); 
            setIsFinished(true); 
            return 0; 
          } 
          return prev - 1; 
        });
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [level, isFinished, timeLeft]);

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
            href="/quiz"
            className="mt-8 block w-full bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
          >
            Volver al menú
          </Link>
        </div>
      </div>
    );
  }

  // Si el nivel no existe
  if (!level) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
            <h1 className="text-xl font-bold text-slate-400">Nivel no encontrado</h1>
            <Link href="/quiz" className="mt-4 text-emerald-600 font-bold hover:underline">Volver al Menú</Link>
        </div>
    );
  }

  const question = level.questions[currentQ];
  const isLastQuestion = currentQ === level.questions.length - 1;

  const handleOptionClick = (index) => {
    if (showFeedback) return;
    setSelected(index);
    setShowFeedback(true);
    
    if (index === question.correctIndex) {
      setScore(score + 1);
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

  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true);
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
    const passed = score >= level.passingScore;
    const timeOut = timeLeft === 0;

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
                    Lograste <span className="font-bold text-slate-900">{score}</span> de {level.questions.length} respuestas correctas.
                </p>
                <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">
                    Puntaje de aprobación: {level.passingScore}
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
                                {/* Enlace Salvavidas */}
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

            <Link href="/quiz" className="block text-center w-full bg-slate-900 text-white font-bold py-4 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] uppercase tracking-widest text-sm">
                Volver al Menú Principal
            </Link>
        </div>
      </main>
    );
  }

  // ----------------------------------------------------------------------
  // PANTALLA DE JUEGO (Escenario A)
  // ----------------------------------------------------------------------
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      {/* Header del Simulador */}
      <div className="p-4 flex justify-between items-center border-b border-slate-100 sticky top-0 bg-white z-10">
        <Link href="/quiz" className="text-slate-400 hover:text-slate-900 p-2 transition-colors">
            <ArrowLeft size={24} />
        </Link>
        <span className="font-black text-emerald-600 text-[10px] uppercase tracking-[0.2em]">
            {level.title}
        </span>
        <div className="w-8"></div>
      </div>

      {/* Barra de Progreso */}
      <div className="w-full bg-slate-100 h-1.5">
        <div 
            className="bg-emerald-500 h-1.5 transition-all duration-500 ease-out" 
            style={{ width: `${((currentQ + 1) / level.questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
        {/* Encabezado: Pregunta y Reloj */}
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

        {/* Opciones */}
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
                        disabled={showFeedback}
                        className={`w-full text-left p-5 rounded-2xl text-sm md:text-base transition-all duration-200 ${style}`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>

        {/* Botón de Siguiente */}
        {showFeedback && (
            <div className="mt-8 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <button 
                    onClick={handleNext}
                    className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl shadow-xl flex justify-center items-center gap-3 hover:bg-black transition-colors"
                >
                    <span className="uppercase tracking-widest text-xs">
                      {isLastQuestion ? "Ver resultados finales" : "Siguiente pregunta"} 
                    </span>
                    {!isLastQuestion && <ArrowLeft size={16} className="rotate-180" />}
                </button>
            </div>
        )}

        {/* Botón de Abandonar Examen */}
        <div className="mt-8 text-center animate-in fade-in duration-500">
            <button 
                onClick={() => router.push('/quiz')} 
                className="text-slate-400 font-bold text-sm hover:text-red-500 transition-colors cursor-pointer"
            >
                Abandonar Examen
            </button>
        </div>
      </div>

      <footer className="p-4 text-center">
         <span className="text-[9px] font-mono text-slate-300 uppercase tracking-tighter">AuxiliarPro v4.0 Engine <span className="mx-1">|</span> &lt; macz.dev /&gt;</span>
      </footer>
    </main>
  );
}