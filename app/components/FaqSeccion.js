import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FaqSeccion() {
  return (
    <section className="bg-white py-12 px-6 w-full border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Bloque: FAQs (Llamada a la acción limpia) */}
        <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 w-full text-center shadow-sm">
          <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">¿Dudas sobre la Normativa Sanitaria?</h4>
          <p className="text-slate-500 text-sm md:text-base mb-10 font-medium max-w-lg mx-auto leading-relaxed">
            Consulta nuestro centro de respuestas detalladas sobre el Decreto 466, almacenamiento técnico en bodega y validación de recetas.
          </p>
          <Link 
            href="/faq" 
            className="inline-flex items-center justify-center w-full md:w-auto gap-3 bg-white text-slate-900 border-2 border-slate-200 px-10 py-4 md:py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm group"
          >
            Ver todas las FAQs 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}