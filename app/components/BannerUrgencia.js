"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { db, auth } from '../firebase/config'; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function BannerUrgencia() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: '00', min: '00', seg: '00' });
  const [isEventActive, setIsEventActive] = useState(false);
  
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  function calculateTimeLeft() {
    const ahora = new Date();
    const startDate = new Date("2026-06-01T00:00:00");
    const endDate = new Date("2026-06-07T23:59:59");
    
    let targetDate = startDate;
    let active = false;

    // Si ya pasamos el 1 de Junio pero aún no termina el 7 de Junio
    if (ahora >= startDate && ahora <= endDate) {
      targetDate = endDate;
      active = true;
    }

    const difference = targetDate - ahora;
    let newTimeLeft = { dias: 0, horas: '00', min: '00', seg: '00' };
    
    if (difference > 0) {
      newTimeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        min: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seg: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }

    // Actualizamos el estado de la UI solo si cambia el periodo
    if (isEventActive !== active) {
      setIsEventActive(active);
    }

    return newTimeLeft;
  }

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

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

    return () => { clearInterval(timer); unsubscribeAuth(); };
  }, [isEventActive]);

  const handleAccionBoton = async () => {
    // SI EL EVENTO NO HA EMPEZADO: Mandar directo a tu post oficial de Facebook para acumular interacciones
    if (!isEventActive) {
        window.open('https://www.facebook.com/share/p/18ULBXPQmx/', '_blank');
        return;
    }

    // SI EL EVENTO YA EMPEZÓ: Ejecutar flujo de conversión e ir a la sección de planes
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
        origen: 'banner_top_cyberday_2026',
        cuponAsignado: 'CYBER_PRO_2026'
      });

      fetch('https://hook.us2.make.com/r8r94dlmw5a6l4kvwfshfqu7byu3q3h7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: usuario.displayName || 'Usuario AuxiliarPro',
          email: usuario.email,
          cupon: 'CYBER_PRO_2026'
        })
      }).catch(err => console.error("Webhook skip:", err));

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
    <div className="bg-[#003366] text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 shadow-[0_4px_30px_rgba(40,167,69,0.2)] z-50 relative w-full overflow-hidden border-b-2 border-[#28a745]">
      
      {/* Efecto de Brillo Cyber de Fondo */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#28a745] rounded-full blur-[100px] opacity-25 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500 rounded-full blur-[80px] opacity-15 -ml-20 -mb-20 pointer-events-none"></div>

      {/* Textos Principales */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-center max-w-full relative z-10">
        <div className="bg-[#28a745] text-white font-black text-xs px-2 py-0.5 rounded-md tracking-wider uppercase shadow-[0_0_10px_rgba(40,167,69,0.5)] animate-pulse">
          ⚡ CYBERPRO WEEK
        </div>
        <span className="leading-tight text-white font-bold tracking-tight">
          ¡Llegó el CyberDay! Descuentos brutales del 01 al 07 de Junio.
        </span>
        <span className="hidden lg:inline opacity-30 text-white">|</span>
        <span className="leading-tight text-emerald-400 font-extrabold italic">
          Campus Virtual y Simulador SEREMI al precio más bajo del año
        </span>
      </div>
      
      {/* Contador Regresivo Inteligente */}
      <div className="flex items-center gap-1.5 font-mono text-xs md:text-sm relative z-10 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 shadow-inner">
        <span className="text-white/60 font-sans text-[10px] uppercase font-bold tracking-wider mr-1">
          {isEventActive ? "Cierra en:" : "Faltan:"}
        </span>
        <div className="flex flex-col items-center">
          <span className="text-white font-black text-sm md:text-base">{timeLeft.dias}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Días</span>
        </div>
        <span className="text-[#28a745] font-black animate-ping text-xs">:</span>
        <div className="flex flex-col items-center">
          <span className="text-[#28a745] font-black text-sm md:text-base">{timeLeft.horas}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Hrs</span>
        </div>
        <span className="text-[#28a745] font-black">:</span>
        <div className="flex flex-col items-center">
          <span className="text-[#28a745] font-black text-sm md:text-base">{timeLeft.min}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Min</span>
        </div>
        <span className="text-[#28a745] font-black">:</span>
        <div className="flex flex-col items-center w-5">
          <span className="text-cyan-400 font-black text-sm md:text-base">{timeLeft.seg}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Seg</span>
        </div>
      </div>
      
      {/* Botón de Acción con Enlace a Redes Sociales */}
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
          {inscrito && isEventActive
            ? 'VER PRECIOS CYBER ✓' 
            : cargando 
              ? 'PROCESANDO...' 
              : isEventActive 
                ? 'VER PRECIOS CYBER →' 
                : 'VER PUBLICACIÓN CYBER →'}
        </button>
      </div>
    </div>
  );
}