// ============================================================================
// ARCHIVO: C:\Dev\Auxiliar--pro\app\campus\[modId]\page.js
// DESCRIPCIÓN: Vista de detalle del módulo con gamificación mediante ráfaga de confetti,
//              frases motivacionales y aviso festivo al completar el grupo de lecciones.
// INTERDEPENDENCIAS DIRECTAS (RUTAS EXACTAS):
//   - Componente Social: 'C:\Dev\Auxiliar--pro\app\components\SocialContact.jsx'
//       -> Importado vía: '../../components/SocialContact'
//   - Conexión Firebase: 'C:\Dev\Auxiliar--pro\firebase\config.js'
//       -> Importado vía: '../../firebase/config'
//   - Mazos de Flashcards JSON: 'C:\Dev\Auxiliar--pro\data\flashcards\*.json'
//       -> Importados vía: '../../../data/flashcards/*.json'
//   - Paquetes externos: 'canvas-confetti' (requiere `npm install canvas-confetti`)
//   - Firma: < macz.dev />
// ============================================================================

"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { db, auth } from "../../firebase/config"; 
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore"; 
import { ref, getDownloadURL, getStorage } from "firebase/storage"; 
import { onAuthStateChanged } from "firebase/auth"; 
import { FileText, Download, Loader2, ChevronLeft, BrainCircuit, ShieldCheck, Lock, CheckCircle2, X, RotateCw, ArrowRight, ArrowLeft, Award } from "lucide-react"; 
import Link from "next/link";
import confetti from "canvas-confetti";

// CTO FIX: Corrección de ruteo relativo
import SocialContact from "../../components/SocialContact";

// Importación de los Mazos Locales Pilotados (Costo $0)
import mod1_1Cards from "../../../data/flashcards/mod-1-1.json";
import mod1_2Cards from "../../../data/flashcards/mod-1-2.json";
import mod1_3Cards from "../../../data/flashcards/mod-1-3.json";
import mod1_4Cards from "../../../data/flashcards/mod-1-4.json";
import mod2_1Cards from "../../../data/flashcards/mod-2-1.json";
import mod2_2Cards from "../../../data/flashcards/mod-2-2.json";
import mod2_3Cards from "../../../data/flashcards/mod-2-3.json";
import mod2_4Cards from "../../../data/flashcards/mod-2-4.json";
import mod2_5Cards from "../../../data/flashcards/mod-2-5.json";
import mod2_6Cards from "../../../data/flashcards/mod-2-6.json";

// Inyección Módulo 3 (Logística, Cadena de Frío y Control Legal)
import mod3_1Cards from "../../../data/flashcards/mod-3.json";
import mod3_2Cards from "../../../data/flashcards/mod-3-2.json";
import mod3_3Cards from "../../../data/flashcards/mod-3-3.json";

// Inyección Módulo 4 (Vías, Dosificación y Fraccionamiento)
import mod4_1Cards from "../../../data/flashcards/mod-4-1.json";
import mod4_2Cards from "../../../data/flashcards/mod-4-2.json";

const MOTIVATIONAL_PHRASES = [
  "¡El esfuerzo de hoy es tu tranquilidad y éxito en el examen SEREMI de mañana!",
  "¡Sigue así! Cada módulo completado te acerca un paso más a tu certificación oficial.",
  "¡Excelente trabajo! Tu dedicación en el estudio marca la diferencia en el mesón.",
  "¡Demostraste un dominio impecable! Estás construyendo un perfil profesional de alto nivel."
];

const ProfessionalProgress = ({ percentage }) => (
  <div className="w-full bg-white p-4 rounded-2xl border border-slate-200 mb-8 shadow-sm">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[10px] font-black text-[#003366] uppercase tracking-wider flex items-center gap-2">
        <CheckCircle2 size={14} className="text-[#28a745]" /> Estado de Formación Técnica
      </span>
      <span className="text-xs font-bold text-[#28a745] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
        {percentage}% Completado
      </span>
    </div>
    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200 p-[2px]">
      <div 
        className="h-full bg-gradient-to-r from-[#003366] to-[#28a745] rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(40,167,69,0.3)]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default function ModuloDetalle() {
  const { modId } = useParams();
  const searchParams = useSearchParams();
  const isCompletedParam = searchParams.get("completed");

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasActiveSub, setHasActiveSub] = useState(false);
  const [isModuleUnlocked, setIsModuleUnlocked] = useState(false); 
  const [globalProgress, setGlobalProgress] = useState(0);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [approvedEvals, setApprovedEvals] = useState([]);
  
  // 🚀 CTO FIX: Estado para gamificación con banner y frases
  const [showCelebrationBanner, setShowCelebrationBanner] = useState(false);
  const [randomPhrase, setRandomPhrase] = useState("");

  // 🚀 CTO FIX: Nuevo estado para guardar el puntaje y estado de cada evaluación
  const [evalStats, setEvalStats] = useState({});

  // Estados locales para el modal interactivo de Tarjetas Didácticas a costo $0
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMazo, setCurrentMazo] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Gamificación: Disparo de Confetti al llegar con ?completed=true
  useEffect(() => {
    if (isCompletedParam === "true") {
      setShowCelebrationBanner(true);
      const phrase = MOTIVATIONAL_PHRASES[Math.floor(Math.random() * MOTIVATIONAL_PHRASES.length)];
      setRandomPhrase(phrase);

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [isCompletedParam]);

  // CTO FIX 1: Eliminada la numeración - Solo retorna el nombre limpio
  const cleanName = (fileName, index) => {
    let name = fileName.replace(/\.pdf$/i, "").trim(); 
    name = name.replace(/^[\d\.\-\_\s]*(mod|módulo|mod\.)?[\d\.\-\_\s]*(clase)?[\d\.\-\_\s]*/i, "").trim();
    if (!name) name = "Tema";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const getEvalId = (modId, index) => {
    const modNumber = parseInt(modId.replace(/\D/g, ""));
    const lessonNumber = index + 1;

    let evalId = 1;
    if (modNumber === 1) evalId = lessonNumber;
    if (modNumber === 2) evalId = lessonNumber + 4; 
    if (modNumber === 3) evalId = lessonNumber + 10; 
    if (modNumber === 4) evalId = lessonNumber + 13; 
    
    return `pro-eval-${evalId}`;
  };

  const getQuizPath = (modId, fileTitle, index) => {
    return `/quiz/pro/${getEvalId(modId, index)}`; 
  };

  // Función para determinar si una lección interna específica está desbloqueada de forma secuencial
  const isLessonUnlocked = (index) => {
    if (isAdminUser) return true;
    if (!isModuleUnlocked) return false;
    
    const currentEvalId = getEvalId(modId, index);
    const evalNumber = parseInt(currentEvalId.replace("pro-eval-", ""));
    
    if (evalNumber === 1) return true;
    
    const previousEvalId = `pro-eval-${evalNumber - 1}`;
    return approvedEvals.includes(previousEvalId);
  };

  // Manejador del mazo estático local mapeado dinámicamente
  const handleOpenFlashcards = (index) => {
    if (!isLessonUnlocked(index)) return;
    
    if (modId === "mod-1") {
      if (index === 0) {
        setCurrentMazo(mod1_1Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 1) {
        setCurrentMazo(mod1_2Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 2) {
        setCurrentMazo(mod1_3Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 3) {
        setCurrentMazo(mod1_4Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else {
        alert("Mazo en preparación. Los pilotos actuales están activos en las clases 1 a la 4 del Módulo 1.");
      }
    } else if (modId === "mod-2") {
      if (index === 0) { 
        setCurrentMazo(mod2_1Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 1) { 
        setCurrentMazo(mod2_2Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 2) { 
        setCurrentMazo(mod2_3Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 3) { 
        setCurrentMazo(mod2_4Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 4) { 
        setCurrentMazo(mod2_5Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 5) { 
        setCurrentMazo(mod2_6Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else {
        alert("Mazo en preparación. Por ahora los pilotos activos corresponden a las clases 1 a la 6 del Módulo 2.");
      }
    } else if (modId === "mod-3") {
      if (index === 0) { 
        setCurrentMazo(mod3_1Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 1) { 
        setCurrentMazo(mod3_2Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 2) { 
        setCurrentMazo(mod3_3Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else {
        alert("Mazo en preparación. Por ahora los pilotos activos corresponden a las clases 1 a la 3 del Módulo 3.");
      }
    } else if (modId === "mod-4") {
      if (index === 0) { 
        setCurrentMazo(mod4_1Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 1) { 
        setCurrentMazo(mod4_2Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else {
        alert("Mazo en preparación. Por ahora los pilotos activos corresponden a las clases 1 y 2 del Módulo 4.");
      }
    } else {
      alert("Mazo en preparación. Por ahora los pilotos activos corresponden a los Módulos 1, 2, 3 y 4.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        let isSubValid = false;
        let moduleUnlocked = false;
        let approvedList = [];
        let stats = {};
        
        if (user) {
          const isAdmin = user.email === "marcar1972@gmail.com"; 
          setIsAdminUser(isAdmin);
          
          const userSnap = await getDoc(doc(db, "users", user.uid));
          
          if (userSnap.exists()) {
            const data = userSnap.data();
            isSubValid = data.isPro === true;
            const rawFields = [data.untilPro, data.untilpro, data.proUntil, data.prountil];
            
            const parseDate = (val) => {
              if (!val) return null;
              if (typeof val.toDate === 'function') return val.toDate(); 
              if (typeof val === 'string') {
                const dateStr = val.toLowerCase();
                const months = { enero:0, febrero:1, marzo:2, abril:3, mayo:4, junio:5, julio:6, agosto:7, septiembre:8, octubre:9, noviembre:10, diciembre:11 };
                const parts = dateStr.replace(/de /g, "").split(" ");
                if (parts.length >= 3 && months[parts[1]] !== undefined) {
                  return new Date(parseInt(parts[2]), months[parts[1]], parseInt(parts[0]), 23, 59, 59);
                }
              }
              const d = new Date(val); 
              return isNaN(d.getTime()) ? null : d;
            };

            const validDates = rawFields.map(parseDate).filter(d => d !== null);

            if (validDates.length > 0) {
              const expiryDate = new Date(Math.max(...validDates));
              if (expiryDate.getTime() > Date.now()) {
                isSubValid = true;
              } else {
                isSubValid = false;
              }
            }

            if (isAdmin) isSubValid = true; 

            approvedList = data.approvedModules || data.completedModules || data.unlockedLevelsPro || data.unlockedLevels || [];
          } else if (isAdmin) {
            isSubValid = true;
            moduleUnlocked = true;
          }

          try {
            const logsQuery = query(
              collection(db, "exam_logs"),
              where("userId", "==", user.uid)
            );
            
            const logsSnap = await getDocs(logsQuery);
            
            logsSnap.forEach(docSnap => {
              const logData = docSnap.data();
              if (logData.examId && typeof logData.examId === 'string' && logData.examId.startsWith('pro-eval-')) {
                const existing = stats[logData.examId];
                const logTime = logData.timestamp ? logData.timestamp.toDate().getTime() : (logData.date ? new Date(logData.date).getTime() : 0);
                const existingTime = existing ? (existing.timestamp ? existing.timestamp.toDate().getTime() : (existing.date ? new Date(existing.date).getTime() : 0)) : -1;
                
                if (!existing || logTime > existingTime) {
                  stats[logData.examId] = {
                    score: logData.score,
                    passed: logData.passed,
                    timestamp: logData.timestamp,
                    date: logData.date
                  };
                }
              }
            });
            
            setEvalStats(stats);
            
            const newlyApproved = Object.keys(stats).filter(id => stats[id].passed === true);
            const combinedApproved = [...new Set([...approvedList, ...newlyApproved])];
            approvedList = combinedApproved;
            
            console.log("📊 Estadísticas de evaluaciones detectadas:", stats);
          } catch (logError) {
            console.warn("No se pudieron leer exam_logs:", logError);
          }

          setApprovedEvals(approvedList);

          const totalEvaluations = 15;
          const approvedCount = approvedList.filter(evalId => 
            typeof evalId === 'string' && evalId.startsWith("pro-eval-") && !evalId.includes("global")
          ).length;
          
          const calculatedProgress = Math.round((approvedCount / totalEvaluations) * 100);
          setGlobalProgress(isAdmin ? 100 : calculatedProgress);

          if (isSubValid) moduleUnlocked = true;
          if (isAdmin) moduleUnlocked = true; 
        }
        setHasActiveSub(isSubValid);
        setIsModuleUnlocked(moduleUnlocked);

        const q = query(collection(db, "modules"), where("modId", "==", modId));
        const snapshot = await getDocs(q);
        const fetchedFiles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        fetchedFiles.sort((a, b) => {
          const numA = parseInt(a.title.match(/\d+/)?.[0] || 0);
          const numB = parseInt(b.title.match(/\d+/)?.[0] || 0);
          if (numA !== numB) return numA - numB;
          return a.title.localeCompare(b.title);
        });
        
        setFiles(fetchedFiles);
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [modId]);

  const handleDownload = async (file, index) => {
    if (!isLessonUnlocked(index)) return; 
    try {
      if (file.url) return window.open(file.url, "_blank");
      if (file.downloadURL) return window.open(file.downloadURL, "_blank");

      let path = file.storagePath || `modules/${modId}/${file.title}`;
      path = path.replace(/(\.pdf)+$/i, ".pdf");

      const storageInstance = getStorage(); 
      const gsPath = path.startsWith("gs://") ? path : `gs://auxiliar-pro.firebasestorage.app/${path}`;
      const fileRef = ref(storageInstance, gsPath);
      
      const url = await getDownloadURL(fileRef);
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error al descargar:", error);
      alert("Error: El archivo no existe en la ruta registrada.");
    }
  };

  if (loading) return <div className="flex justify-center p-20 min-h-screen bg-slate-50"><Loader2 className="animate-spin text-[#003366]" size={32} /></div>;

  const currentModNumber = modId.replace(/\D/g, "");

  const getModuleEvalRange = (modNumber) => {
    if (modNumber === 1) return [1, 4];
    if (modNumber === 2) return [5, 10];
    if (modNumber === 3) return [11, 13];
    if (modNumber === 4) return [14, 15];
    return [1, 1];
  };

  const modNumber = parseInt(currentModNumber);
  const [evalStart, evalEnd] = getModuleEvalRange(modNumber);
  
  const moduleCompleted = files.length > 0 && files.every((_, index) => {
    const evalId = getEvalId(modId, index);
    return approvedEvals.includes(evalId);
  });

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/campus" className="flex items-center text-slate-500 mb-8 hover:text-[#003366]">
          <ChevronLeft size={20} /> Volver al Campus
        </Link>
        
        {/* Banner de Celebración Gamificado */}
        {showCelebrationBanner && (
          <div className="mb-8 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-xl border border-emerald-400 relative overflow-hidden transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Award className="w-8 h-8 text-amber-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-amber-400/30 text-amber-200 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/40">
                    ¡Módulo Completado!
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white">
                  ¡FELICITACIONES! HAS COMPLETADO EL MÓDULO {currentModNumber}
                </h2>
                <p className="mt-2 text-emerald-100 font-medium text-sm leading-relaxed">
                  {randomPhrase}
                </p>
              </div>
              <button 
                onClick={() => setShowCelebrationBanner(false)}
                className="text-emerald-200 hover:text-white font-bold text-sm bg-black/10 px-3 py-1 rounded-lg"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {(hasActiveSub || isAdminUser) && <ProfessionalProgress percentage={globalProgress} />}

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block"> Verificado Pro </span>
            
            <h1 className="text-3xl font-black text-[#003366] tracking-tight mb-2 capitalize">Módulo {currentModNumber}: Formación Técnica</h1>
            <p className="text-slate-500 text-base max-w-xl">Accede al material de estudio oficial. Estudia los módulos y luego rinde la evaluación para avanzar hacia el Simulador.</p>
          </div>
          
          {!isModuleUnlocked ? (
            <div className="bg-slate-300 text-slate-600 text-sm font-bold px-6 py-3 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <Lock size={18} /> {!hasActiveSub ? "Requiere PRO" : "Módulo Bloqueado"}
            </div>
          ) : moduleCompleted ? (
            <div className="bg-gradient-to-br from-[#1e7e34] to-[#155724] text-white text-sm font-bold px-6 py-3 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(30,126,52,0.5)]">
              <CheckCircle2 size={18} /> Módulo {currentModNumber} Completado
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#28a745] to-[#218838] text-white text-sm font-bold px-6 py-3 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(40,167,69,0.4)]">
              <ShieldCheck size={18} /> Módulo {currentModNumber} Desbloqueado
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 bg-slate-50/50 p-4 md:p-6 rounded-3xl">
          {files.map((file, index) => {
            const unlocked = isLessonUnlocked(index);
            const currentEvalId = getEvalId(modId, index);
            
            const stat = evalStats[currentEvalId];
            const hasAttempted = stat !== undefined;
            const isEvalApproved = stat?.passed === true;
            const score = stat?.score || 0;

            return (
              <div key={file.id || index} className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col gap-6 transition-all hover:shadow-md ${!unlocked ? "opacity-70 grayscale pointer-events-none" : ""}`}>
                
                <div className="flex items-start gap-4 w-full">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0 text-white shadow-md ${!unlocked ? "bg-slate-400" : "bg-[#28a745]"}`}>
                    {!unlocked ? <Lock size={28} /> : <FileText size={32} />}
                  </div>
                  <div className="flex-1 min-w-0 pt-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-black text-slate-800 text-lg leading-tight capitalize">
                        {cleanName(file.title, index)}
                      </h3>
                      
                      {hasAttempted && (
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                          isEvalApproved 
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                            : "bg-red-50 text-red-700 border-red-200"
                        }`}>
                          {isEvalApproved ? <CheckCircle2 size={10} /> : <X size={10} />}
                          {isEvalApproved ? `Aprobado - ${score}%` : `Reprobado - ${score}%`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full pl-0 md:pl-20">
                  <button 
                    disabled={!unlocked}
                    onClick={() => handleDownload(file, index)} 
                    className={`px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm flex-1 sm:flex-none min-w-[160px] whitespace-nowrap text-sm ${!unlocked ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-[#003366] text-white hover:bg-[#001122]"}`}
                  >
                    {!unlocked ? <Lock size={16} /> : <Download size={16} />} 
                    {!hasActiveSub ? "Requiere PRO" : !unlocked ? "Bloqueado" : "Descargar PDF"}
                  </button>

                  <button 
                    disabled={!unlocked}
                    onClick={() => handleOpenFlashcards(index)} 
                    className={`border-2 px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm flex-1 sm:flex-none min-w-[160px] whitespace-nowrap text-sm ${!unlocked ? "bg-white border-slate-200 text-slate-400 cursor-not-allowed" : "bg-white border-[#003366] text-[#003366] hover:bg-slate-100"}`}
                  >
                    {!unlocked ? <Lock size={16} /> : <BrainCircuit size={16} />} 
                    {!hasActiveSub ? "Requiere PRO" : !unlocked ? "Bloqueado" : "Tarjetas Didácticas"}
                  </button>

                  <Link href={!unlocked ? "#" : getQuizPath(modId, file.title, index)} className="flex-1 sm:flex-none">
                    <button 
                      disabled={!unlocked}
                      className={`border-2 px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm w-full min-w-[160px] whitespace-nowrap text-sm ${
                        !unlocked 
                          ? "bg-white border-slate-300 text-slate-400 cursor-not-allowed" 
                          : !hasAttempted
                            ? "bg-white border-[#28a745] text-[#28a745] hover:bg-[#28a745] hover:text-white"
                            : isEvalApproved
                              ? "bg-[#28a745] border-[#28a745] text-white hover:bg-emerald-700"
                              : "bg-white border-red-500 text-red-600 hover:bg-red-50"
                      }`}
                    >
                      {!unlocked ? (
                        <Lock size={16} />
                      ) : !hasAttempted ? (
                        <BrainCircuit size={16} />
                      ) : isEvalApproved ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <RotateCw size={16} />
                      )} 
                      {!hasActiveSub ? "Requiere PRO" : !unlocked ? "Bloqueado" : !hasAttempted ? "Iniciar Evaluación" : isEvalApproved ? "Revisar Evaluación" : "Reintentar Evaluación"}
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {modId === "mod-4" && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#003366] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="flex-1 text-center md:text-left z-10">
              <span className={`text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block ${!isModuleUnlocked ? "bg-slate-400" : "bg-[#28a745]"}`}> 
                {!isModuleUnlocked ? "Bloqueado" : "Desbloqueado"} 
              </span>
              <h3 className="font-black text-2xl text-[#003366] leading-tight mb-2">Evaluación Final del Módulo {currentModNumber}</h3>
              <p className="text-slate-500 text-sm md:text-base max-w-xl">Pon a prueba tus conocimientos antes de enfrentar el Examen SEREMI Oficial.</p>
            </div>
            
            <Link href={!isModuleUnlocked ? "#" : `/quiz/pro/pro-eval-global`} className="w-full md:w-auto z-10">
              <button 
                disabled={!isModuleUnlocked}
                className={`flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-xl transition-all w-full md:w-auto ${!isModuleUnlocked ? "bg-slate-300 text-slate-500 cursor-not-allowed" : "bg-[#28a745] text-white hover:bg-[#218838] shadow-[0_0_15px_rgba(40,167,69,0.4)]"}`}
              >
                {!isModuleUnlocked ? <Lock size={18} /> : <BrainCircuit size={18} />} 
                {!hasActiveSub ? "Requiere PRO" : !isModuleUnlocked ? "Bloqueado" : "Rendir Evaluación Final"}
              </button>
            </Link>
          </div>
        )}

        <div className="mt-12 pt-4 border-t border-slate-200">
          <SocialContact />
        </div>
      </div>

      {isModalOpen && currentMazo.length > 0 && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div>
                <h4 className="font-black text-[#003366] text-sm tracking-tight uppercase">Tarjetas Didácticas</h4>
                <p className="text-xs text-slate-500 font-medium">Ficha {currentCardIndex + 1} de {currentMazo.length}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-slate-400 hover:text-slate-600 bg-white p-2 rounded-full border border-slate-200 transition-colors shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8 flex flex-col items-center justify-center flex-1 min-h-[300px]" style={{ perspective: "1000px" }}>
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full min-h-[220px] relative cursor-pointer select-none transition-transform duration-500"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                <div 
                  className="absolute inset-0 w-full h-full bg-white border-2 border-slate-200 hover:border-[#003366] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-400">
                    Pregunta Técnica
                  </span>
                  <p className="text-base font-black tracking-tight text-[#003366] px-2">
                    {currentMazo[currentCardIndex].question}
                  </p>
                  <div className="absolute bottom-3 text-slate-400 text-[11px] flex items-center gap-1">
                    <RotateCw size={12} /> Hacer clic para voltear
                  </div>
                </div>

                <div 
                  className="absolute inset-0 w-full h-full bg-emerald-50/10 border-2 border-[#28a745] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 text-[#28a745]">
                    Respuesta / Base Legal
                  </span>
                  <p className="text-base font-medium tracking-tight text-slate-900 px-2">
                    {currentMazo[currentCardIndex].answer}
                  </p>
                  <div className="absolute bottom-3 text-slate-400 text-[11px] flex items-center gap-1">
                    <RotateCw size={12} /> Hacer clic para volver
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
              <button 
                disabled={currentCardIndex === 0}
                onClick={() => { setCurrentCardIndex(currentCardIndex - 1); setIsFlipped(false); }}
                className={`flex items-center gap-1.5 font-bold text-xs px-4 py-2 rounded-xl border ${currentCardIndex === 0 ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed" : "bg-white border-slate-300 text-slate-600 hover:bg-slate-100"}`}
              >
                <ArrowLeft size={14} /> Anterior
              </button>

              <button 
                onClick={() => setIsFlipped(!isFlipped)}
                className="font-bold text-xs px-4 py-2 rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
              >
                Voltear
              </button>

              <button 
                disabled={currentCardIndex === currentMazo.length - 1}
                onClick={() => { setCurrentCardIndex(currentCardIndex + 1); setIsFlipped(false); }}
                className={`flex items-center gap-1.5 font-bold text-xs px-4 py-2 rounded-xl ${currentCardIndex === currentMazo.length - 1 ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed" : "bg-[#003366] text-white hover:bg-[#001122]"}`}
              >
                Siguiente <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}