'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, CheckCircle, Microscope, FlaskConical, Pill, Activity, FileText, Download, ArrowRight, Info, BrainCircuit, XCircle, Zap, ShieldAlert, Key, Clock, List } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Adaptadas a Farmacología Básica)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es la diferencia principal entre Fármaco y Medicamento?",
    opciones: ["Son lo mismo", "El fármaco es la caja y el medicamento la pastilla", "Fármaco es el principio activo puro; Medicamento incluye excipientes", "El medicamento es natural"],
    correcta: 2 
  },
  {
    pregunta: "¿Qué estudia la Farmacocinética?",
    opciones: ["Cómo se prepara el remedio", "Lo que el cuerpo le hace al fármaco (LADME)", "Lo que el fármaco le hace al cuerpo", "El precio de venta"],
    correcta: 1
  },
  {
    pregunta: "¿Qué significa la sigla LADME?",
    opciones: ["Liberación, Absorción, Distribución, Metabolismo, Excreción", "Limpieza, Almacenaje, Dosis, Medida, Entrega", "Líquido, Activo, Droga, Mezcla, Efecto", "Ninguna de las anteriores"],
    correcta: 0
  },
  {
    pregunta: "¿Qué órgano es el principal encargado del METABOLISMO de fármacos?",
    opciones: ["El Riñón", "El Estómago", "El Hígado", "El Corazón"],
    correcta: 2
  },
  {
    pregunta: "Si un medicamento es 'Bioequivalente', ¿qué se garantiza?",
    opciones: ["Que es más barato solamente", "Que tiene el mismo color", "Que tiene la misma biodisponibilidad y velocidad de acción que el original", "Que es natural"],
    correcta: 2
  },
  {
    pregunta: "¿Qué es un 'Profármaco'?",
    opciones: ["Un fármaco profesional", "Un medicamento que entra inactivo y se activa en el hígado", "Un medicamento vencido", "Un antibiótico fuerte"],
    correcta: 1
  },
  {
    pregunta: "En Farmacodinamia, ¿qué hace un 'Antagonista'?",
    opciones: ["Activa el receptor", "Bloquea el receptor (como una llave atascada)", "Destruye el receptor", "Aumenta la dosis"],
    correcta: 1
  },
  {
    pregunta: "¿Para qué sirven los Excipientes?",
    opciones: ["Para curar la enfermedad", "Para dar forma, sabor y estabilidad (sin efecto medicinal)", "Para cobrar más caro", "Para aumentar la potencia"],
    correcta: 1
  },
  {
    pregunta: "¿Qué es la 'Vida Media' de un fármaco?",
    opciones: ["La fecha de vencimiento", "El tiempo que tarda el cuerpo en eliminar la mitad del medicamento", "La mitad de la pastilla", "El tiempo que dura en la caja"],
    correcta: 1
  },
  {
    pregunta: "Si la receta dice 'Con las comidas', ¿cuál suele ser la razón?",
    opciones: ["Para que sepa mejor", "Para proteger el estómago de irritación", "Para que no se olvide", "Para absorberlo más rápido"],
    correcta: 1
  }
];

export default function GuiaFarmacologia() {
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
        filename:     'Guia-1-Fundamentos-Farmacologia-AuxiliarPro.pdf',
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
            <Link href="/guias" className="text-slate-400 hover:text-blue-600 font-bold text-sm flex items-center gap-2 transition-colors">
              ← Volver a la Biblioteca
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
            <BookOpen size={18} />
            Guía de Estudio Oficial N°1
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight text-balance">
            Fundamentos Científicos de la <span className="text-blue-600 whitespace-nowrap">Farmacología</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-3xl">
            No basta con saber vender; hay que entender. Domina los conceptos de Farmacocinética (LADME), Dinamia y Tecnia para convertirte en un experto del mesón.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 🟢 COLUMNA IZQUIERDA: CONTENIDO COMPLETO (8 columnas) */}
          <div id="contenido-pdf" className="lg:col-span-8 space-y-12 bg-white p-4 md:p-8 rounded-xl shadow-sm">
            
            <div className="mb-8 border-b pb-4 border-slate-100 flex justify-between items-center">
                {/* Asegúrate de tener tu logo en /public/logo.webp */}
                <img 
                    src="/logo.webp" 
                    alt="AuxiliarPro Logo" 
                    className="w-32" 
                    crossOrigin="anonymous" 
                />
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Módulo 1: Ciencias Básicas</span>
            </div>

            {/* 1. INTRODUCCIÓN */}
            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm break-inside-avoid">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                1. Las 3 Ramas Principales
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Para entender cómo funciona un medicamento, debemos dividir su estudio en tres grandes áreas. No son lo mismo y a menudo se confunden.
              </p>
              
              <div className="grid gap-4 md:grid-cols-3">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <FlaskConical className="text-blue-600 mb-2" size={28} />
                      <h3 className="font-bold text-blue-900 mb-2">Farmacotecnia</h3>
                      <p className="text-xs text-blue-800">"El Arte de Preparar". Transforma el químico puro en una pastilla, jarabe o crema útil.</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                      <Activity className="text-emerald-600 mb-2" size={28} />
                      <h3 className="font-bold text-emerald-900 mb-2">Farmacocinética</h3>
                      <p className="text-xs text-emerald-800">"Lo que el cuerpo le hace al fármaco". Estudio del viaje y los tiempos (LADME).</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                      <Zap className="text-purple-600 mb-2" size={28} />
                      <h3 className="font-bold text-purple-900 mb-2">Farmacodinamia</h3>
                      <p className="text-xs text-purple-800">"Lo que el fármaco le hace al cuerpo". El mecanismo para quitar el dolor.</p>
                  </div>
              </div>
            </section>

            {/* 2. FARMACOCINÉTICA (LADME) */}
            <section className="break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Clock className="text-blue-500" /> 2. El Viaje L.A.D.M.E. (Cinética)
                </h3>
                <p className="mb-6 text-slate-600">Este proceso determina la dosis y los horarios. Si falla uno, el medicamento no funciona.</p>
                
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">L</div>
                        <div>
                            <strong className="text-slate-900 block">Liberación</strong>
                            <p className="text-sm text-slate-600">El "desempaquetado". La pastilla se disuelve. <span className="text-red-500 italic">¡Nunca moler comprimidos de liberación prolongada!</span></p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold shrink-0">A</div>
                        <div>
                            <strong className="text-slate-900 block">Absorción</strong>
                            <p className="text-sm text-slate-600">Paso a la sangre. Aquí entra la <strong>Biodisponibilidad</strong> (cuánto llegó realmente).</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold shrink-0">D</div>
                        <div>
                            <strong className="text-slate-900 block">Distribución</strong>
                            <p className="text-sm text-slate-600">El viaje por la sangre hacia el órgano enfermo.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold shrink-0">M</div>
                        <div>
                            <strong className="text-slate-900 block">Metabolismo (El Hígado)</strong>
                            <p className="text-sm text-slate-600">Transformación del químico. Ojo con los <strong>Profármacos</strong> (como Enalapril) que entran inactivos y necesitan del hígado para activarse.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-500 text-white flex items-center justify-center font-bold shrink-0">E</div>
                        <div>
                            <strong className="text-slate-900 block">Excreción</strong>
                            <p className="text-sm text-slate-600">Salida final (Orina/Heces). Fundamental en pacientes renales.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FARMACODINAMIA */}
            <section className="break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Key className="text-blue-500" /> 3. Llave y Cerradura (Dinamia)
                </h3>
                <p className="mb-4 text-slate-600">
                    Las células tienen "cerraduras" (Receptores). Los fármacos son llaves.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100">
                        <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2"><CheckCircle size={16}/> Agonistas (Activadores)</h4>
                        <p className="text-sm text-indigo-800 leading-relaxed">
                            La llave entra, gira y activa una función. <br/>
                            Ej: <strong>Salbutamol</strong> (activa los bronquios para abrirlos).
                        </p>
                    </div>
                    <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                        <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2"><XCircle size={16}/> Antagonistas (Bloqueadores)</h4>
                        <p className="text-sm text-red-800 leading-relaxed">
                            La llave entra pero no gira. Bloquea la puerta. <br/>
                            Ej: <strong>Antihistamínicos</strong> (bloquean la alergia).
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. GLOSARIO TÉCNICO */}
            <section className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <List className="text-blue-500" /> Glosario Técnico del Auxiliar
                </h3>
                <p className="text-slate-500 text-sm mb-4">Términos que debes dominar para no perderte leyendo un envase.</p>
                
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                    {[
                        { term: "Bioequivalencia", def: "Copia que garantiza misma biodisponibilidad y velocidad que el original." },
                        { term: "Excipiente", def: "Sustancia inerte para dar forma/sabor. No cura." },
                        { term: "Principio Activo", def: "Sustancia química responsable del efecto curativo." },
                        { term: "Vida Media (t ½)", def: "Tiempo que tarda el cuerpo en eliminar el 50% del fármaco." },
                        { term: "Ventana Terapéutica", def: "Margen de seguridad entre la dosis que cura y la que mata." },
                        { term: "Posología", def: "Estudio de las dosis e intervalos de tiempo." },
                        { term: "RAM", def: "Reacción Adversa al Medicamento (efecto secundario)." }
                    ].map((item, idx) => (
                        <div key={idx} className="pb-3 border-b border-slate-200 last:border-0 last:pb-0">
                            <strong className="text-slate-900 block mb-1">{item.term}</strong>
                            <p className="text-sm text-slate-600">{item.def}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TIPS FINALES */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl text-yellow-900 text-sm break-inside-avoid">
                <strong className="flex items-center gap-2 mb-1"><ShieldAlert size={16}/> Tip de Seguridad:</strong>
                <p>Si un paciente pregunta "¿Por qué hay que tomarlo con comida?", la respuesta suele ser farmacodinámica (protección gástrica). Si dice "en ayunas", es farmacocinética (para mejorar la absorción).</p>
            </div>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY CON QUIZ INTERACTIVO */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* TARJETA 1: QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-indigo-500 text-indigo-50 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Rápido
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Entendiste la teoría?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            10 preguntas para verificar si dominas LADME, excipientes y receptores.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-indigo-400 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            INICIAR TEST <ArrowRight size={18} />
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
                        <div className="bg-indigo-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-400">
                            <BrainCircuit size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">¡Completado!</h3>
                        <p className="text-slate-400 mb-6">
                            Obtuviste <strong className="text-white">{puntaje}</strong> de <strong className="text-white">{preguntasQuiz.length}</strong> correctas.
                        </p>
                        
                        <div className="space-y-3">
                            {puntaje >= 7 ? (
                                <div className="bg-indigo-900/50 p-3 rounded-lg text-sm text-indigo-200 border border-indigo-800">
                                    ¡Excelente! Tienes bases sólidas.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Repasar y Reintentar
                                </button>
                            )}
                            
                            <Link href="/guias" className="block w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-500 text-sm">
                                Volver a Guías
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
                        <p className="text-xs text-slate-500">Módulo 1: Fundamentos</p>
                    </div>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    Descarga este material de estudio para leerlo sin conexión.
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
