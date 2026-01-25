'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { 
  BookOpen, AlertTriangle, Download, ArrowRight, Brain, 
  Sun, ShieldAlert, FileText, Trophy, XCircle, Clock, 
  CheckCircle, Pill, AlertOctagon, ExternalLink, Sparkles 
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (SNC y Dermatológicos)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es la condición de venta legal de las Benzodiazepinas (Clonazepam, Alprazolam)?",
    opciones: [
      "Receta Médica Simple.",
      "Venta Directa.",
      "Receta Médica Retenida con Control de Stock.",
      "Receta Cheque únicamente."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué advertencia de seguridad es obligatoria al dispensar Benzodiazepinas?",
    opciones: [
      "Tomar con abundante agua.",
      "Puede causar somnolencia, evitar conducir y no mezclar con alcohol.",
      "Tomar en ayunas.",
      "No exponerse al sol."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Para qué se utilizan principalmente los medicamentos como la Sertralina?",
    opciones: [
      "Para el dolor muscular.",
      "Para la hipertensión.",
      "Para cuadros depresivos y trastornos de ansiedad.",
      "Para dormir inmediato."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el efecto adverso local más común del uso prolongado de corticoides tópicos (Betametasona)?",
    opciones: [
      "Atrofia (adelgazamiento) de la piel.",
      "Aumento de peso.",
      "Caída del cabello.",
      "Dolor de cabeza."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué microorganismo combaten fármacos como el Clotrimazol o Terbinafina?",
    opciones: [
      "Virus.",
      "Bacterias.",
      "Hongos (Micosis).",
      "Parásitos."
    ],
    correcta: 2
  }
];

export default function GuiaEspecialidadesControlados() {
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
        filename:     'Guia-SNC-Dermocosmetica-AuxiliarPro.pdf',
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
            Módulo de Especialidades
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            SNC y Dermatológicos
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            Domina el manejo legal y clínico de Benzodiazepinas y Antidepresivos, y aprende a recomendar productos dermatológicos con seguridad técnica.
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
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Guía Técnica 2026</span>
            </div>

            {/* 1. SISTEMA NERVIOSO CENTRAL (SNC) */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><Brain size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">1. Sistema Nervioso Central (SNC)</h2>
                </div>
                
                <p className="mb-6 text-slate-600">
                    El manejo de estos medicamentos requiere rigurosidad legal y ética. La mayoría son <strong>Psicotrópicos</strong> regulados por el <a href="https://www.ispch.cl/anamed/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Decreto Supremo 405</a>.
                </p>

                {/* BENZODIAZEPINAS */}
                <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-xl shadow-sm mb-8">
                    <h3 className="font-bold text-slate-900 text-xl mb-3">A. Benzodiazepinas (Ansiolíticos)</h3>
                    <div className="flex gap-2 mb-4">
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Clonazepam</span>
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Alprazolam</span>
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Diazepam</span>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <strong className="text-amber-900 block mb-1 flex items-center gap-2">
                                <AlertTriangle size={18}/> Control Legal: Receta Retenida
                            </strong>
                            <p className="text-sm text-amber-800">
                                Pertenecen a la <strong>Lista IV de Psicotrópicos</strong>. Deben venderse con <strong>Receta Médica Retenida</strong> con control de stock (se anota en el libro correspondiente).
                                <br/><span className="text-xs mt-1 block font-semibold">*Nota: La receta debe tener todos los datos del médico y paciente, y no puede tener más de 30 días de emisión.</span>
                            </p>
                        </div>

                        <div>
                            <strong className="text-slate-800 block mb-2">Advertencias al Paciente (Farmacovigilancia):</strong>
                            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                                <li><strong>Somnolencia:</strong> Afectan los reflejos. No conducir ni operar maquinaria pesada.</li>
                                <li><strong>Alcohol:</strong> Prohibido mezclar. El alcohol potencia el efecto sedante y puede causar depresión respiratoria.</li>
                                <li><strong>Dependencia:</strong> No suspender bruscamente sin indicación médica (efecto rebote).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ANTIDEPRESIVOS */}
                <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                    <h3 className="font-bold text-slate-900 text-xl mb-3">B. Antidepresivos (ISRS)</h3>
                    <div className="flex gap-2 mb-4">
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Sertralina</span>
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Fluoxetina</span>
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase">Escitalopram</span>
                    </div>

                    <p className="text-sm text-slate-600 mb-4">
                        Actúan aumentando la disponibilidad de Serotonina en el cerebro. Su venta suele ser bajo <strong>Receta Médica Retenida</strong> (sin control de stock en libro, salvo excepciones del DT).
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <strong className="text-blue-900 block mb-1">Tip Clínico: El Periodo de Latencia</strong>
                        <p className="text-sm text-blue-800">
                            Muchos pacientes abandonan el tratamiento a la semana porque "no les hace nada". Debes explicarles que <strong>el efecto antidepresivo real tarda entre 2 a 3 semanas</strong> en aparecer. Los primeros días solo pueden sentir efectos adversos (náuseas, cefalea) que luego desaparecen.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* 2. DERMATOLÓGICOS Y CUIDADO DE LA PIEL */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><Sun size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">2. Dermatológicos y Dermo</h2>
                </div>

                {/* CORTICOIDES TÓPICOS */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">A. Corticoides Tópicos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <strong className="text-slate-800 block mb-1">Betametasona / Clobetasol</strong>
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded font-bold">Potencia Alta</span>
                            <p className="text-sm text-slate-600 mt-2">
                                Excelentes antiinflamatorios para dermatitis, eczemas y alergias.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <strong className="text-slate-800 block mb-1">Hidrocortisona</strong>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">Potencia Baja</span>
                            <p className="text-sm text-slate-600 mt-2">
                                Más seguro para zonas delicadas (cara, pliegues) o niños.
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 bg-red-50 p-4 rounded-xl border border-red-200">
                        <strong className="text-red-900 flex items-center gap-2 text-sm"><AlertOctagon size={16}/> Precaución de Uso:</strong>
                        <p className="text-sm text-red-800 mt-1">
                            El uso prolongado (más de 7 días) o en zonas extensas puede causar <strong>atrofia cutánea</strong> (adelgazamiento irreversible de la piel) y absorción sistémica. No usar en infecciones (hongos/virus) ya que las empeora.
                        </p>
                    </div>
                </div>

                {/* ANTIMICÓTICOS TÓPICOS */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">B. Antimicóticos Tópicos (Hongos)</h3>
                    <ul className="space-y-3">
                        <li className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3">
                            <Pill className="text-teal-600 shrink-0" />
                            <div>
                                <strong className="text-slate-900 block">Clotrimazol / Miconazol</strong>
                                <p className="text-sm text-slate-600">Para el "Pie de Atleta" (Tinea pedis) o micosis de la piel. Se deben aplicar hasta 1 semana después de que desaparezcan los síntomas para evitar recidivas.</p>
                            </div>
                        </li>
                        <li className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3">
                            <Pill className="text-teal-600 shrink-0" />
                            <div>
                                <strong className="text-slate-900 block">Terbinafina</strong>
                                <p className="text-sm text-slate-600">Fungicida potente. Requiere tratamientos más cortos.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* ACNÉ Y ROSÁCEA */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-3">C. Acné y Rosácea Básicos</h3>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <p className="text-sm text-slate-700 mb-3">
                            Son patologías crónicas de la piel. La farmacia ofrece apoyo con limpieza y tratamiento leve.
                        </p>
                        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                            <li><strong>Peróxido de Benzoilo:</strong> Antiséptico para el acné. Puede irritar y manchar la ropa de color.</li>
                            <li><strong>Metronidazol Gel:</strong> Usado comúnmente para la Rosácea (baja la inflamación y rojez).</li>
                            <li><strong>Protección Solar:</strong> Fundamental en ambos casos para evitar marcas y brotes.</li>
                        </ul>
                    </div>
                </div>

                {/* CONEXIÓN CON DERMOCHECK */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={100}/></div>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <Clock className="text-emerald-400"/> El Desafío de la Dermocosmética
                    </h3>
                    <p className="text-sm text-slate-300 mb-4 pr-10">
                        A diferencia de los medicamentos, muchos productos dermo (La Roche-Posay, Vichy, CeraVe) <strong>no traen fecha de vencimiento impresa</strong> en formato tradicional, sino un "Código de Lote" (Batch Code).
                    </p>
                    <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                        <strong className="text-emerald-300 block mb-1">¿Por qué importa?</strong>
                        <p className="text-xs text-slate-200">
                            Vender un protector solar o crema vencida puede causar alergias severas o falta de protección UV. Utiliza herramientas como <strong>DermoCheck</strong> para verificar la vigencia antes de poner el producto en la estantería.
                        </p>
                    </div>
                </div>
            </section>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* 1. QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-purple-500 text-purple-50 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Rápido
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Experto en Controlados?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Pon a prueba tu conocimiento sobre recetas retenidas y farmacología de piel.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-purple-400 transition-colors shadow-lg flex items-center justify-center gap-2"
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
