"use client";

import Link from "next/link";
import { ChevronLeft, Download, BookOpen, Scale, ThermometerSnowflake, ShieldCheck, FileText } from "lucide-react";

export default function BibliotecaPage() {
  // 1. REEMPLAZA ESTOS DOS VALORES CON TUS DATOS REALES DE GITHUB
  const GITHUB_USER = "TU_USUARIO_AQUI"; // Ejemplo: "marceloc"
  const GITHUB_REPO = "TU_REPOSITORIO_AQUI"; // Ejemplo: "auxiliar-pro"

  // Base URL para archivos Raw en GitHub
  const BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/main/public`;

  const material = [
    {
      title: "Decreto Supremo 466",
      desc: "Reglamento de Farmacias, Almacenes Farmacéuticos y Botiquines.",
      icon: <Scale className="text-blue-500" />,
      // Nombre exacto en imagen: Guía de Estudio_Decreto 466.pdf (Sin espacio tras _)
      link: `${BASE_URL}/Gu%C3%ADa%20de%20Estudio_Decreto%20466.pdf`,
      category: "Legislación"
    },
    {
      title: "Ley de Fármacos (Ley 20.724)",
      desc: "Regulación de farmacias y medicamentos en el Código Sanitario.",
      icon: <BookOpen className="text-emerald-500" />,
      // Nombre exacto en imagen: Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf (Con espacio)
      link: `${BASE_URL}/Gu%C3%ADa%20de%20Estudio_%20Ley%2020.724%20(Ley%20de%20F%C3%A1rmacos%20I).pdf`,
      category: "Legislación"
    },
    {
      title: "Decreto Supremo 404",
      desc: "Reglamento de Estupefacientes (Listas I, II y III).",
      icon: <ShieldCheck className="text-red-500" />,
      // Nombre exacto en imagen: Guía de Estudio_ Decreto 404.pdf (Con espacio)
      link: `${BASE_URL}/Gu%C3%ADa%20de%20Estudio_%20Decreto%20404.pdf`,
      category: "Controlados"
    },
    {
      title: "Decreto Supremo 405",
      desc: "Reglamento de Productos Psicotrópicos (Listas I a IV).",
      icon: <ThermometerSnowflake className="text-cyan-500" />,
      // Nombre exacto en imagen: Guía de Estudio_ Decreto 405.pdf (Con espacio)
      link: `${BASE_URL}/Gu%C3%ADa%20de%20Estudio_%20Decreto%20405.pdf`,
      category: "Controlados"
    },
    {
      title: "Guía de Posología",
      desc: "Conceptos sobre dosificación y administración de medicamentos.",
      icon: <FileText className="text-orange-500" />,
      // Nombre exacto en imagen: guia_posologia.pdf
      link: `${BASE_URL}/guia_posologia.pdf`,
      category: "Técnico"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 font-sans text-left">
      <div className="max-w-2xl mx-auto">
        <header className="mb-10 flex items-center gap-4">
          <Link href="/quiz" className="p-2 bg-white rounded-xl shadow-sm text-slate-400 hover:text-slate-900 transition-all cursor-pointer">
            <ChevronLeft size={24} />
          </Link>
          <div className="text-left">
            <h1 className="text-2xl font-black text-slate-900 tracking-tighter">Biblioteca Técnica</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Material oficial 2026</p>
          </div>
        </header>

        <div className="grid gap-4">
          {material.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-5 hover:border-blue-200 transition-all group text-left">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-1 text-left">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-tighter mb-1 block">{item.category}</span>
                <h3 className="font-bold text-slate-800 text-lg leading-tight mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 italic leading-relaxed mb-4">{item.desc}</p>
                <a 
                  href={item.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-full hover:bg-emerald-500 transition-colors cursor-pointer shadow-lg"
                >
                  <Download size={12} /> DESCARGAR PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 text-center">
            <p className="text-blue-700 font-bold text-sm italic">"El conocimiento es la mejor herramienta para un Auxiliar."</p>
        </footer>
      </div>
    </main>
  );
}
