// lib/guardarSolicitud.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import type { DatosCertificado } from "./rellenarCertificado";

// Conexión "perezosa": solo se inicializa si hay claves configuradas.
// Si tu app ya inicializó Firebase en otro archivo, reutiliza esa instancia.
function getDb() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  if (!config.apiKey || !config.projectId) {
    console.warn("[AuxiliarPro] Firebase no configurado: la solicitud no se guardará en la nube.");
    return null;
  }

  const app = getApps().length > 0 ? getApp() : initializeApp(config);
  return getFirestore(app);
}

export async function guardarSolicitud(
  datos: DatosCertificado
): Promise<{ ok: boolean; id?: string; motivo?: string }> {
  try {
    const db = getDb();
    if (!db) return { ok: false, motivo: "firebase-no-configurado" };

    const docRef = await addDoc(collection(db, "solicitudes"), {
      ...datos,
      estado: "pendiente",
      origen: "formulario-certificado",
      creadoEn: new Date().toISOString(),
    });

    return { ok: true, id: docRef.id };
  } catch (error) {
    const codigo = (error as { code?: string })?.code || "error-desconocido";
    console.error("[AuxiliarPro] Error al guardar la solicitud:", error);
    return { ok: false, motivo: codigo };
  }
}