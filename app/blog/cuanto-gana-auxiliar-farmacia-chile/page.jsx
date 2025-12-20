// app/blog/cuanto-gana-auxiliar-farmacia-chile/page.jsx
import Link from "next/link";

export const metadata = {
  title: "¿Cuánto gana un Auxiliar de Farmacia en Chile? (Actualizado 2026)",
  description: "Descubre cuánto gana un auxiliar de farmacia en Chile. Sueldos base, bonos y comisiones en Cruz Verde, Salcobrand y Ahumada según datos de mercado.",
};

export default function SueldosPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Navegación simple */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Sueldos 2026</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight">
          ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
        </h1>

        {/* Disclaimer / Alert manual con Tailwind */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-blue-500 text-xl">ℹ️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Nota de Transparencia:</strong> Los montos presentados son estimaciones referenciales basadas en la recopilación de ofertas laborales en portales como LinkedIn, Laborum y testimonios de trabajadores. No existe una fuente fidedigna única; el sueldo final depende del contrato individual, ubicación y cumplimiento de metas.
              </p>
            </div>
          </div>
        </div>

        <section className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            El mercado laboral para los profesionales de la farmacia en Chile ha experimentado cambios significativos al inicio de este 2026. Con la plena implementación de la normativa sanitaria, el rol del <strong>Auxiliar de Farmacia en Chile</strong> se ha vuelto más crítico que nunca. Pero, ¿cómo se traduce esta responsabilidad en el sueldo líquido a fin de mes?
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900">Cifras Estimadas por Cadena (Mercado 2026)</h2>
          
          {/* Tabla manual con Tailwind */}
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-900">Cadena / Empresa</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Rango Líquido Estimado</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Perfil del Cargo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Cruz Verde</td>
                  <td className="px-6 py-4 text-green-600 font-bold">$650.000 - $850.000</td>
                  <td className="px-6 py-4 text-sm italic">Fuerte enfoque en metas de venta sugerida.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Salcobrand</td>
                  <td className="px-6 py-4 text-green-600 font-bold">$620.000 - $800.000</td>
                  <td className="px-6 py-4 text-sm italic">Sueldo base competitivo + bonos por categoría.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Farmacias Ahumada</td>
                  <td className="px-6 py-4 text-green-600 font-bold">$600.000 - $780.000</td>
                  <td className="px-6 py-4 text-sm italic">Estabilidad y beneficios corporativos.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold">Independientes / Dr. Simi</td>
                  <td className="px-6 py-4 text-green-600 font-bold">$550.000 - $700.000</td>
                  <td className="px-6 py-4 text-sm italic">Menor carga variable, turnos fijos.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">Desglose de Haberes: ¿Cómo se construye tu sueldo?</h2>
          <p className="mb-6 leading-relaxed">
            Es fundamental entender que el sueldo en el retail farmacéutico no es una cifra plana. Para quienes están revisando los <Link href="/blog/requisitos-auxiliar-farmacia-2026" className="text-blue-600 underline font-bold">requisitos para ser Auxiliar de Farmacia en Chile</Link>, este desglose es vital:
          </p>
          <ul className="list-disc pl-8 mb-8 space-y-3 text-slate-700">
            <li><strong>Sueldo Base:</strong> Generalmente ajustado al mínimo legal vigente.</li>
            <li><strong>Comisiones:</strong> Dependen del cumplimiento de metas de venta y dispensación bajo supervisión.</li>
            <li><strong>Bono de Caja:</strong> Destinado a cubrir posibles faltantes en la cuadratura diaria.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">Factores de Variación</h2>
          <p className="mb-6 leading-relaxed">
            El sueldo varía según la ubicación (Asignación de Zona) y los turnos. Poseer la credencial oficial otorgada por la SEREMI tras aprobar el <Link href="/blog/examen-competencia-seremi-preguntas-reales" className="text-blue-600 underline font-bold">Examen de Competencia SEREMI</Link> permite acceder a mejores cargos y bonificaciones por responsabilidad.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">Retail vs. Clínica</h2>
          <p className="mb-8 leading-relaxed">
            Es importante conocer la <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 underline font-bold">diferencia entre Auxiliar y Técnico</Link>: mientras el auxiliar en retail tiene una renta variable por comisiones, en farmacia clínica el sueldo tiende a ser más estable y fidedigno a la escala institucional.
          </p>

          {/* Sección FAQ manual */}
          <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-200">
            <h2 className="text-xl font-bold mb-6 text-slate-900 flex items-center">
              <span className="mr-2">❓</span> Preguntas Frecuentes sobre Remuneraciones
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">¿Cuánto cuesta el trámite de la credencial?</h3>
                <p className="text-slate-600 text-sm">El derecho a examen tiene un costo de $19.100 y la inscripción en el registro $47.600.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">¿Cuánto es el valor hora para un Part-Time?</h3>
                <p className="text-slate-600 text-sm">Dependiendo de la cadena, ronda los $28.000 a $35.000 por jornada de 10 horas.</p>
              </div>
            </div>
          </div>

          {/* CTA Final manual */}
          <div className="bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl shadow-blue-200 my-16">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Quieres asegurar un mejor sueldo?</h2>
            <p className="mb-8 text-blue-100 text-lg">Un auxiliar certificado legalmente tiene mayor poder de negociación y acceso a mejores vacantes.</p>
            <Link 
              href="/blog/examen-competencia-seremi-preguntas-reales"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Prepárate para el Examen de Competencia SEREMI 2025
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
