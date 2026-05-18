// Ruta: app/preparacion/conceptos-clave-farmacia/page.js

"use client";

import Link from 'next/link';
import { BookOpen, ShieldCheck, Zap, Thermometer, Info, ChevronLeft, ArrowRight } from "lucide-react";

export default function GlosarioTecnico() {
  const terminos = [
    {
      titulo: "Bioequivalencia",
      icono: <Zap className="text-amber-500" size={24} />,
      definicion: "Es el atributo de un medicamento que, habiéndose registrado como copia de un innovador, ha demostrado mediante estudios científicos de biodisponibilidad que posee la misma velocidad y magnitud de absorción del principio activo en el organismo. Según la normativa del ISP, esto garantiza que el producto sea equivalente en términos de calidad, eficacia y seguridad, autorizando legalmente su intercambiabilidad en la dispensación."
    },
    {
      titulo: "Cadena de Frío",
      icono: <Thermometer className="text-blue-500" size={24} />,
      definicion: "Proceso logístico y de almacenamiento que asegura la conservación de medicamentos termolábiles (como vacunas, insulinas y ciertos biológicos) manteniendo una temperatura constante estrictamente entre 2°C y 8°C. Este control debe garantizarse desde su fabricación hasta la entrega al paciente, ya que cualquier excursión térmica fuera de este rango puede provocar la pérdida irreversible de la potencia o respuesta inmunitaria."
    },
    {
      titulo: "Fórmula Magistral",
      icono: <BookOpen className="text-indigo-600" size={24} />,
      definicion: "Composición de un medicamento personalizado para un paciente determinado, ideada y prescrita por un profesional legalmente habilitado (médico, matrona o dentista). Su preparación es de carácter extemporáneo y debe realizarse en un recetario magistral autorizado por la SEREMI, bajo la supervisión directa y responsabilidad de un Químico Farmacéutico."
    },
    {
      titulo: "Venta Directa (VD)",
      icono: <ShieldCheck className="text-emerald-600" size={24} />,
      definicion: "Medicamentos cuya condición de venta ha sido autorizada por el ISP para ser adquiridos sin receta médica. Cuentan con un amplio margen terapéutico y seguridad comprobada. La ley permite que estén exhibidos en góndolas o anaqueles de acceso directo al público, siempre que se ubiquen a una altura mínima de un metro para resguardo de los niños y en áreas exclusivas debidamente identificadas."
    },
    {
      titulo: "Farmacovigilancia",
      icono: <Info className="text-red-500" size={24} />,
      definicion: "Ciencia y actividades relacionadas con la detección, evaluación, comprensión y prevención de las Reacciones Adversas a Medicamentos (RAM) o cualquier otro problema de seguridad relacionado con ellos tras su comercialización. Es un deber legal de los profesionales de la salud notificar al ISP cualquier sospecha de efecto adverso detectado en el uso clínico."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      
      <nav className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#003366] transition-colors w-max">
          <ChevronLeft size={16} />
          <Link href="/preguntas-examen-seremi-farmacologia">Volver al Hub de Farmacología</Link>
        </div>
      </nav>

      <section className="bg-[#003366] text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Glosario Técnico de Farmacia</h1>
          <p className="text-lg text-blue-100">Conceptos fundamentales exigidos por el ISP y la SEREMI para la certificación de auxiliares.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {terminos.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-slate-100 rounded-xl">{item.icono}</div>
              <h2 className="text-2xl font-black text-[#003366]">{item.titulo}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{item.definicion}</p>
          </div>
        ))}

        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 rounded-3xl text-white text-center mt-12">
          <h2 className="text-2xl font-black mb-4">¿Dominas estos conceptos?</h2>
          <p className="mb-6 opacity-90">Pon a prueba tu conocimiento técnico con nuestro simulador de examen.</p>
          <Link href="/quiz/basic" className="inline-block px-8 py-4 bg-white text-emerald-700 font-black rounded-xl hover:bg-emerald-50 transition-all">
            Ir al Simulacro Gratuito <ArrowRight className="inline ml-2" size={18} />
          </Link>
        </section>
      </div>
    </main>
  );
}