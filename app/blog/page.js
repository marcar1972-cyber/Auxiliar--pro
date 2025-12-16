'use client';
import React, { useState } from 'react';
import { BLOG_POSTS } from '../data'; // Asegúrate que la ruta a data sea correcta
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp, Clock, Calendar } from 'lucide-react';

export default function BlogPage() {
  // Estado para saber cuál artículo está abierto (null = ninguno abierto)
  const [openPostId, setOpenPostId] = useState(null);

  const togglePost = (id) => {
    if (openPostId === id) {
      setOpenPostId(null); // Si toco el mismo, lo cierro
    } else {
      setOpenPostId(id); // Si toco otro, lo abro
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Barra de Navegación Simple */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Inicio
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6">
        {/* ENCABEZADO: Aquí cambiamos "Biblioteca" por "Blog" */}
        <header className="mb-10 text-center">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Actualidad & Normativa</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Blog Farmacéutico
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            Novedades, análisis del Decreto 466 y guías para tu carrera.
          </p>
        </header>

        {/* LISTA DE ARTÍCULOS */}
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => {
            const isOpen = openPostId === post.id;

            return (
              <article 
                key={post.id} 
                className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-blue-500 ring-1 ring-blue-500 shadow-md' : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                {/* CABECERA DE LA TARJETA (Siempre visible) */}
                <div 
                  onClick={() => togglePost(post.id)}
                  className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      {/* Metadatos */}
                      <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-blue-500">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      
                      {/* Título */}
                      <h2 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-700">
                        {post.title}
                      </h2>

                      {/* Extracto (Resumen) - Solo se ve si está CERRADO */}
                      {!isOpen && (
                        <p className="text-slate-600 line-clamp-2">
                          {post.excerpt}
                        </p>
                      )}
                    </div>

                    {/* Flecha indicadora */}
                    <div className={`mt-1 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* CONTENIDO EXPANDIBLE (Solo se ve si está ABIERTO) */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-fadeIn">
                    <hr className="border-slate-100 mb-6" />
                    
                    {/* Renderizamos el HTML del artículo */}
                    <div 
                      className="prose prose-blue prose-slate max-w-none text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: post.content }} 
                    />
                    
                    {/* Botón para cerrar al final */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Evita que se dispare el click del padre
                        togglePost(post.id);
                      }}
                      className="mt-8 w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      <ChevronUp className="w-4 h-4" />
                      Cerrar Artículo
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
