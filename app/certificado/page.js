'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { CheckCircle, XCircle, Loader2, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function VerificarCertificadoPage() {
  const searchParams = useSearchParams();
  const certificateId = searchParams.get('id');
  
  const [certData, setCertData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!certificateId) {
      setError('No se proporcionó un ID de certificado en la URL.');
      setLoading(false);
      return;
    }

    const verificarCertificado = async () => {
      try {
        // Consultamos la colección 'certificates' en Firestore
        const certRef = doc(db, 'certificates', certificateId);
        const certSnap = await getDoc(certRef);

        if (certSnap.exists()) {
          const data = certSnap.data();
          // Verificamos que el estado sea activo y esté verificado
          if (data.status === 'active' && data.verified) {
            setCertData(data);
          } else {
            setError('Este certificado ha sido revocado o no está activo.');
          }
        } else {
          setError('Certificado no encontrado en nuestra base de datos. Puede ser inválido o el ID estar mal escrito.');
        }
      } catch (err) {
        console.error("Error al verificar el certificado:", err);
        setError('Ocurrió un error al conectar con la base de datos.');
      } finally {
        setLoading(false);
      }
    };

    verificarCertificado();
  }, [certificateId]);

  // 1. Pantalla de carga
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <Loader2 className="animate-spin text-[#003366] mb-4" size={48} />
        <p className="text-slate-600 font-semibold text-lg">Verificando autenticidad del certificado...</p>
      </div>
    );
  }

  // 2. Pantalla de error (Certificado inválido)
  if (error || !certData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-red-100">
          <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-black text-red-600 mb-2">Certificado No Válido</h1>
          <p className="text-slate-600 mb-6">{error}</p>
          <div className="bg-slate-100 p-3 rounded-lg mb-6">
            <p className="text-xs text-slate-500 font-mono">ID consultado: {certificateId}</p>
          </div>
          <Link href="/" className="inline-block bg-[#003366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#004a99] transition-colors">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  // 3. Pantalla de éxito (Certificado válido)
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header de Éxito */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center mb-8 border-t-4 border-[#28a745]">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-4">
            <CheckCircle className="text-emerald-600" size={48} />
          </div>
          <h1 className="text-3xl font-black text-emerald-700 mb-2">
            ✅ Certificado Auténtico y Válido
          </h1>
          <p className="text-slate-600 text-lg">
            Este documento ha sido verificado exitosamente en nuestra base de datos oficial.
          </p>
        </div>

        {/* Detalles del Certificado */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          
          <div className="border-b border-slate-200 pb-6">
            <h2 className="text-lg font-black text-[#003366] mb-4 flex items-center gap-2">
              <ShieldCheck size={20} /> Información del Estudiante
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Nombre Completo</p>
                <p className="text-xl font-bold text-slate-800">{certData.studentName}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Correo Electrónico</p>
                <p className="text-base font-medium text-slate-600">{certData.userEmail}</p>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-200 pb-6">
            <h2 className="text-lg font-black text-[#003366] mb-4 flex items-center gap-2">
              <ShieldCheck size={20} /> Detalles de la Certificación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Curso Aprobado</p>
                <p className="text-lg font-bold text-slate-800">{certData.courseName}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Promedio Final</p>
                <p className="text-lg font-bold text-[#28a745]">{certData.averageScore}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Fecha de Emisión</p>
                <p className="text-base font-medium text-slate-600">{certData.completionDate}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Institución Emisora</p>
                <p className="text-base font-medium text-slate-600">{certData.issuedBy}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">ID Único del Certificado</p>
            <p className="text-sm font-mono font-bold text-[#003366]">{certData.certificateId}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Verificación realizada el {new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-[#003366] font-bold hover:underline">
            Volver al sitio web de AuxiliarPro
          </Link>
        </div>
      </div>
    </div>
  );
}