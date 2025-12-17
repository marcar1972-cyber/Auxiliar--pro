"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "../data"; 
import Link from "next/link";
import { Lock, Play, CheckCircle, XCircle, ChevronLeft, ArrowRight, AlertCircle, FileText, Library, MessageCircle, HelpCircle, Clock, ShieldCheck, Trophy, Loader2, Users, ThumbsUp } from "lucide-react"; 

import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

export default function QuizPage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [savingData, setSavingData] = useState(false);

  // ESTADOS DEL JUEGO
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

  // --- NUEVO: ESTADO PARA EL MODAL DE REGLAS (WHATSAPP) ---
  const [showRulesModal, setShowRulesModal] = useState(false);

  // --- 1. EL PORTERO: PROTECCIÓN Y CARGA ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (!currentUser) {
            router.push("/login");
        } else {
            setUser(currentUser);
            try {
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
            } catch (error) {
                console.error("Error cargando progreso:", error);
            }
            setLoadingAuth(false);
        }
    });
    return () => unsubscribe();
  }, [router]);

  // --- CRONÓMETRO ---
  useEffect(() => {
    if (activeLevelId && !showResult && timeLeft > 0) {
        const timerId = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerId);
                    handleGlobalTimeOut(); 
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerId);
    }
  }, [activeLevelId, showResult]);

  const handleGlobalTimeOut = () => setShowResult(true);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --- LÓGICA JUEGO ---
  const startLevel = (levelId) => {
    if (unlockedLevels.includes(levelId)) {
      const level = LEVELS.find(l => l.id === levelId);
      setActiveLevelId(levelId);
      resetGame(level.timeLimit); 
    }
  };

  const resetGame = (initialTime = 0) => {
    setCurrentQIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setMistakes([]);
    setTimeLeft(initialTime); 
  };

  const returnToMenu = () => {
    setShowResult(false);      
    setActiveLevelId(null);    
    setScore(0);                
    setCurrentQIndex(0);        
    setIsAnswered(false); 
    setMistakes([]);      
    setShowGrandFinale(false);
  };

  const nextQuestion = () => {
    const level = getCurrentLevel();
    if (level && currentQIndex + 1 < level.questions.length) {
        setCurrentQIndex(prev => prev + 1);
        setIsAnswered(false);
        setSelectedOption(null);
    } else {
        setShowResult(true);
    }
  };

  const handleAnswer = (optionIndex, correctIndex, questionText, options, studyGuide) => {
    if (isAnswered) return; 
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === correctIndex) {
      setScore((prev) => prev + 1);
    } else {
      setMistakes(prev => [...prev, {
        id: currentQIndex,
        question: questionText,
        yourAnswer: options[optionIndex],
        correctAnswer: options[correctIndex],
        studyGuide: studyGuide 
      }]);
    }
    setTimeout(nextQuestion, 1000); 
  };

  const getCurrentLevel = () => LEVELS.find((l) => l.id === activeLevelId);

  // --- GRABADORA FIREBASE ---
  useEffect(() => {
    const saveProgressToFirebase = async () => {
        if (showResult && activeLevelId && user) {
            const level = getCurrentLevel();
            const passed = score >= level.passingScore;
            
            setSavingData(true);

            try {
                const userRef = doc(db, "users", user.uid);
                await updateDoc(userRef, {
                    quizHistory: arrayUnion({
                        levelId: activeLevelId,
                        score: score,
                        totalQuestions: level.questions.length,
                        passed: passed,
                        date: new Date().toISOString()
                    })
                });

                if (passed) {
                    const nextLevel = activeLevelId + 1;
                    if (LEVELS.find(l => l.id === nextLevel)) {
                        if (!unlockedLevels.includes(nextLevel)) {
                            setUnlockedLevels(prev => [...prev, nextLevel]);
                            await updateDoc(userRef, {
                                unlockedLevels: arrayUnion(nextLevel)
                            });
                        }
                    }
                }
            } catch (error) {
                console.error("Error guardando:", error);
            }
            setSavingData(false);
        }
    };
    saveProgressToFirebase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResult, score, activeLevelId]);

  // --- NUEVO: FUNCIÓN PARA UNIRSE AL GRUPO ---
  const handleJoinWhatsapp = () => {
      window.open("https://chat.whatsapp.com/J4VkI8mzTTs9UrzvGqBbdz", "_blank");
      setShowRulesModal(false);
  };

  // --- VISTAS ---

  if (loadingAuth) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-aux-green" size={48} /></div>;

  // 1. GRAND FINALE
  if (showGrandFinale) {
      return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center font-sans relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl max-w-md w-full text-white">
                <Trophy size={64} className="text-yellow-400 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
                <h1 className="text-3xl font
