// Ruta: app/components/GuiaAuxiliarFarmaciaCard.tsx

"use client";

import Link from "next/link";
import { GraduationCap, FileText, BookOpen, ChevronRight, Pill, Thermometer, Shield } from "lucide-react";

export default function GuiaAuxiliarFarmaciaCard() {
  return (
    <Link href="/blog/como-ser-auxiliar-farmacia" className="block group">
      <article className="w-full rounded-[2rem] border-2 border-emerald-200 transition-all p-8 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-lg hover:shadow-xl relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-teal-200 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
            <GraduationCap size={40} />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <h3 className="font-black text-2xl text-[#003366] leading-tight group-hover:text-emerald-700 transition-colors">
                ¿Cómo ser Auxiliar de Farmacia?
              </h3>
              <FileText size={20} className="text-emerald-600" />
            </div>
            
            <p className="text-sm text-slate-600 mb-4 font-medium">
              Guía completa con <strong className="text-emerald-700">requisitos oficiales MINSAL</strong>, materias del examen y pasos para optar a la certificación SEREMI.
            </p>
            
            {/* NUEVA SECCIÓN: Materias del Examen */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-4 border border-emerald-100">
              <h4 className="text-sm font-black text-[#003366] mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-emerald-600" />
                Materias del Examen SEREMI (Decreto 466)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-start gap-2">
                  <Shield size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-emerald-800">Regulación Sanitaria</p>
                    <p className="text-[11px] text-slate-600">Distribución y venta de productos farmacéuticos</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Thermometer size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-emerald-800">Almacenamiento</p>
                    <p className="text-[11px] text-slate-600">Condiciones de almacenamiento y venta</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Pill size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-emerald-800">Farmacología</p>
                    <p className="text-[11px] text-slate-600">Acción terapéutica y contraindicaciones</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all w-full shadow-lg shadow-emerald-200 group-hover:shadow-emerald-300">
                <BookOpen size={18} /> Ver Guía Completa
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}