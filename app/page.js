"use client";

import Link from "next/link";
import { ArrowRight, Scale, Thermometer, ShieldAlert, Pill, ClipboardList, ChevronRight } from "lucide-react";
import Footer from "./components/Footer"; // Importamos el componente blindado

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* HERO SECTION */}
      <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-emerald-100 italic">
            Comunidad de +50 alumnos activos
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
            Tu examen <span className="text-emerald-500">SEREMI</span> <br/>comienza aquí.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
            Entrena con bases legales de los <strong>Decretos 466, 404 y 405</strong>. 
            Contenido técnico actualizado para el proceso 2026.
          </p>
          <Link href="/quiz" className="inline-flex items-center gap-2 bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl">
            EMPEZAR AHORA <ArrowRight />
          </Link>
        </div>
      </header>

      {/* 5 ARTÍCULOS TÉCNICOS (DENSIDAD SEO) */}
      <main className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100">
        <h2 className="text-center font-black text-2xl uppercase tracking-widest mb-16">Módulos Técnicos de Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Scale className="text-emerald-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Rol Técnico y DS 466</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Estudio del rol del auxiliar bajo el Decreto Supremo 466 y sus responsabilidades legales.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Thermometer className="text-blue-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Cadena de Frío</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Manejo térmico estricto (2°C a 8°C) para medicamentos termolábiles según normativa.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <ShieldAlert className="text-purple-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Controlados 404/405</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Gestión de Estupefacientes y Psicotrópicos. Custodia bajo llave y archivo documental.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Pill className="text-amber-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Ley de Fármacos II</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Bioequivalencia obligatoria y normativa sobre fraccionamiento en farmacias.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <ClipboardList className="text-rose-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Farmacovigilancia</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Reporte de Reacciones Adversas (RAM) directamente al Instituto de Salud Pública.</p>
          </article>
        </div>

        {/* FAQS PARA SEO */}
        <section className="mt-24 max-w-4xl mx-auto space-y-4">
          <h3 className="text-center font-black text-xl mb-10">Preguntas Frecuentes</h3>
          <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">Petitorio Mínimo <ChevronRight size={14}/></summary>
            <p className="mt-4 text-slate-600 text-sm">Stock obligatorio para asegurar acceso a la salud.</p>
          </details>
          <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">Vigencia Receta <ChevronRight size={14}/></summary>
            <p className="mt-4 text-slate-600 text-sm">6 meses según DS 466.</p>
          </details>
        </section>
      </main>

      <Footer />
    </div>
  );
}
