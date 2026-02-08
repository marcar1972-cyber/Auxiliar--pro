'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
// 🟢 Quitamos 'Library' de los iconos importados para limpiar el código
import { BookOpen, GraduationCap, Calculator, Menu, X, Gamepad2 } from "lucide-react";
import UserIcon from "../UserIcon"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative w-32 md:w-40 h-10 hover:opacity-80 transition-opacity shrink-0 flex items-center">
            {/* Si la imagen falla o no carga, mostramos texto como fallback */}
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
        <div className="hidden md:flex items-center gap-2">
           
           {/* Botón Simulador (Destacado) */}
           <Link href="/quiz" className="flex items-center gap-2 text-white bg-slate-900 hover:bg-emerald-600 font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full transition-all shadow-md mr-2">
              <Gamepad2 size={16} /> SIMULADOR
           </Link>

           <Link href="/guias" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold text-xs tracking-wider px-3 py-2 rounded-lg hover:bg-blue-50 transition-all">
              <GraduationCap size={16} /> GUÍAS
           </Link>

           {/* ❌ ELIMINADO: Botón Biblioteca para evitar redundancia visual */}

           <Link href="/blog" className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-bold text-xs tracking-wider px-3 py-2 rounded-lg hover:bg-emerald-50 transition-all">
              <BookOpen size={16} /> BLOG
           </Link>

           <div className="h-6 w-px bg-slate-200 mx-1"></div>

           <a href="https://www.dermocheck.cl/#calculator-section" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-pink-600 font-bold text-xs tracking-wider px-3 py-2 rounded-lg hover:bg-pink-50 transition-all">
              <Calculator size={16} /> DERMO
           </a>

           <div className="h-6 w-px bg-slate-200 mx-1"></div>
           
           <UserIcon />
        </div>

        {/* 📱 BOTÓN HAMBURGUESA (MÓVIL) */}
        <div className="md:hidden flex items-center gap-4">
          {/* En móvil mostramos el Quiz directo también fuera del menú */}
          <Link href="/quiz" className="bg-slate-900 text-white p-2 rounded-lg">
            <Gamepad2 size={20} />
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 📱 MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl px-6 py-8 flex flex-col gap-3 animate-in slide-in-from-top-5 h-screen z-50">
            
            <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Menú Principal</span>
                <UserIcon /> 
            </div>

            <Link 
              href="/quiz" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-white bg-slate-900 font-black text-lg p-4 rounded-2xl shadow-lg hover:bg-slate-800 transition-colors"
            >
              <Gamepad2 size={24} className="text-emerald-400"/>
              Simulador Examen
            </Link>

            <Link 
              href="/guias" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-slate-700 font-bold text-base p-4 rounded-2xl hover:bg-blue-50 border border-slate-100 transition-colors"
            >
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><GraduationCap size={20} /></div>
              Guías de Estudio
            </Link>

            {/* ❌ ELIMINADO: Biblioteca en Móvil también */}

            <Link 
              href="/blog" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-slate-700 font-bold text-base p-4 rounded-2xl hover:bg-emerald-50 border border-slate-100 transition-colors"
            >
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600"><BookOpen size={20} /></div>
              Blog y Noticias
            </Link>

            <a 
              href="https://www.dermocheck.cl/#calculator-section" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 text-slate-500 font-bold text-base p-4 rounded-2xl hover:bg-pink-50 border border-slate-100 transition-colors mt-4"
            >
              <div className="bg-pink-100 p-2 rounded-lg text-pink-600"><Calculator size={20} /></div>
              Calculadora Dermo
            </a>
        </div>
      )}
    </nav>
  );
}