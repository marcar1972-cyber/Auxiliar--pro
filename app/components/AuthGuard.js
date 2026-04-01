"use client";

import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot, updateDoc, setDoc, getDoc } from "firebase/firestore";
import { AlertTriangle } from "lucide-react";

/**
 * < macz.dev />
 * COMPONENTE: AuthGuard (Session Lock / Anti-Cuentas Compartidas)
 * UBICACIÓN: components/AuthGuard.js
 * FUNCIÓN: Escucha en tiempo real si la sesión se abre en otro dispositivo y la bloquea.
 */

export default function AuthGuard({ children }) {
  const [isLockedOut, setIsLockedOut] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Generar o recuperar la Huella Digital del dispositivo local
    let localDeviceId = localStorage.getItem("auxiliarpro_device_id");
    if (!localDeviceId) {
      localDeviceId = window.crypto.randomUUID 
        ? window.crypto.randomUUID() 
        : Math.random().toString(36).substring(2, 15);
      localStorage.setItem("auxiliarpro_device_id", localDeviceId);
    }

    let unsubscribeSnapshot = null;

    // 2. Escuchar cambios de autenticación del usuario
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        
        // 3. Registrar este dispositivo como el "Activo" en Firestore al entrar
        try {
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
             await updateDoc(userRef, { currentDeviceId: localDeviceId });
          } else {
             // Si el documento de usuario apenas se está creando
             await setDoc(userRef, { currentDeviceId: localDeviceId }, { merge: true });
          }
        } catch (error) {
          console.error("Error al registrar el dispositivo:", error);
        }

        // 4. Vigilar la cuenta en Tiempo Real (La magia del CTO)
        unsubscribeSnapshot = onSnapshot(userRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            // Si el ID de la base de datos cambia y ya no coincide con esta máquina
            if (data.currentDeviceId && data.currentDeviceId !== localDeviceId) {
              signOut(auth);
              setIsLockedOut(true);
            }
          }
        });
        
        setLoading(false);
      } else {
        // Usuario no está logueado
        if (unsubscribeSnapshot) unsubscribeSnapshot();
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, []);

  // Interfaz de Bloqueo (Pantalla Roja de Seguridad)
  if (isLockedOut) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="bg-red-500/10 border border-red-500/20 p-8 md:p-12 rounded-[2rem] max-w-md w-full relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-red-500/20 blur-[80px]"></div>
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-500/30 transform rotate-3">
              <AlertTriangle size={40} />
            </div>
            
            <h2 className="text-3xl font-black text-white tracking-tighter mb-4 uppercase">
              Sesión <span className="text-red-500">Duplicada</span>
            </h2>
            
            <p className="text-slate-300 text-sm font-medium mb-10 leading-relaxed">
              Tu cuenta de AuxiliarPro está siendo utilizada en otro dispositivo o navegador. Para proteger la seguridad de tu suscripción, hemos cerrado esta sesión automáticamente.
            </p>
            
            <button 
              onClick={() => window.location.reload()} 
              className="w-full py-4 bg-white hover:bg-slate-200 text-slate-900 rounded-2xl font-black text-sm transition-transform active:scale-95 uppercase tracking-widest"
            >
              Entendido, volver al inicio
            </button>
          </div>
        </div>
        
        <p className="text-slate-600 text-[10px] mt-10 uppercase tracking-[0.2em] font-bold">
          Sistema de Seguridad • AuxiliarPro v3.0
        </p>
      </div>
    );
  }

  // Renderiza la app normalmente si no hay bloqueo
  return <>{children}</>;
}

{/* < macz.dev /> */}