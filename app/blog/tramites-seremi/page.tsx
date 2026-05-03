import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guía paso a paso: Cómo postular a la certificación SEREMI | AuxiliarPro',
  description: 'Descarga tu Certificado de Idoneidad y sigue el manual oficial para registrarte en Seremi en Línea y obtener tu título de Auxiliar de Farmacia.',
};

export default function TramitesSeremiPost() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        <header className="bg-[#003366] px-6 sm:px-10 py-12 text-white">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Guía paso a paso: Cómo postular a la certificación SEREMI
          </h1>
        </header>

        {/* NAVEGACIÓN INVERSA SUPERIOR */}
        <div className="px-6 sm:px-10 py-4 bg-slate-50 border-b border-slate-100">
          <Link href="/como-ser-auxiliar-farmacia" className="text-emerald-700 hover:text-emerald-800 font-bold text-sm flex items-center gap-1 transition-colors">
             <ChevronLeft size={16} /> Volver a la Guía Principal: Cómo ser Auxiliar
          </Link>
        </div>

        <div className="px-6 sm:px-10 py-10 space-y-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            Postular a tu certificación es un proceso 100% digital. Aquí tienes los recursos oficiales para que no cometas errores y tu carpeta de antecedentes sea aprobada sin demoras:
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-[#f8fafc] border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-[#003366] mb-2">Paso 1: Preparación de documentos</h3>
              <p className="text-slate-600 mb-4">
                Asegúrate de tener tu certificado de enseñanza media a mano y descarga el documento oficial requerido. <strong>Importante:</strong> El Certificado de Idoneidad es el documento que debe ser completado y firmado por tu Director Técnico (Químico Farmacéutico), donde él detalla y avala formalmente los conocimientos y habilidades prácticas que has aprendido durante tu tiempo de desempeño en la farmacia.
              </p>
              <a href="https://drive.google.com/file/d/1rMTpILe5LCED8HlpS5EbhPSnlBwk4EgD/view" target="_blank" rel="noopener noreferrer" className="text-[#28a745] font-bold hover:underline">
                📄 Descargar Certificado de Idoneidad
              </a>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-[#003366] mb-2">Paso 2: Registro en plataforma</h3>
              <p className="text-slate-600 mb-4">El ingreso se realiza mediante la plataforma Seremi en Línea. Este manual oficial detalla cada pantalla que verás al registrarte.</p>
              <a href="https://seremienlinea.minsal.cl/asdigital/manuales/1_Manual_de_Usuario_Externo_para_la_Certificacion_de_Competencias_de_Auxiliar_de_farmacia.pdf" target="_blank" rel="noopener noreferrer" className="text-[#28a745] font-bold hover:underline">
                📘 Ver Manual de Usuario Oficial SEREMI
              </a>
            </div>

            <div className="p-6 bg-[#f8fafc] border border-slate-200 rounded-xl">
              <h3 className="text-xl font-bold text-[#003366] mb-2">Paso 3: Seguimiento</h3>
              <p className="text-slate-600">Una vez enviada tu solicitud, revisa tu correo regularmente (incluyendo la carpeta de spam). La autoridad sanitaria puede pedir correcciones de documentos o notificar tu fecha de examen por esa vía.</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}