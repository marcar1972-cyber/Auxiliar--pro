import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 Importamos el componente Navbar que acabamos de crear
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  alternates: {
    canonical: './',
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
  description: "Plataforma de estudio para Auxiliares de Farmacia en Chile. Simulador de examen SEREMI, guías del Decreto 466, 404 y bolsa de empleo.",
  keywords: ["Auxiliar de farmacia", "Examen competencia", "Farmacia Chile", "Seremi Salud", "Decreto 404", "Decreto 466", "Simulador Farmacia"],
  authors: [{ name: "AuxiliarPro", url: "https://www.auxiliaresdefarmacia.cl" }],
  icons: {
    icon: '/logo-favicon.ico', 
    apple: '/logo-favicon.ico', 
  },
  openGraph: {
    title: "AuxiliarPro Chile",
    description: "Prepara tu examen de competencia gratis con el simulador real.",
    url: 'https://www.auxiliaresdefarmacia.cl',
    siteName: 'AuxiliarPro',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 600,
        alt: 'Logo AuxiliarPro',
      },
    ],
  },
  verification: {
    google: 'iIARSpG3ZCQPX13aWBNtsLFQLgwsCWVc-wb8SswLSqY', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        
        {/* Aquí llamamos al Navbar interactivo */}
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
