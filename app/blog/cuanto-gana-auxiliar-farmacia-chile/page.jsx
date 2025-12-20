import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones en Cruz Verde, Salcobrand y Ahumada.',
};

export default function SueldosChilePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 transition-colors font-bold">← Volver al Blog</Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl">
          <p className="text-sm text-blue-800 italic">
            <strong>AVISO:</strong> Información basada en investigación de mercado independiente. El sueldo final depende del contrato y cumplimiento de metas.
          </p>
        </div>

        <section className="space-y-8 text-lg text-slate-700">
          <p>
            Entrar al mundo farmacéutico en Chile genera una duda inmediata: ¿Es rentable ser auxiliar? El sueldo líquido es el resultado de una estructura de incentivos y bonos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">Estructura del Sueldo</h2>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Sueldo Base:</strong> Ajustado al ingreso mínimo legal.</li>
            <li><strong>Venta Sugerida (V.S.):</strong> Incentivo variable por productos específicos.</li>
            <li><strong>Bonos:</strong> Gratificación por cumplimiento de metas de sala.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 pt-6 border-b pb-2">Comparativa Salarial (Líquido 2026)</h2>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-900 uppercase text-sm">Cadena</th>
                  <th className="px-6 py-4 font-bold text-slate-900 uppercase text-sm">Líquido Estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="px-6 py-4">Cruz Verde</td><td className="px-6 py-4 font-bold text-green-700">$650.000 - $880.000</td></tr>
                <tr><td className="px-6 py-4">Salcobrand</td><td className="px-6 py-4 font-bold text-green-700">$630.000 - $820.000</td></tr>
                <tr><td className="px-6 py-4">Farmacias Ahumada</td><td className="px-6 py-4 font-bold text-green-700">$610.000 - $790.000</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-6 border-b pb-2">Factores que aumentan tus ingresos</h2>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Asignación de Zona:</strong> Bonos territoriales por trabajar en zonas extremas.</li>
            <li><strong>Nocturnidad:</strong> Recargos legales por turnos de noche.</li>
            <li><strong>Certificación:</strong> Clave para acceder a comisiones más altas.</li>
          </ul>

          <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">¿Quieres acceder a estos sueldos?</h2>
            <p className="text-blue-100 mb-8">El primer paso es aprobar tu examen ante la SEREMI para obtener tu carnet oficial.</p>
            <Link href="/blog/examen-competencia-seremi-2025" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
              Ver Guía del Examen SEREMI
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
