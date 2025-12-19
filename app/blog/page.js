'use client';
import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { Search, ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // VISTA DEL ARTÍCULO (ESTILO CUADERNO ENMARCADO)
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-10 text-slate-800">
        <div className="h-1 bg-blue-500 w-full sticky top-0 z-50"></div>
        <nav className="p-4 bg-white border-b sticky top-1 z-40 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedPost(null)} className="flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
              <ArrowLeft className="mr-2 w-5 h-5" /> Volver al Blog
            </button>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 mt-8">
          <article className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
            <div className="flex items-center gap-4 text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-10 tracking-tight">
              {selectedPost.title}
            </h1>
            <div className="leading-relaxed text-lg space-y-6 text-slate-700" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            <div className="mt-16 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-400 mb-6 italic text-sm">Contenido de estudio oficial para la certificación de Auxiliar de Farmacia.</p>
              <a href="/quiz" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                PRACTICAR EN EL SIMULADOR
              </a>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // VISTA DE LA LISTA
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tighter">Cuaderno de <span className="text-blue-600">Estudio</span></h1>
          <p className="text-slate-500 font-medium leading-relaxed">Documentación técnica oficial letra por letra para tu certificación.</p>
        </header>
        <div className="relative mb-12">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
          <input type="text" placeholder="Buscar temas, decretos o requisitos..." className="w-full p-5 pl-14 rounded-2xl border-none shadow-xl text-lg focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => setSelectedPost(post)} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all group">
              <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 mb-3 transition-colors tracking-tight leading-none">{post.title}</h2>
              <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest">
                Empezar lectura <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
