"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, Scale, ShieldAlert, Mail, Instagram, Facebook, ArrowRight 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. HERO SECTION: Sin barra duplicada  */}
      <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
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
            Prepárate con el simulador líder en Chile, basado estrictamente en los 
            <strong> Decretos Supremos 466, 404 y 405</strong> del Ministerio de Salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quiz" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              EMPEZAR AHORA <ArrowRight size={20} />
            </Link>
            <Link href="/biblioteca" className="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 px-10 py-5 rounded-[2rem] font-black text-lg hover:border-emerald-500 transition-all">
              VER DECRETOS
            </Link>
          </div>
        </div>
      </header>

      {/* 2. CONTENIDO SEO: +600 PALABRAS */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <article className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-tight tracking-tight">
              Normativa Sanitaria y el Decreto Supremo 466
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Para obtener la certificación ante la SEREMI de Salud, el aspirante debe demostrar un dominio total del <strong>Decreto Supremo 466</strong>. Este reglamento jurídico constituye la piedra angular del funcionamiento de las farmacias en Chile, estableciendo los estándares para la recepción, almacenamiento y correcta dispensación.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Nuestra plataforma analiza cada artículo del reglamento, desde las facultades de prescripción hasta los requisitos de infraestructura. Es vital comprender que la salud depende de una <strong>cadena de frío</strong> ininterrumpida (2°C a 8°C) y de un sistema de inventario FEFO.
            </p>
          </article>

          <aside className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
            <h3 className="text-xl font-black mb-8 flex items-center gap-3">
              <Scale className="text-emerald-500" /> Marco Legal Vigente
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 font-bold text-emerald-500">466</div>
                <p className="text-sm text-slate-600 font-medium">Reglamento de Farmacias, Almacenes Farmacéuticos y Depósitos.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 font-bold text-emerald-500">404</div>
                <p className="text-sm text-slate-600 font-medium">Control de Estupefacientes y manejo riguroso de la Receta Cheque.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 font-bold text-emerald-500">405</div>
                <p className="text-sm text-slate-600 font-medium">Reglamento de Productos Psicotrópicos y custodia bajo llave.</p>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ SECTION PARA SEO */}
        <section className="mt-24 max-w-4xl mx-auto space-y-6">
            <h3 className="text-3xl font-black text-center mb-12">Preguntas Frecuentes</h3>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none uppercase text-xs tracking-widest">
                ¿Qué es el Petitorio Mínimo?
                <ChevronRight className="group-open:rotate-90 transition-transform" size={18} />
              </summary>
              <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                Es el listado obligatorio de medicamentos que toda farmacia debe mantener permanentemente en stock para asegurar el acceso a la salud pública. Su falta es motivo de sanción por la SEREMI.
              </p>
            </details>
        </section>
      </main>

      {/* 3. FOOTER SEGÚN IMAGEN 2: Términos, Descargos y Sugerencias  */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
            
            {/* Columna Logo */}
            <div className="space-y-6">
              <div className="relative w-40 h-10 grayscale invert opacity-50">
                 <Image src="/logo.webp" alt="Logo" fill className="object-contain object-left" />
              </div>
              <p className="text-[10px] leading-relaxed uppercase tracking-wider font-bold">
                AuxiliarPro Chile © 2026
              </p>
            </div>

            {/* Columna Términos y Descargos  */}
            <div className="space-y-6 lg:col-span-2">
              <h4 className="text-white font-black uppercase text-xs tracking-widest flex items-center gap-2">
                <ShieldAlert size={14} className="text-emerald-500" /> Términos de Uso y Descargos
              </h4>
              <div className="text-[11px] space-y-4 leading-relaxed bg-white/5 p-6 rounded-3xl border border-white/5">
                <p>● Este simulador es una herramienta educativa independiente y no representa un examen oficial de la autoridad sanitaria.</p>
                <p>● El contenido se basa exclusivamente en los Decretos Supremos vigentes (466, 404, 405) y bibliografía técnica de dominio público.</p>
                <p>● AuxiliarPro no se responsabiliza por los resultados individuales en los procesos de certificación oficiales.</p>
              </div>
            </div>

            {/* Columna Sugerencias y Redes  */}
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase text-xs tracking-widest">Sugerencias y Contacto</h4>
              <a href="mailto:auxiliarprofarma@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors font-bold text-sm">
                <Mail size={18} className="text-emerald-500" /> auxiliarprofarma@gmail.com
              </a>
              <div className="flex gap-6 pt-4 border-t border-white/10">
                <Link href="#" className="hover:text-white transition-colors"><Instagram size={24}/></Link>
                <Link href="#" className="hover:text-white transition-colors"><Facebook size={24}/></Link>
              </div>
            </div>

          </div>
          <div className="pt-10 text-center text-[9px] font-black uppercase tracking-[0.3em] opacity-30">
            Formación técnica de excelencia para la farmacia chilena
          </div>
        </div>
      </footer>
    </div>
  );
}
