import { BLOG_POSTS } from '../data';
import Link from 'next/link';
import { BookOpen, Search, ArrowRight } from "lucide-react"; // Agregamos iconos para el header

// 🟢 1. METADATOS SEO (Soluciona el error de "Página sin título optimizado")
export const metadata = {
  title: "Blog y Guías de Estudio | Auxiliar de Farmacia Chile",
  description: "Biblioteca de artículos educativos para Auxiliares de Farmacia. Aprende sobre el Decreto 466, Farmacología, Cálculos y tips para el Examen SEREMI.",
  keywords: ["blog farmacia chile", "guias estudio auxiliar", "resumen decreto 466", "tips examen seremi"],
  alternates: {
    canonical: './',
  },
};

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-800">
      
      {/* 🟢 2. NUEVO HEADER SEO (Sustituye al H1 simple) 
         Esto soluciona el error: "Keywords en título no aparecen en el cuerpo"
      */}
      <header className="bg-white border-b border-slate-200 pt-16 pb-20 px-6 mb-12">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <BookOpen size={14} /> Centro de Conocimiento
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Blog y Guías de Estudio para <span className="text-emerald-600">Auxiliares de Farmacia</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Domina la normativa chilena, aprende farmacología básica y prepárate para el examen de competencia con nuestros artículos educativos.
          </p>

          {/* Barra de búsqueda visual (Decorativa/Funcional según desees) */}
          <div className="mt-8 relative max-w-lg hidden md:block">
            <input 
              type="text" 
              placeholder="Buscar un tema (ej: Decreto 466)..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            <Search className="absolute left-4 top-4 text-slate-400" size={20} />
          </div>
        </div>
      </header>

      {/* 🟢 3. TU GRILLA ORIGINAL (Sin cambios en la lógica) */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-emerald-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              {/* Enlace directo a la carpeta dinámica */}
              <Link 
                href={`/blog/${post.slug}`} 
                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-800 transition-colors hover:underline"
              >
                Leer artículo completo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
}
