'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, Microscope, FlaskConical, Activity, Clock, Key, List, ShieldAlert, Zap, FileText, Download, ArrowRight, BrainCircuit, XCircle, Trophy, CheckCircle, Ban } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Actualizadas al contenido de Farmacología)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es el objetivo principal de la Farmacotecnia?",
    opciones: ["Estudiar el efecto en el cuerpo", "Transformar un químico puro en una forma farmacéutica segura (tableta, crema, etc.)", "Calcular el precio de venta", "Verificar la receta"],
    correcta: 1 
  },
  {
    pregunta: "¿Qué estudia la Farmacocinética?",
    opciones: ["El recorrido del medicamento (LADME)", "El mecanismo de acción", "La preparación del fármaco", "Las ventas mensuales"],
    correcta: 0
  },
  {
    pregunta: "En el sistema LADME, ¿qué significa la 'L'?",
    opciones: ["Limpieza", "Liberación", "Líquido", "Laboratorio"],
    correcta: 1
  },
  {
    pregunta: "¿Qué es un Profármaco (como el Enalapril)?",
    opciones: ["Un medicamento que entra inactivo y se activa en el hígado", "Un medicamento vencido", "Un fármaco profesional", "Un medicamento que no necesita receta"],
    correcta: 0
  },
  {
    pregunta: "¿Qué órgano es el principal responsable del Metabolismo de fármacos?",
    opciones: ["El Riñón", "El Hígado", "El Estómago", "El Corazón"],
    correcta: 1
  },
  {
    pregunta: "En Farmacodinamia, ¿qué hace un 'Agonista'?",
    opciones: ["Bloquea el receptor", "Activa el receptor (abre la puerta)", "Destruye la célula", "No hace nada"],
    correcta: 1
  },
  {
    pregunta: "¿Por qué el Ibuprofeno puede causar dolor de estómago?",
    opciones: ["Porque está vencido", "Porque el receptor que bloquea el dolor es el mismo que protege el estómago", "Porque es muy ácido", "Porque se toma con agua"],
    correcta: 1
  },
  {
    pregunta: "¿Qué garantiza la Bioequivalencia (Franja Amarilla)?",
    opciones: ["Que es el original", "Que tiene la misma biodisponibilidad y velocidad de acción que el referente", "Que es más caro", "Que tiene mejor sabor"],
    correcta: 1
  },
  {
    pregunta: "¿Qué define la 'Vida Media' de un medicamento?",
    opciones: ["La fecha de vencimiento", "El tiempo para eliminar la mitad del fármaco (define el horario)", "La mitad de la caja", "La calidad del envase"],
    correcta: 1
  },
  {
    pregunta: "Si la receta dice 'Con las comidas', generalmente es para...",
    opciones: ["Mejorar el sabor", "Proteger el estómago (colchón gástrico)", "Que se absorba más rápido", "Ahorrar tiempo"],
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
        filename:     'Guia-1-Fundamentos-Farmacologia.pdf',
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
            No basta con saber "para qué sirve". Aprende cómo se hace, cómo viaja por el cuerpo (LADME) y cómo actúa un medicamento.
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
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Ciencias Básicas</span>
            </div>

            {/* 1. INTRODUCCIÓN */}
            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm break-inside-avoid">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                1. Introducción a las Ciencias Farmacéuticas
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Para entender cómo funciona un medicamento, debemos conocer las tres ramas principales que lo estudian. No basta con saber "para qué sirve", hay que entender "cómo se hace" y "cómo viaja" por el cuerpo.
              </p>
              
              <div className="space-y-6">
                 {/* Farmacotecnia */}
                 <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                        <FlaskConical className="text-blue-600" size={24} />
                        <h3 className="font-bold text-blue-900 text-lg">A. Farmacotecnia (El Arte de Preparar)</h3>
                    </div>
                    <p className="text-sm text-blue-800 leading-relaxed">
                        Es la ciencia que estudia las manipulaciones para dar forma a las materias primas. <br/>
                        <strong>Objetivo:</strong> Transformar un químico puro en una tableta, jarabe o crema segura. <br/>
                        <strong>En la Farmacia:</strong> Se ve en las "Fórmulas Magistrales" y en la variedad de presentaciones (un mismo ibuprofeno puede ser comprimido, jarabe o gel).
                    </p>
                 </div>

                 {/* Farmacocinética */}
                 <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="text-emerald-600" size={24} />
                        <h3 className="font-bold text-emerald-900 text-lg">B. Farmacocinética (El Viaje)</h3>
                    </div>
                    <p className="text-sm text-emerald-800 leading-relaxed">
                        Es el estudio del recorrido y los cambios que sufre el medicamento desde que entra hasta que sale. <br/>
                        <strong>Pregunta clave:</strong> ¿Cuánto llega a la sangre y cuánto dura ahí? <br/>
                        <strong>Clave:</strong> Aquí entra el sistema L.A.D.M.E.
                    </p>
                 </div>

                 {/* Farmacodinamia */}
                 <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="text-purple-600" size={24} />
                        <h3 className="font-bold text-purple-900 text-lg">C. Farmacodinamia (El Efecto)</h3>
                    </div>
                    <p className="text-sm text-purple-800 leading-relaxed">
                        Es el estudio del mecanismo de acción. <br/>
                        <strong>Pregunta clave:</strong> ¿Cómo logra quitar el dolor o bajar la fiebre? <br/>
                        <strong>Clave:</strong> Funciona mediante "receptores" (llave y cerradura).
                    </p>
                 </div>
              </div>
            </section>

            {/* 2. L.A.D.M.E. */}
            <section className="break-inside-avoid">
              <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                2. Farmacocinética: El Viaje L.A.D.M.E.
              </h2>
              <p className="mb-6 text-slate-600">Este proceso determina la dosis y cada cuánto se toma el medicamento.</p>

              <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">L</div>
                      <div>
                          <strong className="text-slate-900 block text-lg">Liberación</strong>
                          <p className="text-sm text-slate-600">El medicamento se separa de su forma. La cápsula se rompe o la tableta se disuelve. Sin esto, el fármaco "pasa de largo".</p>
                      </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold shrink-0">A</div>
                      <div>
                          <strong className="text-slate-900 block text-lg">Absorción</strong>
                          <p className="text-sm text-slate-600">Paso a la sangre. Aquí medimos la <strong>Biodisponibilidad</strong> (el % que realmente llega a la sangre).</p>
                      </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold shrink-0">D</div>
                      <div>
                          <strong className="text-slate-900 block text-lg">Distribución</strong>
                          <p className="text-sm text-slate-600">El fármaco viaja por la sangre, a menudo "montado" sobre proteínas, hacia los tejidos.</p>
                      </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold shrink-0">M</div>
                      <div>
                          <strong className="text-slate-900 block text-lg">Metabolismo (Biotransformación)</strong>
                          <p className="text-sm text-slate-600 mb-2">El Hígado transforma el fármaco activo en un residuo inactivo para botarlo.</p>
                          
                          <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-xs">
                              <strong className="text-yellow-800 block mb-1">⚠️ El caso del PROFÁRMACO:</strong>
                              <p className="text-yellow-700">Hay medicamentos (como el <strong>Enalapril</strong>) que entran inactivos y necesitan que el hígado los "active". Si el hígado falla, no funcionan.</p>
                          </div>
                      </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 rounded-full bg-slate-500 text-white flex items-center justify-center font-bold shrink-0">E</div>
                      <div>
                          <strong className="text-slate-900 block text-lg">Excreción</strong>
                          <p className="text-sm text-slate-600">Salida final, generalmente por riñón (orina) o hígado (bilis/heces).</p>
                      </div>
                  </div>
              </div>
            </section>

            {/* 3. FARMACODINAMIA */}
            <section className="break-inside-avoid">
              <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                3. Farmacodinamia: Mecanismo de Acción
              </h2>
              <p className="mb-6 text-slate-600">¿Cómo sabe el paracetamol que te duele la cabeza? No lo sabe. Circula buscando dónde "encajar".</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-5 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
                      <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2"><Key size={20}/> Agonistas (Activadores)</h4>
                      <p className="text-sm text-slate-600">
                          La llave entra, gira y activa una función. <br/>
                          <strong>Ejemplo:</strong> Salbutamol (activa los bronquios para abrirlos).
                      </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border-l-4 border-red-500 shadow-sm">
                      <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2"><Ban size={20}/> Antagonistas (Bloqueadores)</h4>
                      <p className="text-sm text-slate-600">
                          La llave entra pero no gira. Bloquea la puerta. <br/>
                          <strong>Ejemplo:</strong> Antihistamínicos (bloquean la alergia).
                      </p>
                  </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2">¿Por qué ocurren los Efectos Secundarios?</h4>
                  <p className="text-sm text-slate-600">
                      Porque los receptores no son exclusivos. <br/>
                      <strong>Ejemplo:</strong> El ibuprofeno bloquea el dolor, pero también bloquea la protección del estómago (usan la misma "cerradura"). Al quitar el dolor, dañamos la mucosa.
                  </p>
              </div>
            </section>

            {/* 4. CONCEPTOS CLAVE */}
            <section className="break-inside-avoid">
                <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                    4. Conceptos Clave en el Mostrador
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">A. Bioequivalencia</h3>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li><strong>Referente:</strong> El original e innovador.</li>
                            <li><strong>Bioequivalente (Franja Amarilla):</strong> Copia que ha demostrado tener la misma <strong>Biodisponibilidad</strong> (llega la misma cantidad a la sangre) y velocidad que el referente.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3 text-lg">B. Vida Media (t ½)</h3>
                        <p className="text-sm text-slate-600 mb-2">Es el tiempo que tarda el cuerpo en eliminar la mitad del medicamento.</p>
                        <p className="text-xs text-slate-500 italic">Esto define el horario: Vida media corta = Tomar seguido (Paracetamol). Vida media larga = Una vez al día.</p>
                    </div>
                </div>
            </section>

            {/* GLOSARIO */}
            <section className="break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <List className="text-blue-500" /> Glosario Técnico del Auxiliar
                </h3>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                    {[
                        { term: "Biodisponibilidad", def: "Cantidad y velocidad con la que el principio activo llega a la sangre." },
                        { term: "Contraindicación", def: "Situación donde NO se debe usar un fármaco (Ej: Embarazo, alergia)." },
                        { term: "Excipiente", def: "Sustancia inerte para dar forma, sabor o estabilidad." },
                        { term: "Interacción Farmacológica", def: "Cuando un medicamento modifica el efecto de otro (anula o potencia)." },
                        { term: "Placebo", def: "Sustancia sin acción farmacológica usada en estudios para comparar." },
                        { term: "Posología", def: "Rama que estudia las dosis e intervalos de tiempo." },
                        { term: "Principio Activo", def: "Sustancia química responsable del efecto curativo." },
                        { term: "Ventana Terapéutica", def: "Margen de seguridad entre la dosis que cura y la que intoxica." }
                    ].map((item, idx) => (
                        <div key={idx} className="pb-3 border-b border-slate-200 last:border-0 last:pb-0">
                            <strong className="text-slate-900 block mb-1">{item.term}</strong>
                            <p className="text-sm text-slate-600">{item.def}</p>
                        </div>
                    ))}
                </div>
            </section>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY CON QUIZ INTERACTIVO */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* TARJETA 1: QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-cyan-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Rápido
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Aprendiste Farmacología?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            10 preguntas para probar tus conocimientos sobre LADME y Dinamia.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-cyan-500 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
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
                        <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">¡Completado!</h3>
                        <p className="text-slate-400 mb-6">
                            Obtuviste <strong className="text-white">{puntaje}</strong> de <strong className="text-white">{preguntasQuiz.length}</strong> correctas.
                        </p>
                        
                        <div className="space-y-3">
                            {puntaje >= 7 ? (
                                <div className="bg-cyan-900/50 p-3 rounded-lg text-sm text-cyan-200 border border-cyan-800">
                                    ¡Excelente! Dominas los conceptos básicos.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Repasar y Reintentar
                                </button>
                            )}
                            
                            <Link href="/guias" className="block w-full bg-cyan-600 text-white font-bold py-3 rounded-xl hover:bg-cyan-500 text-sm">
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
