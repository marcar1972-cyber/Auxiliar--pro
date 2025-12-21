import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos 2026)',
  description: 'Análisis de sueldos líquidos, comisiones y bonos.',
};

export default function SueldosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-slate-900">
          ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>El sueldo base suele ser el mínimo legal, pero se incrementa con comisiones de venta sugerida y bonos de sala.</p>

          <h2 className="text-2xl font-bold border-b pb-2">Tabla Salarial (Líquido Estimado)</h2>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b">
                <tr><th className="px-6 py-4 font-bold">Cadena</th><th className="px-6 py-4 font-bold text-green-700">Rango Líquido</th></tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="px-6 py-4">Cruz Verde / Salcobrand</td><td className="px-6 py-4 font-bold">$650.000 - $880.000</td></tr>
                <tr><td className="px-6 py-4">Farmacias Ahumada</td><td className="px-6 py-4 font-bold">$610.000 - $790.000</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8">
            Revisa los 
            <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 underline font-bold mx-1">
              REQUISITOS LEGALES
            </Link> 
            para profesionalizar tu perfil y acceder a mejores rentas.
          </p>
        </div>
      </article>
    </main>
  );
}
