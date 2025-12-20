import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones en Cruz Verde, Salcobrand y Ahumada según datos de mercado.',
};

export default function SueldosChilePage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Navegación */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Sueldos 2026</span>
        </nav>

        <header className="mb-12">
          <p className="text-emerald-600 font-bold mb-2 uppercase tracking-widest text-sm">Mercado Laboral</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
        </header>

        {/* Disclaimer de Transparencia */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-10 rounded-r-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-amber-500 text-xl">⚠️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Nota de Transparencia:</strong> Los montos presentados son estimaciones referenciales basadas en la recopilación de ofertas laborales en portales como LinkedIn, Laborum e Indeed, además de testimonios de trabajadores. No existe una fuente fidedigna única; el sueldo final depende del contrato individual, ubicación y cumplimiento de metas.
              </p>
            </div>
          </div>
        </div>

        <section className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-8">
          <p>
            Entrar al mundo farmacéutico en Chile genera una duda inmediata: ¿Es rentable ser auxiliar de farmacia? A diferencia de otras profesiones técnicas, aquí el sueldo líquido a fin de mes es el resultado de una estructura de incentivos y bonos que debes conocer para negociar tu contrato.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">¿Cómo se construye el sueldo de un auxiliar?</h2>
          <p>
            Un error común es fijarse solo en el "sueldo mínimo". En la práctica, un auxiliar en retail (farmacias de cadena) recibe una liquidación compuesta por varios haberes:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Sueldo Base:</strong> Generalmente ajustado al ingreso mínimo legal vigente ($500.000+ bruto).</li>
            <li><strong>Comisión por Venta Sugerida (V.S.):</strong> Incentivo variable por la venta de productos específicos o marcas propias. Es el componente que más influye en el total final.</li>
            <li><strong>Bono de Cumplimiento de Sala:</strong> Una gratificación que se activa si la sucursal completa sus metas mensuales de ventas totales.</li>
            <li><strong>Asignaciones Legales:</strong> Montos por movilización y colación (no imponibles).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">Comparativa Salarial por Cadenas (Proyección 2026)</h2>
          <p>
            Según el análisis de mercado para jornadas de 44/45 horas, estos son los rangos estimados de dinero "en bolsillo":
          </p>

          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-900">Cadena / Empresa</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Rango Líquido Estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Cruz Verde</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">$650.000 - $880.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Salcobrand</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">$630.000 - $820.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Farmacias Ahumada</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">$610.000 - $790.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Independientes / Simi</td>
                  <td className="px-6 py-4 font-bold text-emerald-700">$550.000 - $700.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">Factores Críticos que aumentan tus ingresos</h2>
          <p>No todos los auxiliares ganan lo mismo. Existen "aceleradores" que puedes aprovechar:</p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas (como Calama o Punta Arenas) incluye bonos territoriales que pueden subir el total un 20% o más.</li>
            <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos por ley en turnos de noche, incrementando el valor de la hora.</li>
            <li><strong>Certificación:</strong> Un perfil profesionalizado permite cerrar ventas técnicas con mayor facilidad. Revisa los <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link> para asegurar tu carnet.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">Retail vs. Sector Clínico</h2>
          <p>
            Mientras que el Retail ofrece un techo más alto por comisiones, el Sector Clínico (Hospitales y Clínicas) ofrece horarios más estables y menos estrés de venta directa. Entender la <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link> es clave para elegir el camino correcto.
          </p>

          <div className="bg-slate-900 p-8 rounded-3xl my-12 text-white">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="mr-2">💡</span> Preguntas Frecuentes sobre Pagos
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-blue-400 mb-1 italic text-sm uppercase tracking-wider">¿Se paga adicional por el "Día del Auxiliar"?</h3>
                <p className="text-slate-300 text-sm">Sí, generalmente se negocia un bono especial único en diciembre que promedia los $35.000 líquidos.</p>
              </div>
              <div>
                <h3 className="font-bold text-blue-400 mb-1 italic text-sm uppercase tracking-wider">¿Cuál es el valor hora para un Part-Time?</h3>
                <p className="text-slate-300 text-sm">Para contratos de 20 horas, el valor líquido por jornada de 10 horas ronda los $30.000 a $38.000 según la cadena.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="mt-16 bg-blue-600 p-12 rounded-[3rem] text-center shadow-2xl shadow-blue-200">
          <h2 className="text-3xl font-bold text-white mb-4">¿Quieres acceder a los mejores sueldos?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial. Sin él, no puedes optar a los cargos con comisiones más altas.
          </p>
          <Link 
            href="/blog/examen-competencia-seremi-2025"
            className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105"
          >
            Prepárate con nuestra GUÍA DEL EXAMEN SEREMI 2025
          </Link>
        </div>
      </article>
    </main>
  );
}
