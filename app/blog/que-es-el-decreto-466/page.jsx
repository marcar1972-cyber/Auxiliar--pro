import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? La Biblia que todo Auxiliar debe conocer',
  description: 'Explora el Reglamento de Farmacias, Droguerías y Almacenes Farmacéuticos. Conoce las normas que rigen la profesión en Chile según el D.S. 466.',
};

export default function Decreto466Page() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Navegación */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Decreto 466</span>
        </nav>

        <header className="mb-12">
          <p className="text-blue-600 font-bold mb-2 uppercase tracking-widest text-sm">Legislación Sanitaria</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            ¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed italic">
            "Este reglamento establece las condiciones sanitarias mínimas para la instalación, funcionamiento y fiscalización de los establecimientos farmacéuticos en Chile."
          </p>
        </header>

        <section className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-8">
          <p>
            Para cualquier persona que trabaje o desee ingresar al mundo de las farmacias en Chile, el <strong>Decreto Supremo N° 466</strong> no es solo una ley más; es el manual de operaciones que define qué se puede y qué no se puede hacer dentro de un recinto asistencial farmacéutico.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">1. Clasificación de Establecimientos</h2>
          <p>
            El reglamento organiza los lugares de expendio según su nivel de complejidad técnica y las funciones que están autorizados a realizar:
          </p>
          
          

          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Farmacia:</strong> Es el establecimiento más completo, destinado a la venta de productos farmacéuticos, alimentos de uso médico y cosméticos. Está facultada para realizar el fraccionamiento de medicamentos y la preparación de recetas magistrales.</li>
            <li><strong>Almacén Farmacéutico:</strong> Recinto destinado a la venta de medicamentos de venta directa (OTC) y una lista limitada de medicamentos con receta médica.</li>
            <li><strong>Droguería:</strong> Establecimiento que se dedica a la importación, exportación y distribución al por mayor de productos farmacéuticos.</li>
            <li><strong>Botiquín:</strong> Recinto destinado a mantener productos farmacéuticos para el uso interno de instituciones como clínicas, hospitales o campamentos mineros.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">2. Responsabilidad Técnica y el Auxiliar</h2>
          <p>
            El Decreto 466 establece que todo establecimiento debe funcionar bajo la dirección de un <strong>Químico Farmacéutico</strong>, quien asume el rol de Director Técnico (DT). Sin embargo, el rol del Auxiliar de Farmacia es vital para el soporte operativo.
          </p>
          <p>
            Para obtener la autorización sanitaria como Auxiliar, la ley exige acreditar un año de práctica laboral efectiva en farmacia, debidamente certificada por el Director Técnico. Si quieres saber más sobre este proceso, revisa los <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES 2026</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10">3. Normas de Expendio y Bioequivalencia</h2>
          <p>
            La normativa regula estrictamente cómo se deben despachar los medicamentos según su condición de venta: simple, retenida o receta cheque.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Derecho a Información:</strong> El personal tiene la obligación legal de informar al público sobre la existencia de productos bioequivalentes.</li>
            <li><strong>Libro de Reclamos:</strong> Es obligatorio mantener un libro de reclamos y sugerencias a disposición del público.</li>
            <li><strong>Prohibición de Incentivos:</strong> Se prohíbe cualquier incentivo económico (conocido como "canela") que induzca la venta de productos específicos.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl my-10">
            <h3 className="text-xl font-bold text-blue-900 mb-4">¿Te interesa profundizar?</h3>
            <p className="mb-4">Este reglamento es la base del examen ante la autoridad sanitaria. Te recomendamos revisar estos artículos complementarios:</p>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-700 hover:underline">
                  • Diferencia entre Auxiliar y Técnico bajo el Decreto 466
                </Link>
              </li>
              <li>
                <Link href="/blog/examen-competencia-seremi-2025" className="text-blue-700 hover:underline">
                  • Guía de estudio basada en la normativa vigente
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Banner CTA */}
        <div className="mt-16 p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] shadow-xl">
          <div className="bg-white m-[2px] p-12 rounded-[2.9rem] text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Domina la Legislación</h2>
            <p className="text-slate-600 mb-8 text-lg">
              No dejes que la ley te tome por sorpresa. Prepárate con nuestro simulador actualizado con preguntas reales del Decreto 466.
            </p>
            <Link 
              href="/quiz"
              className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              Probar Simulador Gratuito
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
