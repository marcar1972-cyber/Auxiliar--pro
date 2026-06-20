'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, GraduationCap, Calculator, Menu, X, Gamepad2, 
  Star, Pill, HelpCircle, Share2 
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

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userRef = doc(db, "users", currentUser.uid);
        const unsubscribeDoc = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            setStreak(docSnap.data().streakCount || 0);
          }
        });
        return () => unsubscribeDoc();
      } else {
        setUser(null);
        setStreak(0);
      }
    });
    return () => unsubscribeAuth();
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
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-[100] shadow-sm h-20 lg:h-24">
      <div className="max-w-[1400px] mx-auto px-4 h-full flex items-center justify-between">
        
        {/* LOGO: Más grande, toca el banner verde y traspasa la línea inferior */}
        <Link href="/" className="relative flex items-center justify-center h-full shrink-0 hover:opacity-90 transition-opacity z-50">
            <Image 
              src="/logo-dia-papa-2-sin fondo-.png" 
              alt="Logo AuxiliarPro App" 
              width={450} 
              height={180} 
              className="h-24 lg:h-32 w-auto object-contain -translate-y-2 lg:-translate-y-3"
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
           <button onClick={handleShare} className="p-2 text-slate-400 hover:text-emerald-500">
             <Share2 size={20} />
           </button>
           {user && <StreakCounter count={streak} />}
           <UserIcon />
        </div>

        {/* 📱 BOTÓN HAMBURGUESA (MÓVIL) */}
        <div className="lg:hidden flex items-center gap-2">
          {user && <StreakCounter count={streak} />}
          <button onClick={handleShare} className="p-2 text-slate-400"><Share2 size={20} /></button>
          <Link href="/quiz" className="bg-slate-900 text-white p-2 rounded-lg"><Gamepad2 size={18} /></Link>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600"><Menu size={24} /></button>
        </div>
      </div>
    </nav>
  );
}