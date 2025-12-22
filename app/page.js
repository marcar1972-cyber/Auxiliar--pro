"use client";

import { FAQS, BLOG_POSTS } from './data';
import Link from 'next/link';
import { ChevronDown, MessageCircle, Library, GraduationCap, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* ... Hero y secciones anteriores ... */}

      {/* SECCIÓN FAQS: CORREGIDA PARA DATOS MODULARES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter text-slate-900">
            Preguntas Frecuentes 2026
          </h2>
          
          <div className="space-y-12">
            {FAQS.map((category, catIdx) => (
              <div key={catIdx} className="space-y-4">
                <h3 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest ml-4 text-left">
                  {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.questions.map((faq, faqIdx) => {
                    // Generamos un ID único combinando categoría e índice
                    const faqId = `${catIdx}-${faqIdx}`;
                    return (
                      <div key={faqId} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                        <button 
                          onClick={() => setOpenFaq(openFaq === faqId ? null : faqId)}
                          className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-bold text-slate-800 text-sm">{faq.question}</span>
                          <ChevronDown className={`text-slate-400 transition-transform ${openFaq === faqId ? 'rotate-180' : ''}`} size={20} />
                        </button>
                        {openFaq === faqId && (
                          <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4 text-left">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARJETA FORO NEGRA (ESTILO IMAGEN 2) */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-6">
          <div className="p-10 bg-[#0f172a] rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-2xl font-black text-white mb-3 italic tracking-tight italic underline">
              ¿Dudas con la materia?
            </h3>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed px-4 italic">
              Únete a nuestro grupo de apoyo para auxiliares y técnicos. Resolvemos dudas de la SEREMI en comunidad.
            </p>
            <Link href="/quiz" className="bg-white text-slate-900 font-black py-5 px-10 rounded-3xl w-full flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-lg text-lg">
              <MessageCircle size={24} className="text-pink-500"/> Entrar al Foro
            </Link>
          </div>
        </div>
      </section>

      {/* ... Resto del footer ... */}
    </div>
  );
}
