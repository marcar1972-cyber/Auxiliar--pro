import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones en Cruz Verde, Salcobrand y Ahumada.',
};

export default function SueldosChilePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Navegación Superior */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 transition-colors font-bold flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-10 border-b pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
          <div className="flex items-center text-slate-500 space-x-4">
            <span>Publicado: 20 Dic 2025</span>
            <span>•</span>
            <span>Lectura: 8 min</span>
          </div>
        </header>

        {/* Cuadro de Transparencia */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12 rounded-r-xl shadow-sm">
          <p className="text-sm text-blue-800 leading-relaxed italic">
            <strong>AVISO DE TRANSPARENCIA:</strong> Esta información es el resultado de una investigación independiente basada en ofertas laborales vigentes y testimonios de trabajadores. En Chile, el sueldo final depende del contrato individual, ubicación geográfica y cumplimiento de metas comerciales.
          </p>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Entrar al mundo farmacéutico en Chile genera una duda inmediata: <strong>¿Es rentable ser auxiliar de farmacia?</strong> A diferencia de otras profesiones, el sueldo líquido es el resultado de una estructura de incentivos y bonos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900">1. Estructura de la Liquidación de Sueldo</h2>
          <p>
            Un auxiliar en las grandes cadenas (Cruz Verde, Salcobrand, Ahumada) no recibe solo un sueldo base. Su remuneración se compone de:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal ($500.000+ bruto).</li>
            <li><strong>Venta Sugerida (Comisiones):</strong> Incentivo variable por productos específicos. Es lo que más influye en el total.</li>
            <li><strong>Bono de Cumplimiento:</strong> Se activa si la farmacia llega a su meta mensual.</li>
            <li><strong>Asignaciones:</strong> Movilización y colación (no imponibles).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 pt-6">2. Comparativa Salarial (Líquido Estimado 2026)</h2>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 font-bold border-b">Cadena</th>
                  <th className="px-6 py-4 font-bold border-b">Rango Líquido Estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="px-6 py-4">Cruz Verde</td><td className="px-6 py-4 font-bold text-blue-600">$650.000 - $880.000</td></tr>
                <tr><td className="px-6 py-4">Salcobrand</td><td className="px-6 py-4 font-bold text-blue-600">$630.000 - $820.000</td></tr>
                <tr><td className="px-6 py-4">Ahumada</td><td className="px-6 py-4 font-bold text-blue-600">$610.000 - $790.000</td></tr>
                <tr><td className="px-6 py-4">Independientes / Simi</td><td className="px-6 py-4 font-bold text-blue-600">$550.000 - $700.000</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 pt-6">3. Factores que aumentan tu sueldo</h2>
          <p>Existen aceleradores de sueldo que puedes aprovechar:</p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Asignación de Zona:</strong> En ciudades extremas (Punta Arenas o Calama), el sueldo puede subir un 20% adicional.</li>
            <li><strong>Turnos de Noche:</strong> Las farmacias 24 horas pagan recargos legales por nocturnidad.</li>
            <li><strong>Certificación:</strong> Para ganar más, debes estar legalmente habilitado. Revisa los <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 underline font-bold">REQUISITOS LEGALES</Link> para profesionalizar tu perfil.</li>
          </ul>
        </div>

        {/* Banner CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-[2.5rem] text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">¿Quieres asegurar un mejor sueldo?</h2>
          <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
            El primer paso es aprobar tu examen ante la SEREMI para obtener tu carnet oficial. Sin él, no puedes optar a los cargos con comisiones más altas.
          </p>
          <Link 
            href="/blog/examen-competencia-seremi-2025"
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-lg"
          >
            Prepárate con la GUÍA EXAMEN 2025
          </Link>
        </div>
      </article>
    </main>
  );
}
