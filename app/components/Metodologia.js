import Link from "next/link";
import { ChevronRight, BookOpen, CheckCircle } from "lucide-react";

export default function Metodologia() {
  return (
    <section className="bg-white py-24 px-6 w-full border-t border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Columna Izquierda: Texto y Puntos */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter">
            Preparación Técnica para el <span className="text-emerald-500">Proceso de Certificación 2026</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            Nuestra metodología de entrenamiento se centra en la aplicación práctica de los reglamentos sanitarios. Los exámenes de competencia exigen un análisis profundo de la normativa vigente en Chile.
          </p>
          
          {/* Caja con viñetas para ordenar la vista móvil */}
          <ul className="space-y-5 bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-100">
            <li className="flex items-start gap-4">
              <CheckCircle size={24} className="text-emerald-500 shrink-0 mt-0.5" /> 
              <span className="text-sm md:text-base font-bold text-slate-700 leading-snug">Simulacros con tiempo real de 60 minutos</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle size={24} className="text-emerald-500 shrink-0 mt-0.5" /> 
              <span className="text-sm md:text-base font-bold text-slate-700 leading-snug">Preguntas basadas en los Reglamentos Sanitarios Vigentes</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle size={24} className="text-emerald-500 shrink-0 mt-0.5" /> 
              <span className="text-sm md:text-base font-bold text-slate-700 leading-snug">Enfoque en Decretos 466, 404, 405 y Ley de Fármacos</span>
            </li>
          </ul>
        </div>

        {/* Columna Derecha: Caja Oscura Destacada */}
        <div className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden transform transition-transform hover:scale-[1.02]">
          {/* Brillo de fondo para darle toque premium */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="relative z-10">
            <div className="bg-emerald-500/20 w-16 h-16 flex items-center justify-center rounded-2xl mb-8">
              <BookOpen size={32} className="text-emerald-400" />
            </div>
            <h4 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
              Compendio de Estudio Legal
            </h4>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              ¿Conoces los plazos legales de vigencia de una receta simple o los requisitos técnicos para el almacenamiento de vacunas? El dominio de estos detalles jurídicos es el factor determinante para aprobar el examen de la autoridad sanitaria.
            </p>
            {/* Botón Full Width en móvil */}
            <Link href="/guias" className="inline-flex items-center justify-center w-full md:w-auto bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg">
              Explorar Textos <ChevronRight size={18} className="ml-2"/>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}