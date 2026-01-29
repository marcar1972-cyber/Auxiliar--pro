'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { 
  BookOpen, CheckCircle, AlertTriangle, Thermometer, ShieldCheck, 
  FileText, Download, ArrowRight, Info, Package, XCircle, Trophy, 
  Clock, ExternalLink, Heart 
} from "lucide-react";

// 📝 10 PREGUNTAS CLAVE DEL DECRETO 3 (Expandido)
const preguntasQuiz = [
  {
    pregunta: "¿Qué indica obligatoriamente la Franja Amarilla en un envase?",
    opciones: ["Es un medicamento Genérico", "Es Bioequivalente", "Requiere Receta Cheque", "Es de Venta Directa"],
    correcta: 1 
  },
  {
    pregunta: "¿Cuál es el rango de temperatura estricto para la Cadena de Frío?",
    opciones: ["0°C a 5°C", "2°C a 8°C", "8°C a 25°C", "Menos de 0°C"],
    correcta: 1
  },
  {
    pregunta: "¿Qué institución otorga el Registro Sanitario en Chile?",
    opciones: ["La SEREMI de Salud", "El CENABAST", "El Instituto de Salud Pública (ISP)", "El Ministerio de Economía"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el envase primario?",
    opciones: ["La caja de cartón", "El blíster o frasco (contacto directo)", "La bolsa de la farmacia", "El embalaje de transporte"],
    correcta: 1
  },
  {
    pregunta: "¿Si un medicamento no tiene Registro ISP, se considera...?",
    opciones: ["Un remedio casero", "Un suplemento alimenticio", "Falsificado o contrabando (Ilegal)", "Un producto importado legal"],
    correcta: 2
  },
  {
    pregunta: "¿Qué significa el término FEFO en almacenamiento?",
    opciones: ["Lo primero que entra es lo primero que sale", "Lo primero que vence es lo primero que sale", "Lo más barato se vende primero", "Lo último que llega se guarda atrás"],
    correcta: 1
  },
  {
    pregunta: "¿Dónde debe aparecer la fecha de vencimiento?",
    opciones: ["Solo en la caja externa", "Solo en el blíster", "Tanto en el envase primario como en el secundario", "En la factura de compra solamente"],
    correcta: 2
  },
  {
    pregunta: "¿Qué pasa si se rompe la cadena de frío de una vacuna?",
    opciones: ["Se puede volver a congelar", "Se debe vender rápido", "Pierde su eficacia y debe eliminarse", "Se puede usar si no cambió de color"],
    correcta: 2
  },
  {
    pregunta: "¿Qué diferencia legal tiene un Bioequivalente de un Genérico común?",
    opciones: ["Es más barato", "Tiene estudios científicos que prueban su eficacia igual al innovador", "Es fabricado en el extranjero", "No tiene ninguna diferencia"],
    correcta: 1
  },
  {
    pregunta: "¿Qué debe hacer el auxiliar al recepcionar un pedido?",
    opciones: ["Guardar todo rápido sin mirar", "Verificar que Lote y Vencimiento coincidan con la factura y caja", "Abrir los frascos para probar el sabor", "Poner los productos nuevos adelante en la estantería"],
    correcta: 1
  }
];

export default function GuiaDecreto3() {
  const [isPdfReady, setIsPdfReady] = useState(false);
   
  // ESTADOS DEL QUIZ
  const [quizActivo, setQuizActivo] = useState(false);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null); 

  // 🎮 LÓGICA DEL QUIZ
  const manejarRespuesta = (indiceOpcion) => {
    setRespuestaSeleccionada(indiceOpcion);
    
    // Esperamos un poquito para que el usuario vea si acertó (feedback visual)
    setTimeout(() => {
        if (indiceOpcion === preguntasQuiz[preguntaActual].correcta) {
            setPuntaje(puntaje + 1);
        }

        const siguientePregunta = preguntaActual + 1;
        if (siguientePregunta < preguntasQuiz.length) {
            setPreguntaActual(siguientePregunta);
            setRespuestaSeleccionada(null);
        } else {
            setMostrarResultado(true);
        }
    }, 800); // 0.8 segundos de espera
  };

  const reiniciarQuiz = () => {
    setQuizActivo(false);
    setPreguntaActual(0);
    setPuntaje(0);
    setMostrarResultado(false);
    setRespuestaSeleccionada(null);
  };

  // 🖨️ FUNCIÓN PARA GENERAR EL PDF
  const generarPDF = () => {
    if (typeof window !== 'undefined' && window.html2pdf) {
      const elemento = document.getElementById('contenido-pdf');
      
      const opciones = {
        margin:       [15, 15, 15, 15],
        filename:     'Guia-Decreto-3-AuxiliarPro.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, scrollY: 0 }, 
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
      };

      window.html2pdf().from(elemento).set(opciones).save();
    } else {
      alert("La herramienta de PDF se está cargando, intenta de nuevo en 2 segundos.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
      
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" 
        strategy="lazyOnload"
        onLoad={() => setIsPdfReady(true)}
      />

      {/* HEADER DE LA GUÍA (Estilo Emerald) */}
      <header className="bg-emerald-900 border-b border-emerald-800 py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link href="/guias" className="text-emerald-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-colors">
              ← Volver a la Biblioteca
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4">
            <BookOpen size={18} />
            Módulo Legislativo
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Reglamento de Control de Productos <span className="text-emerald-400 whitespace-nowrap">(Decreto 3)</span>
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            La base legal que garantiza que los medicamentos sean seguros, eficaces y de calidad. 
            Domina los conceptos de <strong>Registro ISP, Bioequivalencia y Cadena de Frío</strong>.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 🟢 COLUMNA IZQUIERDA: CONTENIDO COMPLETO (8 columnas) */}
          <div id="contenido-pdf" className="lg:col-span-8 space-y-12 bg-white p-4 md:p-8 rounded-xl shadow-sm">
            
            <div className="mb-8 border-b pb-4 border-slate-100 flex justify-between items-center">
                <img 
                    src="/logo.webp" 
                    alt="AuxiliarPro Logo" 
                    className="w-32" 
                    crossOrigin="anonymous" 
                />
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Guía Oficial 2026</span>
            </div>

            {/* 1. INTRODUCCIÓN */}
            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm break-inside-avoid">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                1. Introducción
              </h2>
              <p className="text-lg leading-relaxed mb-4 text-slate-600">
                El <strong>Decreto Supremo N° 3 (2010)</strong> es la columna vertebral de la calidad farmacéutica en Chile. Mientras otros decretos regulan el local (466) o las drogas peligrosas (404), el Decreto 3 se encarga del <strong>PRODUCTO</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-slate-600">
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
              <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                2. Contenido Principal: Los 5 Pilares del Decreto 3
              </h2>

              {/* MÓDULO A */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Módulo A: El Registro Sanitario (El "RUT" del Medicamento)
                </h3>
                <p className="mb-6 text-lg text-slate-600">
                  Según el Decreto 3, está <strong>prohibida</strong> la distribución de cualquier producto farmacéutico que no cuente con Registro Sanitario.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase text-blue-600">¿Qué es?</h4>
                    <p className="text-sm text-slate-600">Es la licencia que otorga el ISP a un producto específico, validando su fórmula, fabricación y estabilidad.</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase text-blue-600">Identificación</h4>
                    <p className="text-sm text-slate-600 mb-2">En la caja verás un código (ej: <code>F-1234/15</code>).</p>
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
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Módulo B: Bioequivalencia y Tipos de Medicamentos
                </h3>
                <p className="mb-6 text-lg text-slate-600">
                    Este es el corazón del Decreto 3 moderno. Debes saber diferenciar las tres categorías legales:
                </p>
                <ul className="space-y-4">
                    <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <strong className="text-lg text-blue-700 block mb-1">1. Innovador (Referente)</strong>
                        <p className="text-sm text-slate-600">Es el medicamento original que patentó la molécula. Demostró seguridad y eficacia con estudios clínicos millonarios.</p>
                    </li>
                    <li className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <strong className="text-lg text-slate-700 block mb-1">2. Genérico (Copia)</strong>
                        <p className="text-sm text-slate-600">Medicamento que contiene el mismo principio activo y dosis, pero que <strong>NO</strong> ha realizado estudios de bioequivalencia.</p>
                    </li>
                    <li className="bg-yellow-50 p-5 rounded-2xl border-2 border-yellow-400 shadow-md relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                            Clave Examen
                        </div>
                        <strong className="text-lg text-slate-900 block mb-1">3. Bioequivalente (BE)</strong>
                        <p className="mb-3 text-sm text-slate-700">
                            Es un genérico que se sometió a estudios in vivo (en humanos) y <strong>demostró científicamente</strong> que se comporta exactamente igual que el innovador.
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-yellow-800 bg-yellow-100 p-2 rounded-lg inline-block">
                            <CheckCircle size={14} /> Exigencia: Franja Amarilla en 25% del envase.
                        </div>
                    </li>
                </ul>
              </div>

              {/* MÓDULO C */}
              <div className="mb-12 break-inside-avoid">
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
                    <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
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
              <div className="mb-12 break-inside-avoid">
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
              <div className="mb-12 break-inside-avoid">
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
            <section className="bg-slate-100 p-8 rounded-3xl break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                    3. El Rol del Auxiliar según el Decreto 3
                </h2>
                <p className="mb-4 text-slate-600">Aunque el Químico Farmacéutico es el director técnico, el Auxiliar es el ejecutor de la calidad:</p>
                <ul className="space-y-3 text-slate-700">
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
            <section className="mb-10 break-inside-avoid">
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

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY CON QUIZ INTERACTIVO */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* TARJETA 1: QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-emerald-500 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Entendiste el Decreto 3?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Responde 10 preguntas rápidas sobre Bioequivalencia, ISP y cadena de frío. ¡Sin salir de aquí!
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            COMENZAR TEST <ArrowRight size={18} />
                        </button>
                    </>
                  )}

                  {/* ESTADO 2: PREGUNTAS */}
                  {quizActivo && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span>Pregunta {preguntaActual + 1} de {preguntasQuiz.length}</span>
                            <button onClick={reiniciarQuiz}><XCircle size={20} className="hover:text-red-400"/></button>
                        </div>
                        
                        <h4 className="font-bold text-lg mb-6 leading-tight">
                            {preguntasQuiz[preguntaActual].pregunta}
                        </h4>

                        <div className="space-y-3">
                            {preguntasQuiz[preguntaActual].opciones.map((opcion, index) => (
                                <button
                                    key={`${preguntaActual}-${index}`} 
                                    onClick={() => manejarRespuesta(index)}
                                    disabled={respuestaSeleccionada !== null}
                                    className={`w-full text-left p-3 rounded-xl text-sm font-medium transition-all ${
                                        respuestaSeleccionada === index 
                                            ? index === preguntasQuiz[preguntaActual].correcta 
                                                ? 'bg-emerald-500 text-emerald-950 font-bold' 
                                                : 'bg-red-500 text-white'
                                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                                    }`}
                                >
                                    {opcion}
                                </button>
                            ))}
                        </div>
                    </div>
                  )}

                  {/* ESTADO 3: RESULTADOS */}
                  {mostrarResultado && (
                    <div className="text-center animate-in zoom-in duration-300">
                        <div className="bg-emerald-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">¡Completado!</h3>
                        <p className="text-slate-400 mb-6">
                            Obtuviste <strong className="text-white">{puntaje}</strong> de <strong className="text-white">{preguntasQuiz.length}</strong> correctas.
                        </p>
                        
                        <div className="space-y-3">
                            {puntaje === preguntasQuiz.length ? (
                                <div className="bg-emerald-900/50 p-3 rounded-lg text-sm text-emerald-200 border border-emerald-800">
                                    ¡Excelente! Dominas el Decreto 3.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Intentar de nuevo
                                </button>
                            )}
                            
                            <Link href="/quiz" className="block w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-500 text-sm">
                                Ir al Simulador Completo
                            </Link>
                        </div>
                    </div>
                  )}

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
                
                <button 
                    onClick={generarPDF}
                    disabled={!isPdfReady}
                    className={`w-full border-2 border-slate-200 text-slate-600 font-bold text-center py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm ${isPdfReady ? 'hover:border-red-500 hover:text-red-600 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                >
                    <Download size={16} /> 
                    {isPdfReady ? 'DESCARGAR AHORA' : 'Cargando herramienta...'}
                </button>
              </div>

              {/* 🟢 NUEVO: TARJETA DE COLABORACIÓN (SUTIL CON REVENIU) */}
              <a 
                href="https://app.reveniu.com/checkout-custom-link/HvM4DkkkUpBnILnQv4abrZl5qYX7faqU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-all hover:border-amber-200"
              >
                <div className="flex items-center gap-4">
                    <div className="bg-white text-amber-500 p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                        <Heart size={24} className="fill-amber-500 text-amber-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-900 text-sm">¿Te sirvió esta guía?</h4>
                        <p className="text-xs text-amber-700/80">Ayúdame a mantener la web</p>
                    </div>
                    <ExternalLink size={16} className="text-amber-400 ml-auto opacity-50 group-hover:opacity-100"/>
                </div>
              </a>

              {/* 3. TARJETA DERMOCHECK (CROSS-SELLING) */}
              <a 
                href="https://www.dermocheck.cl/#calculator-section" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm group hover:ring-2 hover:ring-emerald-500 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-emerald-500/20 text-emerald-400 p-3 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white">DermoCheck</h4>
                        <p className="text-xs text-slate-400">Herramienta Exclusiva</p>
                    </div>
                    <ExternalLink size={16} className="text-slate-500 ml-auto"/>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-0">
                    ¿Vendes Dermo? Verifica vencimientos por lote aquí.
                </p>
              </a>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
