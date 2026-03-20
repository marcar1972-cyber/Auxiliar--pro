import Hero from "./components/Hero";
import ModulosLegales from "./components/ModulosLegales";
import Metodologia from "./components/Metodologia";
import FaqSeccion from "./components/FaqSeccion";
import Creador from "./components/Creador";
import AvisoFreemium from "./components/AvisoFreemium"; 
import BannerUrgencia from "./components/BannerUrgencia"; 

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
        
        {/* 6. Testimonio y FAQs */}
        <FaqSeccion />
        
        {/* 7. Historia del Creador */}
        <Creador />
      </main>

    </div>
  );
}