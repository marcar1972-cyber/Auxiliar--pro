import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos 2026)',
  description: 'Análisis detallado de sueldos líquidos, comisiones y bonos en retail y sector clínico.',
};

export default function SueldosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <p className="text-sm text-blue-800 leading-relaxed italic">
              <strong>[AVISO DE TRANSPARENCIA]</strong>: Esta información es referencial basada en ofertas laborales y testimonios de trabajadores. El sueldo líquido final depende de contratos individuales, ubicación y cumplimiento de metas.
            </p>
          </div>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            El sueldo de un auxiliar en Chile es dinámico y se potencia significativamente a través de incentivos comerciales. No se limita al sueldo base, sino que incluye variables críticas que debes conocer.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">Estructura Salarial</h2>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal vigente ($500.000+ bruto).</li>
            <li><strong>Comisión V.S. (Venta Sugerida):</strong> Es el motor del sueldo. Depende de las metas de productos específicos o marcas propias.</li>
            <li><strong>Bonos de Gestión:</strong> Premios por inventario, cumplimiento de metas de sala y atención al cliente.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">Tabla Comparativa (Líquido Estimado)</h2>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b">
                <tr>
                  <th className="px-6 py-4 font-bold">Cadena / Sector</th>
                  <th className="px-6 py-4 font-bold text-green-700 text-center">Rango Líquido</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium">Cruz Verde / Salcobrand</td>
                  <td className="px-6 py-4 text-center font-bold">$650.000 - $880.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium">Farmacias Ahumada</td>
                  <td className="px-6 py-4 text-center font-bold">$610.000 - $790.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium">Sector Clínico / Hospitalario</td>
                  <td className="px-6 py-4 text-center font-bold">$580.000 - $750.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">Factores que Aumentan tu Renta</h2>
          <p>Existen factores que pueden elevar tu renta por sobre el promedio:</p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Asignación de Zona:</strong> Bonos adicionales por trabajar en regiones extremas (Norte o Sur).</li>
            <li><strong>Nocturnidad:</strong> Mayor valor hora en farmacias de turno 24 horas.</li>
            <li><strong>Certificación:</strong> Clave para acceder a comisiones más altas. Revisa los <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS AQUÍ</Link>.</li>
          </ul>
        </div>
      </article>
    </main>
  );
}
