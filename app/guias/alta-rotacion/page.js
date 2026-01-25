'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, AlertTriangle, Download, ArrowRight, Pill, Flame, Activity, ShieldAlert, Stethoscope, Zap, Wind, Thermometer, GraduationCap, FileText, Trophy, UserCheck, XCircle, Droplet, CheckCircle, Clock, AlertOctagon } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Alta Rotación: Dolor, Respiratorio y Digestivo)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es el analgésico de elección para un paciente con gastritis o úlceras?",
    opciones: [
      "Ibuprofeno.",
      "Ketorolaco.",
      "Paracetamol.",
      "Aspirina."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué diferencia principal existe entre la Clorfenamina y la Loratadina?",
    opciones: [
      "La Clorfenamina produce sueño y la Loratadina no (o muy poco).",
      "La Loratadina es para la tos.",
      "La Clorfenamina es un antibiótico.",
      "No hay diferencia."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Para qué tipo de tos se recomienda un Mucolítico (ej: Ambroxol)?",
    opciones: [
      "Para la tos seca, irritativa.",
      "Para la tos nerviosa.",
      "Para la tos con flema (productiva).",
      "Para el dolor de garganta."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es la recomendación clave al tomar Omeprazol?",
    opciones: [
      "Tomarlo después de almuerzo.",
      "Tomarlo en ayunas (30 min antes del desayuno).",
      "Masticarlo bien.",
      "Tomarlo junto con leche."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el riesgo de usar Ketorolaco por más de 5 días?",
    opciones: [
      "Riesgo de adicción.",
      "Daño renal agudo y hemorragia digestiva.",
      "Aumento de peso.",
      "Caída del cabello."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué medicamento es un antiespasmódico ideal para cólicos estomacales?",
    opciones: [
      "Loperamida.",
      "Viadil (Propinoxato).",
      "Bioflora.",
      "Salbutamol."
    ],
    correcta: 1
  },
  {
    pregunta: "Si un paciente es hipertenso, ¿qué precaución debe tener con los antigripales (Tapsin, Nastizol)?",
    opciones: [
      "Ninguna, son seguros.",
      "Deben contener Pseudoefedrina.",
      "No deben contener Pseudoefedrina (sube la presión).",
      "Deben tomarse con mucha agua."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es la función de la Loperamida?",
    opciones: [
      "Restaurar la flora intestinal.",
      "Detener la diarrea disminuyendo el movimiento intestinal.",
      "Calmar el dolor de guata.",
      "Eliminar bacterias."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué función cumple el Salbutamol en el sistema respiratorio?",
    opciones: [
      "Desinflama a largo plazo.",
      "Es un antibiótico pulmonar.",
      "Es un broncodilatador de rescate (abre los bronquios rápido).",
      "Elimina la tos seca."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué grupo de riesgo NO debe consumir AINEs (Ibuprofeno/Diclofenaco) sin supervisión médica estricta?",
    opciones: [
      "Embarazadas (especialmente 3er trimestre).",
      "Deportistas jóvenes.",
      "Estudiantes.",
      "Personas con dolor de cabeza ocasional."
    ],
    correcta: 0
  }
];

export default function GuiaAltaRotacion() {
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
        filename:     'Guia-Alta-Rotacion-Farmacia.pdf',
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
            Guía Maestra de Estudio
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Medicamentos de Alta Rotación
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            Esta guía consolida el 80% de las ventas diarias en el mesón. Domina los tres pilares de la atención farmacéutica básica: Dolor, Respiratorio y Digestivo.
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
                <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Manual Integral 2026</span>
            </div>

            {/* INTRODUCCIÓN */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-4">Introducción: La Regla del 80/20</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                    En farmacia se cumple el Principio de Pareto: el 80% de las consultas de mostrador se resuelven con el 20% de los medicamentos. Esta guía cubre ese 20% crítico. Si dominas estos tres sistemas (Dolor, Respiratorio, Digestivo), podrás manejar la gran mayoría de las atenciones diarias con seguridad y profesionalismo.
                </p>
            </section>

            <hr className="border-slate-200" />

            {/* MÓDULO 1: DOLOR E INFLAMACIÓN */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-100 p-3 rounded-lg text-red-600"><Flame size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">Módulo 1: Dolor e Inflamación</h2>
                </div>
                
                <p className="mb-6 text-slate-600">
                    Es vital distinguir entre Analgésicos puros (solo dolor/fiebre) y AINEs (Antiinflamatorios). El error más común es dar AINEs a pacientes con problemas gástricos.
                </p>

                {/* COMPARATIVA DE ANALGÉSICOS */}
                <div className="space-y-6">
                    
                    {/* PARACETAMOL */}
                    <div className="bg-white border-l-4 border-emerald-500 p-5 rounded-r-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg flex justify-between">
                            1. Paracetamol (Acetaminofén)
                            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full uppercase">Seguridad</span>
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                            <li><strong>Acción:</strong> Analgésico y Antipirético (baja la fiebre). NO desinflama significativamente.</li>
                            <li><strong>Uso ideal:</strong> Niños, embarazadas, dolor de cabeza leve, pacientes con gastritis.</li>
                            <li><strong>Riesgo:</strong> Hepatotoxicidad (daño al hígado) en sobredosis. Máximo 4g al día en adultos sanos.</li>
                        </ul>
                    </div>

                    {/* IBUPROFENO */}
                    <div className="bg-white border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg flex justify-between">
                            2. Ibuprofeno
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full uppercase">Versátil</span>
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                            <li><strong>Acción:</strong> AINE completo (Dolor, Fiebre e Inflamación).</li>
                            <li><strong>Uso ideal:</strong> Dolor de garganta, dolor menstrual, golpes, dolor dental moderado.</li>
                            <li><strong>Riesgo:</strong> Gastrolesivo (daña el estómago). Siempre con comida. Sube la presión arterial.</li>
                        </ul>
                    </div>

                    {/* KETOROLACO */}
                    <div className="bg-white border-l-4 border-red-500 p-5 rounded-r-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg flex justify-between">
                            3. Ketorolaco
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full uppercase">Potencia</span>
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                            <li><strong>Acción:</strong> Analgésico muy potente (nivel post-quirúrgico).</li>
                            <li><strong>Uso ideal:</strong> Dolor de muelas severo, cólicos renales, migrañas fuertes.</li>
                            <li><strong>Riesgo Extremo:</strong> Daño renal y gástrico rápido. <strong>¡Máximo 5 días de uso!</strong> Prohibido en adultos mayores por riesgo de hemorragia.</li>
                        </ul>
                    </div>

                    {/* DICLOFENACO */}
                    <div className="bg-white border-l-4 border-purple-500 p-5 rounded-r-xl shadow-sm">
                        <h3 className="font-bold text-slate-900 text-lg flex justify-between">
                            4. Diclofenaco
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full uppercase">Muscular</span>
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                            <li><strong>Acción:</strong> Preferencia por tejido muscular y articular.</li>
                            <li><strong>Uso ideal:</strong> Lumbago, esguinces, tendinitis, dolor de rodilla.</li>
                            <li><strong>Riesgo:</strong> Alto riesgo cardiovascular en uso crónico. Irrita el estómago.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-red-50 p-4 rounded-xl border border-red-200">
                    <h4 className="font-bold text-red-900 flex items-center gap-2 mb-2"><ShieldAlert size={20}/> Advertencia de Seguridad: AINEs</h4>
                    <p className="text-sm text-red-800">
                        Todos los AINEs (Ibuprofeno, Ketorolaco, Diclofenaco, Naproxeno) bloquean la protección natural del estómago y reducen el flujo de sangre al riñón. 
                        <strong>Nunca recomendar a pacientes con úlcera activa o insuficiencia renal.</strong>
                    </p>
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* MÓDULO 2: SISTEMA RESPIRATORIO */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-cyan-100 p-3 rounded-lg text-cyan-600"><Wind size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">Módulo 2: Respiratorio y Alergias</h2>
                </div>

                {/* ANTIHISTAMÍNICOS */}
                <h3 className="text-lg font-bold text-slate-800 mb-3">1. Antihistamínicos (Alergias)</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-1">Clorfenamina (1ª Generación)</strong>
                        <p className="text-sm text-slate-600">Efectiva pero atraviesa la barrera hematoencefálica. <strong>Produce mucho sueño.</strong> Útil para picazones intensas nocturnas o resfríos fuertes para dormir mejor.</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <strong className="block text-slate-900 mb-1">Loratadina / Desloratadina (2ª Gen)</strong>
                        <p className="text-sm text-slate-600">No producen sueño (o muy poco). Ideales para alergias estacionales (rinitis, primavera) que requieren tratamiento diario durante el día.</p>
                    </div>
                </div>

                {/* JARABES PARA LA TOS */}
                <h3 className="text-lg font-bold text-slate-800 mb-3">2. El Dilema de la Tos</h3>
                <p className="text-sm text-slate-600 mb-4">Es la pregunta más importante: <em>"¿Tiene flema o es tos seca?"</em></p>
                
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex-1 bg-green-50 p-5 rounded-2xl border border-green-200">
                        <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2"><Droplet size={18}/> Tos con Flema (Productiva)</h4>
                        <p className="text-sm text-green-800 mb-3">El cuerpo necesita expulsar el moco. NO debemos cortar la tos.</p>
                        <strong className="text-sm text-green-900 block">Recomendación: Mucolíticos</strong>
                        <ul className="text-sm text-green-800 list-disc pl-4 mt-1">
                            <li><strong>Ambroxol / Bromhexina:</strong> Rompen la flema para que sea más fácil botarla.</li>
                            <li>Aumentar ingesta de agua.</li>
                        </ul>
                    </div>

                    <div className="flex-1 bg-yellow-50 p-5 rounded-2xl border border-yellow-200">
                        <h4 className="font-bold text-yellow-900 mb-2 flex items-center gap-2"><XCircle size={18}/> Tos Seca (Irritativa)</h4>
                        <p className="text-sm text-yellow-800 mb-3">Es una tos molesta, que pica, sin desgarro. Impide dormir.</p>
                        <strong className="text-sm text-yellow-900 block">Recomendación: Antitusivos</strong>
                        <ul className="text-sm text-yellow-800 list-disc pl-4 mt-1">
                            <li><strong>Oxolamina / Codeína:</strong> Actúan calmando la irritación periférica o el reflejo central de la tos.</li>
                            <li>Nunca dar si hay flema (provocaría retención e infección).</li>
                        </ul>
                    </div>
                </div>

                {/* INHALADORES */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-2">3. Inhaladores Básicos: Salbutamol</h4>
                    <p className="text-sm text-slate-700">Es un <strong>Broncodilatador de acción rápida</strong>. Se usa "a demanda" (SOS) cuando el paciente siente el pecho apretado. No es un tratamiento de fondo, es un "rescate".</p>
                </div>
            </section>

            <hr className="border-slate-200" />

            {/* MÓDULO 3: SISTEMA DIGESTIVO */}
            <section className="break-inside-avoid">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><Stethoscope size={28} /></div>
                    <h2 className="text-2xl font-black text-slate-900">Módulo 3: Sistema Digestivo</h2>
                </div>

                <div className="space-y-6">
                    
                    {/* GASTRITIS Y ACIDEZ */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 mb-3">Acidez y Protección Gástrica</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-3 rounded-lg">
                                <strong className="text-slate-800 block text-sm">Antiácidos (Sales, Famotidina)</strong>
                                <p className="text-xs text-slate-600">Acción química inmediata. Neutralizan el ácido que ya está ahí. Efecto corto. Para alivio sintomático rápido.</p>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-lg">
                                <strong className="text-slate-800 block text-sm">Inhibidores (Omeprazol)</strong>
                                <p className="text-xs text-slate-600">Evitan que se produzca ácido. Prevención y tratamiento de úlceras. <strong>Regla de Oro: Tomar en ayunas</strong> (30 min antes del desayuno) para que funcione.</p>
                            </div>
                        </div>
                    </div>

                    {/* CÓLICOS */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                        <div className="bg-purple-50 text-purple-600 p-2 rounded-lg"><Activity size={24}/></div>
                        <div>
                            <h4 className="font-bold text-slate-900">Cólicos: Antiespasmódicos</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                Para el dolor tipo "retortijón". El líder es el <strong>Viadil (Propinoxato)</strong>. Relaja la musculatura del intestino.
                                <br/><span className="text-xs text-slate-500 italic">Ojo: Viadil Compuesto incluye Metamizol (analgésico) para mayor potencia.</span>
                            </p>
                        </div>
                    </div>

                    {/* DIARREA Y FLORA */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <strong className="text-slate-900 block mb-1">Antidiarreicos (Loperamida)</strong>
                            <p className="text-sm text-slate-600">"Paralizan" el intestino para frenar la diarrea. No usar si hay fiebre o sangre (podría ser una infección bacteriana que necesita salir).</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <strong className="text-slate-900 block mb-1">Probióticos (Perenteryl, Bioflora)</strong>
                            <p className="text-sm text-slate-600">Son microorganismos vivos que restauran la flora intestinal perdida por la diarrea o antibióticos. Fundamentales en niños.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* MÓDULO 4: ANAMNESIS Y SEGURIDAD (AGREGADO) */}
            <hr className="border-slate-200 my-8" />
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <UserCheck className="text-blue-600" /> Módulo 4: Seguridad Clínica y Protocolo
                </h2>
                
                {/* Contraindicaciones */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <AlertOctagon className="text-red-500" size={20} /> Contraindicaciones Absolutas
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2">
                            <XCircle className="text-red-500 shrink-0" size={16} />
                            <span><strong>Alergia a la Aspirina (AAS):</strong> Riesgo de reacción cruzada con otros AINEs.</span>
                        </li>
                        <li className="flex gap-2">
                            <XCircle className="text-red-500 shrink-0" size={16} />
                            <span><strong>Úlcera Gástrica Activa:</strong> Nunca vender AINEs. Preferir Paracetamol.</span>
                        </li>
                        <li className="flex gap-2">
                            <XCircle className="text-red-500 shrink-0" size={16} />
                            <span><strong>Insuficiencia Renal Grave:</strong> Los AINEs empeoran la función renal.</span>
                        </li>
                        <li className="flex gap-2">
                            <XCircle className="text-red-500 shrink-0" size={16} />
                            <span><strong>Tos Productiva + Antitusivo:</strong> Nunca inhibir la tos si hay flema, ya que puede causar neumonía por retención.</span>
                        </li>
                    </ul>
                </div>

                {/* Grupos de Riesgo y Anamnesis */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-3">Grupos de Riesgo</h4>
                        <ul className="text-sm text-blue-800 space-y-2 list-disc pl-4">
                            <li><strong>Tercera Edad:</strong> Mayor riesgo renal y gástrico. Evitar AINEs potentes.</li>
                            <li><strong>Embarazadas:</strong> AINEs prohibidos en 3er trimestre. Paracetamol es seguro.</li>
                            <li><strong>Hipertensos:</strong> Evitar antigripales con Pseudoefedrina (sube la presión).</li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-bold text-emerald-900 mb-3">Protocolo de Anamnesis (Qué preguntar)</h4>
                        <ul className="text-sm text-emerald-800 space-y-2">
                            <li><strong>1. ¿Para quién es?</strong> (Niño, adulto, embarazada, abuelo).</li>
                            <li><strong>2. ¿Tiene alguna enfermedad crónica?</strong> (HTA, Diabetes, Gastritis).</li>
                            <li><strong>3. ¿Toma otros medicamentos?</strong> (Para evitar interacciones).</li>
                            <li><strong>4. Síntoma Clave:</strong> "¿La tos es seca o con flema?", "¿Le duele el estómago al comer?".</li>
                        </ul>
                    </div>
                </div>
            </section>

          </div>

          {/* 🔴 COLUMNA DERECHA: SIDEBAR STICKY */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* 1. QUIZ INTERACTIVO */}
              <div className="bg-slate-900 text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative z-10">
                  {!quizActivo && !mostrarResultado && (
                    <>
                        <span className="bg-emerald-500 text-emerald-50 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                            Quiz Express
                        </span>
                        <h3 className="text-3xl font-black mb-4 leading-tight">
                            ¿Listo para el Mesón?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Pon a prueba tus conocimientos sobre los medicamentos más vendidos de la farmacia.
                        </p>
                        <button 
                            onClick={() => setQuizActivo(true)}
                            className="w-full block bg-white text-slate-900 font-black text-center py-4 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            COMENZAR TEST <ArrowRight size={18} />
                        </button>
                    </>
                  )}

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
                    Convierte esta página en un archivo PDF automáticamente para repasar sin internet.
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

              {/* 3. TARJETA DERMOCHECK */}
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
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-0">
                    Verifica vencimientos de dermocosmética mediante código de lote en segundos.
                </p>
              </a>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
