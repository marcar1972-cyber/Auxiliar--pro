'use client';
import React, { useState } from 'react';
import { FAQS } from './data';
import { Search, BookOpen, User, ChevronDown, ChevronRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* HEADER RESTAURADO */}
      <nav className="p-4 bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/logo.png" alt="AuxiliarPro" className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest">Blog</Link>
            <Link href="/dermocheck" className="hidden md:flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-600">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Dermocheck
            </Link>
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
              <User className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="max-w-4xl mx-auto text-center pt-20 pb-16 px-6">
        <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-emerald-100">
          META: CREDENCIAL 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-10 mb-8 leading-[0.9] tracking-tighter uppercase">
          PREPÁRATE PARA TU EXAMEN DE <span className="text-emerald-500">AUXILIAR DE FARMACIA</span>
        </h1>
        <div className="flex flex-col gap-4 mt-12">
          <Link href="/quiz" className="bg-slate-900 text-white px-10 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
            COMENZAR AHORA
          </Link>
          <Link href="/blog" className="bg-white text-slate-600 border border-slate-200 px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
            <BookOpen className="w-5 h-5" /> LEER ARTÍCULOS
          </Link>
        </div>
      </main>

      {/* SECCIÓN MARCELO DICE */}
      <section className="max-w-2xl mx-auto px-6 mb-20">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 font-black shrink-0">M</div>
            <div>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Marcelo dice:</p>
              <p className="text-slate-600 leading-relaxed italic">
                "Auxiliar de farmacia en preparación, esta web es mi cuaderno de estudio abierto. No vendemos cursos, compartimos conocimiento real basado en la normativa vigente."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES RESTAURADAS */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
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
