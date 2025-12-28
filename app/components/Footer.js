"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Facebook, ShieldAlert, Scale, ChevronDown, ExternalLink } from "lucide-react";

// Icono de WhatsApp 
const WhatsAppIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* LOGO Y COMUNIDAD  */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="relative w-56 h-14 grayscale invert opacity-80">
            <Image src="/logo.webp" alt="AuxiliarPro" fill className="object-contain" />
          </div>
          <a 
            href="https://wa.me/tu_numero" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-emerald-600 text-white px-8 py-3 rounded-full font-black hover:bg-emerald-500 transition-all shadow-xl text-sm uppercase tracking-widest"
          >
            <WhatsAppIcon /> Foro Pro WhatsApp
          </a>
        </div>

        {/* TABS INTERACTIVOS CENTRADOS  */}
        <div className="w-full max-w-3xl flex flex-col items-center mb-12">
          <div className="flex justify-center gap-8 md:gap-16 mb-6 w-full border-b border-white/10">
            <button 
              onClick={() => setActiveTab(activeTab === 'terms' ? null : 'terms')}
              className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'terms' ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}
            >
              Términos de Uso
              {activeTab === 'terms' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 animate-in fade-in"></div>}
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === 'legal' ? null : 'legal')}
              className={`pb-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'legal' ? 'text-emerald-400' : 'text-slate-500 hover:text-white'}`}
            >
              Descargos Legales
            </button>
          </div>

          {/* CONTENIDO DESPLEGABLE CON ALTA LEGIBILIDAD  */}
          <div className="w-full">
            {activeTab === 'terms' && (
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 text-left animate-in slide-in-from-top-2 duration-300">
                <h4 className="text-white font-black text-xs uppercase mb-6 flex items-center gap-2 tracking-widest"><Scale size={16} className="text-emerald-400" /> Condiciones del Servicio</h4>
                <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed">
                  <p><strong>1. Uso Educativo:</strong> Esta plataforma es exclusivamente una herramienta de estudio y preparación. No garantizamos la aprobación del examen oficial de la SEREMI de Salud, ya que esto depende del esfuerzo personal del estudiante .</p>
                  <p><strong>2. Propiedad Intelectual:</strong> El código fuente, diseño y estructura de "Dermocheck" y los simuladores son propiedad de Marcelo (AuxiliarPro). Los textos legales (Decretos) son de dominio público .</p>
                  <p><strong>3. Responsabilidad:</strong> No nos hacemos responsables por errores u omisiones en la información, aunque nos esforzamos por mantenerla actualizada según la normativa vigente (D.S. 466) .</p>
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-emerald-400 font-bold hover:underline flex items-center gap-1">Volver al Inicio <ChevronDown className="rotate-180" size={14}/></button>
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/5 text-left animate-in slide-in-from-top-2 duration-300">
                <h4 className="text-white font-black text-xs uppercase mb-6 flex items-center gap-2 tracking-widest"><ShieldAlert size={16} className="text-emerald-400" /> Aviso de No Afiliación</h4>
                <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed">
                  <p className="flex gap-3">● <strong>AuxiliarPro Chile</strong> declara explícitamente que NO representa al Ministerio de Salud (MINSAL), ni al Instituto de Salud Pública (ISP), ni a las SEREMI de Salud .</p>
                  <p className="flex gap-3">● No tiene la facultad de otorgar credenciales, títulos ni certificados oficiales de competencia .</p>
                  <p className="flex gap-3">● Cualquier cobro o trámite oficial debe realizarse única y exclusivamente a través de los canales del Estado (seremienlinea.minsal.cl) .</p>
                  <p className="flex gap-3">● Esta web es una iniciativa independiente creada por profesionales para facilitar el acceso al estudio y la preparación de futuros colegas .</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SUGERENCIAS Y CONTACTO  */}
        <div className="w-full pt-12 border-t border-white/5 flex flex-col items-center space-y-8">
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-4">Sugerencias y Feedback</p>
            <a 
              href="mailto:auxiliarprofarna@gmail.com" 
              className="text-white font-bold text-xl md:text-2xl hover:text-emerald-400 transition-colors flex items-center gap-3"
            >
              <Mail size={24} className="text-emerald-500" /> auxiliarprofarna@gmail.com
            </a>
          </div>

          {/* REDES SOCIALES  */}
          <div className="flex gap-10">
            <Link href="#" className="text-white/30 hover:text-white transition-all transform hover:scale-110"><Instagram size={32}/></Link>
            <Link href="#" className="text-white/30 hover:text-white transition-all transform hover:scale-110"><Facebook size={32}/></Link>
          </div>
        </div>

        <div className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 pt-16">
          AuxiliarPro Chile © 2026 | Excelencia Farmacéutica
        </div>
      </div>
    </footer>
  );
}
