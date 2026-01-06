import Link from "next/link";
import { Calendar, BookOpen, FileText, DollarSign, Scale, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog AuxiliarPro | Noticias y Guías",
  description: "Artículos educativos, noticias sobre el examen de competencia y consejos para auxiliares de farmacia en Chile.",
};

// LISTADO DE TUS ARTÍCULOS REALES (Basado en tus carpetas)
const articles = [
  {
    slug: "fecha-examen-auxiliar-farmacia-seremi",
    title: "¿Cuándo es el Examen de Auxiliar de Farmacia?",
    desc: "No existe un calendario fijo. Descubre cómo funciona el proceso de asignación de fechas de la SEREMI.",
    category: "Trámites",
    color: "text-emerald-600",
    bgIcon: "bg-emerald-500/10",
    icon: <Calendar className="text-emerald-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "requisitos-auxiliar-farmacia-chile-2026",
    title: "Requisitos para ser Auxiliar de Farmacia (2026)",
    desc: "Guía completa con la normativa actualizada. Descubre qué documentos necesitas para tu inscripción.",
    category: "Guía 2026",
    color: "text-blue-600",
    bgIcon: "bg-blue-500/10",
    icon: <BookOpen className="text-blue-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "cuanto-gana-auxiliar-farmacia-chile",
    title: "¿Cuánto gana un Auxiliar de Farmacia en Chile?",
    desc: "Análisis de mercado laboral, rentas promedio y diferencias entre farmacia privada y asistencial.",
    category: "Laboral",
    color: "text-green-600",
    bgIcon: "bg-green-500/10",
    icon: <DollarSign className="text-green-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "que-es-el-decreto-466",
    title: "¿Qué es el Decreto 466? Lo que debes saber",
    desc: "El reglamento fundamental que rige a las farmacias en Chile y base del examen de competencia.",
    category: "Normativa",
    color: "text-slate-600",
    bgIcon: "bg-slate-500/10",
    icon: <Scale className="text-slate-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "examen-competencia-seremi-2025",
    title: "Todo sobre el Examen de Competencia SEREMI",
    desc: "Detalles sobre la evaluación, contenidos frecuentes y cómo prepararte para aprobar.",
    category: "Examen",
    color: "text-purple-600",
    bgIcon: "bg-purple-500/10",
    icon: <FileText className="text-purple-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar y Técnico en Farmacia",
    desc: "Comparativa de roles, responsabilidades legales y formación requerida para cada cargo.",
    category: "Orientación",
    color: "text-orange-600",
    bgIcon: "bg-orange-500/10",
    icon: <Users className="text-orange-500 w-16 h-16 opacity-50" />
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 text-slate-700">
      
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
        
        {/* Generamos las tarjetas automáticamente usando la lista de arriba */}
        {articles.map((post, index) => (
          <article key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
            
            {/* Icono / Imagen */}
            <div className={`h-48 ${post.bgIcon} flex items-center justify-center`}>
               {post.icon}
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <div className={`flex items-center gap-2 text-xs font-bold ${post.color} mb-3 uppercase tracking-wider`}>
                {post.category}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm mb-6 line-clamp-3">
                {post.desc}
              </p>
              
              <div className="mt-auto">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-emerald-600 transition-colors"
                >
                  Leer Artículo <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}

      </div>
    </div>
  );
}
