"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti"; // Opcional: instalas con 'npm i canvas-confetti' o lo borras

export default function SuccessPage() {
  
  useEffect(() => {
    // Disparamos una celebración visual al cargar
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#10b981", "#3b82f6"]
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#10b981", "#3b82f6"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-100 border border-slate-100 p-8 md:p-12 text-center relative overflow-hidden">
        
        {/* Decoración de fondo suave */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative">
          {/* ICONO CENTRAL */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-8 animate-bounce">
            <CheckCircle className="text-emerald-500" size={40} />
          </div>

          <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
            ¡Bienvenido al <span className="text-emerald-500">Nivel PRO</span>!
          </h1>
          
          <p className="text-slate-500 font-bold text-lg mb-8 leading-relaxed">
            Tu pago ha sido procesado con éxito. Ya tienes acceso total a todas las herramientas de AuxiliarPro v4.0.
          </p>

          {/* BENEFICIOS ACTIVADOS */}
          <div className="flex flex-col gap-4 mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left">
            <div className="flex items-start gap-3 text-sm font-bold text-slate-700">
              <span className="text-emerald-500 text-lg leading-none">✓</span>
              <span>Simulador Inicial Completo</span>
            </div>
            <div className="flex items-start gap-3 text-sm font-bold text-slate-700">
              <span className="text-emerald-500 text-lg leading-none">✓</span>
              <span>Simulador PRO Completo</span>
            </div>
            <div className="flex items-start gap-3 text-sm font-bold text-slate-700">
              <span className="text-emerald-500 text-lg leading-none">✓</span>
              <span>Vademécum Profesional</span>
            </div>
          </div>

          {/* BOTÓN GIGANTE (CTA) */}
          <Link 
            href="/quiz" 
            className="group w-full bg-slate-900 text-white hover:bg-black font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-3 text-xl shadow-xl hover:scale-[1.02] active:scale-95"
          >
            Ir al Simulador
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>

          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Acceso Seguro • AuxiliarPro Chile</span>
          </div>
        </div>
      </div>
    </main>
  );
}