import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auxiliar Pro | Guía y Estudio 2026",
  description: "Plataforma gratuita de estudio y decretos para el Examen de Competencia de Auxiliar de Farmacia en Chile.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
