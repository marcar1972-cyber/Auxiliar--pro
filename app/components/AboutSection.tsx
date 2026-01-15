import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'; // O como se llame tu sección principal
import Footer from '@/components/Footer';

// 👇 1. IMPORTAR EL NUEVO COMPONENTE
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Tu sección principal actual (Buscador, botones, etc) */}
      <Hero /> 
      
      {/* 👇 2. AQUÍ PEGAS LA SECCIÓN DE "QUIÉNES SOMOS" */}
      {/* Esto asegura que la gente lo lea después de ver la utilidad de la app */}
      <AboutSection />

      <Footer />
    </main>
  );
}
