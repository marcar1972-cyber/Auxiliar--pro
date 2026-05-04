"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db, auth } from "../../firebase/config"; 
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore"; 
import { ref, getDownloadURL, getStorage } from "firebase/storage"; 
import { onAuthStateChanged } from "firebase/auth"; 
import { FileText, Download, Loader2, ChevronLeft, BrainCircuit, ShieldCheck, Lock } from "lucide-react"; 
import Link from "next/link";

export default function ModuloDetalle() {
  const { modId } = useParams();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasActiveSub, setHasActiveSub] = useState(false);
  const [isModuleUnlocked, setIsModuleUnlocked] = useState(false); 

  const cleanName = (fileName, index) => {
    let name = fileName.replace(/\.pdf$/i, "").trim(); 
    let parts = name.split(" "); 
    if (parts.length < 4) return `${index + 1}. ${fileName}`; 
    let lessonNumber = parts[2]; 
    let readableName = parts.slice(3).join(" "); 
    return `${lessonNumber}. ${readableName.charAt(0).toUpperCase() + readableName.slice(1)}`;
  };

  // CTO FIX: Mapeo matemático exacto hacia los IDs de las evaluaciones (pro-eval-1, pro-eval-2...)
  const getQuizPath = (modId, fileTitle, index) => {
    const modNumber = parseInt(modId.replace(/\D/g, ""));
    
    // Busca el número al inicio del título (ej: "2. Condiciones Sanitarias" -> extrae el 2)
    const match = fileTitle.match(/^(\d+)/);
    const lessonNumber = match ? parseInt(match[1]) : (index + 1);

    let evalId = 1;
    if (modNumber === 1) evalId = lessonNumber;
    if (modNumber === 2) evalId = lessonNumber + 4; // Módulo 2 inicia en eval 5
    if (modNumber === 3) evalId = lessonNumber + 10; // Módulo 3 inicia en eval 11
    if (modNumber === 4) evalId = lessonNumber + 13; // Módulo 4 inicia en eval 14
    
    // Genera la URL exacta hacia la nueva ruta dinámica /quiz/pro/[id]
    return `/quiz/pro/pro-eval-${evalId}`; 
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        let isSubValid = false;
        let moduleUnlocked = false;
        
        if (user) {
          const isAdmin = user.email === "marcar1972@gmail.com"; // CTO FIX: Modo Dios activado
          const userSnap = await getDoc(doc(db, "users", user.uid));
          
          if (userSnap.exists()) {
            const data = userSnap.data();
            
            // CTO FIX: Validación Pro Robusta (Sincronizada con CampusPage)
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
              }
            }

            if (isAdmin) isSubValid = true; // Override suscripción para Admin

            if (isSubValid) {
              const currentModNum = parseInt(modId.replace(/\D/g, ""));
              if (currentModNum === 1 || modId === "mod-1") {
                moduleUnlocked = true; 
              } else if (currentModNum > 1) {
                // CTO FIX: Lectura ampliada para compatibilidad de base de datos
                const approvedModules = data.approvedModules || data.completedModules || data.unlockedLevels || [];
                const prevModId = `mod-${currentModNum - 1}`;
                
                if (approvedModules.includes(prevModId) || approvedModules.includes(currentModNum - 1)) {
                  moduleUnlocked = true;
                }
              } else {
                moduleUnlocked = true; 
              }
            }
            
            if (isAdmin) moduleUnlocked = true; // Override progreso para Admin
            
          } else if (isAdmin) {
            // Si por algún motivo el admin no tiene documento, igual lo dejamos pasar
            isSubValid = true;
            moduleUnlocked = true;
          }
        }
        setHasActiveSub(isSubValid);
        setIsModuleUnlocked(moduleUnlocked);

        const q = query(collection(db, "modules"), where("modId", "==", modId));
        const snapshot = await getDocs(q);
        
        // CTO FIX: Ordenamos los archivos numéricamente
        const fetchedFiles = snapshot.docs.map(doc => doc.data());
        fetchedFiles.sort((a, b) => {
          const numA = parseInt(a.title.match(/^(\d+)/)?.[1] || 0);
          const numB = parseInt(b.title.match(/^(\d+)/)?.[1] || 0);
          return numA - numB;
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
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left z-10">
            <span className="bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5 inline-block"> Verificado Pro </span>
            <h1 className="text-3xl font-black text-[#003366] tracking-tight mb-2 capitalize">Módulo {modId.replace("-", " ")}: Introducción Técnica</h1>
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
              <div key={file.id} className={`p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors ${!isModuleUnlocked ? "opacity-70 grayscale" : "hover:bg-slate-50"}`}>
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
              <p className="text-slate-500 text-sm md:text-base max-w-xl">Pone a prueba tus conocimientos antes de enfrentar el Examen SEREMI Oficial.</p>
            </div>
            
            {/* CTO FIX: Ruta actualizada para la Evaluación Final */}
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
      </div>
    </main>
  );
}