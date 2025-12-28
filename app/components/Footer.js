"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Facebook, ShieldAlert, Scale, ChevronDown } from "lucide-react";

// Icono de WhatsApp con diseño oficial
const WhatsAppIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12">
        
        {/* LOGO Y WHATSAPP */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-48 h-12 grayscale invert opacity-70">
            <Image src="/logo.webp" alt="AuxiliarPro" fill className="object-contain" />
          </div>
          <a href="https://wa.me/tu_numero" target="_blank" className="flex items-center gap-2 bg-emerald-500 text-white px-8 py-3 rounded-full font-black hover:bg-emerald-600 transition-all shadow-xl text-sm uppercase tracking-wider">
            <WhatsAppIcon /> Unirse al Foro Pro
          </a>
        </div>

        {/* PESTAÑAS LEGALES: Distribución limpia  */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          <div className="flex justify-center gap-8 mb-4">
            <button 
              onClick={() => setActiveTab(activeTab === 'terms' ? null : 'terms')} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all pb-2 border-b-2 ${activeTab === 'terms' ? 'text-emerald-400 border-emerald-400' : 'text-slate-500 border-transparent'}`}
            >
              Términos de Uso
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === 'legal' ? null : 'legal')} 
              className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all pb-2 border-b-2 ${activeTab === 'legal' ? 'text-emerald-400 border-emerald-400' : 'text-slate-500 border-transparent'}`}
            >
              Descargos Legales
            </button>
          </div>

          <div className="w-full">
            {activeTab === 'terms' && (
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 text-left text-xs leading-relaxed animate-in fade-in zoom-in duration-300">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-[10px]"><Scale size={14}/> Condiciones de Uso</h4>
                <div className="space-y-4 text-slate-400">
                  <p><strong>1. Uso Educativo:</strong> Plataforma exclusivamente de estudio. No garantizamos aprobación oficial ya que depende del esfuerzo personal .</p>
                  <p><strong>2. Propiedad Intelectual:</strong> El código y diseño de "Dermocheck" son propiedad de Marcelo (AuxiliarPro). Los Decretos son públicos .</p>
                  <p><strong>3. Responsabilidad:</strong> Nos esforzamos por mantener la información según el D.S. 466, pero no nos responsabilizamos por errores u omisiones .</p>
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 text-left text-xs leading-relaxed animate-in fade-in zoom-in duration-300">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-[10px]"><ShieldAlert size={14}/> Aviso Importante de No Afiliación</h4>
                <div className="space-y-4 text-slate-400">
                  <p>● <strong>AuxiliarPro Chile</strong> NO representa al Ministerio de Salud, ISP ni a las SEREMI de Salud .</p>
                  <p>● No otorga credenciales, títulos ni certificados oficiales de competencia .</p>
                  <p>● Trámites oficiales deben realizarse en <em>seremienlinea.minsal.cl</em> .</p>
                  <p>● Iniciativa independiente creada por profesionales para facilitar el estudio a futuros colegas .</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CONTACTO Y REDES: Alta Legibilidad  */}
        <div className="w-full pt-10 border-t border-white/5 text-center space-y-8">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Sugerencias y Contacto</p>
            <a href="mailto:auxiliarprofarna@gmail.com" className="text-emerald-400 font-bold text-xl hover:text-white transition-colors flex items-center justify-center gap-2">
              <Mail size={20} /> auxiliarprofarna@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-8">
            <Link href="#" className="text-white/20 hover:text-white transition-colors"><Instagram size={28}/></Link>
            <Link href="#" className="text-white/20 hover:text-white transition-colors"><Facebook size={28}/></Link>
          </div>
        </div>

        <div className="text-[9px] font-black uppercase tracking-[0.5em] opacity-20">
          AuxiliarPro Chile © 2026
        </div>
      </div>
    </footer>
  );
}
