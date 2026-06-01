"use client";

import PlanesSuscripcion from "../components/PlanesSuscripcion"; 
import Link from "next/link";

export default function PaginaPlanes() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* BANNER BLACK SALE LOCAL ELIMINADO - SE USA EL GLOBAL DEL LAYOUT */}

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col items-center justify-start py-8 md:py-16">
        
        {/* SECCIÓN DE PLANES */}
        <PlanesSuscripcion />
        
        {/* BLOQUE DE CONFIANZA */}
        <div className="mt-8 mb-4 text-center bg-white border border-slate-200 px-8 py-5 rounded-2xl shadow-sm max-w-xl mx-auto">
          <p className="text-slate-700 text-sm font-bold leading-relaxed">
            Tus pagos están protegidos por <span className="text-blue-500">Mercado Pago</span>. 
            <br />
            Los planes Mensual y Anual PRO operan bajo <span className="text-[#003366]">renovación automática (mensual o anual)</span> y puedes cancelarlos libremente cuando quieras. El pase de 15 días expira de forma normal sin cargos posteriores.
          </p>
        </div>
      </main>

      {/* FOOTER LEGAL Y DE AUTORIDAD */}
      <footer className="p-10 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400 text-[11px] uppercase tracking-[0.15em] font-black mb-3">
            © 2026 AuxiliarPro • EdTech Farmacéutica
          </p>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">
            Plataforma de preparación técnica basada en la normativa vigente del Ministerio de Salud (MINSAL) y el Instituto de Salud Pública (ISP). 
            Decretos aplicados: DS 466, DS 404 y DS 405.
          </p>
        </div>
      </footer>
      
    </div>
  );
}