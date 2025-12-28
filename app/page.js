"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, Scale, ShieldAlert, Mail, Instagram, Facebook, 
  ArrowRight, BookOpen, ThermometerSnowflake, Pill, ClipboardList, Info
} from "lucide-react";

export default function LandingPage() {
  // Estados para los desplegables del footer 
  const [showTerms, setShowTerms] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. HERO SECTION: Enfoque legal y comunidad */}
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
            <Link href="/quiz" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              EMPEZAR AHORA <ArrowRight size={20} />
            </Link>
            <Link href="/blog" className="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 px-10 py-5 rounded-[2rem] font-black text-lg hover:border-emerald-500 transition-all">
              LEER ARTÍCULOS
            </Link>
          </div>
        </div>
      </header>

      {/* 2. SECCIÓN DE 5 ARTÍCULOS: Densidad SEO > 600 palabras */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-black text-slate-900 mb-16 text-center tracking-tight">Preparación Técnica Especializada</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artículo 1 */}
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6"><Scale size={24} /></div>
            <h3 className="font-black text-xl mb-4 leading-tight">Rol del Auxiliar y DS 466</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              El Decreto 466 define al auxiliar como el colaborador directo del Químico Farmacéutico en la dispensación segura. Es vital conocer las prohibiciones legales y las facultades de cada establecimiento de salud.
            </p>
          </article>

          {/* Artículo 2 */}
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><ThermometerSnowflake size={24} /></div>
            <h3 className="font-black text-xl mb-4 leading-tight">Cadena de Frío (2° a 8°C)</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              La estabilidad de vacunas e insulinas depende de un control térmico riguroso. El registro en termohigrómetros y el protocolo ante quiebres eléctricos son preguntas "clavo" en el examen de la SEREMI.
            </p>
          </article>

          {/* Artículo 3 */}
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><ShieldAlert size={24} /></div>
            <h3 className="font-black text-xl mb-4 leading-tight">Controlados DS 404/405</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Estupefacientes y Psicotrópicos requieren custodia bajo llave. El manejo de la Receta Cheque y la Receta Retenida exige una validación de folios y archivo documental por un mínimo de 2 años.
            </p>
          </article>

          {/* Artículo 4 */}
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6"><Pill size={24} /></div>
            <h3 className="font-black text-xl mb-4 leading-tight">Ley de Fármacos II</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              La normativa actual exige el fomento de la Bioequivalencia y la transparencia en precios. El sello amarillo es la garantía de que el paciente recibe eficacia y seguridad a un costo justo.
            </p>
          </article>

          {/* Artículo 5 */}
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6"><ClipboardList size={24} /></div>
            <h3 className="font-black text-xl mb-4 leading-tight">Farmacovigilancia</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Todo efecto adverso no deseado (RAM) debe ser reportado al ISP. El auxiliar debe conocer los canales de notificación para contribuir a la seguridad del paciente post-dispensación.
            </p>
          </article>
        </div>

        {/* 3. SECCIÓN DE 4 FAQS */}
        <section className="mt-32 max-w-3xl mx-auto">
          <h3 className="text-3xl font-black text-center mb-16 tracking-tighter">Preguntas Frecuentes</h3>
          <div className="space-y-4">
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none uppercase text-[10px] tracking-widest text-slate-400">
                ¿Qué es el Petitorio Mínimo?
                <ChevronRight className="group-open:rotate-90 transition-transform" size={16} />
              </summary>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">Es el stock obligatorio de medicamentos que garantiza el acceso a la salud. Su falta es causal de sumario sanitario por la autoridad.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none uppercase text-[10px] tracking-widest text-slate-400">
                ¿Vigencia de una receta simple?
                <ChevronRight className="group-open:rotate-90 transition-transform" size={16} />
              </summary>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">Según el DS 466, la vigencia general es de 6 meses desde su emisión, a menos que el médico indique un plazo menor o se trate de controlados.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none uppercase text-[10px] tracking-widest text-slate-400">
                ¿Almacenamiento en bodega?
                <ChevronRight className="group-open:rotate-90 transition-transform" size={16} />
              </summary>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">Los medicamentos deben estar separados al menos 10 cm del suelo y 30 cm de los muros para permitir la limpieza y circulación de aire.</p>
            </details>
            <details className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm cursor-pointer">
              <summary className="font-bold flex justify-between items-center list-none uppercase text-[10px] tracking-widest text-slate-400">
                ¿Validación de Receta Electrónica?
                <ChevronRight className="group-open:rotate-90 transition-transform" size={16} />
              </summary>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">Se debe verificar el folio en el sistema oficial para asegurar que el prescriptor esté habilitado y la receta no haya sido dispensada previamente.</p>
            </details>
          </div>
        </section>
      </main>

      {/* 4. FOOTER: Interactivo y profesional  */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-16">
            
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
                <button onClick={() => setShowTerms(!showTerms)} className="text-white font-black uppercase text-[10px] tracking-widest hover:text-emerald-500 transition-colors underline decoration-emerald-500/30">Términos de Uso</button>
                <button onClick={() => setShowDisclaimer(!showDisclaimer)} className="text-white font-black uppercase text-[10px] tracking-widest hover:text-emerald-500 transition-colors underline decoration-emerald-500/30">Descargos Legales</button>
              </div>
              
              {showTerms && (
                <div className="text-[10px] bg-white/5 p-6 rounded-3xl border border-white/5 animate-in fade-in slide-in-from-top-2">
                  <p>● El acceso al simulador requiere registro previo y aceptación de nuestra política de privacidad. Los datos de progreso son de uso exclusivo del alumno para fines educativos .</p>
                </div>
              )}
              
              {showDisclaimer && (
                <div className="text-[10px] bg-white/5 p-6 rounded-3xl border border-white/5 animate-in fade-in slide-in-from-top-2">
                  <p>● AuxiliarPro es una plataforma independiente. Los contenidos se basan en normativa pública y no garantizan el resultado oficial en procesos de la SEREMI .</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-black uppercase text-[10px] tracking-widest">Sugerencias</h4>
              <a href="mailto:auxiliarprofarma@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors text-xs font-bold">
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
