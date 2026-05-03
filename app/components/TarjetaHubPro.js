import { ShieldCheck, BookOpen, BrainCircuit, Lock } from "lucide-react";
import Link from "next/link";

export default function TarjetaHubPro({ isProUser = false }) {
  return (
    <div className="bg-[#002244] border border-slate-700 rounded-2xl p-6 shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
      {/* Ícono Principal */}
      <div className="bg-gradient-to-br from-[#ff9900] to-[#e68a00] p-4 rounded-full shadow-[0_0_20px_rgba(255,153,0,0.3)] shrink-0 z-10">
        <ShieldCheck className="w-10 h-10 text-white" />
      </div>

      {/* Contenido */}
      <div className="flex-1 text-center md:text-left z-10">
        <h3 className="text-2xl font-black text-white mb-2">Academia & Simulador PRO</h3>
        <p className="text-slate-300 text-sm md:text-base mb-5">
          Acceso total a los módulos de estudio oficiales y al Modo Fiscalizador. Casos complejos para aprobar a la primera.
        </p>

        {/* Lógica de Bifurcación */}
        {!isProUser ? (
          <Link href="/planes" className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-600 text-[#ff9900] font-bold px-5 py-2 rounded-full hover:bg-slate-800 transition-colors text-sm">
            <Lock size={16} />
            REQUIERE SUSCRIPCIÓN
          </Link>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/modulos" className="flex items-center justify-center gap-2 bg-white text-[#002244] font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all flex-1">
              <BookOpen size={18} />
              Ir a la Academia
            </Link>
            
            <Link href="/quiz/pro" className="flex items-center justify-center gap-2 bg-[#28a745] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#218838] shadow-[0_0_15px_rgba(40,167,69,0.4)] transition-all flex-1">
              <BrainCircuit size={18} />
              Iniciar Simulador
            </Link>
          </div>
        )}
      </div>

      {/* Brillo de fondo (Detalle UI) */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#003366] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </div>
  );
}