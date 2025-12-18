import Link from "next/link";
import { ChevronRight, Calendar, BookOpen } from "lucide-react";

const posts = [
  {
    title: "¿Cuánto gana un Auxiliar de Farmacia en Chile? (2025)",
    description: "Desglosamos el sueldo base, comisiones y bonos del sector farmacéutico.",
    date: "18 de Diciembre, 2024",
    slug: "sueldo-auxiliar-farmacia",
    category: "Laboral"
  },
  {
    title: "Guía Paso a Paso: Examen de Competencia SEREMI",
    description: "Todo lo que necesitas saber para inscribirte y aprobar tu examen de auxiliar.",
    date: "17 de Diciembre, 2024",
    slug: "guia-examen-seremi",
    category: "Exámenes"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Blog AuxiliarPro</h1>
          <p className="text-slate-600">Recursos, guías y consejos para el Auxiliar de Farmacia en Chile.</p>
        </header>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                  <BookOpen size={14} />
                  {post.category}
                </div>
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm">{post.description}</p>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Calendar size={12} />
                  {post.date}
                </div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
