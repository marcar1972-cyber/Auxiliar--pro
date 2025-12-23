import Link from "next/link";
import { BookOpen, Mail, ChevronDown, HelpCircle, ArrowRight, Facebook, Instagram, MessageCircle } from "lucide-react"; 
import { FAQS, BLOG_POSTS } from "./data"; 

export default function Home() {
  const featuredFaqs = FAQS[0]?.questions.slice(0, 2) || [];

  return (
    <main className="flex min-h-screen flex-col bg-white font-sans text-left">
      
      {/* 2. CONTENIDO PRINCIPAL (HERO) */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full mt-8 mb-10">
        
        {/* --- NUEVOS ICONOS EN HEADER --- */}
        <div className="flex gap-6 mb-8 animate-in fade-in slide-in-from-top-2 duration-700">
            <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" className="text-slate-300 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/auxiliarpro/" target="_blank" className="text-slate-300 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz" target="_blank" className="text-slate-300 hover:text-emerald-500 transition-colors"><MessageCircle size={20} /></a>
        </div>

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
                    "Auxiliar de farmacia en preparación, esta web es mi cuaderno de estudio abierto. Compartimos conocimiento real basado en la normativa 2026."
                </p>
            </div>
        </div>

        {/* 3. SECCIÓN: CENTRO DE AYUDA (TEASER) */}
        <div className="w-full mt-20 text-left">
            <div className="flex items-end justify-between mb-6 px-2">
                <h3 className="text-2xl font-black text-aux-dark tracking-tighter">Centro de Ayuda</h3>
                <Link href="/faq" className="text-aux-green text-xs font-bold flex items-center gap-1 hover:underline">
                    Ver todo <ArrowRight size={14} />
                </Link>
            </div>
            
            <div className="space-y-3">
                {featuredFaqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                        <p className="text-sm font-bold text-slate-800 mb-2 flex gap-2">
                            <HelpCircle size={16} className="text-emerald-500 shrink-0" />
                            {faq.question}
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 italic">
                            {faq.answer}
                        </p>
                    </div>
                ))}

                <Link href="/faq" className="block bg-[#0f172a] p-6 rounded-[2rem] mt-6 relative overflow-hidden group transition-all hover:scale-[1.01]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12 blur-2xl"></div>
                    <div className="flex items-center justify-between relative z-10 text-left">
                        <div className="text-left">
                            <p className="text-white font-bold text-lg italic text-left">¿Tienes más dudas?</p>
                            <p className="text-slate-400 text-[11px] font-medium uppercase tracking-widest mt-1 text-left">Explora 30+ respuestas técnicas</p>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
                            <ChevronDown size={20} className="-rotate-90" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>

      </div>

      {/* --- FORO CON ICONOS RRSS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-md mx-auto px-6">
            <div className="p-10 bg-[#0f172a] rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <h3 className="text-2xl font-black text-white mb-3 italic tracking-tight underline italic text-center underline-offset-4 decoration-pink-500/50">¿Dudas con la materia?</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed px-4 italic text-center">Únete a nuestro grupo de apoyo para auxiliares y técnicos. Resolvemos dudas de la SEREMI en comunidad.</p>
                
                {/* ICONOS RRSS FORO */}
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" className="text-slate-500 hover:text-white transition-colors"><Facebook size={22} /></a>
                    <a href="https://www.instagram.com/auxiliarpro/" target="_blank" className="text-slate-500 hover:text-white transition-colors"><Instagram size={22} /></a>
                    <a href="https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz" target="_blank" className="text-slate-500 hover:text-white transition-colors"><MessageCircle size={22} /></a>
                </div>

                <Link href="/quiz" className="bg-white text-slate-900 font-black py-5 px-10 rounded-3xl w-full flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-lg text-lg">
                    <MessageCircle size={24} className="text-pink-500"/> Entrar al Foro
                </Link>
            </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="w-full bg-slate-50 border-t border-slate-100 py-10 px-4 mt-auto">
        <div className="max-w-md mx-auto text-center space-y-6">
            <div className="flex justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <Link href="/legal/terminos" className="hover:text-aux-green transition-colors">Términos</Link>
                <Link href="/legal/descargos" className="hover:text-aux-green transition-colors">Descargos</Link>
            </div>

            <a href="mailto:auxiliaprofarma@gmail.com" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-slate-400 hover:text-aux-green transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <Mail size={12} /> auxiliaprofarma@gmail.com
            </a>

            <div className="pt-6 border-t border-slate-200/50">
                <p className="text-[10px] text-slate-400 leading-tight font-medium text-center">
                    © 2025 AuxiliarPro Chile. Proyecto independiente para el examen 2026.<br/>
                    Esta web no tiene afiliación con el MINSAL ni SEREMI.
                </p>
            </div>
        </div>
      </footer>

    </main>
  );
}
