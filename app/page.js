import Link from "next/link";
import Image from "next/image"; // Se mantiene la importación aunque no se use el logo principal aquí, por si se usa en otro lado o a futuro.
import { Montserrat, Inter } from "next/font/google";
import { 
  BookOpen, Mail, ChevronDown, HelpCircle, ArrowRight, Facebook, Instagram 
} from "lucide-react"; 
import { FAQS, BLOG_POSTS } from "./data"; 

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["700", "900"], 
  variable: '--font-montserrat',
  display: 'swap' 
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: '--font-inter',
  display: 'swap'
});

const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  const featuredFaqs = FAQS[0]?.questions.slice(0, 2) || [];

  return (
    <main className={`${inter.variable} ${montserrat.variable} flex min-h-screen flex-col bg-white font-sans text-left`}>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full mt-12 mb-10 text-left">
        
        {/* CORRECCIÓN 1: Se eliminó el bloque de imagen del logo que sobraba aquí */}

        <span className="bg-emerald-50 text-aux-green text-[11px] font-black px-3 py-1 rounded-full mb-6 tracking-widest border border-emerald-100 uppercase text-left">
            Meta: Credencial 2026
        </span>

        <h1 className="text-4xl md:text-5xl font-black text-aux-dark leading-[1.1] mb-8 tracking-tight text-center font-montserrat">
            PREPÁRATE PARA TU EXAMEN DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aux-green to-teal-400">
                AUXILIAR DE FARMACIA
            </span>
        </h1>

        <div className="w-full space-y-3 text-left">
            {/* CORRECCIÓN 2: Se cambió 'text-left' por 'text-center' para centrar el texto del botón */}
            <Link href="/quiz" aria-label="Comenzar ahora el examen de práctica" className="block w-full bg-aux-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-900/10 transition-all text-center">
                COMENZAR AHORA
            </Link>
            <Link href="/blog" aria-label="Leer artículos del blog de estudio" className="group block w-full bg-white text-slate-600 border-2 border-slate-100 font-bold text-lg py-4 rounded-xl hover:border-aux-green transition-all flex items-center justify-center gap-2 text-left">
                <BookOpen size={20} className="text-slate-400 group-hover:text-aux-green" aria-hidden="true" />
                LEER ARTÍCULOS
            </Link>
        </div>

        <div className="mt-12 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left w-full flex gap-4 items-start relative overflow-hidden text-left">
            <div className="relative z-10 w-10 h-10 min-w-[40px] bg-white border border-slate-200 rounded-full flex items-center justify-center text-aux-green font-black shadow-sm text-left">M</div>
            <div className="relative z-10 text-left">
                <p className="text-xs font-bold text-aux-dark uppercase tracking-wider mb-1 text-left">Marcelo dice:</p>
                <p className="text-slate-600 text-sm italic leading-relaxed text-left">
                    "Auxiliar de farmacia en preparación, esta web es mi cuaderno de estudio abierto. Compartimos conocimiento real basado en la normativa 2026."
                </p>
            </div>
        </div>

        <div className="w-full mt-20 text-left">
            <div className="flex items-end justify-between mb-6 px-2 text-left">
                <h3 className="text-2xl font-black text-aux-dark tracking-tighter text-left font-montserrat">Centro de Ayuda</h3>
                <Link href="/faq" aria-label="Ver todas las preguntas frecuentes" className="text-aux-green text-xs font-bold flex items-center gap-1 hover:underline text-left">Ver todo <ArrowRight size={14} aria-hidden="true" /></Link>
            </div>
            
            <div className="space-y-3 text-left">
                {featuredFaqs.map((faq, index) => (
                    <article key={index} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left">
                        <p className="text-sm font-bold text-slate-800 mb-2 flex gap-2 text-left">
                            <HelpCircle size={16} className="text-emerald-500 shrink-0" aria-hidden="true" />
                            {faq.question}
                        </p>
                        <p className="text-xs text-slate-500 leading-relaxed italic text-left">{faq.answer}</p>
                    </article>
                ))}
                
                <Link href="/faq" aria-label="Explorar todas las respuestas técnicas" className="block bg-[#0f172a] p-6 rounded-[2rem] mt-6 relative overflow-hidden group transition-all text-left">
                    <div className="flex items-center justify-between relative z-10 text-left">
                        <div className="text-left">
                            <p className="text-white font-bold text-lg italic text-left">¿Tienes más dudas?</p>
                            <p className="text-slate-400 text-[11px] font-medium uppercase tracking-widest mt-1 text-left">Explora 30+ respuestas técnicas</p>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white text-left">
                            <ChevronDown size={20} className="-rotate-90" aria-hidden="true" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
      </div>

      <footer className="w-full bg-slate-50 border-t border-slate-100 py-12 px-4 mt-auto text-left">
        <div className="max-w-md mx-auto text-center space-y-8 text-left">
            <div className="flex justify-center gap-8 mb-4 text-left">
                <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" aria-label="Visitar nuestra página de Facebook" className="text-slate-400 hover:text-blue-600 transition-all text-left"><Facebook size={24} aria-hidden="true" /></a>
                <a href="https://www.instagram.com/auxiliarpro/" target="_blank" aria-label="Visitar nuestro perfil de Instagram" className="text-slate-400 hover:text-pink-500 transition-all text-left"><Instagram size={24} aria-hidden="true" /></a>
                <a href="https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz" target="_blank" aria-label="Unirse a nuestra comunidad de WhatsApp" className="text-slate-400 hover:text-emerald-500 transition-all text-left"><WhatsAppIcon size={24} aria-hidden="true" /></a>
            </div>
            
            <nav className="flex justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-left">
                <Link href="/legal/terminos" className="hover:text-aux-green text-left">Términos</Link>
                <Link href="/legal/descargos" className="hover:text-aux-green text-left">Descargos</Link>
            </nav>
            
            <a href="mailto:auxiliaprofarma@gmail.com" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter text-slate-400 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-left">
                <Mail size={12} aria-hidden="true" /> auxiliaprofarma@gmail.com
            </a>
            <p className="text-[10px] text-slate-400 font-medium italic text-left">© 2025 AuxiliarPro Chile. Proyecto independiente para el examen 2026.</p>
        </div>
      </footer>
    </main>
  );
}
