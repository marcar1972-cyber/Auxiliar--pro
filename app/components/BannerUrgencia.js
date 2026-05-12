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
    const targetDate = new Date("2026-05-10T00:00:00");
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
        origen: 'banner_top_pase_15_dias',
        cuponAsignado: 'SPRINT_15_PRO'
      });

      fetch('https://hook.us2.make.com/r8r94dlmw5a6l4kvwfshfqu7byu3q3h7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: usuario.displayName || 'Usuario AuxiliarPro',
          email: usuario.email,
          cupon: 'SPRINT_15_PRO'
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
    <div className="bg-[#003366] text-white py-3 px-4 text-center text-xs md:text-sm font-medium flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 shadow-xl z-50 relative w-full overflow-hidden border-b border-[#28a745]/40">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#28a745] rounded-full blur-[120px] opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-center max-w-full relative z-10">
        
        <span className="leading-tight text-white font-bold uppercase tracking-tight">
            ¿Examen SEREMI a la vista? Asegura tu título hoy.
        </span>
        <span className="hidden md:inline opacity-30 text-[#28a745]">|</span>
        <span className="leading-tight text-white font-black italic">
            Aprovecha el <span className="animate-pulse text-[#28a745] bg-emerald-500/10 px-2 py-1 rounded-md text-base md:text-lg whitespace-nowrap">Pase 15 Días por solo $3.990</span>
        </span>
      </div>
      
      <div className="flex flex-row items-center gap-2 shrink-0 relative z-10 mt-2 md:mt-0">
        <button 
          onClick={handleAccionBoton}
          disabled={cargando}
          className={`shrink-0 px-6 py-2 rounded-full text-xs md:text-sm font-black transition-all shadow-[0_0_15px_rgba(40,167,69,0.3)] uppercase tracking-widest ${
            cargando
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-[#28a745] text-white hover:bg-[#218838] hover:scale-105 cursor-pointer active:scale-95 shadow-[#28a745]/20'
          }`}
        >
          {inscrito 
            ? 'IR A PLANES PRO ✓' 
            : cargando 
              ? 'PROCESANDO...' 
              : 'OBTENER PASE →'}
        </button>
      </div>
    </div>
  );
}