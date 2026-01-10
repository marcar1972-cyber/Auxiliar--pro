import Link from 'next/link';

// 🟢 1. METADATOS SEO CORREGIDOS (Solución al Reporte PDF)
export const metadata = {
  title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
  description: 'Guía detallada sobre los requisitos legales, académicos y laborales para obtener tu credencial ante la SEREMI durante el año 2026.',
  keywords: ["requisitos auxiliar farmacia", "carnet seremi", "examen competencia farmacia", "decreto 466 requisitos"],
  authors: [{ name: "AuxiliarPro" }],
  // Canonical individual para esta página específica
  alternates: {
    canonical: './', 
  },
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
          {/* H1 Coincidente con Title (Crucial para SEO) */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight text-slate-900">
            Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)
          </h1>
          <p className="text-xl text-slate-600 italic leading-relaxed">
            "Colega, el camino a la acreditación sanitaria es un proceso de constancia. Aquí tienes la hoja de ruta técnica para que tu postulación sea exitosa en cualquier fecha de este 2026."
          </p>
        </header>

        <div className="space-y-12 text-lg leading-relaxed text-slate-700">
          <section>
            <p>
              Obtener la credencial de Auxiliar de Farmacia es el hito más importante para nuestra carrera en el rubro. No se trata solo de un trámite administrativo, sino de la validación legal que nos permite ejercer bajo la normativa del <strong>Decreto Supremo N° 466</strong>. Ya sea que rindas tu examen en marzo, julio o diciembre de 2026, los requisitos base se mantienen firmes para garantizar que el personal de farmacia posea las competencias necesarias para la seguridad del paciente.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Requisitos Académicos y Personales</h2>
          <p>
            Antes de pensar en el examen, debemos asegurar que nuestra base documental cumpla con lo que la autoridad sanitaria exige para abrir nuestro expediente en el portal ASDigital:
          </p>
          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Enseñanza Media Completa:</strong> Es el requisito académico de entrada. Debes contar con tu licencia original. Si la perdiste, puedes obtenerla de forma gratuita en el portal de certificados del MINEDUC con tu RUT.</li>
            <li><strong>Cédula de Identidad Vigente:</strong> Para colegas extranjeros, es vital contar con la cédula chilena vigente y, en caso de estar en trámite, los documentos que acrediten la permanencia definitiva o el permiso de trabajo correspondiente.</li>
            <li><strong>Clave Única:</strong> Absolutamente todos los trámites ante la SEREMI se realizan hoy a través de esta identidad digital. Asegúrate de tenerla activa y con tus datos actualizados.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Experiencia Laboral Comprobable</h2>
          <p>
            El sistema chileno valida al auxiliar a través de la práctica supervisada. La ley exige demostrar que hemos estado "en la cancha" aprendiendo los procesos críticos de la farmacia:
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <p className="mb-4"><strong>El Certificado de Práctica:</strong> Este documento es el corazón de tu postulación. Debe ser emitido por el Químico Farmacéutico (Director Técnico) del local donde trabajas y debe detallar:</p>
            <ul className="space-y-3 text-base italic">
              <li>• Un periodo mínimo de 12 meses de desempeño efectivo.</li>
              <li>• Labores de recepción, almacenamiento, reposición y apoyo en la dispensación bajo supervisión.</li>
              <li>• RUT y firma del Director Técnico, además del timbre de la farmacia con su respectiva resolución sanitaria.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Proceso de Postulación en SEREMI en Línea</h2>
          <p>
            Una vez que reúnas tus papeles, el proceso se traslada a la plataforma <strong>ASDigital</strong>. Es fundamental que los escaneos sean en alta resolución; la autoridad suele rechazar carpetas donde los textos no son legibles.
          </p>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-3xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-sm uppercase tracking-wider">
                  <th className="p-5 rounded-tl-2xl">Etapa del Trámite</th>
                  <th className="p-5 rounded-tr-2xl">Detalle Técnico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Ingreso de Solicitud</td>
                  <td className="p-5">Carga de licencia de 4° medio, cédula y certificado de práctica.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Pago de Arancel</td>
                  <td className="p-5">Aprox. $19.100 para derecho a examen (valor referencial 2026).</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Revisión de Carpeta</td>
                  <td className="p-5">La autoridad valida que los documentos cumplan con el Decreto 466.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-semibold text-slate-800">Citación</td>
                  <td className="p-5">Notificación de fecha y lugar para rendir la evaluación técnica.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Temario Técnico para la Evaluación</h2>
          <p>
            No importa en qué mes te toque rendir durante este 2026, el examen siempre evaluará tu capacidad para garantizar la seguridad en el uso de medicamentos. Los ejes principales son:
          </p>

          <ul className="list-disc pl-8 space-y-4">
            <li><strong>Legislación Farmacéutica:</strong> Dominio total del <Link href="/blog/que-es-el-decreto-466" className="text-blue-600 underline font-bold">DECRETO 466</Link>. Especial énfasis en tipos de establecimientos y roles del personal.</li>
            <li><strong>Manejo de Recetas:</strong> Diferencia entre receta simple, retenida y cheque. Tiempos de vigencia y custodia de psicotrópicos.</li>
            <li><strong>Bioequivalencia:</strong> Nuestra obligación legal de informar sobre las alternativas certificadas.</li>
            <li><strong>Cadena de Frío:</strong> Rangos de temperatura (2°C a 8°C) y protocolos de almacenamiento para productos termosensibles.</li>
            <li><strong>Farmacovigilancia Básica:</strong> Notificación de sospechas de reacciones adversas (RAM).</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 border-b-4 border-blue-600 pb-2">Consejos de Colega para el Día de la Evaluación</h2>
          <p>
            Como alguien que ya pasó por los nervios de estar frente a la comisión evaluadora, te comparto estos consejos prácticos para tu fecha de examen este 2026:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600">
              <h4 className="font-bold mb-2">Sobre el Decreto 466</h4>
              <p className="text-sm">No intentes memorizar todo el reglamento. Enfócate en las prohibiciones (lo que NO podemos hacer) y en los plazos legales de las recetas. Eso es lo que más preguntan.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-600">
              <h4 className="font-bold mb-2">Seguridad en la Respuesta</h4>
              <p className="text-sm">Si no sabes algo, responde desde la seguridad del paciente. "Si tengo duda con una dosis, consulto con mi Director Técnico" es siempre una respuesta profesional y correcta.</p>
            </div>
          </div>

          <p>
            Recuerda que si aún no tienes clara la diferencia en las responsabilidades legales entre nosotros y los técnicos titulados, puedes revisar la guía sobre la <Link href="/blog/diferencia-auxiliar-tecnico-farmacia" className="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</Link>.
          </p>

          <div className="mt-16 bg-slate-900 p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h3 className="text-3xl font-bold text-white mb-6">¿Preparado para tu fecha de examen este 2026?</h3>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              El carnet de la SEREMI es la llave que profesionaliza tu labor y te permite acceder a mejores condiciones salariales. ¡Mucho éxito en tu proceso!
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/blog/examen-competencia-seremi-2025" 
                className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-500 transition-all shadow-lg"
              >
                Guía de Estudio del Examen
              </Link>
              <Link 
                href="/blog/cuanto-gana-auxiliar-farmacia-chile" 
                className="inline-block bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all shadow-lg"
              >
                Ver Proyección de Sueldos
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
