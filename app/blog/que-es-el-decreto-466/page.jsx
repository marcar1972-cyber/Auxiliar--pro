import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? La "Biblia" de las Farmacias en Chile',
  description: 'Explora el reglamento fundamental que rige la instalación y funcionamiento de farmacias.',
};

export default function DecretoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-slate-900 leading-tight">
          ¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer
        </h1>

        <div className="space-y-10 text-lg text-slate-700 leading-relaxed">
          <p>
            El <strong>Decreto Supremo N° 466</strong> es el reglamento sanitario fundamental que rige a todos los establecimientos farmacéuticos en Chile. Su conocimiento no solo es obligatorio por ley, sino que es la base del examen de la SEREMI.
          </p>
          
          <h2 className="text-3xl font-bold border-b pb-4 text-slate-900">Puntos Críticos de la Normativa</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Clasificación</h3>
              <p>Define las diferencias entre Farmacia, Almacén Farmacéutico, Droguería y Botiquín.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Personal</h3>
              <p>Establece los requisitos para el Director Técnico (Q.F.) y el Auxiliar de Farmacia.</p>
            </div>
          </div>

          <p>
            Uno de los capítulos más importantes trata sobre el <strong>Expendio de Medicamentos</strong>. Aquí se regula cómo se deben despachar las Recetas Simples, Retenidas y Cheques, además de la obligación legal de informar sobre la bioequivalencia.
          </p>

          <div className="mt-12 p-10 bg-slate-900 rounded-[3rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 italic">¿Estás preparando tu examen?</h3>
            <p className="text-slate-400 mb-8">Dominar el Decreto 466 es la llave para tu certificación.</p>
            <Link href="/blog/examen-competencia-seremi-2025" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all">
              Ir a Guía de Examen SEREMI
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
