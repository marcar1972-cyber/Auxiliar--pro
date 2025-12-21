import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Guía detallada sobre los requisitos legales, académicos y laborales para obtener tu credencial ante la SEREMI.',
};

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/blog" className="hover:text-blue-600 font-bold flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-slate-900">
            Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "La obtención de la credencial oficial es una puerta de entrada real al sistema de salud chileno."
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-slate-700">
          <p>
            Trabajar en el rubro farmacéutico requiere cumplir con hitos legales específicos establecidos por el Ministerio de Salud. Para este 2026, la normativa exige una combinación de formación académica y experiencia práctica verificable.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-8">
            1. Requisitos Académicos y Personales
          </h2>
          <p>Para iniciar el proceso administrativo, debes cumplir con los siguientes requisitos de entrada:</p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Mayoría de edad:</strong> Debes tener al menos 18 años cumplidos al momento de la solicitud.</li>
            <li><strong>Licencia de Enseñanza Media:</strong> Es obligatorio contar con el certificado de 4° medio aprobado (reconocido por el Mineduc).</li>
            <li><strong>Nacionalidad:</strong> Chilenos o extranjeros con permanencia definitiva o permiso de trabajo vigente.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            2. Acreditación de Experiencia Laboral (El Pilar Crítico)
          </h2>
          <p>
            Según el Decreto Supremo N° 466, el auxiliar de farmacia se valida mediante la práctica. No basta con haber trabajado; la experiencia debe estar certificada formalmente:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Tiempo Mínimo:</strong> Debes acreditar al menos <strong>1 año de desempeño efectivo</strong> en una farmacia legalmente constituida.</li>
            <li><strong>Certificación del Director Técnico:</strong> Esta experiencia debe estar respaldada por un certificado firmado por el Químico Farmacéutico (DT) del establecimiento.</li>
            <li><strong>Funciones Válidas:</strong> El certificado debe indicar que realizaste labores de bodegaje, reposición de medicamentos y apoyo en la dispensación bajo supervisión.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 mt-12">
            3. Trámite ante la SEREMI de Salud
          </h2>
          <p>
            Con tus certificados en mano, el proceso continúa en la plataforma digital <strong>ASDigital (SEREMI en Línea)</strong>:
          </p>
          <ul className="list-disc pl-8 space-y-3">
            <li><strong>Pago de Aranceles:</strong> Deberás cancelar el derecho a examen (aprox. $19.100) y, tras aprobar, el registro en el sistema (aprox. $47.600).</li>
            <li><strong>Examen de Competencia:</strong> La autoridad te citará a una evaluación técnica que cubre legislación, manejo de recetas y cadena de frío.</li>
          </ul>

          <div className="mt-16 bg-blue-600 p-10 rounded-[2.5rem] text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4 italic">¿Quieres asegurar tu credencial?</h3>
            <p className="text-blue-100 mb-8">
              Prepara tu evaluación con contenido diseñado específicamente para el examen de este año.
            </p>
            <Link 
              href="/blog/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Ver GUÍA DEL EXAMEN SEREMI
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
