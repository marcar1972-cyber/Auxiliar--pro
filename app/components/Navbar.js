'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, GraduationCap, Calculator, Menu, X, Gamepad2, 
  User, Star, Pill, Bot, Brain, HelpCircle, Share2 
} from "lucide-react";
import UserIcon from "../UserIcon"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Función de compartir universal
  const handleShare = async () => {
    const shareData = {
      title: 'AuxiliarPro - Prepárate para el examen SEREMI',
      text: '¡Mira esta plataforma para Auxiliares de Farmacia! Tiene simuladores, guías y calculadora dermo.',
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
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative w-32 md:w-40 h-10 hover:opacity-80 transition-opacity shrink-0 flex items-center">
            <Image 
              src="/logo.webp" 
              alt="Logo AuxiliarPro" 
              width={160}
              height={40}
              className="object-contain object-left"
              priority
            />
        </Link>

        {/* 🖥️ MENÚ DE ESCRITORIO */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            
           <Link href="/quiz" className="flex items-center gap-2 text-white bg-slate-900 hover:bg-emerald-600 font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full transition-all shadow-md mr-1">
              <Gamepad2 size={16} /> SIMULADOR
           </Link>

           <Link href="/guias" className="flex items-center gap-1 xl:gap-2 text-slate-600 hover:text-blue-600 font-bold text-xs tracking-wider px-2 xl:px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">
              <GraduationCap size={16} /> GUÍAS
           </Link>

           {/* REPOSICIÓN DE BOTONES PRÓXIMAMENTE (ESCRITORIO) */}
           <div className="relative group opacity-70 pointer-events-none mt-1">
              <div className="flex items-center gap-1 xl:gap-2 text-slate-500 font-bold text-xs tracking-wider px-2 xl:px-3 py-2 rounded-lg"><Pill size={16} /> VADEMÉCUM</div>
              <span className="absolute -top-1 right-0 bg-amber-100 text-amber-700 text-[8px] font-black px-1.5 py-0.5 rounded-full border border-amber-200">PRÓXIMO</span>
           </div>

           <div className="relative group opacity-70 pointer-events-none mt-1">
              <div className="flex items-center gap-1 xl:gap-2 text-slate-500 font-bold text-xs tracking-wider px-2 xl:px-3 py-2 rounded-lg"><Bot size={16} /> IA</div>
              <span className="absolute -top-1 right-0 bg-amber-100 text-amber-700 text-[8px] font-black px-1.5 py-0.5 rounded-full border border-amber-200">PRÓXIMO</span>
           </div>

           <div className="relative group opacity-70 pointer-events-none mt-1">
              <div className="flex items-center gap-1 xl:gap-2 text-slate-500 font-bold text-xs tracking-wider px-2 xl:px-3 py-2 rounded-lg"><Brain size={16} /> PSICOLOGÍA</div>
              <span className="absolute -top-1 right-0 bg-amber-100 text-amber-700 text-[8px] font-black px-1.5 py-0.5 rounded-full border border-amber-200">PRÓXIMO</span>
           </div>

           <div className="h-6 w-px bg-slate-200 mx-1"></div>

           <Link href="/blog" className="flex items-center gap-1 xl:gap-2 text-slate-600 hover:text-emerald-600 font-bold text-xs tracking-wider px-2 xl:px-3 py-2 rounded-lg hover:bg-emerald-50 transition-all">
              <BookOpen size={16} /> BLOG
           </Link>

           <Link href="/faq" className="flex items-center gap-1 xl:gap-2 text-slate-600 hover:text-slate-900 font-bold text-xs tracking-wider px-2 xl:px-3 py-2 rounded-lg hover:bg-slate-50 transition-all">
              <HelpCircle size={16} /> FAQ
           </Link>

           <Link href="/dermocheck" className="flex items-center gap-1 xl:gap-2 text-slate-400 hover:text-pink-600 font-bold text-xs tracking-wider px-2 xl:px-3 py-2 rounded-lg hover:bg-pink-50 transition-all">
              <Calculator size={16} /> DERMO
           </Link>

           <div className="h-6 w-px bg-slate-200 mx-1"></div>
           
           <button 
             onClick={handleShare}
             className="p-2 text-slate-400 hover:text-emerald-500 transition-colors mr-1"
             title="Compartir AuxiliarPro"
           >
             <Share2 size={20} />
           </button>

           <UserIcon />
        </div>

        {/* 📱 BOTÓN HAMBURGUESA (MÓVIL) */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={handleShare} className="p-2 text-slate-400">
            <Share2 size={22} />
          </button>
          
          <Link href="/quiz" className="bg-slate-900 text-white p-2 rounded-lg">
            <Gamepad2 size={20} />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 rounded-lg transition-colors relative z-[110]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 fixed inset-0 top-16 w-full shadow-xl px-6 py-8 flex flex-col gap-3 animate-in slide-in-from-top-5 h-[calc(100vh-64px)] z-[105] overflow-y-auto pb-32 text-left">
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Menú Principal</span>
                <div className="flex items-center gap-4">
                  <button onClick={handleShare} className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <Share2 size={16} /> COMPARTIR
                  </button>
                  <UserIcon /> 
                </div>
            </div>

            <Link href="/quiz" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-white bg-slate-900 font-black text-lg p-4 rounded-2xl shadow-lg">
              <Gamepad2 size={24} className="text-emerald-400"/> Simulador Examen
            </Link>

            <Link href="/guias" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-slate-700 font-bold text-base p-4 rounded-2xl hover:bg-blue-50 border border-slate-100">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><GraduationCap size={20} /></div>
              Guías de Estudio
            </Link>

            {/* REPOSICIÓN DE SECCIÓN PRÓXIMAMENTE (MÓVIL) */}
            <div className="mt-4 mb-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Próximas Herramientas PRO</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 opacity-70 pointer-events-none">
              <div className="flex items-center gap-4 text-slate-500 font-bold text-base">
                <div className="bg-slate-200 p-2 rounded-lg text-slate-500"><Pill size={20} /></div>
                Vademécum Pro
              </div>
              <span className="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-1 rounded-full">PRÓXIMAMENTE</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 opacity-70 pointer-events-none">
              <div className="flex items-center gap-4 text-slate-500 font-bold text-base">
                <div className="bg-slate-200 p-2 rounded-lg text-slate-500"><Bot size={20} /></div>
                Asistente IA
              </div>
              <span className="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-1 rounded-full">PRÓXIMAMENTE</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50 opacity-70 pointer-events-none">
              <div className="flex items-center gap-4 text-slate-500 font-bold text-base">
                <div className="bg-slate-200 p-2 rounded-lg text-slate-500"><Brain size={20} /></div>
                Módulo Psicología
              </div>
              <span className="bg-amber-100 text-amber-700 text-[9px] font-black px-2 py-1 rounded-full">PRÓXIMAMENTE</span>
            </div>

            <div className="mt-4 mb-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Comunidad y Extras</span>
            </div>

            <Link href="/blog" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-slate-700 font-bold text-base p-4 rounded-2xl hover:bg-emerald-50 border border-slate-100">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><BookOpen size={20} /></div>
              Blog y Noticias
            </Link>

            <Link href="/dermocheck" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-slate-700 font-bold text-base p-4 rounded-2xl hover:bg-pink-50 border border-slate-100 mb-2">
              <div className="bg-pink-100 p-2 rounded-lg text-pink-600"><Calculator size={20} /></div>
              Calculadora Dermo
            </Link>

            <Link href="/faq" onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-slate-700 font-bold text-base p-4 rounded-2xl hover:bg-slate-50 border border-slate-100">
              <div className="bg-slate-100 p-2 rounded-lg text-slate-600"><HelpCircle size={20} /></div>
              Preguntas Frecuentes
            </Link>
        </div>
      )}
    </nav>
  );
}