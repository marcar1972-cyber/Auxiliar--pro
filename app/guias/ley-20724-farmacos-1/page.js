'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { 
  BookOpen, AlertTriangle, Download, ArrowRight, Store, 
  Ban, Pill, FileText, CheckCircle, XCircle, Trophy, 
  Scale, Syringe, Clock, ExternalLink, Heart, Gavel 
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Ley 20.724)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es la definición legal actual de la Farmacia según la Ley 20.724?",
    opciones: [
      "Un comercio minorista de productos.",
      "Un Centro de Salud.",
      "Una bodega de almacenamiento.",
      "Un supermercado de medicamentos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué prohíbe terminantemente el Artículo 100 (conocido como 'Ley de la Canela')?",
    opciones: [
      "Vender paracetamol.",
      "Incentivos económicos a los auxiliares por vender ciertos laboratorios.",
      "Usar delantal blanco.",
      "Abrir los domingos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué indica la franja amarilla en el envase de un medicamento?",
    opciones: [
      "Que es un producto cosmético.",
      "Que requiere cadena de frío.",
      "Que tiene Bioequivalencia comprobada.",
      "Que está en oferta."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cómo deben prescribir (recetar) los médicos obligatoriamente?",
    opciones: [
      "Solo con el nombre de fantasía.",
      "Usando la Denominación Común Internacional (DCI) o nombre genérico.",
      "Usando códigos secretos.",
      "En inglés."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué busca el Fraccionamiento de medicamentos?",
    opciones: [
      "Vender más cajas.",
      "Que el paciente compre la cantidad exacta recetada y pague lo justo.",
      "Romper los envases para reciclar.",
      "Mezclar pastillas de distintos tipos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Quién está autorizado para realizar la intercambiabilidad de un medicamento?",
    opciones: [
      "El médico solamente.",
      "El químico farmacéutico (a solicitud del paciente).",
      "El auxiliar de farmacia por iniciativa propia.",
      "Nadie, está prohibido."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Dónde deben estar visibles los precios de los medicamentos?",
    opciones: [
      "Solo en el sistema computacional.",
      "En el envase o en listados de acceso directo al público.",
      "No es obligatorio mostrarlos.",
      "Solo en la bodega."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué organismo fiscaliza el cumplimiento de la Bioequivalencia?",
    opciones: [
      "El Sernac.",
      "El Instituto de Salud Pública (ISP).",
      "El Colegio Médico.",
      "La Municipalidad."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Puede un laboratorio pagarle a la farmacia para que priorice sus productos?",
    opciones: [
      "Sí, es libre mercado.",
      "No, está prohibido cualquier incentivo que induzca a privilegiar una marca.",
      "Solo si es en Navidad.",
      "Sí, si el producto es bueno."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué garantiza el sello de Bioequivalencia?",
    opciones: [
      "Que el medicamento es importado.",
      "Que tiene la misma eficacia y seguridad que el innovador.",
      "Que es un producto natural.",
      "Que no tiene efectos adversos."
    ],
    correcta: 1
  }
];

export default function GuiaLeyFarmacos1() {
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
        filename:     'Resumen-Ley-20724-AuxiliarPro.pdf',
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
            Ley de Fármacos I (20.724)
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            El marco legal que transformó a la farmacia en un Centro de Salud. Aprende sobre bioequivalencia, la prohibición de la "Canela" y el uso racional de medicamentos.
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
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Legislación Farmacéutica 2026</span>
            </div>

            {/* 1. LA FARMACIA COMO CENTRO DE SALUD */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Store size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">1. La Farmacia como Centro de Salud</h2>
                </div>
                
                <p className="mb-6 text-slate-600 text-lg">
                    La Ley 20.724 modifica el Código Sanitario para redefinir el rol de la farmacia. Ya no es solo un comercio; es un establecimiento sanitario clave en la salud pública.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm mb-6">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Definición Legal</h3>
                    <p className="text-sm text-blue-800">
                        Los establecimientos farmacéuticos son <strong>Centros de Salud</strong>, esto implica que su objetivo principal es garantizar el uso racional de los medicamentos y la atención farmacéutica oportuna, por sobre los intereses comerciales.
                    </p>
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* 2. PROHIBICIÓN DE LA CANELA (INCENTIVOS) */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg text-red-600"><Ban size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">2. Fin a "La Canela" (Art. 100)</h2>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-6">
                    <strong className="text-red-900 block text-lg mb-2 flex items-center gap-2">
                        <AlertTriangle size={20}/> Prohibición Absoluta
                    </strong>
                    <p className="text-red-800 text-sm mb-4">
                        Se prohíben los incentivos económicos (comisiones, bonos, premios) a los auxiliares de farmacia por la venta de productos específicos.
                    </p>
                    <ul className="list-disc pl-5 text-sm text-red-800 space-y-1">
                        <li>No se puede pagar por vender la "marca propia" de la cadena.</li>
                        <li>No se puede pagar por vender el laboratorio "X" en vez del "Y".</li>
                        <li><strong>Objetivo:</strong> Que la recomendación sea técnica y sanitaria, no comercial.</li>
                    </ul>
                </div>
            </section>

            {/* 3. BIOEQUIVALENCIA E INTERCAMBIABILIDAD */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600"><Scale size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">3. Bioequivalencia (La Franja Amarilla)</h2>
                </div>

                <div className="flex gap-6 flex-col md:flex-row items-center mb-6">
                    <div className="flex-1">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            La ley establece que el <a href="https://www.ispch.cl/anamed/bioequivalencia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">ISP</a> debe garantizar que los medicamentos genéricos o similares tengan la misma eficacia terapéutica que el original (innovador).
                        </p>
                        <ul className="space-y-3 text-sm text-slate-700">
                            <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500"/> <strong>Bioequivalente:</strong> Mismo principio activo, misma dosis, misma forma farmacéutica y misma velocidad de absorción que el original.</li>
                            <li className="flex gap-2"><CheckCircle size={16} className="text-emerald-500"/> <strong>Intercambiabilidad:</strong> El auxiliar debe informar al paciente si existen alternativas bioequivalentes más económicas.</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 bg-yellow-400 h-24 rounded-xl flex items-center justify-center font-black text-yellow-900 text-center p-4 border-4 border-white shadow-lg rotate-1">
                        BIOEQUIVALENTE <br/><span className="text-xs font-normal opacity-80">(Sello Oficial ISP)</span>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* 4. PRESCRIPCIÓN Y FRACCIONAMIENTO */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><Pill size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">4. Recetas y Fraccionamiento</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* DCI */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <FileText size={18} className="text-purple-500"/> Prescripción por DCI
                        </h3>
                        <p className="text-sm text-slate-600">
                            Los médicos están <strong>obligados</strong> a anotar el nombre genérico (Denominación Común Internacional) en la receta. Pueden sugerir un nombre de fantasía, pero el DCI debe estar presente para permitir el intercambio.
                        </p>
                    </div>

                    {/* FRACCIONAMIENTO */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                            <Syringe size={18} className="text-purple-500"/> Fraccionamiento
                        </h3>
                        <p className="text-sm text-slate-600">
                            La ley habilita la venta de la cantidad <strong>exacta</strong> de unidades posológicas prescritas (ej: si la receta dice 5 pastillas, vender 5, no la caja de 30).
                            <br/><em className="text-xs text-slate-400 mt-2 block">*Nota: Requiere zona de fraccionamiento habilitada en la farmacia.</em>
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. VISIBILIDAD DE PRECIOS */}
            <section className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mt-8">
                <h3 className="font-bold text-emerald-900 mb-2">Obligación de Informar Precios</h3>
                <p className="text-sm text-emerald-800">
                    Todos los productos deben tener el precio visible en el envase (etiqueta) o en listados de fácil acceso para el público, garantizando la transparencia del mercado. (Más info en <a href="https://www.sernac.cl/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-emerald-950">SERNAC</a>).
                </p>
            </section>
            
            {/* 🔴 NUEVO: BLOQUE DE FUENTE LEGAL OBLIGATORIO */}
            <div className="mt-8 border-t border-slate-200 pt-6 bg-gray-50 p-4 rounded-xl break-inside-avoid">
                <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold uppercase text-xs tracking-wider">
                    <Gavel size={14} className="text-slate-500" /> Fuente Legal Consultada
                </div>
                <a 
                    href="https://www.bcn.cl/leychile/navegar?idNorma=1058373" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"
                >
                    Ley N° 20.724: Modifica el Código Sanitario en materia de farmacias y medicamentos <ExternalLink size={12} />
                </a>
                <p className="text-xs text-slate-500 mt-1">Biblioteca del Congreso Nacional de Chile (BCN).</p>
            </div>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* 1. QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-emerald-500 text-emerald-50 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Test Legal
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Sabes lo que es legal?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Pon a prueba tus conocimientos sobre la Ley de Fármacos I y la normativa vigente.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            COMENZAR TEST <ArrowRight size={18} />
                        </button>
                    </>
                  )}

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
                            <button 
                                onClick={reiniciarQuiz}
                                className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                            >
                                Intentar de nuevo
                            </button>
                        </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 2. TARJETA DESCARGAR PDF */}
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
                    Convierte esta página en un archivo PDF automáticamente para estudiar offline.
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

              {/* 3. TARJETA DERMOCHECK */}
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
                    <ExternalLink size={16} className="text-slate-500 ml-auto" />
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