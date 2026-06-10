"use client";

import { useEffect } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore";

/**
 * < macz.dev />
 * ARCHIVO: QuizPresenceWrapper - Lado del Cliente (Rastreador en Vivo)
 */
export default function QuizPresenceWrapper({ children }) {
  useEffect(() => {
    let activeDocRef = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser && currentUser.email) {
          activeDocRef = doc(db, "active_sessions", currentUser.uid);
          
          await setDoc(activeDocRef, {
            uid: currentUser.uid,
            email: currentUser.email.toLowerCase().trim(),
            lastHeartbeat: serverTimestamp(),
            status: "estudiando"
          });
          
          console.log(`📡 Presencia activada: ${currentUser.email} está en línea.`);
        } else {
          if (activeDocRef) {
            await deleteDoc(activeDocRef);
            activeDocRef = null;
          }
        }
      } catch (error) {
        console.error("Error en el sistema de presencia activa:", error);
      }
    });

    const handleBeforeUnload = () => {
      if (auth.currentUser && db) {
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