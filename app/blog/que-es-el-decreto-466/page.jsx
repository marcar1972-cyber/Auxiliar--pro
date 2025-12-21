import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? Guía Técnica Completa para Auxiliares',
  description: 'Análisis profundo del Reglamento de Farmacias en Chile. Conoce la normativa sobre establecimientos, personal, recetas y fraccionamiento.',
};

export default function Decreto466ExtensoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Navegación - Ruta Raíz Absoluta */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center transition-colors">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900">
            ¿Qué es el Decreto 466? La Guía Definitiva del Reglamento de Farmacias
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            El marco legal que garantiza la seguridad sanitaria en la dispensación de medicamentos en Chile.
          </p>
        </header>

        {/* Introducción */}
        <section className="space-y-6 text-lg leading-relaxed text-slate-700">
          <p>
            El <strong>Decreto Supremo N° 466</strong> representa el pilar fundamental de la salud pública en el ámbito farmacéutico chileno. Este reglamento establece las condiciones esenciales para la instalación, funcionamiento, tenencia y fiscalización de todos los establecimientos destinados a la preparación y entrega de productos farmacéuticos al público.
          </p>

          {/* Módulo A: Establecimientos */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo A: Clasificación de Establecimientos Farmacéuticos
          </h2>
          <p>La normativa organiza los locales de expendio según su complejidad y funciones permitidas:</p>
          <div className="space-y-6 mt-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800 mb-2">1. Farmacia</h3>
              <p>Es el centro de salud destinado a la venta de productos farmacéuticos, alimentos de uso médico y cosméticos. Es el único recinto facultado por ley para realizar el <strong>fraccionamiento de envases</strong> y la <strong>preparación de recetas magistrales</strong>.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800 mb-2">2. Almacén Farmacéutico</h3>
              <p>Establecimiento dirigido por un Práctico de Farmacia destinado a la venta de productos de venta directa y una lista específica de medicamentos con receta. <strong>Prohibición legal:</strong> Tienen estrictamente prohibido realizar preparaciones magistrales o fraccionamiento.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-800 mb-2">3. Droguerías, Botiquines y Depósitos</h3>
              <p>Las <strong>Droguerías</strong> se dedican a la importación y distribución mayorista. Los <strong>Botiquines</strong> son para uso interno en clínicas o naves, mientras que los <strong>Depósitos</strong> se limitan al almacenamiento y venta de productos específicos como vacunas o gases medicinales.</p>
            </div>
          </div>

          {/* Módulo B: Personal */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo B: Personal y Responsabilidades Técnicas
          </h2>
          <p>La dirección técnica es el corazón de la seguridad del paciente y debe ser ejercida exclusivamente por un profesional capacitado.</p>
          <ul className="list-disc pl-8 space-y-4 mt-4">
            <li><strong>Químico Farmacéutico (Director Técnico):</strong> Es el responsable legal de la identidad, pureza y conservación de los productos. Debe estar presente físicamente durante todo el horario de funcionamiento declarado.</li>
            <li><strong>Auxiliar de Farmacia:</strong> Para obtener la autorización sanitaria, el Decreto exige acreditar educación media completa, contar con un año de práctica laboral efectiva certificada por un Director Técnico y aprobar el examen ante la SEREMI.</li>
          </ul>
          <p className="mt-4 italic">Puedes profundizar en estos puntos en nuestra guía de <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES 2026</Link>.</p>

          {/* Módulo C: Recetas */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo C: Condición de Venta y Bioequivalencia
          </h2>
          <p>El expendio debe ajustarse estrictamente a la condición de venta aprobada en el registro sanitario:</p>
          <ul className="list-disc pl-8 space-y-3 mt-4">
            <li><strong>Venta Directa:</strong> Productos que no requieren receta médica.</li>
            <li><strong>Receta Simple:</strong> Orden escrita de un profesional habilitado.</li>
            <li><strong>Receta Retenida:</strong> Aquella que se archiva en la farmacia para control de stock, con vigencia máxima de 30 días para psicotrópicos.</li>
            <li><strong>Receta Cheque:</strong> Formulario oficial para el control estricto de estupefacientes.</li>
          </ul>
          <p className="mt-6">Es una <strong>obligación legal</strong> informar siempre al paciente sobre la existencia de alternativas <strong>Bioequivalentes</strong> certificadas antes de cerrar la venta.</p>

          {/* Módulo D e E: Manejo Técnico */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo D y E: Registros Oficiales y Fraccionamiento Seguro
          </h2>
          <p>Todo establecimiento debe llevar registros actualizados y foliados para garantizar la trazabilidad:</p>
          <ul className="list-disc pl-8 space-y-3 mt-4">
            <li><strong>Libros Oficiales:</strong> Incluyen el Libro de Inspección, el Libro de Reclamos y los Libros de Control de Psicotrópicos y Estupefacientes.</li>
            <li><strong>Cajas de Seguridad:</strong> Los productos controlados deben permanecer siempre bajo llave en cajas de seguridad o salas restringidas.</li>
            <li><strong>Fraccionamiento:</strong> Solo permitido si se cuenta con una zona autorizada que cumpla con protocolos de envasado y rotulación. Se prohíbe fraccionar productos líquidos o polvos.</li>
          </ul>

          {/* Call to Action Final */}
          <div className="mt-16 bg-slate-900 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">¿Estás preparando tu examen SEREMI?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link 
                href="/blog/examen-competencia-seremi-2025"
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg"
              >
                Ver GUÍA DEL EXAMEN 2025
              </Link>
              <Link 
                href="/blog/diferencia-auxiliar-tecnico-farmacia"
                className="border-2 border-slate-700 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
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
