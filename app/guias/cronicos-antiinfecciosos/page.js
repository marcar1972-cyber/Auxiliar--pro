'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { 
  BookOpen, AlertTriangle, Download, ArrowRight, Pill, Heart, Activity, 
  Droplet, Thermometer, Clock, CheckCircle, ShieldAlert, Bug, 
  Syringe, XCircle, Trophy, FileText, UserCheck, AlertOctagon, ExternalLink, 
  Heart as HeartIcon 
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Cardiovascular, Metabólico y Antibióticos)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es el efecto adverso más característico del Enalapril?",
    opciones: [
      "Sueño excesivo.",
      "Tos seca persistente.",
      "Aumento de peso.",
      "Dolor muscular."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es la recomendación clave al dispensar Metformina?",
    opciones: [
      "Tomar en ayunas.",
      "Tomar con las comidas para reducir molestias gástricas.",
      "Disolver en agua.",
      "Tomar antes de dormir."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Por qué es obligatorio exigir receta para los antibióticos?",
    opciones: [
      "Para ganar más dinero.",
      "Porque son medicamentos caros.",
      "Para combatir la Resistencia Bacteriana.",
      "No es obligatorio, es opcional."
    ],
    correcta: 2
  },
  {
    pregunta: "¿A qué temperatura se deben almacenar las insulinas en la farmacia?",
    opciones: [
      "Temperatura ambiente (25°C).",
      "En el congelador (-18°C).",
      "Refrigeradas entre 2°C y 8°C.",
      "En un lugar seco y oscuro."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el mejor horario para tomar Atorvastatina?",
    opciones: [
      "En la mañana.",
      "Con el almuerzo.",
      "En la noche (antes de dormir).",
      "Al hacer ejercicio."
    ],
    correcta: 2
  }
];

export default function GuiaCronicosInfecciosos() {
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
        filename:     'Guia-Cronicos-Antibioticos-AuxiliarPro.pdf',
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
            Módulo Clínico Avanzado
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Crónicos y Antiinfecciosos
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            Desde la fidelización del paciente hipertenso y diabético hasta la responsabilidad sanitaria en la venta de antibióticos. Una guía crítica para el auxiliar profesional.
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
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Manual Oficial 2026</span>
            </div>

            {/* 1. CARDIOVASCULAR */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg text-red-600"><Heart size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">1. Salud Cardiovascular</h2>
                </div>
                
                <p className="mb-6 text-slate-600 text-lg">
                    La hipertensión es el "asesino silencioso". La adherencia al tratamiento es vital. El paciente crónico vendrá todos los meses; fidelízalo con conocimiento.
                </p>

                <div className="space-y-6">
                    {/* ENALAPRIL */}
                    <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center justify-between">
                            A. Enalapril
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded">IECA</span>
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">Medicamento de primera línea, económico y efectivo.</p>
                        <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400 flex gap-3">
                            <AlertTriangle className="text-orange-600 shrink-0" size={18} />
                            <div>
                                <strong className="text-orange-900 text-sm block">Efecto Adverso Clásico: TOS SECA</strong>
                                <p className="text-xs text-orange-800">Si el paciente relata tos persistente sin resfrío, es probable que sea el Enalapril. Debe consultar al médico para cambio de terapia.</p>
                            </div>
                        </div>
                    </div>

                    {/* LOSARTÁN */}
                    <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center justify-between">
                            B. Losartán
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded">ARA II</span>
                        </h3>
                        <p className="text-sm text-slate-600">
                            Generalmente es la alternativa cuando el paciente no tolera el Enalapril. <strong>No produce tos.</strong> Es muy importante verificar la dosis (50mg o 100mg) y la frecuencia.
                        </p>
                    </div>

                    {/* AMLODIPINO */}
                    <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center justify-between">
                            C. Amlodipino
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded">Calcio Antagonista</span>
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">Potente vasodilatador.</p>
                        <ul className="text-sm text-slate-700 list-disc pl-4">
                            <li><strong>Efecto Adverso:</strong> Edema (hinchazón) de tobillos y piernas, especialmente en verano o al estar mucho tiempo de pie.</li>
                        </ul>
                    </div>
                </div>
                
                <p className="mt-6 text-xs text-slate-500 flex items-center gap-1">
                   Fuente de consulta: <a href="https://sochicar.cl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">Sociedad Chilena de Cardiología <ExternalLink size={10}/></a>
                </p>
            </section>

            {/* 2. METABÓLICO: DIABETES Y COLESTEROL */}
            <hr className="border-slate-200" />
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Droplet size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">2. Diabetes y Colesterol</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* METFORMINA */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-blue-900 mb-2">Metformina</h4>
                        <p className="text-sm text-slate-600 mb-3">La base del tratamiento diabético tipo 2.</p>
                        <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
                            <strong>Tip de experto:</strong> Recomendar tomar <strong>CON las comidas</strong>. Esto reduce drásticamente las molestias gástricas (dolor, diarrea) que produce al inicio.
                        </div>
                    </div>

                    {/* GLIBENCLAMIDA */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-orange-900 mb-2">Glibenclamida</h4>
                        <p className="text-sm text-slate-600 mb-3">Estimula la liberación de insulina.</p>
                        <div className="bg-orange-50 p-3 rounded-lg text-sm text-orange-800">
                            <strong>Riesgo: Hipoglicemia.</strong> El paciente NUNCA debe tomarla si no va a comer, ya que puede bajarle el azúcar peligrosamente.
                        </div>
                    </div>
                </div>

                {/* INSULINA */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl mb-8">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Thermometer className="text-blue-400" /> Cadena de Frío: Insulinas
                    </h4>
                    <p className="text-sm text-slate-300 mb-4">
                        Es responsabilidad del auxiliar garantizar que la insulina no pierda su efecto por temperatura.
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-emerald-400"/> <strong>Almacenamiento (Farmacia):</strong> Refrigerada entre 2°C y 8°C. Nunca congelar.</li>
                        <li className="flex gap-2 items-center"><CheckCircle size={16} className="text-emerald-400"/> <strong>En uso (Paciente):</strong> Puede estar a temperatura ambiente (hasta 25°C-30°C) por aprox. 4 semanas.</li>
                    </ul>
                </div>

                {/* COLESTEROL */}
                <div className="bg-white p-5 rounded-2xl border-l-4 border-yellow-500 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Activity className="text-yellow-600"/> Atorvastatina (Colesterol)</h4>
                    <p className="text-sm text-slate-600">
                        La síntesis de colesterol en el cuerpo es mayor durante la noche.
                        <br/><strong>Recomendación:</strong> Indicar al paciente que la tome preferentemente en la <strong>CENA</strong> o antes de dormir para mayor eficacia.
                    </p>
                </div>
            </section>

            {/* 3. ANTIINFECCIOSOS */}
            <hr className="border-slate-200" />
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><Bug size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">3. Antiinfecciosos (Antibióticos)</h2>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                        <ShieldAlert /> La Resistencia Bacteriana
                    </h3>
                    <p className="text-red-800 text-sm mb-4 leading-relaxed">
                        Es una crisis mundial de salud pública declarada por la <a href="https://www.who.int/es/news-room/fact-sheets/detail/antimicrobial-resistance" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-red-950 inline-flex items-center gap-1">OMS <ExternalLink size={10}/></a>. Las bacterias se vuelven "superpoderosas" porque la gente toma antibióticos mal (por resfríos virales) o no termina el tratamiento.
                    </p>
                    <strong className="text-red-900 block text-sm">Tu Rol como Auxiliar:</strong>
                    <ul className="list-disc pl-5 mt-2 text-red-800 text-sm space-y-1">
                        <li><strong>Exigir Receta Médica:</strong> No es capricho, es ley y salud pública.</li>
                        <li><strong>Educar:</strong> "Debe tomarlo por los días indicados (7, 10, 14), aunque se sienta bien al tercer día".</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* AMOXICILINA */}
                        <div className="bg-white p-5 rounded-xl border border-slate-200">
                            <strong className="text-slate-900 block mb-1 text-lg">Amoxicilina</strong>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Familia Penicilinas</span>
                            <p className="text-sm text-slate-600 mt-2">
                                Antibiótico de amplio espectro muy común. Cuidado con pacientes alérgicos a la Penicilina (preguntar siempre).
                            </p>
                        </div>

                        {/* AZITROMICINA */}
                        <div className="bg-white p-5 rounded-xl border border-slate-200">
                            <strong className="text-slate-900 block mb-1 text-lg">Azitromicina</strong>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Familia Macrólidos</span>
                            <p className="text-sm text-slate-600 mt-2">
                                Cómoda posología (1 al día por 3-5 días). Suele usarse en alérgicos a la penicilina.
                            </p>
                        </div>
                    </div>
                </div>
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
                        <span className="bg-emerald-500 text-emerald-50 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Rápido
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Manejas Crónicos?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Pon a prueba tus conocimientos sobre medicamentos de uso diario y antibióticos.
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

              {/* 🟢 NUEVO: TARJETA DE COLABORACIÓN (SUTIL CON REVENIU) */}
              <a 
                href="https://app.reveniu.com/checkout-custom-link/HvM4DkkkUpBnILnQv4abrZl5qYX7faqU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-all hover:border-amber-200"
              >
                <div className="flex items-center gap-4">
                    <div className="bg-white text-amber-500 p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                        <HeartIcon size={24} className="fill-amber-500 text-amber-500" />
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