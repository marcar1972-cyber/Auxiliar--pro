'use client';
import Link from "next/link";
import { ArrowRight, Pill, Calculator, Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    /* Fondo con degradado elegante de Slate-50 a Blanco para diferenciar de la sección siguiente */
    <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center w-full relative overflow-hidden">
      
      {/* Detalle visual sutil de marca en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#28a745_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Etiqueta de Autoridad - Actualizada a +900 alumnos */}
        <div className="inline-flex items-center gap-2 bg-[#28a745]/5 text-[#28a745] px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-10 border border-[#28a745]/10 italic shadow-sm">
          Comunidad activa de +900 alumnos capacitándose bajo normativa vigente
        </div>
        
        {/* Título Principal - Azul Médico y Verde Brand */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#003366] mb-8 leading-[1.05] tracking-tighter">
          Tu examen <span className="text-[#28a745]">SEREMI</span> <br className="hidden md:block" />comienza aquí.
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Entrena con bases legales extraídas directamente de los <strong className="text-[#003366]">Decretos 466, 404 y 405</strong> del Ministerio de Salud. 
          Contenido técnico y jurídico validado para el proceso de certificación 2026.
        </p>
        
        {/* Botones de Acción - Ecosistema Completo */}
        <div className="flex flex-col items-center gap-6">
          {/* Botón Principal: Simulador - Ahora en Azul Médico (#003366) */}
          <Link 
            href="/quiz" 
            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#003366] text-white px-12 py-5 rounded-full font-black text-base md:text-lg hover:bg-[#002244] transition-all shadow-xl hover:-translate-y-1 group"
          >
            <Gamepad2 size={24} className="text-[#28a745] group-hover:scale-110 transition-transform" />
            EMPEZAR SIMULADOR <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Accesos Secundarios: Herramientas de Mesón */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            <Link 
              href="/vademecum" 
              className="inline-flex items-center gap-2 bg-white text-[#003366] px-6 py-3 rounded-2xl font-bold text-sm border border-slate-200 hover:border-[#28a745] hover:text-[#28a745] transition-all shadow-sm"
            >
              <Pill size={18} className="text-[#28a745]" />
              Vademécum Profesional
            </Link>

            <Link 
              href="/dermocheck" 
              className="inline-flex items-center gap-2 bg-white text-[#003366] px-6 py-3 rounded-2xl font-bold text-sm border border-slate-200 hover:border-[#28a745] hover:text-[#28a745] transition-all shadow-sm"
            >
              <Calculator size={18} className="text-[#28a745]" />
              DermoCheck (Vencimientos)
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}