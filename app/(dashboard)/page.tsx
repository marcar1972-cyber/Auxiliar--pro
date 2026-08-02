'use client';

import { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { 
  AlertCircle, Bell, CheckCircle2, FileText, GraduationCap, 
  Briefcase, Clock, Upload, ExternalLink, Sparkles 
} from 'lucide-react';

// ============================================
// AUXILIARPRO v4.0 - DASHBOARD DEL ALUMNO
// Stack: Firebase (Sin Supabase/Resend por ahora)
// Built by <macz.dev/>
// ============================================

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push('/login');
        return;
      }
      setUser(currentUser);

      // Buscar perfil en Firestore
      const profileRef = doc(db, 'student_profiles', currentUser.uid);
      const profileSnap = await getDoc(profileRef);

      if (profileSnap.exists()) {
        setProfile(profileSnap.data());
      } else {
        // Si no tiene perfil, redirigir a onboarding
        router.push('/onboarding');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50">
        <div className="text-blue-600 font-semibold">Cargando dashboard...</div>
      </div>
    );
  }

  if (!profile) return null;

  // Calcular alerta de "Año Cero" (11.5 meses)
  const calculateAlert = () => {
    if (!profile.pharmacy_start_date) return null;
    const start = new Date(profile.pharmacy_start_date);
    const target = new Date(start);
    target.setMonth(target.getMonth() + 11);
    target.setDate(target.getDate() + 15); // 11.5 meses

    const now = new Date();
    const diffMs = target.getTime() - now.getTime();
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    return {
      active: daysLeft <= 30 && daysLeft >= -30,
      daysLeft: Math.abs(daysLeft),
      isPast: daysLeft < 0
    };
  };

  const alertData = calculateAlert();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* HEADER */}
      <header className="bg-white border-b border-blue-100 sticky top-0 z-40 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">AuxiliarPro</h1>
              <p className="text-xs text-gray-500">Dashboard del Alumno</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-blue-50 rounded-lg transition">
              <Bell className="w-5 h-5 text-gray-600" />
              {alertData?.active && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{profile.full_name || 'Alumno'}</p>
              <p className="text-xs text-gray-500">{profile.plan === 'free' ? 'Plan Gratuito' : 'Plan Premium'}</p>
            </div>
            <button 
              onClick={() => auth.signOut().then(() => router.push('/login'))}
              className="text-xs text-red-600 hover:text-red-700 font-medium"
            >
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* BANNER ALERTA AÑO CERO */}
        {alertData?.active && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-xl p-5 flex items-start gap-4">
            <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-amber-900">
                {alertData.isPast ? '⚠️ ¡Ya cumpliste el año!' : '⏳ ¡Atención! Tu año está cerca'}
              </h3>
              <p className="text-sm text-amber-800 mt-1">
                {alertData.isPast 
                  ? 'Ya tienes la experiencia necesaria. Es hora de tramitar tu Licencia de Enseñanza Media y preparar tu Certificado de Idoneidad.'
                  : `En ${alertData.daysLeft} días cumples 1 año de experiencia. Es hora de preparar tu Certificado de Idoneidad.`}
              </p>
            </div>
          </div>
        )}

        {/* ESTADO ACTUAL DEL TRÁMITE */}
        <StatusCard status={profile.seremi_status || 'pending_docs'} />

        {/* GRID DE FASES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* FASE 2: GENERADOR CERTIFICADO */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-bold text-gray-900">Certificado de Idoneidad</h2>
                </div>
                <p className="text-sm text-gray-600">
                  Genera el PDF con formato exacto del MINSAL para que tu QF lo firme.
                </p>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">Fase 2</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Iniciar Wizard (Próximamente)
            </button>
          </div>

          {/* FASE 3: CHECKLIST SEREMI */}
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h2 className="text-lg font-bold text-gray-900">Requisitos SEREMI</h2>
                </div>
                <p className="text-sm text-gray-600">
                  Checklist interactiva con los 4 documentos textuales del sistema.
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">Fase 3</span>
            </div>

            <div className="space-y-2 mb-4">
              {[
                { name: 'CERTIFICADO DE ENSEÑANZA MEDIA', icon: '🎓' },
                { name: 'CERTIFICADO DE DESEMPEÑO LABORAL', icon: '💼' },
                { name: 'COPIA DE CONTRATO DE TRABAJO', icon: '📄' },
                { name: 'FOTO TIPO CARNET COLOR 3X4', icon: '📷' }
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <span className="text-xl">{doc.icon}</span>
                  <p className="text-xs font-semibold text-gray-700 flex-1">{doc.name}</p>
                  <Upload className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>

            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2">
              Gestionar documentos
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* FASE 4: POST-EXAMEN */}
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <h2 className="text-lg font-bold text-gray-900">Post-Examen</h2>
                </div>
                <p className="text-sm text-gray-600">
                  Información de costos y tiempos tras aprobar.
                </p>
              </div>
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">Fase 4</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-gray-700">📝 Derecho a Examen</span>
                <span className="font-bold text-purple-700">~$19.100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-gray-700">🪪 Credencial + ISP</span>
                <span className="font-bold text-purple-700">~$48.000</span>
              </div>
            </div>

            <a
              href="https://seremienlinea.minsal.cl/asdigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
            >
              Ir a SEREMI en Línea
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* FASE 5: EMPLEABILIDAD */}
          <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5" />
                <h2 className="text-lg font-bold">Laboratorio de Empleabilidad</h2>
              </div>
              <p className="text-sm text-emerald-50 mb-4">
                Optimiza tu CV con keywords del sector (DS 466, cadena de frío, fraccionamiento).
              </p>
              <button className="w-full bg-white text-emerald-700 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 hover:bg-emerald-50">
                <Sparkles className="w-4 h-4" />
                Optimizar CV con IA
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="pt-8 pb-4 border-t border-blue-100 mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Built by{' '}
              <a href="https://macz.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">
                &lt;macz.dev/&gt;
              </a>
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold px-5 py-2 rounded-full text-sm hover:shadow-lg transition">
              <span>❤️</span> Apoya el proyecto
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Componente auxiliar para el estado
function StatusCard({ status }) {
  const statusConfig = {
    pending_docs: { label: 'Reuniendo documentos', color: 'from-amber-500 to-orange-500', icon: <FileText className="w-5 h-5" /> },
    submitted_seremi: { label: 'Enviado a SEREMI', color: 'from-blue-500 to-cyan-500', icon: <Upload className="w-5 h-5" /> },
    exam_pending: { label: 'Esperando citación', color: 'from-purple-500 to-pink-500', icon: <Clock className="w-5 h-5" /> },
    exam_approved: { label: '¡Examen aprobado!', color: 'from-emerald-500 to-teal-500', icon: <CheckCircle2 className="w-5 h-5" /> },
    credencial_received: { label: 'Credencial recibida 🎉', color: 'from-emerald-600 to-emerald-700', icon: <GraduationCap className="w-5 h-5" /> }
  };

  const config = statusConfig[status] || statusConfig.pending_docs;

  return (
    <div className={`bg-gradient-to-r ${config.color} rounded-2xl shadow-lg p-6 text-white`}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          {config.icon}
        </div>
        <div>
          <p className="text-sm text-white/80">Estado actual del trámite</p>
          <p className="text-xl font-bold">{config.label}</p>
        </div>
      </div>
    </div>
  );
}