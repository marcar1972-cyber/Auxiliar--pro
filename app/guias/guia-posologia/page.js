'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import BannerVenta from '../../components/BannerVenta'; 
import { 
  BookOpen, CheckCircle, AlertTriangle, Calculator, ShieldCheck, 
  FileText, Download, ArrowRight, Info, Package, Syringe, Trophy, 
  XCircle, Droplets, Scale, Target, Users, BrainCircuit, ExternalLink, 
  Heart, Clock, RefreshCw, Lock, Sparkles, ShieldAlert
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Basadas en los ejercicios de la guía)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es la 'Regla de Oro' para la equivalencia de gotas?",
    opciones: ["1 ml = 10 gotas", "1 ml = 20 gotas", "1 ml = 30 gotas", "1 ml = 5 gotas"],
    correcta: 1 
  },
  {
    pregunta: "¿A cuántos mililitros equivale 1 cucharadita de té?",
    opciones: ["5 ml", "10 ml", "15 ml", "2.5 ml"],
    correcta: 0
  },
  {
    pregunta: "Si necesito pasar de Gramos a Miligramos, ¿qué operación hago?",
    opciones: ["Divido por 1.000", "Sumo 100", "Multiplico por 1.000", "Resto 1.000"],
    correcta: 2
  },
  {
    pregunta: "Si la receta dice '23 gotas cada 12 horas', ¿cuál es la dosis diaria?",
    opciones: ["23 gotas", "36 gotas", "46 gotas", "50 gotas"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el primer paso de la 'Fórmula de los 3 Pasos'?",
    opciones: ["Calcular la Dosis Diaria", "Dividir por el frasco", "Preguntar el precio", "Calcular la Dosis Total"],
    correcta: 0
  },
  {
    pregunta: "Si un lápiz de insulina tiene 3ml y la concentración es 100 UI/ml, ¿cuántas UI trae en total?",
    opciones: ["100 UI", "300 UI", "1000 UI", "30 UI"],
    correcta: 1
  },
  {
    pregunta: "Si el paciente necesita 135 comprimidos y la caja trae 20, ¿cuántas cajas necesita (resultado real 6,75)?",
    opciones: ["6 cajas", "6 cajas y media", "7 cajas (se redondea hacia arriba)", "5 cajas"],
    correcta: 2
  },
  {
    pregunta: "¿A cuánto equivale 1 cucharada sopera?",
    opciones: ["5 ml", "10 ml", "15 ml", "20 ml"],
    correcta: 2
  },
  {
    pregunta: "En el ejercicio de la Amoxicilina (5ml cada 8h por 7 días), ¿cuánto es el volumen total?",
    opciones: ["60 ml", "105 ml", "90 ml", "120 ml"],
    correcta: 1
  },
  {
    pregunta: "¿Por qué es importante la posología para el auxiliar?",
    opciones: ["Para cobrar más caro", "Es solo matemáticas", "Para que el paciente cumpla su tratamiento completo y seguro", "No es importante"],
    correcta: 2
  }
];

export default function GuiaPosologia() {
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
        filename:     'Guia-Maestra-Posologia-AuxiliarPro.pdf',
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
      <header className="bg-emerald-900 border-b border-emerald-800 py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link href="/guias" className="text-emerald-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-colors">
              ← Volver a la Biblioteca
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4">
            <BookOpen size={18} />
            Módulo Práctico
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Guía Maestra de Posología <span className="text-emerald-400 whitespace-nowrap">(Cálculo Farmacéutico)</span>
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            Aprende a calcular dosis exactas sin perder la cabeza. La posología no es solo matemáticas; es la base de la seguridad para el paciente en farmacia.
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

                {/* 1. INTRODUCCIÓN Y DEFINICIÓN */}
                <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm break-inside-avoid">
                  <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                    1. ¿Qué es la Posología?
                  </h2>
                  <p className="text-lg leading-relaxed mb-4 text-slate-600">
                    La <strong>posología</strong> (del griego <em>posos</em> "cuánto" y <em>logos</em> "estudio") es la rama de la farmacología que se encarga de determinar las <strong>dosis</strong> de los medicamentos.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-slate-600">
                    Para el Auxiliar de Farmacia, dominar el cálculo de dosis es una habilidad crítica. Un error en la conversión de miligramos a mililitros o una mala interpretación de la receta puede llevar a la <strong>ineficacia del tratamiento</strong> (dosis baja) o a la <strong>toxicidad</strong> (sobredosis).
                  </p>
                  
                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-xl text-indigo-900 italic flex gap-3">
                    <Target className="shrink-0" />
                    <span>
                      <strong>Objetivo:</strong> Asegurar que el paciente se lleve la cantidad exacta de medicamento para cumplir su tratamiento completo, evitando interrupciones o desperdicios.
                    </span>
                  </div>
                </section>

                {/* FACTORES QUE MODIFICAN LA DOSIS */}
                <section className="break-inside-avoid">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                    <BrainCircuit className="text-blue-600" /> Factores que modifican la Dosis
                  </h3>
                  <p className="mb-4 text-slate-600">No todos los pacientes son iguales. Aunque la guía se centra en el cálculo matemático, recuerda que la dosis varía según:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-slate-50 p-4 rounded-xl">
                          <strong className="flex items-center gap-2 text-slate-900 mb-1"><Users size={16}/> Edad del Paciente</strong>
                          <p className="text-sm text-slate-600">Los niños (pediatría) y adultos mayores (geriatría) metabolizan los fármacos de forma diferente, requiriendo ajustes de dosis.</p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl">
                          <strong className="flex items-center gap-2 text-slate-900 mb-1"><Scale size={16}/> Peso Corporal</strong>
                          <p className="text-sm text-slate-600">Muchos antibióticos y analgésicos se calculan en base a <strong>mg/kg</strong> de peso, especialmente en niños.</p>
                      </div>
                  </div>
                </section>

                {/* 2. CONTENIDO PRINCIPAL */}
                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                    2. Contenido Práctico
                  </h2>

                  {/* MÓDULO A: KIT DE HERRAMIENTAS */}
                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <Scale className="text-blue-600" /> Módulo A: El "Kit de Herramientas" Matemático
                    </h3>
                    <p className="mb-6 text-slate-600">
                      Antes de calcular nada, debes tener estas equivalencias grabadas en tu memoria. Son la base de todo cálculo farmacéutico:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Equivalencias de Peso</h4>
                        <ul className="space-y-2 text-sm text-blue-800">
                            <li>• <strong>1 gramo (g)</strong> = 1.000 miligramos (mg).</li>
                            <li>• <strong>1 miligramo (mg)</strong> = 1.000 microgramos (mcg).</li>
                        </ul>
                        <div className="mt-3 p-3 bg-white rounded-lg text-xs text-slate-500 italic">
                            Truco: Para pasar de g a mg, multiplica por 1.000. De mg a g, divide por 1.000.
                        </div>
                      </div>
                      <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-bold text-emerald-900 mb-2">Equivalencias de Volumen (Líquidos)</h4>
                        <ul className="space-y-2 text-sm text-emerald-800">
                            <li>• <strong>1 mililitro (ml)</strong> = 20 gotas (Regla de Oro).</li>
                            <li>• <strong>1 cucharadita (té)</strong> ≈ 5 ml.</li>
                            <li>• <strong>1 cucharada (sopera)</strong> ≈ 15 ml.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* MÓDULO B: LA FÓRMULA */}
                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <Calculator className="text-blue-600" /> Módulo B: La Fórmula de los 3 Pasos
                    </h3>
                    <p className="mb-4 text-slate-600">Para saber cuántas cajas o frascos vender, siempre sigue este orden lógico:</p>
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">1</div>
                            <p className="text-sm font-medium text-slate-700"><strong>Calcula la Dosis Diaria:</strong> ¿Cuánto toma el paciente en un solo día? (Ej: 2 pastillas x 3 veces = 6 al día).</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">2</div>
                            <p className="text-sm font-medium text-slate-700"><strong>Calcula la Dosis Total:</strong> Multiplica la dosis diaria por los días que dura el tratamiento.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0">3</div>
                            <p className="text-sm font-medium text-slate-700"><strong>Divide por la Presentación:</strong> Divide el total que necesita el paciente por la cantidad que trae el envase.</p>
                        </div>
                    </div>
                  </div>

                  {/* MÓDULO C: CASOS PRÁCTICOS */}
                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <Droplets className="text-blue-600" /> Módulo C: Casos Clásicos Explicados
                    </h3>
                    
                    {/* CASO A */}
                    <div className="mb-8 bg-slate-50 p-6 rounded-3xl border border-slate-200">
                        <h4 className="font-bold text-lg text-slate-900 mb-2">CASO A: El desafío de las Gotas (Ácido Valproico)</h4>
                        <ul className="text-sm text-slate-600 mb-4 space-y-1">
                            <li><strong>Receta:</strong> "Tomar 23 gotas cada 12 horas durante 3 meses".</li>
                            <li><strong>Producto:</strong> Frasco de 25 ml.</li>
                        </ul>
                        <div className="space-y-2 text-sm text-slate-700">
                            <p><strong>1. Dosis Diaria:</strong> 23 gotas x 2 veces = <strong>46 gotas al día.</strong></p>
                            <p><strong>2. Dosis Total:</strong> 46 gotas/día x 90 días = <strong>4.140 gotas totales.</strong></p>
                            <p><strong>3. Conversión Frasco:</strong> 25 ml x 20 gotas = <strong>500 gotas por frasco.</strong></p>
                            <p className="p-3 bg-white rounded-lg border border-slate-200 mt-3 shadow-sm"><strong>4. Resultado:</strong> 4.140 ÷ 500 = 8,28 frascos. <br/> <span className="text-emerald-600 font-bold block mt-1">Respuesta: El paciente necesita 9 frascos.</span></p>
                        </div>
                    </div>

                    {/* CASO B */}
                    <div className="mb-8 bg-slate-50 p-6 rounded-3xl border border-slate-200">
                        <h4 className="font-bold text-lg text-slate-900 mb-2">CASO B: Comprimidos Fraccionados (Propanolol)</h4>
                        <ul className="text-sm text-slate-600 mb-4 space-y-1">
                            <li><strong>Receta:</strong> "1/2 comprimido mañana y 1 comprimido noche, por 3 meses".</li>
                            <li><strong>Producto:</strong> Caja de 20 comprimidos.</li>
                        </ul>
                        <div className="space-y-2 text-sm text-slate-700">
                            <p><strong>1. Dosis Diaria:</strong> 0,5 + 1 = <strong>1,5 comprimidos al día.</strong></p>
                            <p><strong>2. Dosis Total:</strong> 1,5 x 90 días = <strong>135 comprimidos totales.</strong></p>
                            <p className="p-3 bg-white rounded-lg border border-slate-200 mt-3 shadow-sm"><strong>3. Cajas a vender:</strong> 135 ÷ 20 = 6,75 cajas. <br/> <span className="text-emerald-600 font-bold block mt-1">Respuesta: Debes dispensar 7 cajas.</span></p>
                        </div>
                    </div>

                    {/* CASO C */}
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
                        <h4 className="font-bold text-lg text-slate-900 mb-2">CASO C: Insulinas (UI)</h4>
                        <ul className="text-sm text-slate-600 mb-4 space-y-1">
                            <li><strong>Receta:</strong> "40 UI al día por 30 días".</li>
                            <li><strong>Producto:</strong> Lápiz de 3 ml (concentración 100 UI/ml).</li>
                        </ul>
                        <div className="space-y-2 text-sm text-slate-700">
                            <p><strong>1. Total Unidades:</strong> 40 UI x 30 días = <strong>1.200 UI totales.</strong></p>
                            <p><strong>2. Unidades por Lápiz:</strong> 3 ml x 100 UI = <strong>300 UI por lápiz.</strong></p>
                            <p className="p-3 bg-white rounded-lg border border-slate-200 mt-3 shadow-sm"><strong>3. Lápices a vender:</strong> 1.200 ÷ 300 = <strong>4 lápices exactos.</strong></p>
                        </div>
                    </div>
                  </div>

                  {/* MÓDULO D: EJERCICIOS Y SOLUCIONES */}
                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <Trophy className="text-blue-600" /> Módulo D: Ponte a Prueba (Ejercicios y Soluciones)
                    </h3>
                    
                    <div className="space-y-6">
                        {/* EJERCICIO 1 */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-blue-600 mb-2">Ejercicio 1: Antibiótico (Amoxicilina)</h4>
                            <p className="text-sm text-slate-700 mb-3">Receta: 5 ml cada 8 hours por 7 días. El frasco trae 60 ml.</p>
                            <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 border border-slate-100">
                                <p className="font-bold mb-2">Solución:</p>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Diario: 5 ml x 3 veces = 15 ml.</li>
                                    <li>Total: 15 ml x 7 días = 105 ml.</li>
                                    <li>Análisis: Un frasco tiene 60 ml. Necesita 105 ml.</li>
                                    <li className="font-bold text-emerald-600 mt-2">Respuesta: Debe llevar 2 frascos.</li>
                                </ul>
                            </div>
                        </div>

                        {/* EJERCICIO 2 */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-blue-600 mb-2">Ejercicio 2: Colesterol (Atorvastatina)</h4>
                            <p className="text-sm text-slate-700 mb-3">Receta: 1 comp/noche por 6 meses. Hay cajas de 30 y 60.</p>
                            <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 border border-slate-100">
                                <p className="font-bold mb-2">Solución:</p>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Total días: 6 meses x 30 días = 180 días (180 comprimidos).</li>
                                    <li>Opción A: 6 cajas de 30.</li>
                                    <li>Opción B: 3 cajas de 60.</li>
                                    <li className="font-bold text-emerald-600 mt-2">Respuesta: Lo más eficiente es 3 cajas de 60.</li>
                                </ul>
                            </div>
                        </div>

                        {/* EJERCICIO 3 */}
                        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-blue-600 mb-2">Ejercicio 3: Dolor (Tramadol)</h4>
                            <p className="text-sm text-slate-700 mb-3">Receta: 20 gotas cada 8 horas por 5 días. Frasco de 10 ml.</p>
                            <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700 border border-slate-100">
                                <p className="font-bold mb-2">Solución:</p>
                                <ul className="list-disc pl-4 space-y-1">
                                    <li>Diario: 20 x 3 = 60 gotas.</li>
                                    <li>Total tratamiento: 60 x 5 días = 300 gotas.</li>
                                    <li>Capacidad Frasco: 10 ml x 20 = 200 gotas.</li>
                                    <li>Cálculo: 300 ÷ 200 = 1,5.</li>
                                    <li className="font-bold text-emerald-600 mt-2">Respuesta: Necesita 2 frascos.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-emerald-500 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Sabes calcular dosis?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            10 preguntas para probar tu "Kit de Herramientas Matemático".
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
                                    ¡Excelente! Eres un maestro del cálculo.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Intentar de nuevo
                                </button>
                            )}
                            
                            <Link href="/quiz" className="block w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-500 text-sm flex items-center justify-center">
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
                className="block bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm group hover:ring-2 hover:ring-emerald-500 transition-all text-slate-300"
              >
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-emerald-500/20 text-emerald-400 p-3 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors"><Clock size={24} /></div>
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
                href="https://wa.me/?text=¡Mira%20este%20resumen%20de%20Cálculo%20de%20Dosis!%20Ideal%20para%20estudiar:%20https://www.auxiliaresdefarmacia.cl/guias/guia-posologia" 
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
              <BannerVenta colorTheme="blue" />

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}