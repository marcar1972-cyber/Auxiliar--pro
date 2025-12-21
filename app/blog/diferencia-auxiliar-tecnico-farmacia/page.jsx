import Link from 'next/link';

export const metadata = {
  title: 'Diferencia entre Auxiliar y Técnico en Farmacia en Chile',
  description: 'Comparamos la formación, el sueldo y la legalidad de ambos cargos.',
};

export default function DiferenciaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          Diferencia entre Auxiliar y Técnico en Farmacia en Chile
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>Aunque ambos trabajan en la farmacia, sus caminos legales y académicos son distintos.</p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">El Auxiliar: La Vía Práctica</h2>
          <p>Se habilita mediante la práctica (1 año) y un examen ante la SEREMI. No requiere título de educación superior.</p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">El Técnico (TNS): La Vía Académica</h2>
          <p>Estudia 2.5 años en un CFT o IP. Su título lo habilita automáticamente en la Superintendencia de Salud.</p>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Diferencias de Sueldo</h3>
            <p>En el retail, las comisiones igualan los sueldos líquidos. En el sector público, el Técnico suele tener un grado salarial mayor por ley.</p>
          </div>

          {/* BOTONES CORREGIDOS */}
          <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">¿Ya decidiste tu camino?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
                Ver Requisitos Legales
              </Link>
              <Link href="/blog/examen-competencia-seremi-2025" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Guía del Examen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
