import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

// Esta función busca el archivo Markdown en la carpeta raíz /content/
async function getPost(category, slug) {
  try {
    // La ruta busca: raíz_del_proyecto/content/categoria/nombre-archivo.md
    const filePath = path.join(process.cwd(), 'content', category, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    return {
      content: fileContent,
      title: slug.replace(/-/g, ' ').toUpperCase(),
      category: category,
      date: new Date().toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    };
  } catch (error) {
    console.error("Error al cargar el post:", error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  const { category, slug } = params;
  const post = await getPost(category, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 pb-20">
      {/* Barra de navegación secundaria */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-16 z-30">
        <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-600 transition-colors">
            <ChevronLeft size={16} />
            Volver al Blog
          </Link>
          <button className="text-slate-400 hover:text-blue-600 transition-colors">
            <Share2 size={18} />
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 pt-8 md:pt-16">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Encabezado del Post */}
          <header className="px-6 py-10 md:p-12 border-b border-slate-50 bg-slate-50/30">
            <div className="mb-6">
              <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold shadow-inner">
                  AP
                </div>
                <div>
                  <p className="font-bold text-slate-900 leading-none">Equipo AuxiliarPro</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-tighter mt-1">Redacción Técnica</p>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blue-500" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-500" />
                <span>Lectura rápida</span>
              </div>
            </div>
          </header>

          {/* Cuerpo del Artículo (Renderiza el Markdown del Canvas) */}
          <div className="p-6 md:p-12">
            <div className="prose prose-blue prose-lg max-w-none">
              {/* Se muestra el contenido del archivo .md */}
              <pre className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed text-lg bg-transparent p-0 border-none">
                {post.content}
              </pre>
            </div>

            {/* Banner de Acción (CTA) */}
            <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-100">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">¿Quieres asegurar tu aprobación?</h3>
                <p className="text-slate-400">Practica ahora con el simulador actualizado a la normativa 2025.</p>
              </div>
              <Link 
                href="/" 
                className="whitespace-nowrap bg-blue-600 text-white px-8 py-4 rounded-xl font-black hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 active:scale-95"
              >
                IR AL SIMULADOR GRATIS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
