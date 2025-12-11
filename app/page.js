import Link from "next/link";
import { User, BookOpen, Search } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white font-sans">
      
      {/* 1. NAVBAR SUPERIOR */}
      <nav className="w-full p-4 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-1">
            <span className="text-xl font-black text-aux-dark tracking-tighter">
                Auxiliar<span className="text-aux-green">Pro</span>
            </span>
        </div>

        {/* Menú Herramientas */}
        <div className="flex items-center gap-4">
            {/* Dermocheck (Discreto en el menú) */}
            <Link href="https://auxiliar-dermocheck.vercel.app" target="_blank" className="group flex flex-col items-center">
                <Search size={20} className="text-slate-400 group-hover:text-aux-green transition-colors" />
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-aux-green hidden md:block">DERMOCHECK</span>
            </Link>

            {/* Icono Usuario */}
            <button className="bg-slate-50 text-aux-dark p-2 rounded-full hover:bg-aux-green hover:text-white transition-colors border border-slate-100">
                <User size={20} />
            </button>
        </div>
      </nav>

      {/* 2. HERO SECTION (CENTRO) */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full mt-[-40px]">
        
        {/* Etiqueta Gancho */}
        <span className="bg-emerald-50 text-aux-green text-[11px] font-black px-3 py-1 rounded-full mb-6 tracking-widest border border-emerald-100 uppercase">
            Meta: Credencial 2026
        </span>

        {/* H1 SEO Optimizado */}
        <h1 className="text-4xl md:text-5xl font-black text-aux-dark leading-[1.1] mb-8 tracking-tight">
            PREPÁRATE PARA TU EXAMEN DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-aux-green to-teal-400">
                AUXILIAR DE FARMACIA
            </span>
        </h1>

        {/* Botones de Acción */}
        <div className="w-full space-y-3">
            
            {/* Botón Principal (El Héroe) */}
            <Link href="/quiz" className="block w-full bg-aux-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-blue-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all">
                COMENZAR AHORA
            </Link>

            {/* Botón Secundario (Outline) */}
            <Link href="/blog" className="group block w-full bg-white text-slate-600 border-2 border-slate-100 font-bold text-lg py-4 rounded-xl hover:border-aux-green hover:text-aux-green transition-all flex items-center justify-center gap-2">
                <BookOpen size={20} className="text-slate-400 group-hover:text-aux-green" />
                LEER ARTÍCULOS
            </Link>

        </div>

        {/* 3. SECCIÓN CONFIANZA (Marcelo) */}
        <div className="mt-12 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-left w-full flex gap-4 items-start relative overflow-hidden">
            {/* Adorno de fondo */}
            <div className="absolute top-0 right-0 watermark-bg w-full h-full opacity-50"></div>
            
            <div className="relative z-10 w-10 h-10 min-w-[40px] bg-white border border-slate-200 rounded-full flex items-center justify-center text-aux-green font-black shadow-sm">
                M
            </div>
            <div className="relative z-10">
                <p className="text-xs font-bold text-aux-dark uppercase tracking-wider mb-1">Marcelo dice:</p>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                    "Auxiliar en preparación, esta web es mi cuaderno de estudio abierto. No vendemos cursos, compartimos conocimiento real."
                </p>
            </div>
        </div>

      </div>
    </main>
  );
}
