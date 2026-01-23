'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, CheckCircle, AlertTriangle, ShieldCheck, FileText, Download, ArrowRight, Info, Package, Pill, Lock, FileSignature, Syringe, Trophy, XCircle, Truck, Scale, Zap, Activity, Clock, Thermometer, GraduationCap } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Específicas de Fundamentos de Farmacología)
const preguntasQuiz = [
  {
    pregunta: "¿Qué diferencia técnica existe entre Fármaco y Medicamento?",
    opciones: [
      "Son sinónimos exactos.",
      "El Fármaco es la sustancia pura y el Medicamento es el producto final con excipientes.",
      "El Medicamento es la sustancia pura y el Fármaco es el nombre comercial.",
      "El Fármaco es líquido y el Medicamento es sólido."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué significan las siglas LADME?",
    opciones: [
      "Limpieza, Aseo, Desinfección, Mantenimiento, Entrega.",
      "Liberación, Absorción, Distribución, Metabolismo, Excreción.",
      "Laboratorio, Administración, Dosis, Medicamento, Efecto.",
      "Líquido, Activo, Dosis, Mezcla, Envase."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es la función principal del Hígado en la farmacología?",
    opciones: [
      "Absorción.",
      "Distribución.",
      "Metabolismo.",
      "Excreción."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué vía de administración tiene una Biodisponibilidad del 100%?",
    opciones: [
      "Vía Oral.",
      "Vía Intramuscular.",
      "Vía Subcutánea.",
      "Vía Intravenosa."
    ],
    correcta: 3
  },
  {
    pregunta: "¿Qué significa que un medicamento sea Bioequivalente?",
    opciones: [
      "Que es más barato.",
      "Que tiene el mismo color de caja.",
      "Que ha demostrado tener la misma biodisponibilidad y efecto que el original.",
      "Que se vende sin receta."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué hace un fármaco Agonista?",
    opciones: [
      "Bloquea el receptor.",
      "Activa el receptor imitando una sustancia natural.",
      "Destruye el receptor.",
      "No tiene efecto."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué hace un fármaco Antagonista?",
    opciones: [
      "Activa el receptor.",
      "Acelera el metabolismo.",
      "Bloquea el receptor impidiendo la acción de sustancias naturales.",
      "Mejora el sabor del medicamento."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es la regla de oro con los comprimidos de Liberación Prolongada (Retard)?",
    opciones: [
      "Triturarlos para que actúen más rápido.",
      "Tomarlos con leche.",
      "Nunca triturarlos ni partirlos.",
      "Disolverlos en agua caliente."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es la Vida Media de un fármaco?",
    opciones: [
      "La fecha de vencimiento.",
      "El tiempo que tarda en reducirse a la mitad su concentración en sangre.",
      "La mitad del tiempo que dura el tratamiento.",
      "El tiempo que tarda en absorberse."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el órgano principal de la excreción?",
    opciones: [
      "Hígado.",
      "Estómago.",
      "Riñón.",
      "Corazón."
    ],
    correcta: 2
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
        filename:     'Guia-Fundamentos-Farmacologia.pdf',
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
            Guía de Estudio Oficial
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Fundamentos de Farmacología
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            Un Auxiliar de Farmacia competente no solo despacha cajas; entiende la ciencia detrás del tratamiento. Esta guía profundiza en los pilares de la ciencia farmacéutica: Farmacotecnia, Farmacocinética y Farmacodinamia.
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

            {/* 1. FARMACOTECNIA */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Pill className="text-emerald-600" /> 1. Farmacotecnia: La Ciencia de la Formulación
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                    Es la disciplina que estudia la manipulación de las materias primas para darles una forma adecuada, que permita ser administrada a los seres vivos.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">A. Diferencia Técnica: Fármaco vs. Medicamento</h3>
                    <p className="mb-4 text-slate-600">Es el error número uno en el mesón. Debes usar los términos con propiedad:</p>
                    <ul className="space-y-4">
                        <li className="bg-white p-4 rounded-xl shadow-sm">
                            <strong className="text-emerald-700 block text-lg mb-1">Fármaco (o Principio Activo - API):</strong>
                            <p className="text-sm">Es la sustancia química pura responsable del efecto terapéutico. Por sí sola, suele ser inestable o difícil de administrar.</p>
                            <em className="text-xs text-slate-500 block mt-1">Ejemplo: Paracetamol polvo.</em>
                        </li>
                        <li className="bg-white p-4 rounded-xl shadow-sm">
                            <strong className="text-emerald-700 block text-lg mb-1">Medicamento:</strong>
                            <p className="text-sm">Es el producto tecnológico final. Es la suma de <strong>Fármaco + Excipientes + Técnica de Manufactura</strong>.</p>
                            <em className="text-xs text-slate-500 block mt-1">Ejemplo: Comprimido de Paracetamol 500mg.</em>
                        </li>
                    </ul>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-4">B. Los Excipientes: No son "relleno"</h3>
                <p className="text-slate-600 mb-4">
                    Los excipientes son sustancias auxiliares que permiten que el medicamento sea estable, eficaz y seguro. Aunque no tienen actividad terapéutica, <strong>determinan la calidad del producto</strong>.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-6">
                    <li className="bg-slate-100 p-3 rounded-lg text-sm"><strong>Aglutinantes:</strong> Mantienen los polvos unidos para formar la pastilla.</li>
                    <li className="bg-slate-100 p-3 rounded-lg text-sm"><strong>Desintegrantes:</strong> Hacen que la pastilla "explote" o se deshaga al contacto con el jugo gástrico.</li>
                    <li className="bg-slate-100 p-3 rounded-lg text-sm"><strong>Correctores:</strong> Enmascaran sabores amargos (sacarosa, saborizantes).</li>
                    <li className="bg-slate-100 p-3 rounded-lg text-sm"><strong>Conservantes:</strong> Evitan que crezcan bacterias en jarabes o cremas (parabenos).</li>
                </ul>

                <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-400 flex gap-3">
                    <AlertTriangle className="text-amber-500 flex-shrink-0" />
                    <div>
                        <strong className="text-amber-900 block">💡 Ojo Clínico</strong>
                        <p className="text-amber-800 text-sm">Revisa siempre los excipientes en pacientes con alergias alimentarias. Muchos comprimidos usan <strong>Lactosa</strong> o <strong>Almidón de trigo (Gluten)</strong> como diluyentes.</p>
                    </div>
                </div>
            </section>

            {/* 2. FARMACOCINÉTICA */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Activity className="text-blue-600" /> 2. Farmacocinética: El Viaje del Fármaco (LADME)
                </h2>
                
                <div className="bg-slate-900 text-white p-6 rounded-2xl mb-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <strong className="text-emerald-400 block text-lg mb-1">Farmacodinamia</strong>
                            <span className="text-xs uppercase tracking-widest opacity-70 block mb-2">(Dinámica = Fuerza/Efecto)</span>
                            <p className="text-sm text-slate-300">Estudia "lo que el fármaco le hace al organismo". Es el efecto curativo (ej: bajar la fiebre, quitar el dolor, matar una bacteria).</p>
                        </div>
                        <div className="border-t md:border-t-0 md:border-l border-slate-700 pt-4 md:pt-0 md:pl-6">
                            <strong className="text-blue-400 block text-lg mb-1">Farmacocinética</strong>
                            <span className="text-xs uppercase tracking-widest opacity-70 block mb-2">(Cinética = Movimiento)</span>
                            <p className="text-sm text-slate-300">Estudia "lo que el organismo le hace al fármaco". El cuerpo no se queda quieto; toma el medicamento, lo mueve, lo transforma y lo elimina.</p>
                        </div>
                    </div>
                </div>

                <p className="mb-6 font-bold text-slate-800">El proceso farmacocinético se resume en el acrónimo LADME:</p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="font-black text-4xl text-slate-200">L</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Liberación (El inicio)</h4>
                            <p className="text-sm text-slate-600 mb-2">Es el primer paso para que el fármaco pueda absorberse. El medicamento debe separarse de su forma farmacéutica.</p>
                            <ul className="list-disc pl-4 text-sm text-slate-600">
                                <li><strong>Desintegración:</strong> La pastilla se rompe en trozos pequeños.</li>
                                <li><strong>Disolución:</strong> Las partículas se disuelven en los fluidos gástricos.</li>
                            </ul>
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded mt-2 inline-block">Nota: Los jarabes y soluciones IV se saltan este paso (actúan más rápido).</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="font-black text-4xl text-slate-200">A</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Absorción (La entrada)</h4>
                            <p className="text-sm text-slate-600 mb-2">Es el paso del fármaco desde el sitio de administración hasta la circulación sanguínea (plasma).</p>
                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                <strong className="text-blue-900 block text-sm">Concepto Clave: Biodisponibilidad</strong>
                                <p className="text-xs text-blue-800 mb-2">Es la cantidad real de fármaco que llega a la sangre inalterado.</p>
                                <ul className="text-xs text-blue-800 list-disc pl-4">
                                    <li><strong>Vía Intravenosa (IV):</strong> Biodisponibilidad del 100% (todo entra directo).</li>
                                    <li><strong>Vía Oral:</strong> Siempre es menor al 100% debido a la acidez del estómago y al "Efecto de Primer Paso".</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="font-black text-4xl text-slate-200">D</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Distribución (El transporte)</h4>
                            <p className="text-sm text-slate-600 mb-2">Una vez en la sangre, el fármaco debe viajar a los tejidos. ¿Cómo lo hace?</p>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li><strong>Unión a Proteínas Plasmáticas:</strong> La mayoría de los fármacos viajan "pegados" a una proteína llamada Albúmina, que actúa como un taxi.</li>
                                <li><strong>Fracción Unida:</strong> El fármaco va "en el taxi". No hace efecto mientras viaja.</li>
                                <li><strong>Fracción Libre:</strong> El fármaco se baja del taxi, atraviesa los tejidos y hace el efecto.</li>
                                <li><strong>Interacciones:</strong> Si dos fármacos compiten por el mismo "taxi" (Albúmina), uno puede desplazar al otro, aumentando su fracción libre y causando toxicidad. (Ej: Warfarina + Aspirina).</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="font-black text-4xl text-slate-200">M</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Metabolismo (La transformación)</h4>
                            <p className="text-sm text-slate-600 mb-2">El cuerpo detecta el fármaco como un agente extraño y trata de modificarlo para eliminarlo.</p>
                            <ul className="text-sm text-slate-600 list-disc pl-4 mb-2">
                                <li><strong>Órgano Principal:</strong> El Hígado.</li>
                                <li><strong>Sistema Enzimático:</strong> El hígado usa una "familia" de enzimas llamada Citocromo P450 (CYP) para oxidar y degradar los fármacos.</li>
                            </ul>
                            <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
                                <strong className="text-orange-900 text-sm block">Efecto de Primer Paso Hepático:</strong>
                                <p className="text-xs text-orange-800">Cuando tomas una pastilla, se absorbe en el intestino y va directo al hígado antes de llegar al resto del cuerpo. El hígado puede destruir una gran parte del fármaco antes de que haga efecto. (Por esto las dosis orales son más altas que las inyectables).</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="font-black text-4xl text-slate-200">E</div>
                        <div>
                            <h4 className="font-bold text-slate-900">Excreción (La salida)</h4>
                            <p className="text-sm text-slate-600 mb-2">La eliminación definitiva del fármaco y sus metabolitos del organismo.</p>
                            <ul className="text-sm text-slate-600 list-disc pl-4 mb-2">
                                <li><strong>Vía Renal (Orina):</strong> La más importante. Si el riñón falla (insuficiencia renal), el medicamento se acumula y intoxica.</li>
                                <li><strong>Vía Biliar (Heces), Pulmonar o Leche Materna.</strong></li>
                            </ul>
                            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                <strong className="text-emerald-900 block text-sm">Concepto Clave: Vida Media (t1/2)</strong>
                                <p className="text-xs text-emerald-800 mb-1">Es el tiempo que tarda la concentración del fármaco en la sangre en reducirse a la mitad. Esto determina cada cuántas horas se toma.</p>
                                <ul className="text-xs text-emerald-800 list-disc pl-4">
                                    <li><strong>Vida media corta:</strong> Se toma cada 6 u 8 horas (Ej: Paracetamol).</li>
                                    <li><strong>Vida media larga:</strong> Se toma cada 24 horas (Ej: Losartán).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FORMAS FARMACÉUTICAS */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Clock className="text-purple-600" /> 3. Formas Farmacéuticas y Velocidad de Efecto
                </h2>
                <p className="text-slate-600 mb-6">Para entender la rapidez de acción, primero debemos conocer al detalle qué es lo que estamos vendiendo.</p>

                <h3 className="font-bold text-slate-900 text-lg mb-4">A. Clasificación de Formas Farmacéuticas</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-purple-700 mb-2 border-b border-purple-100 pb-1">1. Sólidas</h4>
                        <ul className="text-sm space-y-2">
                            <li><strong>Comprimidos:</strong> Recubiertos, Efervescentes, Sublinguales, Masticables.</li>
                            <li><strong>Cápsulas:</strong> Duras (polvo) y Blandas (líquido).</li>
                            <li><strong>Supositorios/Óvulos:</strong> Se funden a 37°C.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-blue-700 mb-2 border-b border-blue-100 pb-1">2. Líquidas</h4>
                        <ul className="text-sm space-y-2">
                            <li><strong>Soluciones:</strong> Homogéneas (Gotas).</li>
                            <li><strong>Suspensiones:</strong> Heterogéneas. <span className="bg-yellow-100 px-1 rounded font-bold text-xs">¡Agitar!</span></li>
                            <li><strong>Emulsiones:</strong> Agua y aceite.</li>
                            <li><strong>Jarabes:</strong> Alta concentración de azúcar.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-emerald-700 mb-2 border-b border-emerald-100 pb-1">3. Semisólidas</h4>
                        <ul className="text-sm space-y-2">
                            <li><strong>Ungüentos:</strong> Base grasa, oclusivos.</li>
                            <li><strong>Cremas:</strong> Emulsión agua/aceite.</li>
                            <li><strong>Geles:</strong> Base agua/alcohol. Sin grasa.</li>
                        </ul>
                    </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-4">B. Semáforo de Velocidad: Aplicación Práctica</h3>
                <div className="space-y-4">
                    <div className="flex bg-red-50 border border-red-200 rounded-xl overflow-hidden">
                        <div className="w-2 bg-red-500"></div>
                        <div className="p-4">
                            <h4 className="font-bold text-red-900 flex items-center gap-2">🔴 Velocidad "Fórmula 1" (1-5 min)</h4>
                            <p className="text-xs text-red-800 font-bold uppercase mb-2">Urgencias o crisis</p>
                            <ul className="text-sm text-red-800 list-disc pl-4">
                                <li><strong>Vía Intravenosa (IV):</strong> Campeona indiscutible. No hay absorción. Instantáneo.</li>
                                <li><strong>Vía Inhalatoria:</strong> Directo al pulmón.</li>
                                <li><strong>Vía Sublingual:</strong> Se salta el hígado.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex bg-yellow-50 border border-yellow-200 rounded-xl overflow-hidden">
                        <div className="w-2 bg-yellow-400"></div>
                        <div className="p-4">
                            <h4 className="font-bold text-yellow-900 flex items-center gap-2">🟡 Velocidad Rápida (15-30 min)</h4>
                            <p className="text-xs text-yellow-800 font-bold uppercase mb-2">Dolor intenso pero espera una hora</p>
                            <ul className="text-sm text-yellow-800 list-disc pl-4">
                                <li><strong>Comprimidos Efervescentes:</strong> Disueltos antes de tomar.</li>
                                <li><strong>Soluciones/Cápsulas Blandas:</strong> Ya están líquidas.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex bg-emerald-50 border border-emerald-200 rounded-xl overflow-hidden">
                        <div className="w-2 bg-emerald-500"></div>
                        <div className="p-4">
                            <h4 className="font-bold text-emerald-900 flex items-center gap-2">🟢 Velocidad Estándar (30-60 min)</h4>
                            <p className="text-xs text-emerald-800 font-bold uppercase mb-2">Tratamientos crónicos</p>
                            <p className="text-sm text-emerald-800">Comprimidos y Cápsulas Duras (Requieren desintegración).</p>
                        </div>
                    </div>

                    <div className="flex bg-blue-50 border border-blue-200 rounded-xl overflow-hidden">
                        <div className="w-2 bg-blue-500"></div>
                        <div className="p-4">
                            <h4 className="font-bold text-blue-900 flex items-center gap-2">🔵 Velocidad Lenta (Liberación Prolongada)</h4>
                            <p className="text-xs text-blue-800 font-bold uppercase mb-2">Duración de 12 a 24 horas</p>
                            <p className="text-sm text-blue-800 mb-2">Siglas: XR, ER, CR, Retard, LP.</p>
                            <div className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded inline-block">
                                ⚠️ REGLA DE ORO: ¡NUNCA TRITURAR! Riesgo de toxicidad.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FARMACODINAMIA */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Zap className="text-amber-500" /> 4. Farmacodinamia: El Mecanismo de Acción
                </h2>
                <p className="text-slate-600 mb-4">Estudia "lo que el fármaco le hace al organismo". Se basa en la <strong>Teoría del Receptor (Llave y Cerradura)</strong>.</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-emerald-700 text-lg mb-2">1. Agonistas (Activadores)</h4>
                        <p className="text-sm text-slate-600 mb-2">Tienen afinidad (encajan) y eficacia (activan).</p>
                        <p className="text-sm text-slate-700 italic bg-emerald-50 p-2 rounded">Ejemplo: El <strong>Salbutamol</strong> activa los receptores Beta-2 para abrir los bronquios.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-red-700 text-lg mb-2">2. Antagonistas (Bloqueadores)</h4>
                        <p className="text-sm text-slate-600 mb-2">Tienen afinidad pero NO eficacia (tapan).</p>
                        <p className="text-sm text-slate-700 italic bg-red-50 p-2 rounded">Ejemplo: Los <strong>Antihistamínicos</strong> bloquean el receptor de la Histamina para frenar la alergia.</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3">Conceptos de Seguridad</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-slate-400 mt-1.5"></span> <strong>Ventana Terapéutica:</strong> Margen entre dosis que cura y dosis que intoxica.</li>
                        <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></span> <strong>Ventana Amplia:</strong> Seguros (Paracetamol, Amoxicilina).</li>
                        <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-red-500 mt-1.5"></span> <strong>Ventana Estrecha:</strong> Peligrosos (Warfarina, Digoxina). Requieren monitoreo.</li>
                    </ul>
                </div>
            </section>

            {/* 5. BIOEQUIVALENCIA */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Thermometer className="text-teal-500" /> 5. Bioequivalencia: La Garantía de Calidad
                </h2>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <strong className="text-teal-800 block">El Innovador:</strong>
                        <span className="text-sm text-slate-600">El medicamento original que desarrolló la molécula (Ej: Aspirina).</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <strong className="text-teal-800 block">Biodisponibilidad Comparada:</strong>
                        <span className="text-sm text-slate-600">Estudio clínico que compara la curva de concentración en sangre del Referente vs. el Test.</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-xl border border-teal-200 text-teal-900 text-sm font-medium">
                        <p><strong>Conclusión:</strong> Un Bioequivalente garantiza el mismo efecto terapéutico (Farmacodinamia) porque tiene la misma Farmacocinética que el original. Es 100% intercambiable.</p>
                    </div>
                </div>
            </section>

            {/* GLOSARIO */}
            <section className="bg-slate-900 text-slate-300 p-8 rounded-2xl break-inside-avoid">
                <div className="flex items-center gap-2 mb-6 text-emerald-400 font-bold uppercase tracking-wider">
                    <GraduationCap /> Glosario Técnico
                </div>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <dt className="text-white font-bold">Afinidad</dt>
                        <dd className="mb-3">Capacidad de un fármaco para unirse a un receptor.</dd>
                        
                        <dt className="text-white font-bold">Agonista</dt>
                        <dd className="mb-3">Fármaco que activa un receptor y provoca respuesta.</dd>

                        <dt className="text-white font-bold">Antagonista</dt>
                        <dd className="mb-3">Fármaco que bloquea un receptor.</dd>

                        <dt className="text-white font-bold">Biodisponibilidad</dt>
                        <dd className="mb-3">Porcentaje de fármaco que llega inalterado a la sangre.</dd>

                        <dt className="text-white font-bold">Bioequivalente</dt>
                        <dd className="mb-3">Misma biodisponibilidad que el innovador.</dd>

                        <dt className="text-white font-bold">Excipiente</dt>
                        <dd className="mb-3">Sustancia inactiva para dar forma y estabilidad.</dd>
                    </div>
                    <div>
                        <dt className="text-white font-bold">Farmacocinética</dt>
                        <dd className="mb-3">Movimiento del fármaco en el cuerpo (LADME).</dd>

                        <dt className="text-white font-bold">Farmacodinamia</dt>
                        <dd className="mb-3">Efecto del fármaco y mecanismo de acción.</dd>

                        <dt className="text-white font-bold">Primer Paso Hepático</dt>
                        <dd className="mb-3">Metabolismo previo en el hígado antes de llegar a la sangre.</dd>

                        <dt className="text-white font-bold">Suspensión</dt>
                        <dd className="mb-3">Líquido turbio, el polvo no se disuelve. ¡Agitar!</dd>

                        <dt className="text-white font-bold">Vida Media (t1/2)</dt>
                        <dd>Tiempo para que la concentración baje a la mitad.</dd>
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
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Sabes de Farmacología?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Pon a prueba tus conocimientos sobre Farmacotecnia, LADME y Farmacodinamia.
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
                                    ¡Excelente! Dominas los fundamentos.
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

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
