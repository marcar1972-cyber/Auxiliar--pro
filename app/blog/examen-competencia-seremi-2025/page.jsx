import Link from 'next/link';

export default function ExamenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl font-extrabold mb-8">Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?</h1>

        <div className="space-y-8 text-lg text-slate-700">
          <p>El examen evalúa tu capacidad para garantizar la seguridad del paciente basándose en:</p>
          <ul className="list-disc pl-8 space-y-3 font-bold">
            <li>Legislación (Decreto 466)</li>
            <li>Cadena de Frío (2°C a 8°C)</li>
            <li>Cálculos de dosis</li>
          </ul>

          <div className="mt-12 p-10 bg-blue-600 rounded-3xl text-center">
            <Link href="/quiz" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold">
              Ir al Simulador de Examen
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
