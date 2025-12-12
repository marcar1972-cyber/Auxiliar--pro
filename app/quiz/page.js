"use client";

import { useState, useEffect } from "react";
import { LEVELS } from "../data"; // Importamos tus preguntas
import Link from "next/link";
import { Lock, Play, CheckCircle, XCircle, ChevronLeft, RefreshCcw, ArrowRight } from "lucide-react";

export default function QuizPage() {
  // --- ESTADOS DEL JUEGO ---
  const [unlockedLevels, setUnlockedLevels] = useState([1]); // Niveles desbloqueados
  const [activeLevelId, setActiveLevelId] = useState(null);  // ¿Qué nivel estamos jugando?
  
  // Estados de la Partida Actual
  const [currentQIndex, setCurrentQIndex] = useState(0);     // Índice de pregunta actual
  const [score, setScore] = useState(0);                     // Puntaje acumulado
  const [showResult, setShowResult] = useState(false);       // ¿Mostramos el resultado final?
  const [selectedOption, setSelectedOption] = useState(null); // Opción seleccionada (para feedback visual)
  const [isAnswered, setIsAnswered] = useState(false);       // ¿Ya respondió la actual?

  // --- LÓGICA ---

  // 1. Iniciar Nivel
  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      setActiveLevelId(levelId);
      resetGame();
    }
  };

  // 2. Reiniciar variables para nueva partida
  const resetGame = () => {
    setCurrentQIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  // 3. Manejar Clic en Respuesta
  const handleAnswer = (optionIndex, correctIndex) => {
    if (isAnswered) return; // Evita doble clic

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === correctIndex) {
      setScore((prev) => prev + 1);
    }

    // Esperar 1 segundo y pasar a la siguiente (o terminar)
    setTimeout(() => {
      if (currentQIndex + 1 < getCurrentLevel().questions.length) {
        setCurrentQIndex((prev) => prev + 1);
        setIsAnswered(false);
        setSelectedOption(null);
      } else {
        setShowResult(true);
        handleLevelCompletion(); // Verificar si desbloquea el siguiente
      }
    }, 1000); 
  };

  // 4. Verificar si aprobó y desbloquear siguiente
  const getCurrentLevel = () => LEVELS.find((l) => l.id === activeLevelId);

  const handleLevelCompletion = () => {
    // Nota: El estado score puede no haberse actualizado visualmente aún, 
    // pero calculamos con la lógica local o esperamos el render. 
    // Para asegurar, recalculamos en el render del resultado.
    // Aquí solo actualizamos desbloqueos.
  };

  // Efecto para desbloquear nivel cuando se muestra el resultado y es aprobado
  useEffect(() => {
    if (showResult && activeLevelId) {
        const level = getCurrentLevel();
        // Si aprobó (score >= passingScore)
        // Nota: score ya está actualizado aquí
        if (score >= level.passingScore) {
            const nextLevel = activeLevelId + 1;
            // Si el siguiente nivel existe y no está desbloqueado aún
            if (LEVELS.find(l => l.id === nextLevel) && !unlockedLevels.includes(nextLevel)) {
                setUnlockedLevels(prev => [...prev, nextLevel]);
            }
        }
    }
  }, [showResult, score]); // Se ejecuta cuando sale el resultado

  // --- VISTAS ---

  // VISTA A: JUGANDO (PREGUNTAS)
  if (activeLevelId && !showResult) {
    const level = getCurrentLevel();
    const question = level.questions[currentQIndex];

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Barra de Progreso */}
            <div className="w-full bg-slate-100 h-2">
                <div 
                    className="bg-aux-green h-2 transition-all duration-500" 
                    style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}
                ></div>
            </div>

            <div className="p-6 md:p-8">
                {/* Encabezado Pregunta */}
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Pregunta {currentQIndex + 1} de {level.questions.length}
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">
                        Nivel {activeLevelId}
                    </span>
                </div>

                {/* Texto Pregunta */}
                <h2 className="text-xl font-black text-aux-dark mb-8 leading-tight">
                    {question.text}
                </h2>

                {/* Opciones */}
                <div className="space-y-3">
                    {question.options.map((opt, idx) => {
                        // Lógica de colores al responder
                        let btnColor = "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"; // Normal
                        
                        if (isAnswered) {
                            if (idx === question.correctIndex) {
                                btnColor = "bg-green-100 border-green-500 text-green-800"; // Correcta
                            } else if (idx === selectedOption) {
                                btnColor = "bg-red-100 border-red-500 text-red-800"; // Incorrecta elegida
                            } else {
                                btnColor = "opacity-50 grayscale"; // Las demás
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(idx, question.correctIndex)}
                                disabled={isAnswered}
                                className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all duration-200 ${btnColor}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold
                                        ${idx === question.correctIndex && isAnswered ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'}
                                    `}>
                                        {["A", "B", "C", "D"][idx]}
                                    </div>
                                    {opt}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
        
        {/* Botón Salir de Emergencia */}
        <button onClick={() => setActiveLevelId(null)} className="mt-6 text-slate-400 text-sm hover:text-red-500 underline">
            Cancelar y Salir
        </button>
      </div>
    );
  }

  // VISTA B: RESULTADOS
  if (showResult) {
    const level = getCurrentLevel();
    const passed = score >= level.passingScore;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
            <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm w-full">
                
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-sm
                    ${passed ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
                `}>
                    {passed ? <CheckCircle size={40} /> : <XCircle size={40} />}
                </div>

                <h2 className="text-2xl font-black text-aux-dark mb-2">
                    {passed ? "¡APROBADO!" : "Sigue Intentando"}
                </h2>
                
                <p className="text-slate-500 mb-6">
                    Acertaste <strong className={passed ? "text-green-600" : "text-red-600"}>{score}</strong> de <strong>{level.questions.length}</strong> preguntas.
                </p>

                <div className="space-y-3">
                    {passed ? (
                         <button 
                         onClick={() => setActiveLevelId(null)}
                         className="w-full bg-aux-dark text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                     >
                         VOLVER AL MENÚ <ArrowRight size={18} />
                     </button>
                    ) : (
                        <button 
                            onClick={resetGame}
                            className="w-full bg-aux-green text-white font-bold py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
                        >
                            <RefreshCcw size={18} /> INTENTAR DE NUEVO
                        </button>
                    )}
                   
                   {!passed && (
                        <button 
                            onClick={() => setActiveLevelId(null)}
                            className="w-full bg-white text-slate-500 font-bold py-3 rounded-xl border border-slate-200 hover:bg-slate-50"
                        >
                            Volver al Menú
                        </button>
                   )}
                </div>
            </div>
        </div>
    );
  }

  // VISTA C: MENÚ PRINCIPAL (TABLERO)
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* Header */}
      <div className="bg-white p-4 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-aux-dark">
            <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-black text-aux-dark">Tu Ruta de Aprendizaje</h1>
      </div>

      <div className="p-6 max-w-md mx-auto space-y-6 mt-4">
        
        {/* Mensaje Dinámico */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6">
            <p className="text-sm text-blue-800 font-medium">
                {unlockedLevels.length === 1 
                    ? "👋 Hola Colega: Completa el Nivel 1 para desbloquear el siguiente." 
                    : `🔥 ¡Llevas ${unlockedLevels.length - 1} niveles desbloqueados! Sigue así.`}
            </p>
        </div>

        {/* MAPA DE NIVELES */}
        {LEVELS.map((level) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            const isCompleted = unlockedLevels.includes(level.id + 1) || (level.id === LEVELS.length && unlockedLevels.includes(level.id)); // Lógica simple de completado
            
            return (
                <div 
                    key={level.id} 
                    onClick={() => startLevel(level.id)}
                    className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                        isUnlocked 
                            ? "bg-white border-aux-green/20 shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]" 
                            : "bg-slate-100 border-slate-200 opacity-80 cursor-not-allowed grayscale"
                    }`}
                >
                    <div className="p-6 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-sm ${
                            isUnlocked ? "bg-emerald-100" : "bg-slate-200"
                        }`}>
                            {isUnlocked ? level.icon : "🔒"}
                        </div>

                        <div className="flex-1">
                            <h3 className={`font-black text-lg ${isUnlocked ? "text-aux-dark" : "text-slate-400"}`}>
                                {level.title}
                            </h3>
                            <p className="text-xs text-slate-500 font-medium mt-1">
                                {level.qCount} Preguntas • {level.timeLimit === 0 ? "Sin Tiempo" : `${level.timeLimit} seg/preg`}
                            </p>
                        </div>

                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isUnlocked ? "bg-aux-dark text-white" : "bg-slate-300 text-white"
                        }`}>
                            {isUnlocked ? <Play size={20} className="ml-1" /> : <Lock size={18} />}
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
    </main>
  );
}
