'use client';
import { User, Heart, Lightbulb, ShieldCheck, Cpu, Code } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100" id="nosotros">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="bg-emerald-100 text-emerald-700 font-black tracking-widest text-[10px] uppercase px-3 py-1 rounded-full">
            Transparencia Total
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            De un Auxiliar para Auxiliares
          </h2>
          <p className="text-lg text-slate-500 mt-6 max-w-2xl mx-auto font-medium">
            <span className="text-emerald-600 font-bold">auxiliaresdefarmacia.cl</span> nace de una necesidad real, creado por alguien que está en la misma trinchera que tú.
          </p>
        </div>

        {/* Historia Principal */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row gap-10 items-center mb-16 shadow-sm">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white border-4 border-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-500 shadow-md">
                <User size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Hola, soy MaczDev 👋</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                        Soy <strong>Auxiliar Trainee de Farmacia</strong> y <strong>Desarrollador Web IA</strong>. Actualmente trabajo en el rubro y, al igual que tú, me estoy preparando para rendir la prueba de competencia <strong>SEREMI 2026</strong>.
                    </p>
                    <p>
                        Mientras estudiaba, me di cuenta de un gran vacío: <strong>no existían ensayos tipo prueba disponibles en la red</strong>. Esa frustración fue mi motor.
                    </p>
                    <p>
                        Decidí no quedarme de brazos cruzados. Uní mis conocimientos en farmacia y tecnología, y con la ayuda de <strong>Inteligencia Artificial (Gemini)</strong>, construí esta plataforma y generé guías de estudio propias.
                    </p>
                    <p>
                        Lanzamos en diciembre de 2025 y ver la gran afluencia de usuarios me confirma que esto era necesario.
                    </p>
                    <p className="font-bold text-slate-800 border-l-4 border-emerald-500 pl-4 italic">
                        "Creo firmemente que el conocimiento que nos permite crecer profesional y espiritualmente debe ser libre y gratuito para todos."
                    </p>
                </div>
            </div>
        </div>

        {/* Grid de Valores */}
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                    <Code size={28} />
                </div>
                <h4 className="font-black text-lg text-slate-900 mb-3">Tecnología + Salud</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                    Plataforma programada con asistencia de IA para estructurar contenido legal complejo de forma simple y didáctica.
                </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <Lightbulb size={28} />
                </div>
                <h4 className="font-black text-lg text-slate-900 mb-3">Nuestra Visión</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                    Crear la comunidad de apoyo más grande de Chile. Que nadie repruebe por falta de recursos de estudio.
                </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    <Heart size={28} fill="currentColor" />
                </div>
                <h4 className="font-black text-lg text-emerald-900 mb-3">Gratuidad Real</h4>
                <p className="text-sm text-emerald-800 leading-relaxed font-medium">
                    Sin letra chica. No vendemos tus datos. Un aporte personal para devolver la mano a la comunidad.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
