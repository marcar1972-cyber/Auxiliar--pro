import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? Guía de Estudio para el Examen SEREMI 2026',
  description: 'Análisis técnico del reglamento de farmacias en Chile para auxiliares en práctica y estudiantes.',
};

export default function DecretoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold flex items-center hover:text-blue-800 transition-all">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
            ¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "No es solo un reglamento; es el pilar que sostiene la salud pública en cada despacho que hacemos."
          </p>
        </header>

        <div className="space-y-10 text-lg text-slate-700 leading-relaxed">
          <section>
            <p>
              El <strong>Decreto Supremo N° 466</strong> es el reglamento sanitario fundamental que rige a todos los establecimientos farmacéuticos en Chile. Para nosotros, los que estamos a pasos de rendir el examen, este documento establece las condiciones para la instalación, funcionamiento y fiscalización de donde trabajamos. Su dominio no es opcional: es la base de nuestra ética y seguridad ante el paciente.
            </p>
          </section>
          
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Módulo A: Clasificación de Establecimientos</h2>
          <p>
            La SEREMI siempre pregunta esto. La normativa organiza los locales según lo que pueden (y lo que NO pueden) hacer:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Farmacia</h3>
              <p className="text-base">
                Es el centro de salud destinado a la venta de productos farmacéuticos, alimentos médicos y cosméticos. 
                <strong>Dato clave para el examen:</strong> Es el único recinto autorizado para el <strong>fraccionamiento</strong> y la preparación de <strong>recetas magistrales</strong>.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Almacén Farmacéutico</h3>
              <p className="text-base">
                Dirigido por un Práctico de Farmacia. Solo vende productos de venta directa y una lista limitada de medicamentos con receta. 
                <span className="text-red-600 font-bold"> Prohibición legal:</span> No pueden fraccionar ni preparar magistrales.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Droguería y Depósitos</h3>
              <p className="text-base">
                Las droguerías importan y distribuyen al por mayor (no venden a personas). Los depósitos (dentales o de vacunas) solo almacenan y venden productos específicos por lotes.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Botiquín</h3>
              <p className="text-base">
                Son para uso interno en clínicas, hospitales o campamentos mineros. Su función es mantener el stock para los pacientes internos del recinto, sin venta comercial abierta.
              </p>
            </div>
          </div>

          

          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Módulo B: Personal y Responsabilidades</h2>
          <p>
            La jerarquía técnica es lo que garantiza que no se entregue un medicamento equivocado:
          </p>
          <ul className="list-disc pl-8 space-y-6 bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
            <li>
              <strong className="text-slate-900">Director Técnico (Químico Farmacéutico):</strong> 
              Es el jefe técnico y responsable legal de todo. Un punto que siempre preguntan: <strong>debe estar presente físicamente</strong> durante todo el horario que la farmacia esté abierta.
            </li>
            <li>
              <strong className="text-slate-900">Auxiliar de Farmacia:</strong> 
              Para obtener nuestro carnet legal, necesitamos acreditar 4° medio, un año de práctica laboral (certificada por nuestro Q.F.) y pasar el examen ante la SEREMI.
            </li>
          </ul>
          <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-400 italic">
            Colega, si aún tienes dudas con los papeles, revisa la guía de <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link>.
          </p>

          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Módulo C: Expendio de Medicamentos</h2>
          <p>
            El despacho no es a voluntad del cliente, sino según lo que dice el registro sanitario:
          </p>

          

          <div className="space-y-4 mt-6">
            <div className="flex gap-4 p-4 border-b border-slate-100">
              <span className="font-black text-blue-600">01</span>
              <p><strong>Venta Directa:</strong> Medicamentos que el público puede comprar sin receta (OTC).</p>
            </div>
            <div className="flex gap-4 p-4 border-b border-slate-100">
              <span className="font-black text-blue-600">02</span>
              <p><strong>Receta Simple y Retenida:</strong> Las recetas de psicotrópicos tienen una <strong>vigencia máxima de 30 días corridos</strong>. ¡No lo olvides!</p>
            </div>
            <div className="flex gap-4 p-4 border-b border-slate-100">
              <span className="font-black text-blue-600">03</span>
              <p><strong>Receta Cheque:</strong> El control más estricto para estupefacientes en formularios oficiales.</p>
            </div>
            <div className="flex gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
              <span className="font-black text-emerald-600">!!</span>
              <p><strong>Deber de Bioequivalencia:</strong> Como auxiliares, es nuestra obligación legal informar siempre al paciente que existen alternativas bioequivalentes antes de vender.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Módulo D y E: Gestión Técnica</h2>
          <p>
            La transparencia se mantiene con orden y registros obligatorios:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li>
              <strong>Libros Oficiales:</strong> La farmacia debe tener al día el Libro de Inspección, el Libro de Reclamos y el Libro de Control de Psicotrópicos/Estupefacientes.
            </li>
            <li>
              <strong>Seguridad de Stock:</strong> Los medicamentos controlados deben estar siempre bajo llave en cajas de seguridad o salas de acceso restringido.
            </li>
            <li>
              <strong>Fraccionamiento:</strong> Solo se puede fraccionar formas sólidas orales (pastillas/cápsulas). Está prohibido fraccionar líquidos, jarabes o polvos.
            </li>
          </ul>

          <div className="p-8 bg-slate-900 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-3xl font-bold text-white mb-6">¿Te sientes listo para el examen?</h3>
            <p className="text-slate-400 mb-10 text-lg">
              Dominar el Decreto 466 es la diferencia entre ser un vendedor y ser un profesional de la salud acreditado.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/blog/examen-competencia-seremi-2025" 
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-lg"
              >
                Estudiar Guía del Examen
              </Link>
              <Link 
                href="/blog/diferencia-auxiliar-tecnico-farmacia" 
                className="inline-block bg-transparent border-2 border-slate-700 text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-slate-800 transition-all"
              >
                Auxiliar vs Técnico
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
