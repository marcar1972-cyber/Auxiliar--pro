"use client";

import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, BookOpen, FileText, DollarSign, Scale, Users, ArrowRight, GraduationCap, Lightbulb, Share2, Loader2, ShieldCheck, Newspaper
} from "lucide-react";

// LISTADO DE ARTÍCULOS
const articles = [
  {
    slug: "vision-ley-farmacos",
    title: "Ley de Fármacos II: Mi visión y por qué creé DermoCheck",
    desc: "Opinión estratégica: ¿Por qué la posible baja de márgenes amenaza tu estabilidad y cómo la gestión de stock te protege?",
    category: "Opinión",
    color: "text-amber-600",
    bgIcon: "bg-amber-500/10",
    icon: <Lightbulb className="text-amber-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "curso-auxiliar-farmacia-gratis-chile-2026",
    title: "Curso de Auxiliar de Farmacia Gratis en Chile",
    desc: "Guía de autoaprendizaje 2026. Estudia gratis con los Decretos 90, 466 y nuestro simulador.",
    category: "Estudio Gratis",
    color: "text-teal-600",
    bgIcon: "bg-teal-500/10",
    icon: <GraduationCap className="text-teal-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "fecha-examen-auxiliar-farmacia-seremi",
    title: "¿Cuándo es el Examen de Auxiliar de Farmacia?",
    desc: "No existe un calendario fijo. Descubre cómo funciona el proceso de asignación de fechas de la SEREMI.",
    category: "Trámites",
    color: "text-emerald-600",
    bgIcon: "bg-emerald-500/10",
    icon: <Calendar className="text-emerald-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "requisitos-auxiliar-farmacia-chile-2026",
    title: "Requisitos para ser Auxiliar de Farmacia (2026)",
    desc: "Guía completa con la normativa actualizada. Descubre qué documentos necesitas para tu inscripción.",
    category: "Guía 2026",
    color: "text-blue-600",
    bgIcon: "bg-blue-500/10",
    icon: <BookOpen className="text-blue-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "cuanto-gana-auxiliar-farmacia-chile",
    title: "¿Cuánto gana un Auxiliar de Farmacia en Chile?",
    desc: "Análisis de mercado laboral, rentas promedio y diferencias entre farmacia privada y asistencial.",
    category: "Laboral",
    color: "text-green-600",
    bgIcon: "bg-green-500/10",
    icon: <DollarSign className="text-green-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "que-es-el-decreto-466",
    title: "¿Qué es el Decreto 466? Lo que debes saber",
    desc: "El reglamento fundamental que rige a las farmacias en Chile y base del examen de competencia.",
    category: "Normativa",
    color: "text-slate-600",
    bgIcon: "bg-slate-500/10",
    icon: <Scale className="text-slate-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "examen-competencia-seremi-2025",
    title: "Todo sobre el Examen de Competencia SEREMI",
    desc: "Detalles sobre la evaluación, contenidos frecuentes y cómo prepararte para aprobar.",
    category: "Examen",
    color: "text-purple-600",
    bgIcon: "bg-purple-500/10",
    icon: <FileText className="text-purple-500 w-16 h-16 opacity-50" />
  },
  {
    slug: "diferencia-auxiliar-tecnico-farmacia",
    title: "Diferencia entre Auxiliar y Técnico en Farmacia",
    desc: "Comparativa de roles, responsabilidades legales y formación requerida para cada cargo.",
    category: "Orientación",
    color: "text-orange-600",
    bgIcon: "bg-orange-500/10",
    icon: <Users className="text-orange-500 w-16 h-16 opacity-50" />
  }
];

export default function BlogIndex() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 🛡️ GUARDIÁN DE RUTA
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

  // 🟢 FUNCIÓN UNIVERSAL PARA COMPARTIR
  const handleShare = async () => {
    const shareData = {
      title: 'Blog AuxiliarPro - Noticias y Guías para Farmacia',
      text: '¡Mira estos artículos! Tienen toda la info sobre sueldos, requisitos y exámenes SEREMI.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Enlace del blog copiado al portapapeles.");
      }
    } catch (err) {
      console.log("Error al compartir", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 text-slate-700 font-sans">
      
      {/* HEADER DEL BLOG */}
      <header className="mb-14 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Centro de Noticias AuxiliarPro</span>
           <button 
              onClick={handleShare}
              className="bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 p-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
              title="Compartir Blog"
           >
              <Share2 size={16} />
           </button>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight text-balance">
          Actualidad para el <span className="text-emerald-600">Auxiliar de Farmacia</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
          Información estratégica sobre normativas del MINSAL, sueldos, trámites SEREMI y técnicas de gestión en farmacias chilenas.
        </p>
      </header>

      {/* GRILLA DE ARTÍCULOS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {articles.map((post, index) => (
          <article key={index} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all flex flex-col h-full hover:-translate-y-1 group">
            <div className={`h-48 ${post.bgIcon} flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-300`}>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {post.icon}
                </div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className={`flex items-center gap-2 text-[10px] font-black ${post.color} mb-3 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full w-fit`}>
                {post.category}
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-3">
                {post.desc}
              </p>
              <div className="mt-auto">
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-emerald-600 transition-colors text-sm"
                >
                  Leer Artículo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 🚀 SECCIÓN DE AUTORIDAD EDITORIAL (ANTI-THIN CONTENT) */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 mt-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 text-emerald-600">
            <Newspaper size={28} />
            <h3 className="text-2xl font-black uppercase tracking-tight">Editorial Técnica AuxiliarPro</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 text-sm leading-relaxed text-slate-600">
            <div className="space-y-4">
              <p>
                El <strong>Blog de AuxiliarPro</strong> nace con la misión de profesionalizar el rol del auxiliar de farmacia en Chile. Nuestra línea editorial se basa estrictamente en la normativa del <strong>MINSAL y el ISP</strong>, desglosando leyes complejas como el <strong>Decreto 466</strong> para que sean aplicables en el día a día del mesón.
              </p>
              <p>
                Analizamos no solo la teoría del <strong>Examen SEREMI</strong>, sino también la realidad laboral: desde la actualización de sueldos hasta la gestión eficiente del stock para evitar vencimientos, un pilar que abordamos con herramientas como <strong>DermoCheck</strong>.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                En cada artículo, buscamos que el colega farmacéutico encuentre respuestas claras sobre <strong>Receta Cheque, Receta Retenida</strong> y los protocolos de los <strong>Decretos 404 y 405</strong>. La formación continua es la única forma de asegurar la seguridad del paciente y la estabilidad profesional.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Sueldos 2026', 'Trámites SEREMI', 'Ley de Fármacos', 'Gestión de Farmacia', 'DS 466'].map(tag => (
                  <span key={tag} className="bg-white border border-slate-200 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DE CONFIANZA */}
      <footer className="mt-20 text-center border-t border-slate-100 pt-10">
        <ShieldCheck className="mx-auto mb-4 text-slate-300" size={40} />
        <p className="text-xs text-slate-400 max-w-xl mx-auto uppercase tracking-widest leading-loose">
          Información generada por auxiliares certificados para la comunidad farmacéutica de Chile. v5.0 | <span className="font-mono">&lt; macz.dev /&gt;</span>
        </p>
      </footer>
    </div>
  );
}