'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import BannerVenta from '../../components/BannerVenta'; 
import { 
  BookOpen, CheckCircle, AlertTriangle, ShieldCheck, 
  FileText, Download, ArrowRight, Info, Package, XCircle, Trophy, 
  Clock, ExternalLink, Heart, Gavel, RefreshCw, Brain, Sparkles, Droplet,
  Lock, ShieldAlert
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Basadas 100% en el texto proporcionado)
const preguntasQuiz = [
  {
    pregunta: "¿A qué normativa legal pertenecen las Benzodiazepinas como psicotrópicos?",
    opciones: ["Decreto Supremo 3", "Decreto Supremo 404", "Decreto Supremo 405", "Decreto Supremo 466"],
    correcta: 2 
  },
  {
    pregunta: "¿Bajo qué condición de venta se despachan las Benzodiazepinas (Lista IV)?",
    opciones: ["Receta Médica Simple", "Receta Médica Retenida", "Receta Cheque", "Venta Directa"],
    correcta: 1
  },
  {
    pregunta: "¿Qué efecto crítico ocurre si se mezcla una Benzodiazepina con alcohol?",
    opciones: ["Aumenta la presión arterial", "Corta el efecto del medicamento", "Potencia el efecto sedante y puede causar depresión respiratoria", "Causa alergia en la piel"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el 'Periodo de Latencia' para que aparezca el efecto antidepresivo real?",
    opciones: ["1 a 2 días", "2 a 3 semanas", "1 mes completo", "Inmediato"],
    correcta: 1
  },
  {
    pregunta: "En los Corticoides Tópicos, ¿Cuál es considerado de 'Potencia Muy Alta'?",
    opciones: ["Hidrocortisona", "Betametasona", "Clobetasol", "Clotrimazol"],
    correcta: 2
  },
  {
    pregunta: "¿Qué efecto adverso puede causar el uso prolongado (más de 7 días) de corticoides tópicos?",
    opciones: ["Atrofia cutánea (adelgazamiento irreversible)", "Engrosamiento de la piel", "Crecimiento de vello", "Decoloración permanente"],
    correcta: 0
  },
  {
    pregunta: "¿Cuánto tiempo extra se debe aplicar Clotrimazol tras desaparecer los síntomas del hongo?",
    opciones: ["Se suspende de inmediato", "Hasta 3 días después", "Hasta 1 semana después", "1 mes después"],
    correcta: 2
  },
  {
    pregunta: "¿Qué precaución de uso se debe mencionar al vender Peróxido de Benzoilo?",
    opciones: ["Debe guardarse en el refrigerador", "Puede manchar la ropa de color", "Solo se usa de día", "Se debe mezclar con alcohol"],
    correcta: 1
  },
  {
    pregunta: "¿Cómo se verifica usualmente el vencimiento en productos dermocosméticos si no traen fecha impresa?",
    opciones: ["Por el color del envase", "Mediante el Código de Lote (Batch Code)", "Por el olor de la crema", "Todos duran 5 años"],
    correcta: 1
  }
];

export default function GuiaSNCDermo() {
  const [isPdfReady, setIsPdfReady] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
    
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
  const generarPDF = async () => {
    if (typeof window !== 'undefined' && window.html2pdf) {
      setIsGenerating(true); 
      const elemento = document.getElementById('contenido-pdf');
      
      const opciones = {
        margin:       [15, 15, 15, 15],
        filename:     'Guia-SNC-y-Dermatologicos-AuxiliarPro.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, scrollY: 0 }, 
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
      };

      try {
        await window.html2pdf().from(elemento).set(opciones).save();
      } catch (error) {
        console.error("Error generando PDF:", error);
        alert("Hubo un problema al generar el PDF. Por favor, intenta nuevamente.");
      } finally {
        setIsGenerating(false); 
      }
    } else {
      alert("La herramienta de PDF aún se está cargando. Por favor, espera un momento.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
      
      {/* Script optimizado de Next.js para cargar html2pdf */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" 
        strategy="lazyOnload"
        onLoad={() => setIsPdfReady(true)}
      />

      {/* HEADER DE LA GUÍA (Estilo Indigo/Purple para SNC) */}
      <header className="bg-indigo-900 border-b border-indigo-800 py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link href="/guias" className="text-indigo-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-colors">
              ← Volver a la Biblioteca
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-wider mb-4">
            <BookOpen size={18} />
            Módulo Clínico y Farmacológico
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            SNC y Dermatológicos
          </h1>
          
          <p className="text-xl text-indigo-100 max-w-3xl">
            Domina el manejo legal y clínico de Benzodiazepinas y Antidepresivos, y aprende a recomendar productos dermatológicos con seguridad técnica.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 🟢 COLUMNA IZQUIERDA: CONTENIDO COMPLETO */}
          <div className="lg:col-span-8 space-y-12">
            
            <div id="contenido-pdf" className="bg-white p-4 md:p-8 rounded-xl shadow-sm space-y-12">
              <div className="mb-8 border-b pb-4 border-slate-100 flex justify-between items-center">
                  <img 
                      src="/logo.webp" 
                      alt="AuxiliarPro Logo" 
                      className="w-32" 
                      crossOrigin="anonymous" 
                  />
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Guía Técnica 2026</span>
              </div>

              {/* 1. SISTEMA NERVIOSO CENTRAL */}
              <section className="break-inside-avoid">
                <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
                  <Brain className="text-indigo-600" size={32} /> 1. Sistema Nervioso Central (SNC)
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-slate-600">
                  El manejo de estos medicamentos requiere rigurosidad legal y ética. La mayoría son <strong>Psicotrópicos</strong> regulados por el <strong>Decreto Supremo 405</strong>.
                </p>

                {/* Benzodiazepinas */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-indigo-800">
                    A. Benzodiazepinas (Ansiolíticos)
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">Clonazepam</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">Alprazolam</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">Diazepam</span>
                  </div>
                  
                  <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 mb-6">
                      <h4 className="font-black text-amber-900 flex items-center gap-2 mb-2"><ShieldCheck size={18}/> Control Legal: Receta Retenida</h4>
                      <p className="text-sm text-amber-800 leading-relaxed">
                          Pertenecen a la <strong>Lista IV de Psicotrópicos</strong>. Deben venderse con <strong>Receta Médica Retenida</strong>.
                      </p>
                      <div className="mt-3 bg-white/60 p-3 rounded-lg text-sm text-amber-900 border border-amber-100">
                          <strong>⚠️ Diferencia clave:</strong> A diferencia de las Listas II y III, la Lista IV NO requiere registro en el Libro de Control de Psicotrópicos (en la mayoría de las farmacias comunitarias bajo régimen simplificado), pero la receta se debe retener, foliar y archivar.
                      </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-3">Advertencias al Paciente (Farmacovigilancia):</h4>
                      <ul className="space-y-3 text-sm text-slate-700">
                          <li><span className="text-red-500 font-black">• Somnolencia:</span> Afectan los reflejos. No conducir ni operar maquinaria pesada.</li>
                          <li><span className="text-red-500 font-black">• Alcohol:</span> Prohibido mezclar. El alcohol potencia el efecto sedante y puede causar depresión respiratoria.</li>
                          <li><span className="text-red-500 font-black">• Dependencia:</span> No suspender bruscamente sin indicación médica (efecto rebote).</li>
                      </ul>
                  </div>
                </div>

                {/* Antidepresivos */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-indigo-800">
                    B. Antidepresivos (ISRS)
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">Sertralina</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">Fluoxetina</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">Escitalopram</span>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-4">
                      Actúan aumentando la disponibilidad de Serotonina en el cerebro. Su venta es bajo <strong>Receta Médica Simple</strong> (Presentación de Receta). Es fundamental exigirla para verificar la indicación, pero se devuelve al paciente tras el despacho.
                  </p>

                  <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
                      <h4 className="font-black text-indigo-900 flex items-center gap-2 mb-2"><Sparkles size={18}/> Tip Clínico: El Periodo de Latencia</h4>
                      <p className="text-sm text-indigo-800 leading-relaxed">
                          Muchos pacientes abandonan el tratamiento a la semana porque "no les hace nada". Debes explicarles que <strong>el efecto antidepresivo real tarda entre 2 a 3 semanas</strong> en aparecer. Los primeros días solo pueden sentir efectos adversos (náuseas, cefalea) que luego desaparecen.
                      </p>
                  </div>
                </div>
              </section>

              {/* 2. DERMATOLÓGICOS Y DERMO */}
              <section className="break-inside-avoid">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3 mt-12">
                  <Droplet className="text-teal-500" size={32} /> 2. Dermatológicos y Dermo
                </h2>

                {/* Corticoides */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-teal-700">
                    A. Corticoides Tópicos
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                          <strong className="text-slate-900 block text-lg mb-1">Betametasona</strong>
                          <span className="text-xs font-black text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full mb-2 inline-block">Potencia Alta</span>
                          <p className="text-xs text-slate-500 font-bold mb-1">Receta Médica</p>
                          <p className="text-sm text-slate-600">Antiinflamatorio potente.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm border-t-4 border-t-red-500">
                          <strong className="text-slate-900 block text-lg mb-1">Clobetasol</strong>
                          <span className="text-xs font-black text-red-600 bg-red-100 px-2 py-0.5 rounded-full mb-2 inline-block">Potencia Muy Alta</span>
                          <p className="text-xs text-slate-500 font-bold mb-1">Receta Médica</p>
                          <p className="text-sm text-slate-600">El más potente. Venta bajo presentación de receta médica.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm border-t-4 border-t-green-500">
                          <strong className="text-slate-900 block text-lg mb-1">Hidrocortisona</strong>
                          <span className="text-xs font-black text-green-700 bg-green-100 px-2 py-0.5 rounded-full mb-2 inline-block">Potencia Baja</span>
                          <p className="text-xs text-slate-500 font-bold mb-1">Receta Médica</p>
                          <p className="text-sm text-slate-600">Más seguro para zonas delicadas (cara, pliegues) o niños. Venta bajo receta simple.</p>
                      </div>
                  </div>

                  <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                      <h4 className="font-black text-red-900 mb-2 flex items-center gap-2"><AlertTriangle size={18}/> Precaución de Uso:</h4>
                      <p className="text-sm text-red-800 leading-relaxed">
                          El uso prolongado (más de 7 días) o en zonas extensas puede causar <strong>atrofia cutánea</strong> (adelgazamiento irreversible de la piel) y absorción sistémica. No usar en infecciones (hongos/virus) ya que las empeora. <span className="italic">Fuente: Mayo Clinic.</span>
                      </p>
                  </div>
                </div>

                {/* Antimicóticos */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-teal-700">
                    B. Antimicóticos Tópicos (Hongos)
                  </h3>
                  <ul className="space-y-4">
                      <li className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                          <strong className="text-slate-900 text-lg block">Clotrimazol / Miconazol</strong>
                          <p className="text-sm text-slate-600 mt-1">Para el "Pie de Atleta" (Tinea pedis) o micosis de la piel. Se deben aplicar hasta 1 semana después de que desaparezcan los síntomas para evitar recidivas.</p>
                      </li>
                      <li className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                          <strong className="text-slate-900 text-lg block">Terbinafina</strong>
                          <p className="text-sm text-slate-600 mt-1">Fungicida potente. Requiere tratamientos más cortos.</p>
                      </li>
                  </ul>
                </div>

                {/* Acné y Rosácea */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 text-teal-700">
                    C. Acné y Rosácea Básicos
                  </h3>
                  <p className="text-slate-600 mb-4">Son patologías crónicas de la piel. La farmacia ofrece apoyo con limpieza y tratamiento leve.</p>
                  <ul className="space-y-3 text-sm text-slate-700 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                      <li><strong className="text-slate-900">Peróxido de Benzoilo:</strong> Antiséptico para el acné. Puede irritar y manchar la ropa de color.</li>
                      <li><strong className="text-slate-900">Metronidazol Gel:</strong> Usado comúnmente para la Rosácea (baja la inflamación y rojez).</li>
                      <li><strong className="text-slate-900">Protección Solar:</strong> Fundamental en ambos casos para evitar marcas y brotes.</li>
                  </ul>
                </div>
              </section>

              {/* 3. EL DESAFÍO DE LA DERMOCOSMÉTICA */}
              <section className="mb-10 break-inside-avoid">
                  <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-lg">
                      <h2 className="text-2xl font-black mb-4 flex items-center gap-3 text-emerald-400">
                          <Package size={28} /> El Desafío de la Dermocosmética
                      </h2>
                      <p className="text-slate-300 leading-relaxed mb-4">
                          A diferencia de los medicamentos, muchos productos dermo (La Roche-Posay, Vichy, CeraVe) <strong>no traen fecha de vencimiento impresa</strong> en formato tradicional, sino un "Código de Lote" (Batch Code).
                      </p>
                      <h4 className="font-bold text-white mb-2">¿Por qué importa?</h4>
                      <p className="text-slate-300 leading-relaxed mb-6">
                          Vender un protector solar o crema vencida puede causar alergias severas o falta de protección UV. Utiliza herramientas como <strong>DermoCheck</strong> para verificar la vigencia antes de poner el producto en la estantería.
                      </p>
                  </div>
                  
                  {/* 🔴 BLOQUE DE FUENTE LEGAL OBLIGATORIO */}
                  <div className="mt-8 border-t border-slate-200 pt-6 bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold uppercase text-xs tracking-wider">
                          <Gavel size={14} className="text-slate-500" /> Fuente Legal Consultada
                      </div>
                      <a 
                          href="https://www.bcn.cl/leychile/navegar?idNorma=12918" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"
                      >
                          Decreto Supremo N° 405: Reglamento de Productos Psicotrópicos <ExternalLink size={12} />
                      </a>
                      <p className="text-xs text-slate-500 mt-1">Biblioteca del Congreso Nacional de Chile (BCN).</p>
                  </div>
              </section>
            </div>

            {/* AVISO LEGAL MOVIL */}
            <div className="bg-slate-800/5 p-5 rounded-2xl border border-slate-200 mt-8 hidden lg:block">
                <p className="text-sm text-slate-500 leading-relaxed flex gap-3">
                    <AlertTriangle className="shrink-0 text-amber-500 mt-0.5" size={20} />
                    <span>
                        <strong>Advertencia Legal:</strong> Estudiar por tu cuenta en esta plataforma es válido y recomendado para <em>preparar</em> tu examen. Sin embargo, para inscribirte oficialmente en la SEREMI necesitarás acreditar tu experiencia laboral o un certificado de práctica. El "estudio teórico" no reemplaza el requisito legal exigido por el Decreto 90.
                    </span>
                </p>
            </div>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY */}
          <div className="lg:col-span-4">
            <div className="block lg:sticky lg:top-24 space-y-6">
              
              {/* TARJETA 1: QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-indigo-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Dominas el área Clínica?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Responde 9 preguntas sobre Benzodiazepinas, Antidepresivos y Dermo.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-indigo-100 transition-colors shadow-lg flex items-center justify-center gap-2"
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
                                                ? 'bg-indigo-500 text-white font-bold' 
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
                        <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-400">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">¡Completado!</h3>
                        <p className="text-slate-400 mb-6">
                            Obtuviste <strong className="text-white">{puntaje}</strong> de <strong className="text-white">{preguntasQuiz.length}</strong> correctas.
                        </p>
                        
                        <div className="space-y-3">
                            {puntaje === preguntasQuiz.length ? (
                                <div className="bg-indigo-900/50 p-3 rounded-lg text-sm text-indigo-200 border border-indigo-800">
                                    ¡Excelente! Estás listo para el mesón.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Intentar de nuevo
                                </button>
                            )}
                            
                            <Link href="/quiz" className="block w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-500 text-sm text-center flex items-center justify-center">
                                Ir al Simulador Completo
                            </Link>
                        </div>
                    </div>
                  )}

                </div>
              </div>

              {/* 🟢 TARJETA DESCARGAR PDF */}
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
                    disabled={!isPdfReady || isGenerating}
                    className={`w-full border-2 border-slate-200 text-slate-600 font-bold text-center py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm 
                      ${isPdfReady && !isGenerating ? 'hover:border-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                >
                    {isGenerating ? (
                        <>
                          <RefreshCw className="animate-spin" size={16} /> Generando...
                        </>
                    ) : (
                        <>
                          <Download size={16} /> 
                          {isPdfReady ? 'DESCARGAR PDF' : 'Cargando...'}
                        </>
                    )}
                </button>
              </div>

              {/* 🟢 TARJETA DERMOCHECK */}
              <a 
                href="https://www.dermocheck.cl/#calculator-section" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm group hover:ring-2 hover:ring-indigo-500 transition-all text-slate-300"
              >
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-indigo-500/20 text-indigo-400 p-3 rounded-full group-hover:bg-indigo-500 group-hover:text-white transition-colors"><Clock size={24} /></div>
                    <div>
                        <h4 className="font-bold text-white text-sm">DermoCheck</h4>
                        <p className="text-xs text-slate-400">Verifica vencimientos</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-slate-500"/>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-0">
                    ¿Vendes Dermo? Verifica vencimientos por lote aquí.
                </p>
              </a>

              {/* 🟢 BOTÓN WHATSAPP COMPARTIR */}
              <a 
                href="https://wa.me/?text=¡Mira%20esta%20guía%20de%20SNC%20y%20Dermatología!%20Ideal%20para%20estudiar:%20https://www.auxiliaresdefarmacia.cl/guias/snc-dermatologicos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-[#25D366] p-6 rounded-3xl shadow-sm hover:shadow-md transition-all hover:bg-[#20bd5a]"
              >
                <div className="flex items-center gap-4">
                    <div className="shrink-0">
                        <img 
                            src="/whatsapp.webp" 
                            alt="WhatsApp" 
                            className="w-10 h-10 object-contain" 
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Compartir con Colegas</h4>
                        <p className="text-xs text-white/90">Enviar al grupo del turno</p>
                    </div>
                    <ArrowRight size={20} className="text-white ml-auto opacity-70 group-hover:translate-x-1 transition-transform"/>
                </div>
              </a>

              {/* 🚀 BANNER EVOLUCIÓN AUXILIARPRO 3.0 */}
              <BannerVenta colorTheme="indigo" />

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}