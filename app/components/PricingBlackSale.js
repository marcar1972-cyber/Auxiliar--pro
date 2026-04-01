"use client";

import { Check, Clock } from "lucide-react";

/**
 * < macz.dev />
 * COMPONENTE: PricingBlackSale
 * CORRECCIÓN VISUAL: Estilo "Science Clean" / Dark Tech. Emojis eliminados,
 * fecha actualizada al 07 de Abril y tipografía unificada.
 */

export default function PricingBlackSale() {
  return (
    <section className="my-12 relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-1 border border-emerald-500/30 shadow-2xl">
      {/* Efecto de Iluminación Superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
      
      {/* BANNER INTEGRADO - ALTO IMPACTO Y PROFESIONAL */}
      <div className="w-full bg-slate-900/80 border-b border-emerald-500/20 py-4 px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span className="text-white font-black text-lg md:text-xl tracking-tighter uppercase">
            Black Sale: 30 Marzo al 07 Abril 2026
          </span>
          <span className="hidden md:block text-emerald-500 opacity-50">|</span>
          <span className="text-emerald-400 font-bold text-sm md:text-base uppercase tracking-widest">
            Hasta 40% OFF en Planes PRO
          </span>
        </div>
      </div>

      <div className="relative z-10 p-6 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Suscripción <span className="text-emerald-500">PRO</span>
          </h2>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest">
            <Clock size={16} className="text-emerald-500" />
            Válido hasta el 07 de Abril 2026
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Mensual - Oferta */}
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 hover:border-emerald-500/30 transition-all flex flex-col">
            <div className="mb-6">
              <h3 className="text-slate-300 font-black text-lg uppercase tracking-tight">Plan Mensual</h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-slate-500 text-sm line-through font-bold">$5.990</span>
                <span className="bg-slate-800 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest border border-emerald-500/20">30% OFF</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-black text-white">$3.990</span>
                <span className="text-slate-500 text-xs font-bold">/ mes</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Simulador Inicial Completo: Niveles 1 al 7
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Simulador Avanzado: Tipo SEREMI
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Vademécum Profesional (Beta)
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                <Check size={18} className="text-slate-600 shrink-0 mt-0.5" /> Asistente IA Farmacéutico (Lanzamiento Abril)
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                <Check size={18} className="text-slate-600 shrink-0 mt-0.5" /> Módulo de Psicología (Lanzamiento Abril)
              </li>
            </ul>

            <button className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm transition-all uppercase tracking-widest border border-slate-700">
              Obtener Mensual
            </button>
          </div>

          {/* Plan Anual - DESTACADO BLACK SALE */}
          <div className="bg-slate-900 border-2 border-emerald-500 rounded-[2rem] p-8 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">
              Mejor Valor
            </div>

            <div className="mb-6">
              <h3 className="text-emerald-400 font-black text-lg uppercase tracking-tight">Plan Anual</h3>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-slate-500 text-sm line-through font-bold">$49.990</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded border border-emerald-500/20">40% OFF</span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-black text-white">$35.990</span>
                <span className="text-slate-500 text-xs font-bold">/ año</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Simulador Inicial Completo: Niveles 1 al 7
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Simulador Avanzado: Tipo SEREMI
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Vademécum Profesional (Beta)
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Asistente IA Farmacéutico (Lanzamiento Abril)
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Módulo de Psicología (Lanzamiento Abril)
              </li>
            </ul>

            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 rounded-xl font-black text-sm transition-all uppercase tracking-widest shadow-lg shadow-emerald-500/20">
              Obtener Anual
            </button>
          </div>
        </div>

        {/* Bloque de Información de Cancelación */}
        <div className="mt-12 mb-4 text-center">
          <div className="inline-block bg-slate-900 border border-slate-800 px-6 py-4 rounded-xl">
            <p className="text-slate-400 text-xs font-medium">
              Si deseas cancelar tu suscripción envíanos un correo a <span className="text-emerald-500 font-bold">hola@auxiliarpro.cl</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}