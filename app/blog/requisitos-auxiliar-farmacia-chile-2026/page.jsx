import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Guía completa sobre los requisitos legales, académicos y laborales para obtener tu credencial ante la SEREMI.',
};

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 font-bold">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "La acreditación de la SEREMI es el único camino legal para trabajar como auxiliar. Aquí te explicamos cómo conseguirla paso a paso."
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Trabajar en una farmacia en Chile no es solo un empleo, es una responsabilidad sanitaria regulada por el Estado. Para este 2026, los requisitos se han vuelto más estrictos en cuanto a la verificación de la práctica laboral y los conocimientos técnicos.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 border-b pb-2 mt-12">1. Formación Académica</h2>
          <p>
            El requisito base es haber completado la <strong>Enseñanza Media</strong>. Debes contar con tu licencia de 4° medio aprobada y reconocida por el Ministerio de Educación. Sin este documento, la plataforma de la SEREMI rechazará tu solicitud automáticamente.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 border-b pb-2 mt-12">2. Experiencia Práctica Certificada</h2>
          <p>
            Según el <strong>Decreto 466</strong>, la formación del auxiliar es eminentemente práctica. Debes demostrar que has trabajado al menos <strong>1 año (12 meses)</strong> en una farmacia legalmente constituida.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Certificado del Director Técnico:</strong> Necesitas un documento oficial firmado por el Químico Farmacéutico que acredite tus funciones.</li>
            <li><strong>Funciones válidas:</strong> El tiempo debe haber sido dedicado a labores de bodega, reposición o apoyo en ventas bajo supervisión técnica directa.</li>
            <li><strong>Registro de Asistencia:</strong> En algunos casos, se pueden solicitar registros de asistencia o contratos para validar el año de práctica.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b pb-2 mt-12">3. El Examen de Competencia</h2>
          <p>
            Una vez que la SEREMI acepta tus papeles a través del portal ASDigital, te citarán a un examen presencial o digital. Esta evaluación es crítica y abarca:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li>Conocimiento profundo del <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline font-bold">Decreto 466</Link>.</li>
            <li>Manejo de recetas controladas (Psicotrópicos y Estupefacientes).</li>
            <li>Cálculo de dosis básicas y cadena de frío (refrigeración de medicamentos).</li>
          </ul>

          <div className="mt-16 bg-blue-600 p-12 rounded-[3rem] text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">¿Preparado para el desafío?</h3>
            <p className="text-blue-100 mb-10 text-lg">
              No dejes tu futuro al azar. Prepárate con nuestra guía diseñada específicamente para el examen de este año.
            </p>
            <Link 
              href="/blog/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg"
            >
              Ver Guía de Examen SEREMI 2025
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
