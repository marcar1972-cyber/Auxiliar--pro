import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Guía detallada sobre sueldos líquidos, comisiones en retail y el sector clínico.',
};

export default function SueldosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            El sueldo de un auxiliar en Chile es dinámico. No se limita al sueldo base, sino que se potencia significativamente a través de incentivos comerciales. Para este 2026, las proyecciones muestran una estabilidad en los bonos de cumplimiento.
          </p>

          <h2 className="text-2xl font-bold border-b pb-2 mt-12">¿Cómo se construye el sueldo?</h2>
          <p>La remuneración mensual se compone de cuatro pilares:</p>
          <ul className="list-disc pl-8 space-y-3 font-medium">
            <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal ($500.000+ bruto).</li>
            <li><strong>Comisión V.S. (Venta Sugerida):</strong> Incentivo por productos específicos.</li>
            <li><strong>Bono de Gestión:</strong> Premio por inventario y metas de sala.</li>
            <li><strong>Asignación de Zona:</strong> Monto extra por trabajar en regiones extremas.</li>
          </ul>

          <h2 className="text-3xl font-bold border-b pb-4 mt-12 text-slate-900">Tabla Salarial (Líquido Estimado)</h2>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-3xl shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b">
                <tr>
                  <th className="px-8 py-5 font-bold text-slate-900">Cadena / Sector</th>
                  <th className="px-8 py-5 font-bold text-emerald-700 text-center">Rango Líquido</th>
                </tr>
              </thead>
              <tbody className="divide-y text-slate-600">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-medium italic">Cruz Verde / Salcobrand</td>
                  <td className="px-8 py-5 text-center font-bold text-slate-900">$650.000 - $880.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-medium italic">Farmacias Ahumada</td>
                  <td className="px-8 py-5 text-center font-bold text-slate-900">$610.000 - $790.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-8 py-5 font-medium italic">Independientes / Simi</td>
                  <td className="px-8 py-5 text-center font-bold text-slate-900">$550.000 - $700.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 mt-12">
            <p className="text-emerald-900 italic font-medium">
              "Para acceder a las mejores rentas, es vital contar con tu carnet de la SEREMI vigente. Sin él, muchas comisiones de venta de productos controlados no pueden ser asignadas."
            </p>
          </div>

          <p className="mt-12 text-center">
            Revisa los 
            <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 underline font-bold mx-2 hover:text-blue-800">
              REQUISITOS LEGALES
            </Link> 
            para profesionalizar tu perfil hoy mismo.
          </p>
        </div>
      </article>
    </main>
  );
}
