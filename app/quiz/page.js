import Link from "next/link";
import { ArrowLeft, Lock, Play, Star, Clock } from "lucide-react";
import { LEVELS } from "../data"; // Importamos tus niveles

export default function QuizMenu() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      
      {/* 1. NAVBAR SIMPLIFICADO */}
      <nav className="bg-white p-4 shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-aux-dark transition-colors">
            <ArrowLeft size={20} />
            <span className="font-bold text-sm">Volver</span>
          </Link>
          <span className="font-black text-aux-dark">SELECCIONA NIVEL</span>
          <div className="w-8"></div> {/* Espacio vacío para equilibrar */}
        </div>
      </nav>

      {/* 2. LISTA DE NIVELES */}
      <div className="max-w-md mx-auto p-6 space-y-4">
        
        {/* Encabezado */}
        <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-aux-dark mb-2">Tu Ruta de Aprendizaje</h1>
            <p className="text-slate-500 text-sm">Completa los niveles para desbloquear el Simulacro Final.</p>
        </div>

        {/* Mapeamos los niveles desde data.js */}
        {LEVELS.map((level, index) => {
            // Lógica visual simple: Solo el Nivel 1 (índice 0) está abierto
            const isLocked = index > 0; 
            
            return (
                <div key={level.id} className={`relative group rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                    isLocked 
                    ? "bg-slate-100 border-slate-200 opacity-80" 
                    : "bg-white border-aux-green shadow-lg scale-[1.02]"
                }`}>
                    
                    {/* Tarjeta Clickable */}
                    <button disabled={isLocked} className="w-full text-left p-5 flex items-center gap-4">
                        
                        {/* Ícono del Nivel */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm ${
                            isLocked ? "bg-slate-200 grayscale" : "bg-emerald-100"
                        }`}>
                            {level.icon}
                        </div>

                        {/* Info del Nivel */}
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className={`font-black text-lg ${isLocked ? "text-slate-400" : "text-aux-dark"}`}>
                                    {level.title}
                                </h3>
                                {isLocked ? (
                                    <Lock size={16} className="text-slate-400" />
                                ) : (
                                    <span className="bg-aux-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        DISPONIBLE
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-slate-500 font-medium mb-2">{level.desc}</p>
                            
                            {/* Detalles Pequeños (Preguntas / Tiempo) */}
                            <div className="flex items-center gap-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                <span className="flex items-center gap-1">
                                    <Star size={10} /> {level.qCount} Preguntas
                                </span>
                                {level.timeLimit > 0 && (
                                    <span className="flex items-center gap-1">
                                        <Clock size={10} /> {level.timeLimit} seg/preg
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Botón Play (Solo si está desbloqueado) */}
                        {!isLocked && (
                            <div className="bg-aux-green text-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                                <Play size={20} fill="currentColor" />
                            </div>
                        )}

                    </button>
                </div>
            );
        })}

      </div>
    </main>
  );
}
