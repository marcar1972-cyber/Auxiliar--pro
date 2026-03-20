'use client';
import React from 'react';
import { Gamepad2, Sparkles, CheckCircle } from 'lucide-react';

export default function QuizHeader() {
  return (
    <header className="w-full bg-slate-50 border-b border-slate-100 py-10 px-6 mt-6 rounded-3xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest mb-3 bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Sparkles size={14} /> Actualizado Marzo 2026
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight mb-4">
            Simulador de Examen <br />
            <span className="text-emerald-600">Auxiliar de Farmacia</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 font-medium">
            Prepara tu examen de competencias ante la SEREMI con nuestro simulador interactivo. Pon a prueba tus conocimientos en legislación y farmacología.
          </p>
        </div>

        <div className="w-full md:w-auto shrink-0 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 min-w-[280px]">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 p-2.5 rounded-xl text-white">
                <Gamepad2 size={20} />
            </div>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Estructura</span>
          </div>
          <ul className="space-y-3.5 text-sm">
            <li className="flex items-center gap-3 text-slate-700">
              <CheckCircle size={18} className="text-emerald-500 shrink-0" />
              <span><strong>Niveles 1 y 2:</strong> <span className="text-emerald-600 font-bold">GRATIS</span></span>
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-300 shrink-0"></div>
              <span><strong>Niveles 3 al 7:</strong> Contenido <strong className="text-slate-900">PRO</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}