"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../data"; 
import { Lock, CheckCircle, XCircle, ChevronLeft, Library, MessageCircle, Clock, ShieldCheck, Trophy, Loader2, Users, ThumbsUp, OctagonAlert } from "lucide-react";
import Link from "next/link";

import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

export default function QuizPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [savingData, setSavingData] = useState(false);
  const [unlockedLevels, setUnlockedLevels] = useState([1]); 
  const [activeLevelId, setActiveLevelId] = useState(null);  
  const [currentQIndex, setCurrentQIndex] = useState(0);      
  const [score, setScore] = useState(0);                      
  const [showResult, setShowResult] = useState(false);        
  const [selectedOption, setSelectedOption] = useState(null); 
  const [isAnswered, setIsAnswered] = useState(false);        
  const [mistakes, setMistakes] = useState([]); 
  const [timeLeft, setTimeLeft] = useState(0); 
  const [showGrandFinale, setShowGrandFinale] = useState(false); 
  const [showRulesModal, setShowRulesModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (!currentUser) { router.push("/login"); } else {
            setUser(currentUser);
            try {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists() && docSnap.data().unlockedLevels) {
                    setUnlockedLevels(docSnap.data().unlockedLevels);
                } else {
                    await setDoc(docRef, { email: currentUser.email, unlockedLevels: [1], createdAt: serverTimestamp() }, { merge: true });
                }
            } catch (error) { console.error(error); }
            setLoadingAuth(false);
        }
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (activeLevelId && !showResult && timeLeft > 0) {
        const timerId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) { clearInterval(timerId); setShowResult(true); return 0; }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerId);
    }
  }, [activeLevelId, showResult, timeLeft]);

  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      const level = LEVELS.find(l => l.id === levelId);
      setActiveLevelId(levelId);
      setCurrentQIndex(0); setScore(0); setShowResult(false); setTimeLeft(level.timeLimit);
    }
  };

  const handleAnswer = (optionIndex, correctIndex, questionText, options) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    if (optionIndex === correctIndex) { setScore(prev => prev + 1); }
    else { setMistakes(prev => [...prev, { question: questionText, yourAnswer: options[optionIndex], correctAnswer: options[correctIndex] }]); }
    setTimeout(() => {
      const level = LEVELS.find(l => l.id === activeLevelId);
      if (currentQIndex + 1 < level.questions.length) { setCurrentQIndex(prev => prev + 1); setIsAnswered(false); setSelectedOption(null); }
      else { setShowResult(true); }
    }, 1000);
  };

  const handleJoinWhatsapp = () => {
      window.open("https://chat.whatsapp.com/Gm30JCRLvx9HoSZ4JTipQX", "_blank");
      setShowRulesModal(false);
  };

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-emerald-500" size={48} /></div>;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white p-4 shadow-sm sticky top-0 z-10 flex items-center gap-4">
        <Link href="/" className="text-slate-400"><ChevronLeft size={24} /></Link>
        <h1 className="text-lg font-black text-slate-800">Tu Ruta</h1>
      </div>
      
      {!activeLevelId ? (
        <div className="p-6 max-w-md mx-auto space-y-4">
          {LEVELS.map((level) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            return (
              <div key={level.id} onClick={() => startLevel(level.id)} className={`p-6 rounded-2xl border-2 flex items-center gap-4 ${isUnlocked ? "bg-white border-white shadow-md" : "bg-slate-100 opacity-60"}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isUnlocked ? "bg-emerald-100 text-emerald-600" : "bg-slate-300"}`}>
                  {isUnlocked ? level.icon : <Lock size={20}/>}
                </div>
                <div><h3 className="font-black text-slate-800">{level.title}</h3></div>
              </div>
            );
          })}
          <div className="mt-8 pt-8 border-t border-slate-200">
             <button onClick={() => setShowRulesModal(true)} className="w-full bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                <MessageCircle className="text-pink-500" />
                <span className="text-sm font-bold text-slate-600">Comunidad WhatsApp</span>
             </button>
          </div>
        </div>
      ) : showResult ? (
        <div className="min-h-screen flex items-center justify-center p-6">
           <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full">
              <h2 className="text-2xl font-black mb-4">Resultado: {score} / {LEVELS.find(l=>l.id===activeLevelId).questions.length}</h2>
              <button onClick={() => setActiveLevelId(null)} className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold">Volver al Menú</button>
           </div>
        </div>
      ) : (
        <div className="p-6 max-w-lg mx-auto">
          <h2 className="text-xl font-black mb-6">{LEVELS.find(l=>l.id===activeLevelId).questions[currentQIndex].text}</h2>
          <div className="space-y-3">
            {LEVELS.find(l=>l.id===activeLevelId).questions[currentQIndex].options.map((opt, idx) => (
              <button key={idx} onClick={() => handleAnswer(idx, LEVELS.find(l=>l.id===activeLevelId).questions[currentQIndex].correctIndex, LEVELS.find(l=>l.id===activeLevelId).questions[currentQIndex].text, LEVELS.find(l=>l.id===activeLevelId).questions[currentQIndex].options)} className="w-full text-left p-4 rounded-xl border-2 font-medium bg-white hover:bg-slate-50 transition-all">
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center">
                <Users size={48} className="mx-auto text-pink-500 mb-4" />
                <h2 className="text-xl font-black mb-4">Reglas del Grupo</h2>
                <p className="text-sm text-slate-600 mb-6">Respeta a tus colegas y evita el spam.</p>
                <button onClick={handleJoinWhatsapp} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl">Acepto y Unirme</button>
                <button onClick={() => setShowRulesModal(false)} className="mt-4 text-slate-400 text-sm">Cancelar</button>
            </div>
        </div>
      )}
    </main>
  );
}
