"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function BannerUrgencia() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleIrAlSorteo = () => {
    // Abre el post de Facebook en una pestaña nueva para no sacar al alumno de tu web
    window.open('https://www.facebook.com/share/p/1BPcNb4SUu/', '_blank', 'noopener,noreferrer');
  };

  if (!isMounted) return null;

  return (
    <div className="bg-[#0b2545] text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 shadow-[0_4px_30px_rgba(224,168,0,0.2)] z-50 relative w-full overflow-hidden border-b-2 border-[#e0a800]">
      
      {/* Efecto de Brillo de Fondo adaptado al sorteo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#e0a800] rounded-full blur-[100px] opacity-25 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full blur-[80px] opacity-15 -ml-20 -mb-20 pointer-events-none"></div>

      {/* Textos Principales del Sorteo */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-center max-w-full relative z-10">
        <div className="bg-[#e0a800] text-[#0b2545] font-black text-xs px-2 py-0.5 rounded-md tracking-wider uppercase shadow-[0_0_10px_rgba(224,168,0,0.5)]">
          🎁 ¡SORTEO ACTIVO!
        </div>
        <span className="leading-tight text-white font-bold tracking-tight">
          Participa por una Suscripción Mensual PRO gratis y asegura tu examen SEREMI
        </span>
        <span className="hidden lg:inline opacity-30 text-white">|</span>
        <span className="leading-tight text-yellow-400 font-extrabold italic">
          ⏳ Tienes plazo hasta el 26 de Julio
        </span>
      </div>
      
      {/* Botón de Acción Directo al Post de Facebook */}
      <div className="flex flex-row items-center gap-2 shrink-0 relative z-10 mt-1 lg:mt-0">
        <button 
          onClick={handleIrAlSorteo}
          className="shrink-0 px-6 py-2 rounded-xl text-xs md:text-sm font-black transition-all uppercase tracking-wider border border-white/20 shadow-[0_0_15px_rgba(224,168,0,0.4)] bg-[#e0a800] text-[#0b2545] hover:bg-[#c69500] hover:scale-105 cursor-pointer active:scale-95 dynamic-bounce"
        >
          PARTICIPAR AQUÍ →
        </button>
      </div>
    </div>
  );
}