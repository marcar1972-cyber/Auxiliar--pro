import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Search, Calculator } from "lucide-react";
import UserIcon from "./UserIcon";

// CORRECCIÓN DEFINITIVA: 
// Usamos "../" para salir de la carpeta 'app' y entrar en 'components'.
// Esto funciona sin necesidad de configurar alias.
import Footer from "../components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  alternates: {
    canonical: 'https://www.auxiliaresdefarmacia.cl',
  },
  title: {
    default: "AuxiliarPro | Simulador Examen Farmacia Chile",
    template: "%s | AuxiliarPro"
  },
  description: "Plataforma de estudio para Auxiliares de Farmacia en Chile.",
  keywords: ["Auxiliar de farmacia", "Examen competencia", "Farmacia Chile"],
  authors: [{ name: "Marcelo C." }],
  openGraph: {
    title: "AuxiliarPro Chile",
    description: "Prepara tu examen de competencia gratis.",
    url: 'https://www.auxiliaresdefarmacia.cl',
    siteName: 'AuxiliarPro',
    locale: 'es_CL',
    type: 'website',
  },
  verification: {
    google: 'iIARSpG3ZCQPX13aWBNtsLFQLgwsCWVc-wb8SswLSqY', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* min-h-screen y flex-col aseguran que el footer se vaya al fondo */}
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        
        <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="relative w-40 h-10 hover:opacity-80 transition-opacity">
               <Image src="/logo.webp" alt="Logo AuxiliarPro" fill className="object-contain object-left" priority />
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
               <Link href="/blog" className="text-slate-400 hover:text-aux-dark transition-colors p-2 hover:bg-slate-50 rounded-full">
                  <Search size={20} />
               </Link>
               <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
               <Link href="/dermocheck" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-xs tracking-wider px-2 py-2 rounded-lg hover:bg-blue-50 transition-all border border-slate-100 md:border-none">
                  <Calculator size={16} />
                  <span className="hidden sm:inline">DERMOCHECK</span>
                  <span className="sm:hidden">DERMO</span>
               </Link>
               <div className="h-6 w-px bg-slate-200"></div>
               <UserIcon />
            </div>
          </div>
        </nav>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* FOOTER */}
        <Footer />
        
        <Analytics />
      </body>
    </html>
  );
}
