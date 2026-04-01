"use client";

import { useState, useEffect } from "react";
import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import { Loader2, ShieldCheck, Database, ArrowLeft } from "lucide-react";

export default function AdminVademecumCarga() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [subiendo, setSubiendo] = useState(false);
  const [progreso, setProgreso] = useState(0);

  const ADMIN_EMAIL = "marcar1972@gmail.com";

  // DATA DE ALTA DENSIDAD TÉCNICA (MILAB + DECRETOS)
  const nuevosMedicamentosMilab = [
    {
      nombre: "Abacavir 300 mg",
      categoria: "Antiviral (Inhibidor de la transcriptasa inversa análogo de nucleósidos)",
      lista_control: "N/A - Control Sanitario Especial",
      condicion_venta: "Receta Médica Retenida (R.R.)",
      para_que_sirve: "Tratamiento de la infección por el Virus de la Inmunodeficiencia Humana (VIH) en adultos, adolescentes y niños. Actúa mediante la inhibición competitiva de la enzima transcriptasa inversa del VIH, lo que detiene la terminación de la cadena de ADN viral y detiene la replicación. Se utiliza siempre en regímenes de terapia combinada (TARV) para prevenir la aparición de resistencias virales.",
      posologia: "Adultos y adolescentes que pesan al menos 30 kg: La dosis recomendada es de 600 mg diarios, administrados como 300 mg dos veces al día o 600 mg una vez al día. Puede tomarse con o sin alimentos. La adherencia estricta al horario es vital para el éxito del tratamiento.",
      contraindicaciones: "Hipersensibilidad grave al abacavir. Pacientes que dieron positivo en la prueba del alelo HLA-B*5701 (Riesgo de Reacción de Hipersensibilidad Sistémica que puede ser fatal). Insuficiencia hepática moderada o grave.",
      tips_venta: "ALERTA PROFESIONAL: Si el paciente reporta fiebre, erupción cutánea (rash), fatiga extrema, síntomas gastrointestinales o dificultad respiratoria, debe SUSPENDER el fármaco y acudir a urgencias. Nunca debe reiniciar el tratamiento si se sospecha hipersensibilidad. Verifique que el paciente tenga su Tarjeta de Advertencia.",
      cross_selling: "Multivitamínicos de alta gama, protectores de la barrera cutánea y suplementos nutricionales recomendados por el especialista."
    },
    {
      nombre: "Alopurinol 300 mg",
      categoria: "Antigotoso (Inhibidor de la xantina oxidasa)",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Reducción de las concentraciones de ácido úrico en plasma y orina. Indicado para el tratamiento de la gota (tofos, cálculos renales de urato) y la hiperuricemia primaria o secundaria. También se utiliza en la prevención de la nefropatía por ácido úrico durante el tratamiento de neoplasias (síndrome de lisis tumoral).",
      posologia: "Se recomienda iniciar con una dosis baja (100 mg/día) para reducir la incidencia de reacciones adversas y ataques agudos de gota. Dosis habitual de mantenimiento: 300 mg diarios en una sola toma. Debe administrarse después de una comida para minimizar la irritación gástrica.",
      contraindicaciones: "Hipersensibilidad al alopurinol. No se debe iniciar el tratamiento durante un ataque agudo de gota; el tratamiento preventivo solo debe comenzar una vez que el ataque agudo ha remitido por completo.",
      tips_venta: "CONSEJO TÉCNICO: Es fundamental que el paciente mantenga una hidratación superior a los 2 litros diarios para asegurar una diuresis adecuada. Si aparece alguna erupción cutánea, debe dejar de tomarlo inmediatamente, ya que podría ser el inicio de un síndrome de Stevens-Johnson.",
      cross_selling: "Cremas antiinflamatorias locales, taloneras de descanso y monitoreo de función renal."
    },
    {
      nombre: "Ambroxol 30 mg / 5 mL (Adulto)",
      categoria: "Mucolítico y Expectorante",
      lista_control: "N/A",
      condicion_venta: "Venta Directa",
      para_que_sirve: "Tratamiento secretolítico en enfermedades broncopulmonares agudas y crónicas que cursan con una secreción mucosa viscosa y deterioro del transporte mucociliar. Actúa aumentando la secreción de las vías respiratorias, estimulando la actividad ciliar y mejorando la síntesis de surfactante pulmonar, facilitando la expectoración.",
      posologia: "Adultos y niños mayores de 12 años: 10 mL (2 cucharaditas) cada 8 o 12 horas. Se recomienda tomar después de las comidas. El efecto se potencia con la ingesta abundante de líquidos durante el día.",
      contraindicaciones: "Hipersensibilidad al ambroxol o clorhidrato de bromhexina. Úlcera gastroduodenal activa. No se recomienda el uso en el primer trimestre de embarazo ni durante la lactancia sin supervisión médica.",
      tips_venta: "REGLA DE ORO AUXILIAR: El paciente NO debe usar antitusivos (fármacos que cortan la tos) mientras toma Ambroxol. El objetivo es que la flema salga; si se corta el reflejo de la tos, el moco se estanca y puede derivar en una neumonía.",
      cross_selling: "Vitamina C con Zinc, propóleo puro, miel con eucalipto y termómetros de alta precisión."
    },
    {
      nombre: "Atenolol 50 mg",
      categoria: "Antihipertensivo (Bloqueador beta-1 selectivo)",
      lista_control: "N/A",
      condicion_venta: "Receta Médica",
      para_que_sirve: "Tratamiento de la hipertensión arterial, angina de pecho (angina crónica estable), arritmias cardíacas (taquicardia supraventricular) e intervención precoz en la fase aguda del infarto de miocardio. Reduce la demanda de oxígeno del miocardio al disminuir la frecuencia y contractilidad cardíaca.",
      posologia: "Hipertensión: 50 mg a 100 mg en una sola toma diaria. Angina: 100 mg al día o 50 mg cada 12 horas. Es crucial mantener la constancia; el efecto máximo se observa después de 1 a 2 semanas.",
      contraindicaciones: "Bradicardia severa (menos de 45 latidos por minuto), shock cardiogénico, hipotensión arterial severa, bloqueo AV de segundo o tercer grado, asma bronquial o historial de enfermedad pulmonar obstructiva.",
      tips_venta: "DATO DE SEGURIDAD: Advertir al paciente que NUNCA debe suspender el medicamento de forma súbita. La interrupción brusca de un betabloqueador puede precipitar ataques de angina, arritmias severas o incluso un infarto de miocardio.",
      cross_selling: "Tensiómetros digitales de brazo, pastilleros semanales y Omega 3 de alta concentración."
    },
    {
      nombre: "Zolpidem 10 mg",
      categoria: "Hipnótico y Sedante (Análogo de benzodiazepinas)",
      lista_control: "Decreto 405 - Lista IV Psicotrópicos",
      condicion_venta: "Receta Médica Retenida con Control de Existencia (R.R.)",
      para_que_sirve: "Tratamiento a corto plazo del insomnio crónico, ocasional o transitorio. Posee efectos hipnóticos de rápido inicio, disminuyendo el tiempo de latencia del sueño y mejorando la calidad del descanso sin alterar significativamente las fases del sueño profundo.",
      posologia: "Adultos: 10 mg administrados inmediatamente antes de acostarse. Adultos mayores o con insuficiencia hepática: 5 mg. No se debe administrar más de 10 mg en 24 horas. El tratamiento no debe exceder las 4 semanas incluyendo el periodo de retiro gradual.",
      contraindicaciones: "Hipersensibilidad al zolpidem. Insuficiencia respiratoria aguda o grave (riesgo de depresión respiratoria), apnea del sueño severa, miastenia gravis. No usar en menores de 18 años.",
      tips_venta: "PROTOCOLO DE SEGURIDAD: El paciente debe estar físicamente en la cama o a punto de acostarse. Puede producir sonambulismo, conducción nocturna u otras conductas complejas sin memoria del evento. No mezclar jamás con alcohol.",
      cross_selling: "Antifaces de descanso, tapones de silicona, tés relajantes (melisa/pasiflora) e higiene del sueño."
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
    if (!confirm("¿Deseas activar la LIMPIEZA PROFUNDA v4.4? Borrará cualquier versión antigua aunque tenga diferencias de espacios, y subirá la información experta.")) return;
    
    setSubiendo(true);
    let count = 0;
    
    try {
      const vademecumRef = collection(db, "vademecum");
      
      // 1. OBTENEMOS TODA LA BASE DE DATOS PARA FILTRAR EN MEMORIA (Evita errores de Firebase con los espacios)
      const todosLosDocsSnapshot = await getDocs(vademecumRef);
      
      for (const medicamento of nuevosMedicamentosMilab) {
        
        // Creamos un nombre limpio de comparación (ej: "atenolol50mg" sin espacios)
        const nombreComparacionNuevo = medicamento.nombre.replace(/\s+/g, '').toLowerCase();

        // 2. BUSCAMOS Y DESTRUIMOS LOS ANTIGUOS (Coincidencia difusa)
        const deletePromises = [];
        todosLosDocsSnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (data.nombre) {
            const nombreComparacionViejo = data.nombre.replace(/\s+/g, '').toLowerCase();
            
            // Si "atenolol50mg" == "atenolol50mg", LO BORRA. Sea el ID que sea.
            if (nombreComparacionNuevo === nombreComparacionViejo) {
              console.log(`Borrando basura: ${data.nombre} con ID: ${docSnap.id}`);
              deletePromises.push(deleteDoc(doc(db, "vademecum", docSnap.id)));
            }
          }
        });
        await Promise.all(deletePromises);

        // 3. ID INMORTAL Y NORMALIZADO
        const idSeguro = medicamento.nombre
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');

        // 4. INYECCIÓN DE LA DATA PRO 
        await setDoc(doc(db, "vademecum", idSeguro), medicamento);
        
        count++;
        setProgreso(count);
      }
      
      alert(`¡Purga completada! Se han limpiado los errores y cargado ${count} registros 100% PRO.`);
    } catch (error) {
      console.error("Error en el motor de limpieza profunda:", error);
      alert("Error crítico. Revisa la consola.");
    } finally {
      setSubiendo(false);
      setProgreso(0);
    }
  };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  if (!isAdmin) return <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 text-center"><ShieldCheck size={64} className="text-rose-500 mb-4" /><h1 className="text-3xl font-black text-slate-900 mb-2">Acceso Restringido</h1><Link href="/" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold">Volver al Inicio</Link></div>;

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/admin-vademecum" className="text-slate-400 hover:text-slate-900 transition-colors">
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
              <h2 className="text-2xl font-black text-slate-900">Limpieza Profunda v4.4</h2>
              <p className="text-sm font-medium text-slate-500">Motor de purga inteligente anti-duplicados (ignora diferencias de espacios).</p>
            </div>
          </div>

          <button 
            onClick={inyectarMedicamentosMilab} 
            disabled={subiendo}
            className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 shadow-lg ${subiendo ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-emerald-600 transform hover:-translate-y-1'}`}
          >
            {subiendo ? (
              <>
                <Loader2 className="animate-spin" size={24} /> 
                Purgando y Subiendo: {progreso} / {nuevosMedicamentosMilab.length}
              </>
            ) : (
              <>🚀 Ejecutar Purga y Sincronizar PRO</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}