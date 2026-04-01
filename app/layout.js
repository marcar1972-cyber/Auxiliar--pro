import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 Importamos componentes
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import BannerUrgencia from "./components/BannerUrgencia"; // 🟢 ESTE ES EL ÚNICO QUE DEBE QUEDAR
import ScrollToTop from "./components/ScrollToTop"; 
import dynamic from "next/dynamic";

// 🛡️ INYECCIÓN DE SEGURIDAD (CTO): Importación dinámica para evitar colapsos de servidor (SSR)
const AuthGuard = dynamic(() => import("./components/AuthGuard"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  
  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  title: {
    default: "AuxiliarPro | Simulador Examen Farmacia Chile",
    template: "%s | AuxiliarPro"
  },
  
  description: "Plataforma líder de estudio para Auxiliares de Farmacia en Chile. Simulador de examen SEREMI, guías del Decreto 466, 404, 405, Decreto 3 y bolsa de empleo farmacéutico.",
  
  keywords: [
    "Auxiliar de farmacia", 
    "Examen competencia", 
    "Farmacia Chile", 
    "Seremi Salud", 
    "Decreto 404", 
    "Decreto 466", 
    "Decreto 3", 
    "Decreto 405", 
    "Simulador Farmacia", 
    "AuxiliarPro", 
    "MaczDev", 
    "Farmacología", 
    "Dermocosmética"
  ],

  authors: [{ name: "AuxiliarPro", url: "https://www.auxiliaresdefarmacia.cl" }],
  creator: "MaczDev Ecosistema Digital",
  publisher: "AuxiliarPro",
  category: "Education",

  icons: {
    icon: '/logo-favicon.ico', 
    apple: '/logo-favicon.ico', 
  },

  openGraph: {
    title: "AuxiliarPro | Capacitación Farmacéutica Chile",
    description: "Prepara tu examen de competencia gratis con el simulador real y guías actualizadas.",
    url: 'https://www.auxiliaresdefarmacia.cl',
    siteName: 'AuxiliarPro',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Logo AuxiliarPro - Formación Farmacéutica',
      },
    ],
  },

  verification: {
    google: 'iIARSpG3ZCQPX13aWBNtsLFQLgwsCWVc-wb8SswLSqY', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth"> 
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        
        <AuthGuard>
          
          {/* 🔔 ÚNICA LLAMADA GLOBAL: Al estar aquí, ya cubre el Home y todas las rutas internas */}
          <BannerUrgencia />

          <Navbar />

          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
          
          <ScrollToTop />
        </AuthGuard>
        
        <Analytics />
      </body>
    </html>
  );
}