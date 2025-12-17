import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Search, Calculator } from "lucide-react"; // Importamos Calculator de nuevo
import UserIcon from "./UserIcon"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  title: {
    default: "AuxiliarPro | Simulador Examen Farmacia Chile",
    template: "%s | AuxiliarPro"
  },
  description: "Plataforma de estudio para Auxiliares de Farmacia en Chile. Simulador de examen, biblioteca de decretos (DS 466, 404) y blog educativo.",
  keywords: ["Auxiliar de farmacia", "Examen competencia", "Seremi Salud", "Farmacia Chile", "Decreto 466", "Simulador Farmacia"],
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
      <body className={inter.className}>
        <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="relative w-48 h-10 hover:opacity-80 transition-opacity">
               <Image src="/logo.png" alt="Logo AuxiliarPro" fill className="object-contain object-left" />
            </Link>

            {/* HERRAMIENTAS */}
            <div className="flex items-center gap-4">
               <Link href="/blog" className="text-slate-400 hover:text-aux-dark transition-colors p-2 hover:bg-slate-50 rounded-full" title="Buscar en el Blog">
                  <Search size={20} />
               </Link>
               <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

               {/* --- BOTÓN RESTAURADO Y FUNCIONAL --- */}
               <Link href="/dermocheck" className="hidden sm:flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-xs tracking-wider px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">
                  <Calculator size={16} /> DERMOCHECK
               </Link>
               {/* ----------------------------------- */}

               <div className="h-6 w-px bg-slate-200"></div>
               <UserIcon />
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
