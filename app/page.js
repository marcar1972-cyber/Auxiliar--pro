import Link from "next/link";
import { ChevronRight, Scale, Thermometer, Pill, Clipboard, ShieldAlert, ArrowRight, BookOpen, CheckCircle } from "lucide-react";

// 🟢 BLOQUE SEO OBLIGATORIO
export const metadata = {
  title: "Examen Auxiliar de Farmacia SEREMI | Simulador y Normativa 2026",
  description: "Aprueba tu examen de competencia SEREMI. Estudia gratis los Decretos 466, 404 y 405. Simulador de preguntas reales y material de estudio validado en Chile.",
  keywords: ["examen auxiliar farmacia", "seremi salud", "decreto 466", "test farmacia chile", "simulador competencia"],
  alternates: {
    canonical: './',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* HERO SECTION */}
      <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-emerald-100 italic">
            Comunidad activa de +50 alumnos capacitándose bajo normativa vigente
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
            Tu examen <span className="text-emerald-500">SEREMI</span> <br/>comienza aquí.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
            Entrena con bases legales extraídas directamente de los <strong>Decretos 466, 404 y 405</strong> del Ministerio de Salud. 
            Contenido técnico y jurídico validado para el proceso de certificación 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="inline-flex items-center gap-2 bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl">
              EMPEZAR AHORA <ArrowRight />
            </Link>
          </div>
        </div>
      </header>

      {/* 5 ARTÍCULOS TÉCNICOS */}
      <main className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-50">
        <h2 className="text-center font-black text-2xl uppercase tracking-widest mb-16 italic">Módulos Críticos de Legislación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Scale className="text-emerald-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Rol Técnico y Decreto 466</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              El <strong>Decreto Supremo 466</strong> constituye el marco jurídico fundamental que regula la instalación, funcionamiento y responsabilidades en farmacias y almacenes farmacéuticos. Todo auxiliar debe dominar las prohibiciones de dispensación y las obligaciones de infraestructura.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Thermometer className="text-blue-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Estabilidad y Cadena de Frío</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              La seguridad de los productos biológicos se rige por normas técnicas estrictas. El mantenimiento de la temperatura entre <strong>2°C y 8°C</strong> es una obligación legal para insulinas y vacunas. Este módulo profundiza en el control de termohigrómetros y protocolos de contingencia.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <ShieldAlert className="text-purple-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Controlados: Decretos 404 y 405</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              La dispensación de Estupefacientes y Psicotrópicos requiere un cumplimiento riguroso de los reglamentos <strong>DS 404 y DS 405</strong>. Domina los requisitos de la Receta Cheque y Retenida, el registro diario en libros de control y la normativa de seguridad bajo llave.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Pill className="text-amber-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Bioequivalencia y Ley de Fármacos</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              La <strong>Ley de Fármacos II</strong> impulsa el uso de medicamentos genéricos con sello de Bioequivalencia. Analizamos la obligatoriedad de informar precios y el marco legal para el fraccionamiento de medicamentos en unidades autorizadas.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Clipboard className="text-rose-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Seguridad y Farmacovigilancia</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              El reporte de Reacciones Adversas (RAM) es un deber ético y legal ante el <strong>Instituto de Salud Pública (ISP)</strong>. Comprender la farmacocinética permite una detección temprana de efectos no deseados, contribuyendo a la salud pública.
            </p>
          </article>
        </div>

        {/* METODOLOGÍA */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-black text-slate-900 leading-tight">Preparación Técnica para el Proceso de Certificación 2026</h2>
                <p className="text-slate-500 leading-relaxed font-medium">
                    Nuestra metodología se centra en la aplicación práctica de los reglamentos sanitarios. Los exámenes de competencia exigen un análisis profundo de la normativa vigente.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Simulacros con tiempo real de 60 minutos
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Preguntas basadas en los Reglamentos Vigentes
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Enfoque en Decretos 466, 404, 405 y Ley de Fármacos
                    </li>
                </ul>
            </div>
            
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
                <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                    <BookOpen size={24} className="text-emerald-400" /> Compendio de Estudio Legal
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    ¿Conoces los plazos legales de vigencia de una receta o los requisitos de almacenamiento de vacunas? El dominio de estos detalles jurídicos es el factor determinante para aprobar.
                </p>
                
                {/* 🟢 CORRECCIÓN REALIZADA: Ahora apunta a /guias */}
                <Link href="/guias" className="text-emerald-400 font-bold hover:underline flex items-center gap-2 text-sm uppercase tracking-widest">
                    EXPLORAR TEXTOS LEGALES <ChevronRight size={16}/>
                </Link>
            </div>
        </section>

        {/* ACCESO A FAQS */}
        <div className="mt-32 flex flex-col items-center">
          <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 w-full max-w-3xl text-center shadow-sm">
            <h4 className="text-2xl font-black text-slate-900 mb-4">¿Dudas sobre la Normativa Sanitaria?</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium max-w-lg mx-auto leading-relaxed">
              Consulta nuestro centro de respuestas detalladas sobre el Decreto 466, 
              almacenamiento técnico en bodega y validación de recetas electrónicas.
            </p>
            
            <Link 
              href="/faq" 
              className="inline-flex items-center gap-3 bg-white text-slate-900 border-2 border-slate-200 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm group"
            >
              Ver todas las FAQs 
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
