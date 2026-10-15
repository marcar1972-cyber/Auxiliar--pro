'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, Download, CheckCircle2, AlertTriangle, 
  ChevronRight, ChevronLeft, Building2, 
  Calendar, UserCheck, ShieldCheck, Sparkles,
  GraduationCap, ExternalLink
} from 'lucide-react';

// Importación usando ruta relativa para app/components/PlanesSuscripcion.js
import PlanesSuscripcion from '../components/PlanesSuscripcion';

export default function FormularioPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const activitiesList = [
    {
      titulo: "1. Bodegaje y Reposición",
      desc: "Recepción de productos farmacéuticos y almacenamiento ordenado en estanterías, asegurando el orden y limpieza (asepsia) del lugar de trabajo."
    },
    {
      titulo: "2. Control de Vencimientos y Reposición",
      desc: "Revisión periódica de fechas de vencimiento (control de stock), retiro de mermas y reposición de productos en las áreas de dispensación."
    },
    {
      titulo: "3. Dispensación Asistida de Medicamentos",
      desc: "Lectura e interpretación de recetas médicas simples y dispensación de medicamentos de venta directa, informando al paciente sobre su uso adecuado."
    },
    {
      titulo: "4. Cadena de Frío y Temperatura",
      desc: "Control y registro diario de las temperaturas ambientales y del refrigerador para asegurar la conservación adecuada de los medicamentos."
    },
    {
      titulo: "5. Colaboración Administrativa",
      desc: "Registro del movimiento diario de fármacos e insumos, y colaboración en la toma de inventarios físicos."
    }
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 text-[#003366]">
              <div className="p-3 bg-blue-50 rounded-xl text-[#003366]">
                <Building2 size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#28a745] tracking-widest block">Paso 1 de 5</span>
                <h2 className="text-xl font-black text-[#003366]">Membrete y Datos del Establecimiento</h2>
              </div>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              El certificado debe emitirse formalmente por la Farmacia donde realizaste tus funciones o práctica supervisada.
            </p>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-[#003366] text-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#28a745]" /> Datos indispensables en el encabezado:
              </h3>
              <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5 font-medium">
                <li><strong>Razón Social y Nombre Fantasía:</strong> Nombre completo del establecimiento (Ej: <em>Farmacia Cruz del Sur - Sucursal Providencia</em>).</li>
                <li><strong>Dirección exacta y Comuna:</strong> Coincidente con la resolución de autorización sanitaria de la farmacia.</li>
                <li><strong>Teléfono o Email de contacto:</strong> La SEREMI realiza fiscalizaciones para verificar la autenticidad del documento.</li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-xs text-amber-900 font-medium">
                💡 <strong>Tip SEREMI:</strong> Si la farmacia cuenta con hoja membretada oficial o logo impreso, es preferible imprimir el certificado directamente sobre este papel.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 text-[#003366]">
              <div className="p-3 bg-blue-50 rounded-xl text-[#003366]">
                <Calendar size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#28a745] tracking-widest block">Paso 2 de 5</span>
                <h2 className="text-xl font-black text-[#003366]">Periodo de Desempeño Laboral</h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              La SEREMI exige acreditar la experiencia laboral continua o práctica en el establecimiento.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[10px] font-black text-[#28a745] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2 uppercase">Requisito de Tiempo</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Para el examen directo de idoneidad, se debe acreditar el periodo mínimo de un año exigido por el Reglamento de Farmacias (DS 466/1984).
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-[10px] font-black text-[#003366] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-2 uppercase">Redacción de Fechas</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Indicar la <strong>Fecha de Inicio</strong> y <strong>Fecha de Término</strong> exacta (o colocar <em>"a la actual fecha"</em> si aún trabajas allí).
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-red-900 flex items-center gap-2 mb-1">
                <AlertTriangle size={16} className="text-red-600" /> Criterio de rechazo SEREMI:
              </h4>
              <p className="text-xs text-red-800">
                Las fechas declaradas en el Certificado de Idoneidad <strong>deben coincidir de forma exacta con tu Contrato de Trabajo</strong> o Finiquito que adjuntarás a la plataforma.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 text-[#003366]">
              <div className="p-3 bg-blue-50 rounded-xl text-[#003366]">
                <Sparkles size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#28a745] tracking-widest block">Paso 3 de 5</span>
                <h2 className="text-xl font-black text-[#003366]">Actividades de Apoyo (Art. 28, DS 466)</h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              El certificado no puede limitarse a decir "cumplió funciones". La fiscalización exige detallar las tareas de apoyo técnico realizadas:
            </p>

            <div className="space-y-3">
              {activitiesList.map((act, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex gap-3 items-start">
                  <CheckCircle2 size={18} className="text-[#28a745] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#003366]">{act.titulo}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-3 text-[#003366]">
              <div className="p-3 bg-blue-50 rounded-xl text-[#003366]">
                <UserCheck size={28} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-[#28a745] tracking-widest block">Paso 4 de 5</span>
                <h2 className="text-xl font-black text-[#003366]">Firma del Director Técnico (QF)</h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              El único profesional facultado por ley para respaldar tu idoneidad práctica es el <strong>Químico Farmacéutico Director Técnico</strong> del establecimiento.
            </p>

            <div className="bg-[#002244] text-white p-6 rounded-2xl space-y-3 shadow-md">
              <h3 className="font-bold text-[#28a745] text-sm flex items-center gap-2">
                <ShieldCheck size={18} /> Requisitos para la Firma e Identificación:
              </h3>
              <ul className="text-xs text-blue-100 space-y-2 list-disc pl-5">
                <li>Nombre completo del Químico Farmacéutico y Cédula de Identidad (RUT).</li>
                <li>Título profesional acreditado (Ej: <em>Químico Farmacéutico - Director Técnico</em>).</li>
                <li>Firma manuscrita del profesional.</li>
                <li><strong>Timbre de la Farmacia o del QF:</strong> Requisito obligatorio para validación de la SEREMI.</li>
              </ul>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-emerald-50 text-[#28a745] border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <FileText size={32} />
            </div>

            <div>
              <span className="text-[10px] font-black uppercase text-[#28a745] tracking-widest block">Paso 5 de 5</span>
              <h2 className="text-2xl font-black text-[#003366]">¡Instrucciones Completadas!</h2>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Ya conoces la estructura y los requisitos legales. Descarga la plantilla oficial en formato PDF e ingresa a los portales oficiales para obtener tus certificados complementarios.
              </p>
            </div>

            {/* DESCARGA PLANTILLA OFICIAL */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl max-w-lg mx-auto space-y-4 shadow-sm">
              <h3 className="font-bold text-[#003366] text-sm">Descarga de Material Oficial</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/templates/certificado-oficial.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#28a745] hover:bg-[#218838] text-white font-black text-sm rounded-xl transition-all shadow-md uppercase tracking-wider"
                >
                  <Download size={18} /> Descargar Plantilla Oficial (PDF)
                </a>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Imprime este archivo, complétalo con tu Químico Farmacéutico y solicítale su firma y timbre oficial.
              </p>
            </div>

            {/* ENLACES COMPLEMENTARIOS MINEDUC Y CLAVEÚNICA */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl max-w-lg mx-auto space-y-3 text-left shadow-sm">
              <h3 className="font-bold text-[#003366] text-xs uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={18} className="text-[#003366]" /> Trámites Complementarios SEREMI en Línea:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href="https://certificados.mineduc.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-bold text-[#003366] hover:bg-blue-50/50 transition-all shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-blue-600" /> Certificado MINEDUC
                  </span>
                  <ExternalLink size={14} className="text-slate-400" />
                </a>

                <a
                  href="https://claveunica.gob.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-white border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-bold text-[#003366] hover:bg-blue-50/50 transition-all shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-emerald-600" /> Obtener ClaveÚnica
                  </span>
                  <ExternalLink size={14} className="text-slate-400" />
                </a>
              </div>

              <p className="text-[11px] text-slate-500 font-medium pt-1">
                Recuerda que la SEREMI exige adjuntar tu Certificado de Licencia de Enseñanza Media descargado desde MINEDUC mediante tu ClaveÚnica.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <span className="inline-block bg-blue-100 text-[#003366] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
          Guía Paso a Paso · Trámite SEREMI
        </span>
        <h1 className="text-3xl md:text-4xl font-black text-[#003366] tracking-tight">
          Cómo Preparar tu Certificado de Idoneidad
        </h1>
        <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
          Conoce los requisitos legales exigidos por la SEREMI de Salud según el Decreto Supremo 466/1984 y descarga la plantilla oficial.
        </p>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-8 max-w-3xl mx-auto mb-16">
        {/* BARRA DE NAVEGACIÓN SUPERIOR INTEGRADA */}
        <div className="flex items-center justify-between gap-2 mb-8 bg-slate-50 p-3 rounded-2xl border border-slate-100">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs uppercase transition-all ${
              currentStep === 1
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200 shadow-sm cursor-pointer'
            }`}
          >
            <ChevronLeft size={16} /> <span className="hidden sm:inline">Anterior</span>
          </button>

          <div className="flex items-center gap-1 sm:gap-3">
            {[1, 2, 3, 4, 5].map((step) => (
              <button
                key={step}
                onClick={() => handleStepClick(step)}
                title={`Ir al paso ${step}`}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all cursor-pointer ${
                  step === currentStep
                    ? 'bg-[#003366] text-white ring-4 ring-blue-100 scale-105'
                    : step < currentStep
                    ? 'bg-emerald-100 text-[#28a745] hover:bg-emerald-200'
                    : 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {step < currentStep ? <CheckCircle2 size={16} /> : step}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentStep === 5}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs uppercase transition-all ${
              currentStep === 5
                ? 'opacity-30 cursor-not-allowed text-slate-400'
                : 'bg-[#28a745] text-white hover:bg-[#218838] shadow-sm cursor-pointer'
            }`}
          >
            <span className="hidden sm:inline">Siguiente</span> <ChevronRight size={16} />
          </button>
        </div>

        {/* CONTENIDO DEL PASO */}
        <div className="min-h-[280px] mb-4">
          {renderStep()}
        </div>
      </div>

      {/* PLANES DE SUSCRIPCIÓN */}
      <section className="max-w-5xl mx-auto mb-12">
        <PlanesSuscripcion />
      </section>
    </main>
  );
}