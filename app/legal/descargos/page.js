import Link from "next/link";
import { ChevronLeft, AlertTriangle } from "lucide-react";

export default function DescargosPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12 font-sans text-slate-700 selection:bg-emerald-500/30">
      <div className="max-w-3xl mx-auto">
        
        {/* Navegación Semántica */}
        <nav aria-label="Navegación">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#003366] mb-8 transition-colors font-bold text-sm"
            title="Volver a la página principal de AuxiliarPro"
          >
            <ChevronLeft size={20} aria-hidden="true" /> Volver al Inicio
          </Link>
        </nav>
        
        <article aria-labelledby="titulo-legal">
          <header className="mb-8">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg shadow-sm">
                <div className="flex gap-3 items-center">
                    <AlertTriangle className="text-amber-600 shrink-0" aria-hidden="true" />
                    <h2 className="text-sm text-amber-900 font-black uppercase tracking-wide">
                      Aviso Importante de Independencia Institucional
                    </h2>
                </div>
            </div>

            <h1 id="titulo-legal" className="text-3xl md:text-4xl font-black text-[#003366] mb-4 tracking-tight">
              Descargos Legales y Términos de Uso
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Transparencia y claridad sobre la naturaleza de nuestros servicios de preparación para el <strong className="text-[#003366]">Examen de Auxiliar de Farmacia</strong>.
            </p>
          </header>
          
          <section className="space-y-6 text-base leading-relaxed bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-inner">
            <p>
              <strong>AuxiliarPro Chile</strong> es una plataforma EdTech (tecnología educativa) privada e independiente, creada por profesionales para facilitar el estudio y la preparación de futuros colegas en el rubro farmacéutico.
            </p>
            
            <p className="font-bold text-[#003366]">
              Declaramos explícitamente y para todos los efectos legales que:
            </p>
            
            <ul className="list-disc pl-6 space-y-4 marker:text-[#28a745]">
              <li>
                <strong>NO representamos ni tenemos afiliación gubernamental</strong> con el Ministerio de Salud de Chile (<strong className="text-[#003366]">MINSAL</strong>), el Instituto de Salud Pública (<strong className="text-[#003366]">ISP</strong>), ni las Secretarías Regionales Ministeriales (<strong className="text-[#28a745]">SEREMI</strong>) de Salud.
              </li>
              <li>
                Nuestra plataforma funciona exclusivamente como una herramienta de entrenamiento, educación y simulación basada en la normativa vigente. <strong>No tenemos la facultad legal</strong> de otorgar credenciales, títulos ni certificados oficiales de competencia para ejercer en farmacias.
              </li>
              <li>
                Todo trámite legal, postulación al examen de competencia y pago de aranceles oficiales debe realizarse única y exclusivamente a través de los canales formales del Estado de Chile, específicamente en el portal oficial: <a href="https://seremienlinea.minsal.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">seremienlinea.minsal.cl</a>.
              </li>
            </ul>

            <footer className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-slate-500 italic text-sm">
                El uso de la plataforma AuxiliarPro no garantiza la aprobación automática del examen oficial, pero proporciona un entorno de estudio riguroso diseñado bajo las exigencias teóricas y normativas de la autoridad sanitaria chilena.
              </p>
            </footer>
          </section>
        </article>

      </div>
    </main>
  );
}