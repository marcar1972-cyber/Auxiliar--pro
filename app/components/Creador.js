import { Scale, BookOpen, CheckCircle } from "lucide-react";

export default function Creador() {
  return (
    /* Fondo Slate-100: Gris sutil que diferencia la sección manteniendo la luminosidad clínica */
    <section id="creador" className="bg-slate-100 py-24 px-6 w-full relative overflow-hidden border-t border-slate-200">
      
      {/* Fondo decorativo de la sección: Resplandor tenue en Verde Brand */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#28a745] rounded-full blur-[150px] opacity-[0.07] -mr-20 -mt-20 pointer-events-none"></div>

      {/* Contenedor Glassmorphism: Blanco semitransparente con desenfoque */}
      <div className="max-w-5xl mx-auto bg-white/80 rounded-[3rem] p-8 md:p-14 border border-white shadow-xl relative z-10 backdrop-blur-sm">
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Imagen del perfil */}
          <div className="shrink-0 relative">
            {/* Brillo detrás de la foto */}
            <div className="absolute inset-0 bg-[#28a745] blur-2xl opacity-20 rounded-full"></div>
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img 
                src="/maczdev.webp" 
                alt="MaczDev" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div>
              <h4 className="text-3xl md:text-4xl font-black text-[#003366] mb-3 tracking-tight">Hola, soy MaczDev 👋</h4>
              <p className="text-[#28a745] font-black text-xs md:text-sm uppercase tracking-widest bg-[#28a745]/10 inline-block px-4 py-1.5 rounded-full border border-[#28a745]/20">
                Auxiliar de Farmacia Certificado & Desarrollador Web
              </p>
            </div>

            <div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              <p>
                Aprobé mi examen oficial de competencia <strong>SEREMI</strong> gracias a la metodología que hoy da vida a esta plataforma. Conozco exactamente el nivel de exigencia que enfrentarás.
              </p>
              <p>
                Durante mi propia preparación, me di cuenta de un gran vacío: <strong>no existían ensayos tipo prueba actualizados en la red</strong>. Esa frustración fue mi motor. Uní mis conocimientos en farmacia y tecnología, y junto a la Inteligencia Artificial (Gemini), creé <strong>AuxiliarPro</strong> para que tú no tengas que pasar por la misma incertidumbre.
              </p>
              <p>
                Lanzamos en diciembre de 2025 y hoy mi misión es entregarte las mejores herramientas técnicas y legales para que tú también consigas tu certificado.
              </p>
              <blockquote className="border-l-4 border-[#28a745] pl-5 italic text-[#003366] my-6 text-lg font-bold">
                "Creo firmemente que el conocimiento que nos permite crecer profesionalmente debe estar al alcance de todos."
              </blockquote>
            </div>

            {/* Grid de valores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div>
                <h5 className="text-[#003366] font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Scale size={18} className="text-[#28a745]"/> Tecnología + Salud
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Plataforma programada con IA para estructurar contenido legal complejo de forma simple.</p>
              </div>
              <div>
                <h5 className="text-[#003366] font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                  <BookOpen size={18} className="text-[#28a745]"/> Nuestra Visión
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Crear la comunidad de apoyo más grande de Chile y elevar el estándar de nuestra profesión.</p>
              </div>
              <div>
                <h5 className="text-[#003366] font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle size={18} className="text-[#28a745]"/> Compromiso Real
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">Niveles de inicio 100% gratuitos y sin letra chica. Mi forma de devolver la mano a los futuros colegas.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}