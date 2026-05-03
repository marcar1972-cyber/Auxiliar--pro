import { Metadata } from 'next';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preparación Técnica: Conceptos clave para tu examen | AuxiliarPro',
  description: 'Farmacología, buenas prácticas y dispensación segura. Conoce los pilares que la SEREMI evalúa en el examen de competencias para Auxiliar de Farmacia.',
};

export default function PreparacionTecnicaPost() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Encabezado */}
        <header className="bg-[#003366] px-6 sm:px-10 py-12 text-white">
          <span className="inline-block px-3 py-1 bg-[#28a745] text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
            Preparación Técnica
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Preparación Técnica: Conceptos clave para tu examen
          </h1>
        </header>

        {/* NAVEGACIÓN INVERSA SUPERIOR */}
        <div className="px-6 sm:px-10 py-4 bg-slate-50 border-b border-slate-100">
          <Link href="/como-ser-auxiliar-farmacia" className="text-emerald-700 hover:text-emerald-800 font-bold text-sm flex items-center gap-1 transition-colors">
             <ChevronLeft size={16} /> Volver a la Guía Principal: Cómo ser Auxiliar
          </Link>
        </div>

        {/* Contenido */}
        <div className="px-6 sm:px-10 py-10 space-y-8">
          <p className="text-lg text-slate-600 leading-relaxed">
            El examen de la SEREMI no busca que seas un Químico Farmacéutico, pero sí mide estrictamente tus conocimientos prácticos para trabajar con seguridad en el mesón. Aquí están los pilares fundamentales que debes dominar:
          </p>

          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="shrink-0 mt-1 bg-[#f0fdf4] text-[#28a745] p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-[#003366]">Farmacología Básica</h3>
                <p className="text-slate-600 mt-1">Debes conocer la diferencia entre principio activo y nombre de fantasía, clasificar las formas farmacéuticas (sólidas, líquidas, semisólidas) y comprender las distintas vías de administración.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="shrink-0 mt-1 bg-[#f0fdf4] text-[#28a745] p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-[#003366]">Buenas Prácticas</h3>
                <p className="text-slate-600 mt-1">Manejo riguroso de la cadena de frío (refrigeración) y los protocolos exactos para el almacenamiento de medicamentos sujetos a control legal (estupefacientes y psicotrópicos).</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="shrink-0 mt-1 bg-[#f0fdf4] text-[#28a745] p-2 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-[#003366]">Dispensación Segura</h3>
                <p className="text-slate-600 mt-1">Interpretación correcta de los distintos tipos de recetas, verificación de fechas de vencimiento y revisión del registro sanitario (Reg. ISP N°).</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 bg-[#f8fafc] p-8 rounded-xl border border-[#28a745] text-center">
            <h3 className="text-2xl font-bold text-[#003366] mb-3">¿Quieres estudiar esto a fondo y poner a prueba tus conocimientos?</h3>
            <p className="text-slate-600 mb-6">Nuestra Academia Digital incluye módulos específicos y simuladores con casos reales de farmacia para que apruebes sin problemas.</p>
            <Link href="/quiz" className="inline-block px-6 py-3 bg-[#28a745] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors">
              👉 Ingresa a la Academia y prueba nuestro simulador inicial aquí
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}