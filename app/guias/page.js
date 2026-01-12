import Link from "next/link";
import { BookOpen, Pill, Lock, ArrowRight, Library, GraduationCap } from "lucide-react";

export const metadata = {
  title: 'Guías de Estudio Auxiliar de Farmacia Chile | Decretos 466, 404 y 3',
  description: 'Material de estudio gratuito para el examen de competencia de Auxiliar de Farmacia (Seremi de Salud). Descarga resúmenes del Decreto 466, Decreto 404 (Estupefacientes) y Decreto 3.',
  keywords: ['auxiliar de farmacia', 'examen seremi salud', 'decreto 466 resumen', 'decreto 404 estupefacientes', 'decreto 3 farmacia', 'guia estudio farmacia chile'],
};

export default function GuiasIndex() {
  const guias = [
    {
      slug: "decreto-466-reglamento-farmacias",
      title: "Reglamento de Farmacias (DS 466)",
      desc: "El pilar fundamental. Aprende sobre roles del DT, infraestructura, libros obligatorios y tipos de establecimientos.",
      icon: <BookOpen size={40} className="text-blue-600" />,
      color: "blue"
    },
    {
      // 🟢 AGREGADO: Decreto 404
      slug: "decreto-404-estupefacientes",
      title: "Reglamento de Estupefacientes (DS 404)",
      desc: "Normativa crítica sobre drogas de alto control. Receta Cheque, almacenamiento seguro y prohibiciones.",
      icon: <Lock size={40} className="text-red-600" />,
      color: "red"
    },
    {
      slug: "decreto-3-control-productos",
      title: "Control de Productos (DS 3)",
      desc: "Domina la Bioequivalencia, el Registro Sanitario ISP, la Cadena de Frío y los tipos de envases.",
      icon: <Pill size={40} className="text-purple-600" />,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SEO OPTIMIZADO */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                <Library size={14} /> Biblioteca Oficial 2026
             </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Guías de Estudio para <br/>
            <span className="text-blue-600">Auxiliares de Farmacia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Prepara tu examen de competencia ante la <strong>SEREMI de Salud</strong> con nuestros resúmenes normativos. 
            Contenido actualizado, fácil de leer y listo para <strong>descargar en PDF</strong>.
          </p>
        </div>

        {/* GRILLA DE GUÍAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {guias.map((guia) => (
            <Link 
              key={guia.slug}
              href={`/guias/${guia.slug}`}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col items-start hover:-translate-y-2 h-full"
            >
              <div className={`mb-6 p-5 rounded-3xl bg-${guia.color}-50 group-hover:scale-110 transition-transform duration-300`}>
                {guia.icon}
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                {guia.title}
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm flex-grow">
                {guia.desc}
              </p>
              <div className="mt-auto w-full">
                {/* 🟢 LÓGICA DE COLORES ACTUALIZADA (Soporta blue, red y purple) */}
                <span className={`block w-full text-center py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-colors ${
                    guia.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 
                    guia.color === 'red' ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white' :
                    'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                }`}>
                  Leer Resumen y Quiz
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* SECCIÓN INFORMATIVA SEO (Footer de contenido) */}
        <div className="border-t border-slate-200 pt-16 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
                <GraduationCap className="text-slate-400"/>
                ¿Qué debo estudiar para el examen?
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
                El examen de competencia para Auxiliar de Farmacia en Chile evalúa principalmente el conocimiento sobre el <strong>Código Sanitario</strong>, específicamente el <strong>Decreto 466</strong> (Reglamento de Farmacias), el <strong>Decreto 404</strong> (Psicotrópicos y Estupefacientes) y el <strong>Decreto 3</strong> (Productos Farmacéuticos). Nuestras guías resumen estos textos legales en un lenguaje simple para facilitar tu aprendizaje.
            </p>
        </div>

      </div>
    </div>
  );
}
