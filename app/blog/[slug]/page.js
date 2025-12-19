// app/blog/[slug]/page.js
import { BLOG_POSTS } from '../../data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

// En Next 15, debemos desestructurar params como una Promesa
export default async function PostPage({ params }) {
  const { slug } = await params; // <--- ESTO ES CLAVE EN NEXT 15
  
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/blog" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto p-6 bg-white shadow-sm mt-8 rounded-xl border border-slate-100 mb-20">
        <header className="mb-8 border-b border-slate-50 pb-8">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1 text-blue-500"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            {post.title}
          </h1>
        </header>

        <div 
          className="prose prose-blue prose-lg max-w-none text-slate-700 leading-relaxed 
                     prose-headings:text-slate-900 prose-headings:font-bold 
                     prose-strong:text-blue-700 prose-ul:list-disc"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="mt-16 p-8 bg-blue-50 rounded-2xl text-center border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">¿Listo para el examen?</h3>
          <p className="text-blue-700 mb-6">Pon a prueba tus conocimientos con nuestro simulador gratuito.</p>
          <Link href="/quiz" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all inline-block">
            Ir al Simulador ahora
          </Link>
        </div>
      </article>
    </div>
  );
}
