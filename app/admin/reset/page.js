"use client";

import { useState, useEffect } from "react";
// CORRECCIÓN FINAL: Subimos 2 niveles para llegar a 'app' y entrar a 'firebase'
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import { Loader2, ShieldCheck, Database, ArrowLeft } from "lucide-react";

export default function AdminVademecum() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [subiendo, setSubiendo] = useState(false);
  const [progreso, setProgreso] = useState(0);

  const ADMIN_EMAIL = "marcar1972@gmail.com";

  // Bloque de datos estratégicos MILAB
  const nuevosMedicamentosMilab = [
    {
      nombre: "Desloratadina 5mg",
      categoria: "Antihistamínico de 2da Generación",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Alivio rápido de síntomas de alergia, rinitis alérgica (estornudos, secreción nasal, picor) y urticaria. No produce sueño en la mayoría de los pacientes.",
      posologia: "Adultos y mayores de 12 años: 1 comprimido (5mg) al día. Se puede tomar con o sin alimentos.",
      contraindicaciones: "Hipersensibilidad a la loratadina o desloratadina. Precaución en insuficiencia renal grave.",
      tips_venta: "Destacar que es 'No sedante', ideal para personas que trabajan o manejan. Efecto prolongado por 24 horas.",
      cross_selling: "Ofrecer suero fisiológico nasal para lavados, o lágrimas artificiales si reporta picor ocular."
    },
    {
      nombre: "Ácido Mefenámico 500mg",
      categoria: "AINEs / Analgésico Antiinflamatorio",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Manejo del dolor agudo leve a moderado, especialmente dolor menstrual (dismenorrea) y dolor dental.",
      posologia: "Adultos: 500 mg como dosis inicial, seguida de 250 mg o 500 mg cada 6-8 horas según indicación médica.",
      contraindicaciones: "Úlcera péptica activa, insuficiencia renal grave, alergia a AINEs o aspirina. No usar en el tercer trimestre de embarazo.",
      tips_venta: "Advertir estrictamente que debe tomarse SIEMPRE después de las comidas para evitar gastritis profunda.",
      cross_selling: "Protectores gástricos (Omeprazol) si el tratamiento supera los 5 días, o guateros de semillas para dolores menstruales."
    },
    {
      nombre: "Pregabalina 75mg",
      categoria: "Sistema Nervioso / Anticonvulsivante y Neuropático",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Tratamiento del dolor neuropático periférico y central (ej. diabetes, herpes), fibromialgia y trastorno de ansiedad generalizada.",
      posologia: "La dosis debe ajustarse por el médico. Generalmente inicia entre 75 y 150 mg diarios divididos en 2 o 3 tomas.",
      contraindicaciones: "Hipersensibilidad al principio activo. Precaución en ancianos por riesgo de mareos y caídas.",
      tips_venta: "Advertir al paciente sobre la posible somnolencia o mareo en los primeros días. Evitar suspender abruptamente.",
      cross_selling: "Vitaminas del Complejo B (Neurobionta) como coadyuvante natural en reparación de nervios periféricos."
    },
    {
      nombre: "Alprazolam 0.5mg",
      categoria: "Sistema Nervioso / Ansiolítico Benzodiacepínico",
      lista_control: "Decreto 405",
      condicion_venta: "Receta Retenida",
      para_que_sirve: "Manejo a corto plazo de los trastornos de ansiedad, crisis de pánico y estrés severo con agitación.",
      posologia: "Estrictamente médica. Rango habitual: 0.25 a 0.5 mg tres veces al día. Dosis máxima determinada por psiquiatra.",
      contraindicaciones: "Miastenia gravis, glaucoma de ángulo cerrado, insuficiencia respiratoria aguda, apnea del sueño. Prohibido mezclar con alcohol.",
      tips_venta: "Verificar folio de receta, RUN y firma. Advertir tajantemente sobre no conducir maquinaria ni mezclar con alcohol por depresión respiratoria.",
      cross_selling: "Higiene del sueño: infusiones relajantes (melisa/pasiflora) o melatonina si el médico lo autoriza para regular el ciclo nocturno."
    },
    {
      nombre: "Clotrimazol 1% Crema",
      categoria: "Antimicótico Tópico",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Tratamiento de infecciones por hongos en la piel (tiña del pie/pie de atleta, tiña corporal, candidiasis cutánea).",
      posologia: "Aplicar una capa fina sobre la zona afectada y masajear suavemente 2 a 3 veces al día durante 2 a 4 semanas.",
      contraindicaciones: "Hipersensibilidad al clotrimazol. No aplicar en ojos ni mucosas profundas.",
      tips_venta: "Explicar la regla de oro: 'Siga aplicándolo 1 semana después de que desaparezcan los síntomas para matar la espora'.",
      cross_selling: "Talco antimicótico para los zapatos, jabón de ph neutro para mantener seca la zona."
    },
    {
      nombre: "Sildenafil 50mg",
      categoria: "Cardiovascular / Vasodilatador (Disfunción Eréctil)",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Tratamiento de la disfunción eréctil en hombres adultos, facilitando el flujo sanguíneo peneano bajo estímulo sexual.",
      posologia: "50 mg tomados a demanda, aproximadamente una hora antes de la actividad sexual. No superar 1 dosis diaria.",
      contraindicaciones: "ABSOLUTAMENTE CONTRAINDICADO en pacientes que toman nitratos (ej. Nitroglicerina, Isosorbide) por riesgo de caída fatal de presión arterial.",
      tips_venta: "Informar que los alimentos muy ricos en grasas pueden retrasar el efecto del medicamento.",
      cross_selling: "Preservativos, lubricantes a base de agua, o suplementos energéticos (Maca/Ginseng)."
    },
    {
      nombre: "Escitalopram 10mg",
      categoria: "Sistema Nervioso / Antidepresivo (ISRS)",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Tratamiento de episodios depresivos mayores, trastorno de pánico, fobia social y trastorno de ansiedad generalizada.",
      posologia: "Habitualmente 10 mg una vez al día. El médico puede aumentarla a 20 mg. Toma en la mañana o noche según tolerancia.",
      contraindicaciones: "No administrar junto a inhibidores de la MAO. Riesgo de síndrome serotoninérgico. Precaución en epilepsia.",
      tips_venta: "Advertir al paciente: 'El efecto antidepresivo no es inmediato, suele tardar entre 2 a 4 semanas en notarse. No suspenda el tratamiento'.",
      cross_selling: "Analgésicos simples para posibles cefaleas los primeros días (Paracetamol), autorizado por el QF."
    },
    {
      nombre: "Celecoxib 200mg",
      categoria: "AINEs / Analgésico Inhibidor COX-2",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Alivio de los signos y síntomas de la artrosis, artritis reumatoide y espondilitis anquilosante. Dolor musculoesquelético.",
      posologia: "Osteoartritis: 200 mg una vez al día o 100 mg dos veces al día. Artritis: 100 a 200 mg dos veces al día.",
      contraindicaciones: "Pacientes con enfermedad isquémica cardíaca severa o accidentes cerebrovasculares previos. Alergia a sulfonamidas.",
      tips_venta: "Destacar que es más amigable con el estómago que el Ibuprofeno/Diclofenaco, pero aún requiere evaluación cardiovascular médica.",
      cross_selling: "Suplementos articulares a base de Colágeno Hidrolizado, Glucosamina o Condroitina."
    },
    {
      nombre: "Quetiapina 25mg",
      categoria: "Sistema Nervioso / Antipsicótico Atípico",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "En dosis bajas (25mg) se usa comúnmente off-label para insomnio crónico severo o ansiedad. En dosis altas, esquizofrenia y bipolaridad.",
      posologia: "Para regulación del sueño: 1 comprimido 30 a 60 minutos antes de acostarse, según receta psiquiátrica.",
      contraindicaciones: "Depresión severa del SNC. Precaución en adultos mayores por riesgo de hipotensión ortostática (caídas al levantarse).",
      tips_venta: "Aconsejar al paciente que se levante lentamente de la cama por las mañanas para evitar mareos (hipotensión).",
      cross_selling: "Humectantes bucales o chicles sin azúcar (suele causar mucha resequedad en la boca)."
    },
    {
      nombre: "Cetirizina 10mg",
      categoria: "Antihistamínico de 2da Generación",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Control de rinitis alérgica estacional y perenne, picazón, estornudos y urticaria crónica idiopática.",
      posologia: "Adultos y niños mayores de 6 años: 10 mg (1 comprimido) una vez al día.",
      contraindicaciones: "Insuficiencia renal grave. Precaución en epilepsia.",
      tips_venta: "A diferencia de la desloratadina, la cetirizina puede causar ligera somnolencia en algunas personas; sugerir tomarla en la noche.",
      cross_selling: "Vitamina C con Zinc para fortalecer el sistema inmune frente a cambios de estación."
    },
    {
      nombre: "Betametasona 0.1% Crema",
      categoria: "Dermatológico / Corticoide Tópico de Alta Potencia",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Alivio rápido de la inflamación, enrojecimiento y picazón de dermatosis severas, psoriasis, y reacciones alérgicas cutáneas.",
      posologia: "Aplicar una capa muy fina sobre el área afectada 1 a 2 veces al día. Tratamiento corto (máximo 1-2 semanas).",
      contraindicaciones: "NO usar en infecciones virales (herpes, varicela), infecciones por hongos, ni acné rosácea. No usar en cara ni pliegues por tiempo prolongado.",
      tips_venta: "Advertir el uso excesivo: adelgaza la piel y produce estrías. Usar capa fina y lavar manos post-aplicación.",
      cross_selling: "Cremas hidratantes hipoalergénicas (tipo Eucerin pH5 o Cerave) para recuperar la barrera cutánea sana."
    },
    {
      nombre: "Ácido Fólico 5mg",
      categoria: "Vitamina B9 / Suplemento Nutricional",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Prevención de defectos del tubo neural en el desarrollo fetal (embarazo) y tratamiento de la anemia megaloblástica.",
      posologia: "Prevención en embarazo: 1 a 5 mg al día (según riesgo) desde antes de la concepción hasta las 12 semanas. Tomar con agua.",
      contraindicaciones: "Anemia perniciosa no diagnosticada (el ácido fólico puede enmascarar deficiencia de B12).",
      tips_venta: "Felicitar a la paciente si está en búsqueda de embarazo, genera empatía clínica.",
      cross_selling: "Vitaminas prenatales completas, cremas anti-estrías preventivas para el embarazo."
    },
    {
      nombre: "Sulfato Ferroso 200mg",
      categoria: "Minerales / Antianémico",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Tratamiento y prevención de la anemia por deficiencia de hierro (ferropénica).",
      posologia: "1 o 2 comprimidos al día. Fundamental tomarlo EN AYUNAS o lejos de lácteos y té/café para asegurar absorción.",
      contraindicaciones: "Hemocromatosis, hemosiderosis, anemia hemolítica. No administrar si no hay carencia de hierro demostrada.",
      tips_venta: "Advertir que las heces se teñirán de color negro (es normal). Recordar que el té y el café bloquean su absorción.",
      cross_selling: "Vitamina C (jugo de naranja natural o suplemento) para aumentar exponencialmente la absorción del hierro en el intestino."
    },
    {
      nombre: "Tramadol / Paracetamol 37.5/325mg",
      categoria: "Sistema Nervioso / Analgésico Opioide + AINE",
      lista_control: "N/A",
      condicion_venta: "Receta Retenida",
      para_que_sirve: "Tratamiento del dolor moderado a severo que no responde a analgésicos comunes (post-operatorios, lumbagos agudos).",
      posologia: "Adultos: 1 a 2 comprimidos cada 6-8 horas según intensidad del dolor. Máximo 8 comprimidos al día.",
      contraindicaciones: "Intoxicación aguda con alcohol, hipnóticos o psicofármacos. Insuficiencia hepática grave. Cuidado en epilépticos.",
      tips_venta: "Pedir receta retenida. Advertir que puede causar náuseas o mareos fuertes en la primera toma; sugerir tomar recostado.",
      cross_selling: "Antieméticos (Ondansetrón o Domperidona) autorizados por médico si el paciente es propenso a vómitos por opioides."
    },
    {
      nombre: "Ketorolaco 10mg",
      categoria: "AINEs / Analgésico Potente",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Manejo a corto plazo (máximo 5 días) del dolor agudo de moderado a severo, excelente en dolores dentales agudos o cólicos renales.",
      posologia: "1 comprimido de 10 mg cada 4 a 6 horas. Dosis máxima diaria recomendada: 40 mg.",
      contraindicaciones: "Ulcera gástrica activa, riesgo de hemorragia severa, insuficiencia renal moderada/grave. No mezclar con otros AINEs.",
      tips_venta: "Remarcar la regla de los 5 días: el Ketorolaco destruye la mucosa gástrica y renal si se toma por más de 5 días seguidos.",
      cross_selling: "Cepillos post-quirúrgicos o enjuagues con Clorhexidina si el origen del dolor es una extracción dental."
    },
    {
      nombre: "Fluoxetina 20mg",
      categoria: "Sistema Nervioso / Antidepresivo (ISRS)",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Tratamiento de depresión, trastorno obsesivo-compulsivo (TOC) y bulimia nerviosa.",
      posologia: "20 mg al día, idealmente administrados por la MAÑANA para evitar el insomnio secundario.",
      contraindicaciones: "Uso concomitante con IMAOs. Precaución en pacientes con riesgo de sangrado y convulsiones.",
      tips_venta: "Explicar que la ansiedad puede aumentar ligeramente los primeros días antes de mejorar. Constancia es clave.",
      cross_selling: "Multivitamínicos para recuperar niveles de energía física mermados por la depresión inicial."
    },
    {
      nombre: "Aspirina (Ácido Acetilsalicílico) 100mg",
      categoria: "Cardiovascular / Antiagregante Plaquetario",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Prevención de eventos trombóticos cardiovasculares y cerebrovasculares (infartos) en pacientes de riesgo.",
      posologia: "1 comprimido (100mg) diario, preferentemente después de almuerzo. Ingerir con abundante agua.",
      contraindicaciones: "Úlceras gástricas activas, hemofilia, alergia a salicilatos. NO dar a menores de 16 años con fiebre (Síndrome de Reye).",
      tips_venta: "Consultar si van a someterse a cirugías o extracciones dentales; deben suspenderla días antes por orden de su dentista/médico.",
      cross_selling: "Pastilleros semanales para pacientes crónicos polimedicados; facilita la adherencia."
    },
    {
      nombre: "Simeticona 40mg",
      categoria: "Gastrointestinal / Antiflatulento",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Alivio de la distensión abdominal, meteorismo, retención de gases y dispepsia (hinchazón).",
      posologia: "Masticar 1 o 2 comprimidos después de las comidas principales y al acostarse.",
      contraindicaciones: "Obstrucción intestinal o perforación gastrointestinal confirmada.",
      tips_venta: "Aclarar que su efecto es romper las burbujas de gas atrapadas en el intestino, el alivio es puramente físico y rápido.",
      cross_selling: "Probióticos para restaurar la flora intestinal si el paciente sufre de distensión por estrés o comida irritante."
    },
    {
      nombre: "Losartán / Hidroclorotiazida 50/12.5mg",
      categoria: "Cardiovascular / Antihipertensivo + Diurético",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Tratamiento de la hipertensión arterial en pacientes cuya presión no está adecuadamente controlada con Losartán solo.",
      posologia: "1 comprimido al día, de preferencia por la MAÑANA (por el efecto diurético, para no interrumpir el sueño nocturno).",
      contraindicaciones: "Embarazo (teratogénico). Anuria, hipersensibilidad a tiazidas, gota activa grave.",
      tips_venta: "Enfatizar que causará aumento en la micción (orina) las primeras semanas. Advertir consumo moderado de sal.",
      cross_selling: "Tensiómetros digitales de brazo para llevar un control seguro en el domicilio (educar al paciente crónico)."
    },
    {
      nombre: "Levocetirizina 5mg",
      categoria: "Antihistamínico de 3ra Generación",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Tratamiento potente de alergias persistentes, rinitis alérgica severa y urticarias. Versión purificada de la cetirizina, más rápida.",
      posologia: "Adultos: 5 mg (1 comprimido) al día. Puede tomarse con o sin comida.",
      contraindicaciones: "Enfermedad renal en fase terminal.",
      tips_venta: "Genera aún menos sueño que la cetirizina normal. Es el antialérgico más potente de venta libre actual.",
      cross_selling: "Spray nasal de corticoides (ej. Fluticasona - requiere receta) si la congestión nasal no cede solo con pastillas."
    }
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const inyectarMedicamentosMilab = async () => {
    if (!confirm("¿Seguro que deseas inyectar los 20 medicamentos de MILAB a la base de datos?")) return;
    
    setSubiendo(true);
    let count = 0;
    
    try {
      const vademecumRef = collection(db, "vademecum");
      for (const medicamento of nuevosMedicamentosMilab) {
        await addDoc(vademecumRef, medicamento);
        count++;
        setProgreso(count);
      }
      alert(`¡Éxito! Se han subido ${count} medicamentos a Firestore.`);
    } catch (error) {
      console.error("Error en la carga masiva:", error);
      alert("Error al subir los datos. Revisa la consola.");
    } finally {
      setSubiendo(false);
      setProgreso(0);
    }
  };

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-emerald-500" size={48} />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <ShieldCheck size={64} className="text-rose-500 mb-4" />
        <h1 className="text-3xl font-black text-slate-900 mb-2">Acceso Restringido</h1>
        <p className="text-slate-500 mb-8">Esta área es exclusiva para la administración del Vademécum AuxiliarPro.</p>
        <Link href="/" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/vademecum" className="text-slate-400 hover:text-slate-900 transition-colors">
            <ArrowLeft size={28} />
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Terminal <span className="text-emerald-500">Administrativo</span>
          </h1>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
              <Database size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Carga Masiva MILAB</h2>
              <p className="text-sm font-medium text-slate-500">Inyección directa de 20 perfiles farmacológicos validados a Firestore.</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8 max-h-64 overflow-y-auto">
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              {nuevosMedicamentosMilab.map((med, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> {med.nombre} <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded-full">{med.condicion_venta}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={inyectarMedicamentosMilab} 
            disabled={subiendo}
            className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-lg ${subiendo ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-emerald-600 transform hover:-translate-y-1'}`}
          >
            {subiendo ? (
              <>
                <Loader2 className="animate-spin" size={24} /> 
                Subiendo a Firebase... {progreso} / {nuevosMedicamentosMilab.length}
              </>
            ) : (
              <>🚀 Inyectar Lote a Vademécum</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}