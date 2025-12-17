import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image"; 
import { Search, Calculator } from "lucide-react";
import UserIcon from "./UserIcon"; // <--- IMPORTANTE: Traemos el ícono inteligente

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AuxiliarPro | Simulador Examen de Competencia",
  description: "Preparación para el examen de Auxiliar de Farmacia en Chile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        
        {/* BARRA DE NAVEGACIÓN SUPERIOR (HEADER) */}
        <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            
            {/* LOGO IZQUIERDA */}
            <Link href="/" className="flex items-center">
               <Image 
                 src="/logo.png" 
                 alt="AuxiliarPro Logo" 
                 width={120} 
                 height={60} 
                 className="object-contain h-10 w-auto" 
                 priority
               />
            </Link>

            {/* ÍCONOS DERECHA */}
            <div className="flex items-center gap-1 md:gap-2">
              
              {/* LUPA */}
              <Link href="/blog" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-slate-50 rounded-full transition-all" title="Buscar temas en el Blog">
                <Search className="w-5 h-5" />
              </Link>

              <div className="h-6 w-px bg-slate-200 mx-1"></div>

              {/* DERMOCHECK */}
              <a href="https://auxiliar-dermocheck.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-50 transition-colors">
                <Calculator className="w-4 h-4" />
                <span className="text-xs font-bold tracking-wide hidden md:block">DERMOCHECK</span>
              </a>

              <div className="h-6 w-px bg-slate-200 mx-1"></div>

              {/* AQUÍ ESTÁ EL CAMBIO: ÍCONO INTELIGENTE */}
              <UserIcon />

            </div>
          </div>
        </header>

        {/* CONTENIDO DE LA PÁGINA */}
        {children}

      </body>
    </html>
  );
}
