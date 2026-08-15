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
  ShieldCheck
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

  const handleAnswer = (answerIndex: number) => {
    // 🩺 CTO FIX: liberar el foco del botón clickeado para que la siguiente
    // pregunta no herede el anillo verde de :focus (falso "seleccionado").
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
              RESULTADO DEL DIAGNÓSTICO
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Tu Nivel: <span className="text-[#28a745]">{results.percentage}%</span>
            </h1>
            
            <p className="text-slate-300 text-lg mb-2">
              {results.correct} de {diagnosticoQuestions.length} respuestas correctas
            </p>
            <p className="text-slate-400 text-sm">
              Tiempo: {Math.floor(results.timeSpent / 60)}m {results.timeSpent % 60}s
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
                ¡Excelente! No detectamos áreas críticas 🎉
              </p>
            )}
          </div>

          {/* Veredicto */}
          <div className={`rounded-2xl p-6 mb-6 ${
            results.percentage >= 70 
              ? 'bg-gradient-to-br from-[#28a745] to-[#218838] text-white'
              : results.percentage >= 50
              ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white'
              : 'bg-gradient-to-br from-red-600 to-red-700 text-white'
          }`}>
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-xl">
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
                    ? "Vas por buen camino"
                    : results.percentage >= 50
                    ? "Necesitas reforzar"
                    : "Riesgo de reprobar"}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {results.percentage >= 70 
                    ? "Tienes una base sólida, pero el examen SEREMI exige dominio total. El Campus PRO te dará la práctica avanzada que necesitas."
                    : results.percentage >= 50
                    ? "Estás en el límite. Sin entrenamiento intensivo, es probable que no apruebes. El Campus PRO cubre exactamente estas áreas débiles."
                    : "Con este nivel, reprobarías el examen SEREMI. Necesitas el entrenamiento completo del Campus PRO para aprobar."}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Principal - Campus PRO */}
          <div className="bg-gradient-to-br from-[#003366] to-[#004a99] rounded-2xl p-8 text-white mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#28a745]/10 rounded-full -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#28a745] p-2 rounded-lg">
                  <Target size={24} />
                </div>
                <h3 className="font-black text-2xl">Tu Plan de Acción</h3>
              </div>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                Desbloquea el <strong className="text-[#28a745]">Campus PRO</strong> y accede a:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#28a745] shrink-0 mt-0.5" size={20} />
                  <span><strong>500+ preguntas SEREMI 2026</strong> con explicaciones detalladas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#28a745] shrink-0 mt-0.5" size={20} />
                  <span><strong>Módulos específicos</strong> para tus áreas débiles detectadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#28a745] shrink-0 mt-0.5" size={20} />
                  <span><strong>Simulador Final</strong> con formato idéntico al examen oficial</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#28a745] shrink-0 mt-0.5" size={20} />
                  <span><strong>Guías descargables</strong> en PDF para estudio offline</span>
                </li>
              </ul>

              <Link 
                href="/planes"
                className="block w-full bg-[#28a745] hover:bg-[#218838] text-white font-black py-4 rounded-xl transition-colors text-center shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
              >
                DESBLOQUEAR CAMPUS PRO →
              </Link>
              
              <p className="text-center text-xs text-blue-200 mt-3 flex items-center justify-center gap-2">
                <ShieldCheck size={14} aria-hidden="true" />
                Acceso inmediato · Planes de 15, 30 y 365 días · Sin renovación automática
              </p>
            </div>
          </div>

          {/* Opción secundaria */}
          <div className="text-center">
            <Link 
              href="/quiz"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-[#003366] text-sm font-semibold transition-colors"
            >
              <ChevronLeft size={16} />
              Volver al menú de simuladores
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
      
      {/* Header con progreso */}
      <div className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-slate-600">
              Pregunta {currentQuestion + 1} de {diagnosticoQuestions.length}
            </span>
            <span className="text-xs font-semibold text-[#003366] bg-blue-50 px-3 py-1 rounded-full">
              {question.area}
            </span>
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
        {/* 🩺 CTO FIX: key={question.id} fuerza remount de la tarjeta en cada
            pregunta → ningún botón hereda foco/hover de la pregunta anterior. */}
        <div key={question.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 mb-6">
          <h2 className="text-xl md:text-2xl font-black text-[#003366] leading-tight mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="w-full text-left p-4 bg-slate-50 hover:bg-[#28a745]/10 border-2 border-slate-200 hover:border-[#28a745] rounded-xl transition-all group focus:outline-none focus:ring-2 focus:ring-[#28a745]"
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
        <div className="text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            Evaluando: {question.area}
          </p>
        </div>
      </div>

    </main>
  );
}