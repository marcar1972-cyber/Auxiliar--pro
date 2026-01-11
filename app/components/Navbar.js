'use client'; // 👈 ESTO ES VITAL: Permite que el botón funcione

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Calculator, Menu, X, User } from "lucide-react";
import UserIcon from "../UserIcon"; // Asegúrate que la ruta a UserIcon sea correcta (../UserIcon o ./UserIcon)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative w-32 md:w-40 h-10 hover:opacity-80 transition-opacity shrink-0">
           <Image 
             src="/logo.webp" 
             alt="Logo AuxiliarPro" 
             fill
             className="object-contain object-left"
             priority
           />
        </Link>

        {/* MENÚ DE ESCRITORIO (Se oculta en móvil) */}
        <div className="hidden md:flex items-center gap-4">
           <Link href="/blog" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold text-xs tracking-wider px-3 py-2 rounded-lg hover:bg-emerald-50 transition-all">
              <BookOpen size={18} /> BLOG
           </Link>

           <Link href="/guias/decreto-3-control-productos" className="flex items-center gap-2 text-blue-600 bg-blue-50/50 hover:bg-blue-100 font-bold text-xs tracking-wider px-3 py-2 rounded-lg transition-all">
              <GraduationCap size={18} /> GUÍAS
           </Link>

           <div className="h-6 w-px bg-slate-200"></div>

           <a href="https://www.dermocheck.cl/#calculator-section" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-pink-600 font-bold text-xs tracking-wider px-3 py-2 rounded-lg hover:bg-pink-50 transition-all">
              <Calculator size={18} /> DERMO
           </a>

           <div className="h-6 w-px bg-slate-200"></div>
           
           <UserIcon />
        </div>

        {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
        <div className="md:hidden flex items-center gap-4">
          <UserIcon /> {/* Dejamos el usuario visible siempre */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Se muestra al hacer click) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl px-4 py-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-slate-600 font-bold text-lg p-3 rounded-xl hover:bg-slate-50"
            >
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><BookOpen size={24} /></div>
              Blog y Noticias
            </Link>

            <Link 
              href="/guias/decreto-3-control-productos" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-slate-600 font-bold text-lg p-3 rounded-xl hover:bg-slate-50"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><GraduationCap size={24} /></div>
              Guías de Estudio
            </Link>

            <a 
              href="https://www.dermocheck.cl/#calculator-section" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-slate-600 font-bold text-lg p-3 rounded-xl hover:bg-slate-50"
            >
              <div className="bg-pink-100 p-2 rounded-lg text-pink-600"><Calculator size={24} /></div>
              Calculadora Dermo
            </a>
        </div>
      )}
    </nav>
  );
}
