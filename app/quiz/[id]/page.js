"use client"; // Importante: Esto convierte la página en una App interactiva

import { useState } from "react";
import { LEVELS } from "../../data"; // Importamos las preguntas
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function GameRoom({ params }) {
  // 1. Identificamos en qué nivel estamos mirando la URL (ej: /quiz/1)
  const levelId = parseInt(params.id);
  const level = LEVELS.find((l) => l.id === levelId);

  // ESTADOS DEL JUEGO (La memoria de la app)
  const [currentQ, setCurrentQ] = useState(0); // ¿En qué pregunta vamos?
  const [selected, setSelected] = useState(null); // ¿Qué opción eligió?
  const [isFinished, setIsFinished] = useState(false); // ¿Terminó?
  const [score, setScore] = useState(0); // Puntaje
  const [showFeedback, setShowFeedback] = useState(false); // ¿Mostrar respuesta?

  // Si el nivel no existe (por si alguien pone /quiz/999)
  if (!level) return <div className="p-10 text-center">Nivel no encontrado 😢</div>;

  const question = level.questions[currentQ];
  const isLastQuestion = currentQ === level.questions.length - 1;

  // Lógica al hacer clic en una opción
  const handleOptionClick = (index) => {
    if (showFeedback) return; // Si ya respondió, no dejar cambiar

    setSelected(index);
    setShowFeedback(true);

    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  // Pasar a la siguiente pregunta
  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true);
    } else {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowFeedback(false);
    }
  };

  // --- VISTA: PANTALLA DE RESULTADOS (Si terminó) ---
  if (isFinished) {
    const passed = score >= level.passingScore;
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full">
            <div className="mb-6 flex justify-center">
                {passed ? <CheckCircle size={64} className="text-aux-green" /> : <AlertCircle size={64} className="text-red-500" />}
            </div>
            <h1 className="text-3xl font-black text-aux-dark mb-2">
                {passed ? "¡APROBADO!" : "Sigue intentando"}
            </h1>
            <p className="text-slate-500 mb-6">
                Obtuviste <span className="font-bold text-aux-dark">{score} de {level.questions.length}</span> correctas.
            </p>
            
            <Link href="/quiz" className="block w-full bg-aux-dark text-white font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                VOLVER AL MENÚ
            </Link>
        </div>
      </main>
    );
  }

  // --- VISTA: JUEGO (Pregunta Actual) ---
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col">
      
      {/* Barra Superior */}
      <div className="p-4 flex justify-between items-center border-b border-slate-100">
        <Link href="/quiz" className="text-slate-400 hover:text-aux-dark">
            <ArrowLeft size={24} />
        </Link>
        <span className="font-bold text-aux-green text-sm uppercase tracking-widest">
            {level.title}
        </span>
        <div className="w-6"></div>
      </div>

      {/* Barra de Progreso */}
      <div className="w-full bg-slate-100 h-1.5">
        <div 
            className="bg-aux-green h-1.5 transition-all duration-500" 
            style={{ width: `${((currentQ + 1) / level.questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Área de Pregunta */}
      <div className="flex-1 flex flex-col p-6 max-w-md mx-auto w-full">
        
        <div className="mb-8 mt-4">
            <span className="text-xs font-bold text-slate-400 mb-2 block">
                PREGUNTA {currentQ + 1} DE {level.questions.length}
            </span>
            <h2 className="text-xl font-bold text-aux-dark leading-relaxed">
                {question.text}
            </h2>
        </div>

        {/* Opciones */}
        <div className="space-y-3 flex-1">
            {question.options.map((option, index) => {
                // Lógica de colores (Rojo/Verde) al responder
                let btnClass = "bg-white border-2 border-slate-100 text-slate-600"; // Estado normal
                
                if (showFeedback) {
                    if (index === question.correctIndex) {
                        btnClass = "bg-emerald-100 border-emerald-500 text-emerald-800"; // Correcta
                    } else if (index === selected) {
                        btnClass = "bg-red-100 border-red-500 text-red-800"; // Incorrecta elegida
                    } else {
                        btnClass = "opacity-50 border-slate-100"; // Las demás
                    }
                } else if (selected === index) {
                    btnClass = "border-aux-dark bg-slate-50"; // Seleccionada (antes de confirmar)
                }

                return (
                    <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        disabled={showFeedback}
                        className={`w-full text-left p-4 rounded-xl font-medium transition-all ${btnClass} hover:shadow-md active:scale-[0.98]`}
                    >
                        {option}
                    </button>
                );
            })}
        </div>

        {/* Botón Siguiente (Solo aparece si ya respondiste) */}
        {showFeedback && (
            <div className="mt-6 pt-6 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4">
                <button 
                    onClick={handleNext}
                    className="w-full bg-aux-dark text-white font-bold py-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform flex justify-center items-center gap-2"
                >
                    {isLastQuestion ? "VER RESULTADOS" : "SIGUIENTE PREGUNTA"}
                </button>
            </div>
        )}

      </div>
    </main>
  );
}
