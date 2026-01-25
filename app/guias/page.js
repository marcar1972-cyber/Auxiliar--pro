import Link from "next/link";
import { BookOpen, Pill, Lock, ArrowRight, Library, GraduationCap, BrainCircuit, Store, Calculator, Microscope, Flame } from "lucide-react";

export const metadata = {
  title: 'Guías de Estudio Auxiliar de Farmacia Chile | Decretos, Posología y Farmacología',
  description: 'Material de estudio gratuito para el examen de competencia de Auxiliar de Farmacia (Seremi de Salud). Descarga resúmenes de la Ley 20.724, Decretos 466, 404, 405, 3, Guía de Posología y Farmacología.',
  keywords: ['auxiliar de farmacia', 'examen seremi salud', 'ley 20724 resumen', 'decreto 466', 'decreto 404', 'decreto 405', 'decreto 3', 'calculo de dosis', 'posologia', 'farmacologia ladme', 'aines ibuprofeno', 'hipertension diabetes'],
};

export default function GuiasIndex() {
  const guias = [
    {
      slug: "ley-20724-farmacos-1",
      title: "Ley de Fármacos I (20.724)",
      desc: "La farmacia como Centro de Salud. Prohibición de la canela, bioequivalencia obligatoria y fraccionamiento.",
      icon: <Store size={40} className="text-teal-600" />, 
      color: "teal"
    },
    {
      slug: "decreto-466-reglamento-farmacias",
      title: "Reglamento de Farmacias (DS 466)",
      desc: "El pilar fundamental. Aprende sobre roles del DT, infraestructura, libros obligatorios y tipos de establecimientos.",
      icon: <BookOpen size={40} className="text-blue-600" />,
      color: "blue"
    },
    {
      slug: "decreto-404-estupefacientes",
      title: "Reglamento de Estupefacientes (DS 404)",
      desc: "Normativa crítica sobre drogas de alto control. Receta Cheque, almacenamiento seguro y prohibiciones.",
      icon: <Lock size={40} className="text-red-600" />,
      color: "red"
    },
    {
      slug: "decreto-405-psicotropicos",
      title: "Reglamento de Psicotrópicos (DS 405)",
      desc: "Todo sobre las Listas I, II, III y IV. Estrellas verdes, recetas retenidas y control de benzodiazepinas.",
      icon: <BrainCircuit size={40} className="text-emerald-600" />,
      color: "emerald"
    },
    {
      slug: "decreto-3-control-productos",
      title: "Control de Productos (DS 3)",
      desc: "Domina la Bioequivalencia, el Registro Sanitario ISP, la Cadena de Frío y los tipos de envases.",
      icon: <Pill size={40} className="text-purple-600" />,
      color: "purple"
    },
    {
      slug: "guia-posologia",
      title: "Guía Maestra de Posología",
      desc: "Aprende a calcular dosis exactas. Regla de tres, equivalencias de gotas/ml y ejercicios prácticos.",
      icon: <Calculator size={40} className="text-indigo-600" />, 
      color: "indigo"
    },
    {
      slug: "farmacologia-1",
      title: "Farmacología: Fundamentos",
      desc: "Lo básico que debes saber. Sistema LADME, Farmacodinamia (Receptores) y Glosario Técnico.",
      icon: <Microscope size={40} className="text-cyan-600" />, 
      color: "cyan"
    },
    {
      // 🟢 NUEVO: Guía Unificada de Alta Rotación (Reemplaza a Dolor y Cardio)
      slug: "alta-rotacion",
      title: "Farmacología: Alta Rotación",
      desc: "El 80% de la venta diaria. Dolor (AINEs), Respiratorio (Antigripales) y Digestivo. Lo que sale todos los días.",
      icon: <Flame size={40} className="text-orange-600" />, 
      color: "orange"
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
                <span className={`block w-full text-center py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-colors ${
                    guia.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 
                    guia.color === 'red' ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white' :
                    guia.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' :
                    guia.color === 'teal' ? 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white' :
                    guia.color === 'indigo' ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' :
                    guia.color === 'cyan' ? 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white' :
                    guia.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' :
                    'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                }`}>
                  Leer Resumen y Quiz
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* SECCIÓN INFORMATIVA SEO */}
        <div className="border-t border-slate-200 pt-16 text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
                <GraduationCap className="text-slate-400"/>
                ¿Qué debo estudiar para el examen?
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
                El examen de competencia para Auxiliar de Farmacia en Chile evalúa principalmente el conocimiento sobre el <strong>Código Sanitario</strong>, la <strong>Ley 20.724</strong> (Fármacos I), el <strong>Decreto 466</strong> (Reglamento de Farmacias), los <strong>Decretos 404 y 405</strong> (Estupefacientes y Psicotrópicos) y el <strong>Decreto 3</strong> (Productos Farmacéuticos), además de nociones básicas de <strong>Cálculo de Dosis (Posología)</strong> y <strong>Farmacología General</strong>.
            </p>
        </div>

      </div>
    </div>
  );
}
