'use client';
import React, { useState } from 'react';
import { BLOG_POSTS } from '../data'; 
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp, Clock, Calendar, Search, X, FileSearch } from 'lucide-react'; // <--- Agregamos iconos de búsqueda

export default function BlogPage() {
  // Estado para saber cuál artículo está abierto
  const [openPostId, setOpenPostId] = useState(null);
  
  // NUEVO ESTADO: Texto de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  const togglePost = (id) => {
    if (openPostId === id) {
      setOpenPostId(null);
    } else {
      setOpenPostId(id);
    }
  };

  // --- LÓGICA DE FILTRADO ---
  const filteredPosts = BLOG_POSTS.filter((post) => {
      const term = searchTerm.toLowerCase();
      // Busca en Título, Resumen y Contenido
      return (
          post.title.toLowerCase().includes(term) || 
          post.excerpt.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term)
      );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Barra de Navegación Simple */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al Inicio
          </Link>
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest hidden sm:block">AuxiliarPro Blog</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto p-6">
        {/* ENCABEZADO */}
        <header className="mb-8 text-center">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Actualidad & Normativa</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
            Blog Farmacéutico
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            Novedades, análisis del Decreto 466 y guías para tu carrera.
          </p>
        </header>

        {/* --- BARRA DE BÚSQUEDA --- */}
        <div className="mb-10 relative max-w-xl mx-auto">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Buscar artículos (Ej: Decreto 466, Dosis...)" 
                    className="w-full pl-12 pr-10 py-4 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700 font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>
            {searchTerm && (
                <p className="text-center text-xs text-slate-400 mt-2 font-medium">
                    {filteredPosts.length} resultados encontrados para &quot;{searchTerm}&quot;
                </p>
            )}
        </div>

        {/* LISTA DE ARTÍCULOS */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                const isOpen = openPostId === post.id;

                return (
                  <article 
                    key={post.id} 
                    className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-blue-500 ring-1 ring-blue-500 shadow-md' : 'border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {/* CABECERA DE LA TARJETA */}
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

                          {/* Extracto */}
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

                    {/* CONTENIDO EXPANDIBLE */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 animate-fadeIn">
                        <hr className="border-slate-100 mb-6" />
                        
                        <div 
                          className="prose prose-blue prose-slate max-w-none text-slate-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: post.content }} 
                        />
                        
                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); 
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
              })
          ) : (
              // MENSAJE DE "NO ENCONTRADO"
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <FileSearch className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-700">No encontramos nada</h3>
                  <p className="text-slate-500">Intenta con otra palabra clave o revisa la ortografía.</p>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="mt-4 text-blue-600 font-bold text-sm hover:underline"
                  >
                    Ver todos los artículos
                  </button>
              </div>
          )}
        </div>
      </main>
    </div>
  );
}
