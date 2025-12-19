'use client';
import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { Search, ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // SI HAY UN POST SELECCIONADO, MOSTRAR EL CONTENIDO
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <nav className="p-4 border-b flex items-center bg-slate-50">
          <button onClick={() => setSelectedPost(null)} className="flex items-center text-blue-600 font-bold">
            <ArrowLeft className="mr-2 w-5 h-5" /> Volver al Blog
          </button>
        </nav>
        <article className="max-w-3xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">{selectedPost.title}</h1>
          <div className="prose prose-blue" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
        </article>
      </div>
    );
  }

  // SI NO, MOSTRAR LA LISTA DE ARTÍCULOS
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Blog AuxiliarPro</h1>
        
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar artículos..."
            className="w-full p-4 pl-12 rounded-2xl border-none shadow-sm text-lg focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all group"
            >
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-2">{post.title}</h2>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-blue-600 font-bold">
                Leer artículo <ChevronRight className="ml-1 w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
