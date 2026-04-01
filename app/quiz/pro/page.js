"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PRO_LEVELS } from "../../quizData/index"; 
import Link from "next/link";
import { 
  Lock, CheckCircle, ChevronLeft, ShieldCheck, Trophy, Loader2, Library, 
  Gamepad2, Sparkles, Facebook, Instagram, Medal 
} from "lucide-react"; 

import { auth, db } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp, collection, addDoc, query, where, getDocs } from "firebase/firestore";

const DEADLINE_PRO = new Date("2026-03-31T00:00:00");
const IS_LAUNCH_DAY = new Date() >= DEADLINE_PRO;
const ADMIN_EMAIL = "marcar1972@gmail.com";

export default function QuizProPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [unlockedLevels, setUnlockedLevels] = useState([1]); 
  const [isPro, setIsPro] = useState(false);
  const [proUntil, setProUntil] = useState(null);
  
  const [showAuthModal, setShowAuthModal] = useState(false); 
  const [cargandoCupon, setCargandoCupon] = useState(false);
  const [inscrito, setInscrito] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUnlockedLevels(data.unlockedLevelsPro || [1]);
            setIsPro(data.isPro || false);
            if (data.proUntil) setProUntil(data.proUntil.toDate());
          } else {
            await setDoc(docRef, { 
              email: currentUser.email, 
              unlockedLevels: [1], 
              unlockedLevelsPro: [1],
              isPro: false, 
              createdAt: serverTimestamp() 
            }, { merge: true });
          }
          const q = query(collection(db, "lista_espera_pro"), where("email", "==", currentUser.email));
          const qSnap = await getDocs(q);
          if (!qSnap.empty) setInscrito(true);
        } else {
          setUser(null);
        }
      } catch (e) {
        console.error("Error en Auth:", e);
      } finally {
        setLoadingAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const hasActiveSubscription = () => {
    if (user?.email === ADMIN_EMAIL) return true;
    if (!isPro) return false;
    if (!proUntil) return true; 
    return new Date() <= proUntil;
  };

  const startLevel = (id) => {
    if (!user) { setShowAuthModal(true); return; }

    const isAdmin = user.email === ADMIN_EMAIL;
    const subscriptionActive = hasActiveSubscription();
    
    // REGLA ESTRICTA PRO: NINGÚN nivel es gratis.
    // Solo accedes si eres Admin O (lo tienes desbloqueado Y (no es lanzamiento o tienes sub activa))
    const canAccess = isAdmin || (unlockedLevels.includes(id) && (!IS_LAUNCH_DAY || subscriptionActive));

    if (!canAccess) {
      alert("Este nivel requiere suscripción PRO activa. ¡Adquiere tu plan para continuar!");
      router.push('/planes');
      return;
    }
    
    router.push(`/quiz/pro/${id}`);
  };

  const handleAccionCupon = async () => {
    if (!user) { setShowAuthModal(true); return; }
    if (inscrito) return;
    setCargandoCupon(true);
    try {
      await addDoc(collection(db, 'lista_espera_pro'), {
        nombre: user.displayName || 'Usuario AuxiliarPro',
        email: user.email,
        uid: user.uid,
        fechaRegistro: new Date(),
        cuponAsignado: 'PRO30_MARZO'
      });
      setInscrito(true);
    } catch (error) { alert("Error al procesar."); }
    finally { setCargandoCupon(false); }
  };

  const getMedalNameForLevel = (levelId) => {
    switch(levelId) {
      case 1: return "Zafiro";
      case 2: return "Rubí";
      case 3: return "Esmeralda";
      case 4: return "Amatista";
      case 5: return "Topacio";
      case 6: return "Ópalo";
      case 7: return "Diamante";
      default: return "Gema PRO";
    }
  };

  const getMedalColor = (medalName) => {
    if (!medalName) return "bg-slate-100 text-slate-500 border-slate-200";
    const name = medalName.toLowerCase();
    if (name.includes("zafiro")) return "bg-blue-50 text-blue-700 border-blue-200";
    if (name.includes("rubí")) return "bg-red-50 text-red-700 border-red-200";
    if (name.includes("esmeralda")) return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (name.includes("amatista")) return "bg-purple-50 text-purple-700 border-purple-200";
    if (name.includes("topacio")) return "bg-amber-50 text-amber-700 border-amber-200";
    if (name.includes("ópalo")) return "bg-indigo-50 text-indigo-700 border-indigo-200";
    if (name.includes("diamante")) return "bg-cyan-50 text-cyan-700 border-cyan-200";
    return "bg-slate-50 text-slate-600 border-slate-200"; 
  };

  const getCircleMedalColor = (medalName) => {
    if (!medalName) return "bg-emerald-500 text-white shadow-inner"; 
    const name = medalName.toLowerCase();
    if (name.includes("zafiro")) return "bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-white shadow-[inset_0_-2px_4_rgba(0,0,0,0.6),inset_0_2px_4_rgba(255,255,255,0.4)]"; 
    if (name.includes("rubí")) return "bg-gradient-to-br from-red-400 via-red-600 to-red-800 text-white shadow-[inset_0_-2px_4_rgba(0,0,0,0.6),inset_0_2px_4_rgba(255,255,255,0.3)]"; 
    if (name.includes("esmeralda")) return "bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800 text-white shadow-[inset_0_-2px_4_rgba(0,0,0,0.5),inset_0_2px_4_rgba(255,255,255,0.5)]"; 
    if (name.includes("amatista")) return "bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 text-white shadow-[inset_0_-2px_4_rgba(0,0,0,0.3),inset_0_2px_6px_rgba(255,255,255,0.8)]"; 
    if (name.includes("topacio")) return "bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-white shadow-[inset_0_-2px_4_rgba(0,0,0,0.4),inset_0_2px_4_rgba(255,255,255,0.7)]"; 
    if (name.includes("ópalo")) return "bg-gradient-to-br from-indigo-300 via-purple-400 to-pink-500 text-white shadow-[inset_0_-2px_4_rgba(0,0,0,0.2),inset_0_2px_6px_rgba(255,255,255,0.9)]";
    if (name.includes("diamante")) return "bg-gradient-to-br from-cyan-100 via-blue-200 to-white text-blue-900 shadow-[inset_0_-2px_4_rgba(0,0,0,0.8),inset_0_2px_4_rgba(255,255,255,0.2)]"; 
    return "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700 text-white shadow-[inset_0_-2px_4_rgba(0,0,0,0.3),inset_0_2px_4_rgba(255,255,255,0.4)]"; 
  };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans relative">
      
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Acceso Restringido</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Para guardar tu progreso y desbloquear niveles, necesitas una cuenta gratuita.
            </p>
            <div className="space-y-3">
              <Link href="/login" className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors">Iniciar Sesión / Registrarse</Link>
              <button onClick={() => setShowAuthModal(false)} className="text-slate-400 font-bold text-sm hover:text-slate-600">Seguir mirando</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-4">
          <Link href="/quiz" className="text-slate-400 hover:text-slate-900 cursor-pointer"><ChevronLeft size={28} /></Link>
          <span className="text-xl font-black text-slate-900 tracking-tighter">Simulador PRO</span>
        </div>
        <div className="bg-slate-100 px-4 py-2 rounded-full text-sm font-black text-slate-700 flex items-center gap-3">
          <Trophy size={18} className="text-amber-500"/> 
          {user ? unlockedLevels.length - 1 : 0} / {PRO_LEVELS.length}
        </div>
      </div>

      <section className="p-6 max-w-3xl mx-auto mt-6">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Modo <span className="text-amber-500">PRO SEREMI</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Enfrenta casos complejos de farmacia, normativa legal exigente y test de medicamentos avanzados.
          </p>
        </header>

        <div className="w-full space-y-6">
          <div onClick={() => !user && setShowAuthModal(true)} className={`bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 mx-auto max-w-xl ${!user ? 'cursor-pointer hover:bg-slate-50 transition-colors' : ''}`}>
            <div className="relative">
              {user?.photoURL ? <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-2xl border-4 border-slate-50 shadow-md object-cover" /> : <div className="w-16 h-16 bg-slate-200 text-slate-400 rounded-2xl flex items-center justify-center text-2xl font-black shadow-inner">?</div>}
              <div className={`absolute -bottom-1 -right-1 text-white p-1 rounded-lg border-2 border-white ${user ? 'bg-amber-500' : 'bg-slate-400'}`}><ShieldCheck size={14}/></div>
            </div>
            <div>
              <p className="text-[10px] text-amber-600 font-black uppercase tracking-wider">Auxiliar en formación</p>
              <h2 className="text-xl font-black text-slate-900 leading-none mb-1">{user?.displayName || "Invitado"}</h2>
              <p className="text-xs text-slate-400 font-medium italic tracking-tight">{user ? (user.email === ADMIN_EMAIL ? "Modo Administrador (Acceso Total)" : isPro ? "Suscripción PRO Activa" : "Modo Fiscalizador") : "Crea una cuenta para guardar progreso"}</p>
            </div>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto relative z-0">
            {PRO_LEVELS.map((l) => {
              const isAdmin = user?.email === ADMIN_EMAIL;
              const isUnlocked = user ? unlockedLevels.includes(l.id) : false; 
              const isPassed = user ? unlockedLevels.includes(l.id + 1) || (l.id === PRO_LEVELS.length && unlockedLevels.length > PRO_LEVELS.length) : false;
              const currentMedalName = getMedalNameForLevel(l.id);

              // --- APLICANDO LA LÓGICA DEL INICIAL AL PRO ---
              const isSubscriptionActiveVisual = hasActiveSubscription();
              
              // Visualmente, en PRO NUNCA es gratis.
              // Disponible SOLO si es Admin, o lo ha desbloqueado Y (es antes del lanzamiento O tiene sub activa)
              const canAccessVisual = isAdmin || (isUnlocked && (!IS_LAUNCH_DAY || isSubscriptionActiveVisual));
              
              // El botón es clicable siempre y cuando tenga acceso visual. La función startLevel hará el bloqueo final si es necesario.
              const isClickable = canAccessVisual;

              return (
                <div key={l.id} className="relative group">
                  <button 
                    onClick={() => isClickable && startLevel(l.id)} 
                    disabled={!isClickable}
                    className={`w-full rounded-[2rem] border-2 transition-all p-6 flex items-center gap-6 relative ${isPassed ? "bg-amber-50 border-amber-100 cursor-pointer" : canAccessVisual ? "bg-white border-amber-100 shadow-xl hover:-translate-y-1 cursor-pointer" : "bg-white opacity-70 grayscale cursor-default border-slate-100"}`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0 transition-all duration-500 ${isPassed || canAccessVisual ? getCircleMedalColor(currentMedalName) : "bg-slate-200 text-slate-400 shadow-inner"} ${canAccessVisual && !isPassed ? "animate-pulse shadow-lg" : ""}`}>
                      {isPassed ? <CheckCircle size={32} /> : (canAccessVisual ? <Gamepad2 size={32} /> : <Lock size={28}/>)}
                    </div>
                    <div className="flex-1 text-left z-10 relative">
                        <h3 className="font-black text-lg text-slate-800 leading-tight">{l.title}</h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{l.description}</p>

                        <div className="flex items-center gap-2 mt-2">
                          {isUnlocked && <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${getMedalColor(currentMedalName)}`}><Medal size={12}/> {currentMedalName}</span>}
                          
                          {canAccessVisual ? (
                            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                              <Sparkles size={10} /> DISPONIBLE
                            </span>
                          ) : (
                            <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200 flex items-center gap-1">
                              <Lock size={10} /> REQUIERE PRO
                            </span>
                          )}
                        </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-2xl mx-auto">
              <Link href="/guias" className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm hover:border-amber-400 transition-all flex items-center gap-4 group cursor-pointer w-full">
                  <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0"><Library size={24} /></div>
                  <div><h3 className="font-black text-slate-800 tracking-tight">Guías de Estudio</h3><p className="text-[10px] text-slate-400 font-bold uppercase italic">Resúmenes y Normativa</p></div>
              </Link>

              <a href="https://wa.me/?text=¡Hola!%20Encontré%20este%20ensayo%20general%20para%20el%20examen%20de%20farmacia.%20Está%20buenísimo:%20https://www.auxiliaresdefarmacia.cl/ruta" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all hover:bg-[#20bd5a] flex items-center gap-4 group cursor-pointer w-full">
                <div className="shrink-0 group-hover:scale-110 transition-transform"><img src="/whatsapp.webp" alt="WhatsApp" className="w-12 h-12 object-contain" /></div>
                <div><h3 className="font-black text-white tracking-tight">Compartir</h3><p className="text-[10px] text-white/90 font-bold uppercase italic">Enviar a Colegas</p></div>
              </a>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <article className="bg-[#0f172a] rounded-[2.5rem] p-8 shadow-xl border border-slate-800 flex flex-col relative overflow-hidden">
              <div className="absolute top-6 right-6"><span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1"><Sparkles size={12} /> 31 de Marzo</span></div>
              <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-3 mt-10 md:mt-0"><ShieldCheck size={28} className="text-amber-400"/> La Experiencia PRO</h2>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">El ecosistema definitivo para toda tu vida laboral. No solo apruebes el examen, conviértete en el mejor profesional del mesón.</p>
              <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 mb-8">
                <h4 className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">Simulador Avanzado + Herramientas</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" /> Casos Clínicos y Decretos Específicos</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" /> Vademécum Profesional Activo</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" /> Asistente IA para Dudas de Farmacia</li>
                  <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" /> Módulo de Psicología y Burnout</li>
                </ul>
              </div>
              <button onClick={handleAccionCupon} disabled={cargandoCupon || inscrito} className={`w-full font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm shadow-lg ${inscrito ? "bg-amber-500 text-slate-900 cursor-default" : cargandoCupon ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105 active:scale-95"}`}>
                {inscrito ? '¡CUPÓN RESERVADO! ✓' : cargandoCupon ? 'Procesando...' : 'Asegurar 30% Dcto.'}
              </button>
            </article>

            <div className="flex justify-center gap-6 mt-8">
              <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Facebook size={30} />
              </a>
              <a href="https://www.instagram.com/auxiliarpro/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Instagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}