"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../quizData/index"; 
import Link from "next/link";
import { 
  Lock, CheckCircle, XCircle, ChevronLeft, Clock, ShieldCheck, Trophy, Loader2, Library, 
  MessageCircle, GraduationCap, BookOpen, Scale, ThermometerSnowflake, ArrowRight
} from "lucide-react"; 

import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

const iconMap = { BookOpen: <BookOpen size={32} />, Scale: <Scale size={32} />, ThermometerSnowflake: <ThermometerSnowflake size={32} />, GraduationCap: <GraduationCap size={32} /> };

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (!currentUser) { router.push("/login"); return; }
        setUser(currentUser);
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().unlockedLevels) setUnlockedLevels(docSnap.data().unlockedLevels);
        else await setDoc(docRef, { email: currentUser.email, unlockedLevels: [1], createdAt: serverTimestamp() }, { merge: true });
      } catch (e) { console.error(e); } finally { setLoadingAuth(false); }
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (activeLevelId && !showResult && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(p => { if (p <= 1) { clearInterval(timerId); setShowResult(true); return 0; } return p - 1; });
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [activeLevelId, showResult, timeLeft]);

  const startLevel = (id) => {
    const level = LEVELS.find(l => l.id === id);
    if (!level || !unlockedLevels.includes(id)) return;
    setActiveLevelId(id); setCurrentQIndex(0); setScore(0); setShowResult(false); setMistakes([]); setIsAnswered(false); setSelectedOption(null); setTimeLeft(level.timeLimit);
  };

  const returnToMenu = () => { setShowResult(false); setActiveLevelId(null); setIsAnswered(false); setSelectedOption(null); };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  // VISTA EXAMEN ACTIVO
  if (activeLevelId && !showResult) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    const q = level.questions[currentQIndex];
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-left">
        <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 text-left">
          <div className="w-full bg-slate-100 h-3"><div className="bg-emerald-500 h-3 transition-all duration-500" style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}></div></div>
          <div className="p-8 md:p-12 text-left">
            <div className="flex justify-between items-center mb-10 text-left"><span className="text-xs font-black text-slate-400 uppercase">Pregunta {currentQIndex + 1} de {level.questions.length}</span>{timeLeft > 0 ? <div className="bg-slate-100 px-4 py-2 rounded-full font-mono font-bold text-slate-600 flex items-center gap-2"><Clock size={16}/> {Math.floor(timeLeft/60)}:{timeLeft%60<10?'0':''}{timeLeft%60}</div> : <div className="bg-emerald-50 px-4 py-2 rounded-full font-bold text-emerald-600 text-[10px] uppercase tracking-wider">Modo Práctica</div>}</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-10 leading-tight text-left">{q.text}</h2>
            <div className="space-y-4 text-left">
              {q.options.map((opt, idx) => {
                let s = "bg-slate-50 border-slate-100 text-slate-600";
                if (isAnswered) { if (idx === q.correctIndex) s = "bg-green-50 border-green-500 text-green-700 shadow-sm"; else if (idx === selectedOption) s = "bg-red-50 border-red-500 text-red-700"; else s = "opacity-40 grayscale"; }
                return <button key={idx} disabled={isAnswered} onClick={() => { if(!isAnswered){ setSelectedOption(idx); setIsAnswered(true); if(idx===q.correctIndex)setScore(s=>s+1); else setMistakes(m=>[...m,{question:q.text,yourAnswer:opt,correctAnswer:q.options[q.correctIndex],studyGuide:q.studyGuide}]); setTimeout(()=>{ if(currentQIndex+1<level.questions.length){setCurrentQIndex(c=>c+1);setIsAnswered(false);setSelectedOption(null);}else setShowResult(true);},1200);}}} className={`w-full text-left p-5 rounded-2xl border-2 font-bold transition-all flex items-center gap-4 cursor-pointer ${s}`}><span className="w-8 h-8 rounded-lg bg-white border border-inherit flex items-center justify-center text-sm">{["A","B","C","D"][idx]}</span><span className="flex-1">{opt}</span></button>;
              })}
            </div>
          </div>
        </div>
        <button onClick={returnToMenu} className="mt-8 text-slate-400 font-bold hover:text-red-500 transition-colors cursor-pointer">Abandonar Examen</button>
      </div>
    );
  }

  // VISTA RESULTADOS
  if (showResult && activeLevelId) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    if (!level) return null;
    const passed = score >= level.passingScore;
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 text-left">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-lg w-full">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${passed ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>{passed ? <CheckCircle size={48} /> : <XCircle size={48} />}</div>
          <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight text-center">{passed ? "¡Nivel Superado!" : "Sigue Practicando"}</h2>
          <p className="text-slate-500 text-lg mb-8 font-medium text-center italic text-left">Lograste {score} de {level.questions.length} correctas</p>
          
          {mistakes.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-left mb-8 max-h-60 overflow-y-auto text-left">
                {mistakes.map((m, i) => (
                    <div key={i} className="mb-6 last:mb-0 border-b border-slate-200 pb-4 last:border-0 text-left text-sm">
                        <p className="font-bold text-slate-800 mb-2 text-left">{m.question}</p>
                        <p className="text-xs text-emerald-600 font-bold italic text-left">Correcta: {m.correctAnswer}</p>
                        <p className="text-[10px] text-slate-500 mt-2 text-left">Refuerza: {m.studyGuide}</p>
                    </div>
                ))}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <button onClick={passed ? returnToMenu : () => startLevel(activeLevelId)} className={`w-full font-black py-5 rounded-2xl shadow-lg cursor-pointer ${passed ? "bg-slate-900 text-white" : "bg-emerald-500 text-white"}`}>
              {passed ? "Continuar Ruta" : "Reintentar Nivel"}
            </button>
            <button onClick={returnToMenu} className="py-4 text-slate-400 font-bold text-sm text-center cursor-pointer text-left">Volver al Menú</button>
          </div>
        </div>
      </div>
    );
  }

  // VISTA MENÚ PRINCIPAL RUTA 2026
  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans text-left">
      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-4"><Link href="/" className="text-slate-400 hover:text-slate-900 cursor-pointer"><ChevronLeft size={28} /></Link><h1 className="text-xl font-black text-slate-900 tracking-tighter text-left">Mi Ruta 2026</h1></div>
        <div className="bg-slate-100 px-4 py-2 rounded-full text-sm font-black text-slate-700 flex items-center gap-3"><Trophy size={18} className="text-yellow-500"/> {unlockedLevels.length - 1} / 4</div>
      </div>

      <div className="p-6 max-w-xl mx-auto space-y-8 mt-6 text-left">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 text-left">
          <div className="relative">{user?.photoURL ? (<img src={user.photoURL} alt="P" className="w-16 h-16 rounded-2xl border-4 border-slate-50 shadow-md object-cover" />) : (<div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black">M</div>)}<div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-lg border-2 border-white"><ShieldCheck size={14}/></div></div>
          <div className="text-left"><p className="text-[10px] text-emerald-600 font-black uppercase text-left">Auxiliar en formación</p><h2 className="text-xl font-black text-slate-900 leading-none mb-1 text-left">{user?.displayName || "Marcelo C"}</h2><p className="text-xs text-slate-400 font-medium italic text-left tracking-tight">Año de examen: 2026</p></div>
        </div>
        
        <div className="space-y-4 text-left">
          {LEVELS.map((l) => {
            const isU = unlockedLevels.includes(l.id);
            const isP = unlockedLevels.includes(l.id + 1) || (l.id === 4 && unlockedLevels.length > 4); 
            return (
              <button key={l.id} onClick={() => startLevel(l.id)} disabled={!isU} className={`w-full group rounded-[2rem] border-2 transition-all p-6 flex items-center gap-6 text-left ${isP ? "bg-emerald-50 border-emerald-100 cursor-pointer" : isU ? "bg-white border-white shadow-xl hover:-translate-y-1 cursor-pointer" : "bg-slate-100 opacity-60 grayscale cursor-default"}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner ${isP ? "bg-emerald-500 text-white" : isU ? "bg-[#dcfce7] text-[#10b981]" : "bg-slate-300 text-slate-400"}`}>{isP ? <CheckCircle size={32} /> : isU ? (iconMap[l.icon] || l.icon) : <Lock size={28}/>}</div>
                <div className="flex-1 text-left">
                    <h3 className="font-black text-lg text-slate-800 leading-tight text-left">{l.title}</h3>
                    <div className="flex items-center gap-3 mt-0.5 text-left text-xs">
                        <p className="font-bold text-slate-400">{l.questions.length} Preguntas</p>
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${isP ? "bg-emerald-100 text-emerald-600 border-emerald-200" : isU ? "bg-slate-100 text-slate-400 border-slate-200" : "hidden"}`}>
                            {isP ? "Superado" : "Pendiente"}
                        </span>
                    </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
