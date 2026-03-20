"use client";

import { useState, useEffect } from "react";
// Importamos la constante FAQS desde la carpeta de datos modular
import { FAQS } from "../faqData/index"; 
import { ChevronLeft, ChevronDown, BookOpen, BrainCircuit } from "lucide-react";
import Link from "next/link";
// Importamos el Banner de Venta para el bloque de conversión final
import BannerVenta from "../components/BannerVenta"; 

export default function FAQPage() {
  const [openId, setOpenId] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Evitamos errores de hidratación en Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24 text-left">
      {/* HEADER DE NAVEGACIÓN */}
      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/quiz" className="text-slate-400 hover:text-slate-900 transition-colors">
          <ChevronLeft size={28} />
        </Link>
        {/* H1 Optimizado para SEO */}
        <h1 className="text-xl font-black text-slate-900 tracking-tighter">
          Preguntas Frecuentes Examen SEREMI 2026
        </h1>
      </div>

      <div className="p-6 max-w-2xl mx-auto mt-6">
        
        {/* 1. ENCABEZADO SEO (Antes de las FAQs) */}
        <div className="mb-10 text-slate-600 leading-relaxed text-sm md:text-base">
            <p className="mb-4">
              El examen de <strong>Auxiliar de Farmacia ante la SEREMI de Salud en Chile</strong> genera muchas dudas entre quienes se preparan para trabajar en una farmacia.
            </p>
            <p className="mb-4">
              En esta sección respondemos las preguntas más comunes sobre el examen, los requisitos legales y cómo prepararse correctamente.
            </p>
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl mt-6">
                <p className="font-medium text-blue-900 mb-2 text-sm">
                  Si aún no has comenzado a estudiar, puedes practicar directamente en nuestro <strong>simulador gratuito de AuxiliarPro</strong>.
                </p>
                <Link href="/quiz" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors text-sm underline underline-offset-2">
                  Practicar en el simulador
                </Link>
            </div>
        </div>

        {/* 2. MAPEADO POR CATEGORÍAS (Examen, Legislación, Laboral) */}
        <div className="space-y-10">
            {FAQS.map((cat, idx) => (
            <section key={idx} className="space-y-4">
                <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] px-2">
                {cat.category}
                </h2>
                <div className="space-y-3">
                {cat.questions.map((faq) => (
                    <div key={faq.id} className="bg-white rounded-[1.5rem] border border-slate-100 shadow-sm overflow-hidden transition-all">
                    <button 
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                        {/* Pregunta H3 para estructuración SEO */}
                        <h3 className="font-bold text-slate-800 pr-4 text-sm">{faq.question}</h3>
                        <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""}`} />
                    </button>
                    {openId === faq.id && (
                        <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-50 animate-in fade-in slide-in-from-top-1">
                        <p className="mt-4 italic">{faq.answer}</p>
                        
                        {/* 3. ENLACES INTERNOS SUGERIDOS */}
                        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2 text-xs">
                            <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">Recursos útiles:</span>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/quiz" className="text-indigo-600 hover:underline flex items-center gap-1">
                                    <BrainCircuit size={12}/> Ir al Simulador
                                </Link>
                                <Link href="/guias" className="text-indigo-600 hover:underline flex items-center gap-1">
                                    <BookOpen size={12}/> Ver Guías de Estudio
                                </Link>
                            </div>
                        </div>
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </section>
            ))}
        </div>

        {/* 3. ENLACE EXTERNO DE AUTORIDAD (SEO) */}
        <div className="mt-12 bg-slate-100 p-6 rounded-2xl text-sm text-slate-600 text-center border border-slate-200">
            <p>
                Puedes revisar información oficial sobre normativas farmacéuticas y trámites en el portal del Ministerio de Salud de Chile.
            </p>
            <a 
                href="https://seremienlinea.minsal.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 font-bold text-blue-600 hover:underline"
            >
                seremienlinea.minsal.cl
            </a>
        </div>

        {/* 4. BLOQUE DE TRANSICIÓN HACIA LA PLATAFORMA (Actualizado con enfoque profesional a largo plazo) */}
        <div className="mt-16 text-center">
            <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">
                Una herramienta para toda tu vida laboral
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
                Prepararse para el examen no solo significa estudiar la normativa y aprobar, sino adquirir conocimientos que usarás todos los días en tu trabajo. Por eso, <strong>AuxiliarPro está evolucionando</strong> para acompañarte no solo como estudiante, sino también como profesional del área de la salud.
            </p>
            <p className="text-slate-600 font-medium mb-8">
                Puedes comenzar practicando gratis para tu examen, o acceder al <strong>Nivel PRO</strong> para desbloquear herramientas avanzadas diseñadas para tu día a día en la farmacia.
            </p>

            {/* 5. CTA INTERNO ANTES DEL BANNER */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Link href="/quiz" className="bg-white border-2 border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl hover:border-indigo-400 hover:text-indigo-600 transition-all flex items-center justify-center gap-2 shadow-sm">
                    Ir al simulador gratuito
                </Link>
                <Link href="/guias" className="bg-white border-2 border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl hover:border-emerald-400 hover:text-emerald-600 transition-all flex items-center justify-center gap-2 shadow-sm">
                    Ver guías de estudio
                </Link>
            </div>
        </div>

        {/* 6. BANNER DE CONVERSIÓN */}
        <div className="mt-8">
            <BannerVenta colorTheme="indigo" />
        </div>

        {/* 7. MICRO-BLOQUE SEO FINAL */}
        <div className="mt-16 pt-10 border-t border-slate-200 text-center text-xs text-slate-500 leading-relaxed">
            <p className="mb-3">
                AuxiliarPro es una plataforma creada para apoyar a quienes desean <strong>aprobar el examen de Auxiliar de Farmacia en Chile</strong> y mantenerse actualizados en su profesión. Cada año miles de personas rinden esta evaluación ante la <strong>SEREMI de Salud</strong>, y prepararse con herramientas modernas puede marcar la diferencia.
            </p>
            <p>
                Comienza hoy mismo tu preparación.
            </p>
            <Link href="/quiz" className="inline-block mt-3 font-bold text-indigo-500 hover:underline">
                Ir al simulador de AuxiliarPro
            </Link>
        </div>

      </div>
    </main>
  );
}