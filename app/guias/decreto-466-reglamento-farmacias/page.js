'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import BannerVenta from '../../components/BannerVenta'; 
import { 
  BookOpen, CheckCircle, AlertTriangle, ShieldCheck, FileText, 
  Download, ArrowRight, Info, Package, Store, UserCheck, 
  FileSignature, Scissors, Book, Trophy, XCircle, Heart, 
  ExternalLink, Clock, Gavel, ShieldAlert, Sparkles, Lock, RefreshCw 
} from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Decreto 466)
const preguntasQuiz = [
  {
    pregunta: "¿Qué profesional debe asumir la Dirección Técnica de una Farmacia?",
    opciones: ["Médico Cirujano", "Químico Farmacéutico", "Auxiliar de Farmacia", "Enfermera"],
    correcta: 1
  },
  {
    pregunta: "¿Qué establecimiento tiene PROHIBIDO preparar fórmulas magistrales?",
    opciones: ["Farmacia Privada", "Farmacia Hospitalaria", "Almacén Farmacéutico", "Droguería"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el requisito de escolaridad para ser Auxiliar de Farmacia?",
    opciones: ["8° Básico", "Enseñanza Media Completa (4° Medio)", "Título Técnico Nivel Superior", "Título Universitario"],
    correcta: 1
  },
  {
    pregunta: "¿Qué tipo de receta se usa para estupefacientes de alto control?",
    opciones: ["Receta Simple", "Receta Retenida", "Receta Cheque", "Venta Directa"],
    correcta: 2
  },
  {
    pregunta: "¿Dónde deben guardarse los productos estupefacientes?",
    opciones: ["En el mostrador", "En la bodega común", "Bajo llave en estantería exclusiva", "En el refrigerador siempre"],
    correcta: 2
  },
  {
    pregunta: "¿Qué productos NO se pueden fraccionar?",
    opciones: ["Antibióticos orales", "Paracetamol", "Productos oncológicos y hormonas", "Vitaminas"],
    correcta: 2
  },
  {
    pregunta: "¿Qué es un Botiquín según el Decreto 466?",
    opciones: ["Una caja de primeros auxilios", "Recinto de uso interno en instituciones (ej: colegios, mineras)", "Una farmacia pequeña de barrio", "Un almacén de cosméticos"],
    correcta: 1
  },
  {
    pregunta: "¿Cuántas horas mínimo debe estar el DT en la farmacia?",
    opciones: ["4 horas", "8 horas", "Solo cuando hay inspección", "12 horas"],
    correcta: 1
  },
  {
    pregunta: "¿Qué libro es obligatorio mantener a disposición del público?",
    opciones: ["Libro de Reclamos", "Libro de Estupefacientes", "Libro de Fraccionamiento", "Libro de Finanzas"],
    correcta: 0
  },
  {
    pregunta: "¿Quién autoriza al Auxiliar de Farmacia para ejercer?",
    opciones: ["El dueño de la farmacia", "El Ministerio de Educación", "La SEREMI de Salud", "El Colegio de Químicos"],
    correcta: 2
  }
];

export default function GuiaDecreto466() {
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
        filename:     'Guia-Decreto-466-AuxiliarPro.pdf',
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
            Módulo Legislativo
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Reglamento de Farmacias <span className="text-emerald-400 whitespace-nowrap">(Decreto 466)</span>
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            El reglamento fundamental que define las reglas del juego: Tipos de establecimientos, roles del personal y condiciones sanitarias para operar en Chile.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 🟢 COLUMNA IZQUIERDA: CONTENIDO COMPLETO (8 columnas) */}
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
                    1. Introducción
                  </h2>
                  <p className="text-lg leading-relaxed mb-4">
                    El Decreto 466 es el reglamento fundamental que establece las condiciones sanitarias para la instalación, funcionamiento y fiscalización de los establecimientos farmacéuticos en Chile.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Su propósito es asegurar que la distribución, preparación y venta de medicamentos se realicen bajo estándares de calidad para proteger la salud de la población, siguiendo lineamientos del <a href="https://www.ispch.cl/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold inline-flex items-center gap-1">ISP <ExternalLink size={12}/></a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-black text-slate-900 mb-8 break-before-auto">
                    2. Contenido Principal
                  </h2>
                  <p className="mb-6 text-slate-600">Para facilitar el estudio, hemos organizado la información en 5 Módulos Clave:</p>

                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <Store className="text-blue-600" /> Módulo A: Tipos de Establecimientos
                    </h3>
                    <p className="mb-6 text-lg text-slate-600">
                      El reglamento clasifica los lugares de expendio según sus funciones y complejidad:
                    </p>
                    
                    <ul className="space-y-4">
                      <li className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Farmacia</h4>
                        <p className="text-sm text-blue-800 leading-relaxed">
                          Es el establecimiento más completo. Está destinado a la venta de productos farmacéuticos, alimentos de uso médico, la preparación de recetas magistrales (fórmulas a medida) y oficinas, y el fraccionamiento de envases.
                        </p>
                      </li>
                      <li className="bg-white p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Almacén Farmacéutico</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Establecimiento dirigido por un Práctico de Farmacia. Vende medicamentos de venta directa y un listado específico de medicamentos con receta (definidos en el Título X del reglamento). <strong>Tienen estrictamente prohibido preparar fórmulas magistrales.</strong>
                        </p>
                      </li>
                      <li className="bg-white p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Droguería</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Se dedica a la importación, fraccionamiento y distribución mayorista de drogas, sustancias químicas y accesorios médicos. Vende principalmente a farmacias y laboratorios, no al público general.
                        </p>
                      </li>
                      <li className="bg-white p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Botiquín</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Recinto con medicamentos destinados exclusivamente al uso interno de instituciones como clínicas, maternidades, campamentos mineros, navíos o enfermerías de colegios.
                        </p>
                      </li>
                      <li className="bg-white p-5 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Depósito de Productos</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Bodegas autorizadas para el almacenamiento y distribución de productos (pueden ser de uso humano, veterinario o dental).
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <UserCheck className="text-blue-600" /> Módulo B: El Personal y sus Responsabilidades
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <strong className="text-lg text-blue-700 block mb-2">1. Director Técnico (DT)</strong>
                            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                                <li>Toda farmacia debe funcionar bajo la dirección de un Químico Farmacéutico.</li>
                                <li>Debe ejercer su cargo al menos 8 horas diarias (o durante todo el horario si la farmacia atiende menos tiempo).</li>
                                <li><strong>Responsabilidades:</strong> Despachar personalmente recetas de productos controlados (estupefacientes y psicotrópicos), velar por la correcta conservación de los medicamentos, capacitar al personal auxiliar y supervisar el fraccionamiento.</li>
                            </ul>
                        </div>

                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-200 text-emerald-800 text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-xl">
                                Tu Rol
                            </div>
                            <strong className="text-lg text-emerald-900 block mb-2">2. Auxiliar de Farmacia</strong>
                            <p className="text-sm text-emerald-800 mb-3">Para obtener la autorización sanitaria como Auxiliar de Farmacia, se deben cumplir tres requisitos fundamentales:</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5"/> Haber rendido satisfactoriamente 4° año de enseñanza media.</li>
                                <li className="flex gap-2 items-start"><CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5"/> Haber trabajado al menos 1 año en farmacia realizando labores de bodegaje y reposición (certificado por el DT).</li>
                                <li className="flex gap-2 items-start">
                                    <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5"/> 
                                    <span>
                                        Rendir y aprobar un <a href="https://seremienlinea.minsal.cl/asdigital/manuales/1_Manual_de_Usuario_Externo_para_la_Certificacion_de_Competencias_de_Auxiliar_de_farmacia.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-800 font-bold inline-flex items-center gap-1">examen de competencia ante la autoridad sanitaria (SEREMI de Salud) <ExternalLink size={12} /></a>. Este examen evalúa conocimientos sobre regulación sanitaria, almacenamiento y acción terapéutica de medicamentos de venta directa.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <strong className="text-lg text-slate-700 block mb-2">3. Práctico de Farmacia</strong>
                            <p className="text-sm text-slate-600">Es la persona autorizada para asumir la dirección técnica de un Almacén Farmacéutico.</p>
                        </div>
                    </div>
                  </div>

                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <FileSignature className="text-blue-600" /> Módulo C: El Expendio y las Recetas
                    </h3>
                    <p className="mb-4 text-slate-600">La venta de medicamentos se rige estrictamente por la condición de venta aprobada en su registro sanitario:</p>
                    
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 mb-6 font-medium">
                        <li><strong>Venta Directa (VD):</strong> Medicamentos que no requieren receta médica.</li>
                        <li><strong>Receta Simple (R):</strong> La orden médica habitual.</li>
                        <li><strong>Receta Retenida (RR):</strong> La farmacia debe archivar la receta tras el despacho.</li>
                        <li><strong>Receta Cheque (RCH):</strong> Formulario oficial para estupefacientes y psicotrópicos de mayor control.</li>
                    </ol>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-2">Requisitos de la Receta</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Toda receta debe ser clara y contener la identificación del profesional (incluyendo RUT y registro), identificación del paciente, nombre del medicamento, dosis, forma farmacéutica, posología y firma.
                            </p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200">
                            <h4 className="font-bold text-slate-900 mb-2">Bioequivalencia</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Si un medicamento prescrito tiene alternativas bioequivalentes certificadas, la farmacia debe informar al paciente sobre su existencia y disponibilidad antes de finalizar la venta.
                            </p>
                        </div>
                    </div>
                  </div>

                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <Book className="text-blue-600" /> Módulo D: Infraestructura y Libros Obligatorios
                    </h3>
                    <p className="mb-4 text-sm text-slate-600">Para asegurar el control sanitario, las farmacias deben mantener al día los siguientes Registros Oficiales (que pueden ser digitales o físicos):</p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> 1. De Inspección.</li>
                        <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> 2. De Fraccionamiento (si corresponde).</li>
                        <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> 3. De Control de Estupefacientes.</li>
                        <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> 4. De Control de Productos Psicotrópicos.</li>
                        <li className="bg-white p-3 rounded-lg border border-slate-100 text-sm flex items-center gap-2"><CheckCircle size={14} className="text-slate-400"/> 5. De Reclamos (siempre a disposición del público).</li>
                    </ul>
                    
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 text-red-800 text-sm">
                        <ShieldCheck className="shrink-0" size={20}/>
                        <p><strong>Seguridad:</strong> Los productos estupefacientes y psicotrópicos deben almacenarse en una estantería exclusiva y bajo llave para evitar hurtos o extravíos.</p>
                    </div>
                  </div>

                  <div className="mb-12 break-inside-avoid">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
                      <Scissors className="text-blue-600" /> Módulo E: Fraccionamiento de Medicamentos
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">El fraccionamiento es el procedimiento mediante el cual se extraen dosis específicas de un envase clínico para entregarlas al paciente según su receta.</p>
                    <ul className="space-y-2 text-sm text-slate-700 mb-4">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                            Debe realizarse en un área separada y exclusiva dentro de la farmacia (o por un tercero autorizado).
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></span>
                            El envase entregado al paciente debe estar sellado y rotulado con información clave (paciente, medicamento, lote, vencimiento).
                        </li>
                    </ul>
                    <div className="p-4 bg-slate-100 rounded-xl text-xs font-medium text-slate-600">
                        🚫 <strong>Prohibiciones:</strong> No se pueden fraccionar hormonas, productos oncológicos, radiofármacos, ni aquellos que requieran refrigeración.
                    </div>
                  </div>

                </section>

                <section className="mb-10 break-inside-avoid">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">
                        3. Conclusión
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-700 mb-4">
                        El Decreto 466 organiza el funcionamiento farmacéutico en Chile, estableciendo jerarquías claras entre los tipos de establecimientos y definiendo roles precisos para el personal.
                    </p>
                    <p className="text-lg font-bold text-slate-900">
                        Para quien aspira a certificarse como Auxiliar de Farmacia, es vital comprender que su labor siempre está bajo la supervisión del Químico Farmacéutico y que el manejo de medicamentos requiere un estricto apego a las normas de almacenamiento y venta para garantizar la seguridad del paciente.
                    </p>
                    
                    {/* BLOQUE DE FUENTE LEGAL OBLIGATORIO */}
                    <div className="mt-8 border-t border-slate-200 pt-6 bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold uppercase text-xs tracking-wider">
                            <Gavel size={14} className="text-slate-500" /> Fuente Legal Consultada
                        </div>
                        <a 
                            href="https://www.bcn.cl/leychile/navegar?idNorma=13613" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium flex items-center gap-1"
                        >
                            Decreto Supremo N° 466: Reglamento de Farmacias, Droguerías y Almacenes Farmacéuticos <ExternalLink size={12} />
                        </a>
                        <p className="text-xs text-slate-500 mt-1">Biblioteca del Congreso Nacional de Chile (BCN).</p>
                    </div>
                </section>
            </div>

            {/* AVISO LEGAL MOVIL (Exclusivo móvil, en PC se oculta) */}
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
                            ¿Sabes del Decreto 466?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            10 preguntas rápidas sobre roles, recetas y prohibiciones. ¿Podrás con todas?
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
                                    ¡Excelente! Dominas el Decreto 466.
                                </div>
                            ) : (
                                <button 
                                    onClick={reiniciarQuiz}
                                    className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 text-sm"
                                >
                                    Intentar de nuevo
                                </button>
                            )}
                            
                            <Link href="/quiz" className="block w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-500 text-sm text-center flex items-center justify-center">
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
                href="https://wa.me/?text=¡Mira%20este%20resumen%20del%20Decreto%20466!%20Ideal%20para%20estudiar:%20https://www.auxiliaresdefarmacia.cl/guias/decreto-466-reglamento-farmacias" 
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