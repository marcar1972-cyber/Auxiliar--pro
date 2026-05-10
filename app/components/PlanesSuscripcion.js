"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PlanesSuscripcion() {
  const [user, setUser] = useState(null);
  const [isPro, setIsPro] = useState(false);
  const [proUntil, setProUntil] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // 🔥 Enlaces de pago (Conectados a tu API)
  const BASE_LINK_MENSUAL = "/api/checkout-mp?plan=mensual"; 
  const BASE_LINK_ANUAL = "/api/checkout-mp?plan=anual";
  const BASE_LINK_SPRINT = "/api/checkout-mp?plan=sprint";

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
    if (!proUntil) return true; 
    return new Date() <= proUntil;
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    return fecha.toLocaleDateString("es-CL", { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getCheckoutLink = (baseLink) => {
    if (!user) return "/login";
    
    const conector = baseLink.includes('?') ? '&' : '?';
    
    // Enviamos el uid y el email a nuestro backend para que arme la orden de Mercado Pago
    return `${baseLink}${conector}email=${encodeURIComponent(user.email)}&uid=${user.uid}`;
  };

  const isActive = hasActiveSubscription();

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          {isActive ? (
            <div className="inline-flex items-center gap-2 bg-[#28a745]/10 text-[#003366] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#28a745]/20 shadow-sm">
              <CheckCircle size={16} />
              Eres miembro PRO hasta el {proUntil ? formatearFecha(proUntil) : "Indefinido"}
            </div>
          ) : (
            <div className="inline-flex items-center justify-center bg-slate-100 text-slate-600 px-8 py-3 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-6 border border-slate-200">
              PLANES DE ENTRENAMIENTO PROFESIONAL
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Asegura tu examen SEREMI y <span className="text-[#28a745]">domina el mesón</span>
          </h2>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
            Accede a la plataforma definitiva para aprobar tu certificación y consultar normativa legal sin dudas. Todo el ecosistema AuxiliarPro App.
          </p>
        </div>

        {/* CONTENEDOR DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          
          {/* PLAN INICIAL */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 flex flex-col relative transition-all hover:border-slate-300 shadow-sm">
            <div className="mb-6">
              <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Plan Base</span>
              <h3 className="text-xl font-black text-slate-700 mt-4 mb-2">Inicial</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Acceso básico a las herramientas fundamentales.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-transparent text-sm line-through font-black select-none">&nbsp;</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-700">Gratis</span>
              </div>
              <p className="text-slate-400 text-[10px] font-black mt-2 uppercase tracking-widest">Para siempre</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3 text-xs font-bold text-slate-600">
                <span className="text-emerald-500 text-lg leading-none">✓</span> 
                <span>Simulador Inicial: 3 Niveles de preguntas para practicar</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-600">
                <span className="text-emerald-500 text-lg leading-none">✓</span> 
                <span>Guías de Estudio: Resúmenes esenciales.</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-600 opacity-50">
                <span className="text-slate-300 text-lg leading-none">✗</span> 
                <span><span className="text-slate-400 line-through">Campus Virtual + Simulador PRO Completo</span></span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-600 opacity-50">
                <span className="text-slate-300 text-lg leading-none">✗</span> 
                <span><span className="text-slate-400 line-through">Vademécum Profesional</span></span>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-2 w-full mt-auto">
              {loadingAuth ? (
                <div className="w-full bg-slate-50 text-slate-400 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              ) : user ? (
                <Link href="/quiz" className="w-full block bg-slate-100 text-slate-600 hover:bg-slate-200 font-black py-4 rounded-xl transition-all text-center text-[11px] uppercase tracking-wider">
                  Ir al Simulador
                </Link>
              ) : (
                <Link href="/login" className="w-full block bg-slate-100 text-slate-600 hover:bg-slate-200 font-black py-4 rounded-xl transition-all text-center text-[11px] uppercase tracking-wider">
                  Crear Cuenta Gratis
                </Link>
              )}
            </div>
          </div>

          {/* PLAN SPRINT 15 DÍAS (NUEVO AUTOMATIZADO) */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 border-2 border-orange-400 flex flex-col relative transition-all hover:border-orange-500 shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-orange-400 text-white text-center py-1 text-[9px] font-black uppercase tracking-widest">
              Examen Próximo
            </div>
            <div className="mb-6 mt-3">
              <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Urgencia</span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2">Pase 15 Días</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Estudio intensivo de última hora.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-transparent text-sm line-through font-black select-none">&nbsp;</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$3.990</span>
              </div>
              <p className="text-orange-500 text-[10px] font-black mt-2 uppercase tracking-widest">Pago Único (No se renueva)</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Simulador Inicial</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Campus Virtual + Simulador PRO Completo</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Vademécum Profesional</span>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-2 w-full mt-auto">
              {loadingAuth ? (
                <div className="w-full bg-slate-100 text-slate-400 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              ) : isActive ? (
                <button disabled className="w-full bg-slate-100 text-slate-400 font-black py-4 rounded-xl border border-slate-200 cursor-not-allowed text-[11px] uppercase tracking-wider">
                  Suscripción Activa
                </button>
              ) : !user ? (
                <Link href="/login" className="w-full block bg-orange-500 text-white hover:bg-orange-600 font-black py-4 rounded-xl transition-all text-center text-[11px] uppercase tracking-wider">
                  Crear Cuenta
                </Link>
              ) : (
                <a 
                  href={getCheckoutLink(BASE_LINK_SPRINT)}
                  className="w-full block bg-orange-500 text-white hover:bg-orange-600 font-black py-4 rounded-xl transition-all text-center text-sm shadow-lg shadow-orange-500/30 transform hover:-translate-y-1"
                >
                  Obtener Pase
                </a>
              )}
            </div>
          </div>

          {/* PLAN MENSUAL */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 flex flex-col relative transition-all hover:border-slate-300 shadow-xl">
            <div className="mb-6">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Estudio Intensivo</span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2">Suscripción Mensual</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Entrenamiento técnico diario.</p>
            </div>
            
            <div className="mb-8">
              <div className="text-transparent text-sm line-through font-black select-none">&nbsp;</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$5.990</span>
                <span className="text-slate-500 font-bold text-xs">/mes</span>
              </div>
              <p className="text-slate-400 text-[10px] font-black mt-2 uppercase tracking-widest">Cancela cuando quieras</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Simulador Inicial</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Campus Virtual + Simulador PRO Completo</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Vademécum Profesional</span>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-2 w-full mt-auto">
              {loadingAuth ? (
                <div className="w-full bg-slate-100 text-slate-400 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              ) : isActive ? (
                <button disabled className="w-full bg-slate-100 text-slate-400 font-black py-4 rounded-xl border border-slate-200 cursor-not-allowed text-[11px] uppercase tracking-wider">
                  Suscripción Activa
                </button>
              ) : !user ? (
                <Link href="/login" className="w-full block bg-[#003366] text-white hover:bg-[#002244] font-black py-4 rounded-xl transition-all text-center text-[11px] uppercase tracking-wider">
                  Crear Cuenta
                </Link>
              ) : (
                <a 
                  href={getCheckoutLink(BASE_LINK_MENSUAL)}
                  className="w-full block bg-[#003366] text-white hover:bg-[#002244] font-black py-4 rounded-xl transition-all text-center text-sm shadow-lg transform hover:-translate-y-1"
                >
                  Plan Mensual
                </a>
              )}
            </div>
          </div>

          {/* PLAN ANUAL */}
          <div className="bg-[#003366] rounded-[2rem] p-6 md:p-8 border-4 border-[#28a745] flex flex-col relative shadow-[0_20px_50px_rgba(40,167,69,0.3)] mt-6 xl:mt-0">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#28a745] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl whitespace-nowrap border-2 border-[#003366]">
              MEJOR VALOR
            </div>

            <div className="mb-6 mt-2">
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Plan Anual PRO</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">Arsenal completo con ahorro máximo.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                {/* CTO FIX: Corrección del precio anual */}
                <span className="text-5xl font-black text-white">$49.990</span>
              </div>
              <p className="text-[#28a745] text-[10px] font-black mt-2 uppercase tracking-widest">Ahorra 2 meses</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 border-t border-slate-800 pt-6">
              <li className="flex items-start gap-3 text-xs font-bold text-slate-300">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Simulador Inicial</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-300">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Campus Virtual + Simulador PRO Completo</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-300">
                <span className="text-[#28a745] text-lg leading-none">✓</span> 
                <span>Vademécum Profesional</span>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-2 w-full mt-auto">
              {loadingAuth ? (
                <div className="w-full bg-[#002244] text-slate-500 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              ) : isActive ? (
                <button disabled className="w-full bg-[#002244] text-[#28a745] font-black py-4 rounded-xl border border-[#28a745]/30 cursor-not-allowed text-[11px] uppercase tracking-wider">
                  Suscripción Activa
                </button>
              ) : !user ? (
                <Link href="/login" className="w-full block bg-[#28a745] text-white hover:bg-[#218838] font-black py-4 rounded-xl transition-all text-center text-[11px] uppercase tracking-wider shadow-lg shadow-[#28a745]/20">
                  Crear Cuenta
                </Link>
              ) : (
                <a 
                  href={getCheckoutLink(BASE_LINK_ANUAL)}
                  className="w-full block bg-[#28a745] text-white hover:bg-[#218838] font-black py-5 rounded-xl transition-all text-center text-sm shadow-[0_0_30px_rgba(40,167,69,0.4)] transform hover:scale-105"
                >
                  Obtener Anual
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}