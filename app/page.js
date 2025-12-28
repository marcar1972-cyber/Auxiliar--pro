"use client";

import Link from "next/link";
import { ChevronRight, Scale, Thermometer, Pill, Clipboard, ShieldAlert, ArrowRight } from "lucide-react";
import Footer from "./components/Footer"; 

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
        <h2 className="text-center font-black text-2xl uppercase tracking-widest mb-16 italic">Artículos Técnicos de Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Scale className="text-emerald-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Rol Técnico y DS 466</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Estudio profundo sobre las facultades del auxiliar bajo el Decreto Supremo 466 y la normativa de dispensación vigente.
            </p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Thermometer className="text-blue-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Cadena de Frío</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Normativa técnica de temperatura (2°C a 8°C) para fármacos termolábiles y manejo de termohigrómetros.
            </p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <ShieldAlert className="text-purple-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Controlados 404/405</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Manejo legal de Estupefacientes y Psicotrópicos. Requisitos de Receta Cheque y Retenida según la autoridad sanitaria.
            </p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Pill className="text-amber-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Bioequivalencia</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Importancia del sello amarillo, estudios de biodisponibilidad y el intercambio seguro de medicamentos genéricos.
            </p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Clipboard className="text-rose-500 mb-6" />
            <h3 className="font-black text-xl mb-4">Farmacovigilancia</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Notificación obligatoria de RAM (Reacciones Adversas) al ISP y protocolos de seguridad post-dispensación.
            </p>
          </article>
        </div>

        {/* SECCIÓN DE ACCESO A FAQS (Reemplaza la lista anterior) */}
        <div className="mt-32 flex flex-col items-center">
          <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 w-full max-w-3xl text-center shadow-sm">
            <h4 className="text-2xl font-black text-slate-900 mb-4">¿Tienes dudas técnicas?</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium max-w-lg mx-auto leading-relaxed">
              Consulta nuestro centro de respuestas detalladas sobre el Decreto 466, 
              almacenamiento técnico a 10cm del suelo y validación de recetas electrónicas.
            </p>
            
            <Link 
              href="/faq" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 border-2 border-slate-200 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm group"
            >
              Ver todas las FAQs 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
