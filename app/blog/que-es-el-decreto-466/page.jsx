import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
  description: 'Explora el reglamento fundamental de farmacias en Chile. Conoce los tipos de establecimientos, requisitos para el personal y normas de expendio.',
};

export default function Decreto466Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Botón de retorno (Header/Título preservados por estructura) */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 transition-colors font-bold flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            ¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer
          </h1>
          <p className="text-lg text-slate-500">Publicado el 19 de diciembre de 2025</p>
        </header>

        {/* CUERPO DEL CONTENIDO (REPARACIÓN DE VISIBILIDAD) */}
        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            El <strong>Decreto Supremo N° 466</strong> es el reglamento sanitario fundamental que rige a todos los establecimientos farmacéuticos en Chile. Su objetivo primordial es establecer las condiciones sanitarias para la instalación, funcionamiento y fiscalización de estos recintos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-8">
            1. Tipos de Establecimientos Farmacéuticos
          </h2>
          <p>
            La normativa organiza los lugares de expendio de medicamentos según su complejidad y funciones específicas:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Farmacia:</strong> Establecimiento destinado a la venta de productos, fraccionamiento y preparación de recetas magistrales.</li>
            <li><strong>Almacén Farmacéutico:</strong> Dirigido por un Práctico de Farmacia, limitado a la venta de productos de venta directa y una lista específica con receta.</li>
            <li><strong>Droguería:</strong> Recinto destinado a la importación y distribución mayorista; no realiza venta directa al público.</li>
            <li><strong>Botiquín:</strong> Destinado a mantener productos farmacéuticos para uso interno en clínicas, campamentos o naves.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            2. El Personal y sus Responsabilidades
          </h2>
          <p>
            Todo establecimiento debe funcionar bajo la responsabilidad de un <strong>Director Técnico</strong> (Químico Farmacéutico). Para desempeñarse como <strong>Auxiliar de Farmacia</strong>, el Decreto 466 exige:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li>Contar con enseñanza media completa.</li>
            <li>Acreditar un año de práctica laboral efectiva en farmacia, certificada por el Director Técnico.</li>
            <li>Aprobar el examen de competencia ante la SEREMI de Salud de la región correspondiente.</li>
          </ul>
          <p>
            Puedes verificar los detalles de inscripción en nuestra guía de <Link href="/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            3. Expendio de Recetas y Bioequivalencia
          </h2>
          <p>
            El despacho de medicamentos es una de las áreas más fiscalizadas. El reglamento estipula que la venta debe ajustarse estrictamente a la condición de venta de cada producto:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Receta Simple y Retenida:</strong> Deben cumplir con la vigencia y datos del profesional prescriptor.</li>
            <li><strong>Bioequivalencia:</strong> Los establecimientos están obligados a informar al paciente sobre las alternativas bioequivalentes disponibles para el fármaco recetado.</li>
          </ul>
          <p>
            Para comprender mejor estas tareas técnicas, revisa la <Link href="/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link>.
          </p>

          {/* Módulo de CTA */}
          <div className="mt-16 bg-slate-900 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">¿Estás preparando tu examen?</h3>
            <p className="text-slate-400 mb-8">
              El Decreto 466 es la base fundamental de las preguntas de la SEREMI.
            </p>
            <Link 
              href="/examen-competencia-seremi-2025"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-lg"
            >
              Ver GUÍA DEL EXAMEN SEREMI 2025
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
