'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import BannerVenta from '../../components/BannerVenta'; 
import { 
  BookOpen, CheckCircle, AlertTriangle, ShieldCheck, FileText, 
  Download, ArrowRight, Info, Package, Microscope, UserCheck, 
  Activity, Zap, Book, Trophy, XCircle, Heart, 
  ExternalLink, Clock, Gavel, ShieldAlert, Sparkles, Lock, RefreshCw, Pill 
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Farmacología Fundamentos - LADME)
const preguntasQuiz = [
  {
    pregunta: "¿Qué significan las siglas de la Farmacocinética (Sistema LADME)?",
    opciones: [
      "Latencia, Acción, Dosis, Metabolismo, Excreción",
      "Liberación, Absorción, Distribución, Metabolismo, Excreción",
      "Limpieza, Análisis, Dispensación, Mezcla, Entrega",
      "Localización, Activación, Disolución, Medicación, Efecto"
    ],
    correcta: 1
  },
  {
    pregunta: "¿En qué órgano se produce principalmente el metabolismo (biotransformación) de los fármacos?",
    opciones: ["Los Riñones", "El Cerebro", "El Hígado", "El Estómago"],
    correcta: 2
  },
  {
    pregunta: "¿Qué órgano es el principal encargado de la excreción (eliminación) de los medicamentos?",
    opciones: ["El Hígado", "El Intestino", "La Piel", "Los Riñones"],
    correcta: 3
  },
  {
    pregunta: "¿Qué estudia la Farmacodinamia?",
    opciones: [
      "Cómo el cuerpo elimina el medicamento.",
      "El precio y distribución de los fármacos.",
      "Lo que el fármaco le hace al cuerpo (Mecanismo de acción).",
      "Las fechas de vencimiento de las cremas."
    ],
    correcta: 2
  },
  {
    pregunta: "Un fármaco que se une a un receptor y lo ACTIVA produciendo una respuesta se llama:",
    opciones: ["Antagonista", "Agonista", "Placebo", "Enzima"],
    correcta: 1
  },
  {
    pregunta: "Un fármaco que se une a un receptor para BLOQUEARLO e impedir que funcione se conoce como:",
    opciones: ["Agonista", "Antagonista", "Bioequivalente", "Metabolito"],
    correcta: 1
  },
  {
    pregunta: "¿Qué es la Biodisponibilidad?",
    opciones: [
      "El porcentaje de medicamento que llega inalterado a la sangre.",
      "La cantidad de cajas disponibles en bodega.",
      "El tiempo que tarda en vencer el producto.",
      "El precio del bioequivalente."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué vía de administración tiene un 100% de biodisponibilidad inmediata?",
    opciones: ["Oral (Comprimidos)", "Sublingual", "Intravenosa (Endovenosa)", "Tópica (Cremas)"],
    correcta: 2
  },
  {
    pregunta: "¿Qué significa el concepto RAM en farmacología?",
    opciones: [
      "Registro de Almacén Médico",
      "Reacción Adversa a Medicamentos",
      "Receta Autorizada Médica",
      "Rango de Absorción Máxima"
    ],
    correcta: 1
  },
  {
    pregunta: "La etapa de 'Liberación' en el sistema LADME ocurre cuando:",
    opciones: [
      "El paciente compra el producto.",
      "El medicamento es expulsado por la orina.",
      "El principio activo se separa de su excipiente (ej: el comprimido se disuelve).",
      "El fármaco llega al cerebro."
    ],
    correcta: 2
  }
];

export default function GuiaFarmacologiaFundamentos() {
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
        filename:     'Guia-Farmacologia-LADME-AuxiliarPro.pdf',
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

      {/* HEADER DE LA GUÍA */}
      <header className="bg-cyan-900 border-b border-cyan-800 py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link href="/guias" className="text-cyan-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-colors">
              ← Volver a la Biblioteca
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider mb-4">
            <Microscope size={18} />
            Ciencias Básicas
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Farmacología: Fundamentos
          </h1>
          
          <p className="text-xl text-cyan-100 max-w-3xl">
            Lo básico que debes saber. Comprende cómo viaja el medicamento por el cuerpo (Sistema LADME), cómo hace efecto (Farmacodinamia) y el Glosario Técnico esencial.
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
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Guía Oficial 2026</span>
                </div>

                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm break-inside-avoid">
                  <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                    1. Introducción a la Farmacología
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    La Farmacología es la ciencia que estudia las sustancias químicas y sus efectos sobre los organismos vivos. Para el Auxiliar de Farmacia, dominar esta base es la diferencia entre simplemente "entregar cajas" y ser un profesional de la salud con criterio técnico.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Se divide principalmente en dos grandes ramas que todo profesional de farmacia debe conocer: <strong>Farmacocinética</strong> y <strong>Farmacodinamia</strong>.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                    2. Farmacocinética: El Sistema LADME
                  </h2>
                  <p className="mb-6 text-slate-600">
                    La Farmacocinética estudia <strong>"lo que el cuerpo le hace al fármaco"</strong> desde que entra hasta que sale. Este viaje se resume en el acrónimo LADME:
                  </p>

                  <div className="space-y-4 mb-12">
                    <div className="bg-cyan-50 p-5 rounded-2xl border border-cyan-100 flex gap-4">
                        <div className="text-3xl font-black text-cyan-600">L</div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Liberación</h4>
                            <p className="text-sm text-slate-700">El principio activo se separa de su excipiente (vehículo). Por ejemplo, cuando la cápsula se disuelve en el ácido del estómago.</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                        <div className="text-3xl font-black text-blue-500">A</div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Absorción</h4>
                            <p className="text-sm text-slate-700">Es el paso del fármaco desde el lugar donde se administró (ej. estómago, piel, músculo) hacia la <strong>sangre</strong> (circulación sistémica).</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                        <div className="text-3xl font-black text-indigo-500">D</div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Distribución</h4>
                            <p className="text-sm text-slate-700">Una vez en la sangre, el fármaco viaja y se distribuye por todo el cuerpo para llegar al órgano o tejido donde debe hacer efecto (tejido diana).</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                        <div className="text-3xl font-black text-purple-500">M</div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Metabolismo (Biotransformación)</h4>
                            <p className="text-sm text-slate-700">El cuerpo intenta "destruir" el químico extraño para poder eliminarlo. El órgano principal encargado de esto es el <strong>HÍGADO</strong>.</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex gap-4">
                        <div className="text-3xl font-black text-emerald-500">E</div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Excreción</h4>
                            <p className="text-sm text-slate-700">Es la eliminación final del fármaco del cuerpo. La vía principal son los <strong>RIÑONES</strong> (mediante la orina), aunque también se elimina por heces, sudor o leche materna.</p>
                        </div>
                    </div>
                  </div>

                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                      <Zap className="text-amber-500" /> 3. Farmacodinamia: Receptores
                    </h3>
                    <p className="mb-4 text-slate-600">
                        La Farmacodinamia estudia <strong>"lo que el fármaco le hace al cuerpo"</strong>. Es decir, su mecanismo de acción. Para que un remedio funcione, debe unirse a "interruptores" en las células llamados <strong>Receptores</strong>.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-t-emerald-500 shadow-sm">
                            <h4 className="font-black text-slate-900 text-lg mb-2">Fármacos Agonistas</h4>
                            <p className="text-sm text-slate-600">
                                Son como una llave maestra. Se unen al receptor y lo <strong>ACTIVAN</strong>, generando una respuesta en la célula (ej. Salbutamol abriendo los bronquios).
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border-t-4 border-t-red-500 shadow-sm">
                            <h4 className="font-black text-slate-900 text-lg mb-2">Fármacos Antagonistas</h4>
                            <p className="text-sm text-slate-600">
                                Funcionan como un "tapón" o un escudo. Se unen al receptor pero <strong>LO BLOQUEAN</strong>, impidiendo que otras sustancias del cuerpo actúen (ej. Losartán bloqueando la sustancia que sube la presión).
                            </p>
                        </div>
                    </div>
                  </div>

                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                      <Book className="text-cyan-600" /> 4. Glosario Técnico Esencial
                    </h3>
                    <p className="mb-6 text-sm text-slate-600">Conceptos que escucharás a diario en el mesón o leerás en las recetas médicas:</p>
                    
                    <ul className="space-y-4">
                        <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <strong className="text-slate-900 block mb-1">Biodisponibilidad</strong>
                            <p className="text-sm text-slate-700">Es la cantidad (porcentaje) de medicamento que llega intacto a la sangre y está listo para hacer efecto. La vía intravenosa tiene 100% de biodisponibilidad directa.</p>
                        </li>
                        <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <strong className="text-slate-900 block mb-1">Vida Media (t 1/2)</strong>
                            <p className="text-sm text-slate-700">El tiempo que tarda el cuerpo en eliminar el 50% de la droga que está en la sangre. Esto determina cada cuántas horas se debe tomar la pastilla (ej. cada 8h, cada 12h).</p>
                        </li>
                        <li className="bg-red-50 p-4 rounded-xl border border-red-100">
                            <strong className="text-red-900 block mb-1">RAM (Reacción Adversa a Medicamentos)</strong>
                            <p className="text-sm text-red-800">Cualquier respuesta nociva, indeseada y no intencionada a un medicamento. (Ej: dolor de estómago por tomar Ibuprofeno).</p>
                        </li>
                        <li className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <strong className="text-slate-900 block mb-1">Principio Activo vs Excipiente</strong>
                            <p className="text-sm text-slate-700">El Principio Activo es la droga química que cura (ej. Paracetamol). El Excipiente es lo que le da forma, color o sabor (el "relleno" del comprimido).</p>
                        </li>
                    </ul>
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-cyan-500 text-cyan-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Entendiste el LADME?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            10 preguntas rápidas sobre farmacocinética, receptores y conceptos clave.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-cyan-400 transition-colors shadow-lg flex items-center justify-center gap-2"
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
                                                ? 'bg-cyan-500 text-cyan-950 font-bold' 
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
                        <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">¡Completado!</h3>
                        <p className="text-slate-400 mb-6">
                            Obtuviste <strong className="text-white">{puntaje}</strong> de <strong className="text-white">{preguntasQuiz.length}</strong> correctas.
                        </p>
                        
                        <div className="space-y-3">
                            {puntaje === preguntasQuiz.length ? (
                                <div className="bg-cyan-900/50 p-3 rounded-lg text-sm text-cyan-200 border border-cyan-800">
                                    ¡Excelente! Dominas los fundamentos médicos.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Intentar de nuevo
                                </button>
                            )}
                            
                            <Link href="/quiz" className="block w-full bg-cyan-600 text-white font-bold py-3 rounded-xl hover:bg-cyan-500 text-sm text-center flex items-center justify-center">
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
                className="block bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm group hover:ring-2 hover:ring-cyan-500 transition-all text-slate-300"
              >
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-cyan-500/20 text-cyan-400 p-3 rounded-full group-hover:bg-cyan-500 group-hover:text-white transition-colors"><Clock size={24} /></div>
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
                href="https://wa.me/?text=¡Mira%20esta%20guía%20de%20Fundamentos%20Farmacológicos!%20Ideal%20para%20estudiar:%20https://www.auxiliaresdefarmacia.cl/guias/farmacologia-fundamentos" 
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
              <BannerVenta colorTheme="cyan" />

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}