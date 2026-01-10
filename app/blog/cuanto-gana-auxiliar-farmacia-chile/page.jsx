import Link from 'next/link';

// 🟢 1. METADATA OPTIMIZADA (Solución al Reporte SEO)
export const metadata = {
  // Base del dominio para esta página
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Análisis referencial de la estructura salarial, comisiones por venta sugerida y bonos en farmacias chilenas. Conoce cuánto gana un auxiliar acreditado.',
  
  // Keywords específicas
  keywords: ["sueldo auxiliar farmacia", "cuanto gana auxiliar farmacia", "bonos farmacia chile", "renta liquida farmacia"],
  
  authors: [{ name: "AuxiliarPro" }],
  
  // Canonical individual
  alternates: {
    canonical: './', 
  },
};

export default function SueldosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 font-bold">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-8">
          {/* H1 Coincidente con Title (Crucial para SEO) */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
        </header>

        {/* Disclaimer de Transparencia */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-2xl shadow-sm">
          <h3 className="text-amber-900 font-bold mb-2 flex items-center">
            ⚠️ Descargo de Responsabilidad (Disclaimer)
          </h3>
          <p className="text-amber-800 text-sm leading-relaxed">
            La información presentada en esta guía ha sido recopilada de diversas fuentes, incluyendo ofertas laborales públicas, convenios colectivos y testimonios de trabajadores del sector para el año 2026. Los montos son <strong>estrictamente referenciales</strong> y pueden variar significativamente según el contrato individual, la ubicación geográfica del local, el cumplimiento de metas de venta y las políticas internas de cada cadena. Este sitio no garantiza la exactitud de los montos finales a recibir.
          </p>
        </div>

        <div className="space-y-12 text-lg leading-relaxed text-slate-700">
          <section>
            <p>
              Hola colega. Si estás preparando tu examen de competencia para cualquier fecha de este 2026, seguramente te interesa saber cómo se traduce ese esfuerzo en tu liquidación mensual. En el sistema chileno, el sueldo de un auxiliar de farmacia es uno de los más dinámicos del retail, ya que combina una base estable con incentivos por gestión directa en el mostrador.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Composición de la Liquidación de Sueldo</h2>
          <p>
            Para entender cuánto vas a ganar, no debes mirar solo el sueldo base. La estructura salarial en Chile se divide principalmente en cuatro pilares:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Sueldo Base:</strong> Es el monto fijo pactado, que suele estar alineado con el ingreso mínimo mensual legal de 2026.</li>
            <li><strong>Comisión V.S. (Venta Sugerida):</strong> Son incentivos variables por la venta de productos específicos o marcas propias de la farmacia. Este ítem suele representar una parte importante del sueldo líquido.</li>
            <li><strong>Bonos de Cumplimiento de Sala:</strong> Un premio grupal que se activa cuando todo el equipo del local alcanza las metas de venta mensuales.</li>
            <li><strong>Asignaciones No Imponibles:</strong> Montos destinados a colación y movilización que no sufren descuentos legales.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Rango Salarial Estimado (Sueldo Líquido 2026)</h2>
          <p>
            Basados en las tendencias del mercado para este año, estos son los rangos de sueldo "en bolsillo" estimados para una jornada de 44 horas semanales:
          </p>

          <div className="overflow-x-auto my-8 border border-slate-200 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-5 rounded-tl-2xl">Cadena o Sector</th>
                  <th className="p-5 rounded-tr-2xl text-center">Líquido Mensual Estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800 italic">Cruz Verde / Salcobrand</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$650.000 - $880.000+</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800 italic">Farmacias Ahumada</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$620.000 - $810.000+</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800 italic">Independientes / Simi</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$550.000 - $720.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800 italic">Sector Público (Hospitales)</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$580.000 - $750.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Bonos Especiales y Asignación de Zona</h2>
          <p>
            No olvides que tu ubicación geográfica puede cambiar radicalmente estos números. En regiones extremas (Norte o Sur), existen las <strong>Asignaciones de Zona</strong>, bonos territoriales que compensan el costo de vida y que pueden sumar un 20% o más al sueldo final.
          </p>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 text-blue-900">
            <strong>Consejo Técnico:</strong> La clave para alcanzar los tramos superiores de estos rangos es dominar la dispensación de productos controlados y bioequivalentes. Estar acreditado ante la SEREMI te permite negociar mejores contratos y acceder a bonos de responsabilidad de caja.
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">El Valor de tu Credencial SEREMI</h2>
          <p>
            ¿Por qué insistimos tanto en preparar el examen durante este 2026? Porque ser un auxiliar acreditado te otorga beneficios legales que un trabajador en práctica no tiene:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li>Acceso a contratos indefinidos con tramos de comisiones más altos.</li>
            <li>Seguros complementarios de salud provistos por la empresa.</li>
            <li>Bonos por turnos nocturnos en farmacias de urgencia 24 horas.</li>
          </ul>

          <div className="mt-16 bg-slate-900 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-3xl font-bold text-white mb-6 italic">¿Quieres asegurar tu futuro este 2026?</h3>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              El conocimiento es tu mejor activo para negociar un mejor sueldo. Prepárate para tu examen de competencia hoy mismo.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/blog/examen-competencia-seremi-2025" 
                className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-lg"
              >
                Estudiar Guía del Examen
              </Link>
              <Link 
                href="/blog/requisitos-auxiliar-farmacia-chile-2026" 
                className="inline-block bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all shadow-lg"
              >
                Requisitos Legales
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
