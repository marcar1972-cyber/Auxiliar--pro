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

  // VISTA DEL ARTÍCULO (ESTILO LIMPIO Y ENMARCADO)
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-10">
        <div className="h-1.5 bg-blue-600 w-full sticky top-0 z-50"></div>
        
        <nav className="p-4 bg-white border-b sticky top-1.5 z-40 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedPost(null)} className="flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
              <ArrowLeft className="mr-2 w-5 h-5" /> Volver al Blog
            </button>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 mt-8">
          <article className="bg-white p-8 md:p-12 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-center gap-4 text-slate-400 text-xs font-bold uppercase mb-4">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-8">
              {selectedPost.title}
            </h1>

            <div 
              className="text-slate-700 leading-relaxed text-lg space-y-4"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
            />
            
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 mb-6 italic">¿Te estás preparando para el examen? Practica ahora.</p>
              <a href="/quiz" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg">
                IR AL SIMULADOR
              </a>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // VISTA DE LA LISTA
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">Cuaderno de <span className="text-blue-600">Estudio</span></h1>
          <p className="text-slate-500">Documentación oficial letra por letra para tu certificación.</p>
        </header>
        
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar requisitos, decretos..."
            className="w-full p-4 pl-12 rounded-xl border border-slate-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => setSelectedPost(post)} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-blue-500 uppercase">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 mb-2 transition-colors">{post.title}</h2>
              <p className="
