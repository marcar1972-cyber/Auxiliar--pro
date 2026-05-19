import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '[GUÍA 2026] Cómo ser Auxiliar de Farmacia en Chile: El camino paso a paso',
  description: 'Roadmap completo para convertirte en Auxiliar de Farmacia certificado. Requisitos, trámites SEREMI, marco legal y preparación técnica.',
};

export default function PillarPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Cómo ser Auxiliar de Farmacia en Chile</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">El roadmap definitivo 2026 para alcanzar tu certificación SEREMI y construir una carrera estable en el sector salud.</p>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        {/* Roadmap Visual */}
        <section>
          <h2 className="text-2xl font-black text-[#003366] mb-8 uppercase tracking-widest">El Camino Paso a Paso</h2>
          <div className="relative border-l-4 border-[#28a745] ml-4 space-y-12">
            {[
              { step: '01', title: 'Experiencia', desc: 'Acumulación de al menos 1 año de experiencia comprobable en farmacia.' },
              { step: '02', title: 'Postulación SEREMI', desc: 'Presentación de antecedentes ante la autoridad sanitaria regional.' },
              { step: '03', title: 'Examen de Competencias', desc: 'Rendición y aprobación de la evaluación técnica obligatoria.' },
              { step: '04', title: 'Registro Superintendencia', desc: 'Inscripción final en el registro de prestadores individuales.' }
            ].map((item) => (
              <div key={item.step} className="relative pl-8">
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#28a745] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#003366]">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hub de Enlaces (Navegación a los Clusters) */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-3 mb-4">
            <h2 className="text-2xl font-black text-[#003366] uppercase tracking-widest">Centro de Conocimiento</h2>
            <p className="text-slate-600 mt-2">Profundiza en cada etapa de tu preparación con nuestras guías especializadas:</p>
          </div>
          
          {[
            { title: 'Marco Regulatorio', desc: 'Entiende la Ley y el Decreto 466.', link: '/blog/marco-regulatorio' },
            { title: 'Trámites SEREMI', desc: 'Guía de postulación y Certificados.', link: '/blog/tramites-seremi' },
            { title: 'Preparación Técnica', desc: 'Conceptos clave para tu examen.', link: '/blog/preparacion-tecnica' }
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
        <section className="bg-white p-10 rounded-3xl border border-slate-200 text-center shadow-lg">
          <h2 className="text-3xl font-black text-[#003366] mb-4">¿Listo para asegurar tu examen?</h2>
          <p className="text-lg text-slate-600 mb-8">No estudies a ciegas. Únete a AuxiliarPro y accede a la formación completa diseñada para aprobar a la primera.</p>
          <Link href="/quiz" className="inline-block px-8 py-4 bg-[#28a745] text-white font-black rounded-xl hover:bg-emerald-600 transition-colors shadow-lg">
            Ir al Simulador de Entrenamiento
          </Link>
        </section>

      </div>
    </main>
  );
}