'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, CheckCircle, AlertTriangle, ShieldCheck, FileText, Download, ArrowRight, Info, Package, Store, UserCheck, FileSignature, Scissors, Book, Trophy, XCircle, Ban, DollarSign } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Específicas de Ley 20.724)
const preguntasQuiz = [
  {
    pregunta: "¿Cómo define legalmente la Ley 20.724 a la Farmacia?",
    opciones: ["Como un comercio minorista", "Como un Centro de Salud", "Como una bodega de insumos", "Como un supermercado farmacéutico"],
    correcta: 1
  },
  {
    pregunta: "¿Quién debe dirigir obligatoriamente la farmacia durante TODO su horario?",
    opciones: ["El dueño del local", "El Auxiliar con más experiencia", "El Químico Farmacéutico (Director Técnico)", "El Gerente de tienda"],
    correcta: 2
  },
  {
    pregunta: "¿Qué es la 'Canela' que prohíbe esta ley?",
    opciones: ["Un saborizante para jarabes", "Incentivos económicos por vender marcas específicas", "El uso de uniformes de color café", "Vender productos naturales"],
    correcta: 1
  },
  {
    pregunta: "¿Qué dato debe incluir OBLIGATORIAMENTE el médico en la receta?",
    opciones: ["El precio del remedio", "La farmacia recomendada", "La Denominación Común Internacional (Nombre Genérico)", "El teléfono del laboratorio"],
    correcta: 2
  },
  {
    pregunta: "¿Dónde debe estar marcado el precio de venta del medicamento?",
    opciones: ["Solo en el sistema del computador", "En el envase de cada caja", "En un cartel en la entrada", "No es obligatorio mostrarlo"],
    correcta: 1
  },
  {
    pregunta: "¿Qué permite la venta en góndolas (estanterías al alcance del público)?",
    opciones: ["Medicamentos de Venta Directa (OTC)", "Antibióticos", "Psicotrópicos", "Todo tipo de remedios"],
    correcta: 0
  },
  {
    pregunta: "¿Qué es el fraccionamiento?",
    opciones: ["Vender la caja más cara", "Partir las pastillas por la mitad", "Venta de la cantidad exacta de dosis recetada", "Diluir jarabes"],
    correcta: 2
  },
  {
    pregunta: "¿Qué es la intercambiabilidad?",
    opciones: ["Devolver un producto vencido", "Cambiar un medicamento de marca por un bioequivalente certificado", "Canjear puntos por remedios", "Intercambiar turnos con colegas"],
    correcta: 1
  },
  {
    pregunta: "¿Quién debe supervisar el proceso de fraccionamiento?",
    opciones: ["El bodeguero", "El Químico Farmacéutico", "El cajero", "El cliente"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el objetivo principal de prohibir los incentivos (canela)?",
    opciones: ["Ahorrar dinero a la farmacia", "Que la recomendación sea sanitaria y no comercial", "Vender solo productos caros", "Eliminar a los vendedores"],
    correcta: 1
  }
];

export default function GuiaLey20724() {
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
        filename:     'Guia-Ley-20724-FarmacosI.pdf',
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
            Guía de Estudio Oficial
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight text-balance">
            Ley de Fármacos I <span className="text-blue-600 whitespace-nowrap">(Ley 20.724)</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-3xl">
            La normativa que transformó a la farmacia en un Centro de Salud, prohibió la "canela" y estableció la bioequivalencia obligatoria.
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

            {/* 1. INTRODUCCIÓN */}
            <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm break-inside-avoid">
              <h2 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                1. Introducción
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                La Ley 20.724, publicada en 2014, modifica el Código Sanitario con un objetivo claro: cambiar la visión que se tiene de la farmacia en Chile. Deja de verse como un simple comercio para definirse legalmente como un <strong>Centro de Salud</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Esta ley busca garantizar que la población tenga acceso a medicamentos de calidad, seguros y eficaces, promoviendo la transparencia en los precios y fomentando el uso de medicamentos bioequivalentes (genéricos certificados).
              </p>
            </section>

            {/* 2. CONTENIDO PRINCIPAL */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                2. Contenido Principal
              </h2>
              <p className="mb-6 text-slate-600">Para facilitar tu estudio, hemos dividido el contenido en 5 Módulos Clave:</p>

              {/* MÓDULO A */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Store className="text-blue-500" /> Módulo A: La Farmacia como Centro de Salud
                </h3>
                <p className="mb-4 text-slate-600">Este es el corazón de la ley. Se establece que la farmacia es un lugar donde se realizan acciones sanitarias, no solo ventas.</p>
                
                <ul className="space-y-4 text-sm text-slate-700">
                    <li className="bg-white p-4 rounded-xl border border-slate-200">
                        <strong>Definición:</strong> Las farmacias son centros de salud y deben cooperar para garantizar el uso racional de los medicamentos.
                    </li>
                    <li className="bg-white p-4 rounded-xl border border-slate-200">
                        <strong>Dirección Técnica:</strong> Deben ser dirigidas obligatoriamente por un Químico Farmacéutico, quien debe estar presente durante <strong>todo el horario de funcionamiento</strong>.
                    </li>
                    <li className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-900">
                        <strong>Rol del Profesional:</strong> El farmacéutico no solo administra; debe dispensar, informar al paciente y supervisar procesos clave como el fraccionamiento.
                    </li>
                </ul>
              </div>

              {/* MÓDULO B */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <FileSignature className="text-blue-500" /> Módulo B: La Receta y la Bioequivalencia
                </h3>
                <p className="mb-4 text-slate-600">La ley cambia las reglas del juego en la prescripción para empoderar al paciente:</p>
                
                <ol className="list-decimal pl-5 space-y-4 text-sm text-slate-700">
                    <li>
                        <strong>Contenido de la Receta:</strong> El médico debe prescribir el medicamento por su nombre de fantasía, pero <strong>obligatoriamente</strong> debe agregar la Denominación Común Internacional (el nombre genérico).
                    </li>
                    <li>
                        <strong>Intercambiabilidad:</strong> Si el medicamento recetado tiene alternativas bioequivalentes certificadas, el farmacéutico debe ofrecerlas a solicitud del paciente. Esto permite cambiar un medicamento de marca costoso por uno bioequivalente más económico y con la misma eficacia comprobada.
                    </li>
                    <li>
                        <strong>Receta Electrónica:</strong> Se regula el uso de recetas electrónicas y se protege la privacidad de los datos del paciente (datos sensibles).
                    </li>
                </ol>
              </div>

              {/* MÓDULO C */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Ban className="text-red-500" /> Módulo C: Prohibición de la "Canela" (Incentivos)
                </h3>
                <p className="mb-4 text-slate-600">Para evitar que te vendan lo que le conviene a la farmacia y no lo que necesitas, la ley prohíbe terminantemente los incentivos económicos ("la canela").</p>
                
                <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                    <ul className="space-y-3 text-sm text-red-800">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                            <strong>Prohibición:</strong> Quedan prohibidos los pagos, comisiones o premios a los vendedores y farmacéuticos por vender una marca específica de medicamentos.
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5"></span>
                            <strong>Objetivo:</strong> Que la recomendación sea puramente sanitaria y no comercial.
                        </li>
                    </ul>
                </div>
              </div>

              {/* MÓDULO D */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <DollarSign className="text-blue-500" /> Módulo D: Transparencia de Precios y Venta Directa (OTC)
                </h3>
                <p className="mb-4 text-sm text-slate-600">La ley busca que el paciente sepa cuánto va a pagar y tenga acceso fácil a remedios simples.</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                        <strong className="block text-slate-900 mb-1">Precios en el Envase</strong>
                        Es obligatorio que cada caja de medicamento tenga el precio de venta marcado en el envase.
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                        <strong className="block text-slate-900 mb-1">Listas de Precios</strong>
                        Las farmacias deben tener listas de precios disponibles (físicas o digitales) sin intervención de terceros.
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm md:col-span-2">
                        <strong className="block text-slate-900 mb-1">Góndolas (Venta Directa)</strong>
                        Los medicamentos de venta directa (sin receta, como analgésicos simples) pueden estar en estanterías al alcance del público, siempre que estén en un área especial y cumplan requisitos de seguridad para niños.
                    </div>
                </div>
              </div>

              {/* MÓDULO E */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Scissors className="text-blue-500" /> Módulo E: Fraccionamiento de Medicamentos
                </h3>
                <p className="mb-4 text-sm text-slate-600">La ley introduce el concepto de fraccionamiento, que es la venta de la cantidad exacta de dosis que el paciente necesita (por ejemplo, comprar solo 5 pastillas si el tratamiento es de 5 días, en lugar de una caja de 30).</p>
                <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                        Este proceso debe ser realizado o supervisado por el Químico Farmacéutico.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                        El envase fraccionado debe estar correctamente rotulado con la información del paciente y del medicamento para evitar errores.
                    </li>
                </ul>
              </div>

            </section>

            {/* 3. CONCLUSIÓN */}
            <section className="mb-10 break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                    3. Conclusión
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                    La Ley 20.724 marca un antes y un después en la salud pública chilena. Su mayor legado es la definición de la farmacia como un centro de salud y la protección del bolsillo del paciente a través de la bioequivalencia obligatoria y la prohibición de incentivos perversos en la venta.
                </p>
                <p className="text-lg font-bold text-slate-900">
                    Para quien trabaja en farmacia, esta ley exige un comportamiento ético, transparencia total en los precios y una participación activa del Químico Farmacéutico en la atención al paciente.
                </p>
                <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest leading-relaxed">
                    Fuente utilizada: Ministerio de Salud de Chile. Ley N° 20.724: Modifica el Código Sanitario en materia de regulación de farmacias y medicamentos.
                </p>
            </section>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY CON QUIZ INTERACTIVO */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* TARJETA 1: QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  
                  {/* ESTADO 1: INICIO */}
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-blue-500 text-blue-50 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Sabes de la Ley de Fármacos?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            10 preguntas rápidas sobre bioequivalencia, canela y el rol de la farmacia.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-blue-400 transition-colors shadow-lg flex items-center justify-center gap-2"
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
                        <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-black mb-2">¡Completado!</h3>
                        <p className="text-slate-400 mb-6">
                            Obtuviste <strong className="text-white">{puntaje}</strong> de <strong className="text-white">{preguntasQuiz.length}</strong> correctas.
                        </p>
                        
                        <div className="space-y-3">
                            {puntaje === preguntasQuiz.length ? (
                                <div className="bg-blue-900/50 p-3 rounded-lg text-sm text-blue-200 border border-blue-800">
                                    ¡Excelente! Estás listo para el módulo de Normativa.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Intentar de nuevo
                                </button>
                            )}
                            
                            <Link href="/quiz" className="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-500 text-sm">
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
