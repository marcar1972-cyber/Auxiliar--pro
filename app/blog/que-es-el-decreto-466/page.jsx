import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? Guía Técnica Completa para Auxiliares',
  description: 'Análisis profundo del Reglamento de Farmacias en Chile. Conoce la normativa sobre establecimientos, personal, recetas y fraccionamiento.',
};

export default function Decreto466ExtensoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Navegación y Cabecera */}
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
            El marco legal que define la seguridad sanitaria en la dispensación de medicamentos en Chile.
          </p>
        </header>

        {/* Introducción */}
        <section className="space-y-6 text-lg leading-relaxed text-slate-700">
          <p>
            El <strong>Decreto Supremo N° 466</strong> representa el pilar fundamental de la normativa sanitaria farmacéutica en nuestro país. Este reglamento establece las condiciones esenciales para la instalación, funcionamiento, tenencia y fiscalización de todos los recintos destinados a la preparación y entrega de productos farmacéuticos. Dominar este decreto no es solo un requisito para el examen de la SEREMI, sino la base ética del ejercicio profesional del auxiliar.
          </p>

          

          {/* Módulo A: Clasificación de Establecimientos */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo A: Clasificación de Establecimientos Farmacéuticos
          </h2>
          <p>
            La legislación organiza los centros de salud farmacéutica según su complejidad técnica y funciones específicas:
          </p>
          <div className="space-y-6 mt-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-blue-800 mb-2">1. Farmacia</h3>
              <p className="text-sm md:text-base">
                Es el establecimiento destinado a la venta de productos farmacéuticos, alimentos de uso médico y cosméticos. Es el único recinto facultado para realizar el <strong>fraccionamiento de envases</strong> y la <strong>preparación de recetas magistrales</strong> bajo estricta supervisión técnica.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-blue-800 mb-2">2. Almacén Farmacéutico</h3>
              <p className="text-sm md:text-base">
                Establecimiento destinado a la venta de productos de venta directa y una lista específica de medicamentos con receta bajo la dirección de un Práctico de Farmacia. 
                <strong>Prohibiciones críticas:</strong> Tienen estrictamente prohibido realizar preparaciones magistrales o fraccionamiento de productos.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-blue-800 mb-2">3. Droguería y Depósitos</h3>
              <p className="text-sm md:text-base">
                Las <strong>Droguerías</strong> se dedican exclusivamente a la importación, exportación y distribución mayorista, sin venta directa al público. Por su parte, los <strong>Depósitos de Productos Farmacéuticos</strong> se limitan al almacenamiento y venta de productos específicos como vacunas o gases medicinales bajo condiciones controladas.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-blue-800 mb-2">4. Botiquín</h3>
              <p className="text-sm md:text-base">
                Recintos destinados a mantener productos farmacéuticos para uso interno en clínicas, hospitales, naves o campamentos. No realizan venta comercial externa.
              </p>
            </div>
          </div>

          {/* Módulo B: El Capital Humano */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo B: El Personal y sus Responsabilidades
          </h2>
          <p>
            El decreto exige una estructura jerárquica clara para garantizar que ningún medicamento sea entregado sin validación profesional.
          </p>
          <ul className="list-disc pl-8 space-y-4 mt-4">
            <li>
              <strong>Director Técnico (Químico Farmacéutico):</strong> Es el responsable legal de la identidad, pureza y conservación de los productos. Debe estar presente físicamente durante todo el horario de funcionamiento declarado.
            </li>
            <li>
              <strong>Auxiliar de Farmacia:</strong> Es el apoyo fundamental del Q.F. en la dispensación. Para acreditarse legalmente, el Decreto 466 exige:
              <ul className="list-circle pl-6 mt-2 space-y-2 text-slate-600">
                <li>Licencia de Enseñanza Media completa.</li>
                <li>Certificación de al menos un año de práctica laboral efectiva en farmacia.</li>
                <li>Aprobación satisfactoria del examen de competencia ante la autoridad sanitaria (SEREMI).</li>
              </ul>
            </li>
          </ul>

          {/* Módulo C: El Acto de Dispensación */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo C: Tipos de Receta y Bioequivalencia
          </h2>
          <p>
            La entrega de medicamentos se rige estrictamente por la condición de venta aprobada en el registro sanitario.
          </p>
          
          

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold mb-2">Venta Directa y Receta Simple</h4>
              <p className="text-sm">Productos OTC que no requieren orden médica o medicamentos que exigen receta pero sin retención del documento.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-bold mb-2">Receta Retenida</h4>
              <p className="text-sm">Documento que se archiva en la farmacia para control de psicotrópicos, con una vigencia máxima de 30 días.</p>
            </div>
          </div>
          <p className="mt-4">
            Especial mención requiere la <strong>Receta Cheque</strong>, utilizada para el control de estupefacientes bajo estrictas medidas de seguridad y formularios oficiales provistos por la autoridad. Además, es <strong>obligación legal</strong> informar siempre al paciente sobre la existencia de alternativas bioequivalentes certificadas por el ISP antes de cerrar la venta.
          </p>

          {/* Módulo D e E: Control y Seguridad */}
          <h2 className="text-3xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2 mt-12">
            Módulo D y E: Libros Oficiales y Fraccionamiento
          </h2>
          <p>
            La transparencia en la gestión de inventarios críticos se garantiza a través de los libros oficiales:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Libros de Control:</strong> Es obligatorio el uso de libros (o sistemas digitales autorizados) para el registro de estupefacientes y psicotrópicos.</li>
            <li><strong>Seguridad:</strong> Todas las sustancias controladas deben permanecer bajo llave en cajas de seguridad o salas restringidas.</li>
            <li><strong>Fraccionamiento:</strong> Solo permitido si la farmacia cumple con las Buenas Prácticas de Manufactura (GMP). Se prohíbe fraccionar productos líquidos, inyectables o polvos, limitándose mayoritariamente a formas sólidas orales bajo etiquetado reglamentario.</li>
          </ul>

          {/* Call to Action Final */}
          <div className="mt-16 bg-slate-900 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">¿Te sientes preparado para el examen?</h3>
            <p className="text-slate-400 mb-8">
              El Decreto 466 es la piedra angular de tu futuro profesional. Asegúrate de cumplir con todos los hitos previos.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/blog/requisitos-auxiliar-farmacia-chile-2026"
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all"
              >
                Ver Requisitos 2026
              </Link>
              <Link 
                href="/blog/examen-competencia-seremi-2025"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all"
              >
                Guía del Examen SEREMI
              </Link>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="hover:underline">
                ¿Aún no sabes si ser Auxiliar o Técnico? Haz clic aquí.
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
