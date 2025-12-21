import Link from 'next/link';

export default function Decreto466Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 p-8 md:p-16">
      <article className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-blue-600 font-bold">← Volver al Blog</Link>
        
        <h1 className="text-4xl font-extrabold my-8">¿Qué es el Decreto 466? La "Biblia" del Auxiliar</h1>
        
        <div className="space-y-6 text-lg text-slate-700">
          <h2 className="text-2xl font-bold text-slate-900">1. Tipos de Establecimientos</h2>
          <p>El reglamento organiza los recintos según su función:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Farmacia:</strong> Venta, fraccionamiento y recetas magistrales.</li>
            <li><strong>Almacén Farmacéutico:</strong> Venta directa y lista limitada de recetas.</li>
            <li><strong>Droguería:</strong> Importación y distribución mayorista.</li>
            <li><strong>Botiquín:</strong> Uso interno en clínicas o instituciones.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Requisitos del Auxiliar</h2>
          <p>Para trabajar legalmente, el Decreto 466 exige requisitos claros:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Haber aprobado 4° medio.</li>
            <li>Acreditar 1 año de práctica laboral efectiva.</li>
            <li>Aprobar el examen de competencia ante la SEREMI.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Expendio y Recetas</h2>
          <p>La normativa regula cómo se deben despachar los medicamentos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Receta Cheque y Retenida:</strong> Tienen una vigencia máxima de 30 días.</li>
            <li><strong>Bioequivalencia:</strong> Obligación de informar sobre alternativas certificadas.</li>
          </ul>
        </div>

        <div className="mt-12 bg-blue-600 p-10 rounded-3xl text-center">
          <Link href="/blog/examen-competencia-seremi-2025" className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold">
            Ir a Guía de Examen
          </Link>
        </div>
      </article>
    </main>
  );
}
