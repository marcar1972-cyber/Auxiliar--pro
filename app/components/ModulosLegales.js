import Link from "next/link";
import { Scale, Thermometer, Pill, Clipboard, ShieldAlert } from "lucide-react";

export default function ModulosLegales() {
  return (
    /* Fondo Slate-100: Un gris sutil que diferencia la sección sin ser pesado */
    <section className="bg-slate-100 py-24 px-6 border-t border-slate-200 w-full relative overflow-hidden" id="modulos">
      
      {/* Resplandor Verde Brand muy tenue para dar profundidad al vidrio */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#28a745] rounded-full blur-[150px] opacity-[0.07] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-center font-black text-2xl md:text-3xl uppercase tracking-[0.2em] mb-16 italic text-[#003366]">
          Módulos Críticos de Legislación
        </h2>
        
        {/* CONTENEDOR MÁGICO: Scroll horizontal en móvil, Grilla en PC */}
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 scroll-smooth" 
          style={{ scrollbarWidth: 'none' }} 
        >
          
          {/* Tarjeta 1: Glassmorphism Sutil (Fondo blanco semi-transparente) */}
          <Link href="/guias/decreto-466-reglamento-farmacias" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all h-full hover:border-[#28a745]/40 hover:-translate-y-1 flex flex-col">
              <Scale className="text-[#28a745] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight text-[#003366] group-hover:text-[#28a745] transition-colors">Rol Técnico y Decreto 466</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 font-medium">
                El <strong>Decreto Supremo 466</strong> constituye el marco jurídico fundamental que regula la instalación, funcionamiento y responsabilidades en farmacias. Todo auxiliar debe dominar las prohibiciones de dispensación.
              </p>
            </article>
          </Link>

          {/* Tarjeta 2 */}
          <Link href="/guias/decreto-3-control-productos" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all h-full hover:border-[#28a745]/40 hover:-translate-y-1 flex flex-col">
              <Thermometer className="text-[#28a745] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight text-[#003366] group-hover:text-[#28a745] transition-colors">Estabilidad y Cadena de Frío</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 font-medium">
                La seguridad de los productos biológicos se rige por normas técnicas de almacenamiento estrictas. El mantenimiento de la temperatura entre <strong>2°C y 8°C</strong> es una obligación legal.
              </p>
            </article>
          </Link>

          {/* Tarjeta 3 */}
          <Link href="/guias/decreto-404-estupefacientes" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all h-full hover:border-[#28a745]/40 hover:-translate-y-1 flex flex-col">
              <ShieldAlert className="text-[#28a745] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight text-[#003366] group-hover:text-[#28a745] transition-colors">Controlados: DS 404 y 405</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 font-medium">
                La dispensación de Estupefacientes y Psicotrópicos requiere un cumplimiento riguroso de los reglamentos <strong>DS 404 y DS 405</strong>. Domina los requisitos de la Receta Cheque y Retenida.
              </p>
            </article>
          </Link>
          
          {/* Tarjeta 4 */}
          <Link href="/blog/vision-ley-farmacos" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all h-full hover:border-[#28a745]/40 hover:-translate-y-1 flex flex-col">
              <Pill className="text-[#28a745] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight text-[#003366] group-hover:text-[#28a745] transition-colors">Bioequivalencia y Ley II</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 font-medium">
                La <strong>Ley de Fármacos II</strong> impulsa el uso de medicamentos genéricos con sello de Bioequivalencia vigente, garantizando la misma eficacia que el innovador.
              </p>
            </article>
          </Link>

          {/* Tarjeta 5 */}
          <Link href="/guias/decreto-3-control-productos" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all h-full hover:border-[#28a745]/40 hover:-translate-y-1 flex flex-col">
              <Clipboard className="text-[#28a745] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight text-[#003366] group-hover:text-[#28a745] transition-colors">Seguridad y Farmacovigilancia</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 font-medium">
                El reporte de Reacciones Adversas (RAM) es un deber ético y legal del personal de farmacia ante el <strong>Instituto de Salud Pública (ISP)</strong>.
              </p>
            </article>
          </Link>

        </div>
        
        {/* Pista visual */}
        <div className="flex md:hidden justify-center items-center mt-4 text-[#003366]/40 text-[10px] font-black uppercase tracking-[0.2em]">
          ← Desliza para explorar →
        </div>

      </div>
    </section>
  );
}