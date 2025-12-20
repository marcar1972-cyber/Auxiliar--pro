import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Guía completa sobre los requisitos legales, académicos y laborales para obtener tu credencial de Auxiliar de Farmacia ante la SEREMI de Salud.',
};

export default function RequisitosPage() {
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
            Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
          </h1>
          <p className="text-lg text-slate-500 italic">
            Conoce el paso a paso legal para trabajar en el rubro farmacéutico chileno.
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Si estás pensando en trabajar en una farmacia, el primer paso fundamental es conocer la normativa vigente. En Chile, la labor del auxiliar no solo requiere ganas de aprender, sino el cumplimiento de hitos legales establecidos por el Ministerio de Salud.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-8">
            1. Requisitos Personales y Académicos
          </h2>
          <p>Para postular a la certificación oficial, el solicitante debe cumplir con dos condiciones básicas de entrada:</p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Mayoría de edad:</strong> Debes tener al menos 18 años cumplidos al momento de iniciar el trámite.</li>
            <li><strong>Educación Formal:</strong> Es obligatorio contar con la licencia de enseñanza media completa (4° medio aprobado).</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            2. Acreditación de Experiencia Laboral
          </h2>
          <p>
            A diferencia de los técnicos, el auxiliar de farmacia en Chile se valida a través de la práctica supervisada. La normativa exige:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Tiempo de desempeño:</strong> Acreditar un mínimo de un año de práctica laboral efectiva en farmacias.</li>
            <li><strong>Certificación Profesional:</strong> Esta experiencia debe estar respaldada por un certificado firmado por el Químico Farmacéutico Director Técnico del establecimiento donde trabajaste.</li>
            <li><strong>Labores permitidas:</strong> La práctica debe incluir funciones de bodegaje, reposición de medicamentos y apoyo en la dispensación bajo supervisión directa.</li>
          </ul>
          <p>
            Es importante notar que esta formación práctica es la que te permite rendir el examen posterior. Si tienes dudas sobre los roles, consulta nuestra comparativa sobre la <Link href="/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            3. Trámite en SEREMI y Examen de Competencia
          </h2>
          <p>
            Una vez que reúnas los documentos (Certificado de 4° medio y certificado de práctica del Q.F.), debes iniciar el proceso administrativo:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Portal ASDigital:</strong> El trámite se realiza 100% en línea a través de la plataforma de la autoridad sanitaria usando tu Clave Única.</li>
            <li><strong>Evaluación Técnica:</strong> La SEREMI te citará a un examen de competencia donde se evalúan conocimientos de farmacología básica, lectura de recetas y el cumplimiento del <Link href="/que-es-el-decreto-466" className="text-blue-600 font-bold underline">DECRETO 466</Link>.</li>
          </ul>

          <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 italic">¿Quieres asegurar tu aprobación?</h3>
            <p className="text-blue-100 mb-8">
              No dejes tu futuro al azar. Prepárate con contenido diseñado específicamente para el examen de este año.
            </p>
            <Link 
              href="/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Estudiar con la GUÍA DEL EXAMEN SEREMI 2025
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
