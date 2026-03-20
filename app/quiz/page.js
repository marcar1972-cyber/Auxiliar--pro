"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../quizData/index"; 
import Link from "next/link";
import { 
  Lock, CheckCircle, XCircle, ChevronLeft, Clock, ShieldCheck, Trophy, Loader2, Library, 
  BookOpen, ThermometerSnowflake, BrainCircuit, Store, Calculator, Medal, ArrowRight,
  Sparkles, AlertTriangle, Gamepad2, FileText, Bot, Brain, ExternalLink, Facebook, Instagram
} from "lucide-react"; 

// IMPORTACIÓN CORREGIDA
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp, collection, addDoc, query, where, getDocs } from "firebase/firestore";

const iconMap = { 
  ThermometerSnowflake: <ThermometerSnowflake size={32} />, 
  Store: <Store size={32} />, 
  BookOpen: <BookOpen size={32} />, 
  BrainCircuit: <BrainCircuit size={32} />, 
  Lock: <Lock size={32} />, 
  Calculator: <Calculator size={32} />, 
  Trophy: <Trophy size={32} /> 
};

const DEADLINE_PRO = new Date("2026-03-31T00:00:00");
const IS_LAUNCH_DAY = new Date() >= DEADLINE_PRO;

export default function QuizPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [unlockedLevels, setUnlockedLevels] = useState([1]); 
  const [isPro, setIsPro] = useState(false);
  const [proUntil, setProUntil] = useState(null);
  
  const [activeLevelId, setActiveLevelId] = useState(null);  
  const [currentQIndex, setCurrentQIndex] = useState(0);         
  const [score, setScore] = useState(0);                        
  const [showResult, setShowResult] = useState(false);         
  const [selectedOption, setSelectedOption] = useState(null); 
  const [isAnswered, setIsAnswered] = useState(false);         
  const [mistakes, setMistakes] = useState([]); 
  const [timeLeft, setTimeLeft] = useState(0); 
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
            setUnlockedLevels(data.unlockedLevels || [1]);
            setIsPro(data.isPro || false);
            if (data.proUntil) setProUntil(data.proUntil.toDate());
          } else {
            await setDoc(docRef, { 
              email: currentUser.email, 
              unlockedLevels: [1], 
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
    if (!isPro) return false;
    if (!proUntil) return true; 
    return new Date() <= proUntil;
  };

  const startLevel = (id) => {
    const level = LEVELS.find(l => l.id === id);
    if (!level) return;
    const isAlwaysFree = id <= 2;
    const subscriptionActive = hasActiveSubscription();
    const canAccess = isAlwaysFree || !IS_LAUNCH_DAY || subscriptionActive || unlockedLevels.includes(id);

    if (!canAccess) {
      alert("Este nivel requiere suscripción PRO. ¡Usa tu cupón de descuento!");
      return;
    }
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    router.push(`/quiz/${id}`);
  };

  const returnToMenu = () => { 
    setShowResult(false); 
    setActiveLevelId(null); 
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
      await fetch('https://hook.us2.make.com/r82qebz6xb884lmr86rrgs1gr7eitcz5', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: user.displayName, email: user.email })
      });
      setInscrito(true);
    } catch (error) { alert("Error al procesar."); }
    finally { setCargandoCupon(false); }
  };

  const getMedalNameForLevel = (levelId) => {
    switch(levelId) {
      case 1: return "Medalla de Cobre";
      case 2: return "Medalla de Bronce";
      case 3: return "Medalla de Acero";
      case 4: return "Medalla de Plata";
      case 5: return "Medalla de Oro";
      case 6: return "Medalla de Platino";
      case 7: return "Medalla de Titanio";
      default: return "Medalla de Honor";
    }
  };

  const getMedalColor = (medalName) => {
    if (!medalName) return "bg-slate-100 text-slate-500 border-slate-200";
    const name = medalName.toLowerCase();
    if (name.includes("cobre")) return "bg-orange-50 text-orange-700 border-orange-200";
    if (name.includes("bronce")) return "bg-amber-100/50 text-amber-700 border-amber-200/50";
    if (name.includes("acero")) return "bg-slate-200 text-slate-700 border-slate-300";
    if (name.includes("plata")) return "bg-slate-100 text-slate-600 border-slate-200";
    if (name.includes("oro")) return "bg-yellow-100/50 text-yellow-600 border-yellow-300/50";
    if (name.includes("platino")) return "bg-teal-50 text-teal-600 border-teal-200";
    if (name.includes("titanio")) return "bg-slate-800 text-slate-300 border-slate-700";
    return "bg-yellow-50 text-yellow-600 border-yellow-200"; 
  };

  const getCircleMedalColor = (medalName) => {
    if (!medalName) return "bg-emerald-500 text-white shadow-inner"; 
    const name = medalName.toLowerCase();
    if (name.includes("cobre")) return "bg-gradient-to-br from-orange-400 via-orange-600 to-orange-800 text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.4)]"; 
    if (name.includes("bronce")) return "bg-gradient-to-br from-yellow-600 via-amber-700 to-amber-900 text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.3)]"; 
    if (name.includes("acero")) return "bg-gradient-to-br from-slate-400 via-slate-500 to-slate-700 text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.5)]"; 
    if (name.includes("plata")) return "bg-gradient-to-br from-gray-100 via-slate-300 to-slate-400 text-slate-800 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3),inset_0_2px_6px_rgba(255,255,255,0.8)]"; 
    if (name.includes("oro")) return "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 text-yellow-900 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.7)]"; 
    if (name.includes("platino")) return "bg-gradient-to-br from-slate-100 via-teal-100 to-slate-300 text-teal-900 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_6px_rgba(255,255,255,0.9)] border border-white/50";
    if (name.includes("titanio")) return "bg-gradient-to-br from-slate-700 via-slate-900 to-black text-slate-200 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(255,255,255,0.2)]"; 
    return "bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 text-white shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.4)]"; 
  };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  if (!activeLevelId) {
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
            <Link href="/" className="text-slate-400 hover:text-slate-900 cursor-pointer"><ChevronLeft size={28} /></Link>
            <span className="text-xl font-black text-slate-900 tracking-tighter">Mi Ruta 2026</span>
          </div>
          <div className="bg-slate-100 px-4 py-2 rounded-full text-sm font-black text-slate-700 flex items-center gap-3">
            <Trophy size={18} className="text-yellow-500"/> 
            {user ? unlockedLevels.length - 1 : 0} / {LEVELS.length}
          </div>
        </div>

        <section className="p-6 max-w-3xl mx-auto mt-6">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Simulador <span className="text-emerald-600">AuxiliarPro</span>: Ensayo General de Farmacia (Seremi 2026)
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Mide tus conocimientos en todas las áreas clave: Decreto 466, Código Sanitario y Farmacología General.
            </p>
          </header>

          <div className="w-full space-y-6">
            <div onClick={() => !user && setShowAuthModal(true)} className={`bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 mx-auto max-w-xl ${!user ? 'cursor-pointer hover:bg-slate-50 transition-colors' : ''}`}>
              <div className="relative">
                {user?.photoURL ? <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-2xl border-4 border-slate-50 shadow-md object-cover" /> : <div className="w-16 h-16 bg-slate-200 text-slate-400 rounded-2xl flex items-center justify-center text-2xl font-black shadow-inner">?</div>}
                <div className={`absolute -bottom-1 -right-1 text-white p-1 rounded-lg border-2 border-white ${user ? 'bg-emerald-500' : 'bg-slate-400'}`}><ShieldCheck size={14}/></div>
              </div>
              <div>
                <p className="text-[10px] text-emerald-600 font-black uppercase tracking-wider">Auxiliar en formación</p>
                <h2 className="text-xl font-black text-slate-900 leading-none mb-1">{user?.displayName || "Invitado"}</h2>
                <p className="text-xs text-slate-400 font-medium italic tracking-tight">{user ? (isPro ? "Modo PRO Activado" : "Modo Inicial") : "Crea una cuenta para guardar progreso"}</p>
              </div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {LEVELS.map((l) => {
                const isUnlocked = user ? unlockedLevels.includes(l.id) : (l.id === 1); 
                const isPassed = user ? unlockedLevels.includes(l.id + 1) || (l.id === LEVELS.length && unlockedLevels.length > LEVELS.length) : false;
                const currentMedalName = getMedalNameForLevel(l.id);
                return (
                  <button key={l.id} onClick={() => isUnlocked && startLevel(l.id)} className={`w-full group rounded-[2rem] border-2 transition-all p-6 flex items-center gap-6 relative overflow-hidden ${isPassed ? "bg-emerald-50 border-emerald-100 cursor-pointer" : isUnlocked ? "bg-white border-emerald-100 shadow-xl hover:-translate-y-1 cursor-pointer" : "bg-white opacity-70 grayscale cursor-default border-slate-100"}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0 transition-all duration-500 ${isPassed || isUnlocked ? getCircleMedalColor(currentMedalName) : "bg-slate-200 text-slate-400 shadow-inner"} ${isUnlocked && !isPassed ? "animate-pulse shadow-lg" : ""}`}>
                      {isPassed || isUnlocked ? <CheckCircle size={32} /> : <Lock size={28}/>}
                    </div>
                    <div className="flex-1 text-left z-10">
                        <h3 className="font-black text-lg text-slate-800 leading-tight">{l.title}</h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{l.description}</p>
                        <div className="flex items-center gap-2 mt-2">{isUnlocked && <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 border ${getMedalColor(currentMedalName)}`}><Medal size={12}/> {currentMedalName}</span>}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-2xl mx-auto">
                <Link href="/guias" className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm hover:border-blue-400 transition-all flex items-center gap-4 group cursor-pointer w-full">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0"><Library size={24} /></div>
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
                <h2 className="text-2xl font-black text-white mb-2 flex items-center gap-3"><ShieldCheck size={28} className="text-emerald-400"/> La Experiencia PRO</h2>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">El ecosistema definitivo para toda tu vida laboral. No solo apruebes el examen, conviértete en el mejor profesional del mesón.</p>
                <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 mb-8">
                  <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">Simulador Avanzado + Herramientas</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Casos Clínicos y Decretos Específicos</li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Vademécum Profesional Activo</li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Asistente IA para Dudas de Farmacia</li>
                    <li className="flex items-start gap-3 text-sm text-slate-300 font-medium"><CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" /> Módulo de Psicología y Burnout</li>
                  </ul>
                </div>
                <button onClick={handleAccionCupon} disabled={cargandoCupon || inscrito} className={`w-full font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm shadow-lg ${inscrito ? "bg-emerald-500 text-slate-900 cursor-default" : cargandoCupon ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-emerald-500 text-slate-900 hover:bg-emerald-400 hover:scale-105 active:scale-95"}`}>
                  {inscrito ? '¡CUPÓN RESERVADO! ✓' : cargandoCupon ? 'Procesando...' : 'Asegurar 30% Dcto.'}
                </button>
              </article>

              {/* NUEVA SECCIÓN: ICONOS REDONDEADOS DE REDES SOCIALES */}
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
  return (
    <div className="p-6 text-center mt-20">
      <h2 className="text-2xl font-bold">¡Simulador en Acción!</h2>
      <p>Aquí va la lógica de tus preguntas...</p>
      <button onClick={returnToMenu} className="mt-4 bg-slate-900 text-white px-4 py-2 rounded">Volver</button>
    </div>
  );
}