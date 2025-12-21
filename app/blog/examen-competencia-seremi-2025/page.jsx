import Link from 'next/link';

export const metadata = {
  title: 'Examen de Competencia SEREMI 2026: Guía para Preguntas de Alternativas',
  description: 'Consejos técnicos y temas clave para aprobar el examen de selección múltiple de Auxiliar de Farmacia en Chile.',
};

export default function ExamenGuiaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 font-bold">
          <Link href="/blog" className="text-blue-600 flex items-center hover:text-blue-800 transition-colors">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-slate-900">
            Examen de Competencia SEREMI 2026: ¿Qué preguntan realmente?
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "Colega, en la prueba no hay que explicar nada de memoria: el reto es elegir la alternativa correcta entre distractores técnicos. Aquí te dejo lo que entra este 2026."
          </p>
        </header>

        <div className="space-y-12 text-lg text-slate-700 leading-relaxed">
          <section>
            <p>
              Rendir el examen de la SEREMI durante este 2026 es el paso final para nuestra habilitación. Como ya sabemos, la evaluación es <strong>escrita y con alternativas</strong>. Esto significa que la respuesta correcta siempre estará frente a tus ojos, pero para marcarla debes dominar los detalles técnicos del Decreto 466 y no dejarte confundir por las opciones que parecen correctas pero tienen errores mínimos en cifras o conceptos legales.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Legislación Farmacéutica y Alternativas Trampa</h2>
          <p>
            Gran parte de las preguntas de selección múltiple se centran en los límites legales de nuestra labor. Es común encontrar alternativas que juegan con los plazos y los nombres de los establecimientos.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Establecimientos:</strong> Ten claro que el Almacén Farmacéutico NO puede fraccionar. Si una alternativa dice que el Almacén realiza preparados magistrales, descártala de inmediato.</li>
            <li><strong>Vigencia de Recetas:</strong> Es una pregunta fija. Las recetas de productos controlados (Psicotrópicos) tienen una vigencia de <strong>30 días corridos</strong>. Los distractores suelen decir "30 días hábiles" o "un mes": recuerda que son corridos.</li>
            <li><strong>Director Técnico:</strong> La ley exige su presencia durante todo el horario de funcionamiento. Si la alternativa sugiere que puede ausentarse dejando al auxiliar a cargo de la dirección, es incorrecta.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Precisión en la Cadena de Frío</h2>
          <p>
            En este tema, las alternativas suelen jugar con los rangos de temperatura. La precisión aquí es lo que te dará el puntaje.
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Datos para marcar la opción correcta:</h3>
            <ul className="space-y-3 text-base">
              <li>• <strong>Rango exacto:</strong> Solo es correcta la opción que indique entre <strong>2°C y 8°C</strong>.</li>
              <li>• <strong>Ubicación física:</strong> Los productos no deben tocar las paredes (riesgo de congelación) ni ir en la puerta.</li>
              <li>• <strong>Termómetro:</strong> Se deben registrar las temperaturas máximas y mínimas al menos dos veces al día.</li>
            </ul>
          </div>

          

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Cálculos Farmacéuticos de Selección Múltiple</h2>
          <p>
            No te pedirán el desarrollo completo, pero sí el resultado final. Debes ser rápido con la regla de tres simple para identificar cuántas unidades o mililitros corresponden según la receta.
          </p>
          
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-5 rounded-tl-2xl">Caso Típico</th>
                  <th className="p-5 rounded-tr-2xl">Lógica de Respuesta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5">Dosis en miligramos a mililitros</td>
                  <td className="p-5">Identificar cuánto fármaco hay en 5ml (cuchara estándar) y proyectar.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5">Duración del tratamiento</td>
                  <td className="p-5">Multiplicar dosis diaria x días totales para elegir el número de cajas.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5">Fraccionamiento</td>
                  <td className="p-5">Determinar el número exacto de comprimidos para no entregar de más ni de menos.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Control de Psicotrópicos y Estupefacientes</h2>
          <p>
            Las preguntas sobre recetas retenidas y libros de control son frecuentes. El examen busca que identifiques el rigor administrativo necesario para estos productos.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Receta Cheque:</strong> Se usa para estupefacientes. No confundir con la receta retenida de psicotrópicos.</li>
            <li><strong>Libros de Control:</strong> Los registros deben ser foliados y autorizados por la autoridad sanitaria. Si la alternativa menciona "cuadernos simples", es falsa.</li>
            <li><strong>Custodia:</strong> Siempre bajo llave. No se pueden exhibir al público ni estar en estanterías abiertas.</li>
          </ul>

          

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Estrategia para el Día del Examen</h2>
          <p>
            Al ser una prueba de alternativas, la clave para cualquier fecha que te toque este 2026 es la lectura comprensiva. Aquí unos consejos de colega:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600">
              <h4 className="font-bold mb-2">Descarte de Opciones</h4>
              <p className="text-sm">En cada pregunta suele haber dos alternativas que son obviamente falsas. Elimínalas primero para concentrarte en la duda real.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600">
              <h4 className="font-bold mb-2">Cuidado con los "Siempre" o "Nunca"</h4>
              <p className="text-sm">En leyes sanitarias, casi siempre hay excepciones. Desconfía de las alternativas que sean demasiado extremas en su lenguaje.</p>
            </div>
          </div>

          <p>
            Para dominar los conceptos que aparecerán en tus alternativas, revisa nuestra guía del 
            <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline font-bold mx-1">DECRETO 466</Link> y asegúrate de cumplir con los 
            <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 underline font-bold mx-1">REQUISITOS LEGALES</Link> antes de tu fecha de examen.
          </p>

          <div className="mt-16 bg-blue-600 p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-3xl font-bold text-white mb-8">¿Listo para practicar con alternativas reales?</h3>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed">
              Nuestro simulador está diseñado con el mismo formato de selección múltiple que encontrarás en la SEREMI. No dejes tu acreditación al azar.
            </p>
            <Link 
              href="/quiz" 
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Probar Simulador de Alternativas
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
