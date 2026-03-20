import Link from "next/link";
import { ChevronRight, CheckCircle, Star } from "lucide-react";

export default function FaqSeccion() {
  return (
    <section className="bg-white py-24 px-6 w-full border-t border-slate-100">
      <div className="max-w-4xl mx-auto flex flex-col gap-24">

        {/* Bloque 1: Testimonial Real (Social Proof justo después de los precios) */}
        <div id="testimonios" className="text-center">
          <h2 className="font-black text-3xl md:text-4xl mb-12 text-slate-900 tracking-tight">Casos de Éxito Reales</h2>
          <div className="bg-emerald-50 p-8 md:p-14 rounded-[3rem] border border-emerald-100 shadow-sm relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-center gap-1 mb-6 text-emerald-500">
              {/* Estrellas llenas (Solid) usando Tailwind */}
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
              <Star fill="currentColor" size={24} />
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed mb-8 italic">
              "Gracias por este grupo, fue un excelente aporte para estudiar, aprobé mi examen el 13 de febrero en Seremi y ahora soy oficialmente Auxiliar de Farmacia."
            </blockquote>
            <div className="flex flex-col items-center justify-center">
              <p className="font-black text-slate-900 text-lg">Andrea</p>
              <div className="flex items-center gap-2 mt-3 bg-white text-emerald-800 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm border border-emerald-100">
                <CheckCircle size={16} className="text-emerald-500" />
                Auxiliar de Farmacia Certificada
              </div>
            </div>
          </div>
        </div>

        {/* Bloque 2: FAQs (Llamada a la acción limpia) */}
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