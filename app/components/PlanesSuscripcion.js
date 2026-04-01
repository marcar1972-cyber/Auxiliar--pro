"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { Loader2, CheckCircle } from "lucide-react";

export default function PlanesSuscripcion() {
  const [user, setUser] = useState(null);
  const [isPro, setIsPro] = useState(false);
  const [proUntil, setProUntil] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Enlaces de Reveniu actualizados
  const BASE_LINK_MENSUAL = "https://app.reveniu.com/checkout-custom-link/zUZj7Z0Rk5OAm0e1AIXHckl46R1oLs3M"; 
  const BASE_LINK_ANUAL = "https://app.reveniu.com/checkout-custom-link/oauLyUlV4n4s2nwyT8mpoCiCg1bIO7uA";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            setIsPro(data.isPro || false);
            if (data.proUntil) {
              setProUntil(data.proUntil.toDate());
            }
          }
        } else {
          setUser(null);
          setIsPro(false);
          setProUntil(null);
        }
      } catch (error) {
        console.error("Error verificando estado PRO:", error);
      } finally {
        setLoadingAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const hasActiveSubscription = () => {
    if (!isPro) return false;
    if (!proUntil) return true; // Cuenta PRO manual sin fecha de expiración
    return new Date() <= proUntil;
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    return fecha.toLocaleDateString("es-CL", { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getCheckoutLink = (baseLink) => {
    if (!user) return "/login"; // Redirige a login si no hay sesión
    // Adjuntamos el email para facilitar el macheo en el Webhook de Make
    return `${baseLink}?email=${encodeURIComponent(user.email)}`;
  };

  const isActive = hasActiveSubscription();

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO: URGENCIA BLACK SALE + SEO DE NICHO */}
        <div className="text-center mb-16">
          {isActive ? (
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-emerald-200 shadow-sm">
              <CheckCircle size={16} />
              Eres miembro PRO hasta el {proUntil ? formatearFecha(proUntil) : "Indefinido"}
            </div>
          ) : (
            // ETIQUETA BLACK SALE - URGENCIA ROJA PARPADEANTE (Estilo Profesional)
            <div className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-3 rounded-full text-sm md:text-base font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(220,38,38,0.4)] border border-red-500 animate-pulse">
              BLACK SALE: 30 MARZO AL 07 ABRIL 2026
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Asegura tu examen SEREMI y <span className="text-emerald-500">domina el mesón</span>
          </h2>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
            Accede a la plataforma definitiva para aprobar tu certificación y consultar normativa legal sin dudas. Todo el ecosistema AuxiliarPro a un precio irrepetible.
          </p>
        </div>

        {/* CONTENEDOR DE TARJETAS (AHORA SON 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* PLAN INICIAL (GRATUITO) */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 flex flex-col relative transition-all hover:border-slate-300 shadow-sm">
            <div className="mb-6">
              <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Plan Base</span>
              <h3 className="text-2xl font-black text-slate-700 mt-4 mb-2">Inicial</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Acceso básico a las herramientas fundamentales para iniciar tu estudio.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-transparent text-lg line-through font-black select-none">&nbsp;</div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-700">Gratis</span>
              </div>
              <p className="text-slate-400 text-[11px] font-black mt-2 uppercase tracking-widest">Para siempre</p>
            </div>

            <ul className="space-y-5 mb-10 flex-1 border-t border-slate-100 pt-8">
              <li className="flex items-start gap-3 text-sm font-bold text-slate-600">
                <span className="text-slate-400 text-xl leading-none">✓</span> 
                <span><span className="text-slate-800">Simulador Inicial:</span> Acceso solo a Niveles 1 y 2.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-600">
                <span className="text-slate-400 text-xl leading-none">✓</span> 
                <span><span className="text-slate-800">Guías de Estudio:</span> Resúmenes esenciales.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-600">
                <span className="text-slate-400 text-xl leading-none">✓</span> 
                <span><span className="text-slate-800">DermoCheck:</span> Calculadora de vencimientos.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-400 opacity-50">
                <span className="text-slate-300 text-xl leading-none">✗</span> 
                <span>Simulador Avanzado (Bloqueado)</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-400 opacity-50">
                <span className="text-slate-300 text-xl leading-none">✗</span> 
                <span>Vademécum Profesional (Bloqueado)</span>
              </li>
            </ul>

            {loadingAuth ? (
              <div className="w-full bg-slate-50 text-slate-400 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={20} />
              </div>
            ) : user ? (
              <Link href="/quiz/inicial" className="w-full block bg-slate-100 text-slate-600 hover:bg-slate-200 font-black py-4 rounded-xl transition-all text-center text-sm uppercase tracking-wider">
                Ir al Simulador
              </Link>
            ) : (
              <Link href="/login" className="w-full block bg-slate-100 text-slate-600 hover:bg-slate-200 font-black py-4 rounded-xl transition-all text-center text-sm uppercase tracking-wider">
                Crear Cuenta Gratis
              </Link>
            )}
          </div>

          {/* PLAN MENSUAL (BLACK SALE) */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-4 border-slate-100 flex flex-col relative transition-all hover:border-slate-300 shadow-xl">
            <div className="mb-6">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Estudio Intensivo</span>
              <h3 className="text-2xl font-black text-slate-900 mt-4 mb-2">Suscripción Mensual</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">Flexibilidad total para tu entrenamiento técnico diario.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-slate-400 text-lg line-through font-black decoration-emerald-500">$5.990</div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">$3.990</span>
                <span className="text-slate-500 font-bold text-sm">/mes</span>
              </div>
              <p className="text-emerald-600 text-[11px] font-black mt-2 uppercase tracking-widest">Oferta temporal Black Sale</p>
            </div>

            <ul className="space-y-5 mb-10 flex-1 border-t border-slate-100 pt-8">
              <li className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <span className="text-emerald-500 text-xl leading-none">✓</span> 
                <span><span className="text-slate-900">Simulador Inicial Completo:</span> Acceso total Niveles 1 al 7.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <span className="text-emerald-500 text-xl leading-none">✓</span> 
                <span><span className="text-slate-900">Simulador Avanzado:</span> Preguntas de alta complejidad tipo SEREMI.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-700">
                <span className="text-emerald-500 text-xl leading-none">✓</span> 
                <span><span className="text-slate-900">Vademécum Profesional:</span> Consulta rápida y segura para el mesón.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xl leading-none">✓</span> 
                <span>Asistente IA Farmacéutico <span className="block text-[10px] uppercase text-slate-400 mt-1">Lanzamiento en Abril</span></span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-400 text-xl leading-none">✓</span> 
                <span>Módulo de Psicología <span className="block text-[10px] uppercase text-slate-400 mt-1">Lanzamiento en Abril</span></span>
              </li>
            </ul>

            {loadingAuth ? (
              <div className="w-full bg-slate-100 text-slate-400 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={20} /> Verificando...
              </div>
            ) : isActive ? (
              <button disabled className="w-full bg-slate-100 text-slate-400 font-black py-4 rounded-xl border border-slate-200 cursor-not-allowed">
                Suscripción Activa
              </button>
            ) : !user ? (
              <Link href="/login" className="w-full block bg-slate-900 text-white hover:bg-slate-800 font-black py-4 rounded-xl transition-all text-center text-sm uppercase tracking-wider">
                Crear Cuenta para Activar
              </Link>
            ) : (
              <a 
                href={getCheckoutLink(BASE_LINK_MENSUAL)}
                className="w-full block bg-slate-900 text-white hover:bg-black font-black py-5 rounded-2xl transition-all text-center text-lg shadow-lg transform hover:-translate-y-1"
              >
                Obtener Plan Mensual
              </a>
            )}
          </div>

          {/* PLAN ANUAL (DESTACADO AGRESIVO) */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border-4 border-emerald-500 flex flex-col relative shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-900 px-6 py-2 rounded-full text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl whitespace-nowrap border-2 border-slate-900">
              MÁXIMO AHORRO: 40% OFF
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Plan Anual PRO</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">Tu arsenal completo para la certificación y tu primer año laboral con seguridad técnica.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-slate-500 text-lg line-through font-black decoration-emerald-500">$49.990</div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black text-white">$29.990</span>
                <span className="text-slate-400 font-bold text-sm">/año</span>
              </div>
              <p className="text-emerald-400 text-[11px] font-black mt-2 uppercase tracking-widest">Equivale a solo $2.499 al mes</p>
            </div>

            <ul className="space-y-5 mb-10 flex-1 border-t border-slate-800 pt-8">
              <li className="flex items-start gap-3 text-sm font-bold text-slate-300">
                <span className="text-emerald-400 text-xl leading-none">✓</span> 
                <span><span className="text-white">Simulador Inicial Completo:</span> Acceso total Niveles 1 al 7.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-300">
                <span className="text-emerald-400 text-xl leading-none">✓</span> 
                <span><span className="text-white">Simulador Avanzado:</span> Preguntas de alta complejidad tipo SEREMI.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-300">
                <span className="text-emerald-400 text-xl leading-none">✓</span> 
                <span><span className="text-white">Vademécum Profesional:</span> Consulta rápida y segura para el mesón.</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-500 text-xl leading-none">✓</span> 
                <span>Asistente IA Farmacéutico <span className="block text-[10px] uppercase text-slate-500 mt-1">Lanzamiento en Abril</span></span>
              </li>
              <li className="flex items-start gap-3 text-sm font-bold text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                <span className="text-slate-500 text-xl leading-none">✓</span> 
                <span>Módulo de Psicología <span className="block text-[10px] uppercase text-slate-500 mt-1">Lanzamiento en Abril</span></span>
              </li>
            </ul>

            {loadingAuth ? (
              <div className="w-full bg-slate-800 text-slate-500 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={20} /> Verificando...
              </div>
            ) : isActive ? (
              <button disabled className="w-full bg-slate-800 text-emerald-500 font-black py-4 rounded-xl border border-emerald-900 cursor-not-allowed">
                Suscripción Activa
              </button>
            ) : !user ? (
              <Link href="/login" className="w-full block bg-emerald-500 text-slate-900 hover:bg-emerald-400 font-black py-4 rounded-xl transition-all text-center text-sm uppercase tracking-wider shadow-lg shadow-emerald-900/20">
                Crear Cuenta para Activar
              </Link>
            ) : (
              <a 
                href={getCheckoutLink(BASE_LINK_ANUAL)}
                className="w-full block bg-emerald-500 text-slate-900 hover:bg-emerald-400 font-black py-6 rounded-2xl transition-all text-center text-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:scale-105"
              >
                Obtener Plan Anual
              </a>
            )}
          </div>

        </div>

        {/* FOOTER DE CONFIANZA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">🔒 Transacción Protegida vía Reveniu</span>
          <div className="flex gap-6 opacity-40 mt-2">
            <span>Webpay</span>
            <span>Visa</span>
            <span>Mastercard</span>
          </div>
        </div>
      </div>
    </div>
  );
}