'use client';
import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { Search, ArrowLeft, Calendar, Clock, ChevronRight, CheckCircle, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // VISTA DEL ARTÍCULO (CON ESTILO MEJORADO)
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-20">
        {/* Franja superior de acento */}
        <div className="h-2 bg-blue-600 w-full sticky top-0 z-50"></div>
        
        <nav className="p-4 bg-white/80 backdrop-blur-md border-b sticky top-2 z-40">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setSelectedPost(null)} 
              className="flex items-center text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"
            >
              <ArrowLeft className="mr-2 w-5 h-5" /> Volver al Cuaderno
            </button>
            <div className="flex items-center gap-2 text-slate-400">
               <Share2 className="w-5 h-5 cursor-pointer hover:text-blue-500" />
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-4 mt-8">
          <article className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
            {/* Cabecera del Artículo */}
            <div className="p-8 md:p-12 border-b border-slate-50 bg-gradient-to-b from-slate-50/50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Guía de Estudio
                </span>
                <div className="flex items-center text-emerald-600 text-xs font-bold gap-1">
                  <CheckCircle className="w-4 h-4" /> Contenido Verificado
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" /> {selectedPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" /> {selectedPost.readTime} de lectura
                </div>
              </div>
            </div>

            {/* Contenido del Artículo */}
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-slate prose-lg md:prose-xl max-w-none 
                           prose-headings:text-slate-900 prose-headings:font-extrabold
                           prose-p:text-slate-600 prose-p:leading-relaxed
                           prose-strong:text-blue-700 prose-strong:font-bold
                           prose-li:text-slate-600 prose-ul:list-disc
                           prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
              />
              
              {/* Caja de CTA al final */}
              <div className="mt-16 p-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl text-white text-center shadow-lg shadow-blue-200">
                <h3 className="text-2xl font-bold mb-3">¿Estás listo para el Examen SEREMI?</h3>
                <p className="text-blue-100 mb-8 max-w-md mx-auto">
                  No dejes tu futuro al azar. Practica con preguntas reales y mide tu nivel hoy mismo.
                </p>
                <Link 
                  href="/quiz" 
                  className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-black hover:scale-105 transition-transform shadow-xl"
                >
                  ABRIR SIMULADOR GRATIS
                </Link>
              </div>
            </div>
          </article>

          {/* Pie de página del artículo */}
          <div className="mt-8 text-center text-slate-400 text-sm italic">
            Cuaderno de estudio colaborativo - AuxiliarPro Chile 2025
          </div>
        </main>
      </div>
    );
  }

  // VISTA DE LA LISTA (MANTIENE TU DISEÑO ORIGINAL PERO PULIDO)
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
            Cuaderno de <span className="text-blue-600">Estudio</span>
          </h1>
          <p className="text-slate-500 text-lg">Todo lo que necesitas saber para tu certificación de Auxiliar de Farmacia.</p>
        </header>
        
        <div className="relative mb-12 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 group-focus-within:text-blue-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Buscar por tema, decreto o palabra clave..."
            className="w-full p-5 pl-14 rounded-2xl border-none shadow-lg shadow-slate-200/50 text-lg focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3 text-xs font-bold text-blue-500 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-extrabold text-sm uppercase tracking-wider">
                  Empezar a estudiar <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
