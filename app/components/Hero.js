import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center w-full">
      <div className="max-w-4xl mx-auto">
        
        {/* Etiqueta de Autoridad */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-10 border border-emerald-100 italic shadow-sm">
          Comunidad activa de +400 alumnos capacitándose bajo normativa vigente
        </div>
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
          Tu examen <span className="text-emerald-500">SEREMI</span> <br className="hidden md:block" />comienza aquí.
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Entrena con bases legales extraídas directamente de los <strong>Decretos 466, 404 y 405</strong> del Ministerio de Salud. 
          Contenido técnico y jurídico validado para el proceso de certificación 2026.
        </p>
        
        {/* Botón de Acción (Mobile friendly) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/quiz" 
            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-slate-900 text-white px-12 py-5 rounded-full font-black text-base md:text-lg hover:bg-emerald-500 transition-all shadow-xl hover:-translate-y-1"
          >
            EMPEZAR AHORA <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </header>
  );
}