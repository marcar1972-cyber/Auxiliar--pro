"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { db, auth } from '../firebase/config'; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function BannerUrgencia() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUsuario(user);
        const q = query(
          collection(db, "lista_espera_pro"), 
          where("email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setInscrito(true);
        }
      } else {
        setUsuario(null);
      }
    });

    return () => { unsubscribeAuth(); };
  }, []);

  const handleAccionBoton = async () => {
    if (!usuario) { 
        router.push('/login'); 
        return; 
    }
    
    if (inscrito) {
        router.push('/planes');
        return;
    }

    setCargando(true);
    try {
      await addDoc(collection(db, 'lista_espera_pro'), {
        nombre: usuario.displayName || 'Usuario AuxiliarPro',
        email: usuario.email,
        uid: usuario.uid,
        fechaRegistro: new Date(),
        origen: 'banner_top_auxiliarpro',
        cuponAsignado: 'AUXILIARPRO_2026'
      });

      setInscrito(true);
      router.push('/planes');

    } catch (error) {
      console.error("Error en registro:", error);
      router.push('/planes');
    } finally { 
      setCargando(false); 
    }
  };

  if (!isMounted) return null;

  return (
    <div className="bg-[#0b2545] text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 shadow-[0_4px_30px_rgba(40,167,69,0.2)] z-50 relative w-full overflow-hidden border-b-2 border-[#28a745]">
      
      {/* Efecto de Brillo de Fondo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#28a745] rounded-full blur-[100px] opacity-25 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full blur-[80px] opacity-15 -ml-20 -mb-20 pointer-events-none"></div>

      {/* Textos Principales */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-center max-w-full relative z-10">
        <div className="bg-[#28a745] text-white font-black text-xs px-2 py-0.5 rounded-md tracking-wider uppercase shadow-[0_0_10px_rgba(40,167,69,0.5)]">
          🎯 DÍA DEL PADRE: INVIERTE EN TI
        </div>
        <span className="leading-tight text-white font-bold tracking-tight">
          Para el papá que estudia después del turno: domina el examen SEREMI con la plataforma más rápida y efectiva
        </span>
        <span className="hidden lg:inline opacity-30 text-white">|</span>
        <span className="leading-tight text-emerald-400 font-extrabold italic">
          Campus Virtual + Simulador + Legislación Actualizada
        </span>
      </div>
      
      {/* Botón de Acción Directo a Pagos */}
      <div className="flex flex-row items-center gap-2 shrink-0 relative z-10 mt-1 lg:mt-0">
        <button 
          onClick={handleAccionBoton}
          disabled={cargando}
          className={`shrink-0 px-6 py-2 rounded-xl text-xs md:text-sm font-black transition-all uppercase tracking-wider border border-white/20 shadow-[0_0_15px_rgba(40,167,69,0.4)] ${
            cargando
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-[#28a745] text-white hover:bg-[#218838] hover:scale-105 cursor-pointer active:scale-95 shadow-[#28a745]/30'
          }`}
        >
          {inscrito 
            ? 'VER PLANES ✓' 
            : cargando 
              ? 'PROCESANDO...' 
              : 'VER PLANES →'}
        </button>
      </div>
    </div>
  );
}