import Link from 'next/link';

export const metadata = {
  title: 'Diferencia entre Auxiliar y Técnico en Farmacia en Chile',
  description: 'Comparamos formación, sueldo y legalidad de ambos cargos.',
};

export default function DiferenciaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Aunque ambos visten de la misma forma en el mostrador, sus responsabilidades ante la ley y sus sueldos base son diferentes según la normativa vigente en Chile.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 border-b pb-2 mt-12">El Auxiliar: La Vía de la Experiencia</h2>
          <p>
            El auxiliar no estudia en un instituto o universidad. Se forma "haciendo". Su habilitación depende de la acreditación de su práctica y la aprobación de un examen técnico en la SEREMI.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 border-b pb-2 mt-12">El Técnico (TNS): La Vía Académica</h2>
          <p>
            El Técnico de Nivel Superior (TNS) estudia formalmente por un periodo de 2 a 3 años en un Centro de Formación Técnica (CFT) o Instituto Profesional.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Habilitación:</strong> Su título lo habilita automáticamente; no rinden examen en la SEREMI.</li>
            <li><strong>Registro:</strong> Se inscriben en la Superintendencia de Salud.</li>
          </ul>

          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-12 shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Diferencia de Remuneración</h3>
            <p className="mb-6">
              En las grandes cadenas de farmacias, ambos pueden ganar sumas similares gracias a las comisiones por ventas. Sin embargo, en el <strong>Sector Público</strong> (Hospitales y CESFAM), el Técnico tiene acceso a grados más altos y una carrera funcionaria que el auxiliar no posee.
            </p>
            <Link 
              href="/blog/cuanto-gana-auxiliar-farmacia-chile"
              className="inline-block text-blue-600 font-bold border-b-2 border-blue-600 hover:text-blue-800 transition-all"
            >
              Ver Detalle de Sueldos 2026 →
            </Link>
          </div>

          <div className="mt-16 bg-blue-600 p-12 rounded-[3rem] text-center shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-8 italic">¿Ya decidiste tu camino profesional?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
                Ver Requisitos Legales
              </Link>
              <Link href="/blog/examen-competencia-seremi-2025" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Guía del Examen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
