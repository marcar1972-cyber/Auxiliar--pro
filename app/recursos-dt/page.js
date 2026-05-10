"use client";

import Link from "next/link";
import { 
  BookOpen, 
  ShieldCheck, 
  Thermometer, 
  Scale, 
  FileText, 
  ChevronRight, 
  Lock, 
  ArrowRight 
} from "lucide-react";
import SocialContact from "../components/SocialContact";

export default function RecursosDTLobby() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-[#37352f] selection:bg-[#003366] selection:text-white pb-12">
      
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200 pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-black uppercase tracking-widest mb-6">
            <ShieldCheck size={14} /> Acceso Libre y Gratuito
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003366] mb-6 tracking-tight leading-tight">
            Hub de Recursos para el<br className="hidden md:block" /> Director Técnico
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Biblioteca técnica y normativa diseñada para Químicos Farmacéuticos. 
            Audita, gestiona y capacita a tu equipo basándote en los Decretos del Ministerio de Salud (MINSAL) e Instituto de Salud Pública (ISP).
          </p>
        </div>
      </header>

      {/* Grid de Categorías (Dashboard) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA 1: Controlados */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#003366] flex items-center justify-center text-white shadow-sm">
                <BookOpen size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-800">Controlados y Libros</h2>
            </div>

            {/* Tarjeta Activa */}
            <Link 
              href="/recursos-dt/gestion-libros-controlados"
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all block relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="text-emerald-500" />
              </div>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2 block">DTO 404 / 405</span>
              <h3 className="text-lg font-bold text-[#003366] mb-2 leading-tight group-hover:text-emerald-700 transition-colors">
                Cómo corregir errores en Libros Oficiales
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Protocolo legal para la "Fe de Erratas" y checklist de auditoría SEREMI.
              </p>
            </Link>

            {/* Tarjeta Inactiva (Próximamente) */}
            <div className="bg-slate-100 border border-slate-200/50 rounded-2xl p-6 opacity-60 relative">
              <div className="absolute top-4 right-4">
                <Lock size={16} className="text-slate-400" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Próximamente</span>
              <h3 className="text-lg font-bold text-slate-700 mb-2 leading-tight">
                Guía Visual: ¿Cómo leer una Receta Cheque?
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Infografía con los 4 datos obligatorios que no pueden faltar para evitar rechazos legales y sumarios.
              </p>
            </div>
          </div>

          {/* COLUMNA 2: Infraestructura */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white shadow-sm">
                <Thermometer size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-800">Infraestructura y BPA</h2>
            </div>

            <div className="bg-slate-100 border border-slate-200/50 rounded-2xl p-6 opacity-60 relative">
              <div className="absolute top-4 right-4">
                <Lock size={16} className="text-slate-400" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Próximamente</span>
              <h3 className="text-lg font-bold text-slate-700 mb-2 leading-tight">
                Checklist de Turno de Noche
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                5 puntos de seguridad que el DT debe verificar antes de entregar o cerrar el turno (llaves, caja, libros).
              </p>
            </div>

            <div className="bg-slate-100 border border-slate-200/50 rounded-2xl p-6 opacity-60 relative">
              <div className="absolute top-4 right-4">
                <Lock size={16} className="text-slate-400" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Próximamente</span>
              <h3 className="text-lg font-bold text-slate-700 mb-2 leading-tight">
                El "Semáforo" de la Temperatura
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Guía rápida de colores (Verde, Amarillo, Rojo) para actuar de inmediato ante cambios en el refrigerador.
              </p>
            </div>
          </div>

          {/* COLUMNA 3: Legal y Dispensación */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white shadow-sm">
                <Scale size={20} />
              </div>
              <h2 className="text-xl font-black text-slate-800">Dispensación Legal</h2>
            </div>

            <div className="bg-slate-100 border border-slate-200/50 rounded-2xl p-6 opacity-60 relative">
              <div className="absolute top-4 right-4">
                <Lock size={16} className="text-slate-400" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Próximamente</span>
              <h3 className="text-lg font-bold text-slate-700 mb-2 leading-tight">
                Guía de Intercambiabilidad (Ley de Fármacos)
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Qué puede y qué NO puede sugerir el auxiliar en el mesón al momento de ofrecer alternativas.
              </p>
            </div>
            
            <div className="bg-slate-100 border border-slate-200/50 rounded-2xl p-6 opacity-60 relative">
              <div className="absolute top-4 right-4">
                <Lock size={16} className="text-slate-400" />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Próximamente</span>
              <h3 className="text-lg font-bold text-slate-700 mb-2 leading-tight">
                Límites de Venta Directa (OTC)
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Cantidades máximas de dispensación sin receta médica que un auxiliar puede procesar en caja.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Banner de Conversión Institucional */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-[#003366] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#003366]/20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#004080] to-[#002244]">
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
              Delega la capacitación de tu equipo
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Mientras tú te encargas de la Dirección Técnica, nosotros preparamos a tus auxiliares para que dominen el mesón, la normativa SEREMI y el trato al paciente.
            </p>
          </div>
          <Link 
            href="/planes"
            className="flex items-center gap-2 bg-[#28a745] hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-black transition-all shadow-lg shadow-emerald-900/40 whitespace-nowrap"
          >
            VER PLANES PARA FARMACIAS <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6">
        <SocialContact />
      </div>

    </main>
  );
}