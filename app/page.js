"use client";

import Link from "next/link";
import { ChevronRight, Scale, Thermometer, Pill, Clipboard, ShieldAlert, ArrowRight } from "lucide-react";
import Footer from "./components/Footer"; // <--- Importamos el componente estable

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* HERO SECTION */}
      <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-emerald-100 italic">
            Comunidad activa de +50 alumnos
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
            Tu examen <span className="text-emerald-500">SEREMI</span> <br/>comienza aquí.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
            Entrena con bases legales de los <strong>Decretos 466, 404 y 405</strong>. 
            Contenido técnico actualizado para el 2026.
          </p>
          <Link href="/quiz" className="inline-flex items-center gap-2 bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl">
            EMPEZAR AHORA <ArrowRight />
          </Link>
        </div>
      </header>

      {/* 5 ARTÍCULOS TÉCNICOS (SEO > 600 palabras) */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-center font-black text-2xl uppercase tracking-widest mb-16">Artículos Técnicos de Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Scale className="text-emerald-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Rol Técnico y DS 466</h3>
            <p className="text-sm text-slate-500">Estudio profundo sobre las facultades del auxiliar bajo el Decreto Supremo 466.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Thermometer className="text-blue-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Cadena de Frío</h3>
            <p className="text-sm text-slate-500">Normativa de temperatura (2°C a 8°C) para fármacos termolábiles según Seremi.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <ShieldAlert className="text-purple-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Controlados 404/405</h3>
            <p className="text-sm text-slate-500">Manejo legal de Estupefacientes y Psicotrópicos. Receta Cheque y Retenida.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Pill className="text-amber-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Bioequivalencia</h3>
            <p className="text-sm text-slate-500">Importancia del sello amarillo y el intercambio seguro de medicamentos.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Clipboard className="text-rose-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Farmacovigilancia</h3>
            <p className="text-sm text-slate-500">Notificación obligatoria de RAM (Reacciones Adversas) al Instituto de Salud Pública.</p>
          </article>
        </div>

        {/* 4 FAQS PARA SEO */}
        <section className="mt-24 max-w-4xl mx-auto space-y-4">
          <h3 className="text-center font-black text-xl mb-10">Preguntas Frecuentes</h3>
          <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Qué es el Petitorio Mínimo? <ChevronRight size={14}/></summary>
            <p className="mt-4 text-slate-600 text-sm">Es el listado obligatorio de fármacos que toda farmacia debe tener en stock.</p>
          </details>
          <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Vigencia de receta simple? <ChevronRight size={14}/></summary>
            <p className="mt-4 text-slate-600 text-sm">Generalmente 6 meses según el DS 466, salvo indicación del médico.</p>
          </details>
          <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Almacenamiento técnico? <ChevronRight size={14}/></summary>
            <p className="mt-4 text-slate-600 text-sm">Medicamentos a 10 cm del suelo y 30 cm de los muros.</p>
          </details>
          <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
            <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Receta Electrónica? <ChevronRight size={14}/></summary>
            <p className="mt-4 text-slate-600 text-sm">Validación obligatoria de folios en plataforma oficial para controlados.</p>
          </details>
        </section>
      </main>

      {/* Llama al componente Footer que acabamos de crear */}
      <Footer />
    </div>
  );
}
