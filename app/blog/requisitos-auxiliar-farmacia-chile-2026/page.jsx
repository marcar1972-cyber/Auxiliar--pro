import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Guía completa sobre los requisitos legales, académicos y laborales para obtener tu credencial ante la SEREMI.',
};

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
          </h1>
          <p className="text-lg text-slate-500 italic">
            "La acreditación de la SEREMI es el único camino legal para trabajar como auxiliar."
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Trabajar en una farmacia en Chile no es solo un empleo, es una responsabilidad sanitaria. Para este 2026, los requisitos se han vuelto más estrictos en cuanto a la verificación de la práctica laboral.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">1. Requisitos Académicos Básicos</h2>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Enseñanza Media:</strong> Debes tener tu licencia de 4° medio aprobada y reconocida por el Ministerio de Educación.</li>
            <li><strong>Cédula de Identidad:</strong> Contar con RUT chileno vigente (o permanencia definitiva en caso de extranjeros).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">2. Experiencia Práctica (1 Año Obligatorio)</h2>
          <p>
            Este es el punto donde más postulantes fallan. Según el <strong>Decreto 466</strong>, debes demostrar que has trabajado al menos 1 año en una farmacia.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Certificado del Q.F.:</strong> Necesitas un documento firmado por el Químico Farmacéutico Director Técnico que acredite tus funciones.</li>
            <li><strong>Funciones válidas:</strong> El tiempo debe ser en labores de bodega, reposición o apoyo en ventas bajo supervisión técnica.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">3. El Examen de Competencia</h2>
          <p>
            Una vez que la SEREMI acepta tus papeles, te citarán a un examen. Este examen evalúa:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li>Conocimiento del <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline font-bold">Decreto 466</Link>.</li>
            <li>Manejo de recetas controladas (Psicotrópicos).</li>
            <li>Cálculo de dosis y cadena de frío.</li>
          </ul>

          <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">¿Preparado para el desafío?</h3>
            <Link 
              href="/blog/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg"
            >
              Ver Guía de Examen SEREMI 2025
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
