import { db } from "../firebase/config";
import { 
  doc, 
  getDoc, 
  runTransaction, 
  arrayUnion, 
  collection, 
  addDoc, 
  serverTimestamp 
} from "firebase/firestore";

// 🚀 SECUENCIA ESTRICTA DE DESBLOQUEO (Fuente de verdad para el backend)
export const EXAM_SEQUENCE = [
  "pro-eval-1", "pro-eval-2", "pro-eval-3", "pro-eval-4", "pro-eval-5",
  "pro-eval-6", "pro-eval-7", "pro-eval-8", "pro-eval-9", "pro-eval-10",
  "pro-eval-11", "pro-eval-12", "pro-eval-13", "pro-eval-14", "pro-eval-15",
  "pro-eval-global",
  "pro-eval-global-01"
];

/**
 * Completa un examen y desbloquea el siguiente de forma ATÓMICA.
 * Calcula automáticamente el promedio global para el certificado.
 */
export async function completeExamAtomically(userId, examId, score, passingScore, totalQuestions) {
  const userRef = doc(db, "users", userId);
  const isPassed = score >= passingScore;

  try {
    // 1. TRANSACCIÓN ATÓMICA: Todo o nada. Si falla, no se escribe nada.
    await runTransaction(db, async (transaction) => {
      const userSnap = await transaction.get(userRef);
      
      if (!userSnap.exists()) {
        throw new Error("Documento de usuario no encontrado");
      }

      const userData = userSnap.data();
      const currentApproved = userData.approvedModules || userData.unlockedLevelsPro || [];
      const currentScores = userData.moduleScores || {};
      
      const updates = {};

      if (isPassed) {
        // A. Registrar este examen como aprobado
        if (!currentApproved.includes(examId)) {
          updates.approvedModules = arrayUnion(examId);
          updates.unlockedLevelsPro = arrayUnion(examId); // Redundancia segura
        }

        // B. Desbloquear el SIGUIENTE examen en la secuencia estricta
        const currentIndex = EXAM_SEQUENCE.indexOf(examId);
        if (currentIndex !== -1 && currentIndex + 1 < EXAM_SEQUENCE.length) {
          const nextExamId = EXAM_SEQUENCE[currentIndex + 1];
          
          // Solo desbloquear si aún no está desbloqueado
          if (!currentApproved.includes(nextExamId)) {
            updates.approvedModules = arrayUnion(nextExamId);
            updates.unlockedLevelsPro = arrayUnion(nextExamId);
          }
        }
      }

      // C. Actualizar el puntaje de este examen específico
      currentScores[examId] = score;
      updates.moduleScores = currentScores;

      // 🚀 CTO FIX: Calcular el promedio global para el certificado
      // Filtramos solo los exámenes de la secuencia que están aprobados y tienen puntaje
      const approvedWithScores = EXAM_SEQUENCE.filter(
        id => currentApproved.includes(id) && currentScores[id] !== undefined
      );
      
      const totalPoints = approvedWithScores.reduce((acc, id) => acc + currentScores[id], 0);
      const averageScore = approvedWithScores.length > 0 
        ? Math.round(totalPoints / approvedWithScores.length) 
        : 0;

      // Guardamos el promedio en la ruta que lee el certificado
      updates['globalScores.average'] = averageScore;
      updates.lastExamDate = serverTimestamp();

      // Ejecutar la actualización atómica
      transaction.update(userRef, updates);
    });

    // 2. REGISTRO DE AUDITORÍA (exam_logs)
    const examLogRef = collection(db, "exam_logs");
    await addDoc(examLogRef, {
      userId,
      examId,
      score,
      totalQuestions,
      passed: isPassed,
      timestamp: serverTimestamp(),
    });

    return { success: true, passed: isPassed };
  } catch (error) {
    console.error("Error crítico en transacción atómica de examen:", error);
    return { success: false, error: error.message };
  }
}