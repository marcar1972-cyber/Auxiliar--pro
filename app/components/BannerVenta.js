"use client";

import React from "react";
import Link from "next/link";
import { Lock, ArrowRight, CheckCircle } from "lucide-react";

export default function BannerVenta() {
  return (
    <>
      {/* BANNER BLACK SALE - TRÁFICO A PLANES (DARK TECH / RED AESTHETIC) */}
      <div className="bg-slate-950 rounded-[2.5rem] p-6 shadow-2xl border-2 border-red-600/40 mt-8 relative overflow-hidden w-full transition-all hover:border-red-500/60">
        
        {/* Resplandor Rojo de fondo para el Black Sale */}
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 rounded-full blur-[80px] md:blur-[120px] opacity-20 bg-red-600 pointer-events-none"></div>
        
        <div className="relative z-10 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 border bg-red-600/10 text-red-500 border-red-500/30 animate-pulse">
                🔥 Black Sale: Hasta el 07 de Abril
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-white mb-4 flex items-center gap-3 leading-tight uppercase tracking-tighter">
                <Lock className="text-emerald-500 shrink-0" size={24} /> Desbloquea tu potencial
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                Toma el control de tu certificación SEREMI. Accede al arsenal completo de AuxiliarPro con hasta un <strong className="text-red-400">40% de descuento</strong>.
            </p>
            
            <ul className="space-y-3 mb-6 ml-1 text-sm md:text-base">
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-emerald-500" />
                <span className="text-left"><strong className="text-white">Simulador Inicial Completo:</strong> Niveles 1 al 7.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-emerald-500" />
                <span className="text-left"><strong className="text-white">Simulador Avanzado:</strong> Preguntas complejas tipo SEREMI.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-emerald-500" />
                <span className="text-left"><strong className="text-white">Vademécum Profesional (Beta)</strong>.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-slate-600" />
                <span className="text-left">Próximamente (Abril): Asistente IA y Módulo Psicología.</span>
              </li>
            </ul>
            
            <div className="block bg-slate-900/80 p-5 rounded-2xl border border-slate-800 shadow-inner mb-6 w-full text-center">
              <div className="flex flex-col gap-4 w-full">
                  <div className="w-full">
                    <span className="text-white font-black text-lg block mb-1 leading-tight uppercase">
                      Asegura tu Nivel PRO
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold text-red-500">
                      Oferta por tiempo limitado
                    </span>
                  </div>
                  
                  <div className="w-full mt-1">
                    <Link 
                      href="/planes"
                      className="w-full font-black py-4 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.2)] bg-red-600 hover:bg-red-500 text-white transform hover:-translate-y-1 active:scale-95"
                    >
                      VER PLANES Y DESCUENTOS <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>

            <Link href="/quiz" className="block w-full text-center font-bold py-3.5 rounded-xl text-xs md:text-sm transition-all flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 uppercase tracking-widest">
                Continuar en versión gratis
            </Link>
        </div>
      </div>
      
      {/* AVISO LEGAL MINIMALISTA */}
      <div className="mt-8 text-center px-4 w-full">
          <p className="text-[10px] md:text-[11px] text-slate-500 leading-relaxed max-w-xl mx-auto uppercase tracking-widest font-bold">
              La preparación teórica no reemplaza la acreditación de experiencia laboral exigida por SEREMI.
          </p>
      </div>
    </>
  );
}