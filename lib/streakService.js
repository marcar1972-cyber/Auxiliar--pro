import { db } from "../app/firebase/config"; // 🔥 FIX: Ruta corregida según tu árbol
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";

/**
 * Registra actividad y actualiza la racha del usuario
 */
export const updateStreak = async (uid) => {
  if (!uid) return;
  
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) return;

    const data = userSnap.data();
    const ahora = new Date();
    const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate()).getTime();
    
    let ultimaActividad = null;
    if (data.lastStreakUpdate) {
      const d = data.lastStreakUpdate.toDate();
      ultimaActividad = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    }

    if (ultimaActividad === hoy) {
      return data.streakCount || 0;
    }

    const unDiaEnMs = 24 * 60 * 60 * 1000;
    const diferencia = hoy - ultimaActividad;

    let nuevaRacha = 1;

    if (ultimaActividad && diferencia === unDiaEnMs) {
      nuevaRacha = (data.streakCount || 0) + 1;
    } else {
      nuevaRacha = 1;
    }

    const updates = {
      streakCount: nuevaRacha,
      lastStreakUpdate: serverTimestamp(),
    };

    if (nuevaRacha > (data.longestStreak || 0)) {
      updates.longestStreak = nuevaRacha;
    }

    await updateDoc(userRef, updates);
    return nuevaRacha;
  } catch (error) {
    console.error("Error en streakService:", error);
    return 0;
  }
};

// < macz.dev />