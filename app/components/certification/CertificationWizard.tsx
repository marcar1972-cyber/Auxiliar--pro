'use client';

import { useState } from 'react';
// CAMBIO: Usamos ruta relativa en lugar de @/
import { db } from '../../../lib/firebase'; 
import { collection, addDoc, Timestamp } from 'firebase/firestore';
// CAMBIO: Usamos ruta relativa en lugar de @/
import { validateRUT } from '../../../lib/utils'; 

interface CertificationWizardProps {
  userId: string;
  userEmail: string;
}

export default function CertificationWizard({ userId, userEmail }: CertificationWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  // Paso 1: Datos del Alumno
  const [studentData, setStudentData] = useState({
    fullName: '',
    rut: '',
  });

  // Paso 2: Datos de la Farmacia
  const [pharmacyData, setPharmacyData] = useState({
    pharmacyName: '',
    address: '',
    commune: '',
    phone: '',
  });

  // Paso 3: Período Laboral
  const [workPeriodData, setWorkPeriodData] = useState({
    periodText: '',
    startDate: '',
    endDate: '',
    isCurrentDate: false,
  });

  // Paso 4: Actividades (5 checkboxes)
  const [activities, setActivities] = useState<string[]>([]);

  // Paso 5: Datos del QF Director Técnico
  const [qfData, setQfData] = useState({
    qfName: '',
    qfRut: '',
    qfEmail: '',
  });

  const toggleActivity = (activity: string) => {
    setActivities(prev => 
      prev.includes(activity) 
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

  const activitiesList = [
    "Bodegaje, reposición y manejo de productos farmacéuticos",
    "Dispensación de medicamentos bajo supervisión del Químico Farmacéutico",
    "Control de stock y fechas de vencimiento",
    "Educación al usuario sobre uso racional de medicamentos",
    "Apoyo en actividades administrativas del establecimiento"
  ];

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return studentData.fullName.trim() !== '' && validateRUT(studentData.rut);
      case 2:
        return pharmacyData.pharmacyName.trim() !== '' && 
               pharmacyData.address.trim() !== '' && 
               pharmacyData.commune.trim() !== '';
      case 3:
        return workPeriodData.periodText.trim() !== '' && 
               workPeriodData.startDate.trim() !== '' &&
               (workPeriodData.isCurrentDate || workPeriodData.endDate.trim() !== '');
      case 4:
        return activities.length >= 1;
      case 5:
        return qfData.qfName.trim() !== '' && validateRUT(qfData.qfRut);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep() && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePDF = async () => {
    if (!validateStep()) return;

    setIsGenerating(true);

    try {
      const pdfData = {
        studentName: studentData.fullName,
        studentRut: studentData.rut,
        pharmacyName: pharmacyData.pharmacyName,
        pharmacyAddress: pharmacyData.address,
        pharmacyCommune: pharmacyData.commune,
        pharmacyPhone: pharmacyData.phone,
        periodText: workPeriodData.periodText,
        startDate: workPeriodData.startDate,
        endDate: workPeriodData.isCurrentDate ? 'la actual fecha' : workPeriodData.endDate,
        activities: activities,
        qfName: qfData.qfName,
        qfRut: qfData.qfRut,
        qfEmail: qfData.qfEmail,
        emissionDate: new Date().toISOString().split('T')[0],
        emissionCity: pharmacyData.commune,
      };

      const response = await fetch('/api/certificates/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pdfData),
      });

      if (!response.ok) throw new Error('Error al generar PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);

      await addDoc(collection(db, 'certificates'), {
        userId,
        userEmail,
        ...pdfData,
        createdAt: Timestamp.now(),
        status: 'draft',
      });

      setCurrentStep(6);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al generar el certificado. Intente nuevamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Datos del Alumno</h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo *</label>
              <input
                type="text"
                value={studentData.fullName}
                onChange={(e) => setStudentData({...studentData, fullName: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: María José González Pérez"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">RUT *</label>
              <input
                type="text"
                value={studentData.rut}
                onChange={(e) => setStudentData({...studentData, rut: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: 12.345.678-9"
              />
              {!validateRUT(studentData.rut) && studentData.rut.length > 0 && (
                <p className="text-red-500 text-xs mt-1">RUT inválido</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Datos del Establecimiento Farmacéutico</h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre del Establecimiento *</label>
              <input
                type="text"
                value={pharmacyData.pharmacyName}
                onChange={(e) => setPharmacyData({...pharmacyData, pharmacyName: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: Farmacia Cruz Verde - Sucursal Providencia"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Dirección (Calle y Número) *</label>
              <input
                type="text"
                value={pharmacyData.address}
                onChange={(e) => setPharmacyData({...pharmacyData, address: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: Avenida Providencia 1234"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Comuna *</label>
                <input
                  type="text"
                  value={pharmacyData.commune}
                  onChange={(e) => setPharmacyData({...pharmacyData, commune: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Ej: Providencia"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  value={pharmacyData.phone}
                  onChange={(e) => setPharmacyData({...pharmacyData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Ej: +56 2 2345 6789"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Período de Trabajo</h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Período (años o meses) *</label>
              <input
                type="text"
                value={workPeriodData.periodText}
                onChange={(e) => setWorkPeriodData({...workPeriodData, periodText: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: 1 año, 14 meses, 2 años"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Fecha de Inicio *</label>
              <input
                type="date"
                value={workPeriodData.startDate}
                onChange={(e) => setWorkPeriodData({...workPeriodData, startDate: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Fecha de Término</label>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  id="currentDate"
                  checked={workPeriodData.isCurrentDate}
                  onChange={(e) => setWorkPeriodData({...workPeriodData, isCurrentDate: e.target.checked})}
                  className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                />
                <label htmlFor="currentDate" className="text-sm text-slate-700">
                  Vigente a la fecha (marcar si aún trabaja allí)
                </label>
              </div>
              {!workPeriodData.isCurrentDate && (
                <input
                  type="date"
                  value={workPeriodData.endDate}
                  onChange={(e) => setWorkPeriodData({...workPeriodData, endDate: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Actividades Desempeñadas</h2>
            <p className="text-sm text-slate-600 mb-4">
              Seleccione al menos una actividad de apoyo realizada (según Art. 28 DS 466/1984):
            </p>
            <div className="space-y-3">
              {activitiesList.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <input
                    type="checkbox"
                    id={`activity-${index}`}
                    checked={activities.includes(activity)}
                    onChange={() => toggleActivity(activity)}
                    className="mt-1 w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                  />
                  <label htmlFor={`activity-${index}`} className="ml-3 text-sm text-slate-700">
                    {activity}
                  </label>
                </div>
              ))}
            </div>
            {activities.length < 1 && (
              <p className="text-red-500 text-xs">Debe seleccionar al menos una actividad</p>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Datos del Químico Farmacéutico Director Técnico</h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo del QF *</label>
              <input
                type="text"
                value={qfData.qfName}
                onChange={(e) => setQfData({...qfData, qfName: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: Dr. Carlos Andrés Martínez López"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">RUT del QF *</label>
              <input
                type="text"
                value={qfData.qfRut}
                onChange={(e) => setQfData({...qfData, qfRut: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: 10.987.654-3"
              />
              {!validateRUT(qfData.qfRut) && qfData.qfRut.length > 0 && (
                <p className="text-red-500 text-xs mt-1">RUT inválido</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email del QF</label>
              <input
                type="email"
                value={qfData.qfEmail}
                onChange={(e) => setQfData({...qfData, qfEmail: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: qf.martinez@farmacia.cl"
              />
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md mt-4">
              <p className="text-sm text-amber-800">
                <strong>Importante:</strong> Este certificado deberá ser impreso, firmado y timbrado por el 
                Químico Farmacéutico Director Técnico para tener validez ante la SEREMI de Salud.
              </p>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">¡Certificado Generado!</h2>
            <p className="text-slate-600">
              Tu certificado de idoneidad ha sido generado exitosamente.
            </p>
            {pdfUrl && (
              <div className="space-y-4">
                <a
                  href={pdfUrl}
                  download={`Certificado_Idoneidad_${studentData.rut.replace(/\./g, '').replace('-', '')}.pdf`}
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar PDF
                </a>
                <p className="text-xs text-slate-500">
                  Imprime el documento y entrégaselo al Químico Farmacéutico para su firma y timbre.
                </p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  if (currentStep === 6) {
    return renderStep();
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step <= currentStep
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-slate-600">
          <span>Datos</span>
          <span>Farmacia</span>
          <span>Período</span>
          <span>Actividades</span>
          <span>QF</span>
        </div>
      </div>

      <div className="mb-8">
        {renderStep()}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentStep === 1
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Anterior
        </button>
        
        {currentStep < 5 ? (
          <button
            onClick={handleNext}
            disabled={!validateStep()}
            className={`px-6 py-2 rounded-lg font-medium ${
              validateStep()
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={generatePDF}
            disabled={!validateStep() || isGenerating}
            className={`px-6 py-2 rounded-lg font-medium ${
              validateStep() && !isGenerating
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isGenerating ? 'Generando...' : 'Generar Certificado'}
          </button>
        )}
      </div>
    </div>
  );
}