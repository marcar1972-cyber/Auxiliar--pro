// Ruta: app/examen/preguntas-medicamentos-venta-directa/page.js

"use client";

import { useState } from "react";
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, Pill, ArrowRight, BrainCircuit, ChevronLeft, Stethoscope, AlertOctagon } from "lucide-react";

export default function VentaDirectaPage() {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (correct) => {
    setAnswered(true);
    setIsCorrect(correct);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      {/* Navegación */}
      <nav className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#003366] transition-colors w-max">
          <ChevronLeft size={16} />
          <Link href="/preguntas-examen-seremi-farmacologia">Volver al Hub de Farmacología</Link>
        </div>
      </nav>

      <section className="bg-[#28a745] text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Módulo: Dispensación Segura
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Medicamentos de Venta Directa (VD)
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-2xl mx-auto">
            Lo que el auxiliar debe saber sobre AINES y Antihistamínicos para promover el Uso Racional de Medicamentos.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

        {/* ALERTA DE SEGURIDAD (Snippet Legal) */}
        <section className="bg-white p-8 rounded-3xl border-2 border-amber-400 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="text-amber-500 shrink-0" size={40} />
            <div>
              <h2 className="text-2xl font-black text-[#003366] uppercase tracking-widest">Alerta de Seguridad Sanitaria</h2>
              <p className="text-slate-600 mt-2">
                Aunque los medicamentos de Venta Directa (VD) son seguros para su uso sin supervisión médica, el auxiliar tiene el deber ético y la responsabilidad legal de educar al usuario. El uso irresponsable o innecesario puede enmascarar enfermedades, atenuar síntomas de forma breve o incluso agravar la salud del paciente.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2">AINES (Anti-inflamatorios no esteroidales)</h3>
              <p className="text-sm text-amber-800/80 leading-relaxed italic">Ejemplos: Ibuprofeno, Naproxeno, Ácido Acetilsalicílico</p>
              <p className="text-sm text-amber-800/80 leading-relaxed mt-2">
                <strong className="block text-amber-950">Riesgos:</strong>
                <br/>Gastritis y hemorragias digestivas: Son los riesgos más habituales, especialmente en adultos mayores que sufren procesos inflamatorios crónicos.
                <br/>Daño renal: El uso indiscriminado y permanente puede causar nefritis intersticial.
                <br/><strong className="block mt-2">Advertencia: ¡Pregunta siempre si el paciente sufre de gastritis o úlceras antes de expender!</strong>
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Antihistamínicos / Antialérgicos</h3>
              <p className="text-sm text-blue-800/80 leading-relaxed italic">Ejemplos: Clorfenamina, Loratadina</p>
              <p className="text-sm text-blue-800/80 leading-relaxed mt-2">
                <strong className="block text-blue-950">Riesgos:</strong>
                <br/>Sedación y sueño: Provocan sueño y disminuyen la capacidad de concentración (especialmente la Clorfenamina).
                <br/>Sequedad de mucosas: Producen sequedad en la boca, nariz y garganta.
                <br/><strong className="block mt-2">Advertencia de seguridad vital: Están contraindicados en personas que realicen actividades que requieran estado de alerta, como la conducción de vehículos o el manejo de maquinarias.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* WIDGET CTO: Pregunta del Día */}
        <section className="bg-white p-8 rounded-3xl border-2 border-[#003366] shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="text-[#28a745]" size={32} />
            <h2 className="text-2xl font-black text-[#003366]">La Pregunta del Día</h2>
          </div>
          
          <p className="text-lg md:text-xl font-bold text-slate-800 mb-6">
            Un usuario solicita Ibuprofeno de venta directa. ¿Cuál es la advertencia prioritaria que debe realizar el auxiliar?
          </p>
          
          {!answered ? (
            <div className="space-y-3">
              <button onClick={() => handleAnswer(false)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#003366] hover:bg-slate-50 transition-all">A) Solo se puede tomar con agua mineral.</button>
              <button onClick={() => handleAnswer(true)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#003366] hover:bg-slate-50 transition-all">B) Consultar si sufre de problemas estomacales o úlceras.</button>
              <button onClick={() => handleAnswer(false)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#003366] hover:bg-slate-50 transition-all">C) Puede tomarse cualquier cantidad mientras duela.</button>
            </div>
          ) : (
            <div className={`p-6 rounded-2xl border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
              <h3 className={`font-black text-xl mb-2 ${isCorrect ? 'text-[#28a745]' : 'text-red-600'}`}>
                {isCorrect ? '¡Excelente criterio!' : 'Respuesta Incorrecta'}
              </h3>
              <p className="text-slate-700 font-medium mb-4">
                {isCorrect 
                  ? "Correcto. Fundamentación legal y técnica: Los AINES están contraindicados en personas con inflamación crónica del tracto gastrointestinal o úlceras activas, ya que su uso se asocia directamente a la sensación de ardor estomacal y riesgos de hemorragia. El auxiliar debe fomentar el uso de alternativas más seguras para el dolor, como el paracetamol, en pacientes con sensibilidad gástrica." 
                  : "¡Cuidado! Los AINES son potentes y pueden causar daños severos en el tracto digestivo. Tu rol es prevenir."}
              </p>
              <Link href="/quiz/basic">
                <button className="bg-[#003366] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#002244] w-full sm:w-auto">
                  Seguir practicando
                </button>
              </Link>
            </div>
          )}
        </section>

        {/* CTA CONVERSIÓN */}
        <section className="bg-slate-900 text-white p-10 rounded-3xl text-center shadow-xl">
          <h2 className="text-3xl font-black mb-6">¿Quieres dominar la dispensación?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Accede al banco de preguntas sobre farmacología básica y prepárate con casos reales de mesón.
          </p>
          <Link href="/planes" className="inline-flex items-center gap-2 px-8 py-4 bg-[#28a745] text-white font-black rounded-xl hover:bg-[#218838] transition-all">
            Desbloquear Banco de Preguntas PRO <ArrowRight size={20} />
          </Link>
        </section>

      </div>
    </main>
  );
}