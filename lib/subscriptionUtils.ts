// ============================================================
// AuxiliarPro SpA · /lib/subscriptionUtils.ts
// Fuente única de verdad del estado de suscripción PRO.
// Consumido por: BannerVencimientoPro y GuardProQuiz.
// ============================================================

export type SubState = "active" | "warning" | "critical" | "expired" | "none";

export interface SubStatus {
  isPro: boolean;
  state: SubState;
  daysLeft: number | null;
  expiryDate: Date | null;
}

/**
 * Parser "Bulletproof" de fechas Firestore:
 * Timestamp nativo, objeto {seconds}, ISO, DD-MM-YYYY y "09 de mayo de 2026".
 */
export const parseFirestoreDate = (val: unknown): Date | null => {
  if (!val) return null;
  const v = val as any;

  if (typeof v.toDate === "function") return v.toDate();
  if (typeof v.seconds === "number") return new Date(v.seconds * 1000);

  if (typeof v === "string") {
    const s = v.trim().toLowerCase();

    // ISO / YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
      const d = new Date(v);
      if (!isNaN(d.getTime())) return d;
    }

    // Formato chileno DD-MM-YYYY o DD/MM/YYYY
    const cl = s.match(/^(\d{2})[-/](\d{2})[-/](\d{4})/);
    if (cl) {
      return new Date(parseInt(cl[3], 10), parseInt(cl[2], 10) - 1, parseInt(cl[1], 10), 23, 59, 59, 999);
    }

    // Texto "09 de mayo de 2026"
    const months: Record<string, number> = {
      enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
      julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11,
    };
    const parts = s.replace(/de /g, "").split(" ");
    if (parts.length >= 3 && months[parts[1]] !== undefined) {
      return new Date(parseInt(parts[2], 10), months[parts[1]], parseInt(parts[0], 10), 23, 59, 59, 999);
    }
  }

  const d = new Date(v as string);
  return isNaN(d.getTime()) ? null : d;
};

/**
 * Semáforo de suscripción:
 * 🟢 active  → más de 7 días
 * 🟡 warning → 7 días o menos
 * 🔴 critical→ 2 días o menos
 * ⚫ expired → vencido
 * ⚪ none    → nunca ha sido PRO
 */
export const getSubscriptionStatus = (
  data: Record<string, any> | null | undefined,
  isAdmin = false
): SubStatus => {
  if (!data) return { isPro: false, state: "none", daysLeft: null, expiryDate: null };
  if (isAdmin) return { isPro: true, state: "active", daysLeft: null, expiryDate: null };

  const isPro = data.isPro === true;
  const rawDates = [data.untilPro, data.untilpro, data.proUntil, data.prountil];
  const dates = rawDates.map(parseFirestoreDate).filter((d): d is Date => d !== null);

  if (dates.length === 0) {
    return { isPro, state: isPro ? "active" : "none", daysLeft: null, expiryDate: null };
  }

  const expiry = new Date(Math.max(...dates.map((d) => d.getTime())));
  expiry.setHours(23, 59, 59, 999);

  const now = new Date();
  if (expiry.getTime() < now.getTime()) {
    return { isPro: false, state: "expired", daysLeft: 0, expiryDate: expiry };
  }

  const daysLeft = Math.ceil((expiry.getTime() - now.getTime()) / 86400000);

  if (daysLeft <= 2) return { isPro: true, state: "critical", daysLeft, expiryDate: expiry };
  if (daysLeft <= 7) return { isPro: true, state: "warning", daysLeft, expiryDate: expiry };
  return { isPro: true, state: "active", daysLeft, expiryDate: expiry };
};

export const formatDays = (n: number): string => (n === 1 ? "1 día" : `${n} días`);