import Link from "next/link";
import { ChevronLeft, AlertTriangle } from "lucide-react";

export default function DescargosPage() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12 font-sans text-slate-700">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-aux-dark mb-8 transition-colors">
          <ChevronLeft size={20} /> Volver al Inicio
        </Link>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex gap-3">
                <AlertTriangle className="text-yellow-600 shrink-0" />
                <p className="text-sm text-yellow-800 font-bold">Aviso Importante de No Afiliación</p>
            </div>
        </div>

        <h1 className="text-3xl font-black text-aux-dark mb-6">Descargos Legales</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p><strong>AuxiliarPro Chile</strong> declara explícitamente que:</p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>NO representa al Ministerio de Salud (MINSAL)</strong>, ni al Instituto de Salud Pública (ISP), ni a las Secretarías Regionales Ministeriales (SEREMI) de Salud.</li>
            <li>No tiene la facultad de otorgar credenciales, títulos ni certificados oficiales de competencia.</li>
            <li>Cualquier cobro o trámite oficial debe realizarse única y exclusivamente a través de los canales del Estado (seremienlinea.minsal.cl).</li>
          </ul>

          <p className="mt-6 border-t pt-6 text-slate-500 italic">
            Esta web es una iniciativa independiente creada por profesionales para facilitar el acceso al estudio y la preparación de futuros colegas.
          </p>
        </div>
      </div>
    </main>
  );
}
