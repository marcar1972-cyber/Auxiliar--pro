// Ruta: app/blog/page.js

"use client";

import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  BookOpen, FileText, ArrowRight, Loader2, ShieldCheck, Newspaper
} from "lucide-react";

export default function BlogIndex() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login?redirect=/blog");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 text-slate-700 font-sans">
      
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Biblioteca Técnica <span className="text-emerald-600">AuxiliarPro</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
          Conocimiento técnico, normativo y práctico para auxiliares certificados en Chile. Todo centralizado en un solo lugar.
        </p>
      </header>

      {/* GUÍAS DESTACADAS */}
      <section className="mb-20">
        <h2 className="text-2xl font-black text-[#003366] mb-8 uppercase tracking-widest flex items-center gap-3">
          <BookOpen className="text-[#28a745]" /> Guías Destacadas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/como-ser-auxiliar-farmacia" className="bg-white p-8 rounded-3xl border-2 border-[#003366] hover:border-[#28a745] transition-all flex flex-col justify-between group shadow-sm">
            <h3 className="text-2xl font-black mb-4 text-[#003366]">¿Cómo ser Auxiliar de Farmacia?</h3>
            <p className="text-slate-600 mb-6">El camino completo: desde los requisitos hasta la certificación oficial ante la SEREMI.</p>
            <span className="inline-flex items-center gap-2 font-bold text-[#003366] group-hover:text-[#28a745] transition-colors">
              Leer Guía <ArrowRight size={18} />
            </span>
          </Link>
          <Link href="/blog/preguntas-examen-seremi-farmacologia" className="bg-white p-8 rounded-3xl border-2 border-[#28a745] hover:border-[#003366] transition-all flex flex-col justify-between group shadow-sm">
            <h3 className="text-2xl font-black mb-4 text-[#28a745]">Hub de Preparación SEREMI</h3>
            <p className="text-slate-600 mb-6">Desglosamos el formato, la legislación estricta y los casos reales del mesón.</p>
            <span className="inline-flex items-center gap-2 font-bold text-[#28a745] group-hover:text-[#003366] transition-colors">
              Ir al Hub de Preguntas <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>

      {/* TEMAS DE INTERÉS */}
      <section>
        <h2 className="text-2xl font-black text-[#003366] mb-8 uppercase tracking-widest flex items-center gap-3">
          <Newspaper className="text-[#28a745]" /> Temas de Interés
        </h2>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm">
          <p className="text-slate-500 mb-6 italic">Estamos construyendo nuestra biblioteca técnica para apoyarte en el mesón. Próximamente encontrarás aquí:</p>
          <div className="flex flex-wrap justify-center gap-4">
             {['Recetas Retenidas', 'Venta Directa (VD)', 'Cadena de Frío', 'Bioequivalencia'].map(topic => (
               <span key={topic} className="bg-white text-slate-600 font-bold px-4 py-2 rounded-xl text-sm border-2 border-slate-200">
                  {topic}
               </span>
             ))}
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center border-t border-slate-100 pt-10">
        <p className="text-xs text-slate-400 uppercase tracking-widest">
          Biblioteca v1.0 | <span className="font-mono">&lt; macz.dev /&gt;</span>
        </p>
      </footer>
    </div>
  );
}