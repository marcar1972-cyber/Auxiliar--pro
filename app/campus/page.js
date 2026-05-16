"use client";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase/config"; 
import { collection, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore"; 
import Link from "next/link";
import { BookOpen, ShieldCheck, Loader2, Lock, Trophy, Share2 } from "lucide-react"; 
import SocialContact from "../components/SocialContact";

export default function CampusPage() {
  const [modulesByGroup, setModulesByGroup] = useState({});
  const [loading, setLoading] = useState(true);
  const [userProgress, setUserProgress] = useState([]); 
  const [hasActiveSub, setHasActiveSub] = useState(false); 
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const isAdmin = user.email === "marcar1972@gmail.com";
          setIsAdminUser(isAdmin);

          const userSnap = await getDoc(doc(db, "users", user.uid));
          if (userSnap.exists()) {
            const data = userSnap.data();
            
            setUserProgress(data.approvedModules || data.completedModules || data.unlockedLevelsPro || data.unlockedLevels || []);

            // 🚀 CTO FIX: Firewall de Expiración Nivel Dios (Bulletproof Parser)
            let isSubValid = data.isPro === true; 

            const rawFields = [data.untilPro, data.untilpro, data.proUntil, data.prountil];
            
            const parseDate = (val) => {
              if (!val) return null;
              if (typeof val.toDate === 'function') return val.toDate(); // Firestore Timestamp nativo
              if (typeof val.seconds === 'number') return new Date(val.seconds * 1000); // Objeto Firestore crudo
              
              if (typeof val === 'string') {
                const s = val.trim().toLowerCase();
                
                // Formato YYYY-MM-DD o ISO "2026-05-05T04:00:00.000Z"
                if (s.match(/^\d{4}-\d{2}-\d{2}/)) {
                  const d = new Date(val);
                  if (!isNaN(d.getTime())) return d;
                }

                // Formato DD-MM-YYYY o DD/MM/YYYY (Chileno)
                const clMatch = s.match(/^(\d{2})[-/](\d{2})[-/](\d{4})/);
                if (clMatch) {
                  return new Date(parseInt(clMatch[3]), parseInt(clMatch[2]) - 1, parseInt(clMatch[1]), 23, 59, 59);
                }

                // Formato texto "09 de mayo de 2026"
                const months = { enero:0, febrero:1, marzo:2, abril:3, mayo:4, junio:5, julio:6, agosto:7, septiembre:8, octubre:9, noviembre:10, diciembre:11 };
                const textParts = s.replace(/de /g, "").split(" ");
                if (textParts.length >= 3 && months[textParts[1]] !== undefined) {
                  return new Date(parseInt(textParts[2]), months[textParts[1]], parseInt(textParts[0]), 23, 59, 59);
                }
              }
              const d = new Date(val);
              return isNaN(d.getTime()) ? null : d;
            };

            const validDates = rawFields.map(parseDate).filter(d => d !== null);

            if (validDates.length > 0) {
              const expiryDate = new Date(Math.max(...validDates));
              // Forzamos la expiración al final del día por si hay desfase de zona horaria
              expiryDate.setHours(23, 59, 59, 999);
              const currentDate = new Date();
              
              // Si la fecha límite YA PASÓ, el muro se cierra implacablemente
              if (expiryDate < currentDate) {
                isSubValid = false;
              }
            } else if (data.isPro === true) {
               // Si esPro es true pero no logramos leer ninguna fecha, por seguridad asumimos que expiró 
               // (evita cuentas "inmortales" por bugs de base de datos), a menos que seamos nosotros reparándolo.
               // isSubValid = false; -> Se puede activar si quieres ser radical, pero dejémoslo pasar si la data se corrompió.
            }

            if (isAdmin) isSubValid = true;
            
            setHasActiveSub(isSubValid);
          } else if (isAdmin) {
             setHasActiveSub(true);
          }
        }

        const q = query(collection(db, "modules"), orderBy("modId", "asc"));
        const snapshot = await getDocs(q);
        
        const grouped = {};
        snapshot.docs.forEach(doc => {
          const data = doc.data();
          const groupName = data.modId.toUpperCase().replace("-", " "); 
          
          if (!grouped[groupName]) {
            grouped[groupName] = [];
          }
          grouped[groupName].push(data);
        });
        
        setModulesByGroup(grouped);
      } catch (error) {
        console.error("Error cargando módulos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AuxiliarPro - Campus Virtual PRO',
          text: 'Conoce el temario oficial y prepárate para la certificación SEREMI de Auxiliar de Farmacia.',
          url: window.location.origin + '/campus',
        });
      } catch (error) {
        console.log('Error compartiendo', error);
      }
    } else {
      alert("La función de compartir no está soportada en tu navegador actual.");
    }
  };

  const isModuleLocked = (modName) => {
    // Si es administrador o tiene suscripción activa, acceso total sin restricciones secuenciales.
    if (isAdminUser || hasActiveSub) return false;
    
    // El Módulo 1 es gratis/accesible por defecto (aunque la UI podría bloquear su contenido si no es PRO, aquí se muestra disponible)
    const num = parseInt(modName.replace("MOD ", ""));
    if (num === 1) return false;
    
    // Si no es PRO ni Admin, todos los demás módulos están bloqueados.
    return true; 
  };

  if (loading) return <div className="flex justify-center items-center p-20 min-h-screen bg-slate-50"><Loader2 className="animate-spin text-[#003366]" size={32} /></div>;

  const isFinalExamLocked = !hasActiveSub && !isAdminUser;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-[#003366] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <span className="bg-[#28a745] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Exclusivo Pro
          </span>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight"> Campus Virtual PRO </h1>
            <button onClick={handleShare} className="text-white/80 hover:text-white transition-colors bg-white/20 p-2.5 rounded-full" title="Compartir Campus">
              <Share2 size={24} />
            </button>
          </div>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"> Accede a todo el material oficial estructurado para tu certificación SEREMI. Estudia a tu ritmo y asegura tu título como Auxiliar de Farmacia. </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid gap-6">
          {Object.keys(modulesByGroup).sort().map((group) => {
            const locked = isModuleLocked(group); 
            const descriptions = {
              "MOD 1": "Higiene, reglamentación y ética profesional.",
              "MOD 2": "Farmacología clínica y mecanismos de acción.",
              "MOD 3": "Gestión de farmacia, inventarios y atención al cliente.",
              "MOD 4": "Casos prácticos de fiscalización y rendición SEREMI."
            };
            const defaultDescription = "Material oficial completo para tu certificación SEREMI.";

            return (
              <div key={group} className={`bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden transition-all ${locked ? "opacity-60 grayscale" : "hover:border-[#28a745] hover:shadow-lg"}`}>
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg shrink-0 text-white ${locked ? "bg-slate-400" : "bg-[#003366]"}`}>
                      {locked ? <Lock size={20} /> : <BookOpen size={20} />}
                    </div>
                    <h2 className="text-xl font-black text-[#003366] leading-tight">Módulo {group.replace("MOD ", "")}: Fundamentos</h2>
                  </div>
                  {!hasActiveSub && !isAdminUser && group !== "MOD 1" && (
                    <div className="bg-slate-300 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <Lock size={14} /> Requiere PRO
                    </div>
                  )}
                  {(hasActiveSub || isAdminUser || group === "MOD 1") && !locked && (
                    <div className="bg-gradient-to-br from-[#28a745] to-[#218838] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <ShieldCheck size={14} /> Accesible
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                  <div className="flex-1 text-center md:text-left z-10">
                    <h3 className="font-bold text-slate-800 text-lg capitalize mb-1.5">{group.replace("MOD ", "Módulo ")}: Introducción Técnica</h3>
                    <p className="text-slate-500 text-sm md:text-base max-w-2xl mb-5 leading-relaxed">
                       {descriptions[group] || defaultDescription}
                    </p>
                  </div>
                  
                  {/* 🚀 CTO FIX: Destrucción del Link fantasma. Si está bloqueado, solo hay botón estático. */}
                  <div className="w-full md:w-auto">
                    {locked ? (
                      <button 
                        disabled
                        className="flex items-center justify-center gap-2 bg-slate-100 border-2 border-slate-200 text-slate-400 px-6 py-3 rounded-xl font-bold transition-all w-full md:w-auto cursor-not-allowed"
                      >
                          <Lock size={18} /> 
                          {!hasActiveSub && !isAdminUser && group !== "MOD 1" ? "Suscripción Expirada" : "Bloqueado"}
                      </button>
                    ) : (
                      <Link href={`/campus/${group.toLowerCase().replace(" ", "-")}`}>
                        <button className="flex items-center justify-center gap-2 bg-white border-2 border-[#003366] text-[#003366] px-6 py-3 rounded-xl font-bold transition-all w-full md:w-auto shadow-sm hover:bg-[#003366] hover:text-white">
                            <BookOpen size={18} /> Estudiar Módulo
                        </button>
                      </Link>
                    )}
                  </div>

                </div>
              </div>
            );
          })}

          {/* EVALUACIÓN FINAL SEREMI BLINDADA */}
          <div className={`rounded-3xl shadow-lg border border-slate-200 overflow-hidden p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-4 transition-all ${isFinalExamLocked ? 'bg-slate-800 text-white opacity-95' : 'bg-gradient-to-r from-[#003366] to-[#004a99] text-white'}`}>
              <div className="flex-1">
                  <h2 className="text-2xl font-black mb-2 flex items-center gap-3">
                    {isFinalExamLocked ? <Lock size={28} className="text-slate-400" /> : <Trophy size={28} className="text-amber-400" />}
                    Examen Final SEREMI
                  </h2>
                  <p className={isFinalExamLocked ? "text-slate-400" : "text-blue-100"}>
                    {isFinalExamLocked 
                      ? "Evaluación global restringida. Tu suscripción expiró o requiere actualización PRO para desbloquear el simulador de certificación." 
                      : "Evaluación global de todos los módulos. ¡Demuestra que estás listo para tu certificación!"}
                  </p>
              </div>
              
              <div className="w-full md:w-auto">
                {isFinalExamLocked ? (
                  <Link href="/planes">
                    <button className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold shadow-md transition-all whitespace-nowrap bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-500">
                        <Lock size={18} /> Renovar PRO
                    </button>
                  </Link>
                ) : (
                  <Link href="/quiz/pro/pro-eval-global">
                    <button className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold shadow-md transition-all whitespace-nowrap bg-[#28a745] hover:bg-[#218838] text-white">
                        Rendir Evaluación Final
                    </button>
                  </Link>
                )}
              </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <SocialContact />
          </div>

        </div>
      </div>
    </main>
  );
}