import Link from 'next/link';

export const metadata = {
  title: '[GUÍA 2026] Preguntas Examen SEREMI Farmacología y Legislación',
  description: 'Guía oficial para el examen de Auxiliar de Farmacia. Requisitos, aranceles actualizados y temario legal (Decretos 466, 404, 405 y Ley de Fármacos).',
};

export default function FarmacologiaHub() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Guía Examen SEREMI: Farmacología y Legislación</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Preparación oficial basada en los Decretos del MINSAL, Ley de Fármacos y requisitos de la Autoridad Sanitaria para la certificación de Auxiliar de Farmacia.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        {/* Roadmap Visual: Requisitos Oficiales (Decreto 38 y Manual SEREMI) */}
        <section>
          <h2 className="text-2xl font-black text-[#003366] mb-8 uppercase tracking-widest">Requisitos y Trámites Oficiales</h2>
          <div className="relative border-l-4 border-[#28a745] ml-4 space-y-12">
            {[
              { 
                step: '01', 
                title: 'Documentación y Experiencia (Decreto 38)', 
                desc: 'Debes presentar: Certificado de enseñanza media (4º medio), foto tamaño carnet, y un certificado emitido por el Químico Farmacéutico que acredite al menos 1 año de desempeño efectivo (junto con copia de contrato).' 
              },
              { 
                step: '02', 
                title: 'Ingreso en Línea y Derecho a Examen', 
                desc: 'El trámite se realiza en la plataforma Seremi en línea con Clave Única. El arancel inicial por el Derecho a Examen es de $19.100.' 
              },
              { 
                step: '03', 
                title: 'Evaluación de Competencias', 
                desc: 'Rendición del examen teórico para verificar tus conocimientos. Las materias principales incluyen dispensación, almacenamiento y normativa legal vigente.' 
              },
              { 
                step: '04', 
                title: 'Resolución y Credencial', 
                desc: 'Tras aprobar, se debe cancelar la Inscripción en el Registro ($47.600) y la emisión de la Credencial o Carnet ($29.700) para ejercer legalmente.' 
              }
            ].map((item) => (
              <div key={item.step} className="relative pl-8">
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#003366]">{item.title}</h3>
                <p className="text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Golden Snippets: Temario Legal (Ficha Ley Fármacos y Decretos) */}
        <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-black text-[#003366] mb-6 uppercase tracking-widest">Preguntas Frecuentes del Temario Legal</h2>
          
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">¿Cuáles son las condiciones de venta de medicamentos?</h3>
              <p className="text-slate-600">
                La legislación chilena distingue estrictamente tres categorías principales que el auxiliar debe dominar al dispensar: venta directa, venta con receta médica, y venta con receta médica retenida.
              </p>
            </div>

            <div className="border-b border-slate-100 pb-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">¿Qué exige la ley respecto a la Bioequivalencia?</h3>
              <p className="text-slate-600">
                Un medicamento bioequivalente contiene el mismo principio activo y es similar en calidad, eficacia y seguridad. Por ley, las farmacias deben informar al paciente sobre su existencia y mantener a disposición del público el listado de estos productos, además de cumplir con el petitorio mínimo obligatorio.
              </p>
            </div>

            <div className="pb-2">
              <h3 className="text-lg font-bold text-slate-800 mb-2">¿Quién es el responsable de la dispensación?</h3>
              <p className="text-slate-600">
                Según la normativa, el Químico Farmacéutico debe estar presente durante todo el horario de funcionamiento. El Auxiliar de Farmacia actúa asistiendo en la dispensación y venta, bajo la supervisión directa y responsabilidad del Director Técnico.
              </p>
            </div>
          </div>
        </section>

        {/* Hub de Enlaces (Navegación a los Clusters) */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-3 mb-2">
            <h2 className="text-2xl font-black text-[#003366] uppercase tracking-widest">Centro de Conocimiento</h2>
            <p className="text-slate-600 mt-2">Profundiza en cada área de tu preparación con nuestras guías especializadas:</p>
          </div>
          
          {[
            { title: 'Recetas Retenidas', desc: 'Diferencias entre DTO 404 y DTO 405.', link: '/blog/receta-cheque-retenida' },
            { title: 'Trámites SEREMI', desc: 'Guía paso a paso en la plataforma.', link: '/blog/tramites-seremi' },
            { title: 'Ley de Fármacos', desc: 'Bioequivalencia y petitorio mínimo.', link: '/blog/ley-farmacos' }
          ].map((card) => (
            <Link 
              href={card.link} 
              key={card.title} 
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#28a745] transition-all shadow-sm flex flex-col"
            >
              <h3 className="text-xl font-bold text-[#003366] mb-2">{card.title} →</h3>
              <p className="text-slate-500 text-sm flex-grow">{card.desc}</p>
            </Link>
          ))}
        </section>

        {/* CTA FINAL -> Apuntando al Lobby (/quiz) */}
        <section className="bg-gradient-to-br from-[#002244] to-[#003366] p-10 rounded-3xl border border-slate-700 text-center shadow-xl">
          <h2 className="text-3xl font-black text-white mb-4">¿Listo para asegurar tu examen?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-lg mx-auto">
            No estudies a ciegas ni arriesgues el pago de tu derecho a examen. Únete a AuxiliarPro App y practica con preguntas estructuradas en el marco legal vigente.
          </p>
          <Link href="/quiz" className="inline-block px-8 py-4 bg-[#28a745] text-white font-black rounded-xl hover:bg-[#218838] transition-colors shadow-lg">
            Ir al Simulador de Entrenamiento
          </Link>
        </section>

      </div>
    </main>
  );
}