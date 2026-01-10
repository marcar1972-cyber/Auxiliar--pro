import Link from 'next/link';

// 🟢 1. METADATA OPTIMIZADA (Solución al Reporte SEO)
export const metadata = {
  // Base del dominio para esta página
  metadataBase: new URL('https://www.auxiliaresdefarmacia.cl'),
  
  // Título potente que coincide con el H1
  title: '¿Qué es el Decreto 466? La "Biblia" de las Farmacias en Chile',
  description: 'Explora el reglamento fundamental que rige la instalación y funcionamiento de farmacias. Guía esencial sobre el Decreto 466 para el examen de competencia.',
  
  // Keywords específicas de este artículo
  keywords: ["decreto 466 farmacia", "reglamento farmacias chile", "examen seremi auxiliar", "libros oficiales farmacia"],
  
  authors: [{ name: "AuxiliarPro" }],
  
  // Canonical individual para evitar contenido duplicado
  alternates: {
    canonical: './', 
  },
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
          {/* H1 Coincidente con Title (Crucial para SEO) */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
            ¿Qué es el Decreto 466? La "Biblia" de las Farmacias en Chile
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "Para nosotros, no es solo una ley; es el manual de supervivencia técnica que garantiza la seguridad de cada paciente que atendemos."
          </p>
        </header>

        <div className="space-y-10 text-lg text-slate-700 leading-relaxed">
          <section>
            <p>
              El <strong>Decreto Supremo N° 466</strong> representa el pilar sanitario fundamental de la salud pública en Chile. Este reglamento establece las condiciones esenciales para la instalación, funcionamiento, tenencia y fiscalización de todos los establecimientos destinados a la preparación y entrega de productos farmacéuticos al público. Dominar este texto es obligatorio, ya que es el eje central del examen de la SEREMI.
            </p>
          </section>
          
          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Clasificación de Establecimientos</h2>
          <p>
            La normativa organiza los locales de expendio según su complejidad técnica y las funciones específicas que están facultados para realizar. Es una de las secciones que más preguntan en la evaluación:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Farmacia</h3>
              <p className="text-base text-slate-600">
                Es el centro de salud destinado a la venta de productos farmacéuticos, alimentos de uso médico y cosméticos. 
                <strong>Dato técnico:</strong> Es el único recinto autorizado para realizar el <strong>fraccionamiento</strong> de envases y la preparación de <strong>recetas magistrales</strong> bajo supervisión del Q.F.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Almacén Farmacéutico</h3>
              <p className="text-base text-slate-600">
                Dirigido por un Práctico de Farmacia, se limita a la venta de productos de venta directa y una lista específica de medicamentos con receta. 
                <span className="text-red-600 font-bold block mt-2">Prohibición legal: Tienen estrictamente prohibido fraccionar o preparar recetas magistrales.</span>
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Droguería y Depósitos</h3>
              <p className="text-base text-slate-600">
                Las droguerías se enfocan exclusivamente en la importación y distribución mayorista. Los depósitos (como dentales o de vacunas) se limitan al almacenamiento y venta mayorista específica a profesionales o recintos de salud.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Botiquín</h3>
              <p className="text-base text-slate-600">
                Recinto destinado a mantener productos farmacéuticos para uso interno en clínicas, hospitales, campamentos o naves. No están facultados para realizar venta comercial al público externo.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Personal y Responsabilidades Técnicas</h2>
          <p>
            La seguridad del paciente depende de una jerarquía técnica innegociable. La normativa define roles claros para evitar errores en la cadena de dispensación:
          </p>
          <ul className="list-disc pl-8 space-y-6 bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
            <li>
              <strong className="text-slate-900">Director Técnico (Químico Farmacéutico):</strong> 
              Es el responsable legal de la identidad, pureza y conservación de los productos. Un punto crítico que siempre evalúan: <strong>debe estar presente físicamente</strong> durante todo el horario de funcionamiento declarado.
            </li>
            <li>
              <strong className="text-slate-900">Auxiliar de Farmacia:</strong> 
              Nuestro rol es apoyar la dispensación bajo supervisión técnica. Para obtener nuestra autorización ante la SEREMI, debemos acreditar enseñanza media completa, un año de práctica laboral efectiva (certificada por un Q.F.) y aprobar el examen de competencia.
            </li>
          </ul>
          <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-400 italic">
            Si necesitas preparar tus documentos, revisa nuestra guía de <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link>.
          </p>

          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Condición de Venta y Bioequivalencia</h2>
          <p>
            El despacho de fármacos no es un acto comercial simple, sino un acto sanitario que debe ajustarse al registro de cada producto:
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex gap-4 p-5 border-b border-slate-100">
              <span className="font-black text-blue-600 text-xl">01</span>
              <p><strong>Venta Directa:</strong> Medicamentos OTC que el público puede adquirir sin orden médica.</p>
            </div>
            <div className="flex gap-4 p-5 border-b border-slate-100">
              <span className="font-black text-blue-600 text-xl">02</span>
              <p><strong>Receta Simple y Retenida:</strong> Las recetas de psicotrópicos tienen una <strong>vigencia máxima de 30 días corridos</strong> desde su emisión.</p>
            </div>
            <div className="flex gap-4 p-5 border-b border-slate-100">
              <span className="font-black text-blue-600 text-xl">03</span>
              <p><strong>Receta Cheque:</strong> Formulario oficial y numerado para el control estricto de estupefacientes.</p>
            </div>
            <div className="flex gap-4 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
              <span className="font-black text-emerald-600 text-xl">★</span>
              <p><strong>Deber de Bioequivalencia:</strong> Como auxiliares, es nuestra <strong>obligación legal</strong> informar siempre al paciente sobre las alternativas bioequivalentes certificadas antes de cerrar la venta.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold border-b-4 border-blue-600 pb-2 text-slate-900">Gestión de Libros y Fraccionamiento Seguro</h2>
          <p>
            La transparencia en la farmacia se garantiza mediante registros obligatorios que la SEREMI fiscaliza en cada visita:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li>
              <strong>Libros Oficiales:</strong> Toda farmacia debe llevar al día el Libro de Inspección, el Libro de Reclamos y el Libro de Control de Psicotrópicos y Estupefacientes (foliado y autorizado).
            </li>
            <li>
              <strong>Seguridad de Stock:</strong> Los medicamentos controlados deben permanecer bajo llave en cajas de seguridad o salas de acceso restringido.
            </li>
            <li>
              <strong>Fraccionamiento:</strong> Solo se permite fraccionar formas sólidas orales (comprimidos/cápsulas). Está <strong>terminantemente prohibido</strong> fraccionar líquidos, jarabes, inyectables o polvos.
            </li>
          </ul>

          <p>
            Si quieres profundizar en cómo estas leyes cambian según tu título, revisa la <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link>.
          </p>

          <div className="mt-16 p-10 bg-slate-900 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-3xl font-bold text-white mb-6 italic">¿Preparando tu examen para enero?</h3>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              El Decreto 466 es la diferencia entre ser un despachador y ser un profesional de la salud acreditado. No dejes de estudiar los detalles técnicos.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/blog/examen-competencia-seremi-2025" 
                className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-lg"
              >
                Ver GUÍA DEL EXAMEN SEREMI
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
