// Ruta: app/quiz/page.js

"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import SocialContact from "../components/SocialContact";
import BannerVenta from "../components/BannerVenta";
import { 
  ChevronLeft, ShieldCheck, Trophy, BrainCircuit, Share2, Loader2, AlertTriangle, BookOpen, Lock, ChevronRight, Sparkles, Flame, X
} from "lucide-react"; 
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// 🔥 RUTA RELATIVA: Salimos de quiz (1), salimos de app (2) y entramos a lib
import { updateStreak } from "../../lib/streakService";

const isPastLaunch = () => {
  const launchDate = new Date("2026-03-31T23:59:59");
  return new Date() > launchDate;
};

const ADMIN_EMAIL = "marcar1972@gmail.com";

export default function QuizLobbyPage() {
  const router = useRouter();
  const [daysRemaining, setDaysRemaining] = useState(null); 
  const [showWarning, setShowWarning] = useState(false);
  
  // ESTADOS DE ACCESO Y CARGA
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); 
  const [isProUser, setIsProUser] = useState(false); 
  const [canAccessSimulator, setCanAccessSimulator] = useState(false);

  // ESTADOS DE RACHA
  const [streakData, setStreakData] = useState({ current: 0, longest: 0 });

  // 🚀 LÓGICA DE PROGRESO DE NIVELES (SIMULADOR INICIAL - 3 NIVELES)
  const [progressPercent, setProgressPercent] = useState(0);
  const [levelsCompletedCount, setLevelsCompletedCount] = useState(0);

  // 🚀 LÓGICA DE CONVERSIÓN IN-APP: Modal proactivo para usuarios Free
  const [showPromoModal, setShowPromoModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            const isAdmin = user.email === ADMIN_EMAIL;
            let userHasActivePro = data.isPro === true;
            
            // Seteamos datos de racha para la UI (el motor de racha ahora se actualizará AL TERMINAR el desafío diario)
            setStreakData({
              current: data.streakCount || 0,
              longest: data.longestStreak || 0
            });

            // 🚀 CÁLCULO DINÁMICO DEL PROGRESO REAL EN LOS 3 NIVELES GRATIS
            let completedCount = 0;
            if (data.completedLevels && Array.isArray(data.completedLevels)) {
              completedCount = data.completedLevels.length;
              setLevelsCompletedCount(completedCount);
              // Lógica basada en el tope de 3 niveles de la v5.0
              const percent = Math.min(Math.round((completedCount / 3) * 100), 100);
              setProgressPercent(percent);
            } else {
              setProgressPercent(0);
              setLevelsCompletedCount(0);
            }

            const rawFields = [data.untilPro, data.untilpro, data.proUntil, data.prountil];
            const parseDate = (val) => {
              if (!val) return null;
              if (typeof val.toDate === 'function') return val.toDate();
              const d = new Date(val);
              return isNaN(d.getTime()) ? null : d;
            };

            const validDates = rawFields.map(parseDate).filter(d => d !== null);

            if (validDates.length > 0) {
              const expiryDate = new Date(Math.max(...validDates));
              const now = new Date();
              if (expiryDate > now) userHasActivePro = true;
              
              // Control de expiración y alertas
              const diffTime = expiryDate.getTime() - now.getTime();
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

              if (diffDays >= 0) {
                setDaysRemaining(diffDays);
                setShowWarning(true); 
              } else {
                setDaysRemaining(0); 
                userHasActivePro = false;
              }
            }

            if (isAdmin) userHasActivePro = true;
            setIsProUser(userHasActivePro);

            // CTO FIX: Se elimina la restricción de haber aprobado los 4 módulos previos.
            // Ahora, si el usuario es PRO (y su cuenta no ha expirado), tiene acceso total e inmediato.
            setCanAccessSimulator(userHasActivePro);

            // ⚡ CORRECCIÓN UX: El modal SOLO salta si completó los 3 niveles gratis y no es PRO.
            if (!userHasActivePro && completedCount >= 3) {
              const timer = setTimeout(() => {
                setShowPromoModal(true);
              }, 1500); // 1.5 segundos de retraso orgánico para dar una mejor transición
              return () => clearTimeout(timer);
            }
          }
        } catch (error) {
          console.error("Error obteniendo estado de usuario:", error);
        } finally {
          setIsCheckingAuth(false);
        }
      } else {
        setIsCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AuxiliarPro App - Simulador Examen MINSAL',
          text: 'Prepárate para tu examen de Auxiliar de Farmacia con este simulador. ¡Está buenísimo!',
          url: window.location.origin,
        });
      } catch (error) { console.log('Error compartiendo', error); }
    } else { alert("La función de compartir no está soportada."); }
  };

  const handleBasicAccess = (route) => {
    if (!auth.currentUser) { router.push('/login'); return; }
    router.push(route);
  };

  const handleCampusAccess = () => {
    if (!auth.currentUser) { router.push('/login'); return; }
    router.push('/campus');
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans relative">
      <nav className="bg-white p-6 shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/" className="text-slate-400 hover:text-[#003366] cursor-pointer transition-colors">
            <ChevronLeft size={28} />
          </Link>
          <span className="text-xl font-black text-[#003366] tracking-tighter">Lobby de Entrenamiento</span>
        </div>
      </nav>

      <section className="p-6 max-w-3xl mx-auto mt-6">
        <header className="mb-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl font-black text-[#003366] tracking-tight leading-tight">
              Simulador de Examen <span className="text-[#28a745]">Auxiliar de Farmacia</span> SEREMI
            </h1>
            <button onClick={handleShare} className="shrink-0 flex items-center justify-center p-3 bg-white text-slate-600 rounded-2xl hover:bg-[#28a745] hover:text-white transition-all border border-slate-200 shadow-sm">
              <Share2 size={24} strokeWidth={2.5} />
            </button>
          </div>

          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            Prepárate para la certificación del MINSAL in Chile. Practica con casos reales y preguntas de prueba para asegurar tu título como Auxiliar de Farmacia.
          </p>

          {/* ✅ AVISO V5.0 RESTAURADO COMPLETAMENTE */}
          <div className="text-left bg-blue-50 border border-blue-200 p-5 md:p-6 rounded-2xl shadow-sm mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#003366]"></div>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="bg-blue-100 p-3 rounded-xl shrink-0 text-[#003366] shadow-sm">
                <Sparkles size={24} />
              </div>
              <div className="w-full">
                <h3 className="font-black text-[#003366] text-base md:text-lg uppercase tracking-wide mb-2">¡Evolucionamos a la v5.0! 🚀</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  Acabamos de implementar la mayor actualización de nuestra plataforma para optimizar tu tiempo de estudio:
                </p>
                <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5 font-medium mb-4">
                  <li>El <strong>Simulador Inicial</strong> se ha optimizado: pasamos de 7 niveles dispersos a <strong>3 niveles fundamentales <span className="text-[#28a745] font-black">100% gratis</span></strong>, yendo directo a lo que importa.</li>
                  <li>El acceso PRO se transformó en el nuevo <strong className="text-[#003366]">Campus Virtual PRO</strong>: un ecosistema de estudio formativo, <strong>con estructura de CFT</strong>, diseñado para llevarte paso a paso a la aprobación.</li>
                </ul>
                <div className="bg-white/60 p-4 rounded-xl border border-blue-100/50 mt-2">
                  <p className="text-xs text-[#003366] font-medium leading-relaxed">
                    <strong className="text-[#003366] font-black">Nuestro Compromiso:</strong> AuxiliarPro App seguirá en continua evolución. Ya seas un aspirante buscando su credencial o un colega activo de mesón, nuestra meta es entregarte siempre la herramienta tecnológica más precisa y actualizada del rubro en Chile.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {showWarning && daysRemaining !== null && (
            <div className="inline-flex items-center gap-2 bg-[#f0fdf4] text-[#166534] px-5 py-2.5 rounded-full text-sm font-black tracking-wide border border-[#bbf7d0] shadow-sm">
              <AlertTriangle size={16} />
              {daysRemaining === 0 ? "¡Suscripción expirada hoy!" : `¡Quedan ${daysRemaining} días de acceso PRO!`}
            </div>
          )}
        </header>

        <div className="w-full space-y-6">
          <button onClick={() => handleBasicAccess('/quiz/basic')} className="w-full text-left rounded-[2rem] border-2 transition-all p-8 bg-white border-slate-200 shadow-sm hover:border-[#28a745] hover:shadow-lg group flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0 bg-[#28a745] text-white shadow-md group-hover:scale-105 transition-transform"><BrainCircuit size={40} /></div>
            <div className="flex-1 w-full text-center md:text-left">
                <h3 className="font-black text-2xl text-[#003366] leading-tight mb-2 group-hover:text-[#28a745] transition-colors">Simulador Inicial</h3>
                <p className="text-sm text-slate-500 mb-4">La ruta de entrenamiento definitiva. <strong className="text-[#28a745]">100% gratis</strong> para dominar los conceptos básicos.</p>
                
                {/* 🚀 COMPONENTE DE BARRA DE PROGRESO INTEGRADO DINÁMICAMENTE */}
                <div className="w-full mt-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-1">
                    <span>Progreso de Entrenamiento</span>
                    <span className="text-[#28a745]">{levelsCompletedCount} / 3 Niveles ({progressPercent}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200/50">
                    <div 
                      className="bg-[#28a745] h-full rounded-full transition-all duration-500 ease-out shadow-sm"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>
            </div>
            <div className="hidden md:flex shrink-0 text-[#28a745] items-center gap-2 font-bold opacity-50 group-hover:opacity-100 transition-opacity bg-emerald-50 px-4 py-2 rounded-full">Entrar <ChevronRight size={20} /></div>
          </button>

          <article>
            <div className="w-full rounded-[2rem] border-2 border-[#001122] transition-all p-8 bg-[#002244] shadow-xl relative overflow-hidden mt-2">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#003366] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0 bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_0_20px_rgba(255,153,0,0.3)]"><ShieldCheck size={40} /></div>
                <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                      <h3 className="font-black text-2xl text-white leading-tight">Campus Virtual PRO</h3>
                      <button onClick={handleShare} className="text-blue-300 hover:text-amber-400 transition-colors bg-white/10 p-2 rounded-full"><Share2 size={16} /></button>
                    </div>
                    <div className="text-sm text-blue-100 mb-5 min-h-[40px]">
                      {isCheckingAuth 
                        ? "Verificando tu level de acceso..." 
                        : !isProUser 
                          ? "Descubre el temario oficial en el Campus y entusiásmate a dar el paso PRO." 
                          : canAccessSimulator 
                            ? "Acceso total a los módulos y al Simulador Fiscalizador. Estás listo para el desafío final." 
                            : "Acceso PRO activo. El Simulador SEREMI está bloqueado (Error)."
                      }
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button onClick={handleCampusAccess} className="flex items-center justify-center gap-2 bg-white text-[#002244] font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all w-full">
                        <BookOpen size={18} /> Ingresar al Campus
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </article>

          {/* CENTRO DE MANDO REUBICADO: DESAFÍO DIARIO Y RACHA */}
          <div className="bg-white border border-slate-200 p-5 rounded-[2rem] shadow-sm mt-8 max-w-full mx-auto animate-in fade-in zoom-in duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 opacity-50"></div>
             
             <div className="flex items-center justify-center gap-6 mb-5">
               <div className="flex flex-col items-center">
                  <div className="relative">
                    <Flame size={56} className={streakData.current > 0 ? "text-orange-500 fill-orange-500 animate-pulse drop-shadow-md" : "text-slate-300 fill-slate-100"} />
                  </div>
               </div>
               <div className="text-left">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Tu Racha</p>
                  <h4 className={`text-3xl font-black tracking-tighter ${streakData.current > 0 ? 'text-[#003366]' : 'text-slate-400'}`}>
                    {streakData.current} <span className="text-lg">Días</span>
                  </h4>
                  <p className="text-[10px] font-bold text-slate-500 mt-1">
                    Récord: <span className="text-orange-600">{streakData.longest} days</span>
                  </p>
               </div>
             </div>

             <button 
               onClick={() => handleBasicAccess('/quiz/racha')}
               className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black py-3.5 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:-translate-y-0.5"
             >
               <Flame size={20} className="fill-white" /> JUGAR DESAFÍO RÁPIDO
             </button>
             <p className="text-center text-[10px] text-slate-400 mt-3 font-bold px-2 leading-relaxed">
               Responde 5 preguntas al azar con <span className="text-red-500">15 segundos de límite</span> para encender tu fuego de hoy.
             </p>
          </div>

          <div className="pt-4"><SocialContact /></div>
        </div>
        <div className="mt-8"><BannerVenta /></div>
      </section>

      {/* 🚀 MODAL IN-APP DE CONVERSIÓN TÁCTICA PARA CONVERTIR USUARIOS REGISTRADOS */}
      {showPromoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center">
            
            {/* Botón de cierre discreto */}
            <button 
              onClick={() => setShowPromoModal(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icono de Valor Médico / Aprobación */}
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 text-[#003366]">
              <ShieldCheck size={28} className="text-[#003366]" />
            </div>

            {/* Subtítulo de Conversión Preciso */}
            <h3 className="text-xl font-black text-[#003366] tracking-tight">
              ¡Asegura tu Aprobación SEREMI! 🇨🇱
            </h3>
            
            <p className="mt-2 text-sm text-slate-500 leading-relaxed font-medium">
              Ya conoces los 3 niveles iniciales de prueba. Te invitamos a descubrir la preparación más potente y cercana al examen profesional de la SEREMI que existe en Chile.
            </p>

            {/* Micro Balas de Valor Táctico */}
            <div className="w-full my-4 p-4 bg-slate-50 rounded-2xl text-left text-xs text-slate-600 space-y-2.5 border border-slate-100 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#28a745] font-black">✔</span>
                <span><strong>Simulador Profesional:</strong> Módulos completos con la exigencia real del MINSAL.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#28a745] font-black">✔</span>
                <span><strong>Preguntas de Racha Avanzadas:</strong> Consistencia diaria bajo presión.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#28a745] font-black">✔</span>
                <span><strong>Explicaciones del Marco Legal:</strong> Decretos 466, 404 y 405 en cada fallo.</span>
              </div>
            </div>

            {/* Botón de Conversión a Mercado Pago / Registro PRO */}
            <div className="w-full space-y-2">
              <button
                onClick={handleCampusAccess}
                className="w-full py-3.5 px-4 bg-[#003366] hover:bg-[#002244] text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-100 transition-all transform active:scale-[0.98]"
              >
                Desbloquear el Campus Virtual PRO
              </button>
              <button
                onClick={() => setShowPromoModal(false)}
                className="w-full py-2 text-xs text-slate-400 hover:text-slate-500 font-semibold transition-colors"
              >
                Seguir repasando en el Lobby básico
              </button>
            </div>

          </div>
        </div>
      )}

      <footer className="p-8 text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">AuxiliarPro App | &lt; macz.dev /&gt;</footer>
    </main>
  );
}