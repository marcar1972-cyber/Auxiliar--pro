import Link from 'next/link';

export const metadata = {
  title: 'Diferencia entre Auxiliar y Técnico en Farmacia en Chile',
  description: '¿No sabes si estudiar o rendir el examen SEREMI? Conoce las diferencias de sueldo, formación y responsabilidades entre un auxiliar y un técnico.',
};

export default function DiferenciaPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Navegación */}
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Auxiliar vs Técnico</span>
        </nav>

        <header className="mb-12">
          <p className="text-blue-600 font-bold mb-2 uppercase tracking-widest text-sm">Carrera Farmacéutica</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Diferencia entre Auxiliar de Farmacia y Técnico en Farmacia en Chile
          </h1>
          <p className="mt-6 text-xl text-slate-600 italic">
            "Aunque ambos trabajan codo a codo en la farmacia, sus caminos legales y académicos son totalmente distintos."
          </p>
        </header>

        <section className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-8">
          <p>
            Una de las dudas más recurrentes entre quienes desean ingresar al mundo de la salud es si deben estudiar una carrera técnica o rendir el examen de competencia de la SEREMI. Entender esta diferencia es clave para tu futuro laboral y salarial.
          </p>

          

          <h2 className="text-2xl font-bold text-slate-900">1. El Auxiliar de Farmacia</h2>
          <p>
            El Auxiliar es un trabajador que se forma principalmente a través de la práctica. Según el <strong>Decreto Supremo N° 466</strong>, no requiere un título de educación superior, pero sí debe demostrar competencias técnicas ante la autoridad sanitaria.
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li><strong>Formación:</strong> 1 año de experiencia práctica certificada por un Químico Farmacéutico.</li>
            <li><strong>Habilitación:</strong> Debe rendir y aprobar el examen de competencia de la SEREMI de Salud.</li>
            <li><strong>Responsabilidades:</strong> Apoyo en dispensación, recepción de medicamentos, control de stock y atención de público bajo supervisión.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900">2. El Técnico en Farmacia (Nivel Superior)</h2>
          <p>
            El Técnico de Nivel Superior (TNS) es un profesional que ha cursado un programa de estudios formal en un Centro de Formación Técnica (CFT) o Instituto Profesional (IP).
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li><strong>Formación:</strong> Carrera académica de 2 a 3 años (aprox. 1.600 a 2.400 horas pedagógicas).</li>
            <li><strong>Habilitación:</strong> Su título profesional lo habilita automáticamente para inscribirse en el Registro de la Superintendencia de Salud; no rinde examen en la SEREMI.</li>
            <li><strong>Responsabilidades:</strong> Además de las labores del auxiliar, puede participar en procesos administrativos complejos, gestión de farmacia asistencial y apoyo técnico en áreas especializadas.</li>
          </ul>

          <div className="overflow-x-auto my-12 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-900">Característica</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Auxiliar de Farmacia</th>
                  <th className="px-6 py-4 font-bold text-slate-900">Técnico en Farmacia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 font-medium italic text-slate-800">Estudios</td>
                  <td className="px-6 py-4">Experiencia práctica (1 año)</td>
                  <td className="px-6 py-4">Carrera técnica (2-3 años)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium italic text-slate-800">Examen SEREMI</td>
                  <td className="px-6 py-4">Obligatorio</td>
                  <td className="px-6 py-4">No lo rinde</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium italic text-slate-800">Registro</td>
                  <td className="px-6 py-4">SEREMI de Salud</td>
                  <td className="px-6 py-4">Superintendencia de Salud</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-900">¿Cuál camino elegir?</h2>
          <p>
            Si necesitas comenzar a trabajar pronto y ya cuentas con experiencia en el rubro, el camino del <strong>Auxiliar</strong> es el más rápido. Si buscas una base académica más profunda y proyección en el área clínica u hospitalaria, ser <strong>Técnico</strong> es la mejor inversión a largo plazo.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl my-10">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Continúa tu formación:</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/requisitos-auxiliar-farmacia-chile-2026" className="text-blue-700 hover:underline">
                  • Ver los requisitos para ser Auxiliar este 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/cuanto-gana-auxiliar-farmacia-chile" className="text-blue-700 hover:underline">
                  • Comparativa de sueldos para Auxiliares y Técnicos
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Botón CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/blog/examen-competencia-seremi-2025"
            className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
          >
            Prepárate para el Examen SEREMI 2025
          </Link>
        </div>
      </article>
    </main>
  );
}
