import Link from "next/link";
import { ArrowLeft, BookOpen, AlertTriangle, Clock, Zap, Activity, Pill, Thermometer, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Guía 1: Fundamentos de Farmacología | Auxiliar de Farmacia",
  description: "Guía de estudio completa sobre Farmacotecnia, LADME, Farmacodinamia y Vías de Administración. Material esencial para el examen de competencia.",
};

export default function GuiaFarmacologia() {
  return (
    <article className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header / Hero de la Guía */}
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
                Un Auxiliar de Farmacia competente no solo despacha cajas; entiende la ciencia detrás del tratamiento. Aprende aquí los pilares: Farmacotecnia, Cinética y Dinámica.
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
                <li className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <strong className="text-emerald-700 block mb-1">Fármaco (o Principio Activo - API):</strong>
                    Es la sustancia química pura responsable del efecto terapéutico. Por sí sola, suele ser inestable o difícil de administrar. <br/>
                    <em className="text-slate-500 text-sm">Ejemplo: Paracetamol polvo.</em>
                </li>
                <li className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                    <strong className="text-emerald-700 block mb-1">Medicamento:</strong>
                    Es el producto tecnológico final. Es la suma de <strong>Fármaco + Excipientes + Técnica de Manufactura</strong>. <br/>
                    <em className="text-slate-500 text-sm">Ejemplo: Comprimido de Paracetamol 500mg.</em>
                </li>
            </ul>

            <h3 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4">B. Los Excipientes: No son "relleno"</h3>
            <p className="mb-4">
                Los excipientes son sustancias auxiliares que permiten que el medicamento sea estable, eficaz y seguro. Aunque no tienen actividad terapéutica, <strong>determinan la calidad del producto</strong>.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="bg-slate-100 p-3 rounded-lg"><span className="font-bold">Aglutinantes:</span> Mantienen los polvos unidos para formar la pastilla.</li>
                <li className="bg-slate-100 p-3 rounded-lg"><span className="font-bold">Desintegrantes:</span> Hacen que la pastilla "explote" o se deshaga al contacto con el jugo gástrico.</li>
                <li className="bg-slate-100 p-3 rounded-lg"><span className="font-bold">Correctores:</span> Enmascaran sabores amargos (sacarosa, saborizantes).</li>
                <li className="bg-slate-100 p-3 rounded-lg"><span className="font-bold">Conservantes:</span> Evitan que crezcan bacterias en jarabes o cremas (parabenos).</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg flex gap-3">
                <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                    <strong className="text-amber-900 block">💡 Ojo Clínico</strong>
                    <p className="text-amber-800 text-sm">
                        Revisa siempre los excipientes en pacientes con alergias alimentarias. Muchos comprimidos usan <strong>Lactosa</strong> o <strong>Almidón de trigo (Gluten)</strong> como diluyentes.
                    </p>
                </div>
            </div>
        </section>

        <hr className="border-slate-200" />

        {/* 2. FARMACOCINÉTICA (LADME) */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-700">
                    <Activity size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">2. Farmacocinética: El Viaje del Fármaco (LADME)</h2>
            </div>

            <div className="bg-slate-800 text-slate-200 p-6 rounded-2xl mb-8">
                <p className="mb-4 font-medium text-white border-b border-slate-600 pb-2">Antes de seguir, la distinción más importante:</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <strong className="text-emerald-400 text-lg block mb-1">Farmacodinamia</strong>
                        <span className="text-sm opacity-80 block mb-2">(Dinámica = Fuerza/Efecto)</span>
                        <p className="text-sm">Estudia <em>"lo que el fármaco le hace al organismo"</em>. Es el efecto curativo (ej: bajar la fiebre). Lo veremos en el punto 4.</p>
                    </div>
                    <div>
                        <strong className="text-blue-400 text-lg block mb-1">Farmacocinética</strong>
                        <span className="text-sm opacity-80 block mb-2">(Cinética = Movimiento)</span>
                        <p className="text-sm">Estudia <em>"lo que el organismo le hace al fármaco"</em>. El cuerpo toma el medicamento, lo mueve, lo transforma y lo elimina.</p>
                    </div>
                </div>
            </div>

            <p className="text-lg font-medium mb-6">El proceso farmacocinético se resume en el acrónimo <span className="font-black text-blue-600 tracking-widest">LADME</span>:</p>

            <div className="space-y-8">
                {/* L */}
                <div className="flex gap-4">
                    <div className="font-black text-4xl text-slate-200">L</div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-800">Liberación (El inicio)</h4>
                        <p className="mb-2">Es el primer paso para que el fármaco pueda absorberse. El medicamento debe separarse de su forma farmacéutica.</p>
                        <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
                            <li><strong>Desintegración:</strong> La pastilla se rompe en trozos pequeños.</li>
                            <li><strong>Disolución:</strong> Las partículas se disuelven en los fluidos gástricos.</li>
                        </ul>
                        <span className="text-xs bg-slate-100 px-2 py-1 rounded mt-2 inline-block">Nota: Jarabes y soluciones IV se saltan este paso.</span>
                    </div>
                </div>

                {/* A */}
                <div className="flex gap-4">
                    <div className="font-black text-4xl text-slate-200">A</div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-800">Absorción (La entrada)</h4>
                        <p className="mb-2">Es el paso del fármaco desde el sitio de administración hasta la circulación sanguínea (plasma).</p>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <strong className="text-blue-800 block">Concepto Clave: Biodisponibilidad</strong>
                            <p className="text-sm text-blue-700">Es la cantidad real de fármaco que llega a la sangre inalterado.</p>
                            <ul className="text-sm text-blue-700 mt-1 ml-4 list-disc">
                                <li><strong>IV:</strong> 100% (todo entra directo).</li>
                                <li><strong>Oral:</strong> Menor al 100% (acidez y primer paso).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* D */}
                <div className="flex gap-4">
                    <div className="font-black text-4xl text-slate-200">D</div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-800">Distribución (El transporte)</h4>
                        <p className="mb-2">Una vez en la sangre, el fármaco viaja a los tejidos unido a proteínas (Albúmina).</p>
                        <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
                            <li><strong>Fracción Unida:</strong> Va "en el taxi". No hace efecto.</li>
                            <li><strong>Fracción Libre:</strong> Se baja del taxi. Hace el efecto.</li>
                        </ul>
                    </div>
                </div>

                 {/* M */}
                 <div className="flex gap-4">
                    <div className="font-black text-4xl text-slate-200">M</div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-800">Metabolismo (La transformación)</h4>
                        <p className="mb-2">El cuerpo trata de modificar el fármaco para eliminarlo. El órgano principal es el <strong>Hígado</strong> (sistema CYP450).</p>
                        <p className="text-sm bg-slate-100 p-2 rounded">
                            <strong>Efecto de Primer Paso Hepático:</strong> Al tomar una pastilla, pasa por el hígado antes de ir al cuerpo. El hígado puede "destruir" parte del fármaco antes de que haga efecto.
                        </p>
                    </div>
                </div>

                 {/* E */}
                 <div className="flex gap-4">
                    <div className="font-black text-4xl text-slate-200">E</div>
                    <div>
                        <h4 className="text-xl font-bold text-slate-800">Excreción (La salida)</h4>
                        <p className="mb-2">Eliminación por Vía Renal (Orina), Biliar o Pulmonar.</p>
                        <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                             <strong className="text-emerald-800 block">Concepto Clave: Vida Media (t1/2)</strong>
                             <p className="text-sm text-emerald-700">El tiempo que tarda la concentración en bajar a la mitad. Determina el horario (cada 8h, 12h, 24h).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <hr className="border-slate-200" />

        {/* 3. FORMAS FARMACÉUTICAS Y VELOCIDAD */}
        <section>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-700">
                    <Clock size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">3. Formas Farmacéuticas y Velocidad de Efecto</h2>
            </div>
            
            <p className="mb-8">Para entender la rapidez de acción, primero debemos conocer al detalle qué es lo que estamos vendiendo.</p>

            <h3 className="text-xl font-bold text-slate-800 mb-4">A. Clasificación de Formas Farmacéuticas</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Solidas */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-purple-700 mb-3 border-b border-purple-100 pb-2">1. Sólidas</h4>
                    <ul className="text-sm space-y-3">
                        <li>
                            <span className="font-bold block">Comprimidos:</span> Recubiertos, Efervescentes, Masticables, Sublinguales.
                        </li>
                        <li>
                            <span className="font-bold block">Cápsulas:</span>
                            <span className="block text-slate-500 text-xs">Duras: Contienen polvo.</span>
                            <span className="block text-slate-500 text-xs">Blandas: Contienen líquido.</span>
                        </li>
                        <li><span className="font-bold">Supositorios/Óvulos:</span> Se funden a 37°C.</li>
                    </ul>
                </div>

                {/* Liquidas */}
                <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">2. Líquidas</h4>
                    <ul className="text-sm space-y-3">
                        <li><span className="font-bold">Soluciones:</span> Homogéneas, totalmente disueltas (Gotas).</li>
                        <li><span className="font-bold">Suspensiones:</span> Heterogéneas, polvo flota. <span className="bg-yellow-100 px-1 rounded font-bold">¡Agitar!</span></li>
                        <li><span className="font-bold">Jarabes:</span> Alta concentración de azúcar.</li>
                    </ul>
                </div>

                 {/* Semisólidas */}
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-emerald-700 mb-3 border-b border-emerald-100 pb-2">3. Semisólidas (Dermo)</h4>
                    <ul className="text-sm space-y-3">
                        <li><span className="font-bold">Ungüentos:</span> Grasos, oclusivos. Piel seca.</li>
                        <li><span className="font-bold">Cremas:</span> Emulsión agua/aceite. Absorción rápida.</li>
                        <li><span className="font-bold">Geles:</span> Base agua/alcohol. Piel grasa/vellos.</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-6">B. Semáforo de Velocidad: Aplicación Práctica</h3>
            <div className="space-y-4">
                
                {/* ROJO */}
                <div className="flex overflow-hidden rounded-xl border border-red-200 bg-red-50">
                    <div className="bg-red-500 w-2 shrink-0"></div>
                    <div className="p-4">
                        <h4 className="font-bold text-red-700 flex items-center gap-2">
                            🔴 Velocidad "Fórmula 1" (1 a 5 min)
                        </h4>
                        <p className="text-sm text-red-900 mb-2 font-medium">Urgencias y Crisis</p>
                        <ul className="text-sm text-red-800 list-disc ml-4 space-y-1">
                            <li><strong>Vía Intravenosa (IV):</strong> Instantáneo. 100% Biodisponibilidad.</li>
                            <li><strong>Inhalatoria:</strong> Directo al pulmón (asma).</li>
                            <li><strong>Sublingual:</strong> Se salta el hígado (crisis hipertensiva).</li>
                        </ul>
                    </div>
                </div>

                {/* AMARILLO */}
                <div className="flex overflow-hidden rounded-xl border border-yellow-200 bg-yellow-50">
                    <div className="bg-yellow-400 w-2 shrink-0"></div>
                    <div className="p-4">
                        <h4 className="font-bold text-yellow-700 flex items-center gap-2">
                            🟡 Velocidad Rápida (15 a 30 min)
                        </h4>
                        <p className="text-sm text-yellow-900 mb-2 font-medium">Dolor intenso pero no urgencia vital</p>
                        <ul className="text-sm text-yellow-800 list-disc ml-4 space-y-1">
                            <li><strong>Efervescentes y Polvos:</strong> Ya disueltos, absorción veloz.</li>
                            <li><strong>Cápsulas Blandas (Softgel):</strong> Se rompen rápido en el estómago.</li>
                        </ul>
                    </div>
                </div>

                {/* VERDE */}
                <div className="flex overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
                    <div className="bg-emerald-500 w-2 shrink-0"></div>
                    <div className="p-4">
                        <h4 className="font-bold text-emerald-700 flex items-center gap-2">
                            🟢 Velocidad Estándar (30 a 60 min)
                        </h4>
                        <p className="text-sm text-emerald-900 mb-2 font-medium">Tratamientos crónicos</p>
                        <ul className="text-sm text-emerald-800 list-disc ml-4 space-y-1">
                            <li><strong>Comprimidos y Cápsulas Duras:</strong> Requieren desintegración y disolución previa.</li>
                        </ul>
                    </div>
                </div>

                 {/* AZUL */}
                 <div className="flex overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
                    <div className="bg-blue-500 w-2 shrink-0"></div>
                    <div className="p-4">
                        <h4 className="font-bold text-blue-700 flex items-center gap-2">
                            🔵 Velocidad Lenta (Liberación Prolongada)
                        </h4>
                        <p className="text-sm text-blue-900 mb-2 font-medium">Duración de 12 a 24 horas</p>
                        <ul className="text-sm text-blue-800 list-disc ml-4 space-y-1">
                            <li><strong>Siglas:</strong> XR, ER, CR, LP, Retard.</li>
                            <li><strong>Tecnología:</strong> Matriz que libera gota a gota.</li>
                        </ul>
                        <div className="mt-3 bg-red-100 text-red-700 px-3 py-2 rounded text-xs font-bold flex gap-2 items-center">
                            <AlertTriangle size={14} /> REGLA DE ORO: ¡NUNCA TRITURAR! Riesgo de toxicidad fatal.
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
            
            <p className="mb-6">Estudia "lo que el fármaco le hace al organismo". Se basa en la <strong>Teoría del Receptor (Llave y Cerradura)</strong>.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">1. Agonistas (Activadores)</h4>
                    <p className="text-sm text-slate-600 mb-4">Tienen afinidad (encajan) y eficacia (activan).</p>
                    <p className="text-sm bg-white p-3 rounded border border-slate-100 italic">
                        Ej: <strong>Salbutamol</strong>. Activa los bronquios para que se abran.
                    </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">2. Antagonistas (Bloqueadores)</h4>
                    <p className="text-sm text-slate-600 mb-4">Tienen afinidad pero NO eficacia (tapan).</p>
                    <p className="text-sm bg-white p-3 rounded border border-slate-100 italic">
                        Ej: <strong>Antihistamínicos</strong>. Bloquean el receptor de la alergia.
                    </p>
                </div>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-4">Conceptos de Seguridad</h3>
            <ul className="space-y-3 ml-4 list-disc text-slate-700">
                <li><strong>Ventana Terapéutica:</strong> Margen entre la dosis que cura y la que intoxica.</li>
                <li><strong>Ventana Amplia:</strong> Seguros (Paracetamol).</li>
                <li><strong>Ventana Estrecha:</strong> Peligrosos (Warfarina, Digoxina). Requieren monitoreo.</li>
            </ul>
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
            <p className="mb-4">Para que un genérico tenga la <strong>Franja Amarilla</strong>, debe demostrar científicamente:</p>
            <div className="bg-teal-50 border border-teal-200 p-5 rounded-xl">
                <ul className="space-y-2 text-teal-900">
                    <li className="flex gap-2"><span className="font-bold">1.</span> Misma cantidad de fármaco en sangre que el original.</li>
                    <li className="flex gap-2"><span className="font-bold">2.</span> Misma velocidad de llegada a la sangre.</li>
                </ul>
                <p className="mt-4 font-bold text-teal-800">Conclusión: Tiene la misma Farmacocinética = Tiene el mismo efecto terapéutico.</p>
            </div>
        </section>

        {/* GLOSARIO */}
        <section className="bg-slate-900 text-slate-300 p-8 rounded-3xl mt-12">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-700 pb-4">
                <GraduationCap className="text-emerald-400" size={32} />
                <h2 className="text-2xl font-bold text-white">Glosario Técnico (Para Memorizar)</h2>
            </div>
            
            <dl className="grid md:grid-cols-2 gap-x-8 gap-y-6">
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
                        <dt className="font-bold text-emerald-400 mb-1">{item.term}</dt>
                        <dd className="text-sm leading-relaxed">{item.def}</dd>
                    </div>
                ))}
            </dl>
        </section>

      </div>
    </article>
  );
}
