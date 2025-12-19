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

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-10 text-slate-800">
        <div className="h-1.5 bg-blue-600 w-full sticky top-0 z-50"></div>
        <nav className="p-4 bg-white border-b sticky top-1.5 z-40 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedPost(null)} className="flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
              <ArrowLeft className="mr-2 w-5 h-5" /> Volver al Blog
            </button>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 mt-8">
          <article className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">{selectedPost.title}</h1>
            <div className="leading-relaxed text-lg space-y-6 text-slate-700" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">Cuaderno de <span className="text-blue-600">Estudio</span></h1>
          <p className="text-slate-500 font-medium">Guías técnicas oficiales letra por letra para tu certificación.</p>
        </header>
        <div className="relative mb-12">
          <input type="text" placeholder="Buscar requisitos, decretos..." className="w-full p-4 pl-12 rounded-xl border border-slate-200 shadow-sm focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => setSelectedPost(post)} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md hover:border-blue-100 transition-all group">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 mb-2 transition-colors">{post.title}</h2>
              <p className="text-slate-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-widest">Abrir cuaderno <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
