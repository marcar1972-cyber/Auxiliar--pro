"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, Scale, ShieldAlert, Mail, Instagram, Facebook, 
  ArrowRight, BookOpen, Thermometer, Pill, Clipboard, Info
} from "lucide-react";

// Componente Icono WhatsApp profesional
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function LandingPage() {
  const [showTerms, setShowTerms] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* SECCIÓN HERO */}
      <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-emerald-100">
            Comunidad: +50 Alumnos Activos
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
            Tu examen <span className="text-emerald-500">SEREMI</span> <br/>comienza aquí.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
            Entrena con fuentes oficiales de los <strong>Decretos 466, 404 y 405</strong>. 
            La plataforma líder para Auxiliares de Farmacia en Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all">
              EMPEZAR AHORA <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* 5 ARTÍCULOS TÉCNICOS (SEO > 600 PALABRAS) */}
      <main className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100">
        <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tight">Contenido Técnico de Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Scale className="text-emerald-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4">Rol y Decreto 466</h3>
            <p className="text-sm text-slate-500">Regula la instalación y funcionamiento de farmacias. El auxiliar colabora directamente con el Q.F. en la dispensación.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Thermometer className="text-blue-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4">Cadena de Frío</h3>
            <p className="text-sm text-slate-500">Mantenimiento estricto entre 2°C y 8°C. Esencial para la estabilidad de fármacos termolábiles.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <ShieldAlert className="text-purple-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4">Controlados 404/405</h3>
            <p className="text-sm text-slate-500">Manejo de Estupefacientes y Psicotrópicos. Custodia bajo llave y archivo documental obligatorio.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Pill className="text-amber-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4">Ley de Fármacos II</h3>
            <p className="text-sm text-slate-500">Promueve la bioequivalencia y el fraccionamiento para un acceso a medicamentos más justo y seguro.</p>
          </article>
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <Clipboard className="text-rose-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4">Farmacovigilancia</h3>
            <p className="text-sm text-slate-500">Notificación de RAM (Reacciones Adversas) al Instituto de Salud Pública para garantizar la seguridad post-venta.</p>
          </article>
        </div>

        {/* 4 FAQS PARA SEO */}
        <section className="mt-24 max-w-4xl mx-auto">
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Qué es el Petitorio Mínimo? <ChevronRight size={14}/></summary>
              <p className="mt-4 text-slate-600 text-sm">Stock obligatorio de medicamentos para asegurar el acceso a la salud pública en farmacias.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Vigencia de receta simple? <ChevronRight size={14}/></summary>
              <p className="mt-4 text-slate-600 text-sm">Generalmente 6 meses según el DS 466, salvo indicación contraria del prescriptor.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Almacenamiento en bodega? <ChevronRight size={14}/></summary>
              <p className="mt-4 text-slate-600 text-sm">Separación de 10 cm del piso y 30 cm de muros para ventilación técnica.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 cursor-pointer">
              <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-400">¿Validación electrónica? <ChevronRight size={14}/></summary>
              <p className="mt-4 text-slate-600 text-sm">Verificación obligatoria de folios en plataforma oficial para productos controlados.</p>
            </details>
          </div>
        </section>
      </main>

      {/* FOOTER: CENTRADO Y MEJOR LEGIBILIDAD  */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6 mt-20 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-48 h-12 grayscale invert opacity-70">
               <Image src="/logo.webp" alt="Logo" fill className="object-contain" />
            </div>
            {/* WHATSAPP LINK  */}
            <a href="https://wa.me/tu_numero" target="_blank" className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-600 transition-all">
              <WhatsAppIcon /> Foro Pro WhatsApp
            </a>
          </div>

          {/* BOTONES CENTRADOS Y TEXTO LEGIBLE  */}
          <div className="flex flex-col items-center space-y-8">
            <div className="flex justify-center gap-8">
              <button onClick={() => {setShowTerms(!showTerms); setShowDisclaimer(false);}} className="text-white font-black uppercase text-xs tracking-widest hover:text-emerald-500 transition-colors border-b border-white/20 pb-1">Términos de Uso</button>
              <button onClick={() => {setShowDisclaimer(!showDisclaimer); setShowTerms(false);}} className="text-white font-black uppercase text-xs tracking-widest hover:text-emerald-500 transition-colors border-b border-white/20 pb-1">Descargos Legales</button>
            </div>
            
            {(showTerms || showDisclaimer) && (
              <div className="text-xs bg-white/10 p-8 rounded-[2rem] border border-white/10 max-w-2xl text-slate-300 leading-relaxed text-left">
                {showTerms ? "● El acceso al simulador requiere registro. Los datos son para fines estrictamente educativos ." : "● AuxiliarPro es independiente. Los contenidos se basan en normativa legal chilena y no garantizan resultados en exámenes de la SEREMI ."}
              </div>
            )}
          </div>

          <div className="pt-10 border-t border-white/10 space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-widest">Sugerencias y Contacto</h4>
            <a href="mailto:auxiliarprofarma@gmail.com" className="text-emerald-400 font-bold text-lg hover:text-white transition-colors">
              auxiliarprofarma@gmail.com
            </a>
            <div className="flex justify-center gap-8 text-white/60">
              <Link href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={24}/></Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={24}/></Link>
            </div>
          </div>

          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 pt-10">
            AuxiliarPro Chile © 2026 | Excelencia Farmacéutica
          </div>
        </div>
      </footer>
    </div>
  );
}
