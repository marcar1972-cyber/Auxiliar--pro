import Link from "next/link";
import { 
  BookOpen, Pill, Lock, ArrowRight, Library, GraduationCap, 
  BrainCircuit, Store, Calculator, Microscope, Flame, Heart, Brain 
} from "lucide-react";

// 🟢 METADATOS (Optimizados para Búsqueda Local)
export const metadata = {
  title: 'Guías de Estudio Auxiliar de Farmacia | Apoyo Seremi 2026',
  description: 'Material de apoyo para la certificación de Auxiliar de Farmacia en Chile. Resúmenes del Decreto 466, Farmacología y Normativa Sanitaria.',
  keywords: ['guias auxiliar farmacia', 'examen seremi salud chile', 'resumen decreto 466', 'farmacologia basica', 'temario auxiliar farmacia', 'material de estudio farmacia'],
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
      slug: "alta-rotacion",
      title: "Farmacología: Alta Rotación",
      desc: "El 80% de la venta diaria. Dolor (AINEs), Respiratorio (Antigripales) y Digestivo. Lo que sale todos los días.",
      icon: <Flame size={40} className="text-orange-600" />, 
      color: "orange"
    },
    {
      slug: "cronicos-antiinfecciosos",
      title: "Farmacología: Crónicos y Antiinfecciosos",
      desc: "Fidelización del paciente. Hipertensión, Diabetes, Colesterol y uso responsable de Antibióticos.",
      icon: <Heart size={40} className="text-rose-600" />, 
      color: "rose"
    },
    {
      slug: "especialidades-controlados",
      title: "Farmacología: Especialidades y Controlados",
      desc: "SNC (Benzodiazepinas, Antidepresivos) y Dermatológicos. Manejo de receta retenida y venta consultiva.",
      icon: <Brain size={40} className="text-purple-600" />, 
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
                <Library size={14} /> BIBLIOTECA AUXILIARPRO 2026
             </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight text-balance">
            Guías de Estudio AuxiliarPro: <br className="hidden md:block"/>
            <span className="text-blue-600">Apoyo para tu Certificación en Chile</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-balance">
            Descarga material de estudio ordenado y actualizado para preparar tu examen ante la SEREMI. Repasa la Normativa (Decreto 466) y Farmacología con resúmenes claros y directos al grano.
          </p>

          {/* 🟢 BOTÓN WHATSAPP - COMPARTIR DATO */}
          <a 
            href="https://wa.me/?text=¡Hola!%20Encontré%20estos%20resúmenes%20para%20estudiar%20farmacia,%20se%20ven%20buenos:%20https://www.auxiliaresdefarmacia.cl/guias" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-[#25D366] p-6 rounded-3xl shadow-sm hover:shadow-md transition-all hover:bg-[#20bd5a] mt-8 max-w-md mx-auto text-left"
          >
            <div className="flex items-center gap-4">
                <div className="shrink-0">
                    <img src="/whatsapp.webp" alt="WhatsApp" className="w-10 h-10 object-contain" />
                </div>
                <div>
                    <h4 className="font-bold text-white text-sm">Compartir dato con Colegas</h4>
                    <p className="text-xs text-white/90">Enviar al grupo de estudio</p>
                </div>
                <ArrowRight size={20} className="text-white ml-auto opacity-70 group-hover:translate-x-1 transition-transform"/>
            </div>
          </a>
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
                    guia.color === 'rose' ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' :
                    'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white'
                }`}>
                  Leer Resumen y Quiz
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 🏛️ SECCIÓN TRÁMITE SEREMI (Doble Opción) */}
        <div className="mb-20 w-full max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copywriting: Filtro de Usuario */}
            <div className="text-center md:text-left space-y-2 flex-1">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                ¿Ya cumpliste el año en farmacia? 🕒
              </h3>
              <p className="text-slate-600 text-sm">
                Reúne tu documentación y haz el trámite en línea. Antes de subir los papeles, revisa nuestra guía para evitar rechazos.
              </p>
            </div>

            {/* Botonera de Acciones */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                
                {/* Botón A: LEER GUÍA (Retención - Enlace Interno) */}
                <Link href="/blog/fecha-examen-auxiliar-farmacia-seremi" className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all text-sm">
                    <span>📄 Ver Guía Paso a Paso</span>
                </Link>

                {/* Botón B: IR A SEREMI (Salida - Enlace Externo) */}
                <a 
                    href="https://seremienlinea.minsal.cl" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-sm text-sm"
                >
                    <span>Ir a Trámite SEREMI</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>

          </div>
          
          {/* Nota Legal */}
          <p className="text-[10px] text-slate-400 mt-6 text-center md:text-left">
            *AuxiliarPro te orienta, pero el trámite final se realiza en el portal oficial del Minsal.
          </p>
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