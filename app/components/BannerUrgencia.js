"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function BannerUrgencia() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleIniciarDiagnostico = () => {
    // Navegación nativa Next.js hacia el Diagnóstico SEREMI gratuito
    router.push('/quiz');
  };

  if (!isMounted) return null;

  return (
    <div className="bg-[#003366] text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 shadow-[0_4px_30px_rgba(40,167,69,0.15)] z-50 relative w-full overflow-hidden border-b-2 border-[#28a745]">
      
      {/* Efectos de luz sutiles en verde de marca (identidad AuxiliarPro) */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#28a745] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full blur-[80px] opacity-10 -ml-20 -mb-20 pointer-events-none"></div>

      {/* Textos Principales */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-center max-w-full relative z-10">
        <div className="bg-[#28a745] text-white font-black text-xs px-2 py-0.5 rounded-md tracking-wider uppercase shadow-[0_0_10px_rgba(40,167,69,0.5)]">
          🔒 PRECIO CONGELADO
        </div>
        <span className="leading-tight text-white font-bold tracking-tight">
          Plan Anual <span className="text-[#28a745]">"Hasta Que Apruebes"</span>:{" "}
          <span className="text-white font-black">$29.990</span>{" "}
          <span className="line-through text-white/50 font-medium">$49.990</span>{" "}
          · Pago único, sin renovación automática
        </span>
        <span className="hidden lg:inline opacity-30 text-white">|</span>
        <span className="leading-tight text-emerald-300 font-extrabold italic">
          📊 Mide tu nivel antes de elegir una suscripción
        </span>
      </div>
      
      {/* Botón de Acción Directo al Diagnóstico SEREMI */}
      <div className="flex flex-row items-center gap-2 shrink-0 relative z-10 mt-1 lg:mt-0">
        <button 
          onClick={handleIniciarDiagnostico}
          className="shrink-0 px-6 py-2 rounded-xl text-xs md:text-sm font-black transition-all uppercase tracking-wider border border-white/20 shadow-[0_0_15px_rgba(40,167,69,0.4)] bg-[#28a745] text-white hover:bg-[#218838] hover:scale-105 cursor-pointer active:scale-95"
        >
          INICIAR DIAGNÓSTICO GRATIS →
        </button>
      </div>
    </div>
  );
}