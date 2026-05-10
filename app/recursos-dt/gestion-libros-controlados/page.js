"use client";

import Link from "next/link";
import { AlertTriangle, ChevronLeft, FileText, BookOpen, CheckCircle2, ExternalLink } from "lucide-react";
import SocialContact from "../../components/SocialContact";

export default function GestionLibrosPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#37352f] selection:bg-[#003366] selection:text-white">
      {/* Navegación Superior Estilo Notion */}
      <nav className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Link 
          href="/campus" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#003366] font-bold text-sm transition-colors mb-8 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
          Volver a Recursos DT
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-[#003366] mb-6 tracking-tight leading-tight">
          Cómo corregir errores en Libros de Controlados
        </h1>
        <div className="flex flex-wrap gap-3">
          <span className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-red-100">
            Protocolo de Emergencia
          </span>
          <span className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-slate-200">
            Decretos 404 / 405 Chile
          </span>
        </div>
      </nav>

      {/* Cuerpo del Recurso */}
      <article className="max-w-4xl mx-auto px-6 pb-24">
        
        {/* Cita de Autoridad */}
        <blockquote className="p-6 md:p-8 bg-slate-50 border-l-4 border-[#003366] rounded-r-2xl text-lg md:text-xl text-slate-700 font-medium mb-16 shadow-sm">
          "La integridad de los Libros de Controlados es el reflejo de la gestión sanitaria del Director Técnico. Un error mal enmendado es, para la autoridad, un riesgo de desviación de sustancias."
        </blockquote>

        <div className="space-y-20">
          
          {/* BLOQUE 1: PROHIBICIONES */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#003366] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
              <AlertTriangle className="text-red-500" size={32} />
              Lo que la Ley prohíbe estrictamente
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Según el <strong>Artículo 22 del DTO 404</strong> y el <strong>Artículo 20 del DTO 405</strong>, los libros oficiales de Estupefacientes y Psicotrópicos son documentos públicos que no admiten alteraciones que comprometan su trazabilidad.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Cero Corrector", desc: "El uso de corrector líquido (Liquid Paper) invalida inmediatamente el registro ante el ISP." },
                { title: "Sin Tachaduras", desc: "No se debe rayar, ennegrecer ni ocultar el texto original del error bajo ninguna circunstancia." },
                { title: "Integridad Física", desc: "Está estrictamente prohibido arrancar hojas dañadas o dejar folios en blanco entre registros." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-red-200 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <span className="text-red-500 font-black text-lg">{i + 1}</span>
                  </div>
                  <h4 className="font-black text-slate-800 text-base mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOQUE 2: FE DE ERRATAS */}
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#003366] mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
              <BookOpen className="text-emerald-500" size={32} />
              Técnica Correcta: La "Fe de Erratas"
            </h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Si detectas un error, la enmienda debe ser <strong>100% transparente</strong>. El fiscalizador debe poder leer el error original y la corrección simultáneamente:
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BookOpen size={160} className="text-[#003366]" />
              </div>
              <h4 className="text-slate-400 font-bold text-[11px] uppercase tracking-widest mb-6 flex items-center gap-2">
                <FileText size={14} />
                Ejemplo de registro legal en el libro
              </h4>
              
              <div className="space-y-4 font-mono text-sm relative z-10">
                <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <p className="text-slate-400 line-through decoration-red-400/50 decoration-2">
                    [Línea 14] 05/05/2026 - Egreso: 10 unidades - Receta 445
                  </p>
                </div>
                <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm">
                  <p className="text-emerald-800 font-bold leading-relaxed">
                    [Línea 15] FE DE ERRATAS: En línea 14 donde dice 10 unidades, debe decir 01 unidad. Error de digitación. [Firma y Timbre DT]
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOQUE 3: LEAD MAGNET (Apertura en Navegador) */}
          <section className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-slate-100/50">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-[#003366] mb-3 flex items-center justify-center md:justify-start gap-2">
                <FileText className="text-emerald-600" size={28} /> 
                Checklist de Pre-Fiscalización
              </h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Revisa los 10 puntos críticos que audita la SEREMI en los libros de controlados antes de su llegada. Un recurso diseñado exclusivamente para Directores Técnicos.
              </p>
            </div>
            
            {/* CTO FIX: Texto del botón corregido a "ABRIR PDF" */}
            <a 
              href="/Checklist-Auditoria-DT-AuxiliarPro-v2.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-600/20 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              ABRIR PDF
            </a>
          </section>

          {/* BLOQUE 4: CTA ESTRATÉGICO (Caballo de Troya) */}
          <section className="relative p-1 bg-[#003366] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#003366]/20 mt-12">
            <div className="bg-[#003366] px-8 py-16 rounded-[2.8rem] border border-white/10 text-center">
              <CheckCircle2 size={56} className="mx-auto mb-6 text-[#28a745]" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                ¿Tu equipo domina estos protocolos?
              </h2>
              <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Un error administrativo en el mesón puede comprometer tu Dirección Técnica. Asegura la formación de tus auxiliares con el simulador líder en normativa chilena.
              </p>
              <div className="flex justify-center">
                <Link 
                  href="/planes" 
                  className="bg-[#28a745] text-white px-10 py-5 rounded-2xl font-black hover:bg-green-600 transition-colors shadow-lg shadow-green-900/30 uppercase text-sm tracking-widest"
                >
                  Ver Planes para Farmacias
                </Link>
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* Footer del Recurso */}
      <footer className="mt-12 pt-12 border-t border-slate-100 pb-12 bg-slate-50">
         <div className="max-w-4xl mx-auto px-6">
           <SocialContact />
           <div className="mt-16 text-center">
             <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] mb-4">
               AuxiliarPro • Hub de Recursos Técnicos
             </p>
             <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
               Material de libre distribución para fines educativos. Desarrollado en base a la normativa del Instituto de Salud Pública (ISP) y Ministerio de Salud de Chile.
             </p>
           </div>
         </div>
      </footer>
    </main>
  );
}