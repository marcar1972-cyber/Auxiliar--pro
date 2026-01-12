'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
// 👇 AQUÍ AGREGUÉ 'Scale' QUE FALTABA
import { BookOpen, CheckCircle, AlertTriangle, ShieldCheck, FileText, Download, ArrowRight, Info, Package, Pill, Lock, FileSignature, Syringe, Trophy, XCircle, Truck, Scale } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Específicas del Decreto 404)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es el objetivo principal del Decreto 404?",
    opciones: ["Regular los precios de los remedios", "Fiscalizar toda la cadena de vida de los estupefacientes", "Prohibir la venta de analgésicos", "Crear farmacias municipales"],
    correcta: 1
  },
  {
    pregunta: "¿Qué institución fiscaliza la etapa 'local' (venta en farmacias y tenencia)?",
    opciones: ["El ISP", "La Aduana", "Servicios de Salud (SEREMI)", "Carabineros"],
    correcta: 2
  },
  {
    pregunta: "Según la 'Regla de la Codeína', ¿Cómo se vende un producto con 60 mg o más?",
    opciones: ["Receta Simple", "Receta Retenida", "Receta Cheque", "Venta Directa"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es la validez de una Receta Cheque?",
    opciones: ["60 días", "30 días", "1 año", "Indefinida"],
    correcta: 1
  },
  {
    pregunta: "¿De qué color es la Receta Cheque que usa la Farmacia?",
    opciones: ["Café claro", "Rojo", "Amarillo", "Blanco"],
    correcta: 2
  },
  {
    pregunta: "¿Quién debe despachar obligatoriamente estos productos?",
    opciones: ["El Auxiliar de Farmacia", "El dueño", "El Director Técnico (DT) personalmente", "El cajero"],
    correcta: 2
  },
  {
    pregunta: "¿Cómo deben almacenarse los estupefacientes en la farmacia?",
    opciones: ["En vitrina con llave", "En estantería abierta", "Bajo llave en estantería exclusiva", "Junto a los antibióticos"],
    correcta: 2
  },
  {
    pregunta: "¿Qué símbolo identifica a los estupefacientes en el envase?",
    opciones: ["Una franja verde", "Una estrella roja de 5 puntas", "Un círculo negro", "Una cruz azul"],
    correcta: 1
  },
  {
    pregunta: "¿Está permitida la distribución de muestras médicas de estupefacientes?",
    opciones: ["Sí, a todos los médicos", "Solo a psiquiatras", "Está prohibida (salvo autorización especial)", "Sí, si son dosis bajas"],
    correcta: 2
  },
  {
    pregunta: "¿Qué debe hacer el DT si sospecha que una receta es falsa?",
    opciones: ["Devolverla al cliente", "Retenerla, tomar datos y denunciar", "Vender el producto igual", "Llamar a la prensa"],
    correcta: 1
  }
];

export default function GuiaDecreto404() {
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
        filename:     'Guia-Decreto-404-Estupefacientes.pdf',
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
            Reglamento de Estupefacientes <span className="text-blue-600 whitespace-nowrap">(Decreto 404)</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-3xl">
            La normativa estricta que regula el control, venta y almacenamiento de drogas con alto potencial de abuso en Chile.
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
                El Decreto 404, aprobado en 1983, es la normativa encargada de regular el control de los estupefacientes en Chile. Su objetivo principal es fiscalizar toda la "cadena de vida" de estas drogas: desde su importación o fabricación industrial hasta su entrega final al paciente.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Este reglamento busca evitar que sustancias con fines terapéuticos, pero con alto potencial de abuso y adicción, se desvíen hacia el tráfico ilícito o el uso indebido.
              </p>
            </section>

            {/* 2. CONTENIDO PRINCIPAL */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                2. Contenido Principal
              </h2>
              <p className="mb-6 text-slate-600">Para facilitar tu estudio, hemos dividido el contenido en 4 Módulos Esenciales:</p>

              {/* MÓDULO A */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Scale className="text-blue-500" /> Módulo A: Definiciones y Autoridades
                </h3>
                
                <div className="space-y-6">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">¿Qué se considera estupefaciente?</h4>
                        <p className="text-sm text-slate-700">
                            Cualquier sustancia (droga) o preparado que esté incluido en las Listas I y II que aparecen al final de este reglamento (como la morfina, fentanilo, codeína, etc.).
                        </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-3">¿Quién fiscaliza?</h4>
                        <p className="text-sm text-slate-600 mb-3">El control se divide en dos niveles:</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                                <strong>Instituto de Salud Pública (ISP):</strong> Controla la etapa "macro" o industrial (importación, exportación, producción, fabricación y distribución mayorista).
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                                <strong>Servicios de Salud (SEREMI):</strong> Controlan la etapa "local" (transporte, venta en farmacias, tenencia y uso final).
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                        <h4 className="font-bold text-red-900 mb-2">Prohibiciones</h4>
                        <p className="text-sm text-red-800 leading-relaxed">
                            En Chile está prohibida la producción, tráfico y posesión de heroína, cocaína y cannabis, entre otros. Sin embargo, existen excepciones estrictas para investigación científica o para la elaboración de productos farmacéuticos (como en el caso del cannabis), siempre con autorización del ISP.
                        </p>
                    </div>
                </div>
              </div>

              {/* MÓDULO B */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Truck className="text-blue-500" /> Módulo B: Importación y Producción
                </h3>
                <p className="mb-4 text-sm text-slate-600">El manejo de estas sustancias es exclusivo de establecimientos autorizados (laboratorios, droguerías, farmacias, hospitales).</p>
                
                <ul className="space-y-3 text-sm text-slate-700">
                    <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <strong>Previsiones (Cuotas):</strong> En octubre de cada año, los establecimientos deben informar al ISP cuánto estiman importar o producir para el año siguiente. El ISP aprueba esas cuotas.
                    </li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <strong>Certificados Oficiales:</strong> Para importar o exportar, se requiere un "Certificado Oficial" específico para cada partida, el cual tiene una validez de 4 meses.
                    </li>
                    <li className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                        <strong>Seguridad en Aduana:</strong> Una vez que la droga llega a Chile, no puede moverse de la aduana al lugar de depósito sin un certificado del Servicio de Salud que autorice la ruta y el transporte seguro.
                    </li>
                </ul>
              </div>

              {/* MÓDULO C */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <FileSignature className="text-blue-500" /> Módulo C: La Venta (Expendio) y Recetas
                </h3>
                <p className="mb-4 text-slate-600">
                    Este es el módulo más importante para el trabajo en farmacia. Los estupefacientes de las Listas I y II se venden principalmente mediante Receta Cheque o Receta Médica Retenida.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 relative">
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl">Clave Examen</div>
                    <h4 className="font-bold text-blue-900 mb-3">La Regla de la Codeína</h4>
                    <p className="text-sm text-blue-800 mb-3">La condición de venta cambia según la cantidad de droga por unidad posológica:</p>
                    <ul className="space-y-2 text-sm text-blue-900 font-medium">
                        <li>• Hasta 10 mg: Se vende con <strong>Receta Médica Simple</strong>.</li>
                        <li>• Más de 10 mg e inferior a 60 mg: Se vende con <strong>Receta Retenida</strong>.</li>
                        <li>• 60 mg o más: Se vende con <strong>Receta Cheque</strong>.</li>
                    </ul>
                </div>

                <h4 className="font-bold text-slate-900 mb-3">Sobre la Receta Cheque:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                        <strong>Formato:</strong> Son formularios oficiales impresos por la autoridad (con folio).
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                        <strong>Validez:</strong> 30 días desde la fecha de emisión.
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm md:col-span-2">
                        <strong>Colores:</strong> Café claro (Médicos), Amarillo (Farmacias), Rojo (Hospitales Psiquiátricos).
                    </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-700">
                    <p><strong>Llenado:</strong> Debe ser manuscrita íntegramente por el médico, sin dejar espacios en blanco ni tener enmiendas. Solo se puede prescribir UN producto estupefaciente por receta.</p>
                    <p><strong>Despacho:</strong> Debe hacerlo personalmente el Director Técnico (DT). Se entrega solo a mayores de 18 años, quienes deben exhibir su Cédula de Identidad.</p>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-100 text-red-800">
                        <strong>Seguridad:</strong> Si el DT sospecha que una receta es falsa o está adulterada, no debe despacharla. Su deber es retenerla, tomar los datos del portador y denunciar al Servicio de Salud.
                    </div>
                </div>
              </div>

              {/* MÓDULO D */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Lock className="text-blue-500" /> Módulo D: Control Interno y Almacenamiento
                </h3>
                <p className="mb-4 text-sm text-slate-600">Dentro de la farmacia, el manejo de estas drogas es estricto:</p>
                
                <ol className="list-decimal pl-5 space-y-4 text-sm text-slate-700">
                    <li>
                        <strong>Almacenamiento:</strong> Los estupefacientes deben guardarse obligatoriamente bajo llave para prevenir robos o pérdidas.
                    </li>
                    <li>
                        <strong>Libro de Control:</strong> Es obligatorio llevar un Libro de Control de Estupefacientes (visado) donde se registra por separado cada producto (entradas, salidas y saldos).
                    </li>
                    <li>
                        <strong>Identificación:</strong> Los envases de estos medicamentos deben tener una estrella roja de 5 puntas en su etiqueta y la leyenda "Sujeto a Control de Estupefacientes".
                    </li>
                    <li>
                        <strong>Muestras Médicas:</strong> Está prohibida la distribución de muestras médicas de estupefacientes (salvo autorización especial del ISP).
                    </li>
                </ol>
              </div>

            </section>

            {/* 3. CONCLUSIÓN */}
            <section className="mb-10 break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                    3. Conclusión
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                    El Decreto 404 establece un sistema de "circuito cerrado" para los estupefacientes. Nada entra, sale o se vende sin dejar un registro documental.
                </p>
                <p className="text-lg font-bold text-slate-900">
                    Para el equipo de farmacia, las claves del éxito en el cumplimiento de esta norma son: seguridad física (armario bajo llave), seguridad administrativa (libros al día) y rigurosidad en el mesón (revisión exhaustiva de la Receta Cheque por parte del Químico Farmacéutico).
                </p>
                <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest leading-relaxed">
                    Fuente utilizada: Ministerio de Salud Pública de Chile. Decreto N° 404: Reglamento de Estupefacientes.
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
                            ¿Sabes del Decreto 404?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Pon a prueba lo que leíste sobre estupefacientes, recetas y prohibiciones.
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
                                    ¡Excelente! Manejas el reglamento de estupefacientes.
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
