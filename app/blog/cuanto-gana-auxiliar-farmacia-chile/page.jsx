import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones en Cruz Verde, Salcobrand y Ahumada según datos de mercado.',
};

export default function SueldosChilePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Sueldos 2026</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Guía detallada sobre la realidad salarial, el sistema de comisiones en retail y las diferencias con el sector clínico para este año.
          </p>
        </header>

        {/* Disclaimer de Transparencia */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl">
          <div className="flex">
            <span className="text-blue-500 text-2xl mr-4">ℹ️</span>
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Nota de Transparencia:</strong> Los montos presentados son estimaciones referenciales basadas en la recopilación de ofertas laborales en portales como LinkedIn, Laborum e Indeed, además de testimonios de trabajadores. En Chile, el sueldo final depende del contrato individual, ubicación geográfica y cumplimiento de metas comerciales.
            </p>
          </div>
        </div>

        <div className="prose prose-slate prose-lg max-w-none space-y-8">
          <p>
            Entrar al mundo farmacéutico en Chile genera una duda inmediata: <strong>¿Es rentable ser auxiliar de farmacia?</strong> A diferencia de otras profesiones técnicas, aquí el sueldo líquido a fin de mes es el resultado de una estructura de incentivos y bonos que debes conocer para negociar tu contrato.
          </p>

          <h2 className="text-2xl font-bold border-b pb-2">¿Cómo se construye el sueldo de un auxiliar?</h2>
          <p>
            Un error común es fijarse solo en el "sueldo mínimo". En la práctica, un auxiliar en retail (farmacias de cadena) recibe una liquidación compuesta por varios haberes:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal vigente ($500.000+ bruto).</li>
            <li><strong>Comisión por Venta Sugerida (V.S.):</strong> Incentivo variable por la venta de productos específicos. Es el componente que más influye en el total final.</li>
            <li><strong>Bono de Cumplimiento de Sala:</strong> Gratificación que se activa si la sucursal completa sus metas mensuales de ventas.</li>
            <li><strong>Asignaciones Legales:</strong> Montos por movilización y colación (no imponibles).</li>
          </ul>

          <h2 className="text-2xl font-bold border-b pb-2 mt-12">Comparativa Salarial por Cadenas (Proyección 2026)</h2>
          <p>Según el análisis de mercado para jornadas de 44/45 horas, estos son los rangos estimados de dinero "en bolsillo":</p>

          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-900 border-b">Cadena / Empresa</th>
                  <th className="px-6 py-4 font-bold text-slate-900 border-b">Rango Líquido Estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Cruz Verde</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">$650.000 - $880.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Salcobrand</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">$630.000 - $820.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Farmacias Ahumada</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">$610.000 - $790.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Independientes / Dr. Simi</td>
                  <td className="px-6 py-4 font-bold text-emerald-600">$550.000 - $700.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold border-b pb-2 mt-12">Factores Críticos que aumentan tus ingresos</h2>
          <p>No todos los auxiliares ganan lo mismo. Existen tres "aceleradores" de sueldo que puedes aprovechar:</p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Asignación de Zona:</strong> Trabajar en zonas extremas (como Calama o Punta Arenas) incluye bonos territoriales que pueden subir el total un 20% o más.</li>
            <li><strong>Recargos por Nocturnidad:</strong> Las farmacias 24 horas pagan recargos por ley en turnos de noche, lo cual incrementa el valor de la hora trabajada.</li>
            <li><strong>Especialización y Certificación:</strong> Un conocimiento sólido permite cerrar ventas técnicas con facilidad. Revisa los <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link> para profesionalizar tu perfil.</li>
          </ul>

          <h2 className="text-2xl font-bold border-b pb-2 mt-12">Retail vs. Sector Clínico (Hospitales)</h2>
          <p>
            Muchos profesionales se debaten entre la farmacia comercial y la asistencial. Mientras que el Retail ofrece un techo más alto por comisiones, el Sector Clínico ofrece horarios más estables y menos estrés de venta directa. Entender la <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link> es clave para elegir tu camino.
          </p>

          {/* Sección FAQ */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl my-16 shadow-xl">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 p-2 rounded-lg mr-4 text-xl">❓</span> Preguntas Frecuentes sobre Pagos
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-blue-400 font-bold text-lg mb-2 italic underline underline-offset-4">¿Se paga adicional por el "Día del Auxiliar"?</h3>
                <p className="text-slate-300">Sí, la mayoría de los sindicatos negocian bonos especiales que promedian los $35.000 líquidos, pagados usualmente en diciembre.</p>
              </div>
              <div>
                <h3 className="text-blue-400 font-bold text-lg mb-2 italic underline underline-offset-4">¿Cuál es el valor hora para un Part-Time?</h3>
                <p className="text-slate-300">Para contratos de 20 horas (fines de semana), el valor líquido por jornada de 10 horas ronda los $30.000 a $38.000 según la cadena.</p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[3rem] text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">¿Quieres asegurar un mejor sueldo?</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              El primer paso es aprobar tu examen ante la autoridad sanitaria para obtener tu carnet oficial. Sin él, no puedes optar a los cargos con comisiones más altas en las grandes cadenas.
            </p>
            <Link 
              href="/blog/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Prepárate con la GUÍA DEL EXAMEN SEREMI 2025
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}
