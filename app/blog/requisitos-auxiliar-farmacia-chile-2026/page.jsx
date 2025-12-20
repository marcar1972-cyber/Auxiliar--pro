import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Conoce los requisitos legales, laborales y académicos para obtener tu credencial de Auxiliar de Farmacia ante la SEREMI de Salud.',
};

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Navegación */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Requisitos 2026</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
          Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
        </h1>

        <section className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6">
          <p>
            Si estás pensando en trabajar en el rubro farmacéutico, el primer paso es conocer la normativa vigente para el 2026. La obtención de la credencial oficial es una puerta de entrada real al sistema de salud chileno.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">📋 Requisitos Legales Básicos</h2>
          <p>Según el <strong>Decreto Supremo N° 466</strong>, para optar a la autorización sanitaria debes cumplir con los siguientes puntos:</p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Ser mayor de 18 años:</strong> Debes ser legalmente mayor de edad al momento de la solicitud.</li>
            <li><strong>Enseñanza Media Completa:</strong> Es obligatorio contar con la licencia de cuarto medio aprobada.</li>
            <li><strong>Experiencia Laboral:</strong> Debes acreditar un mínimo de <strong>1 año de experiencia</strong> efectiva en farmacia.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">🏥 La Acreditación de Experiencia</h2>
          <p>
            No basta con haber trabajado; esta experiencia debe estar certificada por el <strong>Químico Farmacéutico Director Técnico</strong> del establecimiento donde te desempeñaste. Las labores válidas incluyen bodegaje, reposición y dispensación bajo supervisión profesional.
          </p>
          <p>
            El trámite oficial se gestiona digitalmente en el portal <strong>SEREMI en Línea</strong> (ASDigital).
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">📚 El Examen de Competencia</h2>
          <p>
            Una vez aceptados tus documentos, deberás rendir un examen que evalúa conocimientos críticos: farmacología básica, lectura de recetas, cadena de frío y legislación.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl my-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Enlaces de Interés para tu Carrera:</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/blog/examen-competencia-seremi-2025" className="text-blue-600 font-bold hover:underline">
                  → Guía Completa para el Examen SEREMI 2025
                </Link>
              </li>
              <li>
                <Link href="/blog/cuanto-gana-auxiliar-farmacia-chile" className="text-blue-600 font-bold hover:underline">
                  → ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos 2026)
                </Link>
              </li>
              <li>
                <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold hover:underline">
                  → Diferencia real entre Auxiliar y Técnico en Farmacia
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Banner Final */}
        <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200">
          <h2 className="text-3xl font-bold text-white mb-4">¿Te sientes preparado?</h2>
          <p className="text-blue-100 mb-8 text-lg text-balance italic">
            "Para trabajar legalmente, necesitas tu credencial SEREMI. No dejes tu futuro al azar."
          </p>
          <Link 
            href="/blog/examen-competencia-seremi-2025"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Estudiar Guía de Examen
          </Link>
        </div>
      </article>
    </main>
  );
}
