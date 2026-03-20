"use client";

import { useState } from "react";
import { calculateBatch } from "./batchCalculator";
import { 
  ChevronLeft, Search, AlertCircle, Beaker, CheckCircle2, 
  BookOpen, Type, Hash, ShieldCheck, Sparkles, Zap, Share2,
  Facebook, Instagram
} from "lucide-react";
import Link from "next/link";
import BannerVenta from "../components/BannerVenta";

export default function DermoCheckPage() {
  const [code, setCode] = useState("");
  const [brand, setBrand] = useState("Eucerin");
  const [isException, setIsException] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const brands = ['Eucerin', 'La Roche-Posay', 'Vichy', 'CeraVe', 'ISDIN', 'Nivea', 'Aquaphor', 'Garnier'];

  // FUNCIÓN UNIVERSAL PARA COMPARTIR
  const handleShare = async () => {
    const shareData = {
      title: 'DermoCheck PRO',
      text: 'Calcula el vencimiento de tus productos dermocosméticos con el Batch Code en AuxiliarPro.',
      url: window.location.href,
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

  const handleCalculate = (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    if (!code) { setError("Por favor, ingresa un código de lote."); return; }
    try {
      const data = calculateBatch(code, brand, isException);
      setResult(data);
    } catch (err) {
      setError(err.message || "Código no reconocido.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* HEADER SEO */}
      <header className="bg-[#0f172a] text-white pt-12 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/quiz" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 hover:text-emerald-300 transition-colors">
            <ChevronLeft size={16} /> Volver al Simulador
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            DermoCheck <span className="text-emerald-500">PRO</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            La herramienta definitiva para el Auxiliar de Farmacia. Calcula el vencimiento exacto de productos Dermocosméticos mediante el <span className="text-white">Batch Code</span> oficial.
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 -mt-12 space-y-12">
        
        {/* --- CALCULADORA AUTOMÁTICA --- */}
        <section className="relative">
          <form onSubmit={handleCalculate} className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
            <div className="bg-[#1e293b] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Search className="text-emerald-400" size={24} />
                </div>
                <h2 className="font-black text-white uppercase text-sm tracking-widest">Buscador</h2>
              </div>
              
              <button 
                type="button"
                onClick={handleShare}
                className="w-10 h-10 bg-slate-700 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all shadow-lg"
              >
                <Share2 size={18} />
              </button>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 block">1. Selecciona Marca</label>
                <select 
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl text-lg text-slate-900 font-bold focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  {brands.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div className="bg-rose-50/50 border border-rose-100 p-5 rounded-2xl flex items-center gap-4">
                <input 
                  type="checkbox" 
                  id="exception"
                  checked={isException}
                  onChange={(e) => setIsException(e.target.checked)}
                  className="w-6 h-6 accent-rose-500 cursor-pointer"
                />
                <label htmlFor="exception" className="text-sm font-bold text-slate-700 cursor-pointer">
                  ¿Es línea <span className="text-rose-600 font-black">Baby</span> o protección solar especial?
                  <span className="block text-[10px] text-rose-500 uppercase mt-0.5">Vencimiento reducido a 30 meses</span>
                </label>
              </div>

              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 block">2. Ingresa Batch Code</label>
                <input 
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="EJ: 40229376"
                  className="w-full bg-slate-50 border-2 border-slate-100 p-6 rounded-2xl text-2xl text-slate-900 font-black focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              <button type="submit" className="w-full bg-[#0f172a] text-white font-black py-6 rounded-2xl shadow-xl hover:bg-black transition-all uppercase tracking-[0.2em] text-base flex justify-center items-center gap-3">
                Verificar Ahora
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-8 bg-emerald-500 rounded-[2.5rem] p-10 shadow-2xl text-white animate-in slide-in-from-top-4 duration-500">
              <p className="text-emerald-100 text-sm font-bold uppercase mb-1">Vencimiento Estimado:</p>
              <p className="text-6xl font-black tracking-tighter">{result.month} <span className="text-slate-900">{result.year}</span></p>
            </div>
          )}

          {error && (
            <div className="mt-6 bg-rose-600 text-white p-6 rounded-[2rem] flex items-center gap-4 animate-in shake duration-300">
              <AlertCircle size={28} />
              <p className="font-black uppercase tracking-widest text-sm">{error}</p>
            </div>
          )}
        </section>

        {/* --- GUÍA MAESTRA --- */}
        <section className="space-y-8 pt-10">
          <div className="text-center">
            <h2 className="font-black text-slate-800 uppercase text-xl tracking-tighter flex items-center justify-center gap-2">
              <BookOpen className="text-blue-500" /> Guía Maestra de Lotes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-blue-50 overflow-hidden">
              <div className="bg-blue-600 p-5 text-white flex justify-between items-center">
                <h3 className="font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2"><Type size={18} /> Sistema de Letras</h3>
                <span className="text-[9px] font-bold opacity-70">L'ORÉAL • VICHY • CERAVE</span>
              </div>
              <div className="p-8 text-center space-y-6">
                <div className="bg-blue-50 py-4 px-8 rounded-2xl inline-block font-mono text-3xl font-black text-blue-900 tracking-[0.3em]">28<span className="text-blue-600 underline underline-offset-8">Y</span>109</div>
                <p className="text-sm font-bold text-slate-600">La 3ª posición indica el año: W=2025, X=2026, Y=2027, Z=2028</p>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl border border-rose-50 overflow-hidden">
              <div className="bg-rose-500 p-5 text-white flex justify-between items-center">
                <h3 className="font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2"><Hash size={18} /> Sistema Numérico</h3>
                <span className="text-[9px] font-bold opacity-70">EUCERIN • NIVEA</span>
              </div>
              <div className="p-8 text-center space-y-6">
                <div className="bg-rose-50 py-4 px-8 rounded-2xl inline-block font-mono text-3xl font-black text-slate-800 tracking-[0.2em]"><span className="text-rose-600">5</span>1236376</div>
                <p className="text-sm font-bold text-slate-600">1er dígito = Año de fabricación. 2do/3ro = Semana del año.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER ACTUALIZADO CON LOGO OFICIAL WHATSAPP */}
        <footer className="pt-16 space-y-12 text-center">
          <BannerVenta />

          <div className="flex justify-center gap-8 py-4">
            <a href="https://api.whatsapp.com/send/?phone=56934238151&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-16 h-16 hover:scale-110 transition-transform">
              <img src="/whatsapp.webp" alt="WhatsApp" className="w-full h-full object-contain" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Facebook size={32} />
            </a>
            <a href="https://www.instagram.com/auxiliarpro/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Instagram size={32} />
            </a>
          </div>

          <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">
            DermoCheck Engine v2.8 — AuxiliarPro Ecosystem
          </p>
        </footer>
      </div>
    </main>
  );
}