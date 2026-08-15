// Ruta: app/components/TarjetaTramiteSeremi.tsx
import Link from "next/link";
import { ClipboardCheck, GraduationCap, ListChecks, ChevronRight } from "lucide-react";

export default function TarjetaTramiteSeremi() {
  return (
    <div className="w-full transition-all p-8 bg-gradient-to-br from-[#003366] to-[#002244] shadow-xl hover:shadow-2xl mt-2 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0 bg-[#28a745] text-white shadow-md">
          <ClipboardCheck size={40} />
        </div>

        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-[#28a745] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-2">
            Nuevo · Trámite SEREMI
          </span>
          <h3 className="font-black text-2xl text-white leading-tight mb-2">
            Inicia tu Trámite de Certificación
          </h3>
          <p className="text-sm text-blue-100/90 mb-4">
            Te acompañamos paso a paso hasta Seremi en Línea: genera tu{" "}
            <strong className="text-white">Certificado de Idoneidad</strong> en formato
            oficial, te llevamos a MINEDUC por tu{" "}
            <strong className="text-white">Certificado de Enseñanza Media</strong> y te
            entregamos el checklist completo del trámite.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 text-left">
            <li className="bg-white/10 border border-white/15 rounded-xl p-3 flex gap-2 items-start">
              <ClipboardCheck size={18} className="text-[#28a745] shrink-0 mt-0.5" />
              <p className="text-xs text-blue-100">
                <strong className="text-white">Certificado de Idoneidad</strong> en formato
                oficial (Art. 28, DS 466/1984), listo para la firma de tu QF.
              </p>
            </li>
            <li className="bg-white/10 border border-white/15 rounded-xl p-3 flex gap-2 items-start">
              <GraduationCap size={18} className="text-[#28a745] shrink-0 mt-0.5" />
              <p className="text-xs text-blue-100">
                <strong className="text-white">Certificado de Enseñanza Media</strong>:
                acceso directo a MINEDUC para obtenerlo con tu ClaveÚnica.
              </p>
            </li>
            <li className="bg-white/10 border border-white/15 rounded-xl p-3 flex gap-2 items-start">
              <ListChecks size={18} className="text-[#28a745] shrink-0 mt-0.5" />
              <p className="text-xs text-blue-100">
                <strong className="text-white">Checklist oficial</strong>: contrato, foto
                carnet y guía paso a paso hasta la plataforma.
              </p>
            </li>
          </ul>

          <Link
            href="/formulario"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#28a745] hover:bg-[#218838] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md"
          >
            📥 Iniciar mi trámite ahora <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}