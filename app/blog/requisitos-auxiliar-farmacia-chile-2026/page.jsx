import Link from 'next/link';

export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Guía completa sobre los requisitos legales, académicos y laborales para obtener tu credencial ante la SEREMI.',
};

export default function RequisitosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <article className="max-w-4xl mx-auto">
        <nav className="mb-8 font-bold">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
            ← Volver al Blog
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
            Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "La acreditación de la SEREMI es el único camino legal para trabajar como auxiliar. Aquí te explicamos cómo conseguirla paso a paso como colegas."
          </p>
        </header>

        <div className="space-y-12 text-lg leading-relaxed text-slate-700">
          <section>
            <p>
              Hola colega. Si estás leyendo esto, es porque ya decidiste dar el paso para formalizar tu carrera en el mundo farmacéutico. En Chile, trabajar en una farmacia no es solo "despachar cajas"; es una labor sanitaria crítica. Para el proceso de enero 2026, la autoridad ha digitalizado casi todo, pero las exigencias del <strong>Decreto 466</strong> siguen siendo el corazón de nuestra validación.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Hitos de Formación Académica</h2>
          <p>
            El primer gran filtro es tu formación base. La ley exige que el personal que asiste en la dispensación tenga un nivel educativo que garantice la comprensión de las normativas.
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Licencia de Enseñanza Media:</strong> Debes contar con tu certificado de 4° medio aprobado. Tip de colega: Descárgalo directamente desde el portal de Certificados de MINEDUC para que sea el documento oficial con código de verificación.</li>
            <li><strong>Validación de Estudios Extranjeros:</strong> Si estudiaste fuera de Chile, tu título debe estar debidamente apostillado y reconocido por el Ministerio de Educación chileno. Sin este reconocimiento legal, el portal ASDigital rechazará tu carpeta de inmediato.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Experiencia Práctica: Los 12 Meses Críticos</h2>
          <p>
            Esta es la parte donde muchos se confunden. No basta con haber trabajado en una farmacia; debes demostrar que aprendiste el oficio bajo la tutela de un profesional.
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Checklist del Certificado de Práctica:</h3>
            <ul className="space-y-3 text-base">
              <li>✅ <strong>Firma del Q.F.:</strong> El documento debe ser emitido y firmado por el Químico Farmacéutico (Director Técnico) del local.</li>
              <li>✅ <strong>Vigencia:</strong> Debe acreditar exactamente 1 año (o 12 meses) de práctica efectiva.</li>
              <li>✅ <strong>Funciones Detalladas:</strong> Debe mencionar explícitamente que realizaste labores de recepción, almacenamiento, reposición y apoyo en la dispensación.</li>
              <li>✅ <strong>Identificación del Local:</strong> Debe incluir el RUT de la farmacia y la resolución sanitaria que autoriza su funcionamiento.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">El Examen de Competencia SEREMI</h2>
          <p>
            Una vez que tu carpeta sea aprobada en el portal de la SEREMI, recibirás tu citación. Este examen es el que separa a los aficionados de los profesionales de la salud.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl">
              <h4 className="font-bold text-blue-600 mb-2">Temas Clave de Legislación</h4>
              <p className="text-sm">Dominio total del <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline">Decreto 466</Link>, tipos de recetas (Cheque, Retenida, Simple) y vigencia de las mismas.</p>
            </div>
            <div className="p-6 bg-white border-2 border-slate-100 rounded-2xl">
              <h4 className="font-bold text-blue-600 mb-2">Manejo Técnico</h4>
              <p className="text-sm">Cadena de frío (2°C a 8°C), almacenamiento de sustancias controladas y farmacovigilancia básica.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Costos y Aranceles 2026</h2>
          <p>Ten en cuenta que el proceso administrativo tiene costos asociados que se pagan directamente en la plataforma ministerial:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 rounded-tl-xl">Concepto</th>
                  <th className="p-4 rounded-tr-xl">Valor Estimado (UTM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-4 font-medium">Derecho a Examen de Competencia</td>
                  <td className="p-4">~ $19.500 CLP</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Inscripción en Registro Nacional</td>
                  <td className="p-4">~ $48.000 CLP</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Emisión de Credencial Física</td>
                  <td className="p-4">~ $29.000 CLP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Consejos Finales para tu Postulación</h2>
          <p>
            Como alguien que ya pasó por esto, te doy tres consejos que te ahorrarán meses de espera:
          </p>
          <ol className="list-decimal pl-8 space-y-4 font-medium">
            <li><strong>Escanea en alta resolución:</strong> El sistema de la SEREMI suele rechazar documentos borrosos. Usa un escáner real, no solo fotos del celular.</li>
            <li><strong>Revisa tu Clave Única:</strong> Todo el trámite en el portal ASDigital requiere Clave Única activa. Ten tus accesos a mano.</li>
            <li><strong>No esperes a última hora:</strong> Las fechas de examen se llenan rápido. Postula apenas cumplas tus 12 meses de práctica.</li>
          </ol>

          <div className="mt-16 bg-blue-600 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-3xl font-bold text-white mb-6">¿Preparado para el desafío de enero?</h3>
            <p className="text-blue-100 mb-10 text-lg">
              El camino es exigente, pero la recompensa de ser un profesional acreditado vale cada minuto de estudio. ¡Nos vemos en el mostrador!
            </p>
            <Link 
              href="/blog/examen-competencia-seremi-2025"
              className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Ver Guía de Examen SEREMI 2025
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
