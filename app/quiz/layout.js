"use client";

import { useEffect } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore";

export const metadata = {
  title: "Simulador AuxiliarPro v4.0 | Examen Auxiliar de Farmacia SEREMI 2026",
  description: "Entrena con el simulador más avanzado de Chile. +15 niveles técnicos, evaluación global SEREMI y preparación exhaustiva basada en los Decretos 466, 404 y 405.",
  keywords: [
    "simulador examen farmacia chile", 
    "practica examen seremi 2026", 
    "test auxiliar de farmacia", 
    "preparación decreto 466",
    "estudiar para auxiliar de farmacia"
  ],
  alternates: {
    canonical: 'https://auxiliaresdefarmacia.cl/quiz',
  },
  openGraph: {
    title: "Simulador AuxiliarPro v4.0",
    description: "Preparación técnica para Auxiliares de Farmacia. Certificación SEREMI Chile.",
    type: "website",
  },
};

/**
 * < macz.dev />
 * ARCHIVO: QuizLayout - Motor Unificado + Sistema de Presencia Activa
 */

export default function QuizLayout({ children }) {
  
  useEffect(() => {
    let activeDocRef = null;

    // Escuchamos de forma reactiva si el alumno tiene una sesión iniciada
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser && currentUser.email) {
          // Creamos la referencia en una colección dedicada a los conectados en este instante
          activeDocRef = doc(db, "active_sessions", currentUser.uid);
          
          // Anotamos al alumno en la lista de conectados
          await setDoc(activeDocRef, {
            uid: currentUser.uid,
            email: currentUser.email.toLowerCase().trim(),
            lastHeartbeat: serverTimestamp(),
            status: "estudiando"
          });
          
          console.log(`📡 Presencia activada: ${currentUser.email} está en línea.`);
        } else {
          // Si el usuario no está logueado o cierra sesión de forma limpia, limpiamos su rastro
          if (activeDocRef) {
            await deleteDoc(activeDocRef);
            activeDocRef = null;
          }
        }
      } catch (error) {
        console.error("Error en el sistema de presencia activa:", error);
      }
    });

    // 🛡️ CAPTURA DE SALIDA (Pestaña cerrada, F5 o bloqueo de teléfono)
    const handleBeforeUnload = () => {
      // Intentamos borrar el registro inmediatamente si el navegador va a cerrarse
      if (auth.currentUser && db) {
        const docRef = doc(db, "active_sessions", auth.currentUser.uid);
        // Usamos la API nativa de Firebase pero de forma síncrona/rápida en el evento de cierre
        deleteDoc(docRef).catch(() => {});
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Limpieza al desmontar el layout o cambiar de sección global
    return () => {
      unsubscribeAuth();
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (activeDocRef) {
        deleteDoc(activeDocRef).catch(() => {});
      }
    };
  }, []);

  return <>{children}</>;
}