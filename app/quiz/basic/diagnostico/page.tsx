"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  Target,
  TrendingUp, 
  BookOpen, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  LogOut,
  Home,
  Sparkles,
  Award,
  Zap,
  Users,
  Check,
  Info,
  Stethoscope,
  ClipboardCheck
} from "lucide-react";

// Banco de preguntas de diagnóstico (10 preguntas estratégicas)
const diagnosticoQuestions = [
  {
    id: 1,
    question: "¿Cuál es la condición de venta de un medicamento que contiene codeína en dosis superiores a 60mg?",
    options: [
      "Venta Directa",
      "Receta Simple",
      "Receta Retenida",
      "Receta Cheque"
    ],
    correct: 3,
    area: "DS 404 - Estupefacientes",
    explanation: "Según el DS 404, dosis ≥60mg de codeína requieren Receta Cheque."
  },
  {
    id: 2,
    question: "¿Quién debe supervisar obligatoriamente el fraccionamiento de medicamentos en una farmacia?",
    options: [
      "El auxiliar de farmacia",
      "El Químico Farmacéutico (Director Técnico)",
      "El administrador del local",
      "Cualquier empleado capacitado"
    ],
    correct: 1,
    area: "Decreto 466 - Reglamento Farmacias",
    explanation: "El Art. 40 del DS 466 establece que el fraccionamiento debe ser efectuado o supervisado por el QF."
  },
  {
    id: 3,
    question: "Un paciente necesita 500mg de Paracetamol cada 8 horas por 5 días. ¿Cuántos comprimidos de 500mg necesita en total?",
    options: [
      "10 comprimidos",
      "15 comprimidos",
      "20 comprimidos",
      "25 comprimidos"
    ],
    correct: 1,
    area: "Posología y Cálculo de Dosis",
    explanation: "3 dosis/día × 5 días = 15 comprimidos totales."
  },
  {
    id: 4,
    question: "¿Qué documento es OBLIGATORIO para que un auxiliar de farmacia pueda ejercer legalmente?",
    options: [
      "Certificado de antecedentes",
      "Autorización sanitaria de la SEREMI",
      "Carnet de vacunación al día",
      "Título universitario"
    ],
    correct: 1,
    area: "Regulación Profesional",
    explanation: "El Art. 28 del DS 466 exige autorización sanitaria tras aprobar el examen de competencia."
  },
  {
    id: 5,
    question: "¿Cuál de estos medicamentos NO puede fraccionarse según la normativa vigente?",
    options: [
      "Comprimidos de Paracetamol 500mg",
      "Jarabe de Amoxicilina",
      "Estupefacientes y Psicotrópicos",
      "Cápsulas de Omeprazol"
    ],
    correct: 2,
    area: "DS 404/405 - Control Especial",
    explanation: "El Art. 40 del DS 466 prohíbe explícitamente fraccionar estupefacientes y psicotrópicos."
  },
  {
    id: 6,
    question: "Una Receta Cheque tiene validez de:",
    options: [
      "15 días desde su emisión",
      "30 días desde su emisión",
      "60 días desde su emisión",
      "90 días desde su emisión"
    ],
    correct: 1,
    area: "DS 404 - Receta Cheque",
    explanation: "El Art. 26 del DS 404 establece 30 días de validez para recetas cheque y retenidas."
  },
  {
    id: 7,
    question: "¿Cuál es la temperatura correcta para almacenar vacunas e insulinas?",
    options: [
      "0°C a 4°C",
      "2°C a 8°C",
      "8°C a 15°C",
      "15°C a 25°C"
    ],
    correct: 1,
    area: "Cadena de Frío",
    explanation: "La cadena de frío exige mantener entre 2°C y 8°C para preservar la estabilidad."
  },
  {
    id: 8,
    question: "Un medicamento con 'estrella verde' en su envase indica que es:",
    options: [
      "Un estupefaciente",
      "Un psicotrópico",
      "De venta directa",
      "Un medicamento bioequivalente"
    ],
    correct: 1,
    area: "DS 405 - Psicotrópicos",
    explanation: "El Art. 19 del DS 405 exige estrella verde de 5 puntas para psicotrópicos."
  },
  {
    id: 9,
    question: "¿Qué profesional puede prescribir medicamentos de la Lista IV (benzodiacepinas)?",
    options: [
      "Solo médicos cirujanos",
      "Médicos cirujanos y cirujanos dentistas",
      "Cualquier profesional de la salud",
      "Solo especialistas en psiquiatría"
    ],
    correct: 1,
    area: "DS 405 - Prescripción",
    explanation: "El Art. 32 del DS 405 permite a cirujanos dentistas prescribir Lista IV."
  },
  {
    id: 10,
    question: "Si un paciente trae una receta con errores o enmendaduras, el auxiliar debe:",
    options: [
      "Dispensar igual si entiende la receta",
      "Corregir los errores y dispensar",
      "Devolver la receta y NO dispensar",
      "Consultar por teléfono al médico"
    ],
    correct: 2,
    area: "Procedimientos de Dispensación",
    explanation: "El Art. 30 del DS 404 obliga a devolver recetas con defectos, sin dispensar."
  }
];

export default function DiagnosticoPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [timeStarted] = useState(Date.now());

  // Abandono libre hacia el lobby de quizzes
  const handleAbandon = () => {
    if (confirm('¿Estás seguro que deseas salir del diagnóstico? Perderás tu progreso actual.')) {
      router.push('/quiz');
    }
  };

  const handleAnswer = (answerIndex: number) => {
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const newAnswers = [...selectedAnswers, answerIndex];
    setSelectedAnswers(newAnswers);

    if (currentQuestion < diagnosticoQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    const areasFailed: Record<string, number> = {};
    
    diagnosticoQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) {
        correct++;
      } else {
        areasFailed[q.area] = (areasFailed[q.area] || 0) + 1;
      }
    });

    const percentage = Math.round((correct / diagnosticoQuestions.length) * 100);
    const timeSpent = Math.round((Date.now() - timeStarted) / 1000);

    return { correct, percentage, areasFailed, timeSpent };
  };

  if (showResult) {
    const results = calculateResults();
    const failedAreas = Object.entries(results.areasFailed)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    return (
      <main className="min-h-screen bg-slate-50 pb-24 font-sans">
        {/* Header de Resultados */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 text-xs font-bold text-amber-300 mb-6">
              <AlertTriangle size={14} />
              RESULTADO DE TU EVALUACIÓN TÉCNICA SEREMI
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Tu Nivel Actual: <span className="text-[#28a745]">{results.percentage}%</span>
            </h1>
            
            <p className="text-slate-300 text-lg mb-2">
              {results.correct} de {diagnosticoQuestions.length} respuestas correctas
            </p>
            <p className="text-slate-400 text-sm">
              Tiempo invertido: {Math.floor(results.timeSpent / 60)}m {results.timeSpent % 60}s
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 -mt-6">
          
          {/* Diagnóstico de Áreas Débiles */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <XCircle className="text-red-600" size={24} />
              </div>
              <h2 className="font-black text-[#003366] text-xl">Áreas Críticas Detectadas</h2>
            </div>
            
            {failedAreas.length > 0 ? (
              <div className="space-y-3">
                {failedAreas.map(([area, count]) => (
                  <div key={area} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="text-red-600" size={18} />
                      <span className="font-semibold text-slate-800 text-sm">{area}</span>
                    </div>
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {count} error{count > 1 ? 'es' : ''}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#28a745] font-semibold text-center py-4">
                ¡Excelente base teórica! No detectamos áreas críticas inmediatas 🎉
              </p>
            )}
          </div>

          {/* Veredicto Motivador */}
          <div className={`rounded-2xl p-6 mb-8 ${
            results.percentage >= 70 
              ? 'bg-gradient-to-br from-[#28a745] to-[#218838] text-white'
              : results.percentage >= 50
              ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white'
              : 'bg-gradient-to-br from-red-600 to-red-700 text-white'
          }`}>
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-xl shrink-0">
                {results.percentage >= 70 ? (
                  <CheckCircle2 size={32} />
                ) : results.percentage >= 50 ? (
                  <AlertTriangle size={32} />
                ) : (
                  <XCircle size={32} />
                )}
              </div>
              <div>
                <h3 className="font-black text-2xl mb-2">
                  {results.percentage >= 70 
                    ? "¡Estás a un paso de tu Certificación!"
                    : results.percentage >= 50
                    ? "Tienes potencial, pero necesitas precisión"
                    : "Diagnóstico urgente: ¡Estás a tiempo de corregir!"}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {results.percentage >= 70 
                    ? "Tienes muy buen instinto técnico. Ahora solo necesitas entrenar con las trampa-preguntas reales de la fiscalización SEREMI para asegurar tu aprobación en el primer intento."
                    : results.percentage >= 50
                    ? "Conoces la base del mesón, pero la normativa de los Decretos 466, 404 y 405 es estricta. Entrenando con la metodología correcta eliminarás estas dudas en pocos días."
                    : "No te preocupes: identificar tus vacíos hoy es tu mayor ventaja. La prueba real exige memorizar articulados específicos y aquí te enseñaremos a dominar cada uno sin rodeos."}
                </p>
              </div>
            </div>
          </div>

          {/* 🎯 COMPARATIVA Y ORIENTACIÓN INTELIGENTE DE COMPRA */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-[#28a745] shadow-xl mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#28a745] text-white text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl tracking-wider">
              RECOMENDACIÓN DE ESTUDIO
            </div>

            <div className="text-center mb-6">
              <span className="text-xs font-black text-[#28a745] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Tu Siguiente Paso Inteligente
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                ¿Por qué los alumnos eligen el <span className="text-[#28a745]">Plan Mensual PRO ($5.990)</span>?
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-1">
                Prepárate para tu Examen de Competencia Sanitaria SEREMI con nuestro entrenamiento técnico
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Opción 15 Días */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-slate-700 text-sm">Pase 15 Días</span>
                    <span className="font-black text-slate-900">$3.990</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    Diseñado solo para un repaso express de última hora.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 font-medium mb-4">
                    <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> Campus PRO (4 Módulos)</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-emerald-500" /> 1 Examen Global SEREMI</li>
                    <li className="flex items-center gap-2 text-slate-400 line-through">✗ Sin Certificado de Participación</li>
                    <li className="flex items-center gap-2 text-slate-400 line-through">✗ Sin 2° Ensayo de Refuerzo</li>
                  </ul>
                </div>
                <Link
                  href="/planes"
                  className="block text-center w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Elegir 15 Días
                </Link>
              </div>

              {/* Opción Mensual PRO 30 Días - Destacada */}
              <div className="bg-gradient-to-b from-emerald-50/50 to-white p-5 rounded-2xl border-2 border-[#28a745] flex flex-col justify-between shadow-sm relative">
                <div className="absolute -top-3 right-4 bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                  MÁS VENDIDO ⭐
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-black text-[#003366] text-sm">Mensual PRO (30 días)</span>
                    <span className="font-black text-[#28a745] text-lg">$5.990</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    Por solo <strong className="text-[#28a745]">$2.000 más</strong> aseguras preparación completa y doble evaluación.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 font-bold mb-4">
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#28a745]" /> Campus PRO completo (4 Módulos)</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#28a745]" /> <strong>2 Exámenes Globales TIPO SEREMI</strong></li>
                    <li className="flex items-center gap-2"><Award size={14} className="text-amber-500" /> <strong>Certificado AuxiliarPro (QR)</strong></li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#28a745]" /> Doble tiempo de estudio (30 días)</li>
                  </ul>
                </div>
                <Link
                  href="/planes"
                  className="block text-center w-full bg-[#28a745] hover:bg-[#218838] text-white font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.02]"
                >
                  Activar Plan Mensual PRO →
                </Link>
              </div>
            </div>

            <p className="text-center text-[11px] text-slate-400 font-medium">
              🔒 Pago único sin cargos recurrentes · Desbloqueo inmediato de tus áreas débiles en el Campus PRO.
            </p>
          </div>

          {/* ℹ️ AVISO DE TRANSPARENCIA REGLAMENTARIA SANITARIA EN RESULTADOS */}
          <div className="bg-slate-100/80 border border-slate-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
            <Info size={18} className="text-[#003366] shrink-0 mt-0.5" />
            <div className="text-slate-600 text-xs leading-relaxed">
              <strong className="text-slate-800">Entrenamiento teórico independiente:</strong> Esta es una plataforma autónoma diseñada para preparar tu evaluación. Considera que la Autorización Sanitaria oficial la emite únicamente la SEREMI de Salud al rendir y aprobar el Examen de Competencia, previa acreditación de 1 año de trabajo en farmacia (asistente, bodeguero o sala).
            </div>
          </div>

          {/* Opciones de navegación pública */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-600 hover:border-[#003366] hover:text-[#003366] px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <ChevronLeft size={16} />
              Volver al Lobby
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-500 hover:bg-slate-200 px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <Home size={16} />
              Inicio
            </Link>
          </div>

        </div>
      </main>
    );
  }

  // Vista de pregunta actual
  const question = diagnosticoQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / diagnosticoQuestions.length) * 100;

  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans">
      
      {/* 🚀 ENCABEZADO PRINCIPAL SEO + PRESENTACIÓN DE LA PRUEBA DE DIAGNÓSTICO */}
      <header className="bg-gradient-to-b from-[#003366] to-[#002244] text-white pt-10 pb-8 px-6 border-b border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#28a745]/20 border border-[#28a745]/40 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <ClipboardCheck size={15} />
            Evaluación Gratuita de Competencias
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            Prueba de Diagnóstico: <span className="text-[#28a745]">Auxiliar de Farmacia SEREMI</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Mide tus conocimientos teóricos en normativa sanitaria (<strong>Decretos 466, 404 y 405</strong>), almacenamiento, dispensación y posología. Descubre exactamente qué áreas debes reforzar para asegurar tu <strong>Autorización Sanitaria Oficial</strong> en el primer intento.
          </p>
        </div>
      </header>

      {/* Header con progreso y botón de salida */}
      <div className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-slate-600">
              Pregunta {currentQuestion + 1} de {diagnosticoQuestions.length}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#003366] bg-blue-50 px-3 py-1 rounded-full">
                {question.area}
              </span>
              <button
                onClick={handleAbandon}
                className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-all border border-red-200 hover:border-red-300 cursor-pointer"
                title="Salir del diagnóstico"
              >
                <LogOut size={14} />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#003366] to-[#28a745] h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Contenido de la pregunta */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div key={question.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#003366] leading-tight mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="w-full text-left p-4 bg-slate-50 hover:bg-[#28a745]/10 border-2 border-slate-200 hover:border-[#28a745] rounded-xl transition-all group focus:outline-none focus:ring-2 focus:ring-[#28a745] cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-300 group-hover:border-[#28a745] flex items-center justify-center font-bold text-sm text-slate-600 group-hover:text-[#28a745] shrink-0 transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-slate-700 group-hover:text-[#003366] font-medium leading-relaxed">
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Indicador de área */}
        <div className="text-center mb-10">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            Evaluando normativa: {question.area}
          </p>
        </div>

        {/* 🚀 BANNER DE COMUNIDAD Y METODOLOGÍA */}
        <div className="bg-gradient-to-br from-[#003366] via-[#002244] to-[#0f172a] text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#28a745]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#28a745]/20 border border-[#28a745]/30 text-emerald-300 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              PREPARACIÓN MODERNA Y ENFOCADA
            </div>

            <h3 className="text-xl md:text-2xl font-black mb-3 leading-tight tracking-tight">
              Tu camino más directo hacia la <span className="text-[#28a745]">Certificación SEREMI</span>
            </h3>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
              Diseñamos <strong>AuxiliarPro</strong> pensando en las necesidades reales del mesón de farmacia. Sabemos que tu tiempo es valioso, por eso transformamos la legislación de los <strong>Decretos 466, 404 y 405</strong> en una experiencia de práctica ágil, clara y directa. Ejercita a tu propio ritmo con casos reales de fiscalización MINSAL y fortalece tu preparación para aprobar con tranquilidad a la primera.
            </p>

            {/* 🎯 BOTÓN DESTACADO A PLANES */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-amber-300 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Award size={14} /> ¡Prepárate para rendir tu examen!
                </p>
                <p className="text-white text-xs md:text-sm font-medium">
                  Asegura tu preparación técnica con acceso completo al Campus PRO desde $3.990.
                </p>
              </div>
              <Link
                href="/planes"
                className="inline-flex items-center justify-center gap-2 bg-[#28a745] hover:bg-[#218838] text-white font-black px-6 py-3 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-lg hover:scale-105 shrink-0 w-full sm:w-auto text-center"
              >
                Ver Planes de Estudio <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Users size={16} className="text-[#28a745] shrink-0" />
                <span>+1.720 Alumnos</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Zap size={16} className="text-amber-400 shrink-0" />
                <span>Práctica Interactiva 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span>Normativa MINSAL Actualizada</span>
              </div>
            </div>

            {/* ℹ️ NOTA ACLARATORIA DENTRO DEL BANNER INFERIOR */}
            <div className="pt-3 border-t border-slate-800/50 flex items-start gap-2 text-[11px] text-slate-400 leading-normal">
              <Info size={14} className="text-emerald-400 shrink-0 mt-0.5" />
              <p>
                <strong>Entrenamiento teórico independiente:</strong> Esta es una plataforma autónoma diseñada para preparar tu evaluación. Considera que la Autorización Sanitaria oficial la emite únicamente la SEREMI de Salud al rendir y aprobar el Examen de Competencia, previa acreditación de 1 año de trabajo en farmacia (asistente, bodeguero o sala).
              </p>
            </div>

          </div>
        </div>

      </div>

    </main>
  );
}