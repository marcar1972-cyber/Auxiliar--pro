import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 Importamos componentes
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // 🟢 AQUÍ ESTÁ LA IMPORTACIÓN DE LA FLECHA

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  
  // 🟢 SEO: Canonical para evitar contenido duplicado
  alternates: {
    canonical: '/',
  },

  // 🟢 SEO: Instrucciones para robots
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

  // 🟢 BRANDING: Títulos optimizados
  title: {
    default: "AuxiliarPro | Simulador Examen Farmacia Chile",
    template: "%s | AuxiliarPro"
  },
  
  description: "Plataforma líder de estudio para Auxiliares de Farmacia en Chile. Simulador de examen SEREMI, guías del Decreto 466, 404, 405, Decreto 3 y bolsa de empleo farmacéutico.",
  
  // 🟢 KEYWORDS: Agregamos términos del ecosistema y nuevas guías
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

  // 🟢 AUTORÍA: Vinculación de marca
  authors: [{ name: "AuxiliarPro", url: "https://www.auxiliaresdefarmacia.cl" }],
  creator: "MaczDev Ecosistema Digital",
  publisher: "AuxiliarPro",
  category: "Education",

  icons: {
    icon: '/logo-favicon.ico', 
    apple: '/logo-favicon.ico', 
  },

  // 🟢 SOCIAL: Cómo se ve al compartir en WhatsApp/LinkedIn
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
    // 🟢 Agregamos scroll-smooth para que la subida sea suave y no de golpe
    <html lang="es" className="scroll-smooth"> 
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        
        {/* Navbar Global */}
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer Global */}
        <Footer />
        
        {/* 🟢 AQUÍ ESTÁ EL BOTÓN FLOTANTE RENDERIZADO */}
        <ScrollToTop />
        
        {/* Analíticas Vercel */}
        <Analytics />
      </body>
    </html>
  );
}