import { Metadata } from 'next';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Entiende la Ley: Marco Regulatorio para Auxiliares | AuxiliarPro',
  description: 'Conoce la normativa legal, Decreto 466 y la Ley de Fármacos. Guía esencial para auxiliares de farmacia en Chile para evitar multas y sanciones.',
};

export default function MarcoRegulatorioPost() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Encabezado */}
        <header className="bg-[#003366] px-6 sm:px-10 py-12 text-white">
          <span className="inline-block px-3 py-1 bg-[#28a745] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            Normativa Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Entiende la Ley: Marco regulatorio para Auxiliares
          </h1>
          <p className="text-blue-100 text-lg">
            Todo lo que necesitas saber sobre el Decreto 466 y la Ley de Fármacos para ejercer con seguridad en Chile.
          </p>
        </header>

        {/* NAVEGACIÓN INVERSA SUPERIOR */}
        <div className="px-6 sm:px-10 py-4 bg-slate-50 border-b border-slate-100">
          <Link href="/como-ser-auxiliar-farmacia" className="text-emerald-700 hover:text-emerald-800 font-bold text-sm flex items-center gap-1 transition-colors">
             <ChevronLeft size={16} /> Volver a la Guía Principal: Cómo ser Auxiliar
          </Link>
        </div>

        {/* Contenido */}
        <div className="px-6 sm:px-10 py-10 space-y-10">
          <p className="text-lg text-slate-600 leading-relaxed">
            Como auxiliar de farmacia, eres una pieza fundamental en el sistema de salud. Sin embargo, trabajar con medicamentos implica una gran responsabilidad legal. No conocer las reglas no solo pone en riesgo la salud de los pacientes, sino que puede exponer a la farmacia y a ti mismo a graves sanciones y multas según el Libro Décimo del Código Sanitario.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-5 border-b-2 border-slate-100 pb-2">
              El rol del Auxiliar según el Decreto 466
            </h2>
            <p className="text-slate-600 mb-6">
              El Reglamento de Farmacias (Decreto 466) es claro: el auxiliar es la persona autorizada sanitariamente para trabajar bajo la supervisión directa del Director Técnico (Químico Farmacéutico).
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#f0fdf4] p-6 rounded-xl border-l-4 border-[#28a745]">
                <h3 className="text-lg font-bold text-[#003366] mb-3">¿Qué tienes permitido hacer?</h3>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li><strong>Recepción y bodegaje:</strong> Participar en el manejo, reposición y control de existencias y fechas de vencimiento.</li>
                  <li><strong>Despacho:</strong> Recibir recetas, revisar que cumplan las normas y entregar el medicamento según lo indicado.</li>
                  <li><strong>Etiquetado:</strong> Confeccionar las etiquetas con las instrucciones del médico para el paciente.</li>
                  <li><strong>Educación:</strong> Informar sobre el uso racional de medicamentos de venta directa.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-red-900 mb-3">¿Qué está prohibido?</h3>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  <li><strong>Funciones de Dirección Técnica:</strong> No puedes realizar las tareas exclusivas del Químico Farmacéutico ni supervisar el recetario magistral.</li>
                  <li><strong>Independencia total:</strong> Nunca debes despachar productos sujetos a control legal (psicotrópicos o estupefacientes) sin la supervisión o firma del farmacéutico.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-5 border-b-2 border-slate-100 pb-2">
              Ley de Fármacos: Responsabilidades en el mesón
            </h2>
            <p className="text-slate-600 mb-6">
              La Ley de Fármacos trajo cambios importantes que todo auxiliar debe dominar para evitar infracciones:
            </p>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <span className="text-[#28a745] font-bold mr-3 mt-1">✓</span>
                <span><strong>Bioequivalencia obligatoria:</strong> Tienes la responsabilidad de informar al paciente sobre la existencia de alternativas bioequivalentes (con el sello amarillo). Si el paciente lo solicita, se debe dispensar el bioequivalente en lugar del de marca.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#28a745] font-bold mr-3 mt-1">✓</span>
                <span><strong>Transparencia de precios:</strong> Los precios deben estar indicados en el envase de cada producto y ser visibles al público sin necesidad de preguntar.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#28a745] font-bold mr-3 mt-1">✓</span>
                <span><strong>Prohibición de incentivos:</strong> Está estrictamente prohibido recibir pagos o premios ("canela") por privilegiar la venta de una marca sobre otra.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#28a745] font-bold mr-3 mt-1">✓</span>
                <span><strong>Fraccionamiento:</strong> Si la farmacia cuenta con el servicio, se puede entregar la dosis exacta recetada, siempre bajo la supervisión del Director Técnico.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#003366] mb-5 border-b-2 border-slate-100 pb-2">
              Diferencia entre tipos de recetas
            </h2>
            <p className="text-slate-600 mb-6">
              Para evitar multas, debes reconocer qué tipo de receta tienes en la mano antes de entregar el producto:
            </p>
            <div className="space-y-4">
              <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-[#003366] text-lg block mb-1">Venta Directa (VD)</strong> 
                <span className="text-slate-600">No requieren receta médica y pueden estar en góndolas al alcance del público.</span>
              </div>
              <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-[#003366] text-lg block mb-1">Receta Simple (R)</strong> 
                <span className="text-slate-600">Es la orden común de un profesional habilitado. Se usa para la mayoría de los fármacos y tiene una validez general de 30 días.</span>
              </div>
              <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-[#003366] text-lg block mb-1">Receta Retenida (RR)</strong> 
                <span className="text-slate-600">La farmacia debe archivar y guardar el documento físico (por ejemplo, para antibióticos o ciertos psicotrópicos de la Lista IV). Algunas requieren control de stock en libros oficiales.</span>
              </div>
              <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-[#003366] text-lg block mb-1">Receta Cheque (RCH)</strong> 
                <span className="text-slate-600">Documento oficial para productos de alto control como estupefacientes. Se extiende en formularios especiales del Servicio de Salud y jamás puede despacharse si tiene enmiendas o espacios en blanco.</span>
              </div>
            </div>
          </section>

          <section className="bg-[#f8fafc] p-8 rounded-xl border-l-4 border-[#003366]">
            <h2 className="text-xl font-bold text-[#003366] mb-4">
              El conocimiento legal es tu mejor seguro
            </h2>
            <p className="text-slate-600 mb-4">
              Entender estas normativas no es solo para "evitar problemas" con el ISP o la SEREMI. Tu autorización sanitaria para ejercer depende de que cumplas con la idoneidad y el conocimiento técnico exigido.
            </p>
            <p className="text-slate-600 mb-6">
              Si se acredita una infracción grave, la autoridad puede suspender o cancelar tu autorización para trabajar como auxiliar. Estar al día con la ley protege tu carrera y garantiza que la farmacia funcione como un verdadero centro de salud.
            </p>
            
            {/* CTA INFERIOR */}
            <Link href="/como-ser-auxiliar-farmacia" className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#002244] transition-colors">
               <ChevronLeft size={18} /> Volver a la Guía Principal
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
}