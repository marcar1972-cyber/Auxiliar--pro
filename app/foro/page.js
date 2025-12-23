"use client";
import { useState } from "react";
import { 
  ChevronLeft, Users, ShieldCheck, XCircle, Clock, 
  AlertCircle, ThumbsUp, Facebook, Instagram 
} from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function ForoPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 p-6 text-left">
      <Link href="/quiz" className="inline-flex items-center gap-2 text-slate-400 mb-8 cursor-pointer hover:text-slate-900 transition-colors">
        <ChevronLeft size={20} /> Volver a Mi Ruta
      </Link>

      <div className="max-w-md mx-auto">
        <div className="bg-[#0f172a] p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center border border-white/5">
          <h1 className="text-3xl font-black text-white mb-4 italic tracking-tight underline underline-offset-8 decoration-pink-500/50 text-center uppercase">Comunidad Pro</h1>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed italic text-center text-left">
            Únete al grupo de apoyo para auxiliares en formación. Resolvemos dudas técnicas de la SEREMI en conjunto.
          </p>

          <div className="flex justify-center gap-8 mb-10">
            <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" className="text-slate-500 hover:text-white transition-all cursor-pointer"><Facebook size={28} /></a>
            <a href="https://www.instagram.com/auxiliarpro/" target="_blank" className="text-slate-500 hover:text-white transition-all cursor-pointer"><Instagram size={28} /></a>
            <a href="https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz" target="_blank" className="text-slate-500 hover:text-white transition-all cursor-pointer"><WhatsAppIcon size={28} /></a>
          </div>

          <button onClick={() => setShowModal(true)} className="w-full bg-white text-slate-900 font-black py-5 rounded-3xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-xl text-lg cursor-pointer">
            <WhatsAppIcon size={24} className="text-pink-500"/> Unirse al Grupo
          </button>
        </div>
      </div>

      {/* MODAL ACTUALIZADO SEGÚN IMAGEN image_feb93b.png */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-200">
          <div className="bg-white rounded-[3rem] shadow-2xl max-w-sm w-full overflow-hidden border border-white">
            {/* Cabecera con Degradado Rosa/Rojo */}
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-10 text-white text-center">
              <Users size={64} className="mx-auto mb-4" />
              <h2 className="text-3xl font-black tracking-tighter">Comunidad Auxiliar Pro</h2>
              <p className="text-white/80 font-bold text-sm mt-1">Normas del Grupo</p>
            </div>

            <div className="p-8 space-y-6">
              {/* Regla 1: Respeto */}
              <div className="flex gap-4 items-start">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-500"><ShieldCheck size={20} /></div>
                <div className="text-left">
                    <p className="text-sm text-slate-700 leading-tight"><strong>Respeto ante todo:</strong> Somos colegas ayudándonos. Cero tolerancia al bullying.</p>
                </div>
              </div>

              {/* Regla 2: No Spam */}
              <div className="flex gap-4 items-start">
                <div className="bg-red-50 p-2 rounded-lg text-red-500"><XCircle size={20} /></div>
                <div className="text-left">
                    <p className="text-sm text-slate-700 leading-tight"><strong>No Spam:</strong> Prohibido vender cursos externos, mensajes masivos o publicidad no autorizada.</p>
                </div>
              </div>

              {/* Regla 3: Horario */}
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-500"><Clock size={20} /></div>
                <div className="text-left">
                    <p className="text-sm text-slate-700 leading-tight"><strong>Horario:</strong> Intenta escribir en horas prudentes.</p>
                </div>
              </div>

              {/* Caja de Advertencia Roja */}
              <div className="bg-red-50 p-3 rounded-xl border border-red-100 flex items-center gap-3">
                <AlertCircle size={18} className="text-red-500 shrink-0" />
                <p className="text-[11px] font-black text-red-600 uppercase tracking-tighter">Quien no respete estas normas será eliminado.</p>
              </div>

              <button 
                onClick={() => { window.open("https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz", "_blank"); setShowModal(false); }}
                className="w-full bg-[#0f172a] text-white font-black py-5 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mt-4 shadow-xl cursor-pointer"
              >
                <ThumbsUp size={20} /> Acepto y Unirme
              </button>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full text-slate-400 text-sm font-bold py-2 text-center hover:text-slate-600 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
