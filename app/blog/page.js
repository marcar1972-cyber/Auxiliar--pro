import Link from "next/link";
import { ChevronLeft, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "../data"; // Importamos tus artículos

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      
      {/* Header */}
      <div className="bg-white p-4 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-aux-dark">
            <ChevronLeft size={24} />
        </Link>
        <h1 className="text-lg font-black text-aux-dark">Biblioteca de Estudio</h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto">
        <p className="text-slate-500 mb-8">Guías, normativas y consejos prácticos para tu examen.</p>

        <div className="space-y-6">
            {BLOG_POSTS.map((post) => (
                <article key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                            {post.category}
                        </span>
                        <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-aux-dark mb-2">
                        {post.title}
                    </h2>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                    </p>

                    {/* Por ahora mostramos el contenido aquí mismo de forma simple, 
                        en el futuro haremos clic para leer más */}
                    <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 mt-4 border border-slate-100">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </article>
            ))}
        </div>
      </div>
    </main>
  );
}
