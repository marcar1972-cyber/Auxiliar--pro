"use client";

import { useState, useEffect } from "react";
import { FAQS } from "../faqData/index";
import { ChevronLeft, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Previene errores de hidratación en Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* HEADER ESTILO QUIZ */}
      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/quiz" className="text-slate-400 hover:text-slate-900 transition-colors">
          <ChevronLeft size={28} />
        </Link>
        <h1 className="text-xl font-black text-slate-900 tracking-tighter">Preguntas Frecuentes</h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto space-y-10 mt-6">
        {FAQS.map((cat, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] px-2 text-left">
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
                    <span className="font-bold text-slate-800 pr-4 text-sm">{faq.question}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-slate-400 transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {openId === faq.id && (
                    <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-1 duration-200">
                      <p className="mt-4 italic">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* TARJETA DE AYUDA (Mismo estilo que el Foro) */}
        <div className="mt-12 p-10 bg-[#0f172a] rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center border border-white/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <HelpCircle size={48} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-2 italic tracking-tight italic">¿Dudas específicas?</h3>
            <p className="text-slate-400 text-xs mb-8 leading-relaxed px-4 italic">
              Si tu pregunta no está aquí, recuerda que en el Foro Pro resolvemos casos técnicos todos los días.
            </p>
            <Link 
              href="/quiz" 
              className="inline-block bg-white text-slate-900 font-black py-4 px-10 rounded-2xl hover:bg-slate-100 transition-all shadow-lg text-sm"
            >
              <MessageCircle size={18} className="inline mr-2 text-pink-500" /> Ir al Foro Pro
            </Link>
        </div>
      </div>
    </main>
  );
}
