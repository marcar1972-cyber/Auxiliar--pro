'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { 
  BookOpen, CheckCircle, AlertTriangle, ShieldCheck, FileText, 
  Download, ArrowRight, Pill, Lock, FileSignature, Trophy, 
  XCircle, Scale, Truck, Stethoscope, Clock, ExternalLink 
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Específicas del Decreto 405)
const preguntasQuiz = [
  {
    pregunta: "¿Qué regula el Decreto 405?",
    opciones: ["Los cosméticos", "Los productos psicotrópicos", "Los insumos médicos", "Las farmacias de turno"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el color de la estrella que identifica a los psicotrópicos en su envase?",
    opciones: ["Roja", "Azul", "Verde", "Negra"],
    correcta: 2
  },
  {
    pregunta: "¿Qué tipo de receta requieren los productos de la Lista IV (como el Clonazepam)?",
    opciones: ["Receta Simple", "Receta Cheque", "Receta Médica Retenida", "Venta Directa"],
    correcta: 2
  },
  {
    pregunta: "¿Qué lista incluye sustancias prohibidas como el LSD o Éxtasis?",
    opciones: ["Lista I", "Lista II", "Lista III", "Lista IV"],
    correcta: 0
  },
  {
    pregunta: "¿Qué tipo de receta requieren las Listas II y III (estimulantes y depresores fuertes)?",
    opciones: ["Receta Simple", "Receta Retenida", "Receta Cheque", "Venta Directa"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es la validez de una receta de psicotrópicos?",
    opciones: ["60 días", "30 días desde su emisión", "1 año", "Indefinida"],
    correcta: 1
  },
  {
    pregunta: "¿Cómo deben almacenarse los psicotrópicos en la farmacia?",
    opciones: ["En el refrigerador", "En estantería abierta", "Bajo llave permanentemente", "En la vitrina principal"],
    correcta: 2
  },
  {
    pregunta: "¿Pueden los Cirujanos Dentistas recetar psicotrópicos?",
    opciones: ["No, nunca", "Sí, solo Lista IV y con receta retenida", "Sí, cualquier lista", "Solo si tienen especialidad"],
    correcta: 1
  },
  {
    pregunta: "¿Qué registro especial se permite para las Benzodiazepinas en el libro de control?",
    opciones: ["No registrarlas", "Registro simplificado (total diario ingresos/egresos)", "Registro por paciente obligatorio", "Solo guardar las facturas"],
    correcta: 1
  },
  {
    pregunta: "¿Quién debe despachar personalmente estos medicamentos?",
    opciones: ["Cualquier empleado", "El dueño de la farmacia", "El Director Técnico (DT)", "El cajero"],
    correcta: 2
  }
];

export default function GuiaDecreto405() {
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
        filename:     'Guia-Decreto-405-Psicotropicos.pdf',
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

      {/* HEADER DE LA GUÍA (Estilo Emerald) */}
      <header className="bg-emerald-900 border-b border-emerald-800 py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-6">
            <Link href="/guias" className="text-emerald-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-colors">
              ← Volver a la Biblioteca
            </Link>
          </nav>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-4">
            <BookOpen size={18} />
            Módulo Legislativo
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Reglamento de Productos Psicotrópicos <span className="text-emerald-400 whitespace-nowrap">(Decreto 405)</span>
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            La normativa que controla las sustancias que actúan sobre el sistema nervioso central, evitando su abuso y dependencia.
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
              <p className="text-lg leading-relaxed mb-4 text-slate-600">
                El Decreto 405, aprobado en 1983, es la normativa que regula en Chile todo lo relacionado con las sustancias psicotrópicas. Estas son sustancias que actúan sobre el sistema nervioso central, modificando el comportamiento, la percepción o el estado de ánimo (como los tranquilizantes, estimulantes o hipnóticos).
              </p>
              <p className="text-lg leading-relaxed mb-6 text-slate-600">
                Al igual que con los estupefacientes, el objetivo de este reglamento es controlar la importación, producción y venta para evitar el abuso y la dependencia, asegurando que solo se usen con fines médicos o científicos legítimos.
              </p>
            </section>

            {/* 2. CONTENIDO PRINCIPAL */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                2. Contenido Principal
              </h2>
              <p className="mb-6 text-slate-600">Hemos organizado la información en 4 Módulos Clave para facilitar tu aprendizaje:</p>

              {/* MÓDULO A */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Scale className="text-blue-600" /> Módulo A: Clasificación y Etiquetado
                </h3>
                <p className="mb-4 text-sm text-slate-600">A diferencia de los estupefacientes, los psicotrópicos se dividen en 4 Listas según su peligrosidad y potencial terapéutico:</p>
                
                <ul className="space-y-4 text-sm text-slate-700">
                    <li className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <strong>Lista I:</strong> Sustancias de alto riesgo y sin uso médico aceptado (alucinógenos como LSD, MDMA/Éxtasis). Están prohibidas en Chile, salvo autorización del ISP para investigación científica.
                    </li>
                    <li className="bg-white p-4 rounded-xl border border-slate-200">
                        <strong>Lista II:</strong> Estimulantes fuertes (anfetaminas).
                    </li>
                    <li className="bg-white p-4 rounded-xl border border-slate-200">
                        <strong>Lista III:</strong> Depresores del sistema nervioso (barbitúricos).
                    </li>
                    <li className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                        <strong>Lista IV:</strong> Fármacos de uso muy común, principalmente tranquilizantes (Benzodiazepinas como Clonazepam, Alprazolam, Diazepam) y algunos estimulantes menores (Sibutramina).
                    </li>
                </ul>

                <div className="mt-6 p-4 bg-white border-2 border-emerald-100 rounded-xl flex items-center gap-4">
                    <CheckCircle className="text-emerald-500 shrink-0" size={32}/>
                    <div>
                        <h4 className="font-bold text-emerald-900">Identificación Visual</h4>
                        <p className="text-sm text-emerald-800">Todo envase de producto psicotrópico debe tener en su etiqueta una estrella de cinco puntas de color <strong>VERDE</strong> y la leyenda "Sujeto a Control de Psicotrópicos". </p>
                    </div>
                </div>
              </div>

              {/* MÓDULO B */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <FileSignature className="text-blue-600" /> Módulo B: La Venta (Expendio) y Tipos de Receta
                </h3>
                <p className="mb-4 text-slate-600">La forma de vender estos productos depende estrictamente de la Lista a la que pertenezcan:</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <strong className="block text-slate-900 mb-2">1. Productos de Lista II y III</strong>
                        <p className="text-sm text-slate-600">Se venden exclusivamente con <strong>Receta Cheque</strong> (la misma que se usa para estupefacientes).</p>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                        <strong className="block text-slate-900 mb-2">2. Productos de Lista IV</strong>
                        <p className="text-sm text-slate-600">Se venden con <strong>Receta Médica Retenida</strong>.</p>
                    </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3">Reglas de la Receta:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li><strong>Validez:</strong> Tanto la Receta Cheque como la Retenida tienen una validez de 30 días desde su emisión.</li>
                        <li><strong>Llenado:</strong> Debe ser completada íntegramente por el médico, sin enmiendas.</li>
                        <li><strong>Despacho:</strong> Debe realizarlo personalmente el Director Técnico (DT). Se entrega a mayores de 18 años con Cédula de Identidad.</li>
                        <li><strong>Cantidad:</strong> En cada receta se puede prescribir el tratamiento para un máximo de 30 días (especialmente en preparados magistrales).</li>
                    </ul>
                </div>
              </div>

              {/* MÓDULO C */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Lock className="text-blue-600" /> Módulo C: Almacenamiento y Control Interno
                </h3>
                <p className="mb-4 text-sm text-slate-600">Las farmacias deben cumplir medidas de seguridad rigurosas:</p>
                
                <ul className="space-y-4 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                        <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={18} />
                        <div>
                            <strong>Bajo Llave:</strong> Al igual que los estupefacientes, los psicotrópicos deben guardarse permanentemente bajo llave.
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <BookOpen className="text-blue-500 shrink-0 mt-1" size={18} />
                        <div>
                            <strong>Libro de Control:</strong> Es obligatorio llevar un Libro de Control de Psicotrópicos visado.
                            <div className="mt-2 bg-blue-50 p-3 rounded-lg text-blue-900 text-xs">
                                <strong>Dato importante:</strong> Para las Benzodiazepinas (Lista IV), la farmacia puede optar por un registro simplificado en el libro, anotando el total de ingresos y egresos diarios, en lugar de paciente por paciente (excepto para ciertas drogas específicas que requieren control detallado).
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <Truck className="text-blue-500 shrink-0 mt-1" size={18} />
                        <div>
                            <strong>Previsiones:</strong> En octubre de cada año, los establecimientos deben informar al ISP sus proyecciones de importación o fabricación.
                        </div>
                    </li>
                </ul>
              </div>

              {/* MÓDULO D */}
              <div className="mb-12 break-inside-avoid">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                  <Stethoscope className="text-blue-600" /> Módulo D: Profesionales y Muestras Médicas
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                        <strong className="block text-slate-900 mb-1">Cirujanos Dentistas</strong>
                        Pueden recetar productos de la Lista IV (Receta Retenida). Además, pueden comprar en farmacia hasta 150 unidades para uso directo en sus pacientes (usando una receta propia que queda retenida en la farmacia).
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm">
                        <strong className="block text-slate-900 mb-1">Médicos Veterinarios</strong>
                        Pueden recetar productos de la Lista IV con Receta Retenida, indicando los datos del dueño del animal.
                    </div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-sm text-red-800">
                    <strong>Muestras Médicas:</strong> Por regla general están prohibidas para las Listas II, III y IV. Sin embargo, el ISP permite excepciones para ciertas Benzodiazepinas (Lista IV), bajo controles estrictos de distribución a los médicos.
                </div>
              </div>

            </section>

            {/* 3. CONCLUSIÓN */}
            <section className="mb-10 break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                    3. Conclusión
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                    El Decreto 405 es fundamental para el funcionamiento diario de una farmacia, ya que regula medicamentos de altísima rotación como el Clonazepam o el Alprazolam (Lista IV).
                </p>
                <p className="text-lg font-bold text-slate-900">
                    Para el personal de farmacia, las claves son recordar la Estrella Verde, diferenciar que la Lista II y III requieren Receta Cheque, mientras que la Lista IV requiere Receta Retenida, y mantener siempre los productos resguardados bajo llave y con sus registros al día.
                </p>
                <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest leading-relaxed">
                    Fuente utilizada: Ministerio de Salud Pública de Chile. Decreto N° 405: Reglamento de Productos Psicotrópicos.
                </p>
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
                        <span className="bg-emerald-500 text-emerald-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Sabes del Decreto 405?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Responde 10 preguntas rápidas sobre psicotrópicos, estrellas verdes y recetas.
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
                                    ¡Excelente! Dominas el Decreto 405.
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
