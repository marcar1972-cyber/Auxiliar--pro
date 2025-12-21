import Link from 'next/link';

export const metadata = {
  title: 'Examen de Competencia SEREMI 2026: Guía Técnica de Estudio',
  description: 'Análisis detallado de los temas críticos para el examen de Auxiliar de Farmacia en Chile: Legislación, Cadena de Frío y Cálculos.',
};

export default function ExamenPage() {
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
            "Colega, aunque a cada uno le toque una fecha distinta este 2026, el rigor de la autoridad sanitaria es el mismo. Esta es la base técnica que definirá tu habilitación profesional."
          </p>
        </header>

        <div className="space-y-12 text-lg text-slate-700 leading-relaxed">
          <section>
            <p>
              Rendir el examen de competencia es un proceso que genera mucha ansiedad en nuestra comunidad, especialmente porque las fechas varían según la región y la disponibilidad de la SEREMI durante todo el año. Sin embargo, el objetivo de la evaluación es constante: asegurar que como auxiliares dominamos la normativa técnica para proteger la salud de la población. Basado en la experiencia de quienes ya han pasado por el mostrador, hemos estructurado los ejes fundamentales que debes dominar.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Legislación Sanitaria y el Decreto 466</h2>
          <p>
            Esta es la base de todo. No se trata de memorizar números de artículos, sino de entender cómo la ley rige nuestro trabajo diario. Los evaluadores suelen enfocarse en situaciones prácticas donde el incumplimiento legal pone en riesgo el local o al paciente.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Clasificación de Recintos:</strong> Debes tener clarísima la diferencia entre Farmacia y Almacén Farmacéutico. Recuerda que solo las farmacias pueden realizar fraccionamiento y preparados magistrales.</li>
            <li><strong>Condiciones de Venta:</strong> Es vital distinguir entre Venta Directa, Receta Simple, Receta Retenida y Receta Cheque. Pon especial atención a la vigencia de las recetas retenidas para psicotrópicos, que es de 30 días corridos.</li>
            <li><strong>Bioequivalencia:</strong> No olvides que informar sobre alternativas bioequivalentes certificadas es una obligación legal del personal de dispensación.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Gestión de la Cadena de Frío</h2>
          <p>
            Un error en la temperatura puede inactivar productos críticos como insulinas o vacunas. En el examen, este tema suele ser eliminatorio por su impacto directo en la eficacia del medicamento.
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Protocolos Críticos de Refrigeración:</h3>
            <ul className="space-y-3 text-base">
              <li>• <strong>Rango de Temperatura:</strong> Mantener estrictamente entre 2°C y 8°C.</li>
              <li>• <strong>Ubicación de Medicamentos:</strong> Nunca deben tocar las paredes del refrigerador ni guardarse en la puerta para evitar fluctuaciones térmicas.</li>
              <li>• <strong>Plan de Contingencia:</strong> Debes saber qué hacer ante un corte de luz (uso de unidades refrigerantes, sellado de equipos y registro de temperaturas extremas).</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Cálculos y Matemáticas Farmacéuticas</h2>
          <p>
            La SEREMI busca verificar que puedes interpretar correctamente una prescripción médica y asesorar al paciente sobre cuántas unidades debe llevar para cumplir su tratamiento.
          </p>
          
          
          
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-5 rounded-tl-2xl">Tipo de Cálculo</th>
                  <th className="p-5 rounded-tr-2xl">Lo que debes dominar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Conversión de Unidades</td>
                  <td className="p-5">Pasar de gramos a miligramos o de mililitros a gotas con precisión.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Dosificación Pediátrica</td>
                  <td className="p-5">Calcular la cantidad de jarabe (ml) según la concentración del frasco (ej: 250mg/5ml).</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Duración de Tratamiento</td>
                  <td className="p-5">Determinar el número de cajas necesarias multiplicando dosis diaria por días de tratamiento.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Almacenamiento de Productos Controlados</h2>
          <p>
            El manejo de Psicotrópicos y Estupefacientes es uno de los puntos donde la fiscalización es más severa. En el examen, se espera que conozcas los protocolos de seguridad y registro exigidos por los Decretos 404 y 405.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Custodia:</strong> Los productos controlados deben permanecer bajo llave en muebles o salas de seguridad independientes del resto del stock.</li>
            <li><strong>Libros de Control:</strong> Es obligatorio mantener el registro de entradas y salidas al día, sin enmiendas ni tachaduras.</li>
            <li><strong>Despacho:</strong> Solo se entregan mediante receta retenida o receta cheque, verificando siempre la identidad del adquirente y la vigencia del documento.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Recomendaciones Finales para el Día del Examen</h2>
          <p>
            Independientemente de la fecha en que te toque rendir durante este 2026, la clave está en la seguridad de tus respuestas. Como colegas, te sugerimos seguir estos lineamientos prácticos:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600">
              <h4 className="font-bold mb-2">Seguridad del Paciente</h4>
              <p className="text-sm">Si tienes duda con una receta o una dosis, tu respuesta siempre debe ser: "Consulto con el Químico Farmacéutico antes de dispensar". Eso demuestra criterio profesional.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600">
              <h4 className="font-bold mb-2">Vocabulario Técnico</h4>
              <p className="text-sm">Utiliza términos correctos: "Dispensación" en lugar de "venta", "Fraccionamiento" en lugar de "cortar tiras", y "Director Técnico" al referirte al Q.F.</p>
            </div>
          </div>

          <p>
            No olvides que gran parte del examen se basa en tu capacidad de explicar los procesos del 
            <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline font-bold mx-1">DECRETO 466</Link>. Asegúrate de haber revisado también los 
            <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 underline font-bold mx-1">REQUISITOS LEGALES</Link> para tu postulación.
          </p>

          <div className="mt-16 bg-blue-600 p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-3xl font-bold text-white mb-8">¿Quieres medir tus conocimientos ahora?</h3>
            <p className="text-blue-100 mb-10 text-lg leading-relaxed">
              Hemos diseñado un simulador que replica el tipo de preguntas que la SEREMI realiza en sus evaluaciones oficiales. Practica tantas veces como necesites antes de tu fecha definitiva.
            </p>
            <Link 
              href="/quiz" 
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Ir al Simulador de Examen
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
