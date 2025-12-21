import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (2026)',
};

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 font-bold">
          <Link href="/blog" className="text-blue-600">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl font-extrabold mb-10">Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)</h1>

        <div className="space-y-8 text-lg text-slate-700">
          <h2 className="text-2xl font-bold border-b pb-2">1. Educación</h2>
          <p>Licencia de enseñanza media completa (4° medio).</p>

          <h2 className="text-2xl font-bold border-b pb-2">2. Práctica</h2>
          <p>Acreditar 1 año de experiencia en farmacia certificada por un Químico Farmacéutico.</p>

          <h2 className="text-2xl font-bold border-b pb-2">3. Examen</h2>
          <p>Aprobar la evaluación técnica sobre el <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline font-bold">Decreto 466</Link>.</p>
        </div>
      </article>
    </main>
  );
}
