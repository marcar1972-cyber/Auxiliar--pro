import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Guía completa sobre los requisitos legales, académicos y laborales para obtener tu credencial ante la SEREMI.',
};

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Obtener la credencial de Auxiliar de Farmacia es un requisito legal ineludible para cualquier persona que desee trabajar en el mostrador o bodega de una farmacia en Chile. Este proceso está regulado por el <strong>Decreto Supremo N° 466</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">1. Requisitos Académicos y de Edad</h2>
          <p>Para postular a la certificación oficial, el interesado debe cumplir con dos condiciones básicas de entrada:</p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Mayoría de edad:</strong> Debes tener al menos 18 años cumplidos al momento de iniciar el trámite.</li>
            <li><strong>Enseñanza Media Completa:</strong> Es obligatorio contar con la licencia de cuarto medio aprobada y reconocida por el Ministerio de Educación.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 pt-6">2. Experiencia Práctica Certificada (1 Año)</h2>
          <p>
            A diferencia de los técnicos, el auxiliar en Chile se valida a través de la práctica supervisada. La normativa exige acreditar un mínimo de <strong>un año de desempeño efectivo</strong> en farmacia.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Certificado del Director Técnico:</strong> La experiencia debe estar respaldada por un documento firmado por el Químico Farmacéutico responsable de la farmacia donde trabajaste.</li>
            <li><strong>Labores Válidas:</strong> El tiempo debe haber sido dedicado a labores de bodegaje, reposición de fármacos y apoyo en la dispensación bajo supervisión.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 pt-6">3. El Examen de Competencia SEREMI</h2>
          <p>
            Con tus papeles en mano, el trámite se realiza digitalmente en el portal <strong>ASDigital (SEREMI en Línea)</strong>. Tras pagar los derechos de examen, serás citado a una evaluación técnica que cubre:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li>Conocimiento profundo del <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline font-bold">DECRETO 466</Link>.</li>
            <li>Diferenciación de tipos de recetas (Simple, Retenida, Cheque).</li>
            <li>Conceptos de Bioequivalencia y Cadena de Frío.</li>
          </ul>

          <div className="mt-16 bg-slate-900 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h2 className="text-3xl font-bold text-white mb-6 relative z-10 italic">¿Quieres asegurar tu credencial?</h2>
            <p className="text-slate-400 mb-10 text-lg relative z-10 leading-relaxed">
              No dejes tu futuro al azar. Prepárate con nuestra guía diseñada específicamente para el examen de este año.
            </p>
            <Link 
              href="/blog/examen-competencia-seremi-2025"
              className="relative z-10 inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-lg"
            >
              Estudiar Guía de Examen
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
