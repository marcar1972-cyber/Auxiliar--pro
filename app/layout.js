import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Search, Calculator, BookOpen } from "lucide-react"; 
import UserIcon from "./UserIcon";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // 1. La base define el dominio raíz
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  
  // 2. CORRECCIÓN CRÍTICA: Usamos './' para que sea dinámico.
  // Esto asegura que /blog tenga su propio canonical, y /dermocheck el suyo.
  alternates: {
    canonical: './',
  },

  title: {
    default: "AuxiliarPro | Simulador Examen Farmacia Chile",
    template: "%s | AuxiliarPro"
  },
  description: "Plataforma de estudio para Auxiliares de Farmacia en Chile.",
  keywords: ["Auxiliar de farmacia", "Examen competencia", "Farmacia Chile", "Seremi Salud", "Decreto 404"], // Agregué un par de keywords de nicho
  authors: [{ name: "MaczDev", url: "https://macz.dev" }], // Unificamos marca personal
  
  // --- FAVICON AGREGADO AQUÍ ---
  icons: {
    icon: '/logo-favicon.png',
    apple: '/logo-favicon.png',
  },
  // ----------------------------

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
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="relative w-40 h-10 hover:opacity-80 transition-opacity">
               <Image 
                 src="/logo.webp" 
                 alt="Logo AuxiliarPro - Hub de Farmacia" 
                 fill
                 className="object-contain object-left"
                 priority
               />
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
               
               {/* BOTÓN BLOG */}
               <Link href="/blog" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold text-xs tracking-wider px-3 py-2 rounded-lg hover:bg-emerald-50 transition-all">
                  <BookOpen size={16} />
                  <span>BLOG</span>
               </Link>

               <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
               
               {/* BOTÓN DERMOCHECK */}
               <Link href="/dermocheck" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-xs tracking-wider px-2 py-2 rounded-lg hover:bg-blue-50 transition-all border border-slate-100 md:border-none">
                  <Calculator size={16} />
                  <span className="hidden sm:inline">DERMOCHECK</span>
                  <span className="sm:hidden">DERMO</span>
               </Link>

               <div className="h-6 w-px bg-slate-200"></div>
               
               {/* ICONO DE USUARIO (Protegido con shrink-0 para no aplastarse) */}
               <div className="shrink-0">
                  <UserIcon />
               </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
        <Analytics />
      </body>
    </html>
  );
}
