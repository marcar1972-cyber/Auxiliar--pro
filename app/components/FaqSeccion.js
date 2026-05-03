import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FaqSeccion() {
  return (
    <section className="bg-white py-12 px-6 w-full border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Bloque: FAQs (Variación Clinical Light Mode) */}
        <div className="bg-[#003366]/5 p-10 md:p-14 rounded-[3.5rem] border border-[#003366]/10 w-full text-center shadow-sm relative overflow-hidden">
          
          {/* Acento visual sutil en Verde Brand para separar del Footer */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#28a745] rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

          <h4 className="text-2xl md:text-3xl font-black text-[#003366] mb-4 relative z-10">
            ¿Dudas sobre la Normativa Sanitaria?
          </h4>
          <p className="text-slate-500 text-sm md:text-base mb-10 font-medium max-w-lg mx-auto leading-relaxed relative z-10">
            Consulta nuestro centro de respuestas detalladas sobre el <strong className="text-[#003366]">Decreto 466</strong>, almacenamiento técnico en bodega y validación de recetas.
          </p>
          
          <Link 
            href="/faq" 
            /* Aplicamos Verde Brand (#28a745) en el hover para dinamismo y Blanco Limpio en el fondo */
            className="inline-flex items-center justify-center w-full md:w-auto gap-3 bg-white text-[#003366] border-2 border-[#003366]/10 px-10 py-4 md:py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:border-[#28a745] hover:text-[#28a745] transition-all shadow-sm group relative z-10"
          >
            Ver todas las FAQs 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}