"use client";

import Link from "next/link";
import { ChevronLeft, BrainCircuit, PlayCircle, ShieldCheck } from "lucide-react"; 

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
        
        {/* Cabecera de la página - Optimizada con Keywords MINSAL/SEREMI */}
        <header className="mb-10 text-center">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl shrink-0 bg-[#28a745] text-white shadow-md mb-6">
            <BrainCircuit size={40} aria-hidden="true" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#003366] tracking-tight leading-tight mb-4">
            Simulador Inicial <span className="text-[#28a745]">Examen SEREMI</span>
          </h1>
          <h2 className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Completa los niveles básicos para dominar los fundamentos de farmacia. 
            Esta es la base teórica y legal para aprobar la certificación del <strong className="text-[#003366]">MINSAL</strong> y enfrentar la <strong className="text-[#28a745]">Prueba SEREMI</strong> en Chile con éxito.
          </h2>
        </header>

        {/* Tarjetas de Niveles - Transformadas a Links para indexación SEO */}
        <nav className="w-full space-y-4" aria-label="Niveles del Simulador Básico">
          
          <Link 
            href="/quiz/basic/basic-eval-1"
            className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#28a745] hover:shadow-lg transition-all group text-left focus:outline-none focus:ring-2 focus:ring-[#28a745]"
            title="Nivel Básico 1: Fundamentos legales y rol del auxiliar"
          >
            <div>
              <h3 className="font-black text-[#003366] text-lg mb-1">Nivel Básico 1: Introducción</h3>
              <p className="text-sm text-slate-500">Fundamentos legales (Decreto 466) y rol del auxiliar de farmacia.</p>
            </div>
            <PlayCircle size={32} className="text-slate-300 group-hover:text-[#28a745] transition-colors shrink-0" aria-hidden="true" />
          </Link>

          <Link 
            href="/quiz/basic/basic-eval-2"
            className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#28a745] hover:shadow-lg transition-all group text-left focus:outline-none focus:ring-2 focus:ring-[#28a745]"
            title="Nivel Básico 2: Atención en mesón y recetas médicas"
          >
            <div>
              <h3 className="font-black text-[#003366] text-lg mb-1">Nivel Básico 2: Dispensación</h3>
              <p className="text-sm text-slate-500">Atención en mesón, tipos de recetas médicas y dispensación correcta.</p>
            </div>
            <PlayCircle size={32} className="text-slate-300 group-hover:text-[#28a745] transition-colors shrink-0" aria-hidden="true" />
          </Link>

          <Link 
            href="/quiz/basic/basic-eval-3"
            className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#28a745] hover:shadow-lg transition-all group text-left focus:outline-none focus:ring-2 focus:ring-[#28a745]"
            title="Nivel Básico 3: Manejo de stock y casos de farmacia"
          >
            <div>
              <h3 className="font-black text-[#003366] text-lg mb-1">Nivel Básico 3: Operaciones</h3>
              <p className="text-sm text-slate-500">Manejo de stock, cadena de frío y resolución de casos de farmacia reales.</p>
            </div>
            <PlayCircle size={32} className="text-slate-300 group-hover:text-[#28a745] transition-colors shrink-0" aria-hidden="true" />
          </Link>

        </nav>

        {/* Call to action sutil para PRO */}
        <aside className="mt-12 bg-slate-100 p-6 rounded-2xl flex items-center gap-4 border border-slate-200">
          <ShieldCheck size={32} className="text-[#003366] shrink-0" aria-hidden="true" />
          <p className="text-sm text-slate-600">
            ¿Ya dominas los conceptos básicos? En el <strong className="text-[#003366]">Campus Virtual PRO</strong> encontrarás el simulador avanzado con formato SEREMI real validado para este año.
          </p>
        </aside>
        
      </section>

      <footer className="mt-12 p-8 text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest border-t border-slate-200/50">
        AuxiliarPro App | &lt; macz.dev /&gt;
      </footer>
    </main>
  );
}