'use client';

import Link from "next/link";
import { MessageCircle, Users, ShieldCheck, ArrowLeft } from "lucide-react";

export default function ForoPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* BOTÓN VOLVER */}
        <Link href="/quiz" className="flex items-center text-slate-400 hover:text-slate-600 mb-6 transition-colors text-sm font-bold">
          <ArrowLeft size={18} className="mr-2" />
          Volver a Mi Ruta
        </Link>

        {/* TARJETA PRINCIPAL */}
        <div className="bg-[#0f172a] text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden border border-slate-800">
          
          {/* Fondo decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10 text-center">
            
            {/* ICONO */}
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
              <Users size={40} className="text-emerald-400" />
            </div>

            <h1 className="text-3xl font-black mb-2 italic tracking-tight">
              COMUNIDAD <span className="text-emerald-400">PRO</span>
            </h1>
            
            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>

            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Únete al grupo oficial de apoyo para auxiliares en formación. 
              Resolvemos dudas técnicas de la SEREMI, compartimos datos de empleo y nos ayudamos mutuamente.
            </p>

            {/* BENEFICIOS */}
            <div className="flex justify-center gap-6 mb-10 text-xs font-bold text-slate-400">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={20} className="text-blue-400" />
                <span>Sin Spam</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MessageCircle size={20} className="text-purple-400" />
                <span>Ayuda Real</span>
              </div>
            </div>

            {/* BOTÓN WHATSAPP */}
            <a 
              href="https://chat.whatsapp.com/Gnvtcq35kQkBcnXqnHJFV2" // 🟢 REEMPLAZA CON TU LINK REAL
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-emerald-500 hover:bg-emerald-400 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-3 transform hover:scale-[1.02]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Unirse al Grupo
            </a>

            <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest font-medium">
              Acceso Gratuito y Moderado
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
