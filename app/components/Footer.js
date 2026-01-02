"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Facebook, ShieldAlert, Scale, ChevronUp } from "lucide-react";

// Icono de WhatsApp oficial
const WhatsAppIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <footer className="bg-[#0f172a] text-slate-300 py-10 px-6 border-t border-white/5 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* FILA SUPERIOR: Logo (Izq) - Links (Centro) - Email (Der) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <div className="relative w-36 h-10 grayscale invert opacity-70">
              <Image src="/logo.webp" alt="AuxiliarPro" fill className="object-contain object-left" />
            </div>
          </div>

          <div className="w-full md:w-2/4 flex justify-center gap-6">
            <button 
              onClick={() => setActiveTab(activeTab === 'terms' ? null : 'terms')}
              className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeTab === 'terms' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}
            >
              Términos de Uso
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === 'legal' ? null : 'legal')}
              className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeTab === 'legal' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}
            >
              Descargos Legales
            </button>
          </div>

          <div className="w-full md:w-1/4 flex justify-center md:justify-end">
            <a 
              href="mailto:auxiliarprofarna@gmail.com" 
              className="text-[10px] font-bold text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Mail size={14} className="text-emerald-500" />
              auxiliarprofarna@gmail.com <span className="text-slate-600 font-medium tracking-tight ml-1">(Sugerencia)</span>
            </a>
          </div>
        </div>

        {/* CONTENIDO DESPLEGABLE RECOMPUESTO */}
        {activeTab && (
          <div className="max-w-4xl mx-auto mb-8 bg-white/5 p-8 rounded-[2rem] border border-white/5 animate-in fade-in slide-in-from-top-1 text-left">
            {activeTab === 'terms' ? (
              <div className="text-[11px] leading-relaxed space-y-4 text-slate-300">
                <h4 className="text-white font-black text-[9px] uppercase tracking-widest flex items-center gap-2 mb-2 italic">
                  <Scale size={14} className="text-emerald-500" /> Términos de Uso
                </h4>
                <p>Bienvenido a <strong>AuxiliarPro Chile</strong>. Al utilizar esta plataforma, aceptas las siguientes condiciones:</p>
                <div className="space-y-3">
                  <p><strong>1. Uso Educativo:</strong> Esta plataforma es exclusivamente una herramienta de estudio y preparación. No garantizamos la aprobación del examen oficial de la SEREMI de Salud, ya que esto depende del esfuerzo personal del estudiante.</p>
                  <p><strong>2. Propiedad Intelectual:</strong> El código fuente, diseño y estructura de "Dermocheck" y los simuladores son propiedad de Marcelo (AuxiliarPro). Los textos legales (Decretos) son de dominio público.</p>
                  <p><strong>3. Responsabilidad:</strong> No nos hacemos responsables por errores u omisiones en la información, aunque nos esforzamos por mantenerla actualizada según la normativa vigente (D.S. 466).</p>
                </div>
                <button onClick={() => setActiveTab(null)} className="text-emerald-400 font-bold hover:underline flex items-center gap-1 mt-4 text-[10px] uppercase">Cerrar Ventana</button>
              </div>
            ) : (
              <div className="text-[11px] leading-relaxed space-y-4 text-slate-300">
                <h4 className="text-white font-black text-[9px] uppercase tracking-widest flex items-center gap-2 mb-2 italic">
                  <ShieldAlert size={14} className="text-emerald-500" /> Descargos Legales
                </h4>
                <p className="text-white font-bold text-[10px] uppercase tracking-tighter italic">Aviso Importante de No Afiliación</p>
                <p>AuxiliarPro Chile declara explícitamente que:</p>
                <ul className="space-y-3">
                  <li className="flex gap-2">● <strong>NO representa</strong> al Ministerio de Salud (MINSAL), ni al Instituto de Salud Pública (ISP), ni a las Secretarías Regionales Ministeriales (SEREMI) de Salud.</li>
                  <li className="flex gap-2">● No tiene la facultad de otorgar credenciales, títulos ni certificados oficiales de competencia.</li>
                  <li className="flex gap-2">● Cualquier cobro o trámite oficial debe realizarse única y exclusivamente a través de los canales del Estado (seremienlinea.minsal.cl).</li>
                  <li className="flex gap-2">● Esta web es una iniciativa independiente creada por profesionales para facilitar el acceso al estudio y la preparación de futuros colegas.</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* FILA INFERIOR: Iconos (Centro) y Copyright */}
        <div className="flex flex-col items-center gap-6 pt-6 border-t border-white/5">
          <div className="flex justify-center gap-10 text-white/40">
            <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-110">
              <Facebook size={24}/>
            </a>
            <a href="https://www.instagram.com/auxiliarpro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-110">
              <Instagram size={24}/>
            </a>
            <a href="https://chat.whatsapp.com/Gm30JCRLvx9HoSZ4JTipQX" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-all transform hover:scale-110">
              <WhatsAppIcon size={24}/>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">
              AuxiliarPro Chile © 2026 | Excelencia Farmacéutica
            </div>
            {/* Firma del Desarrollador */}
            <a 
              href="https://macz.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-mono font-bold text-emerald-500/50 hover:text-emerald-400 transition-colors tracking-widest"
            >
              {"< macz.dev />"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
