import Link from "next/link";
import { ArrowRight, Pill, Calculator, Gamepad2 } from "lucide-react";

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
        
        {/* Botones de Acción - Ecosistema Completo */}
        <div className="flex flex-col items-center gap-6">
          {/* Botón Principal: Simulador */}
          <Link 
            href="/quiz" 
            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-slate-900 text-white px-12 py-5 rounded-full font-black text-base md:text-lg hover:bg-emerald-600 transition-all shadow-xl hover:-translate-y-1 group"
          >
            <Gamepad2 size={24} className="text-emerald-400 group-hover:text-white transition-colors" />
            EMPEZAR SIMULADOR <ArrowRight size={20} />
          </Link>

          {/* Accesos Secundarios: Herramientas de Mesón */}
          <div className="flex flex-wrap justify-center gap-3 w-full">
            <Link 
              href="/vademecum" 
              className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-2xl font-bold text-sm border border-slate-200 hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
            >
              <Pill size={18} className="text-emerald-500" />
              Vademécum Profesional
            </Link>

            <Link 
              href="/dermocheck" 
              className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-2xl font-bold text-sm border border-slate-200 hover:border-pink-500 hover:text-pink-600 transition-all shadow-sm"
            >
              <Calculator size={18} className="text-pink-500" />
              DermoCheck (Vencimientos)
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}