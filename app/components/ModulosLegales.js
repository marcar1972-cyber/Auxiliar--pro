import Link from "next/link";
import { Scale, Thermometer, Pill, Clipboard, ShieldAlert } from "lucide-react";

export default function ModulosLegales() {
  return (
    <section className="bg-slate-50 py-24 px-6 border-t border-slate-100 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-black text-2xl md:text-3xl uppercase tracking-widest mb-16 italic text-slate-900">
          Módulos Críticos de Legislación
        </h2>
        
        {/* CONTENEDOR MÁGICO: Scroll horizontal en móvil, Grilla en PC */}
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 scroll-smooth" 
          style={{ scrollbarWidth: 'none' }} // Oculta la barra de scroll en Firefox
        >
          
          {/* Tarjeta 1 */}
          <Link href="/guias/decreto-466-reglamento-farmacias" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full hover:border-emerald-300 hover:-translate-y-1 flex flex-col">
              <Scale className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-emerald-600 transition-colors">Rol Técnico y Decreto 466</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                El <strong>Decreto Supremo 466</strong> constituye el marco jurídico fundamental que regula la instalación, funcionamiento y responsabilidades en farmacias y almacenes farmacéuticos. Todo auxiliar debe dominar las prohibiciones de dispensación y las obligaciones de infraestructura.
              </p>
            </article>
          </Link>

          {/* Tarjeta 2 */}
          <Link href="/guias/decreto-3-control-productos" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full hover:border-blue-300 hover:-translate-y-1 flex flex-col">
              <Thermometer className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-blue-600 transition-colors">Estabilidad y Cadena de Frío</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                La seguridad de los productos biológicos se rige por normas técnicas de almacenamiento estrictas. El mantenimiento de la temperatura entre <strong>2°C y 8°C</strong> es una obligación legal para insulinas y vacunas.
              </p>
            </article>
          </Link>

          {/* Tarjeta 3 */}
          <Link href="/guias/decreto-404-estupefacientes" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full hover:border-purple-300 hover:-translate-y-1 flex flex-col">
              <ShieldAlert className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-purple-600 transition-colors">Controlados: Decretos 404 y 405</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                La dispensación de Estupefacientes y Psicotrópicos requiere un cumplimiento riguroso de los reglamentos <strong>DS 404 y DS 405</strong>. Domina los requisitos de la Receta Cheque y Receta Retenida.
              </p>
            </article>
          </Link>
          
          {/* Tarjeta 4 */}
          <Link href="/blog/vision-ley-farmacos" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full hover:border-amber-300 hover:-translate-y-1 flex flex-col">
              <Pill className="text-amber-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-amber-600 transition-colors">Bioequivalencia y Ley de Fármacos</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                La <strong>Ley de Fármacos II</strong> impulsa el uso de medicamentos genéricos con sello de Bioequivalencia vigente, garantizando la misma eficacia que el innovador.
              </p>
            </article>
          </Link>

          {/* Tarjeta 5 */}
          <Link href="/guias/decreto-3-control-productos" className="group snap-center shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-full">
            <article className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full hover:border-rose-300 hover:-translate-y-1 flex flex-col">
              <Clipboard className="text-rose-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-black text-xl mb-4 leading-tight group-hover:text-rose-600 transition-colors">Seguridad y Farmacovigilancia</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                El reporte de Reacciones Adversas a Medicamentos (RAM) es un deber ético y legal del personal de farmacia ante el <strong>Instituto de Salud Pública (ISP)</strong>.
              </p>
            </article>
          </Link>

        </div>
        
        {/* Pista visual solo para móviles */}
        <div className="flex md:hidden justify-center items-center mt-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
          ← Desliza para explorar →
        </div>

      </div>
    </section>
  );
}