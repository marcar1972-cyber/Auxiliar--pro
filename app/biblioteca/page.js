import Link from "next/link";
import { ChevronLeft, ArrowRight, BookOpen, Scale, ThermometerSnowflake, ShieldCheck, FileText, Pill } from "lucide-react";

// 🟢 METADATOS MAGNÉTICOS (SEO)
// Esto asegura que Google mantenga y mejore el ranking de esta página
export const metadata = {
  title: 'Pack Legislativo Farmacia 2026: Guías y Normativa Oficial (Decretos 466/404)',
  description: 'No pierdas tiempo buscando. Accede al Código Sanitario, Decretos Minsal y Resúmenes Técnicos actualizados para tu examen de competencia.',
}

export default function BibliotecaPage() {
  // Lista actualizada apuntando a las NUEVAS GUÍAS INTERNAS (Sin error 404)
  const material = [
    {
      title: "Decreto Supremo 466",
      desc: "Reglamento de Farmacias. Aprende sobre infraestructura, roles del personal y prohibiciones claves.",
      icon: <Scale className="text-blue-500" />,
      link: "/guias/decreto-466-reglamento-farmacias", // ✅ Link Interno Correcto
      category: "Legislación",
      cta: "LEER REGLAMENTO"
    },
    {
      title: "Ley de Fármacos I (20.724)",
      desc: "La normativa que define a la farmacia como Centro de Salud. Bioequivalencia y Canela.",
      icon: <BookOpen className="text-emerald-500" />,
      link: "/guias/ley-20724-farmacos-1", // ✅ Link Interno Correcto
      category: "Legislación",
      cta: "VER RESUMEN LEY"
    },
    {
      title: "Decreto 404 (Estupefacientes)",
      desc: "Todo sobre Listas I, II y III. Manejo de Receta Cheque y libros de control.",
      icon: <ShieldCheck className="text-red-500" />,
      link: "/guias/decreto-404-estupefacientes", // ✅ Link Interno Correcto
      category: "Controlados",
      cta: "ESTUDIAR DECRETO"
    },
    {
      title: "Decreto 405 (Psicotrópicos)",
      desc: "Reglamento de productos psicotrópicos. Listas IV (Benzodiazepinas) y estrellas verdes.",
      icon: <ThermometerSnowflake className="text-cyan-500" />,
      link: "/guias/decreto-405-psicotropicos", // ✅ Link Interno Correcto
      category: "Controlados",
      cta: "VER GUÍA TÉCNICA"
    },
    {
      title: "Decreto 3 (Control de Productos)",
      desc: "Normativa sobre Bioequivalencia, Cadena de Frío y almacenamiento seguro.",
      icon: <FileText className="text-orange-500" />,
      link: "/guias/decreto-3-control-productos", // ✅ Link Interno Correcto
      category: "Técnico",
      cta: "LEER NORMA"
    },
    {
      title: "Fundamentos de Farmacología",
      desc: "Conceptos claves: LADME, Agonistas, Antagonistas y formas farmacéuticas.",
      icon: <Pill className="text-purple-500" />,
      link: "/guias/farmacologia-1", // ✅ Link Interno Correcto
      category: "Ciencia",
      cta: "VER CLASE"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 font-sans text-left">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <Link href="/" className="p-3 bg-white rounded-xl shadow-sm text-slate-400 hover:text-slate-900 transition-all cursor-pointer border border-slate-100 hover:border-emerald-200">
            <ChevronLeft size={24} />
          </Link>
          <div className="text-left">
            <div className="inline-block bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1 rounded-full mb-2 uppercase tracking-widest">
              Recursos Gratuitos
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Biblioteca Técnica</h1>
            <p className="text-sm text-slate-500 font-medium">
              Material oficial validado para el proceso de certificación SEREMI 2026.
            </p>
          </div>
        </header>

        {/* GRID DE CONTENIDO */}
        <div className="grid gap-4 md:grid-cols-1">
          {material.map((item, index) => (
            <Link key={index} href={item.link} className="group">
              <article className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer relative overflow-hidden">
                
                {/* Icono */}
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors">
                  {item.icon}
                </div>

                {/* Contenido */}
                <div className="flex-1 text-left relative z-10">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 block group-hover:text-emerald-500 transition-colors">
                    {item.category}
                  </span>
                  <h3 className="font-black text-slate-800 text-xl leading-tight mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-4 sm:mb-0">
                    {item.desc}
                  </p>
                </div>

                {/* Botón CTA */}
                <div className="hidden sm:flex shrink-0">
                  <span className="inline-flex items-center gap-2 bg-slate-900 text-white text-[10px] font-black px-5 py-3 rounded-full group-hover:bg-emerald-600 transition-colors">
                    {item.cta} <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* FOOTER INTERNO */}
        <footer className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[2.5rem] border border-blue-100 text-center">
            <p className="text-blue-800 font-bold text-sm italic">
              "El conocimiento actualizado es la mejor herramienta para un Auxiliar de Farmacia."
            </p>
        </footer>
      </div>
    </main>
  );
}