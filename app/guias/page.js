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

          {/* 🟢 CORRECCIÓN: Enlace directo a la guía de Ley de Fármacos */}
          <Link href="/guias/ley-20724-farmacos-1" className="group">
            <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all h-full hover:bg-white hover:border-amber-200">
              <Pill className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-amber-600 transition-colors">Bioequivalencia y Ley de Fármacos</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                La <strong>Ley de Fármacos II</strong> impulsa el uso de medicamentos genéricos con sello de Bioequivalencia vigente, garantizando la misma eficacia que el innovador. En este bloque se analiza la obligatoriedad
