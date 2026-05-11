"use client";

import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  BookOpen, Pill, Lock, ArrowRight, Library, GraduationCap, 
  BrainCircuit, Store, Calculator, Microscope, Flame, Heart, Brain, Share2,
  Loader2, ShieldCheck, FileText
} from "lucide-react";
import BannerVenta from '../components/BannerVenta';

export default function GuiasIndex() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 🛡️ GUARDIÁN DE RUTA
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login?redirect=/guias");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  // 🟢 FUNCIÓN UNIVERSAL PARA COMPARTIR
  const handleShare = async () => {
    const shareData = {
      title: 'Guías de Estudio Auxiliar de Farmacia 2026',
      text: '¡Mira este material de estudio! Está súper ordenado para preparar el examen de Auxiliar de Farmacia ante la SEREMI.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Enlace copiado al portapapeles.");
      }
    } catch (err) {
      console.log("Error al compartir", err);
    }
  };

  const guias = [
    {
      slug: "ley-20724-farmacos-1",
      title: "Ley de Fármacos I (20.724)",
      desc: "La farmacia como Centro de Salud. Prohibición de la canela, bioequivalencia obligatoria y fraccionamiento.",
      icon: <Store size={40} className="text-teal-600" />, 
      color: "teal"
    },
    {
      slug: "decreto-466-reglamento-farmacias",
      title: "Reglamento de Farmacias (DS 466)",
      desc: "El pilar fundamental. Aprende sobre roles del DT, infraestructura, libros obligatorios y tipos de establecimientos.",
      icon: <BookOpen size={40} className="text-blue-600" />,
      color: "blue"
    },
    {
      slug: "decreto-404-estupefacientes",
      title: "Reglamento de Estupefacientes (DS 404)",
      desc: "Normativa crítica sobre drogas de alto control. Receta Cheque, almacenamiento seguro y prohibiciones.",
      icon: <Lock size={40} className="text-red-600" />,
      color: "red"
    },
    {
      slug: "decreto-405-psicotropicos",
      title: "Reglamento de Psicotrópicos (DS 405)",
      desc: "Todo sobre las Listas I, II, III y IV. Estrellas verdes, recetas retenidas y control de benzodiazepinas.",
      icon: <BrainCircuit size={40} className="text-emerald-600" />,
      color: "emerald"
    },
    {
      slug: "decreto-3-control-productos",
      title: "Control de Productos (DS 3)",
      desc: "Domina la Bioequivalencia, el Registro Sanitario ISP, la Cadena de Frío y los tipos de envases.",
      icon: <Pill size={40} className="text-purple-600" />,
      color: "purple"
    },
    {
      slug: "guia-posologia",
      title: "Guía Maestra de Posología",
      desc: "Aprende a calcular dosis exactas. Regla de tres, equivalencias de gotas/ml y ejercicios prácticos.",
      icon: <Calculator size={40} className="text-indigo-600" />, 
      color: "indigo"
    },
    {
      slug: "farmacologia-1",
      title: "Farmacología: Fundamentos",
      desc: "Lo básico que debes saber. Sistema LADME, Farmacodinamia (Receptores) y Glosario Técnico.",
      icon: <Microscope size={40} className="text-cyan-600" />, 
      color: "cyan"
    },
    {
      slug: "alta-rotacion",
      title: "Farmacología: Alta Rotación",
      desc: "El 80% de la venta diaria. Dolor (AINEs), Respiratorio (Antigripales) y Digestivo. Lo que sale todos los días.",
      icon: <Flame size={40} className="text-orange-600" />, 
      color: "orange"
    },
    {
      slug: "cronicos-antiinfecciosos",
      title: "Farmacología: Crónicos y Antiinfecciosos",
      desc: "Fidelización del paciente. Hipertensión, Diabetes, Colesterol y uso responsable de Antibióticos.",
      icon: <Heart size={40} className="text-rose-600" />, 
      color: "rose"
    },
    {
      slug: "especialidades-controlados",
      title: "Farmacología: Especialidades y Controlados",
      desc: "SNC (Benzodiazepinas, Antidepresivos) y Dermatológicos. Manejo de receta retenida y venta consultiva.",
      icon: <Brain size={40} className="text-purple-600" />, 
      color: "purple"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-blue-600" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SEO OPTIMIZADO */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-2">
                <Library size={14} /> BIBLIOTECA AUXILIARPRO 2026
             </span>
             <button 
                onClick={handleShare}
                className="bg-white border border-slate-200 text-slate-500 hover:text-emerald-600 p-2 rounded-full shadow-sm"
             >
                <Share2 size={16} />
             </button>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Guías de Estudio AuxiliarPro: <br className="hidden md:block"/>
            <span className="text-blue-600">Apoyo para tu Certificación en Chile</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descarga material de estudio ordenado y actualizado para preparar tu examen ante la SEREMI. Repasa la Normativa (Decreto 466) y Farmacología con resúmenes claros.
          </p>
        </div>

        {/* GRILLA DE GUÍAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {guias.map((guia) => (
            <Link 
              key={guia.slug}
              href={`/guias/${guia.slug}`}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col items-start hover:-translate-y-2 h-full"
            >
              <div className={`mb-6 p-5 rounded-3xl bg-${guia.color}-50 group-hover:scale-110 transition-transform duration-300`}>
                {guia.icon}
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                {guia.title}
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm flex-grow">
                {guia.desc}
              </p>
              <div className="mt-auto w-full">
                <span className={`block w-full text-center py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-colors bg-slate-50 text-slate-600 group-hover:bg-[#003366] group-hover:text-white`}>
                  Leer Resumen y Quiz
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 🏛️ SECCIÓN TRÁMITE SEREMI */}
        <div className="mb-20 w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2 flex-1">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">¿Ya cumpliste el año en farmacia? 🕒</h3>
              <p className="text-slate-600 text-sm">Reúne tu documentación y haz el trámite en línea. Revisa nuestra guía para evitar rechazos.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link href="/blog/fecha-examen-auxiliar-farmacia-seremi" className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold text-sm">
                    <span>📄 Ver Guía Paso a Paso</span>
                </Link>
                <a href="https://seremienlinea.minsal.cl" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-semibold text-sm">
                    <span>Ir a Trámite SEREMI</span>
                </a>
            </div>
          </div>
        </div>

        {/* BANNER DE VENTA */}
        <div className="mb-20 max-w-4xl mx-auto">
            <BannerVenta colorTheme="blue" />
        </div>

        {/* 🚀 BLOQUE DE AUTORIDAD TÉCNICA (ANTI-THIN CONTENT) */}
        <section className="border-t border-slate-200 pt-16 mb-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6 text-[#003366]">
                    <ShieldCheck size={28} />
                    <h3 className="text-2xl font-black uppercase tracking-tight">Autoridad Técnica AuxiliarPro</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed text-slate-600">
                    <p>
                        En <strong>AuxiliarPro</strong>, nos basamos estrictamente en la normativa vigente dictada por el <strong>MINSAL</strong> y fiscalizada por el <strong>ISP de Chile</strong>. El correcto manejo de la <strong>Receta Cheque y Receta Retenida</strong>, la vigilancia activa de la <strong>Farmacovigilancia</strong> y el almacenamiento técnico según el <strong>Decreto Supremo 466</strong> son los pilares fundamentales de nuestro entrenamiento para auxiliares.
                    </p>
                    <p>
                        Nuestro material cubre desde la <strong>Ley de Fármacos 20.724</strong> hasta los protocolos críticos de los <strong>Decretos 404 y 405</strong> (Estupefacientes y Psicotrópicos). Entendemos que la certificación ante la <strong>SEREMI de Salud</strong> requiere no solo memoria, sino una comprensión profunda de la ética farmacéutica y la seguridad del paciente en el mesón de atención.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                    {['DS 466', 'DS 404', 'DS 405', 'Ley 20.724', 'Código Sanitario', 'Bioequivalencia', 'ISP Chile'].map((tag) => (
                        <span key={tag} className="bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-slate-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>

        {/* FOOTER ACADÉMICO */}
        <div className="text-center text-slate-400">
            <GraduationCap className="mx-auto mb-4 opacity-20" size={40}/>
            <p className="text-xs max-w-2xl mx-auto leading-relaxed">
                El examen de competencia para Auxiliar de Farmacia en Chile evalúa el conocimiento sobre el Código Sanitario y reglamentos vigentes. Esta biblioteca es una herramienta de apoyo complementaria.
            </p>
        </div>

      </div>
    </div>
  );
}