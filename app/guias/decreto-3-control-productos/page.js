'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, CheckCircle, AlertTriangle, Thermometer, ShieldCheck, FileText, Download, ArrowRight, Info, Package } from "lucide-react";

export default function GuiaDecreto3() {
  const [isPdfReady, setIsPdfReady] = useState(false);

  // 🖨️ FUNCIÓN PARA GENERAR EL PDF
  const generarPDF = () => {
    if (typeof window !== 'undefined' && window.html2pdf) {
      const elemento = document.getElementById('contenido-pdf');
      
      const opciones = {
        margin:       [10, 10, 10, 10], // Márgenes: Arriba, Izquierda, Abajo, Derecha
        filename:     'Guia-Decreto-3-AuxiliarPro.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, scrollY: 0 }, 
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        // 👇 ESTO EVITA LOS CORTES DE PÁGINA FEOS
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
      };

      window.html2pdf().from(elemento).set(opciones).save();
    } else {
      alert("Cargando herramienta PDF... espera un momento.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
      
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" 
        strategy="lazyOnload"
        onLoad={() => setIsPdfReady(true)}
      />

      {/* HEADER WEB (No sale en el PDF) */}
      <header className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link href="/blog" className="text-slate-400 hover:text-blue-600 font-bold text-sm flex items-center gap-2 transition-colors">
              ← Volver a la Biblioteca
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            <BookOpen size={18} />
            Guía de Estudio Oficial
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight text-balance">
            Reglamento de Control de Productos <span className="text-blue-600 whitespace-nowrap">(Decreto 3)</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-3xl">
            La base legal que garantiza que los medicamentos sean seguros, eficaces y de calidad. 
            Domina los conceptos de <strong>Registro ISP, Bioequivalencia y Cadena de Frío</strong>.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 🟢 COLUMNA IZQUIERDA: CONTENIDO DEL PDF */}
          <div id="contenido-pdf" className="lg:col-span-8 space-y-8 bg-white p-4 md:p-8 rounded-xl">
            
            {/* 🟢 LOGO Y TÍTULO PARA EL PDF (Solo visible al imprimir o descargar) */}
            <div className="mb-8 border-b border-slate-200 pb-4 flex items-center justify-between">
                <img 
                    src="/logo.webp" 
                    alt="AuxiliarPro Logo" 
                    className="w-32 object-contain" 
                    crossOrigin="anonymous" 
                />
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    Guía de Estudio 2026
                </span>
            </div>

            {/* 1. INTRODUCCIÓN */}
            <section className="break-inside-avoid mb-8">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                1. Introducción
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                El <strong>Decreto Supremo N° 3 (2010)</strong> es la columna vertebral de la calidad farmacéutica en Chile. Mientras otros decretos regulan el local (466) o las drogas peligrosas (404), el Decreto 3 se encarga del <strong>PRODUCTO</strong>.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl text-blue-900 italic flex gap-3 text-sm">
                <Info className="shrink-0" />
                <span><strong>Ojo para el Examen:</strong> La entidad fiscalizadora es el <strong>Instituto de Salud Pública (ISP)</strong>.</span>
              </div>
            </section>

            {/* 2. CONTENIDO PRINCIPAL */}
            <section className="break-inside-avoid">
              <h2 className="text-3xl font-black text-slate-900 mb-8 pb-2 border-b-2 border-slate-100">
                2. Contenido Principal
              </h2>

              {/* MÓDULO A */}
              <div className="mb-10 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-blue-600">Módulo A: Registro Sanitario</h3>
                <p className="mb-4 text-slate-600">Prohibida la distribución sin Registro ISP.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">Identificación</h4>
                    <p className="text-sm">Código en caja (ej: <code>F-1234/15</code>).</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 text-sm uppercase mb-1">Alerta</h4>
                    <p className="text-sm text-red-800">Sin registro es <strong>falsificado</strong>.</p>
                  </div>
                </div>
              </div>

              {/* MÓDULO B */}
              <div className="mb-10 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-blue-600">Módulo B: Bioequivalencia</h3>
                <div className="bg-yellow-50 p-5 rounded-2xl border-2 border-yellow-400 relative">
                    <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 uppercase">EXAMEN</div>
                    <strong className="text-lg text-slate-900 block mb-1">Bioequivalente (BE)</strong>
                    <p className="mb-2 text-sm text-slate-700">Genérico que demostró científicamente actuar igual que el innovador.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-yellow-800 bg-yellow-100 p-2 rounded-lg inline-block">
                        <CheckCircle size={14} /> Franja Amarilla obligatoria.
                    </div>
                </div>
              </div>

              {/* MÓDULO C */}
              <div className="mb-10 break-inside-avoid">
                 <h3 className="text-xl font-bold text-slate-900 mb-4 text-blue-600">Módulo C: Envases</h3>
                 <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr><th className="p-3">Tipo</th><th className="p-3">Ejemplo</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr><td className="p-3 font-bold text-blue-600">Primario</td><td className="p-3">Blíster (Contacto directo)</td></tr>
                      <tr><td className="p-3 font-bold text-slate-600">Secundario</td><td className="p-3">Caja (Externo)</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MÓDULO E */}
              <div className="mb-10 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-blue-600">Módulo E: Cadena de Frío</h3>
                <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full text-blue-500 shrink-0"><Thermometer size={24} /></div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-900">Rango: 2°C a 8°C</h3>
                    <p className="text-blue-800 text-sm">Vacunas e insulinas se dañan si se congelan.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. ROL Y CONCLUSIÓN */}
            <section className="break-inside-avoid bg-slate-50 p-6 rounded-2xl">
                <h2 className="text-xl font-black text-slate-900 mb-3">Rol del Auxiliar</h2>
                <ul className="space-y-2 text-sm mb-6">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500"/> Recepción: Lote y Vencimiento.</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500"/> Reposición: Sistema FEFO.</li>
                </ul>
                <div className="text-center pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Fuente: Decreto Supremo N° 3</p>
                </div>
            </section>
          </div>

          {/* 🔴 BARRA LATERAL (Sticky - No sale en el PDF si no está en el ID contenido-pdf) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <span className="bg-emerald-500 text-emerald-950 text-xs font-black px-3 py-1 rounded-full mb-4 inline-block">Quiz Express</span>
                  <h3 className="text-3xl font-black mb-4">¿Aprendiste?</h3>
                  <Link href="/quiz" className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg flex items-center justify-center gap-2">
                    COMENZAR TEST <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-50 text-red-600 p-3 rounded-full"><FileText size={24} /></div>
                    <div><h4 className="font-bold text-slate-900">Guía en PDF</h4><p className="text-xs text-slate-500">Descargar resumen</p></div>
                </div>
                <button 
                    onClick={generarPDF}
                    disabled={!isPdfReady}
                    className={`w-full border-2 border-slate-200 text-slate-600 font-bold text-center py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm ${isPdfReady ? 'hover:border-red-500 hover:text-red-600 cursor-pointer' : 'opacity-50'}`}
                >
                    <Download size={16} /> 
                    {isPdfReady ? 'DESCARGAR AHORA' : 'Cargando...'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
