"use client";

import Link from "next/link";
import { BookOpen, Mail, ChevronDown, MessageCircle } from "lucide-react"; 
import { FAQS } from "./data"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      
      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full mt-8 mb-10">
        
        <span className="bg-emerald-50 text-aux-green text-[11px] font-black px-3 py-1 rounded-full mb-6 tracking-widest border border-emerald-100 uppercase">
            Meta: Credencial 2026
        </span>

        <h1 className="text-4xl md:text-5xl font-black text-aux-dark leading-[1.1] mb-8 tracking-tight">
            PREPÁRATE PARA TU EXAMEN DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aux-green to-teal-400">
                AUXILIAR DE FARMACIA
            </span>
        </h1>

        <div className="w-full space-y-3">
            <Link href="/quiz" className="block w-full bg-aux-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
                COMENZAR AHORA
            </Link>

            <Link href="/blog" className="group block w-full bg-white text-slate-600 border-2 border-slate-100 font-bold text-lg py-4 rounded-xl hover:border-aux-green hover:text-aux-green transition-all flex items-center justify-center gap-2">
                <BookOpen size={20} className="text-slate-400 group-hover:text-aux-green" />
                LEER ARTÍCULOS
            </Link>
        </div>

        <div className="mt-12 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left w-full flex gap-4 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 watermark-bg w-full h-full opacity-50"></div>
            <div className="relative z-10 w-10 h-10 min-w-[40px] bg-white border border-slate-200 rounded-full flex items-center justify-center text-aux-green font-black shadow-sm">
                M
            </div>
            <div className="relative z-10">
                <p className="text-xs font-bold text-aux-dark uppercase tracking-wider mb-1">Marcelo dice:</p>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                    "Auxiliar de farmacia en preparación, esta web es mi cuaderno de estudio abierto. No vendemos cursos, compartimos conocimiento real basado en la normativa vigente."
                </p>
            </div>
        </div>

        {/* 3. SECCIÓN FAQs */}
        <div className="w-full mt-16 text-left">
            <h3 className="text-xl font-black text-aux-dark mb-6 px-2 text-center">Preguntas Frecuentes</h3>
            <div className="space-y-3">
                {FAQS.map((faq, index) => (
                    <details key={index} className="group bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm open:shadow-md transition-all">
                        <summary className="flex justify-between items-center cursor-pointer p-4 font-bold text-slate-700 list-none select-none hover:bg-slate-50 transition-colors">
                            <span className="text-sm">{faq.q}</span>
                            <ChevronDown size={18} className="text-slate-400 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-4 pb-4 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-50 mt-2">
                            <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                        </div>
                    </details>
                ))}
            </div>
        </div>

      </div>

      {/* 4. FOOTER ACTUALIZADO POR MACZDEV */}
      <footer className="w-full bg-[#0f172a] text-slate-400 border-t border-white/5 py-10 px-4 mt-auto">
        <div className="max-w-md mx-auto text-center space-y-6">
            
            {/* Redes y WhatsApp */}
            <div className="flex justify-center gap-6">
              <a href="https://chat.whatsapp.com/Gm30JCRLvx9HoSZ4JTipQX" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-all">
                <MessageCircle size={24} />
              </a>
            </div>

            <div className="flex justify-center gap-4 text-[10px] font-black uppercase tracking-widest">
                <Link href="/legal/terminos" className="hover:text-white transition-colors">Términos</Link>
                <span className="text-slate-700">•</span>
                <Link href="/legal/descargos" className="hover:text-white transition-colors">Descargos</Link>
            </div>

            <a href="mailto:auxiliarprofarna@gmail.com" className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-emerald-400 transition-colors">
                <Mail size={12} />
                auxiliarprofarna@gmail.com
            </a>

            <div className="pt-6 border-t border-white/5 space-y-3">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">
                    AuxiliarPro Chile © 2026 | Excelencia Farmacéutica
                </p>
                
                {/* Firma MaczDev */}
                <div className="flex flex-col items-center gap-1">
                  <p className="text-[10px] font-bold text-emerald-500/80 tracking-widest">
                    Desarrollado por MaczDev • 2025
                  </p>
                  <p className="text-[9px] text-slate-500 italic font-medium">
                    Hecho con 80% de curiosidad humana y 20% de IA.
                  </p>
                </div>
            </div>
        </div>
      </footer>

    </main>
  );
}
