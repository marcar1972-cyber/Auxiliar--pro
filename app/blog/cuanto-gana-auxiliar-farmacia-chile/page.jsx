import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Guía detallada sobre la realidad salarial, comisiones en retail y el sector clínico para el 2026.',
};

export default function SueldosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl shadow-sm">
          <p className="text-sm text-blue-800 leading-relaxed italic">
            <strong>AVISO DE TRANSPARENCIA:</strong> Esta información es referencial basada en el análisis de ofertas laborales vigentes y testimonios de trabajadores del rubro. El sueldo líquido final depende estrictamente del contrato individual, la zona geográfica y el cumplimiento de metas comerciales.
          </p>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Trabajar en farmacia en Chile ofrece una estructura salarial única. A diferencia de otros empleos técnicos, el sueldo de un auxiliar no es estático; se compone de una base fija y una serie de incentivos variables que pueden aumentar significativamente el monto final a pagar.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">¿Cómo se construye tu liquidación?</h2>
          <p>Para entender tu sueldo, debes conocer los componentes que aparecen en tu liquidación mensual:</p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Sueldo Base:</strong> Generalmente ajustado al ingreso mínimo legal vigente ($500.000+ bruto).</li>
            <li><strong>Comisión V.S. (Venta Sugerida):</strong> Este es el motor del sueldo. Son incentivos variables por la venta de productos específicos o marcas propias de la cadena.</li>
            <li><strong>Bono de Cumplimiento de Sala:</strong> Una gratificación que se activa si la farmacia completa sus metas de ventas globales.</li>
            <li><strong>Asignaciones Legales:</strong> Montos por movilización y colación, que no son imponibles.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 pt-6">Comparativa Salarial por Cadenas (Líquido Estimado)</h2>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-900">Cadena / Sector</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Rango Líquido Estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium italic">Cruz Verde / Salcobrand</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">$650.000 - $880.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium italic">Farmacias Ahumada</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">$610.000 - $790.000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium italic">Independientes / Sector Clínico</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">$550.000 - $750.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-6">Aceleradores de Sueldo: ¿Cómo ganar más?</h2>
          <p>No todos los auxiliares ganan lo mismo. Existen tres factores que pueden elevar tu renta por sobre el promedio del mercado:</p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas (Norte o Sur profundo) incluye bonos territoriales que pueden subir el total un 20% o más.</li>
            <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos legales por los turnos de noche, incrementando el valor de la hora.</li>
            <li><strong>Certificación SEREMI:</strong> Contar con tu credencial oficial es la llave para acceder a contratos indefinidos con mejores comisiones. Revisa los <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link>.</li>
          </ul>

          <div className="mt-16 bg-blue-600 p-12 rounded-[3rem] text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 italic">¿Quieres acceder a los mejores sueldos?</h2>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed">
              El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial. Sin él, no puedes optar a los cargos con comisiones más altas.
            </p>
            <Link 
              href="/blog/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Preparar mi Examen SEREMI 2025
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
