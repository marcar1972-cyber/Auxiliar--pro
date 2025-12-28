"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Search, Calculator, User, ChevronRight, BookOpen, 
  Scale, ShieldAlert, Mail, Instagram, Facebook 
} from "lucide-react";
import UserIcon from "./UserIcon"; // Asegúrate de tener este componente

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. NAVEGACIÓN PRINCIPAL */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* LOGOTIPO OFICIAL */}
          <Link href="/" className="relative w-40 h-12 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.webp" 
              alt="Logo AuxiliarPro" 
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* ACCESOS RÁPIDOS */}
          <div className="flex items-center gap-3 md:gap-6">
            <Link href="/blog" className="text-slate-400 hover:text-emerald-500 transition-colors p-2" title="Buscar">
              <Search size={22} />
            </Link>
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <Link href="/dermocheck" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-xs tracking-widest px-3 py-2 rounded-xl hover:bg-blue-50 transition-all border border-slate-100 md:border-none">
              <Calculator size={18} />
              <span className="hidden sm:inline uppercase">Dermocheck</span>
            </Link>
            <div className="h-6 w-px bg-slate-200"></div>
            <UserIcon />
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION: IMPACTO SOCIAL */}
      <header className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Comunidad: +50 Alumnos Activos
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
            Tu examen <span className="text-emerald-500">SEREMI</span> comienza aquí.
          </h1>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
            Prepárate con el simulador líder en Chile, basado estrictamente en los 
            <strong> Decretos Supremos 466, 404 y 405</strong> del Ministerio de Salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/quiz" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95">
              EMPEZAR AHORA
            </Link>
            <Link href="/biblioteca" className="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 px-10 py-5 rounded-[2rem] font-black text-lg hover:border-emerald-500 transition-all">
              LEER DECRETOS
            </Link>
          </div>
        </div>
      </header>

      {/* 3. CONTENIDO SEO: +600 PALABRAS */}
      <main className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <article className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-tight tracking-tight">
              Normativa Sanitaria y el <br/>Decreto Supremo 466
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Para obtener la certificación ante la SEREMI de Salud en Chile, el aspirante a Auxiliar de Farmacia debe demostrar un dominio total del <strong>Decreto Supremo 466</strong>. Este reglamento jurídico constituye la piedra angular del funcionamiento de las farmacias, estableciendo los estándares para la recepción, almacenamiento y correcta dispensación de productos farmacéuticos.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Nuestra plataforma educativa analiza cada artículo del reglamento, desde las facultades de prescripción médica hasta los requisitos de infraestructura. Es vital que el personal técnico comprenda que la salud del paciente depende de una <strong>cadena de frío</strong> ininterrumpida (entre 2°C y 8°C) y de un sistema de inventario FEFO que garantice que el primer producto en vencer sea el primero en salir.
            </p>
            <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
              <h3 className="text-xl font-black mb-6 flex items-center gap-3">
                <Scale className="text-emerald-500" /> Marco Legal 2026
              </h3>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex gap-4">
                  <span className="text-emerald-500">●</span>
                  <strong>DS 404:</strong> Control de Estupefacientes y manejo de Receta Cheque.
                </li>
                <li className="flex gap-4">
                  <span className="text-emerald-500">●</span>
                  <strong>DS 405:</strong> Regulación de Psicotrópicos y custodia en estanterías bajo llave.
                </li>
                <li className="flex gap-4">
                  <span className="text-emerald-500">●</span>
                  <strong>Ley de Fármacos:</strong> Obligatoriedad de bioequivalentes y fraccionamiento autorizado.
                </li>
              </ul>
            </div>
          </article>

          <aside className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8">Áreas de Evaluación Técnica</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Legislación Sanitaria", d: "Dominio de plazos de vigencia de recetas y facultades de los prescriptores." },
                  { t: "Farmacología Aplicada", d: "Procesos ADME, biotransformación y reporte de reacciones adversas (RAM) al ISP." },
                  { t: "Logística y Bodega", d: "Almacenamiento a 10cm del suelo, control de humedad y manejo de residuos." },
                  { t: "Cálculos de Dosis", d: "Conversión de miligramos a gramos y cálculo de duración de tratamientos." }
                ].map((item, i) => (
                  <div key={i} className="group p-6 bg-white border border-slate-100 rounded-3xl hover:border-emerald-500 transition-all shadow-sm">
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2 group-hover:text-emerald-600">Módulo {i+1}</h4>
                    <p className="font-bold text-slate-800 mb-1">{item.t}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ: MÁS DENSIDAD DE PALABRAS PARA SEO */}
        <section className="mt-32 max-w-3xl mx-auto">
          <h3 className="text-4xl font-black text-center mb-16 tracking-tighter">Guía Técnica del Auxiliar</h3>
          <div className="space-y-4">
            <details className="group bg-slate-50 p-8 rounded-[2.5rem] cursor-pointer">
              <summary className="font-black text-lg flex justify-between items-center list-none">
                ¿Qué es el Petitorio Mínimo Farmacéutico?
                <ChevronRight className="group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-6 text-slate-600 leading-relaxed text-sm">
                Es la lista obligatoria de medicamentos que cada farmacia debe mantener en su inventario para asegurar el acceso a la salud. El incumplimiento de este petitorio es motivo de sanción inmediata por parte de la SEREMI o el ISP durante las inspecciones oculares rutinarias.
              </p>
            </details>
            <details className="group bg-slate-50 p-8 rounded-[2.5rem] cursor-pointer">
              <summary className="font-black text-lg flex justify-between items-center list-none">
                ¿Cómo validar una Receta Electrónica?
                <ChevronRight className="group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-6 text-slate-600 leading-relaxed text-sm">
                El auxiliar debe verificar el folio de la receta en el sistema centralizado de salud para confirmar que no ha sido dispensada previamente y que el profesional prescriptor cuenta con la habilitación vigente para emitirla.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* 4. FOOTER: LEGAL, RRSS Y CONTACTO */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-20">
          
          <div className="space-y-6">
            <div className="relative w-40 h-10 grayscale invert opacity-50">
               <Image src="/logo.webp" alt="Logo" fill className="object-contain object-left" />
            </div>
            <p className="text-xs leading-relaxed">
              AuxiliarPro es una plataforma independiente dedicada a la formación técnica. 
              Toda la información contenida se basa en los reglamentos vigentes del Ministerio de Salud de Chile.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-widest">Descargos y Condiciones</h4>
            <div className="text-[10px] space-y-3 leading-relaxed">
              <p>● El simulador no reemplaza la bibliografía oficial de la SEREMI.</p>
              <p>● Las preguntas son de carácter referencial basadas en exámenes anteriores.</p>
              <p>● Nos reservamos el derecho de actualizar contenidos según cambios en los decretos legales.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black uppercase text-xs tracking-widest">Contacto y Sugerencias</h4>
            <a href="mailto:auxiliarprofarma@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
              <Mail size={18} /> auxiliarprofarma@gmail.com
            </a>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={24}/></Link>
              <Link href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={24}/></Link>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 text-center text-[10px] font-bold tracking-widest uppercase">
          AuxiliarPro Chile © 2026 | Desarrollado para la excelencia farmacéutica
        </div>
      </footer>
    </div>
  );
}
