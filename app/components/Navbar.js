'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, GraduationCap, Calculator, Menu, X, Gamepad2, 
  Star, Pill, HelpCircle, Share2, ShieldCheck
} from "lucide-react";
import UserIcon from "../UserIcon"; 
import StreakCounter from "./StreakCounter"; 
import { auth, db } from "../firebase/config"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [streak, setStreak] = useState(0);
  const [user, setUser] = useState(null);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    let unsubscribeDoc = () => {};

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userRef = doc(db, "users", currentUser.uid);
        
        // Escucha activa de Firestore para mantener racha y estado PRO actualizados en tiempo real
        unsubscribeDoc = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setStreak(data.streakCount || 0);
            setIsPro(data.isPro === true);
          }
        }, (error) => {
          console.error("Error en Navbar onSnapshot:", error);
        });

      } else {
        setUser(null);
        setStreak(0);
        setIsPro(false);
      }
    });

    return () => {
      unsubscribeAuth();
      unsubscribeDoc();
    };
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'AuxiliarPro - Prepárate para el examen SEREMI',
      text: '¡Mira esta plataforma para Auxiliares de Farmacia!',
      url: 'https://www.auxiliaresdefarmacia.cl', 
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Enlace copiado al portapapeles");
      }
    } catch (err) {
      console.log("Error al compartir", err);
    }
  };

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-[100] shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:h-20">
        
        {/* LOGO */}
        <Link href="/" className="relative flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity z-50 mx-auto lg:mx-0 py-3 lg:py-0 lg:h-full">
            <Image 
              src="/logo.webp" 
              alt="Logo AuxiliarPro App" 
              width={320} 
              height={120} 
              className="h-16 lg:h-20 w-auto object-contain"
              priority
            />
        </Link>

        {/* 🖥️ MENÚ DE ESCRITORIO */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
           <Link href="/quiz" className="flex items-center gap-1 text-white bg-slate-900 hover:bg-emerald-600 font-black text-[10px] uppercase tracking-widest px-3 py-2 rounded-full transition-all shadow-md mr-1">
             <Gamepad2 size={14} /> SIMULADOR
           </Link>
           <Link href="/planes" className="flex items-center gap-1 text-amber-600 font-bold text-[11px] tracking-wider px-3 py-2 rounded-lg hover:bg-amber-50">
             <Star size={14} fill="currentColor" /> PLANES
           </Link>
           <Link href="/guias" className="flex items-center gap-1 text-slate-600 font-bold text-[11px] tracking-wider px-3 py-2 rounded-lg hover:bg-blue-50">
             <GraduationCap size={14} /> GUÍAS
           </Link>
           <Link href="/vademecum" className="flex items-center gap-1 text-slate-600 font-bold text-[11px] tracking-wider px-3 py-2 rounded-lg hover:bg-emerald-50">
             <Pill size={14} /> VADEMÉCUM
           </Link>
           <div className="h-8 w-px bg-slate-200 mx-1"></div>
           <Link href="/blog" className="flex items-center gap-1 text-slate-600 font-bold text-[11px] tracking-wider px-3 py-2 rounded-lg hover:bg-emerald-50">
             <BookOpen size={14} /> BLOG
           </Link>
           <Link href="/faq" className="flex items-center gap-1 text-slate-600 font-bold text-[11px] tracking-wider px-3 py-2 rounded-lg hover:bg-slate-50">
             <HelpCircle size={14} /> FAQ
           </Link>
           <button onClick={handleShare} className="p-2 text-slate-400 hover:text-emerald-500 mr-1">
             <Share2 size={20} />
           </button>
           
           {user && <StreakCounter count={streak} />}

           {/* INFO CUENTA DE ESCRITORIO */}
           {user && (
             <div className="flex flex-col items-end text-right px-2 border-l border-slate-100 select-none">
               <span className="text-[10px] font-mono font-bold text-slate-500 truncate max-w-[140px]">{user.email}</span>
               {isPro ? (
                 <span className="text-[9px] font-black tracking-wider text-emerald-600 uppercase flex items-center gap-0.5">
                   💎 PLAN PRO
                 </span>
               ) : (
                 <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase">
                   📖 GRATUITO
                 </span>
               )}
             </div>
           )}

           <UserIcon />
        </div>

        {/* 📱 BOTONES MÓVILES */}
        <div className="lg:hidden flex items-center justify-center gap-3 w-full pb-2 pt-1">
          {user && <StreakCounter count={streak} />}
          <button onClick={handleShare} className="p-2 text-slate-400"><Share2 size={20} /></button>
          <Link href="/quiz" className="bg-slate-900 text-white p-2 rounded-lg"><Gamepad2 size={18} /></Link>
          
          {/* EL BOTÓN DE SESIÓN CON INFORMACIÓN DE CUENTA EN TIEMPO REAL */}
          <div className="flex items-center gap-2 shrink-0 border-r border-slate-100 pr-2 select-none">
            {user && (
              <div className="flex flex-col items-end text-right">
                <span className="text-[9px] font-mono font-bold text-slate-500 truncate max-w-[100px]">
                  {user.email}
                </span>
                {isPro ? (
                  <span className="text-[8px] font-black tracking-tight text-emerald-600 uppercase">
                    💎 PRO
                  </span>
                ) : (
                  <span className="text-[8px] font-bold tracking-tight text-slate-400 uppercase">
                    📖 FREE
                  </span>
                )}
              </div>
            )}
            <UserIcon />
          </div>

          {/* MENÚ HAMBURGUESA COMO CIERRE ABSOLUTO EN LA DERECHA TOTAL */}
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 ml-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 📱 MENÚ MÓVIL DESPLEGABLE */}
        {isOpen && (
          <div className="lg:hidden w-full bg-white border-t border-slate-100 py-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1 px-2">
              <Link href="/quiz" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-white bg-slate-900 hover:bg-emerald-600 font-black text-xs uppercase tracking-widest px-4 py-3 rounded-lg transition-all shadow-md">
                <Gamepad2 size={18} /> SIMULADOR
              </Link>
              <Link href="/planes" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-amber-600 font-bold text-sm tracking-wider px-4 py-3 rounded-lg hover:bg-amber-50">
                <Star size={18} fill="currentColor" /> PLANES
              </Link>
              <Link href="/guias" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-600 font-bold text-sm tracking-wider px-4 py-3 rounded-lg hover:bg-blue-50">
                <GraduationCap size={18} /> GUÍAS
              </Link>
              <Link href="/vademecum" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-600 font-bold text-sm tracking-wider px-4 py-3 rounded-lg hover:bg-emerald-50">
                <Pill size={18} /> VADEMÉCUM
              </Link>
              <div className="h-px bg-slate-100 my-1"></div>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-600 font-bold text-sm tracking-wider px-4 py-3 rounded-lg hover:bg-emerald-50">
                <BookOpen size={18} /> BLOG
              </Link>
              <Link href="/faq" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-slate-600 font-bold text-sm tracking-wider px-4 py-3 rounded-lg hover:bg-slate-50">
                <HelpCircle size={18} /> FAQ
              </Link>
              <div className="h-px bg-slate-100 my-1"></div>
              <div className="flex items-center justify-between px-4 py-2">
                <button onClick={() => { handleShare(); setIsOpen(false); }} className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                  <Share2 size={16} /> Compartir
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}