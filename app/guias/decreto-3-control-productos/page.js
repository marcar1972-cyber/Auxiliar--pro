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
        margin:       10,
        filename:     'Guia-Decreto-3-AuxiliarPro.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true }, 
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      window.html2pdf().from(elemento).set(opciones).save();
    } else {
      alert("La herramienta de PDF se está cargando, intenta de nuevo en 2 segundos.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
      
      {/* 🟢 SCRIPT PARA PDF (Carga externa) */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" 
        strategy="lazyOnload"
        onLoad={() => setIsPdfReady(true)}
      />

      {/* HEADER DE LA GUÍA */}
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
          
          {/* 🟢 TÍTULO CORREGIDO: Se verá equilibrado en PC y Móvil */}
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
          
          {/* 🟢 COLUMNA IZQUIERDA: CONTENIDO COMPLETO (8 columnas) */}
          <div id="contenido-pdf" className="lg:col-span-8 space-y-12">
            
            {/* 1. INTRODUCCIÓN */}
            <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                1. Introducción
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                El <strong>Decreto Supremo N° 3 (2010)</strong> es la columna vertebral de la calidad farmacéutica en Chile. Mientras otros decretos regulan el local (466) o las drogas peligrosas (404), el Decreto 3 se encarga del <strong>PRODUCTO</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Este reglamento establece las exigencias de calidad que debe cumplir todo medicamento para ser distribuido en el país, asegurando que sea <strong>Seguro</strong> (no hace daño), <strong>Eficaz</strong> (sirve para lo que dice) y de <strong>Calidad</strong> (está bien fabricado).
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl text-blue-900 italic flex gap-3">
                <Info className="shrink-0" />
                <span>
                  <strong>Ojo para el Examen:</strong> La entidad encargada de fiscalizar este decreto a nivel nacional es el <strong>Instituto de Salud Pública (ISP)</strong>.
                </span>
              </div>
            </section>

            {/* 2. CONTENIDO PRINCIPAL */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-8">
                2. Contenido Principal: Los 5 Pilares del Decreto 3
              </h2>

              {/* MÓDULO A */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Módulo A: El Registro Sanitario (El "RUT" del Medicamento)
                </h3>
                <p className="mb-6 text-lg text-slate-600">
                  Según el Decreto 3, está <strong>prohibida</strong> la distribución de cualquier producto farmacéutico que no cuente con Registro Sanitario.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase text-blue-600">¿Qué es?</h4>
                    <p className="text-sm">Es la licencia que otorga el ISP a un producto específico, validando su fórmula, fabricación y estabilidad.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase text-blue-600">Identificación</h4>
                    <p className="text-sm mb-2">En la caja verás un código (ej: <code>F-1234/15</code>).</p>
                    <ul className="text-xs text-slate-500 list-disc pl-4 space-y-1">
                        <li>F: Fármaco</li>
                        <li>B: Biológico</li>
                        <li>C: Cosmético</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 text-red-800 text-sm">
                    <AlertTriangle className="shrink-0" size={20}/>
                    <p><strong>Importancia Legal:</strong> Si un producto no tiene este código en la caja, se considera falsificado o de contrabando, y su venta es un delito contra la salud pública.</p>
                </div>
              </div>

              {/* MÓDULO B */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Módulo B: Bioequivalencia y Tipos de Medicamentos
                </h3>
                <p className="mb-6 text-lg text-slate-600">
                    Este es el corazón del Decreto 3 moderno. Debes saber diferenciar las tres categorías legales:
                </p>
                <ul className="space-y-4">
                    <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <strong className="text-lg text-blue-700 block mb-1">1. Innovador (Referente)</strong>
                        Es el medicamento original que patentó la molécula. Demostró seguridad y eficacia con estudios clínicos millonarios.
                    </li>
                    <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <strong className="text-lg text-slate-700 block mb-1">2. Genérico (Copia)</strong>
                        Medicamento que contiene el mismo principio activo y dosis, pero que <strong>NO</strong> ha realizado estudios de bioequivalencia.
                    </li>
                    <li className="bg-yellow-50 p-5 rounded-2xl border-2 border-yellow-400 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                            Clave Examen
                        </div>
                        <strong className="text-lg text-slate-900 block mb-1">3. Bioequivalente (BE)</strong>
                        <p className="mb-3 text-sm">
                            Es un genérico que se sometió a estudios in vivo (en humanos) y <strong>demostró científicamente</strong> que se comporta exactamente igual que el innovador.
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-yellow-800 bg-yellow-100 p-2 rounded-lg inline-block">
                            <CheckCircle size={14} /> Exigencia: Franja Amarilla en 25% del envase.
                        </div>
                    </li>
                </ul>
              </div>

              {/* MÓDULO C */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Módulo C: Definiciones Técnicas de Envases
                </h3>
                <p className="mb-4 text-slate-600">El Decreto 3 hace una distinción clave que suelen preguntar:</p>
                
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-4">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="p-4 font-black text-slate-900 text-sm uppercase">Tipo</th>
                        <th className="p-4 font-black text-slate-900 text-sm uppercase">Función</th>
                        <th className="p-4 font-black text-slate-900 text-sm uppercase">Ejemplo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      <tr>
                        <td className="p-4 font-bold text-blue-600">Envase Primario</td>
                        <td className="p-4">Contacto directo. Protege de humedad y contaminación.</td>
                        <td className="p-4">Blíster, Frasco, Ampolla.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-slate-600">Envase Secundario</td>
                        <td className="p-4">Embalaje externo. Protege, identifica e informa.</td>
                        <td className="p-4">Caja de cartón.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 italic">
                  <strong>Regla de Oro:</strong> Si el envase primario (blíster) está roto, el medicamento pierde su garantía de calidad inmediatamente, aunque la caja esté nueva.
                </p>
              </div>

              {/* MÓDULO D */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Módulo D: Trazabilidad (Lote y Vencimiento)
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <Package className="text-blue-500 mb-3" />
                        <h4 className="font-bold text-slate-900 mb-2">Serie o Lote</h4>
                        <p className="text-sm text-slate-600">
                            Código que identifica a un grupo de productos fabricados en un mismo ciclo. Vital para retirar productos ante una <strong>Alerta Sanitaria</strong> del ISP.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200">
                        <AlertTriangle className="text-red-500 mb-3" />
                        <h4 className="font-bold text-slate-900 mb-2">Vencimiento</h4>
                        <p className="text-sm text-slate-600">
                            Fecha límite de garantía. Está <strong>prohibido</strong> tener productos vencidos en estantería; deben ir a zona de "Merma" o "Cuarentena".
                        </p>
                    </div>
                </div>
              </div>

              {/* MÓDULO E */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Módulo E: Condiciones de Almacenamiento
                </h3>
                <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex flex-col sm:flex-row items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-blue-500">
                    <Thermometer size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900 mb-2">Rango Crítico: 2°C a 8°C</h3>
                    <p className="text-blue-800 leading-relaxed text-sm mb-4">
                      Las vacunas e insulinas mueren si se congelan (bajo 0°C) o si se calientan. 
                      El auxiliar debe registrar la temperatura diariamente.
                    </p>
                    <div className="bg-white/60 p-3 rounded-lg text-xs text-blue-900">
                        <strong>Productos críticos:</strong> Insulinas, Vacunas, Colirios, Anillos vaginales.
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* 3. ROL DEL AUXILIAR */}
            <section className="bg-slate-100 p-8 rounded-3xl">
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                    3. El Rol del Auxiliar según el Decreto 3
                </h2>
                <p className="mb-4 text-slate-600">Aunque el Químico Farmacéutico es el director técnico, el Auxiliar es el ejecutor de la calidad:</p>
                <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                        <div>
                            <strong>Recepción:</strong> Revisar que el Lote y Vencimiento de la factura coincidan con la caja.
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                        <div>
                            <strong>Reposición:</strong> Aplicar sistema FEFO ("Lo primero que vence es lo primero que sale").
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                        <div>
                            <strong>Dispensación:</strong> Explicar al paciente que el Bioequivalente (Franja Amarilla) es igual de seguro que el caro.
                        </div>
                    </li>
                </ul>
            </section>

            {/* 4. CONCLUSIÓN */}
            <section className="mb-10">
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                    4. Conclusión
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                    El Decreto Supremo N° 3 es la garantía de que lo que vendemos es medicina y no veneno. Regula la identidad (Registro), la calidad (Bioequivalencia) y la vida útil (Vencimiento) del fármaco.
                </p>
                <p className="text-lg font-bold text-slate-900">
                    Para aprobar tu examen de competencia, recuerda: Sin Registro ISP no hay venta, y sin Cadena de Frío no hay eficacia.
                </p>
                <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
                    Fuente: Biblioteca del Congreso Nacional de Chile / Ministerio de Salud - Decreto 3.
                </p>
            </section>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY (4 columnas) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* TARJETA 1: QUIZ */}
              <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  <span className="bg-emerald-500 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                    Quiz Express
                  </span>
                  <h3 className="text-3xl font-black mb-4 leading-tight">
                    ¿Entendiste el Decreto 3?
                  </h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                    Pon a prueba lo que acabas de leer con 10 preguntas rápidas tipo SEREMI.
                  </p>
                  
                  <Link 
                    href="/quiz" 
                    className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    COMENZAR TEST <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* TARJETA 2: DESCARGAR PDF AUTOMÁTICO */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-50 text-red-600 p-3 rounded-full">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">Guía en PDF</h4>
                        <p className="text-xs text-slate-500">Guardar para estudiar</p>
                    </div>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Convierte esta página en un archivo PDF automáticamente.
                </p>
                
                {/* BOTÓN MAGICO */}
                <button 
                    onClick={generarPDF}
                    disabled={!isPdfReady}
                    className={`w-full border-2 border-slate-200 text-slate-600 font-bold text-center py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm ${isPdfReady ? 'hover:border-red-500 hover:text-red-600 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                >
                    <Download size={16} /> 
                    {isPdfReady ? 'DESCARGAR AHORA' : 'Cargando herramienta...'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
