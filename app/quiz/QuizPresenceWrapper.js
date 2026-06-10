"use client";

import { useEffect } from "react";
// 🚀 CTO FIX: Usando la ruta relativa exacta certificada para tu árbol de directorios
import { auth, db } from "../firebase/config"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";

/**
 * < macz.dev />
 * ARCHIVO: QuizPresenceWrapper - Lado del Cliente (Rastreador Directo & Listener Realtime v4.0)
 */
export default function QuizPresenceWrapper({ children }) {
  useEffect(() => {
    let activeDocRef = null;
    let unsubscribeSnapshot = null;

    // 1. Escuchamos de forma reactiva el estado de autenticación de Firebase
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      try {
        if (currentUser) {
          const uid = currentUser.uid;
          const emailUser = currentUser.email ? currentUser.email.toLowerCase().trim() : `usuario_${uid.substring(0, 5)}@auxiliarpro.cl`;

          // --- SECCIÓN A: SISTEMA DE PRESENCIA ACTIVA ---
          activeDocRef = doc(db, "active_sessions", uid);
          
          setDoc(activeDocRef, {
            uid: uid,
            email: emailUser,
            lastHeartbeat: new Date(), // Usamos Date nativo en Client Components para evitar colisiones
            status: "estudiando",
            online: true
          }, { merge: true })
          .then(() => {
            console.log("📡 [RADAR] Conexión activa persistida para:", emailUser);
          })
          .catch((err) => {
            console.error("❌ [RADAR] Error al escribir presencia:", err);
          });

          // --- SECCIÓN B: LISTENER EN TIEMPO REAL (Fisgoneo de Estado Pro) ---
          const userDocRef = doc(db, "users", uid);
          
          // Abrimos el canal "en vivo" para escuchar de inmediato el impacto del Webhook o tus cambios manuales
          unsubscribeSnapshot = onSnapshot(userDocRef, async (docSnap) => {
            if (docSnap.exists()) {
              const data = docSnap.data();
              let currentIsPro = data.isPro || false;
              let currentProUntil = null;

              // 🛡️ SANITIZACIÓN Y CONTROL DE FORMATO DE FECHAS (String vs Timestamp)
              if (data.proUntil) {
                if (typeof data.proUntil.toDate === "function") {
                  // Caso Webhook / Automatización: Formato Timestamp oficial de Firebase
                  currentProUntil = data.proUntil.toDate();
                } else if (typeof data.proUntil === "string" || typeof data.proUntil === "number") {
                  // Caso Consola / Rescate Manual: Formato de texto plano introducido a mano
                  currentProUntil = new Date(data.proUntil);
                }
              }

              // Expiración Pasiva de seguridad en caliente (UI Guard)
              if (currentIsPro && currentProUntil && new Date() > currentProUntil) {
                try {
                  await updateDoc(userDocRef, { isPro: false });
                  console.log("⏳ [RADAR] Membresía expirada detectada. Estado actualizado a false.");
                } catch (updateErr) {
                  console.error("Error al actualizar expiración pasiva:", updateErr);
                }
              }
            }
          }, (error) => {
            console.error("❌ [RADAR] Error en el canal de escucha en tiempo real:", error);
          });

        } else {
          // Si el usuario se desloguea, limpiamos todos los triggers y la sesión activa
          if (unsubscribeSnapshot) {
            unsubscribeSnapshot();
            unsubscribeSnapshot = null;
          }
          if (activeDocRef) {
            deleteDoc(activeDocRef).catch(() => {});
            activeDocRef = null;
          }
        }
      } catch (error) {
        console.error("❌ [RADAR] Error crítico en el sub-sistema de presencia/sincronización:", error);
      }
    });

    // Captura de cierre abrupto de pestañas o navegadores móviles
    const handleBeforeUnload = () => {
      if (auth.currentUser) {
        const docRef = doc(db, "active_sessions", auth.currentUser.uid);
        deleteDoc(docRef).catch(() => {});
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Desmontado limpio del layout para evitar fugas de memoria
    return () => {
      unsubscribeAuth();
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (unsubscribeSnapshot) unsubscribeSnapshot();
      if (activeDocRef) {
        deleteDoc(activeDocRef).catch(() => {});
      }
    };
  }, []);

  return <>{children}</>;
}