import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? La "Biblia" de las Farmacias',
  description: 'Reglamento fundamental de farmacias en Chile.',
};

export default function DecretoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl font-extrabold mb-8 text-slate-900">
          ¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer
        </h1>

        <div className="space-y-8 text-lg text-slate-700">
          <p>Es el reglamento sanitario que rige a todos los establecimientos farmacéuticos en Chile.</p>
          
          <h2 className="text-2xl font-bold border-b pb-2">Puntos Clave</h2>
          <ul className="list-disc pl-8 space-y-3">
            <li>Clasificación de recintos (Farmacias, Almacenes, etc.).</li>
            <li>Requisitos para el personal auxiliar.</li>
            <li>Normas de despacho y tipos de recetas.</li>
          </ul>

          <div className="mt-12 bg-slate-900 p-10 rounded-3xl text-center">
            <Link href="/blog/examen-competencia-seremi-2025" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold">
              Ir a Guía de Examen SEREMI
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
