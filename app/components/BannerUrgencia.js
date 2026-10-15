"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function BannerUrgencia() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleVerPlanes = () => {
    // Redirección directa y exacta a la página de planes
    router.push('/planes');
  };

  if (!isMounted) return null;

  return (
    <div className="bg-slate-900 text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 shadow-[0_4px_30px_rgba(40,167,69,0.2)] z-50 relative w-full overflow-hidden border-b-2 border-[#28a745]">
      
      {/* Efectos de luz sutiles de fondo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#28a745] rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500 rounded-full blur-[80px] opacity-15 -ml-20 -mb-20 pointer-events-none"></div>

      {/* Textos Principales */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-center max-w-full relative z-10">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-md tracking-wider uppercase shadow-[0_0_12px_rgba(245,158,11,0.4)]">
          ⭐ MÁS POPULAR
        </div>
        <span className="leading-tight text-white font-bold tracking-tight">
          Campus Virtual PRO:{" "}
          <span className="text-slate-200 font-extrabold">4 Módulos de Estudio</span> +{" "}
          <span className="text-emerald-400 font-extrabold">2 Simuladores SEREMI</span> +{" "}
          <span className="text-amber-300 font-extrabold">Certificado AuxiliarPro</span>{" "}
          por solo <span className="text-white font-black text-sm md:text-base">$5.990</span> / 30 días
        </span>
      </div>
      
      {/* Botón de Acción Directo a la página /planes */}
      <div className="flex flex-row items-center gap-2 shrink-0 relative z-10 mt-1 lg:mt-0">
        <button 
          onClick={handleVerPlanes}
          className="shrink-0 px-6 py-2 rounded-xl text-xs md:text-sm font-black transition-all uppercase tracking-wider border border-white/20 shadow-[0_0_15px_rgba(40,167,69,0.4)] bg-[#28a745] text-white hover:bg-[#218838] hover:scale-105 cursor-pointer active:scale-95"
        >
          OBTENER PLAN PRO →
        </button>
      </div>
    </div>
  );
}