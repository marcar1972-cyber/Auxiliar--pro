"use client";

import { useState } from "react";
import { calculateBatch } from "./batchCalculator";
import { 
  ChevronLeft, Search, AlertCircle, Beaker, CheckCircle2, 
  BookOpen, Type, Hash, ShieldCheck, Sparkles, Zap, Share2,
  Facebook, Instagram, ChevronDown, Info
} from "lucide-react";
import Link from "next/link";
import BannerVenta from "../components/BannerVenta";

export default function DermoCheckPage() {
  const [code, setCode] = useState("");
  const [brand, setBrand] = useState("Eucerin");
  const [isException, setIsException] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // LISTA MAESTRA DE MARCAS COMPLETA Y SINCRONIZADA CON EL PDF v2026
  const brands = [
    'Eucerin', 
    'La Roche-Posay', 
    'Vichy', 
    'CeraVe', 
    'ISDIN', 
    'Nivea', 
    'Aquaphor', 
    'Garnier',
    "L'Oréal",
    'Avène',
    'Uriage',
    'Ducray'
  ];

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
              {/* ETIQUETA NOTORIA Y GRANDE */}
              <div>
                <label className="text-sm font-black text-slate-700 bg-slate-100 py-1.5 px-4 rounded-lg inline-block shadow-sm border border-slate-200 uppercase tracking-wider mb-4">
                  1. Selecciona Marca
                </label>
                <div className="relative group">
                  <select 
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-200 pr-12 p-5 rounded-2xl text-lg text-slate-900 font-bold group-hover:border-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer shadow-sm"
                  >
                    {brands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-emerald-500 transition-colors" size={24} />
                </div>
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

              {/* ETIQUETA NOTORIA Y GRANDE */}
              <div>
                <label className="text-sm font-black text-slate-700 bg-slate-100 py-1.5 px-4 rounded-lg inline-block shadow-sm border border-slate-200 uppercase tracking-wider mb-4">
                  2. Ingresa Batch Code
                </label>
                <input 
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="EJ: 40229376"
                  className="w-full bg-slate-50 border-2 border-slate-200 p-6 rounded-2xl text-2xl text-slate-900 font-black focus:border-emerald-500 outline-none transition-all shadow-sm"
                />
              </div>

              <button type="submit" className="w-full bg-[#0f172a] text-white font-black py-6 rounded-2xl shadow-xl hover:bg-emerald-600 transition-all uppercase tracking-[0.2em] text-base flex justify-center items-center gap-3">
                Verificar Ahora
              </button>
            </div>
          </form>

          {result && (
            <div className="mt-8 bg-emerald-500 rounded-[2.5rem] p-10 shadow-2xl text-white animate-in slide-in-from-top-4 duration-500">
              <p className="text-emerald-100 text-sm font-bold uppercase mb-1">Vencimiento Estimado:</p>
              <p className="text-6xl font-black tracking-tighter">{result.month} <span className="text-slate-900">{result.year}</span></p>
              <p className="text-xs text-emerald-100/70 font-medium mt-2 uppercase tracking-widest">
                Fabricado en: {result.fabMonth} de {result.fabYear} ({result.shelfLife} meses de duración)
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 bg-rose-600 text-white p-6 rounded-[2rem] flex items-center gap-4 animate-in shake duration-300">
              <AlertCircle size={28} />
              <p className="font-black uppercase tracking-widest text-sm">{error}</p>
            </div>
          )}
        </section>

        {/* --- NUEVA GUÍA MAESTRA EN FORMATO TABLA (FIEL A TU REQUERIMIENTO) --- */}
        <section className="space-y-6 pt-6">
          <div className="text-center mb-4">
            <h2 className="font-black text-slate-800 uppercase text-xl tracking-tighter flex items-center justify-center gap-2">
              <BookOpen className="text-blue-500" size={22} /> Guía Maestra de Lotes v2026
            </h2>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1e293b] text-white text-xs uppercase tracking-wider font-black">
                    <th className="py-4 px-6">Marca / Laboratorio</th>
                    <th className="py-4 px-6">Lógica de Lectura</th>
                    <th className="py-4 px-6">Ejemplo de Cálculo</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100 font-medium text-slate-600">
                  {/* Fila 1: Eucerin / Nivea */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-900">EUCERIN / NIVEA / AQUAPHOR</td>
                    <td className="py-5 px-6 leading-relaxed">
                      Formato de 8 dígitos numéricos.<br />
                      <strong>1er dígito:</strong> Último número del año de fabricación.<br />
                      <strong>2º y 3º dígito:</strong> Semana del año de fabricación.
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 font-bold">44252776</span><br />
                      <span className="text-xs text-slate-500 block mt-1">
                        4 = Año 2024.<br />
                        42 = Semana de Octubre.<br />
                        Vence: Octubre 2027 (+3 años).
                      </span>
                    </td>
                  </tr>

                  {/* Fila 2: L'oréal, Vichy, La Roche, CeraVe */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-900">VICHY / LA ROCHE-POSAY / CERAVE / L'ORÉAL</td>
                    <td className="py-5 px-6 leading-relaxed">
                      Código alfanumérico.<br />
                      <strong>3ª posición (Letra):</strong> Año de fabricación (W=22, X=23, Y=24, Z=25, A=2026, B=2027).<br />
                      <strong>4ª posición:</strong> Mes (1-9=Ene-Sep, O=Oct, N=Nov, D=Dic).
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 font-bold">28Z109</span><br />
                      <span className="text-xs text-slate-500 block mt-1">
                        Z = Año 2025.<br />
                        1 = Mes de Enero.<br />
                        Vence: Enero 2028 (+36 meses).
                      </span>
                    </td>
                  </tr>

                  {/* Fila 3: ISDIN */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-900">ISDIN</td>
                    <td className="py-5 px-6 leading-relaxed">
                      Sistema de Calendario Juliano.<br />
                      <strong>1er dígito:</strong> Año de fabricación (5=2025, 6=2026).<br />
                      <strong>Siguientes 3 dígitos:</strong> Día correlativo del año (001 al 365).
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 font-bold">5046XXXX</span><br />
                      <span className="text-xs text-slate-500 block mt-1">
                        5 = Año 2025.<br />
                        046 = Día 46 del año (15 de Feb).<br />
                        Vence: Febrero 2028 (+3 años).
                      </span>
                    </td>
                  </tr>

                  {/* Fila 4: Avène / Ducray */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-900">AVÈNE / DUCRAY</td>
                    <td className="py-5 px-6 leading-relaxed">
                      Laboratorios Pierre Fabre.<br />
                      <strong>1er dígito:</strong> Año de fabricación (6=2026).<br />
                      <strong>2ª posición (Letra):</strong> Mes de fabricación en orden alfabético (A=Ene, B=Feb... L=Dic).
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 font-bold">5AXX</span><br />
                      <span className="text-xs text-slate-500 block mt-1">
                        5 = Año 2025.<br />
                        A = Mes de Enero.<br />
                        Vence: Enero 2028 (+36 meses).
                      </span>
                    </td>
                  </tr>

                  {/* Fila 5: Uriage */}
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 font-black text-slate-900">URIAGE</td>
                    <td className="py-5 px-6 leading-relaxed">
                      Estructura mixta numérica Juliano.<br />
                      <strong>1er dígito:</strong> Año de fabricación (6=2026).<br />
                      <strong>Siguientes 3 dígitos:</strong> Día juliano exacto en que se envasó el producto.
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800 font-bold">4285X</span><br />
                      <span className="text-xs text-slate-500 block mt-1">
                        4 = Año 2024.<br />
                        285 = Día 285 del año (12 de Oct).<br />
                        Vence: Octubre 2027 (+3 años).
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* --- MANUAL DE LECTURA RÁPIDA DE FONDO --- */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 space-y-6">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="text-emerald-500" /> Manual de Lectura Rápida
            </h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">
              De acuerdo con las normativas sanitarias vigentes aplicadas por los laboratorios de marcas dermo en Chile, si el empaque no cuenta con la fecha estampada explícitamente en el formato tradicional de DD/MM/AA, se debe calcular utilizando el código alfa-numérico (Batch Code) grabado directamente en el sello plástico del tubo o en la base de la caja de cartón.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">💡 Regla de Oro del Auxiliar de Farmacia:</p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Salvo excepciones de productos específicos (como líneas pediátricas o fórmulas inestables con Vitamina C pura que reducen su vida útil a 30 meses), la constante oficial de almacenamiento cerrado para este software de cálculo automatizado es de <strong>36 meses (3 años)</strong> a partir del mes de producción certificado por el laboratorio de origen.
              </p>
            </div>
          </div>

          {/* --- CRITICAL UI FIX: DISCLAIMER / AVISO DE RESPONSABILIDAD LEGAL --- */}
          <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-6 flex gap-4">
            <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
              <Info className="text-amber-600" size={20} />
            </div>
            <div>
              <p className="text-xs font-black text-amber-800 uppercase tracking-wider mb-1">Aviso de Responsabilidad (Disclaimer):</p>
              <p className="text-xs text-amber-700/90 font-medium leading-relaxed">
                Los cálculos entregados por DermoCheck PRO son estimaciones algorítmicas basadas estrictamente en las guías técnicas oficiales de los laboratorios para el año de vigencia 2026. Esta herramienta fue diseñada exclusivamente con fines pedagógicos y de apoyo académico para el estudio del examen de Auxiliar de Farmacia ante la SEREMI de Salud. AuxiliarPro no se responsabiliza por discordancias físicas de stock o decisiones comerciales derivadas del uso de este software. El rotulado del importador siempre prevalecerá como el dato legal final.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CON LOGO OFICIAL WHATSAPP */}
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
            DermoCheck Engine v5.2 — AuxiliarPro Ecosystem
          </p>
        </footer>
      </div>
    </main>
  );
}