import Link from 'next/link';

export default function ExamenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 font-bold">
          <Link href="/blog" className="text-blue-600 flex items-center">← Volver al Blog</Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Examen de Competencia SEREMI 2025: ¿Qué preguntan realmente?
          </h1>
          <p className="text-xl text-slate-500 italic">
            "Aprobar el examen ante la SEREMI es el hito final para tu habilitación profesional en el sistema de salud."
          </p>
        </header>

        <div className="space-y-8 text-lg text-slate-700 leading-relaxed">
          <p>
            El examen de la autoridad sanitaria busca garantizar que el auxiliar posea los conocimientos necesarios para no poner en riesgo la salud pública. Basado en años de evaluaciones, hemos identificado tres pilares críticos:
          </p>

          <h2 className="text-2xl font-bold border-b pb-2 mt-12">1. Legislación y Ética (Decreto 466)</h2>
          <p>No basta con saber qué es, debes saber aplicarlo. Preguntas comunes incluyen la vigencia de recetas y el almacenamiento de sustancias controladas.</p>

          <h2 className="text-2xl font-bold border-b pb-2 mt-12">2. Cadena de Frío y Almacenamiento</h2>
          <p>Un error aquí puede inactivar medicamentos vitales como insulinas. Debes dominar los rangos de temperatura (2°C a 8°C) y los protocolos ante cortes de luz.</p>

          <h2 className="text-2xl font-bold border-b pb-2 mt-12">3. Matemáticas Farmacéuticas</h2>
          <p>Cálculos rápidos de dosis, conversión de miligramos a mililitros y duración de tratamientos según la frecuencia indicada por el médico.</p>

          <div className="mt-16 p-12 bg-blue-600 rounded-[3rem] text-center shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8">¿Quieres practicar ahora?</h3>
            <Link href="/quiz" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all shadow-lg">
              Ir al Simulador de Examen
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
