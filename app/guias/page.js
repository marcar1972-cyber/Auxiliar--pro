import Link from "next/link";
import { BookOpen, Pill, ArrowRight } from "lucide-react";

export const metadata = {
  title: 'Guías de Estudio | AuxiliarPro',
  description: 'Material de estudio resumido y enfocado en el examen de competencia: Decreto 466, Decreto 3 y más.',
};

export default function GuiasIndex() {
  const guias = [
    {
      slug: "decreto-466-reglamento-farmacias",
      title: "Reglamento de Farmacias (Decreto 466)",
      desc: "Roles, infraestructura, libros obligatorios y tipos de establecimientos.",
      icon: <BookOpen size={40} className="text-blue-600" />,
      color: "blue"
    },
    {
      slug: "decreto-3-control-productos",
      title: "Control de Productos (Decreto 3)",
      desc: "Bioequivalencia, registro sanitario, cadena de frío y envases.",
      icon: <Pill size={40} className="text-purple-600" />,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            Biblioteca
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Material de <span className="text-blue-600">Estudio</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Resúmenes ejecutivos diseñados para estudiar rápido y aprobar tu examen de competencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guias.map((guia) => (
            <Link 
              key={guia.slug}
              href={`/guias/${guia.slug}`}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group flex flex-col items-start hover:-translate-y-1"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-${guia.color}-50`}>
                {guia.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                {guia.title}
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {guia.desc}
              </p>
              <div className="mt-auto flex items-center gap-2 font-black text-sm uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                Leer Guía <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
