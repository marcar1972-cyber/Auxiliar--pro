"use client";

// ============================================================
// AuxiliarPro SpA · /components/BannerVencimientoPro.tsx
// Semáforo de retención PRO: avisa ANTES del churn y ofrece
// renovación con 1 clic hacia /planes.
// Integración: <BannerVencimientoPro /> en CampusPage (y dashboard).
// ============================================================

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, Siren, CalendarX } from "lucide-react";
import { getSubscriptionStatus, formatDays, type SubStatus } from "../lib/subscriptionUtils";

export default function BannerVencimientoPro() {
  const [status, setStatus] = useState<SubStatus | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setStatus(null);
        return;
      }
      try {
        const isAdmin = user.email === "marcar1972@gmail.com"; // TODO: mover a variable de entorno
        const snap = await getDoc(doc(db, "users", user.uid));
        setStatus(getSubscriptionStatus(snap.exists() ? snap.data() : null, isAdmin));
      } catch {
        setStatus(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Usuario free (nunca PRO): el banner no se muestra; el Campus ya muestra candados.
  if (!status || status.state === "none") return null;

  // 🟢 ACCESO ACTIVO
  if (status.state === "active") {
    return (
      <div className="w-full bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 flex items-center gap-3" role="status">
        <ShieldCheck className="text-[#28a745] shrink-0" size={22} aria-hidden="true" />
        <p className="text-sm font-semibold text-emerald-800">
          Acceso PRO activo{status.daysLeft !== null ? ` · ${formatDays(status.daysLeft)} disponibles para tu certificación SEREMI` : ""}. ¡Sigue así!
        </p>
      </div>
    );
  }

  // 🟡 VENCE EN ≤ 7 DÍAS
  if (status.state === "warning") {
    return (
      <div className="w-full bg-amber-50 border-2 border-amber-300 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4" role="alert">
        <div className="flex items-center gap-3 flex-1">
          <AlertTriangle className="text-amber-600 shrink-0" size={24} aria-hidden="true" />
          <p className="text-sm font-semibold text-amber-900">
            Tu acceso PRO vence en {formatDays(status.daysLeft ?? 0)}. Renueva hoy y no pierdas tu racha de estudio.
          </p>
        </div>
        <Link
          href="/planes"
          className="shrink-0 text-center bg-[#003366] hover:bg-[#004a99] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
        >
          Renovar PRO
        </Link>
      </div>
    );
  }

  // 🔴 VENCE EN ≤ 2 DÍAS
  if (status.state === "critical") {
    return (
      <div className="w-full bg-red-50 border-2 border-red-300 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4" role="alert">
        <div className="flex items-center gap-3 flex-1">
          <Siren className="text-red-600 shrink-0 animate-pulse" size={24} aria-hidden="true" />
          <p className="text-sm font-bold text-red-900">
            ¡Última alerta! Tu acceso PRO vence {status.daysLeft === 1 ? "mañana" : `en ${formatDays(status.daysLeft ?? 0)}`}. Asegura tu preparación antes del examen.
          </p>
        </div>
        <Link
          href="/planes"
          className="shrink-0 text-center bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
        >
          Renovar PRO ahora
        </Link>
      </div>
    );
  }

  // ⚫ EXPIRADO
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4" role="alert">
      <div className="flex items-center gap-3 flex-1">
        <CalendarX className="text-red-400 shrink-0" size={24} aria-hidden="true" />
        <p className="text-sm font-semibold text-slate-200">
          Tu plan PRO expiró. Renueva y recupera al instante el Simulador Fiscalizador, el Examen Final y tu historial.
        </p>
      </div>
      <Link
        href="/planes"
        className="shrink-0 text-center bg-[#28a745] hover:bg-[#218838] text-white text-sm font-black px-5 py-2.5 rounded-xl transition-colors"
      >
        Renovar PRO · 30 días
      </Link>
    </div>
  );
}