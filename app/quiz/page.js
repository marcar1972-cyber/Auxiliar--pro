"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../quizData/index"; 
import Link from "next/link";
import { 
  Lock, CheckCircle, XCircle, ChevronLeft, Clock, ShieldCheck, Trophy, Loader2, Library, 
  MessageCircle, Users, ThumbsUp, OctagonAlert, GraduationCap, BookOpen, Scale, 
  ThermometerSnowflake, Facebook, Instagram 
} from "lucide-react"; 

import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

const WhatsAppIcon = ({ size = 22, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
  const [showRulesModal, setShowRulesModal] = useState(false);

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
    setActiveLevelId(id); setCurrentQIndex(0); setScore(0); setShowResult(false); setMistakes([]); setTimeLeft(level.timeLimit);
  };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center bg-white"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  if (activeLevelId && !showResult) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    const q = level.questions[currentQIndex];
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-left">
        <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="w-full bg-slate-100 h-3"><div className="bg-emerald-500 h-3 transition-all duration-500" style={{ width: `${((currentQIndex + 1) / level.questions.length) * 100}%` }}></div></div>
          <div className="p-8 md:p-12 text-left">
            <div className="flex justify-between items-center mb-10"><span className="text-xs font-black text-slate-400 uppercase">Pregunta {currentQIndex + 1} de {level.questions.length}</span>{timeLeft > 0 ? <div className="bg-slate-100 px-4 py-2 rounded-full font-mono font-bold text-slate-600 flex items-center gap-2"><Clock size={16}/> {Math.floor(timeLeft/60)}:{timeLeft%60<10?'0':''}{timeLeft%60}</div> : <div className="bg-emerald-50 px-4 py-2 rounded-full font-bold text-emerald-600 text-[10px] uppercase">Modo Práctica</div>}</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-10 leading-tight text-left">{q.text}</h2>
            <div className="space-y-4 text-left">
              {q.options.map((opt, idx) => {
                let s = "bg-slate-50 border-slate-100 text-slate-600";
                if (isAnswered) { if (idx === q.correctIndex) s = "bg-green-50 border-green-500 text-green-700"; else if (idx === selectedOption) s = "bg-red-50 border-red-500 text-red-700"; else s = "opacity-40"; }
                return <button key={idx} disabled={isAnswered} onClick={() => { if(!isAnswered){ setSelectedOption(idx); setIsAnswered(true); if(idx===q.correctIndex)setScore(s=>s+1); else setMistakes(m=>[...m,{question:q.text,yourAnswer:opt,correctAnswer:q.options[q.correctIndex],studyGuide:q.studyGuide}]); setTimeout(()=>{ if(currentQIndex+1<level.questions.length){setCurrentQIndex(c=>c+1);setIsAnswered(false);setSelectedOption(null);}else setShowResult(true);},1200);}}} className={`w-full text-left p-5 rounded-2xl border-2 font-bold transition-all flex items-center gap-4 ${s}`}><span className="w-8 h-8 rounded-lg bg-white border border-inherit flex items-center justify-center text-sm">{["A","B","C","D"][idx]}</span><span className="flex-1">{opt}</span></button>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const level = LEVELS.find(l => l.id === activeLevelId);
    const passed = score >= level.passingScore;
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6 text-left">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl text-center max-w-lg w-full">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 ${passed ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"}`}>{passed ? <CheckCircle size={48} /> : <XCircle size={48} />}</div>
          <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">Lograste {score} de {level.questions.length}</h2>
          <button onClick={() => setActiveLevelId(null)} className="w-full font-black py-5 rounded-2xl bg-slate-900 text-white shadow-lg mt-8">Continuar Ruta</button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans text-left">
      <div className="bg-white p-6 shadow-sm sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-4"><Link href="/" className="text-slate-400 hover:text-slate-900"><ChevronLeft size={28} /></Link><h1 className="text-xl font-black text-slate-900 tracking-tighter text-left">Mi Ruta 2026</h1></div>
        <div className="bg-slate-100 px-4 py-2 rounded-full text-sm font-black text-slate-700 flex items-center gap-3"><Trophy size={18} className="text-yellow-500"/> {unlockedLevels.length - 1} / 4</div>
      </div>

      <div className="p-6 max-w-xl mx-auto space-y-8 mt-6 text-left">
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5 text-left">
          <div className="relative">{user?.photoURL ? <img src={user.photoURL} alt="P" className="w-16 h-16 rounded-2xl border-4 border-slate-50 shadow-md object-cover" /> : <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black">M</div>}<div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-lg border-2 border-white"><ShieldCheck size={14}/></div></div>
          <div className="text-left"><p className="text-[10px] text-emerald-600 font-black uppercase text-left">Auxiliar en formación</p><h2 className="text-xl font-black text-slate-900 leading-none mb-1 text-left">{user?.displayName || "Marcelo C"}</h2><p className="text-xs text-slate-400 font-medium italic text-left tracking-tight">Año de examen: 2026</p></div>
        </div>
        
        <div className="space-y-4 text-left">
          {LEVELS.map((l) => {
            const isU = unlockedLevels.includes(l.id);
            const isP = unlockedLevels.includes(l.id + 1) || (l.id === 4 && unlockedLevels.length > 4); 
            return (
              <button key={l.id} onClick={() => startLevel(l.id)} disabled={!isU} className={`w-full group rounded-[2rem] border-2 transition-all p-6 flex items-center gap-6 text-left ${isP ? "bg-emerald-50 border-emerald-100" : isU ? "bg-white border-white shadow-xl hover:-translate-y-1" : "bg-slate-100 opacity-60 grayscale"}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-inner ${isP ? "bg-emerald-500 text-white" : isU ? "bg-[#dcfce7] text-[#10b981]" : "bg-slate-300 text-slate-400"}`}>{isP ? <CheckCircle size={32} /> : isU ? (iconMap[l.icon] || l.icon) : <Lock size={28}/>}</div>
                <div className="text-left"><h3 className="font-black text-lg text-slate-800 leading-tight text-left">{l.title}</h3><p className="text-xs font-bold text-slate-400 mt-0.5 text-left">{l.questions.length} Preguntas</p></div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-left"><Link href="/biblioteca" className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm hover:border-blue-400 transition-all flex items-center gap-6 group text-left"><div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Library size={28} /></div><div className="text-left"><h3 className="font-black text-lg text-slate-800 tracking-tight text-left">Biblioteca Técnica</h3><p className="text-xs text-slate-400 font-bold uppercase tracking-wider italic text-left">Descargar Material de Estudio PDF</p></div></Link></div>

        <div className="mt-8 p-10 bg-[#0f172a] rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center border border-white/5">
            <h3 className="text-2xl font-black text-white mb-3 italic tracking-tight underline text-center underline-offset-4 decoration-pink-500/50">¿Dudas con la materia?</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed px-4 italic text-center text-left">Únete a nuestra comunidad para auxiliares y técnicos en todas las redes.</p>
            <div className="flex justify-center gap-6 mb-8">
                <a href="https://www.facebook.com/profile.php?id=61584679565188" target="_blank" className="text-slate-500 hover:text-white transition-colors"><Facebook size={22} /></a>
                <a href="https://www.instagram.com/auxiliarpro/" target="_blank" className="text-slate-500 hover:text-white transition-colors"><Instagram size={22} /></a>
                <a href="https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz" target="_blank" className="text-slate-500 hover:text-white transition-colors"><WhatsAppIcon size={22} /></a>
            </div>
            <button onClick={() => setShowRulesModal(true)} className="bg-white text-slate-900 font-black py-5 px-10 rounded-3xl w-full flex items-center justify-center gap-3 hover:bg-slate-100 transition-all shadow-lg text-lg"><WhatsAppIcon size={24} className="text-pink-500"/> Entrar al WhatsApp</button>
        </div>
      </div>

      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-200">
            <div className="bg-white rounded-[3rem] shadow-2xl max-w-sm w-full overflow-hidden border border-white">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center"><Users size={56} className="mx-auto mb-4 text-emerald-400" /><h2 className="text-2xl font-black tracking-tighter text-center">Comunidad Auxiliar Pro</h2></div>
                <div className="p-8 space-y-6 text-left"><div className="flex gap-4 items-start"><div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shadow-sm"><ShieldCheck size={20} /></div><p className="text-sm text-slate-600 leading-snug text-left"><strong>Contenido Técnico:</strong> Prohibido spam. Solo info de farmacia.</p></div><button onClick={() => { window.open("https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz", "_blank"); setShowRulesModal(false); }} className="w-full bg-emerald-500 text-white font-black py-5 rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 mt-4 shadow-xl"><ThumbsUp size={20} /> Acepto e Ingresar</button><button onClick={() => setShowRulesModal(false)} className="w-full text-slate-400 text-sm font-bold py-2 text-center text-left">Volver</button></div>
            </div>
        </div>
      )}
    </main>
  );
}
