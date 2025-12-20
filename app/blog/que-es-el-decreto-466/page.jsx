import Link from 'next/link';

export const metadata = {
  title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
  description: 'Explora el reglamento fundamental de farmacias en Chile. Conoce los tipos de establecimientos, requisitos para el personal y normas de expendio.',
};

export default function Decreto466Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-slate-900">
            ¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer
          </h1>
          <p className="text-lg text-slate-500 italic">
            Descubre por qué el Decreto 466 es la normativa fundamental para las farmacias en Chile.
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            El <strong>Decreto 466</strong> es el reglamento fundamental que establece las condiciones sanitarias para la instalación, funcionamiento y fiscalización de los establecimientos farmacéuticos en Chile. Su propósito es asegurar que la distribución, preparación y venta de medicamentos se realicen bajo estrictos estándares de calidad.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-8">
            A. Tipos de Establecimientos Farmacéuticos
          </h2>
          <p>La normativa clasifica los lugares de expendio según sus funciones y nivel de complejidad:</p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Farmacia:</strong> Es el centro de salud más completo. Realiza venta de productos, preparación de recetas magistrales y fraccionamiento de envases.</li>
            <li><strong>Almacén Farmacéutico:</strong> Dirigido por un Práctico de Farmacia. Puede vender medicamentos de venta directa y un listado específico de medicamentos con receta.</li>
            <li><strong>Droguería:</strong> Se dedica a la importación, exportación, fraccionamiento y distribución mayorista. No vende directamente al público general.</li>
            <li><strong>Botiquín:</strong> Destinado al uso interno de instituciones como clínicas, campamentos mineros o navíos para mantener productos farmacéuticos para su uso en el recinto.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            B. El Personal y sus Responsabilidades
          </h2>
          <p>
            Todo establecimiento debe funcionar bajo un <strong>Director Técnico</strong> (Químico Farmacéutico), quien es el responsable legal de la calidad del servicio. Por su parte, para obtener la autorización sanitaria como <strong>Auxiliar de Farmacia</strong>, la ley exige:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li>Haber rendido satisfactoriamente el 4° año de enseñanza media.</li>
            <li>Acreditar al menos 1 año de práctica laboral efectiva en farmacia, desempeñando labores de bodegaje y reposición.</li>
            <li>Rendir y aprobar un examen de competencia ante la SEREMI de Salud.</li>
          </ul>
          <p>
            Puedes profundizar en estos puntos en nuestra guía de <Link href="/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-600 font-bold underline">REQUISITOS LEGALES</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            C. Expendio, Recetas y Bioequivalencia
          </h2>
          <p>
            El expendio se rige por la condición de venta aprobada en el registro sanitario (Venta Directa, Receta Simple, Retenida o Receta Cheque). La receta debe contener datos precisos del paciente y del profesional prescriptor.
          </p>
          <p>
            Un punto clave es la <strong>Bioequivalencia</strong>: el personal de la farmacia tiene la obligación legal de informar al paciente sobre alternativas bioequivalentes certificadas antes de finalizar la transacción.
          </p>
          <p>
            Para entender mejor cómo varían estas funciones en la práctica, revisa la <Link href="/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link>.
          </p>

          <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 italic">¿Estás estudiando para tu certificación?</h3>
            <p className="text-blue-100 mb-8">
              Dominar el Decreto 466 es esencial para aprobar tu examen ante la SEREMI.
            </p>
            <Link 
              href="/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Ver GUÍA DEL EXAMEN SEREMI 2025
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
