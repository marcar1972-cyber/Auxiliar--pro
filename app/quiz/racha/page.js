"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Flame, Clock, CheckCircle2, XCircle, ArrowLeft, Loader2, RefreshCcw, Trophy, CheckCircle, Lock, Star
} from "lucide-react";

// 🔥 RUTAS CORREGIDAS Y VERIFICADAS
import { auth, db } from "../../firebase/config"; 
import { updateStreak } from "../../../lib/streakService"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// 📦 IMPORTAMOS TU BANCO DE DATOS MAESTRO
import { quizData } from "../../../lib/data"; 

const ADMIN_EMAIL = "marcar1972@gmail.com";

// Función para mezclar arreglos (Fisher-Yates)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 🌪️ ASPIRADORA DE PREGUNTAS: Extrae todas las preguntas de tus módulos en data.js
const extraerPreguntas = (data) => {
  let todas = [];
  if (!data) return todas;

  if (Array.isArray(data)) {
    data.forEach(modulo => {
      if (modulo.preguntas && Array.isArray(modulo.preguntas)) {
        todas = [...todas, ...modulo.preguntas];
      }
    });
  }
  
  return todas;
};

export default function RachaQuizPage() {
  const router = useRouter();
  
  const [userUid, setUserUid] = useState(null);
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);
  const [isProUser, setIsProUser] = useState(false); // 🔥 Nuevo estado para validación
  const [alreadyPlayedToday, setAlreadyPlayedToday] = useState(false);
  const [streakCountDisplay, setStreakCountDisplay] = useState(0);

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [timeLeft, setTimeLeft] = useState(15);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // 1. INICIALIZAR SESIÓN Y VERIFICAR ACCESO PRO / RACHA
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid);
        await verificarAccesoYRacha(user);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  // 2. FUNCIÓN DE SEGURIDAD: VERIFICA PRO, EXPIRACIÓN Y ESTADO DIARIO
  const verificarAccesoYRacha = async (user) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        
        // --- VALIDACIÓN DE ACCESO PRO ---
        const isAdmin = user.email === ADMIN_EMAIL;
        let hasActivePro = data.isPro === true;

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
          if (expiryDate <= now) hasActivePro = false;
          else hasActivePro = true;
        }

        if (isAdmin) hasActivePro = true;

        setIsProUser(hasActivePro);

        // Si no es PRO, detenemos la carga de preguntas
        if (!hasActivePro) {
          setIsCheckingStatus(false);
          return;
        }

        // --- VALIDACIÓN DE ACTIVIDAD DIARIA ---
        setStreakCountDisplay(data.streakCount || 0);

        if (data.lastStreakUpdate) {
          const fechaUltimaActividad = data.lastStreakUpdate.toDate();
          const ahora = new Date();
          
          const esMismoDia = 
            fechaUltimaActividad.getFullYear() === ahora.getFullYear() &&
            fechaUltimaActividad.getMonth() === ahora.getMonth() &&
            fechaUltimaActividad.getDate() === ahora.getDate();

          if (esMismoDia) {
            setAlreadyPlayedToday(true);
            setIsCheckingStatus(false);
            return;
          }
        }
      }
      
      iniciarJuego();
    } catch (error) {
      console.error("Error en verificación:", error);
      router.push('/quiz');
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const iniciarJuego = () => {
    const bancoCompleto = extraerPreguntas(quizData);
    
    if (bancoCompleto.length === 0) {
      console.error("No se pudieron cargar las preguntas.");
      return;
    }

    const mezcladas = shuffleArray(bancoCompleto).slice(0, 5);
    setQuestions(mezcladas);
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(15);
    setIsGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    if (isGameOver || selectedAnswer !== null || questions.length === 0 || alreadyPlayedToday || !isProUser) return;

    if (timeLeft === 0) {
      handleAnswer(-1); 
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isGameOver, selectedAnswer, questions, alreadyPlayedToday, isProUser]);

  const handleAnswer = (indexSeleccionado) => {
    if (selectedAnswer !== null) return;

    const preguntaActual = questions[currentIndex];
    const fueCorrecta = indexSeleccionado === preguntaActual.correcta;
    
    setSelectedAnswer(indexSeleccionado);
    setIsCorrect(fueCorrecta);

    if (fueCorrecta) setScore(prev => prev + 1);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setTimeLeft(15);
      } else {
        finalizarJuego(fueCorrecta ? score + 1 : score);
      }
    }, 1500);
  };

  const finalizarJuego = async (puntajeFinal) => {
    setIsGameOver(true);
    
    if (puntajeFinal >= 3 && userUid) {
      setIsSaving(true);
      try {
        const nuevaRacha = await updateStreak(userUid);
        setStreakCountDisplay(nuevaRacha);
      } catch (error) {
        console.error("Error al guardar racha:", error);
      } finally {
        setIsSaving(false);
      }
    }
  };

  // PANTALLA DE CARGA INICIAL
  if (isCheckingStatus) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="animate-spin text-[#003366]" size={48} />
      </div>
    );
  }

  // 🔥 PANTALLA DE BLOQUEO: DEBES SER PRO
  if (!isProUser) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-xl text-center border border-slate-100 animate-in zoom-in duration-500">
          <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-amber-50 shadow-inner">
             <Lock size={48} className="text-amber-600" />
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2 text-[#003366]">Acceso Restringido</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            El <strong>Desafío de Racha Diaria</strong> es una función exclusiva para miembros de <strong>AuxiliarPro Campus</strong>. Actualiza tu cuenta para encender tu fuego.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => router.push('/planes')} 
              className="w-full bg-amber-500 text-white font-black py-4 rounded-xl hover:bg-amber-600 transition-all shadow-md flex justify-center items-center gap-2"
            >
              <Star size={20} fill="currentColor" /> SER PRO AHORA
            </button>
            <button 
              onClick={() => router.push('/quiz')} 
              className="w-full bg-slate-100 text-slate-500 font-bold py-4 rounded-xl hover:bg-slate-200"
            >
              Volver al Lobby
            </button>
          </div>
        </div>
      </main>
    );
  }

  // PANTALLA DE "YA JUGASTE HOY"
  if (alreadyPlayedToday) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-xl text-center relative border border-slate-100 animate-in zoom-in duration-500">
          <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-inner bg-orange-100">
             <Flame size={56} className="text-orange-500 fill-orange-500 animate-pulse" />
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-2 text-[#003366]">¡Fuego Encendido!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Ya completaste tu Desafío Diario. Tu racha es de <strong>{streakCountDisplay} días</strong>. ¡Vuelve mañana!
          </p>
          <button onClick={() => router.push('/quiz')} className="w-full bg-[#003366] text-white font-black py-4 rounded-xl hover:bg-[#002244] shadow-md flex justify-center items-center gap-2">
            <ArrowLeft size={20} /> VOLVER AL LOBBY
          </button>
        </div>
      </main>
    );
  }

  // PANTALLA FINAL DEL JUEGO
  if (isGameOver) {
    const isSuccess = score >= 3;
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-xl text-center border border-slate-100 animate-in zoom-in duration-500">
          <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-inner ${isSuccess ? 'bg-orange-100' : 'bg-slate-100'}`}>
            {isSuccess ? <Flame size={56} className="text-orange-500 fill-orange-500 animate-pulse" /> : <XCircle size={56} className="text-slate-400" />}
          </div>
          <h2 className={`text-3xl font-black tracking-tight mb-2 ${isSuccess ? 'text-[#003366]' : 'text-slate-600'}`}>
            {isSuccess ? "¡Misión Cumplida!" : "Casi lo logras"}
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            {isSuccess ? `Has encendido el fuego. Tu racha aumentó a ${streakCountDisplay} días.` : "No alcanzaste el mínimo de 3 aciertos para encender tu fuego."}
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8 w-full text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tu Puntaje</p>
            <p className="text-4xl font-black text-[#003366]">{score} <span className="text-xl text-slate-300">/ 5</span></p>
          </div>
          {isSaving ? (
             <div className="flex justify-center items-center gap-2 text-orange-500 font-bold py-4">
               <Loader2 className="animate-spin" /> Registrando racha...
             </div>
          ) : (
            <div className="flex flex-col gap-3">
              {isSuccess ? (
                <button onClick={() => router.push('/quiz')} className="w-full bg-[#003366] text-white font-black py-4 rounded-xl hover:bg-[#002244] shadow-md flex justify-center items-center gap-2">
                  <Trophy size={20} /> VOLVER AL LOBBY
                </button>
              ) : (
                <>
                  <button onClick={iniciarJuego} className="w-full bg-orange-500 text-white font-black py-4 rounded-xl hover:bg-orange-600 shadow-md flex justify-center items-center gap-2">
                    <RefreshCcw size={20} /> REINTENTAR AHORA
                  </button>
                  <button onClick={() => router.push('/quiz')} className="w-full bg-slate-100 text-slate-500 font-bold py-4 rounded-xl hover:bg-slate-200">Volver al Lobby</button>
                </>
              )}
            </div>
          )}
        </div>
      </main>
    );
  }

  const preguntaActual = questions[currentIndex];
  const isTimeCritical = timeLeft <= 5;

  return (
    <main className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-3xl mx-auto p-4 flex items-center justify-between w-full">
          <button onClick={() => router.push('/quiz')} className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-bold">
            <ArrowLeft size={20} /> Salir
          </button>
          <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
            <Flame size={16} className="text-orange-500 fill-orange-500" />
            <span className="text-sm font-black text-orange-700">DESAFÍO DIARIO</span>
          </div>
          <div className="text-sm font-black text-slate-300">{currentIndex + 1}/5</div>
        </div>
      </nav>
      <div className="w-full h-1.5 bg-slate-200">
        <div className="h-full bg-[#28a745] transition-all duration-300" style={{ width: `${((currentIndex) / 5) * 100}%` }}></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full min-h-[70vh]">
        <div className="flex justify-center mb-6">
           <div className={`flex items-center gap-2 text-4xl font-black tabular-nums ${isTimeCritical ? 'text-red-500 animate-pulse' : 'text-[#003366]'}`}>
             <Clock size={32} />00:{timeLeft.toString().padStart(2, '0')}
           </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight mb-10 text-center px-4">{preguntaActual?.pregunta}</h2>
        <div className="space-y-4 w-full mb-8">
          {preguntaActual?.opciones.map((opcion, index) => {
            let btnCls = "w-full text-left p-5 rounded-2xl border-2 transition-all font-bold text-lg ";
            if (selectedAnswer === null) btnCls += "bg-white border-slate-200 text-slate-600 hover:border-[#003366] hover:bg-slate-50";
            else {
              if (index === preguntaActual.correcta) btnCls += "bg-emerald-50 border-emerald-500 text-emerald-700";
              else if (index === selectedAnswer && !isCorrect) btnCls += "bg-red-50 border-red-500 text-red-700";
              else btnCls += "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
            }
            return (
              <button key={index} onClick={() => handleAnswer(index)} disabled={selectedAnswer !== null} className={btnCls}>
                <div className="flex justify-between items-center">
                  <span>{opcion}</span>
                  {selectedAnswer !== null && index === preguntaActual.correcta && <CheckCircle2 className="text-emerald-500" size={24} />}
                  {selectedAnswer === index && !isCorrect && <XCircle className="text-red-500" size={24} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}