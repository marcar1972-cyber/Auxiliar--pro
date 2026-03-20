"use client";

import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase/config"; 

// 📥 BASE DE DATOS ACTUALIZADA - TANDA 4 (Antigripales, Pediátricos y Digestivos)
const medicamentosBatch = [
  {
    nombre: "Trioval Comprimidos",
    categoria: "Medicamento",
    para_que_sirve: "Alivio sintomático del resfrío y la gripe: fiebre, congestión nasal y dolor corporal.",
    posologia: "1 comprimido cada 6 u 8 horas. No exceder 4 al día.",
    contraindicaciones: "Hipertensión severa, pacientes en tratamiento con inhibidores de la MAO.",
    condicion_venta: "Venta Directa",
    tips_venta: "Contiene Paracetamol y Pseudoefedrina. No combinar con otros antigripales para evitar sobredosis.",
    cross_selling: "Ofrecer pañuelos desechables y Vitamina C para reforzar defensas."
  },
  {
    nombre: "Viadil Gotas (Compuesto)",
    categoria: "Medicamento",
    para_que_sirve: "Tratamiento de espasmos digestivos, biliares y urinarios asociados a dolor.",
    posologia: "Adultos: 20-40 gotas hasta 3 veces al día.",
    contraindicaciones: "Glaucoma, hipertrofia prostática, estenosis pilórica.",
    condicion_venta: "Venta Directa",
    tips_venta: "Es el estándar para cólicos fuertes. Si el dolor persiste o hay fiebre, derivar a médico.",
    cross_selling: "Sugerir infusiones de manzanilla o bolsas de agua caliente para confort abdominal."
  },
  {
    nombre: "Amoxicilina + Ácido Clavulánico 400/57mg (Suspensión)",
    categoria: "Medicamento",
    para_que_sirve: "Antibiótico de amplio espectro para infecciones respiratorias y de oído en niños.",
    posologia: "Según peso del niño y dosis indicada por el pediatra.",
    contraindicaciones: "Hipersensibilidad a penicilinas, antecedentes de ictericia colestásica.",
    condicion_venta: "Receta Médica",
    tips_venta: "RECONSTITUCIÓN: Explicar al cliente que debe llenar con agua hasta la marca y agitar bien antes de cada dosis.",
    cross_selling: "PROBIÓTICOS PEDIÁTRICOS: Vital para prevenir diarrea asociada al antibiótico en niños."
  },
  {
    nombre: "Kitadol Infantil (Paracetamol Jarabe)",
    categoria: "Medicamento",
    para_que_sirve: "Control de fiebre y dolor en lactantes y niños pequeños.",
    posologia: "Dosis según peso (generalmente 10-15 mg/kg por dosis).",
    contraindicaciones: "Enfermedad hepática grave.",
    condicion_venta: "Venta Directa",
    tips_venta: "Viene con jeringa dosificadora para evitar errores de medición frecuentes con cucharas caseras.",
    cross_selling: "Termómetro digital de lectura rápida (punta flexible)."
  },
  {
    nombre: "Diclofenaco Sódico 50mg",
    categoria: "Medicamento",
    para_que_sirve: "Tratamiento de inflamaciones post-traumáticas, artritis y dolores agudos.",
    posologia: "1 comprimido cada 8 o 12 horas.",
    contraindicaciones: "Úlcera gastroduodenal, insuficiencia renal grave, alergia a la aspirina.",
    condicion_venta: "Receta Médica",
    tips_venta: "Altamente gastrolesivo. Indicar que se tome siempre con el estómago lleno.",
    cross_selling: "Omeprazol para protección gástrica si el tratamiento dura más de 3 días."
  },
  {
    nombre: "Neurobionta (Comprimidos)",
    categoria: "Vitamina",
    para_que_sirve: "Tratamiento de deficiencias de vitaminas B1, B6 y B12. Neuritis y neuralgias.",
    posologia: "1 comprimido 1 a 3 veces al día.",
    contraindicaciones: "Hipersensibilidad a las vitaminas del complejo B.",
    condicion_venta: "Venta Directa",
    tips_venta: "Excelente para el cansancio mental y dolores tipo 'corrientazos' en espalda o cuello.",
    cross_selling: "Sugerir magnesio si el paciente refiere además calambres musculares."
  },
  {
    nombre: "Bero-cca Performance (Efervescente)",
    categoria: "Vitamina",
    para_que_sirve: "Multivitamínico para mejorar el rendimiento físico y mental.",
    posologia: "1 comprimido efervescente al día disuelto en agua.",
    contraindicaciones: "Insuficiencia renal grave.",
    condicion_venta: "Venta Directa",
    tips_venta: "Ideal tomarlo en la mañana para aprovechar la energía durante el día. La orina puede tornarse más amarilla (es normal).",
    cross_selling: "Frutos secos o snacks saludables para complementar la energía."
  },
  {
    nombre: "Domperidona 10mg",
    categoria: "Medicamento",
    para_que_sirve: "Alivio de náuseas, vómitos y sensación de llenura excesiva.",
    posologia: "1 comprimido 15 a 30 minutos antes de las comidas.",
    contraindicaciones: "Prolactinoma, hemorragia gastrointestinal.",
    condicion_venta: "Venta Directa",
    tips_venta: "Efectivo para la 'pesadez' después de comer. No usar por períodos prolongados sin aviso médico.",
    cross_selling: "Sales de rehidratación si el paciente ha tenido vómitos repetidos."
  },
  {
    nombre: "Femsure (Calcio + Vitamina D)",
    categoria: "Suplemento",
    para_que_sirve: "Prevención y tratamiento de la osteoporosis y déficit de calcio.",
    posologia: "1 o 2 comprimidos al día, preferentemente con las comidas.",
    contraindicaciones: "Hipercalcemia, cálculos renales.",
    condicion_venta: "Venta Directa",
    tips_venta: "El calcio se absorbe mejor si se divide la dosis (una al desayuno y otra a la cena).",
    cross_selling: "Cremas hidratantes para piel madura (aprovechando el perfil de cliente)."
  },
  {
    nombre: "Nifuroxazida 200mg",
    categoria: "Medicamento",
    para_que_sirve: "Antiséptico intestinal para diarreas de origen bacteriano.",
    posologia: "1 comprimido cada 6 horas por 3 a 5 días.",
    contraindicaciones: "Hipersensibilidad a derivados de nitrofuranos.",
    condicion_venta: "Receta Médica",
    tips_venta: "A diferencia de la Loperamida, este sí ataca a la bacteria, no solo detiene el movimiento.",
    cross_selling: "Suero de rehidratación oral (formato saborizado para mejor tolerancia)."
  }
];

export default function CargaMasiva() {
  const [estado, setEstado] = useState("Esperando...");
  const [progreso, setProgreso] = useState(0);

  const ejecutarCarga = async () => {
    setEstado("Inyectando Tanda 4...");
    let contador = 0;
    
    try {
      for (const med of medicamentosBatch) {
        const idUnico = med.nombre.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const docRef = doc(db, "vademecum", idUnico);
        await setDoc(docRef, {
          ...med,
          fecha_actualizacion: new Date()
        }, { merge: true });

        contador++;
        setProgreso(contador);
      }
      setEstado(`¡Éxito! ${contador} medicamentos de la Tanda 4 inyectados.`);
    } catch (error) {
      console.error("Error:", error);
      setEstado("❌ Error en la inyección.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6 font-sans">
      <div className="bg-white p-10 rounded-[3rem] shadow-xl max-w-lg w-full text-center border-2 border-dashed border-rose-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500 rounded-full blur-[80px] opacity-20 -mr-10 -mt-10"></div>
        
        <h1 className="text-3xl font-black text-slate-900 mb-4 relative z-10">🚀 Inyector Masivo <br/><span className="text-rose-500">Tanda 4: Antigripales y Pediátricos</span></h1>
        <p className="text-slate-500 mb-8 font-medium relative z-10">
          Inyectando 10 nuevos fármacos con enfoque en <b>Reconstitución, Vitaminas y Digestivos</b>.
        </p>
        
        <button 
          onClick={ejecutarCarga}
          className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-rose-600 transition-all text-lg relative z-10"
        >
          Inyectar Tanda 4 Validada
        </button>

        <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100 relative z-10">
          <p className="font-bold text-slate-500 text-sm uppercase tracking-widest">Estado</p>
          <p className="font-black text-slate-900 mb-4">{estado}</p>
          
          <p className="font-bold text-slate-500 text-sm uppercase tracking-widest">Progreso</p>
          <p className="font-black text-rose-500 text-2xl">{progreso} / {medicamentosBatch.length}</p>
        </div>
      </div>
    </div>
  );
}