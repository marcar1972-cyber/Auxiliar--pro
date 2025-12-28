"use client";

import Link from "next/link";
import { ChevronRight, Scale, Thermometer, Pill, Clipboard, ShieldAlert, ArrowRight, BookOpen, CheckCircle } from "lucide-react";
import Footer from "./components/Footer"; 

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* HERO SECTION */}
      <header className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-emerald-100 italic">
            Comunidad activa de +50 alumnos capacitándose para la SEREMI
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
            Tu examen <span className="text-emerald-500">SEREMI</span> <br/>comienza aquí.
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
            Entrena con bases legales actualizadas de los <strong>Decretos 466, 404 y 405</strong> del Ministerio de Salud. 
            Contenido técnico y legal validado para el proceso de certificación 2026.
          </p>
          <Link href="/quiz" className="inline-flex items-center gap-2 bg-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:bg-emerald-600 transition-all shadow-2xl">
            EMPEZAR AHORA <ArrowRight />
          </Link>
        </div>
      </header>

      {/* 5 ARTÍCULOS TÉCNICOS EXPANDIDOS (DENSIDAD SEO) */}
      <main className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-50">
        <h2 className="text-center font-black text-2xl uppercase tracking-widest mb-16 italic">Módulos Críticos de Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Scale className="text-emerald-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Rol Técnico y Legislación (DS 466)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              El <strong>Decreto Supremo 466</strong> es el pilar que regula la instalación y funcionamiento de farmacias en Chile. Como auxiliar, es imperativo comprender que tu labor se realiza bajo la supervisión directa del Químico Farmacéutico, asegurando el cumplimiento del petitorio mínimo de medicamentos y la correcta organización de los estantes, los cuales deben estar a 10cm del suelo y 30cm de los muros para garantizar la higiene y ventilación técnica.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Thermometer className="text-blue-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Cadena de Frío y Estabilidad</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              La <strong>Cadena de Frío</strong> es crítica para mantener la potencia de productos biológicos, vacunas e insulinas. La normativa técnica exige un rango de temperatura ininterrumpido entre los <strong>2°C y 8°C</strong>. En este módulo aprenderás el uso de termohigrómetros, el registro obligatorio en planillas de control y los protocolos de emergencia ante cortes de energía eléctrica para evitar la pérdida de stock crítico.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <ShieldAlert className="text-purple-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Productos Controlados (DS 404/405)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              La gestión de Estupefacientes y Psicotrópicos está regulada por los reglamentos <strong>DS 404 y DS 405</strong>. El examen SEREMI pone especial énfasis en la validación de la Receta Cheque y Receta Retenida, el registro diario en los libros oficiales y la custodia de estos fármacos en muebles metálicos o cajas de seguridad bajo llave. Comprender estos plazos y condiciones es vital para evitar infracciones legales graves en el local.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Pill className="text-amber-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Bioequivalencia y Ley de Fármacos</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              La <strong>Bioequivalencia</strong> garantiza que un medicamento genérico posee la misma eficacia y seguridad que el producto innovador. Identificar el sello amarillo obligatorio es un deber del auxiliar para informar al paciente sobre opciones más económicas y seguras. Además, se estudia la normativa de fraccionamiento, permitiendo entregar la dosis exacta prescrita por el médico, reduciendo costos y evitando la automedicación.
            </p>
          </article>

          <article className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <Clipboard className="text-rose-500 mb-6" size={32} />
            <h3 className="font-black text-xl mb-4 leading-tight">Farmacovigilancia y Seguridad</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              La seguridad del paciente no termina con la venta. Todo Auxiliar de Farmacia debe estar capacitado para identificar <strong>Reacciones Adversas a Medicamentos (RAM)</strong> y reportarlas de manera inmediata al Instituto de Salud Pública (ISP). Este módulo cubre la farmacocinética básica y los canales de notificación oficial, asegurando que contribuyas a la salud pública mediante la detección temprana de efectos inesperados en la población.
            </p>
          </article>
        </div>

        {/* NUEVA SECCIÓN: METODOLOGÍA (PARA LLEGAR A LAS 600 PALABRAS) */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-black text-slate-900">Preparación Profesional para el Proceso 2026</h2>
                <p className="text-slate-500 leading-relaxed">
                    Nuestra metodología se basa en la simulación de alta fidelidad. Los exámenes de la SEREMI de Salud exigen no solo memoria, sino capacidad de análisis técnico sobre situaciones reales en el punto de venta. Por ello, hemos estructurado nuestro contenido siguiendo los lineamientos de la autoridad sanitaria chilena.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Simulacros con tiempo real de 60 minutos
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Preguntas basadas en el Manual de Farmacia Privada 2025
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <CheckCircle size={18} className="text-emerald-500" /> Enfoque en leyes vigentes y reglamentos ISP
                    </li>
                </ul>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
                <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                    <BookOpen size={24} className="text-emerald-400" /> Guía de Estudio Rápida
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    ¿Sabías que la vigencia de una receta médica simple es de 6 meses? ¿O que el petitorio mínimo es obligatorio para evitar sumarios? Estos detalles marcan la diferencia entre aprobar o reprobar el examen de competencia de auxiliar.
                </p>
                <Link href="/biblioteca" className="text-emerald-400 font-bold hover:underline flex items-center gap-2">
                    Explorar Biblioteca Técnica <ChevronRight size={16}/>
                </Link>
            </div>
        </section>

        {/* ACCESO A FAQS */}
        <div className="mt-32 flex flex-col items-center">
          <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 w-full max-w-3xl text-center shadow-sm">
            <h4 className="text-2xl font-black text-slate-900 mb-4">¿Tienes dudas técnicas?</h4>
            <p className="text-slate-500 text-sm mb-10 font-medium max-w-lg mx-auto leading-relaxed">
              Consulta nuestro centro de respuestas detalladas sobre el Decreto 466, 
              almacenamiento técnico a 10cm del suelo y validación de recetas electrónicas según la normativa 2025.
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

      <Footer />
    </div>
  );
}
