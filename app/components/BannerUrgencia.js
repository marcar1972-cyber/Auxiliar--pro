"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { db, auth } from '../firebase/config'; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function BannerUrgencia() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });
  
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  function calculateTimeLeft() {
    // ⚡ OBJETIVO: 07 de Abril 2026
    const targetDate = new Date("2026-04-07T23:59:59");
    const difference = targetDate - new Date();
    let newTimeLeft = { dias: 0, horas: 0, min: 0, seg: 0 };
    
    if (difference > 0) {
      newTimeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60)
      };
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
  }, []);

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  const handleAccionBoton = async () => {
    if (!usuario) { router.push('/login'); return; }
    
    // Si ya está inscrito, el botón funciona como acceso directo a planes
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
        origen: 'banner_urgencia_top_blacksale',
        cuponAsignado: 'BLACKSALE_ABRIL'
      });

      // Integración con Make/Webhook
      await fetch('https://hook.us2.make.com/r8r94dlmw5a6l4kvwfshfqu7byu3q3h7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: usuario.displayName || 'Usuario AuxiliarPro',
          email: usuario.email,
          cupon: 'BLACKSALE_ABRIL_40'
        })
      });

      setInscrito(true);
      // Redirección inmediata tras éxito para cerrar la venta
      router.push('/planes');

    } catch (error) {
      console.error(error);
      alert("Error de conexión.");
    } finally { setCargando(false); }
  };

  if (!isMounted) return null;

  return (
    <div className="bg-slate-950 text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 shadow-xl z-50 relative w-full overflow-hidden border-b border-emerald-500/30">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-center max-w-full relative z-10">
        <span className="leading-tight text-slate-300">
          🔥 <strong className="text-white uppercase tracking-widest">Black Sale</strong>
        </span>
        <span className="hidden md:inline opacity-30 text-emerald-500">|</span>
        <span className="leading-tight text-emerald-400 font-bold">
          Hasta 40% OFF en Nivel PRO
        </span>
        <span className="hidden md:inline opacity-30 text-emerald-500">|</span>
        <span className="leading-tight text-yellow-300 font-black animate-pulse">
          Quedan {timeLeft.dias} días para que termine esta oferta
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
        
        <div className="flex gap-1.5 font-mono bg-black px-3 py-1.5 rounded-lg text-sm md:text-base border border-slate-800 shadow-inner text-emerald-400">
          <span className="font-bold">{timeLeft.dias}d</span>
          <span className="opacity-50">:</span>
          <span>{formatTime(timeLeft.horas)}h</span>
          <span className="opacity-50">:</span>
          <span>{formatTime(timeLeft.min)}m</span>
          <span className="opacity-50">:</span>
          <span>{formatTime(timeLeft.seg)}s</span>
        </div>

        <button 
          onClick={handleAccionBoton}
          disabled={cargando}
          className={`shrink-0 px-5 py-2 rounded-full text-xs md:text-sm font-black transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase tracking-wider ${
            cargando
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-emerald-500 text-slate-900 hover:bg-emerald-400 hover:scale-105 cursor-pointer active:scale-95 shadow-emerald-500/20'
          }`}
        >
          {inscrito 
            ? 'VER PLANES PRO ✓' 
            : cargando 
              ? 'PROCESANDO...' 
              : 'QUIERO EL DESCUENTO →'}
        </button>
      </div>
    </div>
  );
}