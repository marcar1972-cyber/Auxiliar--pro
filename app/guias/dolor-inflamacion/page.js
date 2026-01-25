'use client';

import { useState } from 'react';
import Link from "next/link";
import Script from "next/script"; 
import { BookOpen, AlertTriangle, Download, ArrowRight, Pill, Flame, Activity, ShieldAlert, Stethoscope, Zap, HeartPulse, XCircle, Clock, CheckCircle, GraduationCap, FileText, Trophy, UserCheck, Syringe, AlertOctagon } from "lucide-react";

// 📝 PREGUNTAS DEL QUIZ (Específicas de AINEs y Analgésicos)
const preguntasQuiz = [
  {
    pregunta: "¿Cuál es la principal diferencia farmacológica entre el Paracetamol y el Ibuprofeno?",
    opciones: [
      "El Paracetamol es más fuerte.",
      "El Ibuprofeno es un AINE (desinflama) y el Paracetamol no.",
      "El Paracetamol daña el estómago y el Ibuprofeno no.",
      "No tienen diferencia, son iguales."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué órgano es el más afectado por una sobredosis de Paracetamol?",
    opciones: [
      "El Estómago (Gastritis).",
      "Los Riñones (Insuficiencia Renal).",
      "El Hígado (Hepatotoxicidad).",
      "El Corazón (Arritmia)."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el tiempo máximo recomendado para el uso continuo de Ketorolaco?",
    opciones: [
      "5 días.",
      "1 mes.",
      "14 días.",
      "Solo 1 día."
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué medicamento es preferible para un paciente con úlcera gástrica que tiene dolor?",
    opciones: [
      "Ketorolaco.",
      "Diclofenaco.",
      "Paracetamol (preferentemente).",
      "Aspirina."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué efecto adverso es común en todos los AINEs (Ibuprofeno, Naproxeno, Diclofenaco)?",
    opciones: [
      "Sueño excesivo.",
      "Irritación gástrica y riesgo renal.",
      "Aumento del apetito.",
      "Caída del cabello."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Para qué tipo de dolor es ideal el Diclofenaco?",
    opciones: [
      "Dolor de cabeza leve.",
      "Fiebre en niños.",
      "Dolor muscular, articular o lumbago.",
      "Picaduras de insectos."
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué significa que un medicamento sea Antipirético?",
    opciones: [
      "Que quita el dolor.",
      "Que baja la fiebre.",
      "Que desinflama.",
      "Que quita las náuseas."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál de estos NO se recomienda para una embarazada (especialmente en el 3er trimestre)?",
    opciones: [
      "Paracetamol.",
      "Ibuprofeno.",
      "Ácido Fólico.",
      "Vitaminas."
    ],
    correcta: 1
  },
  {
    pregunta: "Si llega un paciente con dolor de muelas muy fuerte, ¿cuál es la recomendación más potente (si no es alérgico)?",
    opciones: [
      "Paracetamol 500mg.",
      "Ketorolaco (Sublingual u Oral).",
      "Aspirina.",
      "Crema de Diclofenaco."
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué grupo de pacientes debe tener especial cuidado con los AINEs por riesgo renal?",
    opciones: [
      "Los niños.",
      "Los deportistas.",
      "Los Adultos Mayores.",
      "Las mujeres jóvenes."
    ],
    correcta: 2
  }
];

export default function GuiaDolorInflamacion() {
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
        filename:     'Guia-Dolor-e-Inflamacion-AuxiliarPro.pdf',
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
            Módulo de Alta Rotación
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight text-balance">
            Dolor e Inflamación (AINEs y Analgésicos)
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl">
            Aquí está el 80% de tu venta diaria. Aprende a diferenciar Paracetamol, Ibuprofeno, Ketorolaco y Diclofenaco para recomendar con seguridad y evitar errores graves.
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

            {/* 1. INTRODUCCIÓN Y CLASIFICACIÓN */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Pill className="text-emerald-600" /> 1. El Arsenal contra el Dolor
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                    En el mesón de farmacia, el motivo de consulta número uno es el dolor. Pero no todos los dolores son iguales y no todas las pastillas sirven para todo.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Debemos dividir los medicamentos de venta libre (OTC) y receta simple en dos grandes grupos: los que solo quitan dolor/fiebre y los que además desinflaman.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <strong className="text-blue-900 text-lg block mb-2">Analgésicos Puros</strong>
                        <ul className="list-disc pl-4 text-sm text-blue-800 space-y-2">
                            <li><strong>Función:</strong> Quitan dolor (Analgesia) y bajan fiebre (Antipiréticos).</li>
                            <li><strong>Limitación:</strong> NO tienen efecto antiinflamatorio significativo.</li>
                            <li><strong>El Rey:</strong> Paracetamol.</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
                        <strong className="text-orange-900 text-lg block mb-2">AINEs (Antiinflamatorios)</strong>
                        <ul className="list-disc pl-4 text-sm text-orange-800 space-y-2">
                            <li><strong>Sigla:</strong> Anti-Inflamatorios No Esteroidales.</li>
                            <li><strong>Tríada de Acción:</strong> Analgésico (Dolor) + Antipirético (Fiebre) + Antiinflamatorio (Hinchazón).</li>
                            <li><strong>Ejemplos:</strong> Ibuprofeno, Ketorolaco, Diclofenaco, Naproxeno.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. PERFILES DETALLADOS */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Activity className="text-purple-600" /> 2. Los 4 Gigantes del Mesón
                </h2>
                <p className="text-slate-600 mb-6">Estos son los medicamentos que debes dominar a la perfección.</p>

                {/* PARACETAMOL */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full uppercase">Seguridad</span>
                        1. Paracetamol (Acetaminofén)
                    </h3>
                    <p className="text-slate-600 mb-4">Es el medicamento más vendido y seguro si se usa bien. Es la primera elección para niños, embarazadas y dolor leve.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <span className="font-bold text-slate-700 block">✅ Ideal para:</span>
                            Fiebre, dolor de cabeza, dolor leve, pacientes con gastritis (no daña el estómago).
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                            <span className="font-bold text-red-700 block">❌ Peligro:</span>
                            <strong>Hepatotoxicidad.</strong> En dosis altas destruye el hígado. Nunca mezclar con alcohol. Dosis máxima diaria adultos: 4 gramos (8 comprimidos de 500mg), aunque se recomienda no pasar de 3g.
                        </div>
                    </div>
                </div>

                {/* IBUPROFENO */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase">Versátil</span>
                        2. Ibuprofeno
                    </h3>
                    <p className="text-slate-600 mb-4">El "todoterreno". Es excelente para dolores que conllevan inflamación.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <span className="font-bold text-slate-700 block">✅ Ideal para:</span>
                            Dolor de garganta (inflamación), dolor menstrual, golpes leves, dolor dental moderado.
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                            <span className="font-bold text-orange-700 block">⚠️ Cuidado:</span>
                            Es <strong>Gastrolesivo</strong> (irrita el estómago). Siempre tomar con comida. Evitar en hipertensos descompensados (puede subir la presión).
                        </div>
                    </div>
                </div>

                {/* KETOROLACO */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full uppercase">Potencia</span>
                        3. Ketorolaco
                    </h3>
                    <p className="text-slate-600 mb-4">El analgésico no opioide más potente. Se usa para dolor agudo e intenso.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <span className="font-bold text-slate-700 block">✅ Ideal para:</span>
                            Dolor de muelas severo, dolor post-operatorio, cólicos renales, migrañas fuertes.
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                            <span className="font-bold text-red-700 block">❌ ALERTA ROJA:</span>
                            Es muy agresivo con el riñón y estómago. <strong>¡Máximo 5 días de tratamiento!</strong> El uso prolongado causa insuficiencia renal y úlceras sangrantes. No usar en adultos mayores.
                        </div>
                    </div>
                </div>

                {/* DICLOFENACO */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full uppercase">Muscular</span>
                        4. Diclofenaco (Sódico y Potásico)
                    </h3>
                    <p className="text-slate-600 mb-4">Potente antiinflamatorio, con preferencia por tejidos blandos y articulaciones.</p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-50 p-3 rounded-lg">
                            <span className="font-bold text-slate-700 block">✅ Ideal para:</span>
                            Lumbago, esguinces, dolor de rodilla/articulaciones, tendinitis.
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                            <span className="font-bold text-orange-700 block">⚠️ Cuidado:</span>
                            Alto riesgo cardiovascular en uso crónico. Irrita bastante el estómago.
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SEMÁFORO TERAPÉUTICO */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <Stethoscope className="text-teal-600" /> 3. Guía Rápida de Selección
                </h2>
                <p className="text-slate-600 mb-6">Cuando el paciente pregunta "¿Qué me sirve para...?", esta es tu guía mental:</p>

                <div className="space-y-4">
                    {/* DOLOR DE MUELAS */}
                    <div className="flex items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="bg-red-100 text-red-700 p-3 rounded-full mr-4">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Dolor de Muelas (Dental)</h4>
                            <p className="text-sm text-slate-600">Requiere potencia y antiinflamación.</p>
                            <div className="mt-2 text-sm font-medium text-emerald-700">
                                1° Opción: Ketorolaco (Sublingual para rapidez) o Ibuprofeno 600mg.
                            </div>
                        </div>
                    </div>

                    {/* FIEBRE */}
                    <div className="flex items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="bg-orange-100 text-orange-700 p-3 rounded-full mr-4">
                            <Flame size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Fiebre</h4>
                            <p className="text-sm text-slate-600">Buscamos seguridad y efecto antipirético.</p>
                            <div className="mt-2 text-sm font-medium text-emerald-700">
                                1° Opción: Paracetamol (Primera línea). <br/>
                                2° Opción: Ibuprofeno (Si la fiebre es rebelde o hay inflamación asociada).
                            </div>
                        </div>
                    </div>

                    {/* DOLOR MUSCULAR */}
                    <div className="flex items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                            <Activity size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Dolor Muscular / Lumbago</h4>
                            <p className="text-sm text-slate-600">Necesita llegar al tejido inflamado.</p>
                            <div className="mt-2 text-sm font-medium text-emerald-700">
                                1° Opción: Diclofenaco o Naproxeno. <br/>
                                <em>Tip: Combinar con calor local.</em>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ADVERTENCIAS DE SEGURIDAD */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <ShieldAlert className="text-red-600" /> 4. Peligros Gástricos y Renales
                </h2>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-slate-700 leading-relaxed">
                    <p className="mb-4">
                        Los AINEs (Ibuprofeno, Ketorolaco, Diclofenaco) funcionan bloqueando unas sustancias llamadas <strong>Prostaglandinas</strong>.
                    </p>
                    <p className="mb-4">
                        El problema es que las prostaglandinas tienen dos funciones:
                        <br/>1. Producir dolor e inflamación (lo que queremos bloquear).
                        <br/>2. <strong>Proteger la pared del estómago</strong> del propio ácido gástrico y asegurar el flujo de sangre al riñón.
                    </p>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl mt-6">
                        <strong className="text-red-900 block mb-1">El Efecto Adverso:</strong>
                        <p className="text-red-800 text-sm">
                            Al tomar AINEs, bloqueamos la protección del estómago. Por eso, el uso prolongado causa <strong>Gastritis</strong> y Úlceras. Además, reducen el riego sanguíneo al riñón, pudiendo causar <strong>Falla Renal</strong>, especialmente en ancianos o hipertensos.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. SEGURIDAD CLÍNICA Y PROTOCOLO DE VENTA (NUEVO) */}
            <section className="break-inside-avoid">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <UserCheck className="text-blue-600" /> 5. Seguridad Clínica y Protocolo
                </h2>
                <p className="text-slate-600 mb-6">
                    Esto diferencia a un experto de un vendedor. Antes de recomendar, siempre verifica estos puntos:
                </p>

                {/* Contraindicaciones */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <AlertOctagon className="text-red-500" size={20} /> Contraindicaciones Absolutas
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2">
                            <XCircle className="text-red-500 shrink-0" size={16} />
                            <span><strong>Alergia a la Aspirina (AAS):</strong> Si el paciente es alérgico a la aspirina, existe una alta probabilidad de reacción cruzada con otros AINEs (Ibuprofeno, Naproxeno).</span>
                        </li>
                        <li className="flex gap-2">
                            <XCircle className="text-red-500 shrink-0" size={16} />
                            <span><strong>Úlcera Gástrica Activa:</strong> Nunca vender AINEs. Preferir Paracetamol o consultar al médico.</span>
                        </li>
                        <li className="flex gap-2">
                            <XCircle className="text-red-500 shrink-0" size={16} />
                            <span><strong>Insuficiencia Renal Grave:</strong> Los AINEs pueden empeorar la función renal hasta la diálisis.</span>
                        </li>
                    </ul>
                </div>

                {/* Grupos de Riesgo */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <Syringe className="text-blue-600" size={18} /> Grupos de Riesgo
                        </h4>
                        <ul className="text-sm text-blue-800 space-y-2 list-disc pl-4">
                            <li><strong>Tercera Edad:</strong> Mayor riesgo de sangrado gástrico y falla renal.</li>
                            <li><strong>Embarazadas:</strong> Evitar AINEs, especialmente en el 3er trimestre (cierre del ductus arterioso). <strong>Paracetamol</strong> es la opción segura.</li>
                            <li><strong>Lactancia:</strong> Paracetamol e Ibuprofeno suelen ser compatibles (verificar e-lactancia.org).</li>
                        </ul>
                    </div>

                    <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                        <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="text-emerald-600" size={18} /> Protocolo de Anamnesis
                        </h4>
                        <p className="text-sm text-emerald-800 mb-2">Preguntas clave en el mesón:</p>
                        <ul className="text-sm text-emerald-800 space-y-2">
                            <li>
                                <strong>¿Es Hipertenso?</strong>
                                <br/><span className="text-xs opacity-80">Ojo con los efervescentes (tienen mucho sodio/sal) y AINEs (suben la presión).</span>
                            </li>
                            <li>
                                <strong>¿Es Diabético?</strong>
                                <br/><span className="text-xs opacity-80">Cuidado con los jarabes con azúcar. La neuropatía puede enmascarar dolores graves.</span>
                            </li>
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
                            ¿Sabes recomendar analgésicos?
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Demuestra que conoces las diferencias entre AINEs, sus usos correctos y sus riesgos fatales.
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

              {/* 3. TARJETA DERMOCHECK (NUEVA) */}
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
