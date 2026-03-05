import Link from "next/link";
import { ChevronRight, Scale, Thermometer, Pill, Clipboard, ShieldAlert, ArrowRight, BookOpen, CheckCircle } from "lucide-react";

// 🟢 BLOQUE SEO OBLIGATORIO (Solución al Reporte PDF)
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
      
      {/* HERO SECTION: ENFOQUE LEGAL PURO */}
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
            {/* 🟢 ESTE BOTÓN LLEVA A /quiz SIN PEDIR LOGIN */}
            <Link href="/quiz" className="inline-flex items-center gap-2 bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl">
              EMPEZAR AHORA <ArrowRight />
            </Link>
          </div>
        </div>
      </header>

      {/* 5 ARTÍCULOS TÉCNICOS BASADOS EN LA LEY */}
      <main className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-50">
        <h2 className="text-center font-black text-2xl uppercase tracking-widest mb-16 italic">Módulos Críticos de Legislación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Link href="/guias/decreto-466-reglamento-farmacias" className="group">
            <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all h-full hover:bg-white hover:border-emerald-200">
              <Scale className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-emerald-600 transition-colors">Rol Técnico y Decreto 466</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                El <strong>Decreto Supremo 466</strong> constituye el marco jurídico fundamental que regula la instalación, funcionamiento y responsabilidades en farmacias y almacenes farmacéuticos. Todo auxiliar debe dominar las prohibiciones de dispensación y las obligaciones de infraestructura, como el almacenamiento técnico a 10 cm del piso y 30 cm de los muros para garantizar la higiene exigida por la autoridad.
              </p>
            </article>
          </Link>

          <Link href="/guias/decreto-3-control-productos" className="group">
            <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all h-full hover:bg-white hover:border-blue-200">
              <Thermometer className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-blue-600 transition-colors">Estabilidad y Cadena de Frío</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                La seguridad de los productos biológicos se rige por normas técnicas de almacenamiento estrictas. El mantenimiento de la temperatura entre <strong>2°C y 8°C</strong> es una obligación legal para insulinas y vacunas. Este módulo profundiza en el control de termohigrómetros, registros de planillas de temperatura y protocolos de contingencia ante quiebres de cadena de frío según las directrices sanitarias.
              </p>
            </article>
          </Link>

          <Link href="/guias/decreto-404-estupefacientes" className="group">
            <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all h-full hover:bg-white hover:border-purple-200">
              <ShieldAlert className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-purple-600 transition-colors">Controlados: Decretos 404 y 405</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                La dispensación de Estupefacientes y Psicotrópicos requiere un cumplimiento riguroso de los reglamentos <strong>DS 404 y DS 405</strong>. El aspirante debe dominar los requisitos de la Receta Cheque y Receta Retenida, el registro diario obligatorio en libros de control y la normativa de custodia en muebles de seguridad bajo llave para evitar infracciones legales graves durante las inspecciones de la SEREMI.
              </p>
            </article>
          </Link>

          {/* 🟢 CORRECCIÓN 1: Enlace al Blog de Visión Ley Fármacos */}
          <Link href="/blog/vision-ley-farmacos" className="group">
            <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all h-full hover:bg-white hover:border-amber-200">
              <Pill className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-amber-600 transition-colors">Bioequivalencia y Ley de Fármacos</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                La <strong>Ley de Fármacos II</strong> impulsa el uso de medicamentos genéricos con sello de Bioequivalencia vigente, garantizando la misma eficacia que el innovador. En este bloque se analiza la obligatoriedad de informar precios y el marco legal para el fraccionamiento de medicamentos en unidades autorizadas, permitiendo un acceso más económico y seguro a los tratamientos prescritos por los profesionales facultados.
              </p>
            </article>
          </Link>

          {/* 🟢 CORRECCIÓN 2: Enlace al Decreto 3 (Seguridad y Farmacovigilancia) */}
          <Link href="/guias/decreto-3-control-productos" className="group">
            <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all h-full hover:bg-white hover:border-rose-200">
              <Clipboard className="text-rose-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-rose-600 transition-colors">Seguridad y Farmacovigilancia</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                El reporte de Reacciones Adversas a Medicamentos (RAM) es un deber ético y legal del personal de farmacia ante el <strong>Instituto de Salud Pública (ISP)</strong>. Comprender los procesos de farmacocinética y farmacodinamia permite una detección temprana de efectos no deseados, contribuyendo directamente a la farmacovigilancia nacional y asegurando que la salud pública sea resguardada post-dispensación.
              </p>
            </article>
          </Link>
        </div>

        {/* METODOLOGÍA: BASADA EN LEYES VIGENTES */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-black text-slate-900 leading-tight">Preparación Técnica para el Proceso de Certificación 2026</h2>
                <p className="text-slate-500 leading-relaxed font-medium">
                    Nuestra metodología de entrenamiento se centra en la aplicación práctica de los reglamentos sanitarios. Los exámenes de competencia exigen un análisis profundo de la normativa vigente en Chile.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Simulacros con tiempo real de 60 minutos
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Preguntas basadas en los Reglamentos Sanitarios Vigentes
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
                    ¿Conoces los plazos legales de vigencia de una receta simple o los requisitos técnicos para el almacenamiento de vacunas? El dominio de estos detalles jurídicos es el factor determinante para aprobar el examen de la autoridad sanitaria.
                </p>
                {/* 🟢 ENLACE A GUIAS */}
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
              almacenamiento técnico en bodega y validación de recetas electrónicas según las leyes vigentes.
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

        {/* 👇 SECCIÓN SOBRE NOSOTROS (MACZDEV) - ACTUALIZADA CON AUXILIARPRO */}
        <div className="mt-32 max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Fondo decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Imagen del perfil */}
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-slate-800 overflow-hidden shadow-xl">
                <img 
                  src="/maczdev.webp" 
                  alt="MaczDev" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contenido de texto */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-2">Hola, soy MaczDev 👋</h4>
                <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Auxiliar Trainee & Desarrollador Web</p>
              </div>
              
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  Actualmente trabajo en el rubro y, al igual que tú, me estoy preparando para rendir la prueba de competencia <strong>SEREMI 2026</strong>.
                </p>
                <p>
                  Mientras estudiaba, me di cuenta de un gran vacío: <strong>no existían ensayos tipo prueba disponibles en la red</strong>. Esa frustración fue mi motor. Decidí no quedarme de brazos cruzados. Uní mis conocimientos en farmacia y tecnología, y con la ayuda de <strong>Inteligencia Artificial (Gemini)</strong>, creé <strong>AuxiliarPro</strong>, construyendo esta plataforma y generando guías de estudio propias para potenciar a los futuros colegas de Chile.
                </p>
                <p>
                  Lanzamos en diciembre de 2025 y ver la gran afluencia de usuarios me confirma que esto era necesario.
                </p>
                <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-white my-4">
                  "Creo firmemente que el conocimiento que nos permite crecer profesional y espiritualmente debe ser accesible para todos."
                </blockquote>
              </div>

              {/* Grid de valores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
                <div>
                  <h5 className="text-white font-bold mb-1 flex items-center gap-2"><Scale size={16} className="text-emerald-400"/> Tecnología + Salud</h5>
                  <p className="text-xs text-slate-400">Plataforma programada con IA para estructurar contenido legal complejo de forma simple.</p>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1 flex items-center gap-2"><BookOpen size={16} className="text-blue-400"/> Nuestra Visión</h5>
                  <p className="text-xs text-slate-400">Crear la comunidad de apoyo más grande de Chile. Que nadie repruebe por falta de recursos.</p>
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1 flex items-center gap-2"><CheckCircle size={16} className="text-purple-400"/> Gratuidad Real</h5>
                  <p className="text-xs text-slate-400">Sin letra chica. No vendemos tus datos. Un aporte personal para devolver la mano.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}