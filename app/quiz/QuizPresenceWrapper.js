"use client";

import { useEffect } from "react";
// 🚀 CTO FIX: Ajustada la ruta a un solo nivel según la estructura verificada de tu app
import { auth, db } from "../firebase/config"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore";

/**
 * < macz.dev />
 * ARCHIVO: QuizPresenceWrapper - Lado del Cliente (Rastreador Directo v3.2)
 */
export default function QuizPresenceWrapper({ children }) {
  useEffect(() => {
    let activeDocRef = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      try {
        if (currentUser) {
          const uid = currentUser.uid;
          const emailUser = currentUser.email ? currentUser.email.toLowerCase().trim() : `usuario_${uid.substring(0, 5)}@auxiliarpro.cl`;

          activeDocRef = doc(db, "active_sessions", uid);
          
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
          if (activeDocRef) {
            deleteDoc(activeDocRef).catch(() => {});
            activeDocRef = null;
          }
        }
      } catch (error) {
        console.error("❌ [RADAR] Error crítico en el sub-sistema de presencia:", error);
      }
    });

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