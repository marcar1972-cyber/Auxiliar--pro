'use client';
import Link from "next/link";
import { ArrowRight, Pill, Calculator, Gamepad2, ShieldCheck, GraduationCap, Zap, Award } from "lucide-react";

export default function Hero() {
  return (
    /* Fondo con degradado elegante de Slate-50 a Blanco */
    <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center w-full relative overflow-hidden">
      
      {/* Detalle visual sutil de marca en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#28a745_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Etiqueta de Autoridad - CTR Mejorado con Icono */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#28a745] px-5 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-10 border border-emerald-100 italic shadow-sm">
          <ShieldCheck size={14} className="animate-pulse" />
          Comunidad de +1.720 alumnos aprobando bajo normativa SEREMI 2026
        </div>
        
        {/* Título Principal - Optimizado para capturar búsquedas de "Examen Auxiliar" */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-[#003366] mb-8 leading-[1.05] tracking-tighter">
          Aprueba tu examen <span className="text-[#28a745]">SEREMI</span> <br className="hidden md:block" /> a la primera.
        </h1>
        
        {/* Subtítulo - Opción 2 con Inyección SEO de Decretos, MINSAL y Nuevas Modalidades */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed mb-6">
            Entrena con el único simulador técnico en Chile basado en la normativa oficial del <span className="text-[#003366] font-bold">Ministerio de Salud</span> (<strong className="text-[#003366]">DS 466, 404 y 405</strong>).
          </p>

          <div className="bg-emerald-50/60 border border-emerald-100 rounded-3xl p-5 md:p-6 text-left max-w-2xl mx-auto shadow-sm">
            <p className="text-xs font-black text-[#28a745] uppercase tracking-widest mb-3 text-center">
              ✨ Nuevas Suscripciones Mensual y Anual
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-slate-700 font-medium">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-2xl border border-slate-100 shadow-xs">
                <Zap size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span><strong className="text-[#003366]">Simulador Extra de Refuerzo:</strong> Para duplicar tu ritmo de ensayo con preguntas trampa SEREMI.</span>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-2xl border border-slate-100 shadow-xs">
                <Award size={18} className="text-[#28a745] shrink-0 mt-0.5" />
                <span><strong className="text-[#003366]">Certificado de Participación:</strong> Valida tu entrenamiento teórico y progreso en la plataforma.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Botones de Acción Principales (Jerarquía Proporcional) */}
        <div className="flex flex-col items-center gap-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* Botón Principal 1: Acceso al Lobby del Campus PRO */}
            <Link 
              href="/quiz" 
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#28a745] text-white px-10 py-5 rounded-full font-black text-base md:text-lg hover:bg-[#218838] transition-all shadow-[0_15px_30px_rgba(40,167,69,0.3)] hover:-translate-y-1 group"
            >
              <GraduationCap size={22} className="group-hover:scale-110 transition-transform" />
              INGRESAR A MI CAMPUS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Botón Principal 2: Diagnóstico Gratuito */}
            <Link 
              href="/quiz/basic/diagnostico" 
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-[#003366] text-white px-10 py-5 rounded-full font-black text-base md:text-lg hover:bg-[#002244] transition-all shadow-[0_15px_30px_rgba(0,51,102,0.2)] hover:-translate-y-1 group"
            >
              <Gamepad2 size={22} className="text-[#28a745] group-hover:rotate-12 transition-transform" />
              INICIAR DIAGNÓSTICO GRATIS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Accesos Secundarios: Únicamente Herramientas de Mesón */}
          <div className="flex flex-wrap justify-center gap-4 w-full pt-2">
            <Link 
              href="/vademecum" 
              className="inline-flex items-center gap-2 bg-white text-[#003366] px-8 py-4 rounded-2xl font-bold text-sm border border-slate-200 hover:border-[#28a745] hover:text-[#28a745] transition-all shadow-sm group"
            >
              <Pill size={18} className="text-[#28a745] group-hover:scale-110 transition-transform" />
              Vademécum Técnico
            </Link>

            <Link 
              href="/dermocheck" 
              className="inline-flex items-center gap-3 bg-white text-[#003366] px-8 py-3 rounded-2xl border border-slate-200 hover:border-[#28a745] transition-all shadow-sm group"
            >
              <Calculator size={18} className="text-[#28a745] group-hover:scale-110 transition-transform shrink-0" />
              <span className="flex flex-col items-start leading-tight text-left">
                <span className="font-black text-sm tracking-tight group-hover:text-[#28a745] transition-colors">
                  DermoCheck
                </span>
                <span className="text-[10px] font-semibold text-slate-500 group-hover:text-[#28a745]/80 transition-colors">
                  Revisa los vencimientos en dermocosmética
                </span>
              </span>
            </Link>
          </div>

        </div>

      </div>
    </header>
  );
}