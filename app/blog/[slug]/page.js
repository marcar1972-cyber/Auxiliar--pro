// app/blog/[slug]/page.js
import { BLOG_POSTS } from '../../data';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function PostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  // Si el artículo no existe en data.js, enviamos al 404 oficial
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/blog" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Blog
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6 bg-white shadow-sm mt-8 rounded-xl border border-slate-100">
        <header className="mb-8">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium uppercase tracking-wide">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            <span className="flex items-center gap-1 text-blue-500"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>
        </header>

        <div 
          className="prose prose-blue prose-slate max-w-none text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-500 mb-4 italic text-sm">¿Te sirvió esta información? Compártela con un colega.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all">
            Practicar con el Simulador
          </Link>
        </div>
      </main>
    </div>
  );
}
