"use client"; // 👈 Necesario para el Quiz interactivo
import { useState } from 'react';
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Clock, Zap, Activity, Pill, Thermometer, GraduationCap, PlayCircle, MonitorPlay, X, CheckCircle, XCircle } from "lucide-react";

// ⚠️ NOTA: Al usar "use client", la metadata no se puede exportar aquí. 
// Deberías moverla a layout.js o usar un componente wrapper si el SEO es crítico.
/*
export const metadata = {
  title: "Guía 1: Fundamentos de Farmacología | Auxiliar de Farmacia",
  description: "Guía completa: Farmacotecnia, LADME, Farmacodinamia y Bioequivalencia. Texto oficial para estudio.",
};
*/

export default function GuiaFarmacologia() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <article className="min-h-screen bg-slate-50 font-sans pb-24 relative">
      
      {/* --- MODAL DEL QUIZ FLOTANTE --- */}
      {showQuiz && <QuizModal onClose={() => setShowQuiz(false)} />}

      {/* Header / Hero */}
      <header className="bg-emerald-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <Link href="/guias" className="inline-flex items-center text-emerald-200 hover:text-white mb-6 transition-colors font-medium">
                <ArrowLeft size={20} className="mr-2" /> Volver al Índice de Guías
            </Link>
            
            <span className="bg-emerald-800 text-emerald-100 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block border border-emerald-600">
                Módulo Técnico
            </span>
            
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
                Guía de Estudio 1: Fundamentos de Farmacología
            </h1>
            
            <p className="text-xl text-emerald-100 leading-relaxed font-light max-w-2xl">
                Un Auxiliar de Farmacia competente no solo despacha cajas; entiende la ciencia detrás del tratamiento. Esta guía profundiza en los pilares de la ciencia farmacéutica: Farmacotecnia, Farmacocinética y Farmacodinamia.
            </p>
        </div>
      </header>

      {/* Contenido Principal */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 text-slate-700 leading-relaxed">

        {/* 1. FARMACOTECNIA */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700">
                    <Pill size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">1. Farmacotecnia: La Ciencia de la Formulación</h2>
            </div>
            
            <p className="text-lg mb-6">
                Es la disciplina que estudia la manipulación de las materias primas para darles una forma adecuada, que permita ser administrada a los seres vivos.
            </p>
            
            [Image of pharmaceutical dosage forms tablets capsules liquids]

            <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4">A. Diferencia Técnica: Fármaco vs. Medicamento</h3>
            <p className="mb-4">Es el error número uno en el mesón. Debes usar los términos con propiedad:</p>
            <ul className="space-y-4 mb-8">
                <li className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <strong className="text-emerald-700 block mb-2 text-lg">Fármaco (o Principio Activo - API):</strong>
                    Es la sustancia química pura responsable del efecto terapéutico. Por sí sola, suele ser inestable o difícil de administrar. <br/>
                    <em className="text-slate-500">Ejemplo: Paracetamol polvo.</em>
                </li>
                <li className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
                    <strong className="text-emerald-700 block mb-2 text-lg">Medicamento:</strong>
                    Es el producto tecnológico final. Es la suma de <strong>Fármaco + Excipientes + Técnica de Manufactura</strong>. <br/>
                    <em className="text-slate-500">Ejemplo: Comprimido de Paracetamol 500mg.</em>
                </li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4">B. Los Excipientes: No son "relleno"</h3>
            <p className="mb-4">
                Los excipientes son sustancias auxiliares que permiten que el medicamento sea estable, eficaz y seguro. Aunque no tienen actividad terapéutica, <strong>determinan la calidad del producto</strong>.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="bg-slate-100 p-4 rounded-lg"><span className="font-bold text-slate-900">Aglutinantes:</span> Mantienen los polvos unidos para formar la pastilla.</li>
                <li className="bg-slate-100 p-4 rounded-lg"><span className="font-bold text-slate-900">Desintegrantes:</span> Hacen que la pastilla "explote" o se deshaga al contacto con el jugo gástrico.</li>
                <li className="bg-slate-100 p-4 rounded-lg"><span className="font-bold text-slate-900">Correctores:</span> Enmascaran sabores amargos (sacarosa, saborizantes).</li>
                <li className="bg-slate-100 p-4 rounded-lg"><span className="font-bold text-slate-900">Conservantes:</span> Evitan que crezcan bacterias en jarabes o cremas (parabenos).</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg flex gap-4 items-start shadow-sm">
                <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                    <strong className="text-amber-900 block text-lg mb-1">💡 Ojo Clínico</strong>
                    <p className="text-amber-800">
                        Revisa siempre los excipientes en pacientes con alergias alimentarias. Muchos comprimidos usan <strong>Lactosa</strong> o <strong>Almidón de trigo (Gluten)</strong> como diluyentes.
                    </p>
                </div>
            </div>
        </section>

        <hr className="border-slate-200" />

        {/* 2. FARMACOCINÉTICA */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                    <Activity size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">2. Farmacocinética: El Viaje del Fármaco (LADME)</h2>
            </div>

            <p className="mb-6 text-lg">Antes de analizar el viaje, debemos hacer la distinción más importante de la farmacología para no confundirnos:</p>

            <div className="bg-slate-800 text-slate-100 p-6 rounded-2xl mb-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <strong className="text-emerald-400 text-xl block mb-2">Farmacodinamia</strong>
                        <span className="text-xs uppercase tracking-widest text-slate-400 block mb-3 font-bold">(Dinámica = Fuerza/Efecto)</span>
                        <p className="leading-relaxed">Estudia <em>"lo que el fármaco le hace al organismo"</em>. Es el efecto curativo (ej: bajar la fiebre, quitar el dolor, matar una bacteria). Esto lo veremos en detalle en el punto 4.</p>
                    </div>
                    <div className="border-t md:border-t-0 md:border-l border-slate-600 pt-6 md:pt-0 md:pl-8">
                        <strong className="text-blue-400 text-xl block mb-2">Farmacocinética</strong>
                        <span className="text-xs uppercase tracking-widest text-slate-400 block mb-3 font-bold">(Cinética = Movimiento)</span>
                        <p className="leading-relaxed">Estudia <em>"lo que el organismo le hace al fármaco"</em>. El cuerpo no se queda quieto; toma el medicamento, lo mueve, lo transforma y lo elimina.</p>
                    </div>
                </div>
            </div>

            [Image of LADME process pharmacokinetics]

            <p className="text-xl font-medium mb-8">El proceso farmacocinético se resume en el acrónimo <span className="font-black text-blue-700 tracking-widest bg-blue-50 px-2 rounded">LADME</span>:</p>

            <div className="space-y-10">
                {/* L */}
                <div className="flex gap-5">
                    <div className="font-black text-5xl text-slate-200 leading-none select-none">L</div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Liberación (El inicio)</h4>
                        <p className="mb-3 text-lg">Es el primer paso para que el fármaco pueda absorberse. El medicamento debe separarse de su forma farmacéutica.</p>
                        <ul className="list-disc list-inside text-slate-700 ml-2 space-y-1 mb-3">
                            <li><strong>Desintegración:</strong> La pastilla se rompe en trozos pequeños.</li>
                            <li><strong>Disolución:</strong> Las partículas se disuelven en los fluidos gástricos.</li>
                        </ul>
                        <p className="text-sm bg-slate-100 border-l-4 border-slate-400 pl-3 py-2 italic text-slate-600">
                            Nota: Los jarabes y soluciones IV se saltan este paso (actúan más rápido).
                        </p>
                    </div>
                </div>

                {/* A */}
                <div className="flex gap-5">
                    <div className="font-black text-5xl text-slate-200 leading-none select-none">A</div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Absorción (La entrada)</h4>
                        <p className="mb-4 text-lg">Es el paso del fármaco desde el sitio de administración hasta la circulación sanguínea (plasma).</p>
                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                            <strong className="text-blue-900 block text-lg mb-2">Concepto Clave: Biodisponibilidad</strong>
                            <p className="text-blue-800 mb-3">Es la cantidad real de fármaco que llega a la sangre inalterado.</p>
                            <ul className="text-blue-800 ml-5 list-disc space-y-1">
                                <li><strong>Vía Intravenosa (IV):</strong> Biodisponibilidad del 100% (todo entra directo).</li>
                                <li><strong>Vía Oral:</strong> Siempre es menor al 100% debido a la acidez del estómago y al "Efecto de Primer Paso".</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* D */}
                <div className="flex gap-5">
                    <div className="font-black text-5xl text-slate-200 leading-none select-none">D</div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Distribución (El transporte)</h4>
                        <p className="mb-3 text-lg">Una vez en la sangre, el fármaco debe viajar a los tejidos. ¿Cómo lo hace?</p>
                        <ul className="space-y-3">
                            <li className="bg-white p-3 rounded shadow-sm border border-slate-100">
                                <strong>Unión a Proteínas Plasmáticas:</strong> La mayoría de los fármacos viajan "pegados" a una proteína llamada <strong>Albúmina</strong>, que actúa como un taxi.
                            </li>
                            <li className="ml-4 list-disc text-slate-600"><strong>Fracción Unida:</strong> El fármaco va "en el taxi". No hace efecto mientras viaja.</li>
                            <li className="ml-4 list-disc text-slate-600"><strong>Fracción Libre:</strong> El fármaco se baja del taxi, atraviesa los tejidos y <strong>hace el efecto</strong>.</li>
                            <li className="bg-white p-3 rounded shadow-sm border border-slate-100">
                                <strong>Interacciones:</strong> Si dos fármacos compiten por el mismo "taxi" (Albúmina), uno puede desplazar al otro, aumentando su fracción libre y causando toxicidad. (Ej: Warfarina + Aspirina).
                            </li>
                        </ul>
                    </div>
                </div>

                 {/* M */}
                 <div className="flex gap-5">
                    <div className="font-black text-5xl text-slate-200 leading-none select-none">M</div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Metabolismo (La transformación)</h4>
                        <p className="mb-3 text-lg">El cuerpo detecta el fármaco como un agente extraño y trata de modificarlo para eliminarlo.</p>
                        <ul className="list-disc list-inside space-y-2 mb-4">
                            <li><strong>Órgano Principal:</strong> El Hígado.</li>
                            <li><strong>Sistema Enzimático:</strong> El hígado usa una "familia" de enzimas llamada <strong>Citocromo P450 (CYP)</strong> para oxidar y degradar los fármacos.</li>
                        </ul>
                        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                            <strong className="text-orange-900 block mb-1">Efecto de Primer Paso Hepático:</strong>
                            <p className="text-orange-800 text-sm">
                                Cuando tomas una pastilla, se absorbe en el intestino y va directo al hígado <em>antes</em> de llegar al resto del cuerpo. El hígado puede destruir una gran parte del fármaco antes de que haga efecto. (Por esto las dosis orales son más altas que las inyectables).
                            </p>
                        </div>
                    </div>
                </div>

                 {/* E */}
                 <div className="flex gap-5">
                    <div className="font-black text-5xl text-slate-200 leading-none select-none">E</div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Excreción (La salida)</h4>
                        <p className="mb-4 text-lg">La eliminación definitiva del fármaco y sus metabolitos del organismo.</p>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            <li><strong>Vía Renal (Orina):</strong> La más importante. Si el riñón falla (
