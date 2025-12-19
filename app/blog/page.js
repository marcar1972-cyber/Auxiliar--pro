'use client';
import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { Search, ArrowLeft, ChevronRight, Home, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // BARRA DE NAVEGACIÓN ORIGINAL RESTAURADA
  const Navbar = () => (
    <nav className="p-4 bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* LOGO DEL REPOSITORIO */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="AuxiliarPro" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* ACCESOS Y MENÚ */}
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600 hidden md:block" />
          <div className="flex items-center gap-6 border-l pl-6 border-slate-100">
            <Link href="/dermocheck" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">
              <BookOpen className="w-4 h-4 text-slate-400" />
              DERMOCHECK
            </Link>
            <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
              <img src="/profile.png" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-10">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 mt-8">
          <button onClick={() => setSelectedPost(null)} className="flex items-center text-blue-600 font-bold mb-6 hover:underline">
            <ArrowLeft className="mr-2 w-4 h-4" /> Volver al Blog
          </button>
          <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-8">
              {selectedPost.title}
            </h1>
            <div className="leading-relaxed text-lg space-y-6 text-slate-700" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <header className="mb-10 flex justify-between items-end">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Blog AuxiliarPro</h1>
          <Link href="/" className="text-blue-600 text-sm font-bold flex items-center hover:underline mb-2">
            <Home className="w-4 h-4 mr-1" /> Inicio
          </Link>
        </header>

        <div className="relative mb-12">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar artículos..." 
            className="w-full p-4 pl-14 rounded-xl border border-slate-200 shadow-sm text-lg outline-none bg-white focus:ring-2 focus:ring-blue-500/20" 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => setSelectedPost(post)} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all group">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 mb-3 tracking-tight">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm line-clamp-2 mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center text-blue-600 font-bold text-sm">
                Leer artículo <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
