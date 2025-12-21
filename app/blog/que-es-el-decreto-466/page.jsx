import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? La "Biblia" de las Farmacias en Chile',
  description: 'Explora el reglamento fundamental que rige la instalación y funcionamiento de farmacias.',
};

export default function DecretoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 font-bold flex items-center">← Volver al Blog</Link>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-slate-900 leading-tight">
          ¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer
        </h1>

        <div className="space-y-10 text-lg text-slate-700 leading-relaxed">
          <p>
            El <strong>Decreto Supremo N° 466</strong> representa el pilar sanitario fundamental de la salud pública en Chile. Este reglamento establece las condiciones esenciales para la instalación, funcionamiento, tenencia y fiscalización de todos los establecimientos destinados a la preparación y entrega de productos farmacéuticos al público. Su dominio no es opcional, sino una obligación legal para todo el personal que trabaja en el rubro.
          </p>
          
          <h2 className="text-3xl font-bold border-b pb-4 text-slate-900">Módulo A: Clasificación de Establecimientos</h2>
          <p>
            La normativa organiza los locales de expendio según su complejidad técnica y las funciones específicas que están facultados para realizar:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Farmacia</h3>
              <p className="text-base">Centro de salud destinado a la venta de productos farmacéuticos y alimentos de uso médico. Es el único recinto autorizado para realizar el <strong>fraccionamiento de envases</strong> y la <strong>preparación de recetas magistrales</strong>.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Almacén Farmacéutico</h3>
              <p className="text-base">Dirigido por un Práctico de Farmacia, se limita a la venta de productos de venta directa y una lista específica de medicamentos con receta. <strong>Prohibición legal:</strong> Tienen estrictamente prohibido fraccionar o preparar recetas magistrales.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Droguería y Depósitos</h3>
              <p className="text-base">Las droguerías se enfocan en la importación y distribución mayorista sin venta directa al público. Los depósitos (como dentales o de vacunas) se limitan al almacenamiento y venta mayorista específica.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Botiquín</h3>
              <p className="text-base">Recinto destinado a mantener productos farmacéuticos para uso interno en clínicas, hospitales, campamentos o naves, sin realizar venta comercial al público externo.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold border-b pb-4 text-slate-900">Módulo B: Personal y Responsabilidades</h2>
          <p>
            La seguridad del paciente depende de una jerarquía clara y técnica dentro de la farmacia:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Director Técnico:</strong> Rol exclusivo del Químico Farmacéutico, quien debe estar presente físicamente durante todo el horario de funcionamiento declarado.</li>
            <li><strong>Auxiliar de Farmacia:</strong> Para obtener su autorización legal ante la SEREMI, debe acreditar enseñanza media completa, contar con un año de práctica laboral efectiva certificada por un Director Técnico y aprobar el examen de competencia.</li>
          </ul>
          <p>
            Puedes profundizar en los pasos de certificación en nuestra guía de <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link>.
          </p>

          <h2 className="text-3xl font-bold border-b pb-4 text-slate-900">Módulo C: Expendio de Medicamentos</h2>
          <p>
            El despacho de fármacos debe ajustarse estrictamente a la condición de venta aprobada en el registro sanitario de cada producto:
          </p>

          

          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Venta Directa:</strong> Productos que no requieren receta médica para su adquisición.</li>
            <li><strong>Receta Simple y Retenida:</strong> Órdenes médicas que deben cumplir con la vigencia reglamentaria. Las recetas de psicotrópicos tienen una vigencia máxima de 30 días corridos.</li>
            <li><strong>Receta Cheque:</strong> Formulario oficial para el control estricto de estupefacientes.</li>
            <li><strong>Deber de Bioequivalencia:</strong> Es obligación legal del personal informar siempre al paciente sobre la existencia de alternativas bioequivalentes certificadas antes de cerrar la venta.</li>
          </ul>

          <h2 className="text-3xl font-bold border-b pb-4 text-slate-900">Módulo D y E: Gestión Técnica y Fraccionamiento</h2>
          <p>
            La transparencia y seguridad se garantizan a través de registros obligatorios y protocolos de manipulación:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Libros Oficiales:</strong> Toda farmacia debe llevar al día el Libro de Inspección, el Libro de Reclamos y el Libro de Control de Psicotrópicos y Estupefacientes.</li>
            <li><strong>Seguridad:</strong> Las sustancias controladas deben permanecer bajo llave en cajas de seguridad o salas restringidas.</li>
            <li><strong>Fraccionamiento Seguro:</strong> Solo está permitido en farmacias autorizadas para formas sólidas orales (comprimidos/cápsulas). Se prohíbe terminantemente fraccionar productos líquidos o polvos.</li>
          </ul>

          <p>
            Para comprender mejor cómo varían estas funciones en la práctica, te recomendamos revisar la <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link>.
          </p>

          <div className="mt-12 p-10 bg-slate-900 rounded-[3rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 italic">¿Estás preparando tu examen?</h3>
            <p className="text-slate-400 mb-8">Dominar el Decreto 466 es la llave para tu certificación ante la autoridad sanitaria.</p>
            <Link href="/blog/examen-competencia-seremi-2025" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all">
              Ver GUÍA DEL EXAMEN SEREMI
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
