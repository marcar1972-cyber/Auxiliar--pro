import Link from 'next/link';

export const metadata = {
  title: 'Diferencia entre Auxiliar y Técnico en Farmacia en Chile (Guía 2026)',
  description: 'Comparamos formación, sueldo y legalidad de ambos cargos para orientar tu carrera profesional en salud.',
};

export default function DiferenciaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm text-slate-500 font-bold">
          <Link href="/blog" className="hover:text-blue-600 flex items-center transition-colors">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 tracking-tight text-slate-900">
            Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "Colega, elegir tu camino profesional requiere entender dónde estamos parados legalmente. Aunque compartimos la pasión por el servicio, las reglas del juego cambian según tu título."
          </p>
        </header>

        <div className="space-y-10 text-lg leading-relaxed text-slate-700">
          <p>
            Es una de las dudas más recurrentes en el mostrador: si ambos dispensamos y atendemos público, ¿por qué existen dos categorías distintas? La respuesta no está en la práctica diaria, sino en el marco legal del Ministerio de Salud y la Superintendencia de Salud. Durante este 2026, con las nuevas exigencias de certificación, entender esta brecha es fundamental para proyectar tu sueldo y tus responsabilidades.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">El Auxiliar de Farmacia y la Vía de la Experiencia</h2>
          <p>
            El Auxiliar de Farmacia es el rol histórico del rubro. Su formación no nace en un aula académica, sino en la práctica supervisada. Según el <strong>Decreto Supremo N° 466</strong>, el auxiliar es un colaborador directo del Químico Farmacéutico que ha validado sus competencias "en la cancha".
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Habilitación Legal:</strong> Su "título" es en realidad una Resolución Sanitaria emitida por la SEREMI de Salud de su región.</li>
            <li><strong>Requisito de Práctica:</strong> Debe demostrar 12 meses de desempeño efectivo en una farmacia legalmente constituida.</li>
            <li><strong>Evaluación Técnica:</strong> Es obligatorio rendir y aprobar el examen de competencia. No importa en qué mes de 2026 te toque, la evaluación siempre se basa en el conocimiento normativo y técnico.</li>
            <li><strong>Alcance:</strong> Está facultado para la dispensación, pero siempre bajo la supervisión directa del Director Técnico.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">El Técnico de Nivel Superior y la Vía Académica</h2>
          <p>
            El Técnico en Farmacia (TNS) es un profesional formado en Institutos Profesionales (IP) o Centros de Formación Técnica (CFT) acreditados. Su carrera suele durar entre 4 y 5 semestres, incluyendo una práctica profesional formal.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Registro Nacional:</strong> Al titularse, se inscribe automáticamente en el Registro Nacional de Prestadores Individuales de la Superintendencia de Salud.</li>
            <li><strong>Sin Examen SEREMI:</strong> Su título académico lo exime de rendir el examen de competencia, ya que el Estado reconoce su formación previa.</li>
            <li><strong>Autonomía en el Sector Público:</strong> Tienen una ventaja competitiva en Hospitales y CESFAM, donde el grado académico les permite subir en la escala funcionaria.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Comparativa Técnica de Roles</h2>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-5 rounded-tl-2xl">Criterio</th>
                  <th className="p-5 italic text-blue-200 text-center">Auxiliar</th>
                  <th className="p-5 italic text-emerald-200 text-center rounded-tr-2xl">Técnico (TNS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr>
                  <td className="p-5 bg-slate-50 font-bold">Formación</td>
                  <td className="p-5 text-center">Práctica (1 año)</td>
                  <td className="p-5 text-center">Académica (2-3 años)</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 font-bold">Acreditación</td>
                  <td className="p-5 text-center">Examen SEREMI</td>
                  <td className="p-5 text-center">Título Técnico</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 font-bold">Registro</td>
                  <td className="p-5 text-center">Seremi de Salud</td>
                  <td className="p-5 text-center">Superintendencia</td>
                </tr>
                <tr>
                  <td className="p-5 bg-slate-50 font-bold">Campo Laboral</td>
                  <td className="p-5 text-center">Retail / Farmacias</td>
                  <td className="p-5 text-center">Clínico / Hospitalario</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Realidad de Sueldos y Bonificaciones</h2>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-12 shadow-sm">
            <p className="mb-6">
              Hablemos claro: en el <strong>Retail Farmacéutico</strong> (Cruz Verde, Salcobrand, Ahumada), el mercado suele nivelar hacia arriba. Debido a que el fuerte del ingreso proviene de las <strong>comisiones por venta sugerida</strong> y bonos de cumplimiento de sala, un Auxiliar con buena gestión puede ganar lo mismo o incluso más que un Técnico recién egresado.
            </p>
            <p className="mb-6">
              Sin embargo, en el <strong>Sector Público o Clínico</strong>, la situación cambia. El Técnico entra con un grado salarial predefinido y tiene acceso a la "Carrera Funcionaria", lo que le permite aumentos por antigüedad y capacitaciones. Para el Auxiliar, el crecimiento en hospitales es más limitado legalmente.
            </p>
            <Link 
              href="/blog/cuanto-gana-auxiliar-farmacia-chile"
              className="inline-block text-blue-600 font-extrabold border-b-4 border-blue-600 hover:text-blue-800 transition-all text-xl pb-1"
            >
              Ver Detalle de Sueldos y Bonos 2026 →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Consejos Técnicos para el Examen</h2>
          <p>
            Si tu meta este año es acreditarte como Auxiliar, la SEREMI te preguntará sobre estas diferencias. Ten presente estos puntos para tu fecha de examen:
          </p>
          <ul className="list-disc pl-8 space-y-4 bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
            <li><strong>Identidad Profesional:</strong> Recuerda siempre que el Auxiliar no es un profesional universitario, sino un personal sanitario autorizado por la autoridad regional.</li>
            <li><strong>Responsabilidad de la Receta:</strong> Ambos roles deben verificar la vigencia de la receta, pero legalmente la última firma de control siempre recae en el Director Técnico (Q.F.).</li>
            <li><strong>Normativa Vigente:</strong> Estudia bien el <strong>Decreto 466</strong>. Es la base que regula nuestra existencia en la farmacia y define lo que podemos y no podemos hacer en el fraccionamiento.</li>
          </ul>

          <div className="mt-16 bg-blue-600 p-12 rounded-[3.5rem] text-center shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-3xl font-bold mb-6 italic">¿Ya decidiste tu camino profesional?</h3>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed">
              No importa si eres Auxiliar por experiencia o Técnico por academia, el compromiso con el paciente es el mismo. Si optaste por la vía del Auxiliar, prepárate con nosotros para aprobar tu examen este 2026.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Ver Requisitos Legales
              </Link>
              <Link href="/blog/examen-competencia-seremi-2025" className="border-4 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg">
                Guía del Examen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
