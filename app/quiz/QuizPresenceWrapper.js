"use client";

import { useEffect } from "react";
// 🚀 CTO FIX: Cambiada la ruta de importación a relativa exacta hacia la raíz para que Vercel no falle por falta de alias
import { auth, db } from "../../firebase/config"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore";

/**
 * < macz.dev />
 * ARCHIVO: QuizPresenceWrapper - Lado del Cliente (Rastreador Directo v3.1)
 */
export default function QuizPresenceWrapper({ children }) {
  useEffect(() => {
    let activeDocRef = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      try {
        if (currentUser) {
          // Capturamos el UID de forma segura
          const uid = currentUser.uid;
          // Si el email no viene listo, usamos un fallback basado en su proveedor o UID para que no falle
          const emailUser = currentUser.email ? currentUser.email.toLowerCase().trim() : `usuario_${uid.substring(0, 5)}@auxiliarpro.cl`;

          activeDocRef = doc(db, "active_sessions", uid);
          
          // Forzamos la escritura directa en Firestore
          setDoc(activeDocRef, {
            uid: uid,
            email: emailUser,
            lastHeartbeat: serverTimestamp(),
            status: "estudiando",
            online: true
          }, { merge: true })
          .then(() => {
            console.log("📡 [RADAR] Conexión grabada con éxito en Firestore para:", emailUser);
          })
          .catch((err) => {
            console.error("❌ [RADAR] Error al escribir en Firestore:", err);
          });

        } else {
          // Si no está logueado o sale, limpiamos la sesión activa
          if (activeDocRef) {
            deleteDoc(activeDocRef).catch(() => {});
            activeDocRef = null;
          }
        }
      } catch (error) {
        console.error("❌ [RADAR] Error crítico en el sub-sistema de presencia:", error);
      }
    });

    // Captura de cierre de pestaña/navegador
    const handleBeforeUnload = () => {
      if (auth.currentUser) {
        const docRef = doc(db, "active_sessions", auth.currentUser.uid);
        deleteDoc(docRef).catch(() => {});
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

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