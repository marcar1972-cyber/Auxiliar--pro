import Image from "next/image";
import Link from "next/link";
import { User, BookOpen, Search, Calculator, Mail } from "lucide-react"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      
      {/* 1. NAVBAR SUPERIOR */}
      <nav className="w-full p-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        
        {/* LOGO: Ahora sí apunta a tu archivo renombrado */}
        <Link href="/" className="flex items-center">
            <Image 
                src="/logo.png" 
                alt="Logo AuxiliarPro Chile" 
                width={150} 
                height={90} 
                priority
                className="object-contain"
            />
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 text-slate-400 hover:text-aux-dark transition-colors" aria-label="Buscar">
                <Search size={20} />
            </button>

            <Link href="https://auxiliar-dermocheck.vercel.app" target="_blank" className="group flex flex-col items-center">
                <Calculator size={20} className="text-slate-400 group-hover:text-aux-green transition-colors" />
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-aux-green hidden md:block">DERMOCHECK</span>
            </Link>

            <div className="h-6 w-px bg-slate-200 mx-1"></div>

            <button className="bg-slate-50 text-aux-dark p-2 rounded-full hover:bg-aux-green hover:text-white transition-colors border border-slate-100">
                <User size={20} />
            </button>
        </div>
      </nav>

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full mt-[-20px] mb-10">
        
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

      </div>

      {/* 3. FOOTER */}
      <footer className="w-full bg-slate-50 border-t border-slate-100 py-8 px-4 mt-auto">
        <div className="max-w-md mx-auto text-center space-y-4">
            
            <div className="flex justify-center gap-4 text-xs font-medium text-slate-500">
                <Link href="/legal/terminos" className="hover:text-aux-green transition-colors">Términos de Uso</Link>
                <span className="text-slate-300">•</span>
                <Link href="/legal/descargos" className="hover:text-aux-green transition-colors">Descargos Legales</Link>
            </div>

            <a href="mailto:contacto@auxiliaresdefarmacia.cl" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-aux-green transition-colors bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <Mail size={12} />
                ¿Encontraste un error? Escríbenos
            </a>

            <div className="pt-4 border-t border-slate-200/50">
                <p className="text-[10px] text-slate-400 leading-tight">
                    © 2025 AuxiliarPro Chile. Proyecto independiente.<br/>
                    Esta web no tiene afiliación con el MINSAL ni SEREMI.
                </p>
            </div>
        </div>
      </footer>

    </main>
  );
}
