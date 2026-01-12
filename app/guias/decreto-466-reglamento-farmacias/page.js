'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, CheckCircle, AlertTriangle, ShieldCheck, FileText, Download, ArrowRight, Info, Package, Store, UserCheck, FileSignature, Scissors, Book, Trophy, XCircle } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Específicas del Decreto 466)
const preguntasQuiz = [
  {
    pregunta: "¿Qué profesional debe asumir la Dirección Técnica de una Farmacia?",
    opciones: ["Médico Cirujano", "Químico Farmacéutico", "Auxiliar de Farmacia", "Enfermera"],
    correcta: 1
  },
  {
    pregunta: "¿Qué establecimiento tiene PROHIBIDO preparar fórmulas magistrales?",
    opciones: ["Farmacia Privada", "Farmacia Hospitalaria", "Almacén Farmacéutico", "Droguería"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el requisito de escolaridad para ser Auxiliar de Farmacia?",
    opciones: ["8° Básico", "Enseñanza Media Completa (4° Medio)", "Título Técnico Nivel Superior", "Título Universitario"],
    correcta: 1
  },
  {
    pregunta: "¿Qué tipo de receta se usa para estupefacientes de alto control?",
    opciones: ["Receta Simple", "Receta Retenida", "Receta Cheque", "Venta Directa"],
    correcta: 2
  },
  {
    pregunta: "¿Dónde deben guardarse los productos estupefacientes?",
    opciones: ["En el mostrador", "En la bodega común", "Bajo llave en estantería exclusiva", "En el refrigerador siempre"],
    correcta: 2
  },
  {
    pregunta: "¿Qué productos NO se pueden fraccionar?",
    opciones: ["Antibióticos orales", "Paracetamol", "Productos oncológicos y hormonas", "Vitaminas"],
    correcta: 2
  },
  {
    pregunta: "¿Qué es un Botiquín según el Decreto 466?",
    opciones: ["Una caja de primeros auxilios", "Recinto de uso interno en instituciones (ej: colegios, mineras)", "Una farmacia pequeña de barrio", "Un almacén de cosméticos"],
    correcta: 1
  },
  {
    pregunta: "¿Cuántas horas mínimo debe estar el DT en la farmacia?",
    opciones: ["4 horas", "8 horas", "Solo cuando hay inspección", "12 horas"],
    correcta: 1
  },
  {
    pregunta: "¿Qué libro es obligatorio mantener a disposición del público?",
    opciones: ["Libro de Reclamos", "Libro de Estupefacientes", "Libro de Fraccionamiento", "Libro de Finanzas"],
    correcta: 0
  },
  {
    pregunta: "¿Quién autoriza al Auxiliar de Farmacia para ejercer?",
    opciones: ["El dueño de la farmacia", "El Ministerio de Educación", "La SEREMI de Salud", "El Colegio de Químicos"],
    correcta: 2
  }
];

export default function GuiaDecreto466() {
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
    }, 800); 
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
        filename:     'Guia-Decreto-466-AuxiliarPro.pdf',
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
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight text-balance">
            Reglamento de Farmacias <span className="text-blue-600 whitespace-nowrap">(Decreto 466)</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-3xl">
            El reglamento fundamental que define las reglas del juego: Tipos de establecimientos, roles del personal y condiciones sanitarias para operar en Chile.
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
              <p className="text-lg leading-relaxed mb-4">
                El <strong>Decreto 466</strong> es el reglamento fundamental que establece las condiciones sanitarias para la instalación, funcionamiento y fiscalización de los establecimientos farmacéuticos en Chile.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Su propósito es asegurar que la distribución, preparación y venta de medicamentos se realicen bajo estándares de calidad para proteger la salud de la población.
              </p>
            </section>

            {/* 2. CONTENIDO PRINCIPAL */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                2. Contenido Principal: Los 5 Módulos Clave
              </h2>

              {/* MÓDULO A: TIPOS DE ESTABLECIMIENTOS */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Store className="text-blue-500" /> Módulo A: Tipos de Establecimientos
                </h3>
                <p className="mb-6 text-lg text-slate-600">
                  El reglamento clasifica los lugares de expendio según sus funciones y complejidad:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2">1. Farmacia</h4>
                    <p className="text-sm text-blue-800">
                      Es el establecimiento más completo. Venta de fármacos, preparación de recetas magistrales y fraccionamiento.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">2. Almacén Farmacéutico</h4>
                    <p className="text-sm text-slate-600">
                      Dirigido por un Práctico de Farmacia. Vende remedios de venta directa y un listado acotado de recetas. <strong>Prohibido preparar fórmulas magistrales.</strong>
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">3. Botiquín</h4>
                    <p className="text-sm text-slate-600">
                      Recinto de uso interno en instituciones (clínicas, colegios, mineras, navíos). No vende al público general.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-sm">4. Droguería</h4>
                        <p className="text-xs text-slate-500 mt-1">Importación y distribución mayorista.</p>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-sm">5. Depósito</h4>
                        <p className="text-xs text-slate-500 mt-1">Bodegas de almacenamiento y distribución.</p>
                     </div>
                  </div>
                </div>
              </div>

              {/* MÓDULO B: PERSONAL */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <UserCheck className="text-blue-500" /> Módulo B: El Personal y Responsabilidades
                </h3>
                
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <strong className="text-lg text-blue-700 block mb-2">1. Director Técnico (DT)</strong>
                        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                            <li>Debe ser Químico Farmacéutico.</li>
                            <li>Debe estar mínimo <strong>8 horas diarias</strong> (o todo el horario si es menor).</li>
                            <li>Responsable de despachar estupefacientes y capacitar al personal.</li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-emerald-200 text-emerald-800 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl">
                            Tu Rol
                        </div>
                        <strong className="text-lg text-emerald-900 block mb-2">2. Auxiliar de Farmacia</strong>
                        <p className="text-sm text-emerald-800 mb-3">Requisitos para la autorización sanitaria (SEREMI):</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex gap-2 items-center"><CheckCircle size={14} className="text-emerald-600"/> 4° Medio rendido satisfactoriamente.</li>
                            <li className="flex gap-2 items-center"><CheckCircle size={14} className="text-emerald-600"/> 1 año de experiencia en farmacia (bodegaje/reposición).</li>
                            <li className="flex gap-2 items-center"><CheckCircle size={14} className="text-emerald-600"/> Aprobar examen de competencia ante la autoridad sanitaria.</li>
                        </ul>
                    </div>
                </div>
              </div>

              {/* MÓDULO C: EXPENDIO */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <FileSignature className="text-blue-500" /> Módulo C: El Expendio y las Recetas
                </h3>
                <p className="mb-4 text-slate-600">La venta se rige por la condición aprobada en el registro sanitario:</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase">Sin Receta</span>
                        <p className="font-bold text-slate-800">Venta Directa (VD)</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase">Orden Médica</span>
                        <p className="font-bold text-slate-800">Receta Simple (R)</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase">Controlado</span>
                        <p className="font-bold text-slate-800">Receta Retenida (RR)</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                        <span className="text-xs font-bold text-yellow-600 uppercase">Máximo Control</span>
                        <p className="font-bold text-yellow-900">Receta Cheque (RCH)</p>
                    </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800">
                    <strong>Bioequivalencia:</strong> Si existe un bioequivalente certificado, la farmacia TIENE la obligación de informar al paciente sobre su disponibilidad antes de vender.
                </div>
              </div>

              {/* MÓDULO D: LIBROS */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Book className="text-blue-500" /> Módulo D: Infraestructura y Libros
                </h3>
                <p className="mb-4 text-sm text-slate-600">Registros obligatorios (Físicos o Digitales):</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> De Inspección</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> De Control de Estupefacientes</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> De Control de Psicotrópicos</li>
                    <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> De Reclamos (Público)</li>
                </ul>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 text-red-800 text-sm">
                    <ShieldCheck className="shrink-0" size={20}/>
                    <p><strong>Seguridad Crítica:</strong> Los estupefacientes y psicotrópicos deben estar bajo llave en estantería exclusiva para evitar hurtos.</p>
                </div>
              </div>

              {/* MÓDULO E: FRACCIONAMIENTO */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Scissors className="text-blue-500" /> Módulo E: Fraccionamiento
                </h3>
                <p className="text-sm text-slate-600 mb-4">Es la extracción de dosis exactas de un envase clínico para el paciente.</p>
                <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                        Debe hacerse en zona exclusiva separada.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                        Envase sellado y rotulado (Paciente, Lote, Vencimiento).
                    </li>
                </ul>
                <div className="mt-4 p-4 bg-slate-100 rounded-xl text-xs font-medium text-slate-500">
                    🚫 <strong>PROHIBIDO FRACCIONAR:</strong> Hormonas, oncológicos, radiofármacos y refrigerados.
                </div>
              </div>

            </section>

            {/* 3. CONCLUSIÓN */}
            <section className="mb-10 break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                    3. Conclusión
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                    El Decreto 466 organiza el funcionamiento farmacéutico en Chile. Para el Auxiliar, es vital comprender que su labor siempre está bajo la supervisión del Químico Farmacéutico y requiere estricto apego a las normas para garantizar la seguridad del paciente.
                </p>
                <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
                    Fuente: Ministerio de Salud de Chile. Decreto N° 466.
                </p>
            </section>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY CON QUIZ INTERACTIVO */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* TARJETA 1: QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-blue-500 text-blue-50 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Sabes del Decreto 466?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            10 preguntas rápidas sobre roles, recetas y prohibiciones. ¿Podrás con todas?
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-blue-400 transition-colors shadow-lg flex items-center justify-center gap-2"
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
                        <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">¡Completado!</h3>
                        <p className="text-slate-400 mb-6">
                            Obtuviste <strong className="text-white">{puntaje}</strong> de <strong className="text-white">{preguntasQuiz.length}</strong> correctas.
                        </p>
                        
                        <div className="space-y-3">
                            {puntaje === preguntasQuiz.length ? (
                                <div className="bg-blue-900/50 p-3 rounded-lg text-sm text-blue-200 border border-blue-800">
                                    ¡Excelente! Estás listo para el módulo de Normativa.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Intentar de nuevo
                                </button>
                            )}
                            
                            <Link href="/quiz" className="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-500 text-sm">
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

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
