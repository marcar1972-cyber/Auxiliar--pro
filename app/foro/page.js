"use client";
import { useState } from "react";
import { ChevronLeft, Users, ShieldCheck, OctagonAlert, ThumbsUp, MessageCircle, Facebook, Instagram } from "lucide-react";
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
      <Link href="/quiz" className="inline-flex items-center gap-2 text-slate-400 mb-8 cursor-pointer">
        <ChevronLeft size={20} /> Volver a Mi Ruta
      </Link>

      <div className="max-w-md mx-auto">
        <div className="bg-[#0f172a] p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center border border-white/5">
          <h1 className="text-3xl font-black text-white mb-4 italic tracking-tight underline underline-offset-8 decoration-pink-500/50 text-center">Comunidad Pro</h1>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed italic text-center text-left">
            Espacio exclusivo para alumnos de AuxiliarPro. Compartimos información técnica sobre el examen SEREMI 2026.
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

      {/* ADVERTENCIAS RESTAURADAS COMPLETAS */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-white rounded-[3rem] shadow-2xl max-w-sm w-full overflow-hidden border border-white">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center">
              <Users size={56} className="mx-auto mb-4 text-emerald-400" />
              <h2 className="text-2xl font-black tracking-tighter">Reglas de la Comunidad</h2>
            </div>
            <div className="p-8 space-y-6 text-left">
              <div className="flex gap-4 items-start text-left">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shadow-sm"><ShieldCheck size={20} /></div>
                <p className="text-sm text-slate-600 leading-snug text-left"><strong>Contenido Técnico:</strong> Prohibido spam, avisos comerciales o cadenas. Solo información técnica de farmacia.</p>
              </div>
              <div className="flex gap-4 items-start text-left">
                <div className="bg-red-100 p-2 rounded-lg text-red-600 shadow-sm"><OctagonAlert size={20} /></div>
                <p className="text-sm text-slate-600 leading-snug text-left"><strong>Respeto Absoluto:</strong> Cualquier falta de respeto o acoso resultará en la <strong>eliminación inmediata y permanente</strong>.</p>
              </div>
              <button 
                onClick={() => { window.open("https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz", "_blank"); setShowModal(false); }}
                className="w-full bg-emerald-500 text-white font-black py-5 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 mt-4 shadow-xl cursor-pointer"
              >
                <ThumbsUp size={20} /> Acepto e Ingresar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
