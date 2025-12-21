import Link from 'next/link';

export const metadata = {
  title: '¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)',
  description: 'Análisis detallado de la estructura salarial, comisiones por venta sugerida y bonos en el retail farmacéutico chileno.',
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

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900">
            ¿Cuánto gana un Auxiliar de Farmacia en Chile? (Sueldos y Bonos 2026)
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "Entender tu liquidación de sueldo es tan importante como conocer el Decreto 466. Aquí desglosamos la realidad del mercado para este 2026."
          </p>
        </header>

        <div className="space-y-12 text-lg leading-relaxed text-slate-700">
          <section>
            <p>
              Hola colega. Una de las preguntas más frecuentes cuando estamos preparando nuestro examen de competencia durante este 2026 es: <strong>¿cuánto voy a ganar realmente una vez que tenga mi carnet de la SEREMI?</strong>. A diferencia de otros rubros, en la farmacia chilena el sueldo base es solo el punto de partida; el verdadero ingreso se construye a través de una estructura variable que premia la gestión y el conocimiento técnico.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-emerald-600 pb-2">Estructura de la Remuneración Mensual</h2>
          <p>
            La liquidación de un auxiliar de farmacia en las grandes cadenas (Cruz Verde, Salcobrand, Ahumada) se compone de varios ítems que debes conocer para proyectar tus ingresos mensuales:
          </p>
          
          

          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Sueldo Base:</strong> Generalmente se ajusta al ingreso mínimo legal vigente, que para este periodo 2026 se proyecta sobre los $500.000 brutos.</li>
            <li><strong>Gratificación Legal:</strong> Pago mensual que corresponde al 25% del sueldo base (con el tope legal respectivo).</li>
            <li><strong>Comisión V.S. (Venta Sugerida):</strong> Este es el componente más fuerte. Son incentivos variables por la venta de productos específicos, marcas propias o categorías en campaña.</li>
            <li><strong>Bonos de Cumplimiento de Sala:</strong> Un monto variable que se paga si todo el equipo de la farmacia logra llegar a la meta de venta asignada para ese mes.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-emerald-600 pb-2">Comparativa Estimada por Cadenas 2026</h2>
          <p>
            Aunque los montos pueden variar según la ubicación del local y tu desempeño individual, estos son los rangos de sueldo líquido (en bolsillo) estimados para una jornada de 44 horas semanales durante este 2026:
          </p>
          
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-5 rounded-tl-2xl">Empresa / Sector</th>
                  <th className="p-5 rounded-tr-2xl text-center">Rango Líquido Mensual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Cruz Verde / Salcobrand</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$650.000 - $880.000+</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Farmacias Ahumada</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$620.000 - $810.000+</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Farmacias Independientes / Simi</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$550.000 - $720.000</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Sector Público / Clínico</td>
                  <td className="p-5 text-center font-bold text-emerald-600">$580.000 - $750.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-emerald-600 pb-2">Asignaciones Especiales y Beneficios</h2>
          <p>
            Además del sueldo variable, existen asignaciones que no son imponibles pero que suman al total ganado:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Asignación de Zona:</strong> Si trabajas en regiones extremas (como Arica, Antofagasta, Aysén o Magallanes), puedes recibir un bono territorial que incrementa significativamente tu sueldo líquido.</li>
            <li><strong>Asignación de Caja:</strong> Un monto para cubrir eventuales faltantes de dinero al cuadrar la caja al final del turno.</li>
            <li><strong>Bonos Nocturnos:</strong> Las farmacias que operan 24 horas pagan recargos por las horas trabajadas en horario de noche.</li>
          </ul>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 italic text-blue-900">
            <strong>Dato de colega:</strong> Tener tu carnet de auxiliar vigente no solo es legal, sino que es tu mejor herramienta de negociación. Los auxiliares acreditados suelen tener acceso a mejores tramos de comisiones que aquellos que aún están en proceso de práctica.
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-emerald-600 pb-2">Impacto de la Acreditación en tu Sueldo</h2>
          <p>
            ¿Por qué es tan importante rendir tu examen durante este 2026? Porque la ley prohíbe que un trabajador sin carnet de auxiliar realice ciertas labores críticas, como el despacho de recetas retenidas o psicotrópicos. Al estar acreditado, tu valor para la farmacia aumenta, lo que se traduce en:
          </p>
          <ol className="list-decimal pl-8 space-y-4 font-medium">
            <li>Acceso a contratos indefinidos con mejores beneficios corporativos (seguros complementarios, bonos de vacaciones).</li>
            <li>Posibilidad de ser designado como "Primer Auxiliar" o encargado de sección.</li>
            <li>Mayor puntaje en las evaluaciones de desempeño anuales.</li>
          </ol>

          <div className="mt-16 bg-slate-900 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-3xl font-bold text-white mb-6 italic">¿Estás listo para dar el salto profesional este 2026?</h3>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              El primer paso para acceder a estas rentas es aprobar tu examen ante la SEREMI. No importa en qué mes rindas, la preparación es la clave del éxito.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/blog/examen-competencia-seremi-2025" 
                className="inline-block bg-emerald-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-500 transition-all shadow-lg"
              >
                Preparar mi Examen 2026
              </Link>
              <Link 
                href="/blog/requisitos-auxiliar-farmacia-chile-2026" 
                className="inline-block bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all shadow-lg"
              >
                Ver Requisitos Legales
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
