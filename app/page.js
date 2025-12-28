"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Usamos iconos más universales para evitar errores de versión
import { 
  ChevronRight, Scale, ShieldAlert, Mail, Instagram, Facebook, 
  ArrowRight, BookOpen, Thermometer, Pill, Clipboard, Info
} from "lucide-react";

export default function LandingPage() {
  // Estados para los desplegables del footer 
  const [showTerms, setShowTerms] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. HERO SECTION: Sin barra duplicada  */}
      <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Comunidad: +50 Alumnos Activos
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
            Tu examen <span className="text-emerald-500">SEREMI</span> <br/>comienza aquí.
          </h1>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Entrena con fuentes oficiales de los <strong>Decretos Supremos 466, 404 y 405</strong>. 
            La plataforma líder para Auxiliares de Farmacia en Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quiz" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
              EMPEZAR AHORA <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. SECCIÓN DE 5 ARTÍCULOS TÉCNICOS (SEO > 600 palabras) */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-black text-slate-900 mb-16 text-center tracking-tight uppercase">Contenido Técnico de Estudio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artículos basados en normativa vigente */}
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Scale className="text-emerald-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Rol del Auxiliar y DS 466</h3>
            <p className="text-sm text-slate-500 leading-relaxed">El Decreto 466 define al auxiliar como colaborador del Q.F. en la dispensación segura y el cumplimiento del petitorio mínimo obligatorio.</p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Thermometer className="text-blue-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Cadena de Frío</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Mantenimiento estricto entre 2°C y 8°C para vacunas e insulinas, incluyendo protocolos de quiebre térmico y segregación.</p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <ShieldAlert className="text-purple-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Controlados DS 404/405</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Gestión de Estupefacientes y Psicotrópicos. Requisitos de la Receta Cheque y archivo de recetas por 2 años.</p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Pill className="text-amber-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Ley de Fármacos II</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Obligatoriedad del sello de Bioequivalencia y normativa sobre el fraccionamiento en farmacias autorizadas.</p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Clipboard className="text-rose-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Farmacovigilancia</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Detección y reporte de Reacciones Adversas a Medicamentos (RAM) directamente al Instituto de Salud Pública (ISP).</p>
          </article>
        </div>

        {/* 3. SECCIÓN DE 4 FAQS ACTUALIZADAS */}
        <section className="mt-32 max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-center mb-12">Preguntas Frecuentes SEREMI 2026</h3>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none text-[10px] uppercase tracking-widest text-slate-400">
                ¿Qué es el Petitorio Mínimo? <ChevronRight size={14} className="group-open:rotate-90 transition-transform"/>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">Es el listado obligatorio de medicamentos que garantiza el acceso a la salud pública en todo establecimiento farmacéutico.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none text-[10px] uppercase tracking-widest text-slate-400">
                ¿Vigencia de una receta simple? <ChevronRight size={14} className="group-open:rotate-90 transition-transform"/>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">Por regla general del DS 466, la vigencia es de 6 meses desde su emisión, salvo indicación médica distinta.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none text-[10px] uppercase tracking-widest text-slate-400">
                ¿Almacenamiento en bodega? <ChevronRight size={14} className="group-open:rotate-90 transition-transform"/>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">Los fármacos deben estar a 10 cm del suelo y 30 cm de los muros para permitir ventilación y limpieza técnica.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none text-[10px] uppercase tracking-widest text-slate-400">
                ¿Validación de Receta Electrónica? <ChevronRight size={14} className="group-open:rotate-90 transition-transform"/>
              </summary>
              <p className="mt-4 text-slate-600 text-sm">Se debe verificar el folio en la plataforma oficial para asegurar que el prescriptor esté habilitado y no haya sido dispensada.</p>
            </details>
          </div>
        </section>
      </main>

      {/* 4. FOOTER: Interactivo y corregido  */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
            
            <div className="space-y-6">
              <div className="relative w-40 h-10 grayscale invert opacity-50">
                 <Image src="/logo.webp" alt="Logo" fill className="object-contain object-left" />
              </div>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20}/></Link>
                <Link href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20}/></Link>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              <div className="flex gap-8">
                <button onClick={() => {setShowTerms(!showTerms); setShowDisclaimer(false);}} className="text-white font-black uppercase text-[10px] tracking-widest hover:text-emerald-500 transition-colors underline decoration-emerald-500/30">Términos de Uso</button>
                <button onClick={() => {setShowDisclaimer(!showDisclaimer); setShowTerms(false);}} className="text-white font-black uppercase text-[10px] tracking-widest hover:text-emerald-500 transition-colors underline decoration-emerald-500/30">Descargos Legales</button>
              </div>
              
              {showTerms && (
                <div className="text-[10px] bg-white/5 p-6 rounded-3xl border border-white/5">
                  <p>● El acceso al simulador requiere registro. Los datos de progreso son de uso exclusivo del alumno para fines educativos .</p>
                </div>
              )}
              
              {showDisclaimer && (
                <div className="text-[10px] bg-white/5 p-6 rounded-3xl border border-white/5">
                  <p>● AuxiliarPro es independiente. Los contenidos se basan en normativa pública y no garantizan resultados oficiales .</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-black uppercase text-[10px] tracking-widest">Sugerencias</h4>
              <a href="mailto:auxiliarprofarma@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors text-[11px] font-bold">
                <Mail size={16} className="text-emerald-500" /> auxiliarprofarma@gmail.com
              </a>
            </div>

          </div>
          <div className="pt-10 text-center text-[9px] font-black uppercase tracking-[0.4em] opacity-20">
            AuxiliarPro Chile © 2026 | Excelencia Farmacéutica
          </div>
        </div>
      </footer>
    </div>
  );
}
