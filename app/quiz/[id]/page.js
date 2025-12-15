"use client";

import { useState } from "react";
import { LEVELS } from "../../data"; 
import Link from "next/link";
import { ArrowLeft, Check, X } from "lucide-react";

export default function GameRoom({ params }) {
  // 1. Identificamos el nivel
  const levelId = parseInt(params.id);
  const level = LEVELS.find((l) => l.id === levelId);

  // Estados del juego
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  // Si el nivel no existe
  if (!level) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
            <h1 className="text-xl font-bold text-slate-400">Nivel no encontrado</h1>
            <Link href="/quiz" className="mt-4 text-aux-green font-bold hover:underline">Volver al Menú</Link>
        </div>
    );
  }

  const question = level.questions[currentQ];
  const isLastQuestion = currentQ === level.questions.length - 1;

  // Lógica al responder
  const handleOptionClick = (index) => {
    if (showFeedback) return;
    setSelected(index);
    setShowFeedback(true);
    if (index === question.correctIndex) setScore(score + 1);
  };

  // Pasar a siguiente pregunta
  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  // --- VISTA: RESULTADOS ---
  if (isFinished) {
    const passed = score >= level.passingScore;
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center font-sans">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full">
            <div className={`mb-6 flex justify-center w-20 h-20 rounded-full items-center mx-auto ${passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {passed ? <Check size={40} /> : <X size={40} />}
            </div>
            <h1 className="text-2xl font-black text-aux-dark mb-2">
                {passed ? "¡APROBADO!" : "INTÉNTALO DE NUEVO"}
            </h1>
            <p className="text-slate-500 mb-6">
                Acertaste <span className="font-bold text-aux-dark">{score} de {level.questions.length}</span> preguntas.
            </p>
            <Link href="/quiz" className="block w-full bg-aux-dark text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                VOLVER AL MENÚ
            </Link>
        </div>
      </main>
    );
  }

  // --- VISTA: JUEGO ---
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      {/* Barra Superior */}
      <div className="p-4 flex justify-between items-center border-b border-slate-100 sticky top-0 bg-white z-10">
        <Link href="/quiz" className="text-slate-400 hover:text-aux-dark p-2">
            <ArrowLeft size={24} />
        </Link>
        <span className="font-bold text-aux-green text-xs uppercase tracking-widest">
            {level.title}
        </span>
        <div className="w-8"></div>
      </div>

      {/* Barra de Progreso */}
      <div className="w-full bg-slate-100 h-1.5">
        <div 
            className="bg-aux-green h-1.5 transition-all duration-300" 
            style={{ width: `${((currentQ + 1) / level.questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Área de Pregunta */}
      <div className="flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
        <div className="mb-6 mt-4">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2 block">
                PREGUNTA {currentQ + 1} / {level.questions.length}
            </span>
            <h2 className="text-lg md:text-xl font-bold text-aux-dark leading-snug">
                {question.text}
            </h2>
        </div>

        {/* Opciones */}
        <div className="space-y-3 flex-1">
            {question.options.map((option, index) => {
                let style = "bg-white border-2 border-slate-100 text-slate-600"; 
                
                if (showFeedback) {
                    if (index === question.correctIndex) style = "bg-green-50 border-green-500 text-green-700 font-bold";
                    else if (index === selected) style = "bg-red-50 border-red-500 text-red-700";
                    else style = "opacity-50 border-slate-100";
                } else if (selected === index) {
                    style = "border-aux-dark bg-slate-50";
                }

                return (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={showFeedback}
                        className={`w-full text-left p-4 rounded-xl text-sm md:text-base transition-all ${style}`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>

        {/* Botón Siguiente */}
        {showFeedback && (
            <div className="mt-6 pt-4 animate-in fade-in slide-in-from-bottom-4">
                <button 
                    onClick={handleNext}
                    className="w-full bg-aux-dark text-white font-bold py-4 rounded-xl shadow-lg flex justify-center items-center gap-2"
                >
                    {isLastQuestion ? "VER RESULTADOS" : "SIGUIENTE"} 
                    {!isLastQuestion && <ArrowLeft size={16} className="rotate-180" />}
                </button>
            </div>
        )}
      </div>
    </main>
  );
}
