// Ruta: app/examen/preguntas-receta-retenida-cheque/page.js

"use client";

import { useState } from "react";
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle2, BrainCircuit, Scale, ChevronLeft } from "lucide-react";

export default function RecetasRetenidas() {
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (correct) => {
    setAnswered(true);
    setIsCorrect(correct);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans text-slate-800 pb-20">
      
      {/* Navegación */}
      <nav className="bg-[#FFFFFF] border-b border-slate-200 py-4 px-6 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm font-bold text-[#003366] hover:text-[#28a745] transition-colors w-max">
          <ChevronLeft size={16} />
          <Link href="/preguntas-examen-seremi-farmacologia">Volver al Hub de Farmacología</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#003366] text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-[#28a745] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Legislación Crítica
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            El Terror de las Recetas: <br/><span className="text-[#28a745]">Diferencias entre DTO 404 y 405</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Domina la distinción legal entre Estupefacientes y Psicotrópicos. Aprende qué receta exige la ley chilena para cada lista y asegura tu respuesta en el examen SEREMI.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        {/* Tabla Legal Comparativa */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Scale className="text-[#28a745]" size={32} />
            <h2 className="text-3xl font-black text-[#003366]">Tabla Legal Comparativa</h2>
          </div>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            El error más común es pensar que todos los psicotrópicos requieren Receta Cheque. La ley es clara: la exigencia de la receta depende de la <strong>Lista</strong> a la que pertenezca el principio activo.
          </p>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[#003366]">
                  <th className="p-5 border-b border-slate-200 font-black">Característica Legal</th>
                  <th className="p-5 border-b border-slate-200 font-black">Receta Médica Retenida</th>
                  <th className="p-5 border-b border-slate-200 font-black">Receta Cheque</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-[#003366] text-sm">Uso Principal</td>
                  <td className="p-5 text-slate-600 text-sm">Psicotrópicos de la Lista IV (ej: Clonazepam, Diazepam). Estupefacientes de las Listas I y II en dosis mínimas o según lo determine su registro sanitario (ej: Codeína en dosis bajas).</td>
                  <td className="p-5 text-slate-600 text-sm">Psicotrópicos de las Listas II y III (ej: Metilfenidato, Fenobarbital, Buprenorfina). Estupefacientes de las Listas I y II (ej: Morfina, Fentanilo).</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-[#003366] text-sm">Formato del Documento</td>
                  <td className="p-5 text-slate-600 text-sm">Debe ser extendida íntegramente por el médico y ser de carácter impreso cuando se trata de productos sujetos a control legal.</td>
                  <td className="p-5 text-slate-600 text-sm">Formato valorado oficial, confeccionado por la Central de Abastecimiento (CENABAST) y entregado por la SEREMI al médico.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-[#003366] text-sm">Vigencia</td>
                  <td className="p-5 text-slate-600 font-bold text-[#28a745] text-sm">30 días corridos desde su emisión.</td>
                  <td className="p-5 text-slate-600 font-bold text-[#28a745] text-sm">30 días corridos desde su emisión.</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-[#003366] text-sm">Registro en Farmacia</td>
                  <td className="p-5 text-slate-600 text-sm">Se anota en el Libro de Control correspondiente. Para benzodiazepinas de la Lista IV, registro de saldo simplificado. Original se archiva.</td>
                  <td className="p-5 text-slate-600 text-sm">Se anota en el Libro de Control. El original se archiva y se envían copias/relaciones al Servicio de Salud o ISP.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Preguntas Frecuentes Reales */}
        <section className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
          <h2 className="text-2xl font-black text-[#003366] mb-8 text-center uppercase tracking-widest">
            Preguntas Frecuentes Reales
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <span className="inline-block bg-[#28a745] text-white font-bold px-3 py-1 rounded-lg mb-3 text-xs uppercase tracking-wider">Pregunta de Examen</span>
              <h3 className="font-black text-[#003366] text-xl leading-snug mb-4">¿Puede un Auxiliar de Farmacia despachar una Receta Cheque si el Director Técnico no está presente?</h3>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="inline-block text-[#28a745] font-black mb-2 text-sm uppercase tracking-wider">Respuesta Oficial:</span>
                <p className="text-slate-600 leading-relaxed text-lg">No. Según los Decretos 404 y 405, las recetas cheque y retenidas que prescriban estupefacientes o psicotrópicos deben ser despachadas personalmente por el Director Técnico de la farmacia. El auxiliar solo puede asistir bajo la supervisión directa de este.</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <span className="inline-block bg-[#28a745] text-white font-bold px-3 py-1 rounded-lg mb-3 text-xs uppercase tracking-wider">Pregunta de Examen</span>
              <h3 className="font-black text-[#003366] text-xl leading-snug mb-4">¿Qué sucede si un paciente se presenta con una Receta Retenida emitida hace 32 días?</h3>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <span className="inline-block text-[#28a745] font-black mb-2 text-sm uppercase tracking-wider">Respuesta Oficial:</span>
                <p className="text-slate-600 leading-relaxed text-lg">La receta debe ser rechazada. La normativa chilena establece que tanto las Recetas Retenidas como las Recetas Cheque tienen una validez legal estricta de 30 días corridos contados desde la fecha en que ellas sean extendidas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Simulador */}
        <section className="bg-white p-8 rounded-3xl border-2 border-[#003366] shadow-xl relative">
          <div className="absolute top-0 right-0 bg-[#003366] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-wider">
            Simulador AuxiliarPro
          </div>
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="text-[#28a745]" size={32} />
            <h2 className="text-2xl font-black text-[#003366]">La Pregunta del Día</h2>
          </div>
          
          <div className="mb-6">
            <p className="text-lg md:text-xl font-bold text-slate-800 mb-6">
              De acuerdo al Decreto 405, la dispensación de Diazepam (Psicotrópico Lista IV) requiere:
            </p>
            
            {!answered ? (
              <div className="space-y-3">
                <button onClick={() => handleAnswer(false)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#003366] hover:bg-slate-50 transition-all font-medium text-slate-700">A) Receta Simple.</button>
                <button onClick={() => handleAnswer(false)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#003366] hover:bg-slate-50 transition-all font-medium text-slate-700">B) Receta Cheque valorada por la SEREMI.</button>
                <button onClick={() => handleAnswer(true)} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-[#003366] hover:bg-slate-50 transition-all font-medium text-slate-700">C) Receta Médica Retenida.</button>
              </div>
            ) : (
              <div className={`p-6 rounded-2xl border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                <h3 className={`font-black text-xl mb-3 ${isCorrect ? 'text-[#28a745]' : 'text-red-600'}`}>{isCorrect ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta'}</h3>
                <p className="text-slate-700 font-medium mb-6 text-lg">
                  {isCorrect ? "Vas por buen camino. Confundir estos tipos de receta es causal de sumario sanitario." : "Error fatal de mesón. Confundir el tipo de receta es falta grave."}
                </p>
                <Link href="/planes">
                  <button className="bg-[#003366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#28a745] transition-all shadow-md w-full sm:w-auto flex items-center justify-center gap-2">
                    Desbloquear Banco de Preguntas PRO <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}