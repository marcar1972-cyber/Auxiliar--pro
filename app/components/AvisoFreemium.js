'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, Lock, Zap, ShieldCheck, Loader2 } from 'lucide-react';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase/config"; 
import { onAuthStateChanged } from "firebase/auth";

export default function AvisoFreemium() {
  const router = useRouter();
  
  const [currentUser, setCurrentUser] = useState(null);
  const [cargandoCupon, setCargandoCupon] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        
        // Verificamos al cargar si el correo ya pidió el cupón
        const q = query(
          collection(db, "lista_espera_pro"), 
          where("email", "==", user.email)
        );
        
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setInscrito(true);
        }
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAccionCupon = async (e) => {
    e.preventDefault(); 
    
    if (!currentUser) { 
      router.push('/login');
      return; 
    }

    if (inscrito) return;
    
    setCargandoCupon(true);
    try {
      // Registro en Firebase
      await addDoc(collection(db, 'lista_espera_pro'), {
        nombre: currentUser.displayName || 'Usuario AuxiliarPro',
        email: currentUser.email,
        uid: currentUser.uid,
        fechaRegistro: new Date(),
        origen: 'banner_home_freemium',
        cuponAsignado: 'PRO30_MARZO'
      });

      // Aviso a Make para envío de email
      await fetch('https://hook.us2.make.com/r8r94dlmw5a6l4kvwfshfqu7byu3q3h7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: currentUser.displayName || 'Usuario AuxiliarPro',
          email: currentUser.email,
          cupon: 'PRO30_MARZO'
        })
      });

      // Confirmamos inscripción localmente
      setInscrito(true);

    } catch (error) {
      console.error(error);
      alert("Error de conexión al procesar el cupón.");
    } finally {
      setCargandoCupon(false);
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
          AuxiliarPro Evoluciona
        </h2>
        <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
          Nos preparamos para entregarte las mejores herramientas para el rubro farmacéutico. No solo para aprobar el examen, sino para tu perfeccionamiento constante durante toda tu vida laboral.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        
        {/* Plan Base */}
        <div className="bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col relative">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-emerald-500" />
            <h3 className="text-2xl font-bold text-slate-900">Plan Base</h3>
          </div>
          <p className="text-slate-600 mb-8 min-h-[48px]">
            Tu acceso inicial a la plataforma. Ideal para dar tus primeros pasos y conocer nuestra metodología de forma 100% gratuita.
          </p>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="text-slate-700 font-medium">Simulador formato SEREMI (Niveles 1 y 2)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="text-slate-700 font-medium">Guías de estudio base liberadas</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="text-slate-700 font-medium">DermoCheck: Calculadora de lotes dermocosméticos</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="text-slate-700 font-medium">Historial de progreso guardado</span>
            </li>
          </ul>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-auto text-center">
             {currentUser ? (
                <span className="text-slate-500 font-bold text-sm uppercase tracking-wide">Tu cuenta actual</span>
             ) : (
                <Link href="/login" className="text-emerald-600 font-bold hover:text-emerald-700">Crear cuenta gratis</Link>
             )}
          </div>
        </div>

        {/* Nivel PRO */}
        <div className="bg-slate-900 border-2 border-emerald-500 rounded-2xl p-8 shadow-xl flex flex-col relative transform md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-900 px-4 py-1.5 rounded-full text-sm font-black flex items-center gap-1 shadow-[0_0_15px_rgba(16,185,129,0.4)] tracking-wide uppercase whitespace-nowrap">
            <Zap className="w-4 h-4 fill-current" /> Lanzamiento 31 de Marzo
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 mt-2">Nivel PRO</h3>
          
          <p className="text-slate-300 mb-6 min-h-[48px] text-sm leading-relaxed">
            El <strong className="text-emerald-400">31 de marzo de 2026</strong> evolucionamos. La plataforma se mantendrá <strong className="text-white">gratis en los niveles 1, 2, Guías y DermoCheck</strong>. Los niveles 3 al 7 y las nuevas herramientas pasarán a suscripción.
          </p>

          <ul className="space-y-4 mb-8 flex-1 text-sm">
            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 font-medium"><strong className="text-white">Simulador Inicial Completo:</strong> Acceso total de los Niveles 1 al 7.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 font-medium"><strong className="text-white">Simulador Avanzado:</strong> Preguntas de alta complejidad tipo SEREMI.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 font-medium"><strong className="text-white">Vademécum Profesional (Beta):</strong> Consulta rápida para el mesón.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 font-medium"><strong className="text-white">Asistente IA Farmacéutico:</strong> Lanzamiento en Abril.</span>
            </li>
            <li className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-200 font-medium"><strong className="text-white">Módulo de Psicología:</strong> Lanzamiento en Abril.</span>
            </li>
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            <p className="text-center text-emerald-400 font-bold text-sm">
              Asegura tu cupón del 30% de descuento
            </p>
            
            <button 
              onClick={handleAccionCupon}
              disabled={cargandoCupon || inscrito}
              className={`w-full flex items-center justify-center gap-2 font-black py-4 px-6 rounded-xl transition-all ${
                inscrito 
                  ? 'bg-emerald-500 text-slate-900 cursor-default shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                  : cargandoCupon
                    ? 'bg-slate-700 text-slate-400 cursor-wait'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] cursor-pointer'
              }`}
            >
              {inscrito 
                ? 'YA TIENES TU CUPÓN ✓' 
                : cargandoCupon 
                  ? <><Loader2 className="w-5 h-5 animate-spin" /> PROCESANDO...</>
                  : 'QUIERO MI CUPÓN 30%'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}