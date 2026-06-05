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
  const [nivelUrgencia, setNivelUrgencia] = useState('normal'); // normal, alta, critica
  
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  function calculateTimeLeft() {
    const ahora = new Date();
    const endDate = new Date("2026-06-07T23:59:59");
    
    const difference = endDate - ahora;
    let newTimeLeft = { dias: 0, horas: '00', min: '00', seg: '00' };
    
    if (difference > 0) {
      newTimeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        min: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seg: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }

    return newTimeLeft;
  }

  useEffect(() => {
    setIsMounted(true);
    
    const updateTime = () => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Lógica de urgencia dinámica
      if (newTimeLeft.dias < 1) {
        setNivelUrgencia('critica'); // Menos de 1 día: ROJO
      } else if (newTimeLeft.dias < 3) {
        setNivelUrgencia('alta'); // Menos de 3 días: NARANJA
      } else {
        setNivelUrgencia('normal'); // Más de 3 días: VERDE
      }
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);

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

  // Colores dinámicos según urgencia
  const colores = {
    normal: {
      bg: 'bg-[#003366]',
      badge: 'bg-[#28a745]',
      glow: 'shadow-[0_0_10px_rgba(40,167,69,0.5)]',
      border: 'border-[#28a745]',
      button: 'bg-[#28a745] hover:bg-[#218838]',
      text: 'text-emerald-400'
    },
    alta: {
      bg: 'bg-gradient-to-r from-[#003366] to-[#1a1a2e]',
      badge: 'bg-orange-500',
      glow: 'shadow-[0_0_15px_rgba(249,115,22,0.6)]',
      border: 'border-orange-500',
      button: 'bg-orange-500 hover:bg-orange-600',
      text: 'text-orange-400'
    },
    critica: {
      bg: 'bg-gradient-to-r from-red-900 to-[#1a1a2e]',
      badge: 'bg-red-600 animate-pulse',
      glow: 'shadow-[0_0_20px_rgba(220,38,38,0.8)]',
      border: 'border-red-600',
      button: 'bg-red-600 hover:bg-red-700 animate-pulse',
      text: 'text-red-400'
    }
  };

  const colorActual = colores[nivelUrgencia];

  return (
    <div className={`${colorActual.bg} text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 shadow-[0_4px_30px_rgba(40,167,69,0.2)] z-50 relative w-full overflow-hidden border-b-2 ${colorActual.border} transition-all duration-500`}>
      
      {/* Efecto de Brillo Cyber de Fondo */}
      <div className={`absolute top-0 right-0 w-72 h-72 ${nivelUrgencia === 'critica' ? 'bg-red-600' : nivelUrgencia === 'alta' ? 'bg-orange-500' : 'bg-[#28a745]'} rounded-full blur-[100px] opacity-25 -mr-20 -mt-20 pointer-events-none transition-all duration-500`}></div>
      <div className={`absolute bottom-0 left-0 w-48 h-48 ${nivelUrgencia === 'critica' ? 'bg-red-500' : 'bg-cyan-500'} rounded-full blur-[80px] opacity-15 -ml-20 -mb-20 pointer-events-none transition-all duration-500`}></div>

      {/* Textos Principales */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-center max-w-full relative z-10">
        <div className={`${colorActual.badge} text-white font-black text-xs px-2 py-0.5 rounded-md tracking-wider uppercase ${colorActual.glow}`}>
          {nivelUrgencia === 'critica' ? '🔥 ÚLTIMAS HORAS' : nivelUrgencia === 'alta' ? '⚡ ÚLTIMOS DÍAS' : '⚡ CYBERPRO WEEK'}
        </div>
        <span className="leading-tight text-white font-bold tracking-tight">
          {nivelUrgencia === 'critica' 
            ? '¡CIERRA HOY! No pierdas tu descuento.'
            : nivelUrgencia === 'alta'
              ? '¡Últimos días de CyberDay! Aprovecha antes que suba.'
              : 'CyberDay Activo: Descuentos brutales hasta el 07 de Junio.'}
        </span>
        <span className="hidden lg:inline opacity-30 text-white">|</span>
        <span className={`leading-tight ${colorActual.text} font-extrabold italic`}>
          Campus Virtual y Simulador SEREMI al precio más bajo del año
        </span>
      </div>
      
      {/* Contador Regresivo Inteligente */}
      <div className={`flex items-center gap-1.5 font-mono text-xs md:text-sm relative z-10 ${nivelUrgencia === 'critica' ? 'bg-red-950/60' : 'bg-black/40'} px-3 py-1.5 rounded-xl border ${nivelUrgencia === 'critica' ? 'border-red-500/30' : 'border-white/10'} shadow-inner transition-all duration-500`}>
        <span className="text-white/60 font-sans text-[10px] uppercase font-bold tracking-wider mr-1">
          {nivelUrgencia === 'critica' ? '⚠️ Cierra en:' : 'Cierra en:'}
        </span>
        <div className="flex flex-col items-center">
          <span className={`${nivelUrgencia === 'critica' ? 'text-red-400' : 'text-white'} font-black text-sm md:text-base`}>{timeLeft.dias}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Días</span>
        </div>
        <span className={`${nivelUrgencia === 'critica' ? 'text-red-500' : 'text-[#28a745]'} font-black ${nivelUrgencia === 'critica' ? 'animate-ping' : ''} text-xs`}>:</span>
        <div className="flex flex-col items-center">
          <span className={`${nivelUrgencia === 'critica' ? 'text-red-400' : 'text-[#28a745]'} font-black text-sm md:text-base`}>{timeLeft.horas}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Hrs</span>
        </div>
        <span className={`${nivelUrgencia === 'critica' ? 'text-red-500' : 'text-[#28a745]'} font-black`}>:</span>
        <div className="flex flex-col items-center">
          <span className={`${nivelUrgencia === 'critica' ? 'text-red-400' : 'text-[#28a745]'} font-black text-sm md:text-base`}>{timeLeft.min}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Min</span>
        </div>
        <span className={`${nivelUrgencia === 'critica' ? 'text-red-500' : 'text-[#28a745]'} font-black`}>:</span>
        <div className="flex flex-col items-center w-5">
          <span className={`${nivelUrgencia === 'critica' ? 'text-red-300 animate-pulse' : 'text-cyan-400'} font-black text-sm md:text-base`}>{timeLeft.seg}</span>
          <span className="text-[9px] font-sans text-white/40 uppercase -mt-1">Seg</span>
        </div>
      </div>
      
      {/* Botón de Acción Directo a Pagos */}
      <div className="flex flex-row items-center gap-2 shrink-0 relative z-10 mt-1 lg:mt-0">
        <button 
          onClick={handleAccionBoton}
          disabled={cargando}
          className={`shrink-0 px-6 py-2 rounded-xl text-xs md:text-sm font-black transition-all uppercase tracking-wider border border-white/20 ${colorActual.glow} ${
            cargando
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : `${colorActual.button} text-white hover:scale-105 cursor-pointer active:scale-95`
          }`}
        >
          {inscrito 
            ? 'DESBLOQUEAR OFERTA ✓' 
            : cargando 
              ? 'PROCESANDO...' 
              : 'DESBLOQUEAR OFERTA →'}
        </button>
      </div>
    </div>
  );
}