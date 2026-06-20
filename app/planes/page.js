"use client";

import React, { useState, useEffect } from "react";
import PlanesSuscripcion from "../components/PlanesSuscripcion"; 
import Link from "next/link";

export default function PaginaPlanes() {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [contador, setContador] = useState(4);
  const [urlDestino, setUrlDestino] = useState("");

  useEffect(() => {
    let timer;
    if (mostrarAviso && contador > 0) {
      timer = setTimeout(() => setContador(contador - 1), 1000);
    } else if (mostrarAviso && contador === 0 && urlDestino) {
      window.location.href = urlDestino;
    }
    return () => clearTimeout(timer);
  }, [mostrarAviso, contador, urlDestino]);

  const handleInterceptarPago = (urlMercadoPago) => {
    setUrlDestino(urlMercadoPago);
    setContador(4);
    setMostrarAviso(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">
      
      {mostrarAviso && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 md:p-8 max-w-md w-full text-center relative overflow-hidden">
            
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-black mx-auto mb-4 border border-blue-200 shadow-sm">
              {contador}s
            </div>
            
            <h3 className="text-slate-900 text-lg font-black tracking-tight mb-2">
              Redirigiendo a Mercado Pago...
            </h3>
            
            <blockquote className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-left">
              <p className="text-amber-900 text-xs md:text-sm font-medium leading-relaxed">
                <strong>Nota Importante:</strong> Si después de realizar el pago de tu suscripción no se activa tu cuenta PRO de forma inmediata, envíanos un correo a <span className="font-bold underline text-blue-700">hola@auxiliarpro.cl</span> para revisar tu caso a la brevedad y solucionarlo.
              </p>
            </blockquote>
            
            <p className="text-slate-400 text-[11px] font-semibold uppercase mt-4">
              Preparando conexión segura con la pasarela
            </p>
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col items-center justify-start py-8 md:py-16">
        <PlanesSuscripcion onSelectPlan={handleInterceptarPago} urlManual={urlDestino} />
        
        <div className="mt-8 mb-4 text-center bg-white border border-slate-200 px-8 py-5 rounded-2xl shadow-sm max-w-xl mx-auto">
          <p className="text-slate-700 text-sm font-bold leading-relaxed">
            Tus pagos están protegidos por <span className="text-blue-500">Mercado Pago</span>. 
            <br />
            Todos los planes son <span className="text-[#003366]">pagos únicos</span> sin cargos recurrentes. El pase de 15 días, el plan mensual y el plan anual expiran de forma normal sin cargos posteriores.
          </p>
        </div>
      </main>

      <footer className="p-10 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-400 text-[11px] uppercase tracking-[0.15em] font-black mb-3">
            © 2026 AuxiliarPro • EdTech Farmacéutica
          </p>
          <p className="text-slate-500 text-xs font-medium leading-relaxed">
            Plataforma de preparación técnica basada en la normativa vigente del Ministerio de Salud (MINSAL) y el Instituto de Salud Pública (ISP). 
            Decretos applied: DS 466, DS 404 y DS 405.
          </p>
        </div>
      </footer>
      
    </div>
  );
}