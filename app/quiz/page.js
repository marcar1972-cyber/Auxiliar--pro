"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // <--- Para redirigir
import { LEVELS } from "../data"; 
import Link from "next/link";
import { Lock, Play, CheckCircle, XCircle, ChevronLeft, RefreshCcw, ArrowRight, AlertCircle, FileText, Library, MessageCircle, HelpCircle, Clock, Award, Star, ShieldCheck, Trophy, Loader2 } from "lucide-react";

// --- IMPORTACIONES DE FIREBASE ---
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from "firebase/firestore";

export default function QuizPage() {
  const router = useRouter();

  // ESTADOS DE USUARIO Y CARGA
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true); // Para el spinner de carga inicial
  const [savingData, setSavingData] = useState(false); // Para mostrar que estamos guardando

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

  // --- 1. EL PORTERO: PROTECCIÓN Y CARGA DE DATOS ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (!currentUser) {
            // Si no hay usuario, mandar al login
            router.push("/login");
        } else {
            setUser(currentUser);
            // Si hay usuario, BUSCAR SU PROGRESO EN LA NUBE
            try {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists() && docSnap.data().unlockedLevels) {
                    // Si ya tiene progreso guardado, lo cargamos
                    setUnlockedLevels(docSnap.data().unlockedLevels);
                } else {
                    // Si es usuario nuevo en la base de datos, creamos su perfil básico
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


  // --- CRONÓMETRO GLOBAL ---
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

  // --- 2. LA GRABADORA: GUARDAR RESULTADOS EN FIREBASE ---
  useEffect(() => {
    const saveProgressToFirebase = async () => {
        if (showResult && activeLevelId && user) {
            const level = getCurrentLevel();
