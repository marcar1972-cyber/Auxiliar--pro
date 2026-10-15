// ============================================================================
// ARCHIVO: app/campus/page.jsx
// DESCRIPCIÓN: Campus Virtual PRO con Encuesta de Satisfacción obligatoria 
//               para la descarga del Certificado de Participación.
// ============================================================================

"use client";

import { useEffect, useState } from "react";
import { db, auth } from "../firebase/config"; 
import { collection, getDocs, query, orderBy, doc, getDoc, setDoc, addDoc, serverTimestamp } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, ShieldCheck, Loader2, Lock, Trophy, Share2, CheckCircle, Award, ArrowRight, Stethoscope, ChevronRight, Flame, Clock, RotateCcw, LogIn, PlayCircle, Star, Send, X, ClipboardCheck } from "lucide-react"; 
import SocialContact from "../components/SocialContact";
import jsPDF from "jspdf";
import QRCode from "qrcode";

export default function CampusPage() {
  const router = useRouter();
  const [modulesByGroup, setModulesByGroup] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userProgress, setUserProgress] = useState([]); 
  const [hasActiveSub, setHasActiveSub] = useState(false); 
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(null);
  const [hasCertificate, setHasCertificate] = useState(false);
  const [planActual, setPlanActual] = useState(null);

  // ESTADOS DE LA ENCUESTA DE SATISFACCIÓN
  const [hasCompletedSurvey, setHasCompletedSurvey] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [submittingSurvey, setSubmittingSurvey] = useState(false);

  // Formulario de la Encuesta
  const [ratingContent, setRatingContent] = useState(5);
  const [ratingPlatform, setRatingPlatform] = useState(5);
  const [ratingExams, setRatingExams] = useState(5);
  const [npsScore, setNpsScore] = useState(10);
  const [surveyComment, setSurveyComment] = useState("");

  const evaluationSequence = [
    "pro-eval-1", "pro-eval-2", "pro-eval-3", "pro-eval-4", "pro-eval-5",
    "pro-eval-6", "pro-eval-7", "pro-eval-8", "pro-eval-9", "pro-eval-10",
    "pro-eval-11", "pro-eval-12", "pro-eval-13", "pro-eval-14", "pro-eval-15",
    "pro-eval-global",
    "pro-eval-global-01"
  ];

  const getGroupEvalIds = (groupName, groupItems = null) => {
    const ids = [];
    if (groupItems && groupItems.length > 0) {
      groupItems.forEach(item => {
        if (item.evalId) ids.push(item.evalId);
        else if (item.id && item.id.startsWith("pro-eval-")) ids.push(item.id);
        else if (item.modId) {
          const num = item.modId.replace(/\D/g, "");
          if (num) ids.push(`pro-eval-${num}`);
        }
      });
    }
    if (ids.length === 0 && groupName) {
      const groupNum = parseInt(groupName.replace(/\D/g, ""), 10);
      if (!isNaN(groupNum)) {
        if (groupNum === 1) return ["pro-eval-1", "pro-eval-2", "pro-eval-3", "pro-eval-4"];
        if (groupNum === 2) return ["pro-eval-5", "pro-eval-6", "pro-eval-7", "pro-eval-8"];
        if (groupNum === 3) return ["pro-eval-9", "pro-eval-10", "pro-eval-11", "pro-eval-12"];
        if (groupNum === 4) return ["pro-eval-13", "pro-eval-14", "pro-eval-15"];
      }
    }
    return Array.from(new Set(ids));
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const isAdmin = user.email?.toLowerCase() === "marcar1972@gmail.com";
        setIsAdminUser(isAdmin);

        try {
          const userSnap = await getDoc(doc(db, "users", user.uid));

          if (userSnap.exists()) {
            const data = userSnap.data();
            const progress =
              data.approvedModules ||
              data.completedModules ||
              data.unlockedLevelsPro ||
              data.unlockedLevels ||
              [];

            setUserProgress(progress);
            setHasCompletedSurvey(data.hasCompletedSurvey === true);

            let currentPlan = String(data.planActual || "").trim().toLowerCase();

            if (!currentPlan) {
              const dias = data.paymentDetails?.dias;
              const amount = data.paymentDetails?.amount;
              if (dias === 15 || amount === 3990) {
                currentPlan = "sprint";
              } else if (dias === 365 || amount === 49900) {
                currentPlan = "anual";
              } else if (dias === 30 || amount === 5990 || data.isPro) {
                currentPlan = "mensual";
              }
            }

            setPlanActual(currentPlan || null);

            let isSubValid = data.isPro === true;

            const rawFields = [
              data.untilPro,
              data.untilpro,
              data.proUntil,
              data.prountil
            ];

            const parseDate = (val) => {
              if (!val) return null;
              if (typeof val.toDate === "function") return val.toDate();
              if (typeof val.seconds === "number") return new Date(val.seconds * 1000);
              if (typeof val === "string") {
                const s = val.trim().toLowerCase();
                if (s.match(/^\d{4}-\d{2}-\d{2}/)) {
                  const d = new Date(val);
                  if (!isNaN(d.getTime())) return d;
                }
                const clMatch = s.match(/^(\d{2})[-/](\d{2})[-/](\d{4})/);
                if (clMatch) {
                  return new Date(
                    parseInt(clMatch[3]),
                    parseInt(clMatch[2]) - 1,
                    parseInt(clMatch[1]),
                    23, 59, 59
                  );
                }
              }
              const d = new Date(val);
              return isNaN(d.getTime()) ? null : d;
            };

            const validDates = rawFields.map(parseDate).filter(d => d !== null);

            if (validDates.length > 0) {
              const expiryDate = new Date(Math.max(...validDates));
              expiryDate.setHours(23, 59, 59, 999);

              if (expiryDate < new Date()) {
                isSubValid = false;
              }

              const now = new Date();
              const diffTime = expiryDate - now;
              const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              setDaysRemaining(diffDays > 0 ? diffDays : 0);
            }

            if (isAdmin) isSubValid = true;

            setHasActiveSub(isSubValid);
          } else if (isAdmin) {
            setHasActiveSub(true);
          }
        } catch (err) {
          console.error("Error obteniendo datos del usuario:", err);
        }
      } else {
        setIsAdminUser(false);
        setUserProgress([]);
        setHasActiveSub(false);
        setDaysRemaining(null);
        setPlanActual(null);
        setHasCompletedSurvey(false);
      }
    });

    const fetchModules = async () => {
      try {
        const q = query(collection(db, "modules"), orderBy("modId", "asc"));
        const snapshot = await getDocs(q);

        const grouped = {};

        snapshot.docs.forEach(docSnap => {
          const data = docSnap.data();
          const groupName = data.modId ? data.modId.toUpperCase().replace("-", " ") : "MOD 1";

          if (!grouped[groupName]) {
            grouped[groupName] = [];
          }

          const cleanTitle = (data.title || data.name || "")
            .replace(/^(\d+\.)?\s*(mod|módulo|mod\.)\s*\d*\s*/i, "$1 ")
            .trim();

          grouped[groupName].push({
            id: docSnap.id,
            ...data,
            displayTitle: cleanTitle || data.title || data.name
          });
        });

        setModulesByGroup(grouped);
      } catch (error) {
        console.error("❌ Error cargando módulos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const exam2Id = "pro-eval-global-01";
    setHasCertificate(userProgress.includes(exam2Id));
  }, [userProgress]);

  const groupsToRender = Object.keys(modulesByGroup).length > 0 
    ? Object.keys(modulesByGroup).sort() 
    : ["MOD 1", "MOD 2", "MOD 3", "MOD 4"];

  const isModuleComplete = (groupName) => {
    const items = modulesByGroup[groupName] || [];
    const evalIds = getGroupEvalIds(groupName, items);
    if (evalIds.length === 0) return false;
    return evalIds.every(id => userProgress.includes(id));
  };

  const totalModules = groupsToRender.length;
  const completedModules = groupsToRender.filter(g => isModuleComplete(g)).length;

  const progressPercent =
    totalModules > 0
      ? Math.round((completedModules / totalModules) * 100)
      : 0;

  const isPracticeMode = hasCertificate || progressPercent === 100;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "AuxiliarPro - Campus Virtual PRO",
          text: "Conoce el temario oficial y prepárate para la certificación SEREMI de Auxiliar de Farmacia.",
          url: window.location.origin + "/campus"
        });
      } catch (error) {
        console.log("Error compartiendo", error);
      }
    } else {
      alert("La función de compartir no está soportada en tu navegador actual.");
    }
  };

  const isItemUnlocked = (evalId) => {
    if (isAdminUser) return true;
    if (!hasActiveSub) return false;

    if (evalId && userProgress.includes(evalId)) {
      return true;
    }

    const currentIndex = evaluationSequence.indexOf(evalId);
    if (currentIndex === -1) return false;
    if (currentIndex === 0) return true;

    const prevEvalId = evaluationSequence[currentIndex - 1];
    return userProgress.includes(prevEvalId);
  };

  const exam1Id = "pro-eval-global";
  const exam2Id = "pro-eval-global-01";

  const isSprintPlan = !isAdminUser && planActual === "sprint";
  const isExam1Locked = !isItemUnlocked(exam1Id);
  const isExam2Locked = isSprintPlan || !isItemUnlocked(exam2Id);
  const hasPassedExam2 = userProgress.includes(exam2Id);
  const isCertificateLocked = isSprintPlan || (!hasPassedExam2 && !isAdminUser);

  const handleModuleClick = (group) => {
    if (!currentUser) {
      router.push("/login");
    } else if (!hasActiveSub && !isAdminUser) {
      router.push("/#planes");
    } else {
      router.push(`/campus/${group.toLowerCase().replace(" ", "-")}`);
    }
  };

  // ENVIAR ENCUESTA DE SATISFACCIÓN Y LIBERAR CERTIFICADO
  const handleSubmitSurvey = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      setSubmittingSurvey(true);

      // 1. Guardar evaluación en la colección "course_evaluations"
      await addDoc(collection(db, "course_evaluations"), {
        userId: currentUser.uid,
        userEmail: currentUser.email,
        ratingContent,
        ratingPlatform,
        ratingExams,
        npsScore,
        comment: surveyComment.trim(),
        createdAt: serverTimestamp()
      });

      // 2. Marcar al usuario como que ya completó la encuesta
      await setDoc(doc(db, "users", currentUser.uid), {
        hasCompletedSurvey: true,
        surveyCompletedAt: serverTimestamp()
      }, { merge: true });

      setHasCompletedSurvey(true);
      setShowSurveyModal(false);
    } catch (err) {
      console.error("Error al guardar la encuesta:", err);
      alert("Hubo un error al guardar tu encuesta. Inténtalo nuevamente.");
    } finally {
      setSubmittingSurvey(false);
    }
  };

  const handleGenerateCertificate = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        router.push("/login");
        return;
      }

      const userSnap = await getDoc(doc(db, "users", user.uid));
      if (!userSnap.exists()) {
        alert("No se encontraron datos del usuario.");
        return;
      }

      const userData = userSnap.data();
      const userPlanCheck = String(userData.planActual || "").trim().toLowerCase();
      const isSprintUser = userPlanCheck === "sprint" || userData.paymentDetails?.dias === 15;

      if (isSprintUser && user.email?.toLowerCase() !== "marcar1972@gmail.com") {
        alert("El Certificado de Participación requiere una suscripción Plan Mensual PRO (o Plan Anual vigente).");
        return;
      }

      const hasGlobal2 =
        userData.approvedModules?.includes(exam2Id) ||
        userData.completedModules?.includes(exam2Id) ||
        userData.unlockedLevelsPro?.includes(exam2Id) ||
        userData.unlockedLevels?.includes(exam2Id);

      if (!hasGlobal2 && user.email?.toLowerCase() !== "marcar1972@gmail.com") {
        alert("Debes aprobar el segundo Examen Global TIPO SEREMI antes de descargar el certificado.");
        return;
      }

      const studentName = (userData.nombreCertificado || user.displayName || "Alumno").toUpperCase();
      const rawScore = userData?.globalScores?.average || "92.5%";
      const averageScore = rawScore.toString().includes("%") ? rawScore : `${rawScore}%`;
      const completionDate = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });
      const certificateId = `CERT-${user.uid.slice(0, 6).toUpperCase()}-${Date.now().toString().slice(-4)}`;
      const verificationUrl = `https://auxiliarpro.cl/verificar?id=${certificateId}`;

      await setDoc(doc(db, "certificates", certificateId), {
        certificateId,
        studentName,
        courseName: "Curso - Auxiliar de Farmacia",
        completionDate,
        averageScore,
        issuedBy: "AuxiliarPro SpA",
        verificationUrl,
        userId: user.uid,
        userEmail: user.email,
        createdAt: serverTimestamp(),
        verified: true,
        status: "active"
      });

      const pdfDoc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

      try {
        const templateResponse = await fetch("/certificado_auxiliarpro_template_2026_1.png");
        if (!templateResponse.ok) throw new Error("No se pudo cargar la plantilla.");
        const templateBlob = await templateResponse.blob();

        const reader = new FileReader();
        reader.readAsDataURL(templateBlob);

        await new Promise((resolve, reject) => {
          reader.onloadend = () => {
            try {
              pdfDoc.addImage(reader.result, "PNG", 0, 0, 297, 210);
              resolve();
            } catch (error) {
              reject(error);
            }
          };
          reader.onerror = reject;
        });
      } catch (error) {
        console.error("Error cargando plantilla:", error);
        alert("No se pudo cargar la plantilla visual del certificado.");
        return;
      }

      pdfDoc.setFont("helvetica", "bold");
      let nameFontSize = 26;
      pdfDoc.setFontSize(nameFontSize);

      while (pdfDoc.getTextWidth(studentName) > 200 && nameFontSize > 16) {
        nameFontSize -= 1;
        pdfDoc.setFontSize(nameFontSize);
      }

      pdfDoc.setTextColor(0, 51, 102);
      pdfDoc.text(studentName, 148.5, 93.5, { align: "center" });

      pdfDoc.setFont("helvetica", "bold");
      pdfDoc.setFontSize(12.8);
      pdfDoc.setTextColor(15, 23, 42);
      pdfDoc.text(averageScore, 152.5, 108.8, { align: "center" });

      pdfDoc.setFont("helvetica", "bold");
      pdfDoc.setFontSize(8.5);
      pdfDoc.setTextColor(0, 51, 102);
      pdfDoc.text(completionDate, 148.5, 162.5, { align: "center" });

      try {
        const qrCodeDataUrl = await QRCode.toDataURL(verificationUrl, {
          width: 180, margin: 1,
          color: { dark: "#003366", light: "#ffffff" }
        });
        pdfDoc.addImage(qrCodeDataUrl, "PNG", 221, 148, 27.5, 27.5);
        pdfDoc.setFont("helvetica", "bold");
        pdfDoc.setFontSize(6.5);
        pdfDoc.setTextColor(0, 51, 102);
        pdfDoc.text(`ID: ${certificateId}`, 221 + 27.5 / 2, 188, { align: "center" });
      } catch (error) {
        console.error("Error generando QR:", error);
      }

      pdfDoc.save(`Certificado_AuxiliarPro_${studentName.replace(/\s+/g, "_")}.pdf`);
      window.open(`/verificar?id=${certificateId}`, "_blank");
    } catch (error) {
      console.error("Error generando certificado:", error);
      alert("Error al generar el certificado. Inténtalo de nuevo.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-20 min-h-screen bg-slate-50">
        <Loader2 className="animate-spin text-[#003366]" size={32} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20 font-sans">
      <div className="bg-[#003366] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <span
            className={`text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block ${
              isAdminUser ? "bg-slate-600" : "bg-[#28a745]"
            }`}
          >
            {isAdminUser ? "Administrador" : "Exclusivo Pro"}
          </span>

          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Campus Virtual PRO
            </h1>

            <button
              onClick={handleShare}
              className="text-white/80 hover:text-white transition-colors bg-white/20 p-2.5 rounded-full"
              title="Compartir Campus"
            >
              <Share2 size={24} />
            </button>
          </div>

          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Accede a todo el material oficial estructurado para tu certificación SEREMI. Estudia a tu ritmo y asegura tu título como Auxiliar de Farmacia.
          </p>

          {totalModules > 0 && !isAdminUser && currentUser && (
            <div className="w-full max-w-2xl mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-white">
                  <Flame className="text-amber-400" size={20} />
                  <span className="font-bold text-sm">Tu progreso</span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-200">
                    <span className="font-black text-white">
                      {completedModules}
                    </span>
                    /{totalModules} módulos
                  </span>

                  {daysRemaining !== null && (
                    <span className="text-slate-200 flex items-center gap-1">
                      <Clock size={14} />
                      <span className="font-black text-amber-400">
                        {daysRemaining}
                      </span>{" "}
                      días
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    progressPercent === 100
                      ? "bg-gradient-to-r from-amber-400 to-amber-500"
                      : "bg-gradient-to-r from-emerald-400 to-emerald-500"
                  }`}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              <div className="flex justify-between mt-2 text-xs text-slate-300">
                <span>{progressPercent}% completado</span>

                {isPracticeMode && (
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <RotateCcw size={12} />
                    Modo Práctica Activo
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid gap-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#003366] flex items-center gap-2">
              <BookOpen className="text-[#28a745]" />
              Módulos de Estudio
            </h2>

            {/* PRUEBA DE DIAGNÓSTICO */}
            <Link
              href="/quiz/basic/diagnostico"
              className="w-full text-left rounded-[2rem] border-2 transition-all p-8 bg-white border-slate-200 shadow-sm hover:border-[#28a745] hover:shadow-lg group flex flex-col md:flex-row items-center gap-6"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl shrink-0 bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-md group-hover:scale-105 transition-transform">
                <Stethoscope size={40} />
              </div>

              <div className="flex-1 w-full text-center md:text-left">
                <h3 className="font-black text-2xl text-[#003366] leading-tight mb-2 group-hover:text-[#28a745] transition-colors">
                  Prueba de Diagnóstico SEREMI 2026
                </h3>

                <p className="text-sm text-slate-500 mb-4">
                  Descubre tu nivel real antes de comenzar. Identifica tus áreas de mejora con esta evaluación inicial.{" "}
                  <strong className="text-[#28a745]">100% gratis.</strong>
                </p>
              </div>

              <div className="hidden md:flex shrink-0 text-[#28a745] items-center gap-2 font-bold opacity-50 group-hover:opacity-100 transition-opacity bg-emerald-50 px-4 py-2 rounded-full">
                Iniciar
                <ChevronRight size={20} />
              </div>
            </Link>

            {/* LISTADO DE LOS 4 MÓDULOS DE ESTUDIO */}
            {groupsToRender.map((group, index) => {
              const itemsInGroup = modulesByGroup[group] || [];
              const groupEvalIds = getGroupEvalIds(group, itemsInGroup);

              const isModuleFullyCompleted = groupEvalIds.length > 0 && groupEvalIds.every(id => userProgress.includes(id));
              const isModuleInProgress = groupEvalIds.some(id => userProgress.includes(id)) && !isModuleFullyCompleted;

              const prevGroupName = index > 0 ? groupsToRender[index - 1] : null;
              const isPreviousCompleted = prevGroupName ? isModuleComplete(prevGroupName) : true;
              
              const isLocked = !currentUser || !hasActiveSub || (!isAdminUser && !isPreviousCompleted);

              let headerBgClass = "bg-slate-100";
              let headerTextClass = "text-[#003366]";
              let iconBgClass = "bg-[#003366]";
              let moduleStatusBadge = null;

              if (isLocked) {
                headerBgClass = "bg-slate-100";
                headerTextClass = "text-slate-600";
                iconBgClass = "bg-slate-400";
                moduleStatusBadge = (
                  <div className="bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-slate-300">
                    <Lock size={14} />
                    Bloqueado
                  </div>
                );
              } else if (isModuleFullyCompleted) {
                headerBgClass = "bg-gradient-to-r from-emerald-700 to-emerald-600";
                headerTextClass = "text-white";
                iconBgClass = "bg-white/20";
                moduleStatusBadge = (
                  <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-white/30">
                    <CheckCircle size={14} />
                    Completado
                  </div>
                );
              } else if (isModuleInProgress) {
                headerBgClass = "bg-amber-500 text-white";
                headerTextClass = "text-white";
                iconBgClass = "bg-white/20";
                moduleStatusBadge = (
                  <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-white/30">
                    <PlayCircle size={14} />
                    En Progreso
                  </div>
                );
              } else {
                moduleStatusBadge = (
                  <div className="bg-gradient-to-br from-[#28a745] to-[#218838] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <ShieldCheck size={14} />
                    {isAdminUser ? "Acceso Total" : "Accesible"}
                  </div>
                );
              }

              const descriptions = {
                "MOD 1": "Higiene, reglamentación y ética profesional.",
                "MOD 2": "Farmacología clínica y mecanismos de acción.",
                "MOD 3": "Gestión de farmacia, inventarios y atención al cliente.",
                "MOD 4": "Casos prácticos de fiscalización y rendición SEREMI."
              };

              return (
                <div
                  key={group}
                  className={`rounded-3xl shadow-sm border overflow-hidden transition-all bg-white ${
                    isLocked
                      ? "border-slate-200"
                      : isModuleFullyCompleted
                      ? "border-emerald-300 shadow-md hover:shadow-lg hover:border-emerald-400"
                      : isModuleInProgress
                      ? "border-amber-300 shadow-md hover:border-amber-400"
                      : "border-slate-200 hover:border-[#28a745] hover:shadow-lg"
                  }`}
                >
                  <div className={`${headerBgClass} px-6 py-4 border-b border-slate-200 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg shrink-0 text-white ${iconBgClass}`}>
                        {isLocked ? <Lock size={20} /> : <BookOpen size={20} />}
                      </div>

                      <h2 className={`text-xl font-black leading-tight ${headerTextClass}`}>
                        Módulo {group.replace("MOD ", "")}: Fundamentos
                      </h2>
                    </div>

                    <div className="flex items-center gap-2">
                      {!currentUser ? (
                        <div className="bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                          <Lock size={14} />
                          Requiere Login
                        </div>
                      ) : !hasActiveSub && !isAdminUser ? (
                        <div className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                          <Lock size={14} />
                          Requiere Plan PRO
                        </div>
                      ) : (
                        moduleStatusBadge
                      )}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition-colors">
                    <div className="flex-1 text-center md:text-left z-10">
                      <h3 className="font-bold text-slate-800 text-lg capitalize mb-1.5">
                        {group.replace("MOD ", "Módulo ")}: Introducción Técnica
                      </h3>

                      <p className="text-slate-500 text-sm md:text-base max-w-2xl mb-5 leading-relaxed">
                        {descriptions[group] || "Material oficial completo para tu certificación SEREMI."}
                      </p>
                    </div>

                    <div className="w-full md:w-auto">
                      {!currentUser ? (
                        <button
                          onClick={() => handleModuleClick(group)}
                          className="flex items-center justify-center gap-2 bg-[#003366] hover:bg-[#002244] text-white px-6 py-3 rounded-xl font-bold transition-all w-full md:w-auto shadow-md cursor-pointer"
                        >
                          <LogIn size={18} />
                          Ingresar para Estudiar
                        </button>
                      ) : !hasActiveSub && !isAdminUser ? (
                        <button
                          onClick={() => handleModuleClick(group)}
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-bold transition-all w-full md:w-auto shadow-md cursor-pointer"
                        >
                          <Lock size={18} />
                          Desbloquear con PRO
                        </button>
                      ) : isLocked ? (
                        <button
                          disabled
                          className="flex items-center justify-center gap-2 bg-slate-100 border-2 border-slate-200 text-slate-400 px-6 py-3 rounded-xl font-bold transition-all w-full md:w-auto cursor-not-allowed"
                        >
                          <Lock size={18} />
                          Completa el anterior
                        </button>
                      ) : (
                        <button
                          onClick={() => handleModuleClick(group)}
                          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all w-full md:w-auto shadow-sm cursor-pointer ${
                            isModuleFullyCompleted
                              ? "bg-emerald-700 border-2 border-emerald-700 text-white hover:bg-emerald-800"
                              : isModuleInProgress
                              ? "bg-amber-500 border-2 border-amber-500 text-white hover:bg-amber-600"
                              : "bg-white border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
                          }`}
                        >
                          {isModuleFullyCompleted ? (
                            <>
                              <RotateCcw size={18} />
                              Repasar Módulo
                            </>
                          ) : isModuleInProgress ? (
                            <>
                              <PlayCircle size={18} />
                              Continuar Módulo
                            </>
                          ) : (
                            <>
                              <BookOpen size={18} />
                              Estudiar Módulo
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* EVALUACIONES GLOBALES Y CERTIFICADO */}
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px bg-slate-300 flex-1"></div>
              <h2 className="text-2xl font-black text-[#003366] flex items-center gap-2 whitespace-nowrap">
                <Trophy className="text-amber-500" />
                Evaluaciones Globales Secuenciales
              </h2>
              <div className="h-px bg-slate-300 flex-1"></div>
            </div>

            {/* GLOBAL 1 */}
            <div
              className={`rounded-3xl shadow-lg border overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all ${
                isExam1Locked || !currentUser
                  ? "bg-slate-100 border-slate-300"
                  : "bg-gradient-to-r from-[#003366] to-[#004a99] text-white"
              }`}
            >
              <div className="flex-1 flex items-start gap-4">
                <div
                  className={`p-3 rounded-full shrink-0 ${
                    isExam1Locked || !currentUser
                      ? "bg-slate-300 text-slate-500"
                      : "bg-white/20 text-amber-400"
                  }`}
                >
                  <Trophy size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-black mb-2">
                    1. Examen Global TIPO SEREMI
                  </h3>

                  <p
                    className={`text-sm md:text-base ${
                      isExam1Locked || !currentUser ? "text-slate-500" : "text-blue-100"
                    }`}
                  >
                    {!currentUser
                      ? "🔒 Inicia sesión y adquiere tu suscripción PRO para rendir este examen."
                      : isExam1Locked
                      ? "🔒 Se desbloquea automáticamente al aprobar todas las evaluaciones previas."
                      : "Simulador oficial de 40 preguntas. Abarca Legislación, Farmacotecnia, Almacenamiento y Cálculos."}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0">
                {!currentUser ? (
                  <button
                    onClick={() => router.push("/login")}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all bg-[#003366] hover:bg-[#002244] text-white cursor-pointer"
                  >
                    <LogIn size={18} />
                    Ingresar para Rendir
                  </button>
                ) : isExam1Locked ? (
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
                  >
                    <Lock size={18} />
                    Pendiente de Desbloqueo
                  </button>
                ) : (
                  <Link href="/quiz/pro/pro-eval-global">
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all whitespace-nowrap bg-[#28a745] hover:bg-[#218838] text-white cursor-pointer">
                      {userProgress.includes(exam1Id) ? (
                        <>
                          <CheckCircle size={18} />
                          Repasar Examen
                        </>
                      ) : (
                        "Rendir Examen"
                      )}
                    </button>
                  </Link>
                )}
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10">
              <div
                className={`p-2 rounded-full border-4 border-slate-50 ${
                  isExam2Locked || !currentUser
                    ? "bg-slate-300 text-slate-500"
                    : "bg-[#28a745] text-white"
                }`}
              >
                <ArrowRight className="rotate-90" size={20} />
              </div>
            </div>

            {/* GLOBAL 2 */}
            <div
              className={`rounded-3xl shadow-lg border overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all ${
                isExam2Locked || !currentUser
                  ? "bg-slate-100 border-slate-300"
                  : "bg-gradient-to-r from-[#004a99] to-[#003366] text-white"
              }`}
            >
              <div className="flex-1 flex items-start gap-4">
                <div
                  className={`p-3 rounded-full shrink-0 ${
                    isExam2Locked || !currentUser
                      ? "bg-slate-300 text-slate-500"
                      : "bg-white/20 text-amber-400"
                  }`}
                >
                  {isExam2Locked || !currentUser ? (
                    <Lock size={28} />
                  ) : (
                    <ShieldCheck size={28} />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-black mb-2">
                    2. Examen Global TIPO SEREMI
                  </h3>

                  <p
                    className={`text-sm md:text-base ${
                      isExam2Locked || !currentUser ? "text-slate-500" : "text-blue-100"
                    }`}
                  >
                    {!currentUser
                      ? "🔒 Exclusivo para suscriptores del Plan Mensual PRO (o Plan Anual vigente)."
                      : isSprintPlan
                      ? "🔒 Exclusivo para el Plan Mensual PRO (o usuarios con Plan Anual vigente)."
                      : isExam2Locked
                      ? "🔒 Se desbloquea automáticamente al aprobar el primer Examen Global TIPO SEREMI con ≥80%."
                      : "Evaluación integradora avanzada. Demuestra dominio total para optar a tu certificación."}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0">
                {!currentUser ? (
                  <button
                    onClick={() => router.push("/login")}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all bg-[#003366] hover:bg-[#002244] text-white cursor-pointer"
                  >
                    <LogIn size={18} />
                    Ingresar para Rendir
                  </button>
                ) : isExam2Locked ? (
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
                  >
                    <Lock size={18} />
                    {isSprintPlan
                      ? "Exclusivo Plan Mensual PRO"
                      : "Pendiente de Desbloqueo"}
                  </button>
                ) : (
                  <Link href="/quiz/pro/pro-eval-global-01">
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all whitespace-nowrap bg-[#28a745] hover:bg-[#218838] text-white cursor-pointer">
                      {userProgress.includes(exam2Id) ? (
                        <>
                          <CheckCircle size={18} />
                          Repasar Examen
                        </>
                      ) : (
                        "Rendir Examen Integrado"
                      )}
                    </button>
                  </Link>
                )}
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10">
              <div
                className={`p-2 rounded-full border-4 border-slate-50 ${
                  isCertificateLocked || !currentUser
                    ? "bg-slate-300 text-slate-500"
                    : "bg-amber-500 text-white"
                }`}
              >
                <ArrowRight className="rotate-90" size={20} />
              </div>
            </div>

            {/* CERTIFICADO CON REQUISITO DE ENCUESTA */}
            <div
              className={`rounded-3xl shadow-sm border-2 border-dashed overflow-hidden p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all ${
                isCertificateLocked || !currentUser
                  ? "bg-slate-50 border-slate-300"
                  : "bg-amber-50 border-amber-400"
              }`}
            >
              <div className="flex-1 flex items-start gap-4">
                <div
                  className={`p-3 rounded-full shrink-0 ${
                    isCertificateLocked || !currentUser
                      ? "bg-slate-200 text-slate-400"
                      : "bg-amber-400 text-white"
                  }`}
                >
                  <Award size={28} />
                </div>

                <div>
                  <h3
                    className={`text-xl font-black mb-2 ${
                      isCertificateLocked || !currentUser ? "text-slate-400" : "text-amber-700"
                    }`}
                  >
                    Certificado de Participación
                  </h3>

                  <p
                    className={`text-sm md:text-base ${
                      isCertificateLocked || !currentUser ? "text-slate-400" : "text-amber-800"
                    }`}
                  >
                    {!currentUser
                      ? "Se genera automáticamente al completar el programa con suscripción Plan Mensual PRO (o Plan Anual)."
                      : isSprintPlan
                      ? "🔒 El certificado está disponible exclusivamente para el Plan Mensual PRO (o Plan Anual vigente) tras aprobar el segundo Examen Global."
                      : isCertificateLocked
                      ? "Se generará automáticamente al aprobar el segundo Examen Global TIPO SEREMI con ≥80%."
                      : !hasCompletedSurvey && !isAdminUser
                      ? "¡Felicidades por aprobar! Para activar y descargar tu certificado oficial, completa brevemente la Encuesta de Satisfacción de AuxiliarPro."
                      : "¡Felicidades! Has completado el programa. Tu certificado está listo para descargar y compartir."}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0">
                {isCertificateLocked || !currentUser ? (
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all bg-slate-200 text-slate-400 cursor-not-allowed"
                  >
                    <Lock size={18} />
                    {isSprintPlan
                      ? "Exclusivo Plan Mensual PRO"
                      : "Bloqueado"}
                  </button>
                ) : !hasCompletedSurvey && !isAdminUser ? (
                  <button
                    onClick={() => setShowSurveyModal(true)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                  >
                    <ClipboardCheck size={18} />
                    Responder Encuesta para Liberar
                  </button>
                ) : (
                  <button
                    onClick={handleGenerateCertificate}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold shadow-md transition-all whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-white cursor-pointer"
                  >
                    <Award size={18} />
                    Descargar Certificado
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <SocialContact />
          </div>
        </div>
      </div>

      {/* MODAL ENCUESTA DE SATISFACCIÓN */}
      {showSurveyModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 w-full max-w-lg p-6 md:p-8 relative my-8">
            <button
              onClick={() => setShowSurveyModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 text-indigo-700 p-2.5 rounded-xl">
                <ClipboardCheck size={24} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Encuesta de Satisfacción
              </h3>
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Tus respuestas nos ayudan a mantener los mejores estándares para la certificación SEREMI. Completa esta breve pauta para desbloquear tu Certificado.
            </p>

            <form onSubmit={handleSubmitSurvey} className="space-y-5">
              {/* Pregunta 1 */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1.5">
                  1. Material de estudio y claridad del Campus
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRatingContent(star)}
                      className="p-1.5 text-amber-400 transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        fill={star <= ratingContent ? "#f59e0b" : "transparent"}
                        stroke={star <= ratingContent ? "#f59e0b" : "#cbd5e1"}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">
                    {ratingContent}/5
                  </span>
                </div>
              </div>

              {/* Pregunta 2 */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1.5">
                  2. Facilidad de uso de la plataforma
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRatingPlatform(star)}
                      className="p-1.5 text-amber-400 transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        fill={star <= ratingPlatform ? "#f59e0b" : "transparent"}
                        stroke={star <= ratingPlatform ? "#f59e0b" : "#cbd5e1"}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">
                    {ratingPlatform}/5
                  </span>
                </div>
              </div>

              {/* Pregunta 3 */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1.5">
                  3. Nivel de preparación de los Exámenes SEREMI
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRatingExams(star)}
                      className="p-1.5 text-amber-400 transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        fill={star <= ratingExams ? "#f59e0b" : "transparent"}
                        stroke={star <= ratingExams ? "#f59e0b" : "#cbd5e1"}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">
                    {ratingExams}/5
                  </span>
                </div>
              </div>

              {/* Pregunta NPS (1-10) */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1.5">
                  4. ¿Qué tan probable es que recomiendes AuxiliarPro? (1 al 10)
                </label>
                <div className="grid grid-cols-10 gap-1.5">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setNpsScore(num)}
                      className={`py-2 rounded-lg font-bold text-xs transition-all ${
                        npsScore === num
                          ? "bg-indigo-600 text-white shadow-md scale-105"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comentarios */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-1.5">
                  5. Comentarios o sugerencias para mejorar (Opcional)
                </label>
                <textarea
                  value={surveyComment}
                  onChange={(e) => setSurveyComment(e.target.value)}
                  placeholder="Escribe aquí tu opinión o experiencia..."
                  rows={3}
                  className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submittingSurvey}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  {submittingSurvey ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Encuesta y Desbloquear Certificado
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}