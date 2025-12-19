'use client';
import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { Search, ArrowLeft, Calendar, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // VISTA DEL ARTÍCULO (ESTILO PREMIUM)
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-slate-100 font-sans pb-20">
        {/* Franja superior de identidad */}
        <div className="h-3 bg-blue-600 w-full sticky top-0 z-50"></div>
        
        <nav className="p-4 bg-white/90 backdrop-blur-md border-b sticky top-3 z-40 shadow-sm">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setSelectedPost(null)} 
              className="flex items-center text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"
            >
              <ArrowLeft className="mr-2 w-5 h-5" /> Volver al Blog
            </button>
            <div className="hidden md:flex items-center gap-2 text-emerald-600 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full">
               <CheckCircle className="w-4 h-4" /> CONTENIDO OFICIAL
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 mt-12">
          {/* Tarjeta Enmarcada del Artículo */}
          <article className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-300 overflow-hidden border border-white">
            {/* Encabezado Visual */}
            <div className="p-8 md:p-16 border-b border-slate-50 bg-gradient-to-b from-slate-50 to-white">
              <div className="flex items-center gap-4 mb-6 text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-blue-500" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-blue-500" /> {selectedPost.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-4">
                {selectedPost.title}
              </h1>
            </div>

            {/* Cuerpo del Texto (Enmarcado y Espaciado) */}
            <div className="p-8 md:p-16">
              <div 
                className="text-slate-700 leading-[1.8] text-lg md:text-xl space-y-8"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
              />
              
              {/* Bloque final de acción profesional */}
              <div className="mt-20 p-10 bg-slate-900 rounded-[2rem] text-center shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                <h3 className="text-2xl font-bold text-white mb-4 italic">¿Quieres medir tu nivel ahora?</h3>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">Pon a prueba lo que acabas de leer con nuestro simulador de examen gratuito.</p>
                <Link 
                  href="/quiz" 
                  className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
                >
                  ABRIR SIMULADOR
                </Link>
              </div>
            </div>
          </article>

          <footer className="mt-12 text-center text-slate-400 text-sm font-medium tracking-wide">
             © AUXILIARPRO CHILE - CUADERNO DE ESTUDIO TÉCNICO
          </footer>
        </main>
      </div>
    );
  }

  // VISTA DE LA LISTA
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
            Cuaderno de <span className="text-blue-600 underline decoration-8 decoration-blue-100 underline-offset-8">Estudio</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl font-medium leading-relaxed">
            La base de conocimiento oficial y colaborativa para el Auxiliar de Farmacia en Chile.
          </p>
        </header>
        
        <div className="relative mb-16 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Busca por decreto, trámite o tema..."
            className="w-full p-6 pl-16 rounded-[2rem] border-none shadow-xl shadow-slate-200 text-xl focus:ring-8 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-10">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all"></div>
              <div className="flex items-center gap-3 mb-4 text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1 rounded-full">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-blue-200 rounded-full"></span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-4 tracking-tight leading-none">
                {post.title}
              </h2>
              <p className="text-slate-500 text-lg line-clamp-2 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center text-blue-600 font-black text-sm uppercase tracking-widest">
                Iniciar estudio <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
