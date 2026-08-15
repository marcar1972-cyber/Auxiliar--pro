"use client";

import Link from "next/link";
import { ChevronLeft, Activity, Target, AlertTriangle } from "lucide-react";

export default function BasicQuizMenu() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans relative">
      
      {/* Navegación Semántica */}
      <nav className="bg-white p-6 shadow-sm sticky top-0 z-50 border-b border-slate-100" aria-label="Navegación principal">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link 
            href="/quiz" 
            className="text-slate-400 hover:text-[#003366] cursor-pointer transition-colors"
            aria-label="Volver al Lobby de Entrenamiento"
            title="Volver al Lobby"
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </Link>
          <span className="text-xl font-black text-[#003366] tracking-tighter">Volver al Lobby</span>
        </div>
      </nav>

      <section className="p-6 max-w-3xl mx-auto mt-6">
        
        {/* Cabecera - Diagnóstico */}
        <header className="mb-10 text-center">
          <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-5xl shrink-0 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg mb-6 animate-pulse">
            <Activity size={48} aria-hidden="true" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#003366] tracking-tight leading-tight mb-4">
            Diagnóstico <span className="text-red-600">SEREMI 2026</span>
          </h1>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-2">
            Descubre tu nivel real en <strong>10 preguntas</strong>. Identifica tus áreas débiles antes del examen oficial.
          </p>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 text-xs font-bold text-amber-800">
            <AlertTriangle size={14} />
            <span>Sin límite de tiempo • Resultado inmediato</span>
          </div>
        </header>

        {/* Tarjeta de Diagnóstico - CTA Principal */}
        <div className="mb-8">
          <Link 
            href="/quiz/basic/diagnostico"
            className="block w-full p-8 bg-gradient-to-br from-[#003366] to-[#004a99] rounded-3xl border-2 border-[#003366] hover:shadow-2xl transition-all group text-left focus:outline-none focus:ring-4 focus:ring-[#28a745] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#28a745]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-black text-white text-2xl mb-2">Iniciar Diagnóstico</h2>
                  <p className="text-blue-100 text-sm">Evalúa tus conocimientos actuales</p>
                </div>
                <Target size={40} className="text-[#28a745] shrink-0" aria-hidden="true" />
              </div>
              
              <div className="flex items-center gap-4 text-xs text-blue-200 mb-4">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#28a745] rounded-full"></div>
                  10 preguntas
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#28a745] rounded-full"></div>
                  ~5 minutos
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#28a745] rounded-full"></div>
                  Gratis
                </span>
              </div>

              <button className="w-full bg-[#28a745] hover:bg-[#218838] text-white font-bold py-4 rounded-xl transition-colors shadow-lg group-hover:scale-105 transform duration-200">
                COMENZAR DIAGNÓSTICO
              </button>
            </div>
          </Link>
        </div>

        {/* Información sobre el diagnóstico */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-6">
          <h3 className="font-black text-[#003366] text-lg mb-3">¿Qué evalúa este diagnóstico?</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-[#28a745] font-bold">✓</span>
              <span><strong>Normativa MINSAL:</strong> Decreto 466, Ley de Fármacos, Recetas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#28a745] font-bold">✓</span>
              <span><strong>Control de Medicamentos:</strong> Estupefacientes, Psicotrópicos (DS 404/405)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#28a745] font-bold">✓</span>
              <span><strong>Farmacología Básica:</strong> Posología, Vías de administración</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#28a745] font-bold">✓</span>
              <span><strong>Casos Prácticos:</strong> Situaciones reales de farmacia</span>
            </li>
          </ul>
        </div>

        {/* CTA hacia PRO */}
        <aside className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#28a745]/5 rounded-full -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#28a745] text-white p-2 rounded-lg">
                <Target size={20} />
              </div>
              <h3 className="font-black text-white text-lg">Después del diagnóstico...</h3>
            </div>
            
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Recibirás un reporte detallado con tus <strong className="text-white">áreas débiles</strong> y un plan de estudio personalizado. 
              Luego podrás acceder al <strong className="text-[#28a745]">Campus PRO</strong> con el banco completo de preguntas SEREMI 2026.
            </p>
            
            <Link 
              href="/campus"
              className="inline-block w-full text-center bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-xl transition-colors"
            >
              Ver Campus PRO →
            </Link>
          </div>
        </aside>
        
      </section>

      <footer className="mt-12 p-8 text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest border-t border-slate-200/50">
        AuxiliarPro App | &lt; macz.dev /&gt;
      </footer>
    </main>
  );
}