import Link from "next/link";
import { ArrowLeft, Quote, CheckCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Ley de Fármacos II y el Futuro del Auxiliar | Opinión MaczDev",
  description: "Análisis sobre el impacto de la Ley de Fármacos II en la farmacia chilena y por qué la gestión y especialización son claves. Conoce la visión detrás de DermoCheck.",
};

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-white text-slate-800 font-sans pb-24">
      {/* Header / Hero del Artículo */}
      <header className="bg-slate-50 border-b border-slate-100 py-20 px-6">
        <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-slate-500 hover:text-emerald-600 mb-8 transition-colors font-medium">
                <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
            </Link>
            
            <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-4 block">
                Opinión & Estrategia
            </span>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                Ley de Fármacos II: Mi visión de futuro y por qué creé DermoCheck
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
                Nadie tiene una bola de cristal, pero el escenario económico de la farmacia podría cambiar. Aquí te cuento por qué creo que gestionar mejor y especializarse es el único camino seguro.
            </p>
            
            {/* Autor */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 overflow-hidden border-2 border-white shadow-sm">
                   {/* Usamos tu foto real */}
                   <img src="/maczdev.webp" alt="MaczDev" className="w-full h-full object-cover" />
                </div>
                <div>
                    <p className="font-bold text-slate-900">Por Marcelo (MaczDev)</p>
                    <p className="text-sm text-slate-500">Auxiliar Trainee & Developer</p>
                </div>
            </div>
        </div>
      </header>

      {/* Contenido del Post */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-10 leading-loose text-lg text-slate-700">
        
        <p>
            Tengo una admiración gigante por la "vieja escuela". Esos colegas que llevan años en el mesón, que interpretan recetas ilegibles y que son el corazón de la farmacia. Ellos son la base de todo.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-xl">
            <p className="italic text-amber-900 font-medium">
                Sin embargo, hay un "ruido de fondo" en la discusión legislativa que debemos analizar con frialdad: la fuerte intención social y política de <strong>disminuir el gasto de bolsillo de los chilenos</strong>.
            </p>
        </div>

        <p>
            Este es un objetivo positivo para el país, sin duda. Pero debemos ser realistas sobre sus efectos: <strong>la consecuencia inevitable de bajar los precios al público será una mayor regulación y la compresión de los márgenes de ganancia para la farmacia.</strong>
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6">La pregunta que me motivó a moverme</h2>
        
        <p>
            Me planteé el siguiente escenario: <em>"Si, como consecuencia de la ley, el medicamento con receta deja de ser el gran motor de rentabilidad de la empresa, ¿dónde va a buscar ganancias la farmacia para subsistir?"</em>.
        </p>

        <p>
            Mi apuesta es que la farmacia del futuro necesitará compensar esa caída de márgenes evolucionando hacia las áreas que el mercado no regula y que permiten mayor gestión comercial: <strong>Dermocosmética, Vitaminas y Bienestar.</strong>
        </p>
        
        <p>
            Vislumbro un futuro donde el auxiliar indispensable no es solo el que despacha rápido la receta (que deja poco margen), sino el que <strong>cuida y rentabiliza el negocio</strong>.
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6">¿Por qué cuidar el negocio? (El Rol de la Gestión)</h2>
        
        <p>
            Aquí es donde aterrizo mi visión en algo real. Especializarse no es solo saber vender una crema cara; es saber <strong>gestionarla</strong>.
        </p>
        
        <p>
            Los productos de Dermo son activos de alto valor. Si un lote de protectores solares importados se vence en la estantería porque nadie lo revisó, es una pérdida dolorosa que afecta directamente los números de la sucursal (y a la larga, pone en riesgo nuestra estabilidad laboral).
        </p>

        <p>
            Para solucionar esto, decidí no quedarme solo en la preocupación. Como soy desarrollador además de auxiliar, creé una herramienta tangible para atacar este problema hoy mismo.
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6">DermoCheck: Mi primer paso real</h2>

        <p>
            Me di cuenta de que muchas veces perdemos tiempo (y dinero) tratando de descifrar fechas de vencimiento en productos importados que solo traen códigos extraños. Por eso desarrollé <strong>DermoCheck</strong>.
        </p>

        <ul className="space-y-4 my-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Es una herramienta gratuita y precisa.</span>
            </li>
            <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Permite verificar fecha de producción y vencimiento real a partir del lote (Batch Code).</span>
            </li>
            <li className="flex items-start gap-3">
                <CheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <span>Te permite demostrar a tu jefatura que tienes el control total de tu stock.</span>
            </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-6">Lo que viene: Un proyecto de estudio</h2>

        <p>
            DermoCheck es solo el comienzo. Estoy convencido de que la especialización en Dermo es el camino para protegernos ante cualquier consecuencia del mercado, pero he notado que la información para estudiar está muy dispersa.
        </p>

        <p>
            Por eso, te cuento en primicia que <strong>tengo el proyecto de estructurar guías de estudio</strong> sobre dermocosmética y gestión, pensadas por un auxiliar para auxiliares. Aún es una idea en desarrollo, pero nace de la misma convicción: <strong>El conocimiento es nuestro mejor seguro.</strong>
        </p>

        {/* CONCLUSIÓN Y CTA */}
        <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 mt-16 shadow-2xl relative overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <h3 className="text-2xl font-black mb-6 relative z-10">Mi invitación</h3>
            <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                Mientras avanzo con el proyecto de las guías, te invito a usar lo que ya es una realidad. Usa <strong>DermoCheck</strong> en tu turno. Revisa esos lotes dudosos, limpia tu stock, evita mermas. Demuestra con hechos que tu gestión es impecable.
            </p>
            
            <div className="bg-emerald-900/40 border border-emerald-500/20 p-6 rounded-xl mb-8 relative z-10">
                <Quote className="text-emerald-400 mb-2 opacity-50" size={24} />
                <p className="font-medium italic text-emerald-100">
                    "Puede que me equivoque sobre los efectos de la Ley, pero estoy seguro de una cosa: un auxiliar que se especializa constantemente y usa tecnología para cuidar los recursos de su farmacia, siempre tendrá trabajo."
                </p>
            </div>

            <a 
                href="https://dermocheck.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black px-8 py-4 rounded-full text-lg transition-all w-full md:w-auto shadow-lg hover:shadow-emerald-500/20 relative z-10"
            >
                Prueba la herramienta aquí: DermoCheck.cl <ExternalLink size={20} />
            </a>
        </div>

      </div>
    </article>
  );
}
