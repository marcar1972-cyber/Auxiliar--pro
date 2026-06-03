// Ruta: app/preguntas-examen-seremi-farmacologia/page.js

"use client";

import { useState } from "react";
import Link from 'next/link';
import { BookOpen, ShieldAlert, Target, Clock, AlertTriangle, ArrowRight, CheckCircle2, BrainCircuit, FileText } from "lucide-react";

export default function FarmacologiaHub() {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (correct) => {
    setAnswered(true);
    setIsCorrect(correct);
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      
      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-[#28a745] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Guía Maestra de Preparación
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            Preguntas Examen SEREMI: <br/><span className="text-emerald-400">¿Qué te van a preguntar?</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Descubre el formato exacto de la prueba y domina la legislación farmacéutica chilena para asegurar tu certificación oficial.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Formato del Examen (Decreto 38) */}
        <section>
          <h2 className="text-3xl font-black text-[#003366] mb-6 flex items-center gap-3">
            <Target className="text-[#28a745]" size={32} />
            El Formato del Examen (Decreto 38)
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            La autoridad sanitaria evalúa rigurosamente tus conocimientos para verificar que cuentas con las competencias necesarias para desempeñarte bajo la supervisión de un Químico Farmacéutico. El examen oficial presenta la siguiente estructura:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <Clock className="text-amber-500 mb-3" size={28} />
              <h3 className="text-xl font-bold text-[#003366] mb-2">Modalidad y Tiempo</h3>
              <p className="text-slate-600">
                Se rinde en formato de <strong>selección múltiple</strong> a través de la plataforma de la SEREMI de Salud. Dispones de un tiempo cronometrado exacto (generalmente 60 minutos) y se rinde de forma supervisada.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <BookOpen className="text-[#003366] mb-3" size={28} />
              <h3 className="text-xl font-bold text-[#003366] mb-2">Balance Farmacología vs Legislación</h3>
              <p className="text-slate-600">
                Aproximadamente un <strong>60% de las preguntas corresponde a farmacología y dispensación</strong>, mientras que el <strong>40% evalúa legislación estricta</strong> (Decretos 466, 404 y 405).
              </p>
            </div>
          </div>
        </section>

        {/* Snippets Legales */}
        <section className="bg-blue-50/40 p-8 md:p-10 rounded-3xl border border-blue-100">
          <h2 className="text-2xl font-black text-[#003366] mb-8 text-center uppercase tracking-widest">
            Preguntas Frecuentes Reales (Snippet Legal)
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <span className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-lg mb-3 text-xs uppercase tracking-wider">Pregunta de Examen</span>
              <h3 className="font-black text-slate-800 text-xl leading-snug mb-4">¿Cuál es la vigencia de una receta de productos psicotrópicos (Lista B) desde su emisión?</h3>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="inline-block text-[#003366] font-black mb-2 text-sm uppercase tracking-wider">Respuesta Oficial:</span>
                <p className="text-slate-600 leading-relaxed text-lg">Según el Decreto 405, la receta tiene una vigencia estricta de <strong>30 días</strong> contados desde la fecha de su extensión.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Hub de Enlaces */}
        <section className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
          <div className="col-span-1 md:col-span-3 mb-2">
            <h2 className="text-2xl font-black text-[#003366] uppercase tracking-widest">Navega por el Temario</h2>
          </div>
          
          <Link href="/blog/receta-cheque-retenida" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#003366] transition-all shadow-sm flex flex-col group">
            <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#28a745] transition-colors">El Terror de las Recetas →</h3>
            <p className="text-slate-500 text-sm flex-grow">Diferencias críticas entre Decretos 404 y 405 (Estupefacientes y Psicotrópicos).</p>
          </Link>

          <Link href="/blog/preguntas-medicamentos-venta-directa" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#003366] transition-all shadow-sm flex flex-col group">
            <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#28a745] transition-colors">Venta Directa →</h3>
            <p className="text-slate-500 text-sm flex-grow">Acción terapéutica y contraindicaciones de productos de venta libre.</p>
          </Link>

          <Link href="/blog/conceptos-clave-farmacia" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#003366] transition-all shadow-sm flex flex-col group">
            <h3 className="text-lg font-bold text-[#003366] mb-2 group-hover:text-[#28a745] transition-colors">Conceptos Clave →</h3>
            <p className="text-slate-500 text-sm flex-grow">Bioequivalencia, Formas Farmacéuticas y manejo de Cadena de Frío.</p>
          </Link>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-br from-[#002244] to-[#003366] p-10 md:p-12 rounded-3xl border border-slate-800 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">¿Vas a rendir tu examen a ciegas?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto">
            Accede al simulador completo en AuxiliarPro App.
          </p>
          {/* --- AQUÍ ESTÁ EL CAMBIO QUE PEDISTE --- */}
          <Link href="/campus" className="inline-block px-10 py-5 bg-[#28a745] text-white font-black text-lg rounded-xl hover:bg-[#218838] transition-colors shadow-lg shadow-green-900/50">
            Desbloquear Banco de Preguntas PRO
          </Link>
        </section>
      </div>
    </main>
  );
}