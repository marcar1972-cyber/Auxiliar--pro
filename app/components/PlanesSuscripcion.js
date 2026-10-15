// app/components/PlanesSuscripcion.js
"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { Loader2, CheckCircle, Flame, Zap, ArrowRight, X, Trophy, Award } from "lucide-react";
import Link from "next/link";

export default function PlanesSuscripcion() {
  const [user, setUser] = useState(null);
  const [isPro, setIsPro] = useState(false);
  const [proUntil, setProUntil] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loadingCheckout, setLoadingCheckout] = useState(null);

  // Estados para controlar el Popup Interceptor
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planSeleccionado, setPlanSeleccionado] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const docRef = doc(db, "users", currentUser.uid);

        const unsubscribeSnapshot = onSnapshot(docRef, (docSnap) => {
          try {
            if (docSnap.exists()) {
              const data = docSnap.data();
              let currentIsPro = data.isPro || false;
              let currentProUntil = null;

              if (data.proUntil) {
                if (typeof data.proUntil.toDate === "function") {
                  currentProUntil = data.proUntil.toDate();
                } else if (typeof data.proUntil === "string" || typeof data.proUntil === "number") {
                  currentProUntil = new Date(data.proUntil);
                }
              }

              if (currentProUntil && new Date() > currentProUntil) {
                currentIsPro = false;
              }

              setIsPro(currentIsPro);
              setProUntil(currentProUntil);
            }
          } catch (error) {
            console.error("Error procesando cambios del documento:", error);
          } finally {
            setLoadingAuth(false);
          }
        }, (error) => {
          console.error("Error en canal onSnapshot:", error);
          setLoadingAuth(false);
        });

        return () => unsubscribeSnapshot;
      } else {
        setUser(null);
        setIsPro(false);
        setProUntil(null);
        setLoadingAuth(false);
      }
    });

    return () => unsubscribeAuth;
  }, []);

  // Abre el modal de confirmación antes de procesar el pago
  const abrirConfirmacionPago = (planKey) => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    setPlanSeleccionado(planKey);
    setIsModalOpen(true);
  };

  // 🚀 DISPARADOR DINÁMICO: Llama a la API de Checkout inyectando UID y Email
  const confirmarYProcesarPago = async () => {
    if (!planSeleccionado || !user) return;
    setIsModalOpen(false); // Cierra el modal

    // Evitar llamadas duplicadas si ya está procesando
    if (loadingCheckout) return;

    try {
      setLoadingCheckout(planSeleccionado);

      const response = await fetch("/api/checkout-mp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planKey: planSeleccionado,
          uid: user.uid,
          email: user.email || user.providerData[0]?.email || "",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.initPoint) {
        // Redirección directa al Checkout Dinámico de Mercado Pago
        window.location.href = data.initPoint;
      } else {
        throw new Error(data.error || "initPoint no recibido.");
      }
    } catch (error) {
      console.error("❌ Error iniciando pasarela Checkout Pro:", error);
      alert("Hubo un problema al conectar con Mercado Pago. Por favor, reintenta en unos momentos.");
      setLoadingCheckout(null);
    }
  };

  const hasActiveSubscription = () => {
    if (!isPro) return false;
    if (!proUntil) return true;
    return new Date() <= proUntil;
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    return fecha.toLocaleDateString("es-CL", { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const isActive = hasActiveSubscription();

  const getNombrePlan = (key) => {
    if (key === "sprint") return "Pase 15 Días";
    if (key === "mensual") return "Mensual PRO (30 días)";
    return "";
  };

  return (
    <div className="w-full bg-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          {isActive ? (
            <div className="inline-flex items-center gap-2 bg-[#28a745]/10 text-[#003366] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#28a745]/20 shadow-sm">
              <CheckCircle size={16} />
              Eres miembro PRO hasta el {proUntil ? formatearFecha(proUntil) : "Indefinido"}
            </div>
          ) : (
            <div className="inline-flex items-center justify-center bg-[#003366]/10 text-[#003366] px-8 py-3 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-6 shadow-sm border border-[#003366]/20">
              <Zap size={18} className="mr-2 text-[#28a745]" />
              PLANES DE ACCESO PREMIUM
            </div>
          )}
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Asegura tu examen SEREMI y <span className="text-[#28a745]">domina el mesón</span>
          </h2>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
            Accede a la plataforma definitiva para aprobar tu certificación y consulta normativa legal sin dudas. Todo el ecosistema AuxiliarPro.
          </p>
        </div>

        {/* CONTENEDOR DE TARJETAS (Ajustado a max 3 columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* PLAN INICIAL */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-slate-200 flex flex-col relative transition-all hover:border-slate-300 shadow-sm">
            <div className="mb-6">
              <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Plan Base</span>
              <h3 className="text-xl font-black text-slate-700 mt-4 mb-2">Inicial</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Descubre tu nivel real antes de estudiar.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-700">Gratis</span>
              </div>
              <p className="text-slate-400 text-[10px] font-black mt-2 uppercase tracking-widest">Para siempre</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3 text-xs font-bold text-slate-600">
                <span className="text-emerald-500 text-lg leading-none">✓</span> 
                <span>Diagnóstico SEREMI 2026 (3 áreas)</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-600 opacity-50">
                <span className="text-slate-300 text-lg leading-none">✗</span> 
                <span><span className="text-slate-400 line-through">Desafío de Racha Diaria</span></span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-600 opacity-50">
                <span className="text-slate-300 text-lg leading-none">✗</span> 
                <span><span className="text-slate-400 line-through">Campus Virtual PRO completo</span></span>
              </li>
            </ul>

            <div className="flex flex-col items-center gap-2 w-full mt-auto">
              {loadingAuth ? (
                <div className="w-full bg-slate-50 text-slate-400 font-black py-4 rounded-xl flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                </div>
              ) : user ? (
                <Link href="/quiz" className="w-full block bg-slate-100 text-slate-600 hover:bg-slate-200 font-black py-4 rounded-xl transition-all text-center text-[11px] uppercase tracking-wider">
                  Ir al Diagnóstico
                </Link>
              ) : (
                <Link href="/login" className="w-full block bg-slate-100 text-slate-600 hover:bg-slate-200 font-black py-4 rounded-xl transition-all text-center text-[11px] uppercase tracking-wider">
                  Crear Cuenta Gratis
                </Link>
              )}
            </div>
          </div>

          {/* PLAN SPRINT 15 DÍAS */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 border-2 border-[#003366] flex flex-col relative transition-all hover:border-[#002244] shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#003366] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap border-2 border-white flex items-center gap-1">
              <Trophy size={12} className="text-[#28a745]" /> INTENSIVO
            </div>
            <div className="mb-6 mt-2">
              <span className="bg-[#003366]/10 text-[#003366] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1">
                <Zap size={12} className="text-[#28a745]" /> Repaso Rápido
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2">Pase 15 Días</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Estudio intensivo final y repaso rápido.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$3.990</span>
              </div>
              <p className="text-slate-400 text-[10px] font-black mt-2 uppercase tracking-widest">Pago único por 15 días</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <Flame size={16} className="text-[#28a745]" />
                <span>Desafío de Racha Diaria (Hábito de estudio)</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <Zap size={16} className="text-[#28a745]" /> 
                <span>Campus Virtual PRO (4 Módulos de preparación)</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <CheckCircle size={16} className="text-[#28a745]" /> 
                <span>1 Examen Global TIPO SEREMI (100% interactivo)</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <CheckCircle size={16} className="text-[#28a745]" /> 
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
                  Cuenta PRO Activa
                </button>
              ) : (
                <button 
                  onClick={() => abrirConfirmacionPago("sprint")}
                  disabled={loadingCheckout !== null}
                  className="w-full bg-[#003366] text-white hover:bg-[#002244] font-black py-4 rounded-xl transition-all text-center text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  {loadingCheckout === "sprint" ? <Loader2 className="animate-spin" size={18} /> : "Obtener Pase"}
                </button>
              )}
            </div>
          </div>

          {/* PLAN MENSUAL — RECOMENDADO */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 border-2 border-[#28a745] flex flex-col relative transition-all hover:border-[#218838] shadow-xl">
            <div className="mb-6">
              <span className="bg-[#28a745]/10 text-[#28a745] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1">
                <CheckCircle size={12} /> Recomendado
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2">Mensual PRO</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">Preparación completa, doble evaluación y diploma.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">$5.990</span>
              </div>
              <p className="text-slate-400 text-[10px] font-black mt-2 uppercase tracking-widest">Pago único por 30 días</p>
            </div>

            <ul className="space-y-4 mb-10 flex-1 border-t border-slate-100 pt-6">
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <Flame size={16} className="text-[#28a745]" />
                <span>Desafío de Racha Diaria</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <Zap size={16} className="text-[#28a745]" /> 
                <span>Campus Virtual PRO completo (4 Módulos)</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <CheckCircle size={16} className="text-[#28a745]" /> 
                <span>2 Exámenes Globales TIPO SEREMI (Doble entrenamiento real)</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <Award size={16} className="text-[#28a745]" /> 
                <span>Certificado Oficial de Participación (Validación QR AUXILIARPRO)</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-bold text-slate-700">
                <CheckCircle size={16} className="text-[#28a745]" /> 
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
                  Cuenta PRO Activa
                </button>
              ) : (
                <button 
                  onClick={() => abrirConfirmacionPago("mensual")}
                  disabled={loadingCheckout !== null}
                  className="w-full bg-[#28a745] text-white hover:bg-[#218838] font-black py-4 rounded-xl transition-all text-center text-sm shadow-lg shadow-[#28a745]/30 flex items-center justify-center gap-2"
                >
                  {loadingCheckout === "mensual" ? <Loader2 className="animate-spin" size={18} /> : "Plan Mensual"}
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* POPUP (MODAL) INTERCEPTOR DE PAGO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-md rounded-3xl border-2 border-[#28a745]/20 shadow-2xl p-6 md:p-8 relative transform scale-100 transition-all">
            
            {/* Botón cerrar X */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              <X size={20} />
            </button>

            {/* Icono Confirmación */}
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#28a745]/10 text-[#28a745] mb-6 border border-[#28a745]/20">
              <CheckCircle size={24} className="stroke-[2.5]" />
            </div>

            {/* Contenido */}
            <div className="text-center">
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Confirmar Compra
              </h3>
              <p className="text-slate-600 text-sm font-bold leading-relaxed mb-6">
                Estás a punto de adquirir el plan <span className="text-[#003366] underline">{getNombrePlan(planSeleccionado)}</span>. Serás redirigido a Mercado Pago para completar tu transacción de forma segura y tu acceso se activará automáticamente.
              </p>

              {/* Botones de acción */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={confirmarYProcesarPago}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#28a745] hover:bg-[#218838] text-white font-black py-4 rounded-xl transition-all text-sm shadow-md"
                >
                  Continuar al Pago <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold py-3 rounded-xl transition-all text-xs"
                >
                  Volver a los planes
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}