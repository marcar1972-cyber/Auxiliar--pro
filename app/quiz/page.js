"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../quizData/index"; 
import Link from "next/link";
import { 
  Lock, CheckCircle, XCircle, ChevronLeft, Clock, ShieldCheck, Trophy, Loader2, Library, 
  MessageCircle, GraduationCap, BookOpen, Scale, ThermometerSnowflake, ArrowRight, BrainCircuit,
  LogIn, ExternalLink
} from "lucide-react"; 

import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

// Icono de WhatsApp
const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const iconMap = { 
  BookOpen: <BookOpen size={32} />, 
  Scale: <Scale size={32} />, 
  ThermometerSnowflake: <ThermometerSnowflake size={32} />, 
  GraduationCap: <GraduationCap size={32} /> 
};

export default function QuizPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [unlockedLevels, setUnlockedLevels] = useState([1]); 
  const [activeLevelId, setActiveLevelId] = useState(null);  
  const [currentQIndex, setCurrentQIndex] = useState(0);      
  const [score, setScore] = useState(0);                      
  const [showResult, setShowResult] = useState(false);        
  const [selectedOption, setSelectedOption] = useState(null); 
  const [isAnswered, setIsAnswered] = useState(false);        
  const [mistakes, setMistakes] = useState([]); 
  const [timeLeft, setTimeLeft] = useState(0); 
  const [showAuthModal, setShowAuthModal] = useState(false); 
  const [showForumModal, setShowForumModal] = useState(false); // 🟢 Modal del Foro

  // Lógica de Autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          setUser(currentUser);
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists() && docSnap.data().unlockedLevels) {
            setUnlockedLevels(docSnap.data().unlockedLevels);
          } else {
            await setDoc(docRef, { 
              email: currentUser.email, 
              unlockedLevels: [1], 
              createdAt: serverTimestamp() 
            }, { merge: true });
          }
        } else {
          setUser(null);
        }
      } catch (e) {
        console.error("Error cargando perfil:", e);
      } finally {
        setLoadingAuth(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // LÓGICA DEL TEMPORIZADOR
  useEffect(() => {
    if (activeLevelId && !showResult && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(p => { 
          if (p <= 1) { 
            clearInterval(timerId); 
            setShowResult(true); 
            return 0; 
          } 
          return p - 1; 
        });
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [activeLevelId, showResult, timeLeft]);

  // INICIAR NIVEL
  const startLevel = (id) => {
    const level = LEVELS.find(l => l.id === id);
    if (!level) return;

    if (!user) {
      setShowAuthModal(true);
      return;
    }

    if (!unlockedLevels.includes(id)) return;
    
    setActiveLevelId(id); 
    setCurrentQIndex(0); 
    setScore(0); 
    setShowResult(false); 
    setMistakes([]); 
    setIsAnswered(false); 
    setSelectedOption(null); 
    setTimeLeft(level.timeLimit || 0); 
  };

  const returnToMenu = () => { 
    setShowResult(false); 
    setActiveLevelId(null); 
    setIsAnswered(false); 
    setSelectedOption(null); 
  };

  const handleLevelPass = async (levelId) => {
    if (user && !unlockedLevels.includes(levelId + 1)) {
      try {
        const nextLevel = levelId + 1;
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {
          unlockedLevels: arrayUnion(nextLevel)
        });
        setUnlockedLevels(prev => [...prev, nextLevel]);
      } catch (e) {
        console.error("Error guardando progreso:", e);
      }
    }
  };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  // RENDER: EXAMEN ACTIVO
  if (activeLevelId && !showResult) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    const q = level.questions[currentQIndex];
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="w-full bg-slate-100 h-3">
            <div 
              className="bg-emerald-500 h-3 transition-all duration-500" 
              style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}
            ></div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex justify-between items-center mb-10">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                Pregunta {currentQIndex + 1} de {level.questions.length}
              </span>
              {timeLeft > 0 && (
                <div className="bg-slate-100 px-4 py-2 rounded-full font-mono font-bold text-slate-600 flex items-center gap-2">
                  <Clock size={16} className={timeLeft < 300 ? "text-red-500 animate-pulse" : ""}/> 
                  {Math.floor(timeLeft/60)}:{timeLeft%60<10?'0':''}{timeLeft%60}
                </div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-10 leading-tight">{q.text}</h2>
            
            <div className="space-y-4">
              {q.options.map((opt, idx) => {
                let s = "bg-slate-50 border-slate-100 text-slate-600";
                if (isAnswered) { 
                  if (idx === q.correctIndex) s = "bg-green-50 border-green-500 text-green-700 shadow-sm"; 
                  else if (idx === selectedOption) s = "bg-red-50 border-red-500 text-red-700"; 
                  else s = "opacity-40 grayscale"; 
                }
                
                return (
                  <button 
                    key={idx} 
                    disabled={isAnswered} 
                    onClick={() => { 
                      if(!isAnswered){ 
                        setSelectedOption(idx); 
                        setIsAnswered(true); 
                        if(idx === q.correctIndex) setScore(s => s + 1); 
                        else setMistakes(m => [...m, { 
                          question: q.text, 
                          yourAnswer: opt, 
                          correctAnswer: q.options[q.correctIndex],
                          studyGuide: q.studyGuide 
                        }]); 

                        setTimeout(() => { 
                          if(currentQIndex + 1 < level.questions.length){
                            setCurrentQIndex(c => c + 1);
                            setIsAnswered(false);
                            setSelectedOption(null);
                          } else {
                            const finalScore = idx === q.correctIndex ? score + 1 : score;
                            if (finalScore >= level.passingScore) handleLevelPass(activeLevelId);
                            setShowResult(true);
                          }
                        }, 1200);
                      }
                    }} 
                    className={`w-full text-left p-5 rounded-2xl border-2 font-bold transition-all flex items-center gap-4 cursor-pointer ${s}`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-white border border-inherit flex items-center justify-center text-sm">
                      {["A","B","C","D"][idx]}
                    </span>
                    <span className="flex-1">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <button onClick={returnToMenu} className="mt-8 text-slate-400 font-bold hover:text-red-500 transition-colors cursor-pointer">
          Abandonar Examen
        </button>
      </div>
    );
  }

  // RENDER: PANTALLA DE RESULTADOS
  if (showResult && activeLevelId) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    const passed = score >= (level?.passingScore || 0);
    const timeOut = timeLeft === 0 && activeLevelId === 4; 

    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-lg w-full border border-white">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${passed ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>
            {passed ? <CheckCircle size={48} /> : <XCircle size={48} />}
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">
            {timeOut ? "¡Se acabó el tiempo!" : passed ? "¡Nivel Superado!" : "Sigue Practicando"}
          </h2>
          <p className="text-slate-500 text-lg mb-8 font-medium italic">Lograste {score} de {level?.questions.length} correctas</p>
          
          {mistakes.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left mb-8 max-h-60 overflow-y-auto">
                {mistakes.map((m, i) => (
                    <div key={i} className="mb-6 last:mb-0 border-b border-slate-200 pb-4 last:border-0 text-sm">
                        <p className="font-bold text-slate-800 mb-2">{m.question}</p>
                        <p className="text-xs text-emerald-600 font-bold italic">Respuesta correcta: {m.correctAnswer}</p>
                        <p className="text-[10px] text-slate-400 mt-2 font-medium">Tema: {m.studyGuide}</p>
                    </div>
                ))}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button onClick={passed ? returnToMenu : () => startLevel(activeLevelId)} className={`w-full font-black py-5 rounded-2xl shadow-lg cursor-pointer transition-transform hover:scale-[1.02] ${passed ? "bg-slate-900 text-white" : "bg-emerald-500 text-white"}`}>
              {passed ? "Continuar Ruta" : "Reintentar Nivel"}
            </button>
            <button onClick={returnToMenu} className="py-4 text-slate-400 font-bold text-sm text-center cursor-pointer">Volver al Menú</button>
          </div>
        </div>
      </div>
    );
  }

  // RENDER: MENÚ DE NIVELES (CON SEO FOOTER INYECTADO)
  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans relative">
      
      {/* 🟢 MODAL DE AUTENTICACIÓN */}
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
              <Link 
                href="/login" 
                className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Iniciar Sesión / Registrarse
              </Link>
              <button 
                onClick={() => setShowAuthModal(false)}
                className="text-slate-400 font-bold text-sm hover:text-slate-600"
              >
                Seguir mirando
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🟢 MODAL DE CONFIRMACIÓN FORO (Nuevo botón de volver) */}
      {showForumModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full text-center shadow-2xl">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <WhatsAppIcon size={32} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Comunidad VIP</h3>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
              Vas a ser redirigido a nuestro grupo de WhatsApp para resolver dudas técnicas.
            </p>
            <div className="space-y-3">
              <Link 
                href="/foro" 
                target="_blank"
                className="block w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
              >
                Ir al Grupo <ExternalLink size={18}/>
              </Link>
              <button 
                onClick={() => setShowForumModal(false)}
                className="w-full text-slate-400 font-bold text-sm hover:text-slate-600 py-2"
              >
                Me arrepentí / Volver
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER STICKY */}
      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-slate-400 hover:text-slate-900 cursor-pointer">
            <ChevronLeft size={28} />
          </Link>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter">Mi Ruta 2026</h1>
        </div>
        <div className="bg-slate-100 px-4 py-2 rounded-full text-sm font-black text-slate-700 flex items-center gap-3">
          <Trophy size={18} className="text-yellow-500"/> 
          {user ? unlockedLevels.length - 1 : 0} / {LEVELS.length}
        </div>
      </div>

      <div className="p-6 max-w-xl mx-auto space-y-8 mt-6">
        
        {/* TARJETA DE PERFIL (Interactiva si Invitado) */}
        <div 
          onClick={() => !user && setShowAuthModal(true)} 
          className={`bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 ${!user ? 'cursor-pointer hover:bg-slate-50 transition-colors' : ''}`}
        >
          <div className="relative">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="User" className="w-16 h-16 rounded-2xl border-4 border-slate-50 shadow-md object-cover" />
            ) : (
              <div className="w-16 h-16 bg-slate-200 text-slate-400 rounded-2xl flex items-center justify-center text-2xl font-black shadow-inner">
                ?
              </div>
            )}
            <div className={`absolute -bottom-1 -right-1 text-white p-1 rounded-lg border-2 border-white ${user ? 'bg-emerald-500' : 'bg-slate-400'}`}>
              <ShieldCheck size={14}/>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-emerald-600 font-black uppercase tracking-wider">
              {user ? "Auxiliar en formación" : "Modo Visitante"}
            </p>
            <h2 className="text-xl font-black text-slate-900 leading-none mb-1">
              {user?.displayName || "Invitado"}
            </h2>
            <p className="text-xs text-slate-400 font-medium italic tracking-tight">
              {user ? "Preparación Seremi 2026" : "Crea una cuenta para guardar progreso"}
            </p>
          </div>
        </div>
        
        {/* LISTA DE NIVELES DINÁMICA */}
        <div className="space-y-4">
          {LEVELS.map((l) => {
            const isU = user ? unlockedLevels.includes(l.id) : (l.id === 1); 
            const isP = user ? (unlockedLevels.includes(l.id + 1) || (l.id === LEVELS.length && unlockedLevels.length > LEVELS.length)) : false; 
            
            return (
              <button 
                key={l.id} 
                onClick={() => startLevel(l.id)} 
                className={`w-full group rounded-[2rem] border-2 transition-all p-6 flex items-center gap-6 ${
                  isP ? "bg-emerald-50 border-emerald-100 cursor-pointer" : 
                  isU ? "bg-white border-white shadow-xl hover:-translate-y-1 cursor-pointer" : 
                  "bg-slate-100 opacity-60 grayscale cursor-default"
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner ${
                  isP ? "bg-emerald-500 text-white" : 
                  isU ? "bg-[#dcfce7] text-[#10b981]" : 
                  "bg-slate-300 text-slate-400"
                }`}>
                  {isP ? <CheckCircle size={32} /> : isU ? (iconMap[l.icon] || l.icon) : <Lock size={28}/>}
                </div>
                <div className="flex-1 text-left">
                    <h3 className="font-black text-lg text-slate-800 leading-tight">{l.title}</h3>
                    <div className="flex items-center gap-3 mt-0.5 text-xs">
                        <p className="font-bold text-slate-400">{l.questions.length} Preguntas</p>
                        {user && (
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${
                            isP ? "bg-emerald-100 text-emerald-600 border-emerald-200" : 
                            isU ? "bg-slate-100 text-slate-400 border-slate-200" : 
                            "hidden"
                          }`}>
                              {isP ? "Superado" : "Pendiente"}
                          </span>
                        )}
                    </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACCESOS RÁPIDOS */}
        <div className="grid grid-cols-1 gap-4 mt-10">
            <Link href="/biblioteca" className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm hover:border-blue-400 transition-all flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Library size={28} />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-800 tracking-tight">Biblioteca</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase italic">Recursos PDF 2026</p>
                </div>
            </Link>

            {/* 🟢 TARJETA DE FORO (Ahora abre el Modal) */}
            <div 
              onClick={() => setShowForumModal(true)} 
              className="bg-[#0f172a] p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:scale-[1.01] transition-all cursor-pointer border border-white/10"
            >
                <div className="flex items-center justify-between relative z-10">
                    <div className="pr-4">
                        <h3 className="text-xl font-black text-white italic">¿Dudas Técnicas?</h3>
                        <p className="text-slate-400 text-xs mt-1">Entra al Foro Pro de WhatsApp</p>
                    </div>
                    <div className="shrink-0">
                      <WhatsAppIcon size={32} className="text-emerald-500 group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        </div>

        {/* 🟢 SECCIÓN SEO INYECTADA */}
        <section className="mt-16 pt-16 border-t border-slate-200">
          <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <BrainCircuit className="text-emerald-500"/>
            Sobre el Simulador SEREMI 2026
          </h2>
          <div className="prose prose-sm prose-slate text-slate-600 leading-relaxed">
            <p>
              El <strong>Simulador de Examen de Competencia</strong> de AuxiliarPro es la herramienta más avanzada para preparar tu acreditación ante la autoridad sanitaria. Diseñado siguiendo estrictamente el temario de los <strong>Decretos Supremos 466, 404, 3 y 90</strong>, este sistema te permite entrenar en un entorno controlado antes de rendir la prueba real.
            </p>
            <h3 className="text-lg font-bold text-slate-800 mt-4">¿Qué evalúan los niveles?</h3>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Normativa Farmacéutica:</strong> Roles, prohibiciones y tipos de establecimientos (Farmacias, Botiquines, Almacenes).</li>
              <li><strong>Farmacología Básica:</strong> Vías de administración, formas farmacéuticas y bioequivalencia.</li>
              <li><strong>Gestión de Calidad:</strong> Cadena de frío (2°C a 8°C), control de vencimientos y manejo de libros oficiales.</li>
              <li><strong>Dispensación Segura:</strong> Interpretación de recetas (Cheque, Retenida, Magistral) y cálculo de dosis.</li>
            </ul>
            <p className="mt-4">
              Cada nivel superado queda registrado en tu perfil de alumno, permitiéndote retomar tu estudio donde lo dejaste. Al completar la ruta, estarás listo para enfrentar las 60 preguntas de selección múltiple del examen oficial.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
