'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Sparkles, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { db, auth } from '../firebase/config'; 
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default function BannerVenta() {
  const router = useRouter();
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  // Lógica de Autenticación y Verificación de Registro Previo
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUsuario(user);
        
        // Verificar si ya existe en la lista de espera
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
    return () => unsubscribeAuth();
  }, []);

  // Lógica de Captura de Lead (Cupón) + Envío a Make
  const handleAccionBoton = async () => {
    if (!usuario) {
      router.push('/login'); 
      return;
    }

    if (inscrito) return;

    setCargando(true);
    try {
      // 1. Registro en Firebase
      const listaEsperaRef = collection(db, 'lista_espera_pro');
      await addDoc(listaEsperaRef, {
        nombre: usuario.displayName || 'Usuario AuxiliarPro',
        email: usuario.email,
        uid: usuario.uid,
        fechaRegistro: new Date(),
        origen: 'banner_venta_home',
        cuponAsignado: 'PRO30_MARZO'
      });

      // 2. Aviso a Make para envío de email
      await fetch('https://hook.us2.make.com/r8r94dlmw5a6l4kvwfshfqu7byu3q3h7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: usuario.displayName || 'Usuario AuxiliarPro',
          email: usuario.email,
          cupon: 'PRO30_MARZO'
        })
      });

      setInscrito(true);
    } catch (error) {
      console.error("Error al inscribir:", error);
      alert("Hubo un problema de conexión. Inténtalo de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <>
      {/* BANNER PRINCIPAL - IDENTIDAD AUXILIARPRO (SLATE + EMERALD) */}
      <div className="bg-[#0f172a] rounded-[2.5rem] p-6 shadow-2xl border border-slate-800 mt-8 relative overflow-hidden w-full">
        {/* Glow Esmeralda de fondo */}
        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 rounded-full blur-[70px] md:blur-[100px] opacity-20 md:opacity-10 bg-emerald-500"></div>
        
        <div className="relative z-10 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                <Sparkles size={12} /> Evolucionamos
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-white mb-4 flex items-center gap-3 leading-tight">
                <Lock className="text-emerald-400 shrink-0" size={24} /> AuxiliarPro evoluciona
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                Seguiremos siendo <strong className="text-white">gratis en Niveles 1, 2, Guías y DermoCheck</strong>.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                El <strong className="text-emerald-400">31 de marzo llega el Nivel PRO</strong> con herramientas avanzadas para tu certificación y trabajo diario.
            </p>
            
            <ul className="space-y-3 mb-6 ml-1 text-sm md:text-base">
              <li className="flex items-start text-slate-300">
                <CheckCircle size={18} className="mr-3 mt-1 md:mt-0.5 shrink-0 text-emerald-400" />
                <span><strong className="text-white">Simulador Inicial Completo:</strong> Niveles 1 al 7.</span>
              </li>
              <li className="flex items-start text-slate-300">
                <CheckCircle size={18} className="mr-3 mt-1 md:mt-0.5 shrink-0 text-emerald-400" />
                <span><strong className="text-white">Simulador Avanzado:</strong> Preguntas complejas tipo SEREMI.</span>
              </li>
              <li className="flex items-start text-slate-300">
                <CheckCircle size={18} className="mr-3 mt-1 md:mt-0.5 shrink-0 text-emerald-400" />
                <span><strong className="text-white">Vademécum Profesional (Beta)</strong>.</span>
              </li>
              <li className="flex items-start text-slate-300">
                <CheckCircle size={18} className="mr-3 mt-1 md:mt-0.5 shrink-0 text-emerald-400" />
                <span><strong className="text-white">Próximamente (Abril):</strong> Asistente IA y Módulo Psicología.</span>
              </li>
            </ul>
            
            <div className="block bg-slate-900/60 p-5 rounded-2xl border border-slate-800 shadow-md mb-6 w-full text-center">
              <div className="flex flex-col gap-4 w-full">
                  <div className="w-full">
                    <span className="text-white font-black text-lg block mb-1 leading-tight">
                      Reserva Nivel PRO con 30% de descuento
                    </span>
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-500">
                      Oferta exclusiva de preventa
                    </span>
                  </div>
                  
                  <div className="w-full mt-1">
                    <button 
                      onClick={handleAccionBoton}
                      disabled={cargando || inscrito}
                      className={`w-full font-black py-4 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                        inscrito 
                          ? 'bg-emerald-500 text-slate-950 cursor-default' 
                          : cargando
                            ? 'bg-slate-700 text-slate-400 cursor-wait'
                            : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 transform hover:-translate-y-1 cursor-pointer active:scale-95'
                      }`}
                    >
                      {inscrito 
                        ? '¡CUPÓN RESERVADO! ✓' 
                        : cargando 
                          ? <><Loader2 className="w-4 h-4 animate-spin" /> PROCESANDO...</>
                          : <>QUIERO MI CUPÓN 30% <ArrowRight size={16} /></>}
                    </button>
                  </div>
              </div>
            </div>

            <Link href="/quiz" className="block w-full text-center font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">
                IR AL SIMULADOR
            </Link>
        </div>
      </div>
      
      {/* AVISO LEGAL */}
      <div className="mt-8 text-center px-4 w-full">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-xl mx-auto">
              Estudiar por tu cuenta es recomendado para preparar tu examen, pero para inscribirte oficialmente en la SEREMI necesitarás acreditar experiencia laboral.
          </p>
      </div>
    </>
  );
}