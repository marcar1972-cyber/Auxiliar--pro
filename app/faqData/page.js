"use client";

import { FAQS } from "../faqData/index";
import { ChevronLeft, HelpCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-20">
      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-slate-900 transition-colors">
          <ChevronLeft size={28} />
        </Link>
        <h1 className="text-xl font-black text-slate-900 tracking-tighter">Preguntas Frecuentes</h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-10 mt-6">
        {FAQS.map((cat, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] px-2">
              {cat.category}
            </h2>
            <div className="space-y-3">
              {cat.questions.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm overflow-hidden transition-all"
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-800 pr-4">{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-slate-400 transition-transform ${openId === faq.id ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {openId === faq.id && (
                    <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-1">
                      <p className="mt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="p-6 max-w-xl mx-auto">
        <div className="bg-[#0f172a] p-8 rounded-[2.5rem] text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
          <HelpCircle size={40} className="text-blue-400 mx-auto mb-4" />
          <h3 className="text-white font-bold mb-2 italic">¿No encuentras tu duda?</h3>
          <p className="text-slate-400 text-xs mb-6 px-4">Escríbenos directamente o consulta en el foro de la comunidad.</p>
          <Link 
            href="/quiz" 
            className="inline-block bg-white text-slate-900 font-black py-3 px-8 rounded-2xl text-sm hover:bg-slate-100 transition-colors"
          >
            Ir al Foro Pro
          </Link>
        </div>
      </div>
    </main>
  );
}
