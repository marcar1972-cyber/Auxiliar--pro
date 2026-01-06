import Link from "next/link";
import { Calendar, ArrowRight, BookOpen, FileText } from "lucide-react";

export const metadata = {
  title: "Blog AuxiliarPro | Noticias y Guías",
  description: "Artículos educativos, noticias sobre el examen de competencia y consejos para auxiliares de farmacia en Chile.",
};

export default function BlogIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 text-slate-700">
      
      {/* HEADER DEL BLOG */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
          Blog Educativo
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Mantente al día con las normativas, fechas de examen y consejos de estudio para asegurar tu registro en la SEREMI.
        </p>
      </header>

      {/* GRILLA DE ARTÍCULOS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* --- ARTÍCULO 1 (NUEVO): FECHAS SEREMI --- */}
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
          <div className="h-48 bg-emerald-500/10 flex items-center justify-center">
             <Calendar className="text-emerald-500 w-16 h-16 opacity-50" />
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 mb-3 uppercase tracking-wider">
              Trámites y Legal
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
              ¿Cuándo es el Examen de Auxiliar de Farmacia?
            </h2>
            <p className="text-slate-500 text-sm mb-6 line-clamp-3">
              No existe un calendario fijo. Descubre cómo funciona el proceso de asignación de fechas de la SEREMI y qué requisitos debes cumplir.
            </p>
            
            <div className="mt-auto">
              <Link 
                href="/blog/fecha-examen-auxiliar-farmacia-seremi" 
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-emerald-600 transition-colors"
              >
                Leer Artículo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>


        {/* --- ARTÍCULO 2 (RECUPERADO - EDITA AQUÍ EL TÍTULO Y LINK) --- */}
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
          <div className="h-48 bg-blue-500/10 flex items-center justify-center">
             <BookOpen className="text-blue-500 w-16 h-16 opacity-50" />
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mb-3 uppercase tracking-wider">
              Guías de Estudio
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
              Requisitos y Normativa (Ejemplo)
            </h2>
            <p className="text-slate-500 text-sm mb-6 line-clamp-3">
              Aquí puedes poner la descripción de tu artículo anterior. Si tenías una guía sobre el Decreto 466 o requisitos, edita este texto.
            </p>
            
            <div className="mt-auto">
              {/* OJO: Cambia el href por la ruta de tu artículo anterior */}
              <Link 
                href="/blog/ruta-de-tu-articulo-anterior" 
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors"
              >
                Leer Artículo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>


        {/* --- ARTÍCULO 3 (RECUPERADO - EDITA AQUÍ) --- */}
        <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
          <div className="h-48 bg-purple-500/10 flex items-center justify-center">
             <FileText className="text-purple-500 w-16 h-16 opacity-50" />
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-600 mb-3 uppercase tracking-wider">
              Material de Apoyo
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
              Otro Artículo Anterior
            </h2>
            <p className="text-slate-500 text-sm mb-6 line-clamp-3">
              Restaura aquí el contenido de tu tercer artículo. Manteniendo el formato, tu blog se verá ordenado y profesional.
            </p>
            
            <div className="mt-auto">
              {/* OJO: Cambia el href por la ruta de tu otro artículo */}
              <Link 
                href="/blog/ruta-de-tu-otro-articulo" 
                className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-purple-600 transition-colors"
              >
                Leer Artículo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>

        
        {/* --- TARJETA DE RELLENO "PRÓXIMAMENTE" --- */}
        <article className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-center items-center text-center opacity-60 min-h-[300px]">
          <div className="h-12 w-12 bg-slate-200 rounded-full mb-4 animate-pulse"></div>
          <h3 className="font-bold text-slate-400">Próximamente...</h3>
          <p className="text-sm text-slate-400">Estamos redactando más guías de estudio.</p>
        </article>

      </div>
    </div>
  );
}
