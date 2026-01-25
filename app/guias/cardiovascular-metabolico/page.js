'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, AlertTriangle, Download, ArrowRight, Pill, Heart, Activity, Droplet, Thermometer, Clock, CheckCircle, GraduationCap, FileText, Trophy, UserCheck, XCircle } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Cardiovascular y Metabólico)
const preguntasQuiz = [
  {
    pregunta: "¿Por qué es crucial la fidelización del paciente crónico?",
    opciones: [
      "Porque compra más dulces.",
      "Porque viene todos los meses y requiere un tratamiento continuo sin interrupciones.",
      "Porque suelen olvidar su billetera.",
      "Porque siempre compran antibióticos."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es un efecto adverso muy común del Enalapril que a veces obliga a cambiarlo por Losartán?",
    opciones: [
      "Dolor de rodilla.",
      "Tos seca persistente.",
      "Aumento del apetito.",
      "Visión borrosa."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el mejor horario para tomar la Atorvastatina (Colesterol)?",
    opciones: [
      "En ayunas.",
      "Con el almuerzo.",
      "En la noche (antes de dormir).",
      "Antes de hacer deporte."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué precaución especial requiere la Glibenclamida?",
    opciones: [
      "Riesgo de Hipoglicemia (bajón de azúcar) si no se come bien.",
      "Debe guardarse en el refrigerador.",
      "Causa insomnio.",
      "Sube la presión arterial."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es la temperatura correcta para almacenar insulinas en la farmacia?",
    opciones: [
      "A temperatura ambiente (25°C).",
      "En el congelador (-18°C).",
      "Entre 2°C y 8°C (Refrigerador).",
      "En un lugar oscuro a 15°C."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Para qué patología se utiliza principalmente el Amlodipino?",
    opciones: [
      "Diabetes tipo 1.",
      "Hipertensión Arterial.",
      "Colesterol alto.",
      "Infección urinaria."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es una recomendación clave al dispensar Metformina?",
    opciones: [
      "Tomar con las comidas para evitar molestias gástricas.",
      "Masticar el comprimido.",
      "Tomar solo si hay dolor.",
      "Disolver en agua caliente."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué es el 'Pie Diabético' y por qué importa en farmacia?",
    opciones: [
      "Un tipo de calzado.",
      "Una complicación por pérdida de sensibilidad; requiere cuidado extremo y productos especiales.",
      "Una infección por hongos común.",
      "Un dolor muscular en el tobillo."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué efecto secundario suele asociarse al Amlodipino?",
    opciones: [
      "Tos seca.",
      "Edema (hinchazón) de tobillos.",
      "Sueño excesivo.",
      "Gastritis."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué significa 'Adherencia al tratamiento'?",
    opciones: [
      "Que el medicamento se pegue al estómago.",
      "Que el paciente tome sus remedios correctamente y no abandone la terapia.",
      "Que el paciente compre la marca más cara.",
      "Que el auxiliar sea simpático."
    ],
    correcta: 1
  }
];

export default function GuiaCardiovascular() {
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
        filename:     'Guia-Cardiovascular-Metabolico-AuxiliarPro.pdf',
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
            Módulo de Pacientes Crónicos
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Cardiovascular y Metabólico
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            El 70% de las recetas de farmacia son de crónicos. Aprende a manejar Hipertensión, Diabetes y Dislipidemia con precisión, fidelizando al paciente que vendrá a verte todos los meses.
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

            {/* 1. INTRODUCCIÓN: EL PACIENTE CRÓNICO */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <UserCheck className="text-emerald-600" /> 1. El Paciente Mensual (Crónico)
                </h2>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <p className="text-lg leading-relaxed mb-4">
                        A diferencia del paciente agudo (que viene por un dolor de cabeza y se va), el <strong>paciente crónico</strong> tiene una patología de por vida.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                            <span><strong>Fidelización:</strong> Vendrá a tu farmacia 12 veces al año. Si lo atiendes bien, es un cliente para siempre.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="text-emerald-500 mt-1 shrink-0" size={20} />
                            <span><strong>Cero Errores:</strong> Un error en la dosis de un medicamento crónico puede descompensar al paciente gravemente (infarto, coma diabético).</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 2. HIPERTENSIÓN ARTERIAL */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Heart className="text-red-600" /> 2. Hipertensión Arterial (HTA)
                </h2>
                <p className="text-slate-600 mb-6">El objetivo es mantener la presión bajo 140/90 mmHg. Los más comunes son:</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* ENALAPRIL */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Enalapril / Captopril</h4>
                        <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded mb-2 inline-block">Familia IECA</span>
                        <p className="text-sm text-slate-600 mb-3">Muy efectivos y económicos.</p>
                        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
                            <strong className="text-orange-900 text-xs block">Ojo Clínico:</strong>
                            <p className="text-xs text-orange-800">
                                Su efecto adverso más molesto es la <strong>TOS SECA</strong>. Si el paciente se queja de tos persistente, el médico suele cambiarlo a Losartán.
                            </p>
                        </div>
                    </div>

                    {/* LOSARTÁN */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Losartán / Valsartán</h4>
                        <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded mb-2 inline-block">Familia ARA II</span>
                        <p className="text-sm text-slate-600 mb-3">La alternativa moderna al Enalapril.</p>
                        <div className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400">
                            <strong className="text-emerald-900 text-xs block">Ventaja:</strong>
                            <p className="text-xs text-emerald-800">
                                NO producen tos. Son muy bien tolerados a largo plazo.
                            </p>
                        </div>
                    </div>

                    {/* AMLODIPINO */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm md:col-span-2">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Amlodipino / Nifedipino</h4>
                        <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded mb-2 inline-block">Bloqueadores de Calcio</span>
                        <p className="text-sm text-slate-600 mb-3">Dilatan las arterias con fuerza.</p>
                        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400 flex gap-3">
                            <Activity className="text-blue-500 shrink-0" size={20} />
                            <div>
                                <strong className="text-blue-900 text-xs block">Efecto Secundario Clásico:</strong>
                                <p className="text-xs text-blue-800">
                                    <strong>Edema (Hinchazón) de tobillos.</strong> Es normal en el tratamiento, pero si es muy doloroso, debe consultar al médico.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DIABETES MELLITUS */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Droplet className="text-blue-500" /> 3. Diabetes Mellitus (DM)
                </h2>
                <p className="text-slate-600 mb-6">El control del azúcar en sangre es vital para evitar ceguera, daño renal y amputaciones.</p>

                <div className="space-y-6">
                    {/* METFORMINA */}
                    <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm">
                        <h4 className="font-bold text-slate-900 text-lg">Metformina</h4>
                        <p className="text-sm text-slate-600 mb-2">Es el "estándar de oro" para comenzar el tratamiento.</p>
                        <ul className="text-sm text-slate-700 space-y-1">
                            <li>• <strong>Recomendación Clave:</strong> Tomar <strong>CON las comidas</strong> (almuerzo/cena).</li>
                            <li>• <strong>¿Por qué?</strong> Porque suele causar molestias gástricas (dolor de guata, diarrea) si se toma con el estómago vacío.</li>
                        </ul>
                    </div>

                    {/* GLIBENCLAMIDA */}
                    <div className="bg-white border-l-4 border-orange-500 p-5 rounded-r-xl shadow-sm">
                        <h4 className="font-bold text-slate-900 text-lg">Glibenclamida</h4>
                        <p className="text-sm text-slate-600 mb-2">Estimula al páncreas a "exprimir" más insulina.</p>
                        <div className="flex gap-2 items-start mt-2 bg-orange-50 p-2 rounded">
                            <AlertTriangle className="text-orange-500 shrink-0" size={16} />
                            <p className="text-xs text-orange-800">
                                <strong>Riesgo de Hipoglicemia:</strong> Si el paciente toma la pastilla y NO come, su azúcar puede bajar peligrosamente (mareos, desmayo).
                            </p>
                        </div>
                    </div>

                    {/* INSULINAS */}
                    <div className="bg-slate-900 text-white p-6 rounded-2xl">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <Thermometer className="text-blue-400" /> Manejo de Insulinas
                        </h4>
                        <p className="text-sm text-slate-300 mb-4">
                            Como auxiliar, eres el guardián de la cadena de frío. Una insulina caliente pierde su efecto y el paciente diabético se descompensa.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                                <span className="block text-2xl font-black text-blue-400">2°C a 8°C</span>
                                <span className="text-xs text-slate-400">Temperatura en Farmacia (Refrigerador)</span>
                            </div>
                            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                                <span className="block text-2xl font-black text-emerald-400">~25°C</span>
                                <span className="text-xs text-slate-400">En uso por el paciente (hasta 28 días)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DISLIPIDEMIA (COLESTEROL) */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Activity className="text-yellow-600" /> 4. Dislipidemia (Colesterol)
                </h2>
                
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Atorvastatina / Rosuvastatina</h3>
                    <p className="text-slate-600 mb-4">Son las famosas "Estatinas". Bajan el colesterol malo (LDL) y previenen infartos.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-xl flex gap-3 items-start">
                            <Clock className="text-indigo-600 shrink-0" />
                            <div>
                                <strong className="text-indigo-900 text-sm block">El Horario Importa</strong>
                                <p className="text-xs text-indigo-800">
                                    El cuerpo produce la mayor cantidad de colesterol <strong>mientras dormimos</strong>. Por eso, se recomienda tomarla en la <strong>NOCHE</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl flex gap-3 items-start">
                            <Activity className="text-red-600 shrink-0" />
                            <div>
                                <strong className="text-red-900 text-sm block">Efecto Adverso</strong>
                                <p className="text-xs text-red-800">
                                    Dolor muscular o calambres. Si el paciente se queja mucho de esto, debe avisar a su médico.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Experto en Crónicos?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Demuestra que sabes manejar las terapias de hipertensión, diabetes y colesterol.
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
                    Convierte esta página en un archivo PDF automáticamente para repasar sin internet.
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
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-0">
                    Verifica vencimientos de dermocosmética mediante código de lote en segundos.
                </p>
              </a>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
