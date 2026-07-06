"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db, auth } from "../../firebase/config"; 
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore"; 
import { ref, getDownloadURL, getStorage } from "firebase/storage"; 
import { onAuthStateChanged } from "firebase/auth"; 
import { FileText, Download, Loader2, ChevronLeft, BrainCircuit, ShieldCheck, Lock, CheckCircle2, X, RotateCw, ArrowRight, ArrowLeft } from "lucide-react"; 
import Link from "next/link";

// CTO FIX: Corrección de ruteo relativo (subir solo dos niveles desde [modId] -> campus -> app)
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
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasActiveSub, setHasActiveSub] = useState(false);
  const [isModuleUnlocked, setIsModuleUnlocked] = useState(false); 
  const [globalProgress, setGlobalProgress] = useState(0);
  const [isAdminUser, setIsAdminUser] = useState(false);

  // Estados locales para el modal interactivo de Tarjetas Didácticas a costo $0
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMazo, setCurrentMazo] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // CNC FIX: Numeración estricta y limpieza de strings para garantizar el orden 1 al N
  const cleanName = (fileName, index) => {
    let name = fileName.replace(/\.pdf$/i, "").trim(); 
    name = name.replace(/^(\d+[\.\-\_]*\s*|MOD\s*\d+\s*CLASE\s*\d+\s*)/i, "").trim();
    return `${index + 1}. ${name.charAt(0).toUpperCase() + name.slice(1)}`;
  };

  const getQuizPath = (modId, fileTitle, index) => {
    const modNumber = parseInt(modId.replace(/\D/g, ""));
    const lessonNumber = index + 1;

    let evalId = 1;
    if (modNumber === 1) evalId = lessonNumber;
    if (modNumber === 2) evalId = lessonNumber + 4; 
    if (modNumber === 3) evalId = lessonNumber + 10; 
    if (modNumber === 4) evalId = lessonNumber + 13; 
    
    return `/quiz/pro/pro-eval-${evalId}`; 
  };

  // Manejador del mazo estático local mapeado dinámicamente
  const handleOpenFlashcards = (index) => {
    if (!isModuleUnlocked) return;
    
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
      if (index === 0) { // 2.1 Fundamentos de Farmacotecnia
        setCurrentMazo(mod2_1Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 1) { // 2.2 Sólidos
        setCurrentMazo(mod2_2Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 2) { // 2.3 Líquidos
        setCurrentMazo(mod2_3Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 3) { // 2.4 Semisólidos
        setCurrentMazo(mod2_4Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 4) { // 2.5 Inhalatorias y Estériles
        setCurrentMazo(mod2_5Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 5) { // 2.6 Control de Calidad
        setCurrentMazo(mod2_6Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else {
        alert("Mazo en preparación. Por ahora los pilotos activos corresponden a las clases 1 a la 6 del Módulo 2.");
      }
    } else if (modId === "mod-3") {
      if (index === 0) { // 3.1 Almacenamiento y Logística
        setCurrentMazo(mod3_1Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 1) { // 3.2 Cadena de Frío
        setCurrentMazo(mod3_2Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 2) { // 3.3 Control Legal
        setCurrentMazo(mod3_3Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else {
        alert("Mazo en preparación. Por ahora los pilotos activos corresponden a las clases 1 a la 3 del Módulo 3.");
      }
    } else if (modId === "mod-4") {
      if (index === 0) { // 4.1 Vías de Administración Detalladas
        setCurrentMazo(mod4_1Cards);
        setCurrentCardIndex(0);
        setIsFlipped(false);
        setIsModalOpen(true);
      } else if (index === 1) { // 4.2 Posología, Cálculo de Dosis y Fraccionamiento
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

            const approved = data.approvedModules || data.completedModules || data.unlockedLevelsPro || data.unlockedLevels || [];
            const count = [1, 2, 3, 4].filter(num => approved.includes(num) || approved.includes(`mod-${num}`)).length;
            setGlobalProgress(isAdmin ? 100 : (count / 4) * 100);

            if (isSubValid) moduleUnlocked = true;
            if (isAdmin) moduleUnlocked = true; 
            
          } else if (isAdmin) {
            isSubValid = true;
            moduleUnlocked = true;
          }
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

  const handleDownload = async (file) => {
    if (!isModuleUnlocked) return; 
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

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/campus" className="flex items-center text-slate-500 mb-8 hover:text-[#003366]">
          <ChevronLeft size={20} /> Volver al Campus
        </Link>
        
        {(hasActiveSub || isAdminUser) && <ProfessionalProgress percentage={globalProgress} />}

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block"> Verificado Pro </span>
            <h1 className="text-3xl font-black text-[#003366] tracking-tight mb-2 capitalize">Módulo {modId.replace("-", " ")}: Formación Técnica</h1>
            <p className="text-slate-500 text-base max-w-xl">Accede al material de estudio oficial. Estudia los módulos y luego rinde la evaluación para avanzar hacia el Simulador.</p>
          </div>
          
          {!isModuleUnlocked ? (
            <div className="bg-slate-300 text-slate-600 text-sm font-bold px-6 py-3 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <Lock size={18} /> {!hasActiveSub ? "Requiere PRO" : "Módulo Bloqueado"}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#28a745] to-[#218838] text-white text-sm font-bold px-6 py-3 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(40,167,69,0.4)]">
              <ShieldCheck size={18} /> Módulo {modId.replace(/\D/g, "")} Desbloqueado
            </div>
          )}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 divide-y divide-slate-100 overflow-hidden">
          {files.map((file, index) => {
            return (
              <div key={file.id || index} className={`p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors ${!isModuleUnlocked ? "opacity-70 grayscale pointer-events-none" : "hover:bg-slate-50"}`}>
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl shrink-0 text-white shadow-md ${!isModuleUnlocked ? "bg-slate-400" : "bg-[#28a745]"}`}>
                    {!isModuleUnlocked ? <Lock size={28} /> : <FileText size={32} />}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-800 text-lg leading-tight capitalize mb-1">{cleanName(file.title, index)}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <ShieldCheck size={14} className={!isModuleUnlocked ? "text-slate-400" : "text-[#28a745]"} /> 
                      <span>Material Oficial | Manual de Estudio</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  <button 
                    disabled={!isModuleUnlocked}
                    onClick={() => handleDownload(file)} 
                    className={`px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm w-full sm:w-auto text-sm ${!isModuleUnlocked ? "bg-slate-200 text-slate-500 cursor-not-allowed" : "bg-[#003366] text-white hover:bg-[#001122]"}`}
                  >
                    {!isModuleUnlocked ? <Lock size={16} /> : <Download size={16} />} 
                    {!hasActiveSub ? "Requiere PRO" : !isModuleUnlocked ? "Bloqueado" : "Descargar PDF"}
                  </button>

                  <button 
                    disabled={!isModuleUnlocked}
                    onClick={() => handleOpenFlashcards(index)} 
                    className={`border-2 px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm w-full sm:w-auto text-sm ${!isModuleUnlocked ? "bg-white border-slate-200 text-slate-400 cursor-not-allowed" : "bg-white border-[#003366] text-[#003366] hover:bg-slate-100"}`}
                  >
                    {!isModuleUnlocked ? <Lock size={16} /> : <BrainCircuit size={16} />} 
                    {!hasActiveSub ? "Requiere PRO" : !isModuleUnlocked ? "Bloqueado" : "Tarjetas Didácticas"}
                  </button>

                  <Link href={!isModuleUnlocked ? "#" : getQuizPath(modId, file.title, index)} className="w-full sm:w-auto">
                    <button 
                      disabled={!isModuleUnlocked}
                      className={`border-2 px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm w-full text-sm ${!isModuleUnlocked ? "bg-white border-slate-300 text-slate-400 cursor-not-allowed" : "bg-white border-[#28a745] text-[#28a745] hover:bg-[#28a745] hover:text-white"}`}
                    >
                      {!isModuleUnlocked ? <Lock size={16} /> : <BrainCircuit size={16} />} 
                      {!hasActiveSub ? "Requiere PRO" : !isModuleUnlocked ? "Bloqueado" : "Evaluación"}
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
              <h3 className="font-black text-2xl text-[#003366] leading-tight mb-2">Evaluación Final del Módulo {modId.replace("-", " ")}</h3>
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

        {/* CTO INJECTION: Bloque de contacto externo al final para opiniones y feedback */}
        <div className="mt-12 pt-4 border-t border-slate-200">
          <SocialContact />
        </div>
      </div>

      {/* COMPONENTE INTERFÁCICO: MODAL DE TARJETAS DIDÁCTICAS CORREGIDO PARA CHROME */}
      {isModalOpen && currentMazo.length > 0 && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
            
            {/* Header */}
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

            {/* Renderizado de la Tarjeta Interactiva con Corrección Total de Espejo para Webkit/Chrome */}
            <div className="p-6 md:p-8 flex flex-col items-center justify-center flex-1 min-h-[300px]" style={{ perspective: "1000px" }}>
              <div 
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full min-h-[220px] relative cursor-pointer select-none transition-transform duration-500"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                
                {/* CARA FRONTAL (Pregunta) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white border-2 border-slate-200 hover:border-[#003366] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden" 
                  }}
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

                {/* CARA POSTERIOR (Respuesta) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-emerald-50/10 border-2 border-[#28a745] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
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

            {/* Controles de Navegación del Mazo */}
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