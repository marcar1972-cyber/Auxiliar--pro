import Link from "next/link";
import { ChevronLeft, FileText, Download } from "lucide-react";

export default function BibliotecaPage() {
  // Lista de tus archivos reales en la carpeta public
  const guides = [
    { title: "Guía Decreto 404 (Estupefacientes)", file: "Guía de Estudio_ Decreto 404.pdf", color: "bg-red-50 text-red-700" },
    { title: "Guía Decreto 405 (Psicotrópicos)", file: "Guía de Estudio_ Decreto 405.pdf", color: "bg-green-50 text-green-700" },
    { title: "Guía Decreto 466 (Reglamento Farmacias)", file: "Guía de Estudio_Decreto 466.pdf", color: "bg-blue-50 text-blue-700" },
    { title: "Ley de Fármacos I (Ley 20.724)", file: "Guía de Estudio_ Ley 20.724 (Ley de Fármacos I).pdf", color: "bg-purple-50 text-purple-700" },
    { title: "Guía Maestra de Posología", file: "guia_posologia.pdf", color: "bg-orange-50 text-orange-700" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <Link href="/quiz" className="inline-flex items-center text-slate-400 hover:text-aux-dark mb-8 transition-colors">
          <ChevronLeft size={20} /> Volver al Panel de Estudio
        </Link>
        
        <h1 className="text-3xl font-black text-aux-dark mb-2">Biblioteca de Recursos</h1>
        <p className="text-slate-500 mb-8">Descarga las guías oficiales y reglamentos para tu estudio.</p>

        {/* Grilla de Archivos */}
        <div className="grid gap-4">
            {guides.map((guide, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${guide.color}`}>
                            <FileText size={20} />
                        </div>
                        <span className="font-bold text-slate-700 text-sm md:text-base">{guide.title}</span>
                    </div>
                    
                    <a 
                        href={`/${guide.file}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-50 rounded-full text-slate-400 hover:bg-aux-green hover:text-white transition-colors"
                        title="Abrir PDF"
                    >
                        <Download size={20} />
                    </a>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
