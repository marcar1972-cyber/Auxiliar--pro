'use client';
import React, { useState } from 'react';
import { FAQS } from './data';
import { Search, BookOpen, User, ChevronDown, Layout } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAVBAR ORIGINAL (image_3d2059.png) */}
      <nav className="p-4 bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <img src="/logo.png" alt="AuxiliarPro" className="h-8 md:h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-6">
            <Search className="w-5 h-5 text-slate-400 cursor-pointer" />
            <div className="h-6 w-px bg-slate-100 mx-2 hidden md:block"></div>
            <Link href="/dermocheck" className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">
              <Layout className="w-4 h-4 text-slate-400" />
              DERMOCHECK
            </Link>
            <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
               <img src="/profile.png" alt="Perfil" className="w-full h-full object-cover" onError={(e) => e.target.src="https://placehold.co/40x40/10b981/ffffff?text=U"} />
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION CON TAMAÑOS CORREGIDOS */}
      <main className="max-w-4xl mx-auto text-center pt-24 pb-16 px-6">
        <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-emerald-100">
          META: CREDENCIAL 2026
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-10 mb-8 leading-tight tracking-tighter uppercase">
          PREPÁRATE PARA TU EXAMEN DE <br/>
          <span className="text-emerald-500">AUXILIAR DE FARMACIA</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-12 max-w-lg mx-auto">
          <Link href="/quiz" className="bg-[#0f172a] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
            COMENZAR AHORA
          </Link>
          <Link href="/blog" className="bg-white text-slate-600 border border-slate-200 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 shadow-sm">
            <BookOpen className="w-5 h-5" /> LEER ARTÍCULOS
          </Link>
        </div>
      </main>

      {/* SECCIÓN MARCELO */}
      <section className="max-w-2xl mx-auto px-6 mb-20">
        <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-100 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-500 font-black shadow-sm shrink-0">M</div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">MARCELO DICE:</p>
            <p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
              "Auxiliar de farmacia en preparación, esta web es mi cuaderno de estudio abierto. No vendemos cursos, compartimos conocimiento real basado en la normativa vigente."
            </p>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-6 text-left flex justify-between items-center">
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
