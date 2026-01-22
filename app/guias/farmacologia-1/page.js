"use client"; // 👈 Necesario para el Quiz interactivo
import { useState } from 'react';
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Clock, Zap, Activity, Pill, Thermometer, GraduationCap, PlayCircle, MonitorPlay, X, CheckCircle, XCircle } from "lucide-react";

// ⚠️ NOTA: Al usar "use client", la metadata no se puede exportar desde este archivo.
// Deberías moverla a layout.js o usar un componente wrapper si el SEO es crítico para esta página.
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
                            <li><strong>Vía Renal (Orina):</strong> La más importante. Si el riñón falla (insuficiencia renal), el medicamento se acumula y intoxica.</li>
                            <li><strong>Vía Biliar (Heces), Pulmonar o Leche Materna.</strong></li>
                        </ul>
                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                             <strong className="text-emerald-800 block text-lg mb-1">Concepto Clave: Vida Media (t1/2)</strong>
                             <p className="text-emerald-700 mb-2">Es el tiempo que tarda la concentración del fármaco en la sangre en reducirse a la mitad. Esto determina <strong>cada cuántas horas se toma</strong>.</p>
                             <ul className="text-emerald-700 text-sm list-disc ml-5">
                                <li><strong>Vida media corta:</strong> Se toma cada 6 u 8 horas (Ej: Paracetamol).</li>
                                <li><strong>Vida media larga:</strong> Se toma cada 24 horas (Ej: Losartán).</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr className="border-slate-200" />

        {/* 3. FORMAS FARMACÉUTICAS */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-700">
                    <Clock size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">3. Formas Farmacéuticas y Velocidad de Efecto</h2>
            </div>
            
            <p className="mb-8 text-lg">Para entender la rapidez de acción, primero debemos conocer al detalle qué es lo que estamos vendiendo.</p>

            <h3 className="text-2xl font-bold text-slate-800 mb-6">A. Clasificación de Formas Farmacéuticas</h3>
            <p className="mb-6">Las formas se diseñan para proteger el principio activo, enmascarar sabores y facilitar la administración.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Solidas */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-purple-700 mb-4 border-b border-purple-100 pb-2 text-lg">1. Formas Sólidas</h4>
                    <ul className="space-y-4 text-sm text-slate-700">
                        <li>
                            <strong className="block text-slate-900">Comprimidos (Tabletas):</strong> Polvo comprimido a alta presión.
                            <ul className="pl-3 mt-1 space-y-1 text-slate-500 list-disc">
                                <li>Recubiertos (protección/sabor).</li>
                                <li>Efervescentes (disolución previa).</li>
                                <li>Sublinguales (evitan hígado).</li>
                                <li>Masticables.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="block text-slate-900">Cápsulas:</strong>
                            <span className="block text-slate-500">Duras (polvo) y Blandas (líquido/aceite).</span>
                        </li>
                        <li>
                            <strong className="block text-slate-900">Supositorios / Óvulos:</strong>
                            <span className="block text-slate-500">Se funden a 37°C.</span>
                        </li>
                    </ul>
                </div>

                {/* Liquidas */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-blue-700 mb-4 border-b border-blue-100 pb-2 text-lg">2. Formas Líquidas</h4>
                    <ul className="space-y-4 text-sm text-slate-700">
                        <li>
                            <strong className="block text-slate-900">Soluciones:</strong>
                            <span className="block text-slate-500">Mezclas homogéneas, totalmente disueltas (Ej: Jarabes simples, Gotas).</span>
                        </li>
                        <li>
                            <strong className="block text-slate-900">Suspensiones:</strong>
                            <span className="block text-slate-500">Mezclas heterogéneas, polvo flota.</span>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-bold mt-1 inline-block">¡Siempre agitar antes de usar!</span>
                            <span className="block text-slate-400 italic text-xs">(Ej: Amoxicilina pediátrica).</span>
                        </li>
                        <li>
                            <strong className="block text-slate-900">Emulsiones:</strong>
                            <span className="block text-slate-500">Mezcla de agua y aceite.</span>
                        </li>
                        <li>
                            <strong className="block text-slate-900">Jarabes:</strong>
                            <span className="block text-slate-500">Soluciones con alta concentración de azúcar (sacarosa). Cuidado con diabéticos.</span>
                        </li>
                    </ul>
                </div>

                 {/* Semisólidas */}
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-emerald-700 mb-4 border-b border-emerald-100 pb-2 text-lg">3. Formas Semisólidas</h4>
                    <span className="text-xs uppercase tracking-wide text-emerald-600 font-bold mb-3 block">Uso Tópico / Dermo</span>
                    <ul className="space-y-4 text-sm text-slate-700">
                        <li>
                            <strong className="block text-slate-900">Ungüentos (Pomadas):</strong>
                            <span className="block text-slate-500">Base grasa, oclusivos. Ideales para piel seca o costras.</span>
                        </li>
                        <li>
                            <strong className="block text-slate-900">Cremas:</strong>
                            <span className="block text-slate-500">Emulsión agua/aceite. Absorción rápida. Ideales para piel normal.</span>
                        </li>
                        <li>
                            <strong className="block text-slate-900">Geles:</strong>
                            <span className="block text-slate-500">Base agua/alcohol. Sin grasa. Ideales para piel grasa o con vellos.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-6">B. Semáforo de Velocidad: Aplicación Práctica</h3>
            <p className="mb-6">Ahora conectamos la forma farmacéutica con la vía de administración para saber <strong>cuánto tarda en hacer efecto</strong>.</p>
            
            <div className="space-y-5">
                {/* ROJO */}
                <div className="flex rounded-xl border border-red-200 bg-red-50 overflow-hidden shadow-sm">
                    <div className="bg-red-500 w-3 shrink-0"></div>
                    <div className="p-5">
                        <h4 className="font-bold text-red-800 text-lg flex items-center gap-2 mb-1">
                            🔴 Velocidad "Fórmula 1" (Efecto Inmediato: 1 a 5 min)
                        </h4>
                        <p className="text-red-700 text-sm font-medium mb-3 uppercase tracking-wide">Se usan en urgencias o crisis</p>
                        <ul className="list-disc ml-5 space-y-2 text-slate-800">
                            <li><strong>Vía Intravenosa (IV):</strong> Es la campeona indiscutible. El fármaco entra directo a la sangre. <strong>No hay absorción</strong> (se salta la "A" del LADME). Efecto instantáneo.</li>
                            <li><strong>Vía Inhalatoria (Aerosoles):</strong> Al ir directo al pulmón (órgano muy irrigado), el alivio del asma es en segundos.</li>
                            <li><strong>Vía Sublingual:</strong> Al poner el comprimido bajo la lengua, entra a la red venosa que va directo al corazón, <strong>saltándose el hígado</strong> (evita el primer paso). Ideal para crisis hipertensivas o dolor agudo.</li>
                        </ul>
                    </div>
                </div>

                {/* AMARILLO */}
                <div className="flex rounded-xl border border-yellow-200 bg-yellow-50 overflow-hidden shadow-sm">
                    <div className="bg-yellow-400 w-3 shrink-0"></div>
                    <div className="p-5">
                        <h4 className="font-bold text-yellow-800 text-lg flex items-center gap-2 mb-1">
                            🟡 Velocidad Rápida (Líquidos y Solubles: 15 a 30 min)
                        </h4>
                        <p className="text-yellow-800 text-sm font-medium mb-3 uppercase tracking-wide">Si el paciente tiene mucho dolor y no puede esperar una hora</p>
                        <ul className="list-disc ml-5 space-y-2 text-slate-800">
                            <li><strong>Comprimidos Efervescentes:</strong> Al disolverse en agua <em>antes</em> de tomarlo, el cuerpo se ahorra el trabajo de desintegrarlo. Pasan rápido al intestino.</li>
                            <li><strong>Soluciones Orales y Cápsulas Blandas:</strong> El fármaco ya está disuelto o en estado líquido. La cápsula de gelatina se rompe en minutos en el estómago.</li>
                        </ul>
                    </div>
                </div>

                {/* VERDE */}
                <div className="flex rounded-xl border border-emerald-200 bg-emerald-50 overflow-hidden shadow-sm">
                    <div className="bg-emerald-500 w-3 shrink-0"></div>
                    <div className="p-5">
                        <h4 className="font-bold text-emerald-800 text-lg flex items-center gap-2 mb-1">
                            🟢 Velocidad Estándar (Sólidos Convencionales: 30 a 60 min)
                        </h4>
                        <p className="text-emerald-800 text-sm font-medium mb-3 uppercase tracking-wide">Es el estándar para tratamientos crónicos</p>
                        <ul className="list-disc ml-5 space-y-2 text-slate-800">
                            <li><strong>Comprimidos y Cápsulas Duras:</strong> El cuerpo tiene que hidratarlos, romperlos (desintegración) y disolverlos antes de absorberlos. Este proceso mecánico toma tiempo.</li>
                        </ul>
                    </div>
                </div>

                 {/* AZUL */}
                 <div className="flex rounded-xl border border-blue-200 bg-blue-50 overflow-hidden shadow-sm">
                    <div className="bg-blue-500 w-3 shrink-0"></div>
                    <div className="p-5">
                        <h4 className="font-bold text-blue-800 text-lg flex items-center gap-2 mb-1">
                            🔵 Velocidad Lenta y Controlada (Liberación Prolongada)
                        </h4>
                        <p className="text-blue-800 text-sm font-medium mb-3 uppercase tracking-wide">Aquí NO buscamos rapidez, buscamos duración de 12 a 24 horas</p>
                        <ul className="list-disc ml-5 space-y-2 text-slate-800 mb-4">
                            <li><strong>Siglas a vigilar:</strong> XR, ER, CR, Retard, LP.</li>
                            <li><strong>La Tecnología:</strong> Tienen una "matriz" que suelta el fármaco gota a gota.</li>
                        </ul>
                        <div className="bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex gap-3 items-center">
                            <AlertTriangle size={24} className="shrink-0" /> 
                            <div>
                                <span className="font-bold block">⚠️ REGLA DE ORO: ¡NUNCA TRITURAR!</span>
                                <span className="text-sm">Si mueles un comprimido "Retard", rompes la matriz y liberas la dosis de todo el día de golpe (Dumping de dosis), causando toxicidad.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr className="border-slate-200" />

        {/* 4. FARMACODINAMIA */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-lg text-amber-700">
                    <Zap size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">4. Farmacodinamia: El Mecanismo de Acción</h2>
            </div>
            
            <p className="mb-6 text-lg">La Farmacodinamia estudia "lo que el fármaco le hace al organismo". Es el mecanismo molecular por el cual se cura o alivia un síntoma.</p>
            
            

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">La Teoría del Receptor (Llave y Cerradura)</h3>
                <p className="mb-6 text-lg">Las células tienen "interruptores" en su superficie llamados <strong>Receptores</strong>. Los fármacos actúan como llaves que encajan en esos receptores.</p>

                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-emerald-700 mb-2">1. Fármacos Agonistas (Activadores)</h4>
                        <p className="text-slate-700 mb-2">Son fármacos que tienen <strong>afinidad</strong> (encajan) y <strong>eficacia</strong> (activan).</p>
                        <p className="text-slate-700 mb-3">Se unen al receptor y lo "encienden", imitando una sustancia natural del cuerpo.</p>
                        <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 italic text-emerald-900">
                            <strong>Ejemplo:</strong> El <strong>Salbutamol</strong> es agonista de los receptores Beta-2 en los pulmones. Al activarlos, ordena a los bronquios que se dilaten (abran) para respirar mejor.
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-red-700 mb-2">2. Fármacos Antagonistas (Bloqueadores)</h4>
                        <p className="text-slate-700 mb-2">Son fármacos que tienen <strong>afinidad</strong> (encajan) pero <strong>NO tienen eficacia</strong> (no activan).</p>
                        <p className="text-slate-700 mb-3">Se unen al receptor y lo "tapan" o bloquean, impidiendo que las sustancias naturales del cuerpo actúen.</p>
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 italic text-red-900">
                            <strong>Ejemplo:</strong> Los <strong>Antihistamínicos</strong> (Loratadina). Bloquean el receptor de la Histamina. Cuando llega la alergia (Histamina), encuentra el receptor ocupado y no puede producir picazón ni estornudos.
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-slate-100 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Conceptos de Seguridad</h3>
                <ul className="space-y-4">
                    <li className="flex gap-3">
                        <div className="bg-slate-300 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                        <div>
                            <strong className="block text-slate-900">Ventana Terapéutica:</strong>
                            <span className="text-slate-700">Es el margen de seguridad entre la dosis mínima que cura y la dosis mínima que intoxica.</span>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <div className="bg-emerald-400 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                        <div>
                            <strong className="block text-slate-900">Ventana amplia:</strong>
                            <span className="text-slate-700">Medicamentos seguros (Paracetamol, Amoxicilina).</span>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <div className="bg-red-500 w-2 h-2 rounded-full mt-2 shrink-0"></div>
                        <div>
                            <strong className="block text-slate-900">Ventana estrecha:</strong>
                            <span className="text-slate-700">Medicamentos peligrosos donde una pequeña subida de dosis puede ser fatal (Warfarina, Digoxina, Levotiroxina). <strong>Estos requieren monitoreo estricto.</strong></span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <hr className="border-slate-200" />

        {/* 5. BIOEQUIVALENCIA */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-100 rounded-lg text-teal-700">
                    <Thermometer size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">5. Bioequivalencia: La Garantía de Calidad</h2>
            </div>
            
            <p className="mb-6 text-lg">En Chile, la Ley de Fármacos exige comprobar que los genéricos funcionen igual que los originales.</p>

            <ul className="space-y-4 text-lg">
                <li className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <strong className="text-teal-800">El Innovador:</strong> El medicamento original que desarrolló la molécula (Ej: Aspirina).
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <strong className="text-teal-800">Biodisponibilidad Comparada:</strong> Se hace un estudio clínico (en humanos sanos) donde se compara la curva de concentración en sangre del <strong>Referente (Original)</strong> vs. el <strong>Test (Copia)</strong>.
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <strong className="text-teal-800">El criterio:</strong> Para ser Bioequivalente (<strong>franja amarilla</strong>), las curvas de ambos (la cantidad que llega a la sangre y la velocidad con que llega) deben ser estadísticamente idénticas.
                </li>
            </ul>

            <div className="mt-6 bg-teal-600 text-white p-6 rounded-xl text-center font-bold text-xl shadow-lg">
                Conclusión: Un Bioequivalente garantiza el mismo efecto terapéutico (Farmacodinamia) porque tiene la misma Farmacocinética que el original. Es 100% intercambiable.
            </div>
        </section>

        {/* GLOSARIO */}
        <section className="bg-slate-900 text-slate-300 p-8 md:p-10 rounded-3xl mt-16">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-5">
                <GraduationCap className="text-emerald-400" size={40} />
                <h2 className="text-3xl font-bold text-white">Glosario Técnico (Para Memorizar)</h2>
            </div>
            
            <dl className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                    { term: "Afinidad", def: "Capacidad de un fármaco para unirse a un receptor específico." },
                    { term: "Agonista", def: "Fármaco que activa un receptor y provoca una respuesta biológica." },
                    { term: "Antagonista", def: "Fármaco que bloquea un receptor e impide que actúen las sustancias naturales." },
                    { term: "Biodisponibilidad", def: "Porcentaje del fármaco que llega inalterado a la circulación sanguínea." },
                    { term: "Bioequivalente", def: "Medicamento que ha demostrado tener la misma biodisponibilidad que el innovador." },
                    { term: "Excipiente", def: "Sustancia inactiva usada para dar forma, estabilidad y sabor al medicamento." },
                    { term: "Farmacocinética", def: "Rama que estudia el movimiento del fármaco en el cuerpo (LADME)." },
                    { term: "Farmacodinamia", def: "Rama que estudia el efecto del fármaco y su mecanismo de acción." },
                    { term: "LADME", def: "Liberación, Absorción, Distribución, Metabolismo y Excreción." },
                    { term: "Primer Paso Hepático", def: "Metabolismo previo que sufre el fármaco en el hígado antes de llegar a la sangre sistémica." },
                    { term: "Suspensión", def: "Líquido turbio donde el polvo no se disuelve; requiere agitación." },
                    { term: "Ventana Terapéutica", def: "Rango entre la dosis mínima eficaz y la dosis mínima tóxica." },
                    { term: "Vida Media (t1/2)", def: "Tiempo necesario para que la concentración del fármaco en la sangre se reduzca a la mitad." },
                ].map((item, idx) => (
                    <div key={idx}>
                        <dt className="font-bold text-emerald-400 mb-2 text-lg">{item.term}</dt>
                        <dd className="text-base leading-relaxed text-slate-300 border-l-2 border-slate-700 pl-4">{item.def}</dd>
                    </div>
                ))}
            </dl>
        </section>

        {/* ACCESOS RÁPIDOS (BOTONES ACTUALIZADOS) */}
        <section className="mt-16 grid md:grid-cols-3 gap-6">
             {/* 1. BOTÓN QUIZ: ABRE MODAL FLOTANTE */}
             <button 
                onClick={() => setShowQuiz(true)}
                className="group bg-emerald-600 hover:bg-emerald-500 text-white p-8 rounded-2xl transition-all shadow-lg hover:shadow-xl flex flex-col items-center text-center w-full"
             >
                <PlayCircle size={48} className="mb-4 text-emerald-100 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Pon a prueba lo aprendido</h3>
                <p className="text-emerald-100 mb-6">Realiza un Quiz rápido de 10 preguntas sobre esta guía.</p>
                <span className="bg-white/20 px-6 py-2 rounded-full font-bold text-sm">Iniciar Quiz Ahora</span>
             </button>

             {/* 2. SIMULADOR: LINK A /QUIZ */}
             <Link href="/quiz" className="group bg-blue-600 hover:bg-blue-500 text-white p-8 rounded-2xl transition-all shadow-lg hover:shadow-xl flex flex-col items-center text-center">
                <MonitorPlay size={48} className="mb-4 text-blue-100 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">Simulador de Examen</h3>
                <p className="text-blue-100 mb-6">Supera los 7 niveles de dificultad en nuestro simulador oficial.</p>
                <span className="bg-white/20 px-6 py-2 rounded-full font-bold text-sm">Ir al Simulador</span>
             </Link>

             {/* 3. DERMOCHECK: EXTERNAL LINK */}
             <a href="https://dermocheck.cl" target="_blank" rel="noopener noreferrer" className="group bg-slate-800 hover:bg-slate-700 text-white p-8 rounded-2xl transition-all shadow-lg hover:shadow-xl flex flex-col items-center text-center">
                <Clock size={48} className="mb-4 text-slate-300 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">DermoCheck</h3>
                <p className="text-slate-300 mb-6">Verifica vencimientos de dermocosmética mediante código de lote.</p>
                <span className="bg-white/10 px-6 py-2 rounded-full font-bold text-sm">Ver Vencimientos</span>
             </a>
        </section>

      </div>
    </article>
  );
}

// --- COMPONENTE QUIZ MODAL ---
function QuizModal({ onClose }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState(null);

  const questions = [
    {
      q: "¿Qué diferencia técnica existe entre Fármaco y Medicamento?",
      options: [
        "Son sinónimos exactos.",
        "El Fármaco es la sustancia pura y el Medicamento es el producto final con excipientes.",
        "El Medicamento es la sustancia pura y el Fármaco es el nombre comercial.",
        "El Fármaco es líquido y el Medicamento es sólido."
      ],
      ans: 1
    },
    {
      q: "¿Qué significan las siglas LADME?",
      options: [
        "Limpieza, Aseo, Desinfección, Mantenimiento, Entrega.",
        "Liberación, Absorción, Distribución, Metabolismo, Excreción.",
        "Laboratorio, Administración, Dosis, Medicamento, Efecto.",
        "Líquido, Activo, Dosis, Mezcla, Envase."
      ],
      ans: 1
    },
    {
      q: "¿Cuál es la función principal del Hígado en la farmacología?",
      options: [
        "Absorción.",
        "Distribución.",
        "Metabolismo.",
        "Excreción."
      ],
      ans: 2
    },
    {
      q: "¿Qué vía de administración tiene una Biodisponibilidad del 100%?",
      options: [
        "Vía Oral.",
        "Vía Intramuscular.",
        "Vía Subcutánea.",
        "Vía Intravenosa."
      ],
      ans: 3
    },
    {
      q: "¿Qué significa que un medicamento sea Bioequivalente?",
      options: [
        "Que es más barato.",
        "Que tiene el mismo color de caja.",
        "Que ha demostrado tener la misma biodisponibilidad y efecto que el original.",
        "Que se vende sin receta."
      ],
      ans: 2
    },
    {
      q: "¿Qué hace un fármaco Agonista?",
      options: [
        "Bloquea el receptor.",
        "Activa el receptor imitando una sustancia natural.",
        "Destruye el receptor.",
        "No tiene efecto."
      ],
      ans: 1
    },
    {
      q: "¿Qué hace un fármaco Antagonista?",
      options: [
        "Activa el receptor.",
        "Acelera el metabolismo.",
        "Bloquea el receptor impidiendo la acción de sustancias naturales.",
        "Mejora el sabor del medicamento."
      ],
      ans: 2
    },
    {
      q: "¿Cuál es la regla de oro con los comprimidos de Liberación Prolongada (Retard)?",
      options: [
        "Triturarlos para que actúen más rápido.",
        "Tomarlos con leche.",
        "Nunca triturarlos ni partirlos.",
        "Disolverlos en agua caliente."
      ],
      ans: 2
    },
    {
      q: "¿Qué es la Vida Media de un fármaco?",
      options: [
        "La fecha de vencimiento.",
        "El tiempo que tarda en reducirse a la mitad su concentración en sangre.",
        "La mitad del tiempo que dura el tratamiento.",
        "El tiempo que tarda en absorberse."
      ],
      ans: 1
    },
    {
      q: "¿Cuál es el órgano principal de la excreción?",
      options: [
        "Hígado.",
        "Estómago.",
        "Riñón.",
        "Corazón."
      ],
      ans: 2
    }
  ];

  const handleAnswer = (index) => {
    setSelected(index);
    if (index === questions[currentQ].ans) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header Modal */}
        <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <GraduationCap /> Quiz Rápido: Farmacología
          </h3>
          <button onClick={onClose} className="hover:bg-emerald-700 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!finished ? (
            <>
              <div className="flex justify-between text-sm font-bold text-slate-400 mb-4">
                <span>Pregunta {currentQ + 1} de {questions.length}</span>
                <span className="text-emerald-600">{score} Aciertos</span>
              </div>
              
              <h4 className="text-xl font-bold text-slate-800 mb-6 min-h-[3.5rem]">
                {questions[currentQ].q}
              </h4>

              <div className="space-y-3">
                {questions[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !selected && handleAnswer(idx)}
                    disabled={selected !== null}
                    className={`w-full text-left p-4 rounded-xl border transition-all font-medium
                      ${selected === null 
                        ? 'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700' 
                        : idx === questions[currentQ].ans 
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-800'
                          : selected === idx 
                            ? 'bg-red-100 border-red-500 text-red-800'
                            : 'border-slate-100 text-slate-400'
                      }
                    `}
                  >
                    <div className="flex justify-between items-center">
                      {opt}
                      {selected !== null && idx === questions[currentQ].ans && <CheckCircle size={20} className="text-emerald-600" />}
                      {selected !== null && selected === idx && idx !== questions[currentQ].ans && <XCircle size={20} className="text-red-600" />}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="inline-block p-4 bg-emerald-100 rounded-full text-emerald-600 mb-4">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Quiz Finalizado!</h3>
              <p className="text-slate-600 mb-6">Tu puntuación final es:</p>
              
              <div className="text-5xl font-black text-emerald-600 mb-8">
                {score} / {questions.length}
              </div>

              <div className="flex gap-3 justify-center">
                <button onClick={onClose} className="px-6 py-3 rounded-full font-bold text-slate-600 hover:bg-slate-100 transition-colors">
                  Cerrar
                </button>
                <button onClick={() => { setFinished(false); setCurrentQ(0); setScore(0); setSelected(null); }} className="px-6 py-3 rounded-full font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">
                  Repetir Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
