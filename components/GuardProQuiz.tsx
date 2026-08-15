"use client";

// ============================================================
// AuxiliarPro SpA · /components/GuardProQuiz.tsx
// CANDADO DE GRACIA: si el plan vence a mitad de una sesión, el
// estudiante la termina con calma (barra ámbar). Al intentar iniciar
// OTRO simulador → modal de renovación con mensaje diferenciado
// ("Desbloquear" si nunca pagó · "Renovar" si ya fue PRO).
// Uso: <GuardProQuiz sessionId="pro-eval-global"> ...quiz... </GuardProQuiz>
// ============================================================

import { useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import Link from "next/link";
import { Loader2, LockKeyhole, Hourglass, ShieldCheck, ArrowLeft } from "lucide-react";
import { getSubscriptionStatus } from "../lib/subscriptionUtils";

const GRACE_WINDOW_MS = 6 * 60 * 60 * 1000; // Ventana máxima de sesión: 6 horas

interface GraceFlag {
  startedAt: number;
  expiryAt: number | null;
}

export default function GuardProQuiz({ children, sessionId }: { children: ReactNode; sessionId: string }) {
  const [access, setAccess] = useState<"loading" | "full" | "grace" | "locked">("loading");
  const [neverPaid, setNeverPaid] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setNeverPaid(true);
        setAccess("locked");
        return;
      }
      try {
        const isAdmin = user.email === "marcar1972@gmail.com"; // TODO: mover a variable de entorno
        const snap = await getDoc(doc(db, "users", user.uid));
        const status = getSubscriptionStatus(snap.exists() ? snap.data() : null, isAdmin);
        const key = `auxpro_grace_${user.uid}_${sessionId}`;

        // 🟢 Suscripción vigente: sella la sesión actual como "iniciada en regla".
        if (status.state === "active" || status.state === "warning" || status.state === "critical") {
          const flag: GraceFlag = { startedAt: Date.now(), expiryAt: status.expiryDate?.getTime() ?? null };
          sessionStorage.setItem(key, JSON.stringify(flag));
          setAccess("full");
          return;
        }

        // ⚫ Vencido o sin plan: ¿la sesión actual comenzó ANTES del vencimiento?
        const raw = sessionStorage.getItem(key);
        if (raw) {
          const flag = JSON.parse(raw) as GraceFlag;
          const startedWhileValid = flag.expiryAt !== null && flag.startedAt <= flag.expiryAt;
          const withinWindow = Date.now() - flag.startedAt < GRACE_WINDOW_MS;
          if (startedWhileValid && withinWindow) {
            setAccess("grace"); // Termina esta sesión, pero no inicia nuevas.
            return;
          }
        }

        setNeverPaid(status.state === "none");
        setAccess("locked");
      } catch {
        setAccess("locked");
      }
    });
    return () => unsubscribe();
  }, [sessionId]);

  if (access === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-[#003366]" size={44} aria-hidden="true" />
      </div>
    );
  }

  if (access === "full") return <>{children}</>;

  // ⏳ MODO GRACIA: termina la sesión actual sin castigo.
  if (access === "grace") {
    return (
      <>
        {children}
        <div className="fixed bottom-0 left-0 right-0 z-[60] bg-amber-500 text-slate-900 px-4 py-3 shadow-2xl" role="status">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <p className="text-xs md:text-sm font-bold flex items-center gap-2">
              <Hourglass size={16} className="shrink-0" aria-hidden="true" />
              Tu plan PRO venció mientras estudiabas: termina esta sesión con calma. Para el siguiente simulacro, renueva tu acceso.
            </p>
            <Link
              href="/planes"
              className="shrink-0 bg-slate-900 text-white text-xs font-black px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Renovar mi plan
            </Link>
          </div>
        </div>
      </>
    );
  }

  // 🔒 BLOQUEADO: modal de renovación / desbloqueo.
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-10 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
          <LockKeyhole className="text-red-600" size={36} aria-hidden="true" />
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-[#003366] mb-3">
          {neverPaid ? "Contenido exclusivo PRO" : "Tu plan PRO acaba de vencer"}
        </h1>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          {neverPaid
            ? "Este simulador forma parte del Campus Virtual PRO. Desbloquea el banco completo de preguntas SEREMI 2026 con explicaciones paso a paso."
            : "¡Casi lo logras! Tu acceso expiró justo cuando entrenabas. Renueva tu plan y recupera al instante el Simulador Fiscalizador, el Examen Final y todo tu historial de progreso."}
        </p>

        <Link
          href="/planes"
          className="block w-full bg-[#28a745] hover:bg-[#218838] text-white font-black py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] mb-3"
        >
          {neverPaid ? "DESBLOQUEAR CAMPUS PRO" : "RENOVAR PRO AHORA"}
        </Link>

        <Link
          href="/campus"
          className="flex items-center justify-center gap-2 w-full text-slate-500 hover:text-[#003366] text-sm font-semibold py-2 transition-colors"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Volver al Campus
        </Link>

        <p className="mt-6 text-[11px] text-slate-400 font-semibold uppercase tracking-widest flex items-center justify-center gap-2">
          <ShieldCheck size={14} className="text-[#28a745]" aria-hidden="true" />
          Planes de 15, 30 y 365 días · Pago único · Sin renovación automática
        </p>
      </div>
    </main>
  );
}