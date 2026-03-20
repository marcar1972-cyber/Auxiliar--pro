import Hero from "./components/Hero";
import ModulosLegales from "./components/ModulosLegales";
import Metodologia from "./components/Metodologia";
import FaqSeccion from "./components/FaqSeccion";
import Creador from "./components/Creador";
import AvisoFreemium from "./components/AvisoFreemium"; 
import BannerUrgencia from "./components/BannerUrgencia"; 
import { CheckCircle, Star } from "lucide-react";

export const metadata = {
  title: "Examen Auxiliar de Farmacia SEREMI | Simulador y Normativa 2026",
  description: "Aprueba tu examen de competencia SEREMI. Estudia gratis los Decretos 466, 404 y 405. Simulador de preguntas reales y material de estudio validado en Chile.",
  keywords: ["examen auxiliar farmacia", "seremi salud", "decreto 466", "test farmacia chile", "simulador competencia"],
  alternates: {
    canonical: './', 
  },
};

export default function LandingPage() {
  // Arreglo de testimonios integrado directamente en la página
  const testimoniosData = [
    {
      id: 1,
      nombre: "Andrea",
      texto: "Gracias por este grupo, fue un excelente aporte para estudiar, aprobé mi examen el 13 de febrero en Seremi y ahora soy oficialmente Auxiliar de Farmacia.",
      etiqueta: "Auxiliar de Farmacia Certificada",
      estrellas: 5,
    },
    {
      id: 2,
      nombre: "Mariela Porma",
      texto: "Gracias a su dedicación podemos mantenernos informados, aprender y sentirnos acompañados. Su trabajo realmente marca la diferencia en nuestra formación y crecimiento.",
      etiqueta: "Estudiante Área Farmacéutica",
      estrellas: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. Alerta de Cierre / Inscripción 1 Clic */}
      <BannerUrgencia /> 
      
      {/* 2. Hero Section (El Gancho) */}
      <Hero />
      
      {/* 3. Carrusel de Leyes (Mobile First) */}
      <main className="w-full flex flex-col items-center">
        <ModulosLegales />
        
        {/* 4. Metodología de Estudio */}
        <Metodologia />
        
        {/* 5. AVISO NUEVO MODELO */}
        <AvisoFreemium /> 
        
        {/* 6. Testimonios (Código incrustado con SEO optimizado) */}
        <section id="testimonios" className="bg-white py-24 px-6 w-full border-t border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-black text-3xl md:text-4xl text-slate-900 tracking-tight">
                Preparación para el Examen SEREMI de Auxiliar de Farmacia
              </h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium text-lg md:text-xl">
                Experiencias reales de alumnos estudiando la normativa y profesionales ya certificados con nuestra plataforma.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimoniosData.map((testimonio) => (
                <div 
                  key={testimonio.id} 
                  className="bg-emerald-50 p-8 md:p-12 rounded-[2.5rem] border border-emerald-100 shadow-sm relative flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex gap-1 mb-6 text-emerald-500">
                      {[...Array(testimonio.estrellas)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={20} />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed mb-8 italic">
                      "{testimonio.texto}"
                    </blockquote>
                  </div>
                  
                  <div className="flex flex-col items-start border-t border-emerald-200/50 pt-6 mt-auto">
                    <p className="font-black text-slate-900 text-lg">{testimonio.nombre}</p>
                    <div className="flex items-center gap-2 mt-2 bg-white text-emerald-800 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm border border-emerald-100">
                      <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                      <span className="truncate">{testimonio.etiqueta}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 7. FAQs */}
        <FaqSeccion />
        
        {/* 8. Historia del Creador */}
        <Creador />
      </main>

    </div>
  );
}