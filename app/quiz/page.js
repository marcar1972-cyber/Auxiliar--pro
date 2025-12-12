"use client";

import { useState, useEffect } from "react";
import { LEVELS } from "../data"; 
import Link from "next/link";
import { Lock, Play, CheckCircle, XCircle, ChevronLeft, RefreshCcw, ArrowRight } from "lucide-react";

export default function QuizPage() {
  const [unlockedLevels, setUnlockedLevels] = useState([1]); 
  const [activeLevelId, setActiveLevelId] = useState(null);  
  
  const [currentQIndex, setCurrentQIndex] = useState(0);     
  const [score, setScore] = useState(0);                     
  const [showResult, setShowResult] = useState(false);       
  const [selectedOption, setSelectedOption] = useState(null); 
  const [isAnswered, setIsAnswered] = useState(false);       

  // --- LÓGICA ---

  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      setActiveLevelId(levelId);
      resetGame();
    }
  };

  const resetGame = () => {
    setCurrentQIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  // NUEVA FUNCIÓN: VOLVER AL MENÚ LIMPIAMENTE
  const returnToMenu = () => {
    setShowResult(false);      // 1. Apagar pantalla de resultados
    setActiveLevelId(null);    // 2. Salir del nivel
    setScore(0);               // 3. Reiniciar puntaje
    setCurrentQIndex(0);       // 4. Reiniciar preguntas
    setIsAnswered(false);      // 5. Reiniciar estado de respuesta
  };

  const handleAnswer = (optionIndex, correctIndex) => {
    if (isAnswered) return; 

    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === correctIndex) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      const currentLevel = getCurrentLevel();
      if (currentLevel && currentQIndex + 1 < currentLevel.questions.length) {
        setCurrentQIndex((prev) => prev + 1);
        setIsAnswered(false);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000); 
  };

  const getCurrentLevel = () => LEVELS.find((l) => l.id === activeLevelId);

  // Efecto para desbloquear nivel
  useEffect(() => {
    if (showResult && activeLevelId) {
        const level = getCurrentLevel();
        if (level && score >= level.passingScore) {
            const nextLevel = activeLevelId + 1;
            // Verificamos si existe el siguiente nivel y si no está desbloqueado
            if (LEVELS.find(l => l.id === nextLevel) && !unlockedLevels.includes(nextLevel)) {
                setUnlockedLevels(prev => [...prev, nextLevel]);
            }
        }
    }
  }, [showResult, score, activeLevelId]);

  // --- VISTAS ---

  // VISTA A: JUGANDO
  if (activeLevelId && !showResult) {
    const level = getCurrentLevel();
    
    // SEGURIDAD: Si el nivel no existe o no tiene preguntas
    if (!level) return <div className="p-10 text-center">Error: No encuentro el Nivel {activeLevelId}</div>;
    
    const question = level.questions ? level.questions[currentQIndex] : null;
    
    if (!question) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 text-left max-w-md">
                    <h3 className="font-bold text-red-600 text-lg mb-2">⚠️ Error de Datos</h3>
                    <p className="text-slate-600 mb-4">
                        No hay preguntas cargadas para el Nivel {activeLevelId} en <code>data.js</code>.
                    </p>
                    <button onClick={returnToMenu} className="text-sm underline text-slate-500">Volver al menú</button>
                </div>
            </div>
        );
    }

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
            
            <div className="w-full bg-slate-100 h-2">
                <div 
                    className="bg-aux-green h-2 transition-all duration-500" 
                    style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}
                ></div>
            </div>

            <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Pregunta {currentQIndex + 1} de {level.questions.length}
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">
                        Nivel {activeLevelId}
                    </span>
                </div>

                <h2 className="text-xl font-black text-aux-dark mb-8 leading-tight">
                    {question.text}
                </h2>

                <div className="space-y-3">
                    {question.options.map((opt, idx) => {
                        let btnColor = "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100";
                        
                        if (isAnswered) {
                            if (idx === question.correctIndex) {
                                btnColor = "bg-green-100 border-green-500 text-green-800";
                            } else if (idx === selectedOption) {
                                btnColor = "bg-red-100 border-red-500 text-red-800"; 
                            } else {
                                btnColor = "opacity-50 grayscale";
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
        
        <button onClick={returnToMenu} className="mt-6 text-slate-400 text-sm hover:text-red-500 underline">
            Cancelar y Salir
        </button>
      </div>
    );
  }

  // VISTA B: RESULTADOS
  if (showResult) {
    // Si llegamos aquí sin un nivel activo, volvemos al menú para evitar error
    const level = getCurrentLevel();
    if (!level) {
        returnToMenu(); // Auto-corrección
        return null;
    }

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
                         onClick={returnToMenu} // <--- AQUÍ ESTABA LA MAGIA QUE FALTABA
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
                            onClick={returnToMenu}
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

  // VISTA C: MENÚ PRINCIPAL
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-aux-dark">
            <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-black text-aux-dark">Tu Ruta de Aprendizaje</h1>
      </div>

      <div className="p-6 max-w-md mx-auto space-y-6 mt-4">
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mb-6">
            <p className="text-sm text-blue-800 font-medium">
                {unlockedLevels.length === 1 
                    ? "👋 Hola Colega: Completa el Nivel 1 para desbloquear el siguiente." 
                    : `🔥 ¡Llevas ${unlockedLevels.length - 1} niveles desbloqueados! Sigue así.`}
            </p>
        </div>

        {LEVELS.map((level) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            
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
