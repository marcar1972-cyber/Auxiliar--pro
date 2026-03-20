import Link from "next/link";
import { Zap, Star, Trophy, ShieldAlert, CheckCircle, Unlock } from "lucide-react";

export default function Precios() {
  return (
    <section id="precios" className="bg-slate-50 py-24 px-6 w-full border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            Elige tu plan de entrenamiento
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Comienza gratis hoy o desbloquea todo el arsenal de herramientas PRO para asegurar tu examen SEREMI.
          </p>
        </div>

        {/* Grilla ajustada para 4 planes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 items-stretch">
          
          {/* 1. Plan Aprendiz (GRATIS) */}
          <div className="bg-white p-8 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 shadow-sm flex flex-col hover:border-slate-400 transition-all hover:-translate-y-1">
            <div className="mb-6">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Unlock className="text-slate-600" size={24} />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tighter text-slate-900">Plan Aprendiz</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Tu puerta de entrada</p>
            </div>
            <div className="mb-10 border-b border-slate-100 pb-8">
              <span className="text-5xl font-black text-slate-900">$0</span>
              <span className="text-slate-400 font-bold text-sm"> / siempre</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-400 shrink-0 mt-0.5" /> Nivel 1 y 2 totalmente Gratis
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-400 shrink-0 mt-0.5" /> Material de estudio con Quiz
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-400 shrink-0 mt-0.5" /> DermoCheck Completo Gratis
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-400 shrink-0 mt-0.5" /> Acceso al Blog de la comunidad
              </li>
            </ul>
            <Link href="/registro" className="w-full py-4 md:py-4 bg-slate-100 text-slate-600 rounded-full font-black text-sm uppercase tracking-widest text-center hover:bg-slate-200 transition-all">
              Crear Cuenta Gratis
            </Link>
          </div>

          {/* 2. Plan Titular (MENSUAL) */}
          <div className="bg-white p-8 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 shadow-sm flex flex-col hover:border-blue-200 transition-all hover:-translate-y-1">
            <div className="mb-6">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-blue-500" size={24} />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tighter text-slate-900">Plan Titular</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Suscripción Mensual</p>
            </div>
            <div className="mb-10 border-b border-slate-100 pb-8">
              <span className="text-5xl font-black text-slate-900">$5.990</span>
              <span className="text-slate-400 font-bold text-sm"> / mes</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" /> Todo el Plan Aprendiz incluido
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" /> Acceso Total 30 días (Niveles 1-7)
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" /> Simulador de pruebas tipo SEREMI
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" /> Vademécum PRO Incluido
              </li>
            </ul>
            <a href="https://app.reveniu.com/checkout-custom-link/zUZj7Z0Rk5OAm0e1AIXHckl46R1oLs3M" target="_blank" rel="noopener noreferrer" className="block w-full py-4 md:py-4 bg-slate-100 text-slate-900 rounded-full font-black text-sm uppercase tracking-widest text-center hover:bg-slate-200 transition-all border border-slate-300">
              Suscribirme Mensual
            </a>
          </div>

          {/* 3. Pase Vitalicio PRO - EL DESTACADO ESTRATÉGICO */}
          <div className="bg-slate-900 p-8 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border-4 border-emerald-500 shadow-2xl flex flex-col transform lg:scale-105 relative z-10 -mt-4 md:mt-0">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-900 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
              Oferta Cierra 15 Marzo
            </div>
            <div className="mb-6 pt-2">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Trophy className="text-emerald-400" size={24} />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tighter text-white">Vitalicio PRO</h3>
              <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest mt-1">Pago único para siempre</p>
            </div>
            <div className="mb-10 border-b border-slate-700 pb-8">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                 <span className="text-5xl font-black text-white">$19.990</span>
                 <span className="text-slate-500 font-bold text-xl line-through decoration-emerald-500/50 italic">$29.990</span>
              </div>
              <span className="text-emerald-400 font-bold text-sm block">Ahorra $10.000 antes del cierre</span>
            </div>
            <ul className="space-y-4 mb-10 flex-1 text-slate-300">
              <li className="flex items-start gap-3 text-sm font-medium">
                <Star size={18} className="text-emerald-400 shrink-0 mt-0.5" /> Acceso De Por Vida: Niveles 1 al 7
              </li>
              <li className="flex items-start gap-3 text-sm font-medium">
                <Star size={18} className="text-emerald-400 shrink-0 mt-0.5" /> Vademécum PRO Permanente
              </li>
              <li className="flex items-start gap-3 text-sm font-medium">
                <Star size={18} className="text-emerald-400 shrink-0 mt-0.5" /> Todas las futuras actualizaciones
              </li>
              <li className="flex items-start gap-3 text-sm font-medium">
                <Star size={18} className="text-emerald-400 shrink-0 mt-0.5" /> Asistente de Estudio IA (24/7)
              </li>
            </ul>
            <a href="https://app.reveniu.com/checkout-custom-link/VzokcZmXPpXBHROw4P7b7Nzd3Dxjk7Fj" target="_blank" rel="noopener noreferrer" className="block w-full py-4 md:py-4 bg-emerald-500 text-slate-900 rounded-full font-black text-sm uppercase tracking-widest text-center hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1">
              COMPRAR PASE PRO
            </a>
          </div>

          {/* 4. Plan Certificado (ANUAL) */}
          <div className="bg-white p-8 md:p-8 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 shadow-sm flex flex-col hover:border-slate-800 transition-all hover:-translate-y-1 relative overflow-hidden">
            {/* Pequeña etiqueta de descuento arriba */}
            <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold px-4 py-1 uppercase tracking-widest rounded-bl-xl">
              Ahorra $10.000
            </div>
            <div className="mb-6 pt-2">
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ShieldAlert className="text-slate-600" size={24} />
              </div>
              <h3 className="font-black text-2xl uppercase tracking-tighter text-slate-900">Certificado</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Suscripción Anual</p>
            </div>
            
            {/* LÓGICA DE PRECIO ANCLA ACTUALIZADA */}
            <div className="mb-10 border-b border-slate-100 pb-8">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                 <span className="text-5xl font-black text-slate-900">$39.990</span>
                 <span className="text-slate-400 font-bold text-xl line-through italic">$49.990</span>
              </div>
              <span className="text-slate-500 font-bold text-sm block">Descuento válido por los primeros 11 meses</span>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-600 shrink-0 mt-0.5" /> Todo el Plan Aprendiz incluido
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-600 shrink-0 mt-0.5" /> Acceso Total 12 meses (Niveles 1-7)
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-600 shrink-0 mt-0.5" /> Simulador de pruebas tipo SEREMI
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-slate-600">
                <CheckCircle size={18} className="text-slate-600 shrink-0 mt-0.5" /> Vademécum PRO Incluido
              </li>
            </ul>
            <a href="https://app.reveniu.com/checkout-custom-link/oauLyUlV4n4s2nwyT8mpoCiCg1bIO7uA" target="_blank" rel="noopener noreferrer" className="block w-full py-4 md:py-4 bg-slate-900 text-white rounded-full font-black text-sm uppercase tracking-widest text-center hover:bg-slate-800 transition-all">
              Suscribirme Anual
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}