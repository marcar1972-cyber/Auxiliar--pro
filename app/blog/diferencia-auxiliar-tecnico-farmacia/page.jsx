import Link from 'next/link';

export const metadata = {
  title: 'Diferencia entre Auxiliar y Técnico en Farmacia en Chile',
  description: '¿No sabes si estudiar o rendir el examen SEREMI? Conoce las diferencias de sueldo, formación y responsabilidades entre ambos roles.',
};

export default function DiferenciaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile
          </h1>
          <p className="text-lg text-slate-500 italic">Entender los dos caminos profesionales que existen en el rubro farmacéutico chileno.</p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Una de las dudas más recurrentes entre quienes desean ingresar al mundo de la salud es si deben estudiar una carrera técnica o rendir el examen de competencia de la SEREMI. Aunque ambos trabajan codo a codo en la farmacia, sus caminos legales y académicos son distintos.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-8">El Auxiliar de Farmacia</h2>
          <p>
            El auxiliar es un trabajador que se valida principalmente a través de la práctica en el puesto de trabajo. No requiere un título de educación superior de varios años, sino la demostración de competencias técnicas ante la autoridad sanitaria.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Habilitación:</strong> Se obtiene tras acreditar un año de experiencia laboral y aprobar el examen de competencia de la SEREMI.</li>
            <li><strong>Registro:</strong> Quedan inscritos en la base de datos de la respectiva SEREMI de Salud.</li>
            <li><strong>Labores:</strong> Apoyo directo en la dispensación, manejo de inventarios, recepción de pedidos y orientación básica al público.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">El Técnico en Farmacia (Nivel Superior)</h2>
          <p>
            El Técnico de Nivel Superior (TNS) es un profesional que ha cursado un programa de estudios formal en un Centro de Formación Técnica o Instituto Profesional acreditado.
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Formación:</strong> Carrera académica que suele durar entre 2 a 3 años (5 semestres).</li>
            <li><strong>Habilitación:</strong> Su título profesional lo habilita automáticamente; no necesitan rendir el examen de la SEREMI.</li>
            <li><strong>Registro:</strong> Son inscritos en el Registro Nacional de Prestadores Individuales de la Superintendencia de Salud.</li>
          </ul>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10">
            <h3 className="text-xl font-bold mb-4">Diferencias de Sueldo y Proyección</h3>
            <p>
              En el retail farmacéutico, ambos roles suelen competir por los mismos cargos de ventas, donde las comisiones igualan mucho el sueldo líquido. Sin embargo, en el <strong>Sector Público o Clínico</strong> (Hospitales y Centros de Salud), el título técnico suele estar asociado a un grado o nivel salarial mayor por ley.
            </p>
          </div>

          <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">¿Ya decidiste tu camino?</h3>
            <p className="text-blue-100 mb-8">
              Si optaste por la vía del Auxiliar, el primer paso es cumplir con los requisitos legales para rendir el examen.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/requisitos-auxiliar-farmacia-chile-2026" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
                Ver Requisitos Legales
              </Link>
              <Link href="/examen-competencia-seremi-2025" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Guía del Examen
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
