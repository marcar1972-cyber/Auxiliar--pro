"use client";

import React from "react";
import Link from "next/link";
import { Lock, ArrowRight, CheckCircle } from "lucide-react";

export default function BannerVenta() {
  return (
    <>
      {/* BANNER TRÁFICO A PLANES (V2 CLINICAL AESTHETIC) */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-lg border-2 border-[#28a745]/20 mt-8 relative overflow-hidden w-full transition-all hover:border-[#28a745]/50">
        
        {/* Resplandor verde brand de fondo según manual (Éxito/Salud) */}
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 rounded-full blur-[80px] md:blur-[120px] opacity-10 bg-[#28a745] pointer-events-none"></div>
        
        <div className="relative z-10 w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 border bg-[#28a745]/10 text-[#28a745] border-[#28a745]/30">
              🌟 Plataforma de Entrenamiento
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-[#003366] mb-4 flex items-center gap-3 leading-tight uppercase tracking-tighter">
              <Lock className="text-[#28a745] shrink-0" size={24} /> Desbloquea tu potencial
            </h3>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Toma el control de tu certificación SEREMI. Accede al arsenal completo de AuxiliarPro y obtén <strong className="text-[#28a745]">preparación total</strong> para el mesón.
            </p>
            
            <ul className="space-y-3 mb-6 ml-1 text-sm md:text-base">
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-[#28a745]" />
                <span className="text-left"><strong className="text-[#003366]">Simulador Inicial Completo:</strong> Niveles 1 al 3.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-[#28a745]" />
                <span className="text-left"><strong className="text-[#003366]">Simulador Avanzado:</strong> Preguntas complejas tipo SEREMI.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <CheckCircle size={18} className="shrink-0 mt-0.5 text-[#28a745]" />
                <span className="text-left"><strong className="text-[#003366]">Vademécum Profesional (Beta)</strong>.</span>
              </li>
            </ul>
            
            {/* Contenedor principal en Azul Médico (#003366) para transmitir rigor técnico */}
            <div className="block bg-[#003366] p-5 rounded-2xl border border-[#002244] shadow-inner mb-6 w-full text-center">
              <div className="flex flex-col gap-4 w-full">
                  <div className="w-full">
                    <span className="text-white font-black text-lg block mb-1 leading-tight uppercase">
                      Asegura tu Nivel PRO
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold text-[#28a745]">
                      Entrenamiento Oficial
                    </span>
                  </div>
                  
                  <div className="w-full mt-1">
                    <Link 
                      href="/planes"
                      /* Botón en Verde Brand (#28a745) para llamar al éxito de la compra */
                      className="w-full font-black py-4 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg bg-[#28a745] hover:bg-[#218838] text-white transform hover:-translate-y-1 active:scale-95"
                    >
                      VER PLANES PRO <ArrowRight size={16} />
                    </Link>
                  </div>
              </div>
            </div>

            <Link href="/quiz" className="block w-full text-center font-bold py-3.5 rounded-xl text-xs md:text-sm transition-all flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-[#003366] border border-slate-200 uppercase tracking-widest">
              Continuar en versión gratis
            </Link>
        </div>
      </div>
      
      {/* AVISO LEGAL MINIMALISTA - Tono Directo y Empático */}
      <div className="mt-8 text-center px-4 w-full">
          <p className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed max-w-xl mx-auto uppercase tracking-widest font-black">
              La preparación teórica no reemplaza la acreditación de experiencia laboral exigida por SEREMI.
          </p>
      </div>
    </>
  );
}