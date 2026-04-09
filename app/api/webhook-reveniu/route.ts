import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config"; 
import { doc, updateDoc, Timestamp, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // LOG MAESTRO: Esto aparecerá en tu panel de Vercel Logs
    console.log("🚀 DATOS RECIBIDOS DESDE REVENIU:", JSON.stringify(body, null, 2));

    // Intentamos extraer el UID de diferentes formas
    const uid = body.external_id || body.data?.external_id || body.customer?.external_id;
    const status = body.status || body.data?.status;

    // SI TENEMOS UID, ACTIVAMOS EL MODO PRO
    if (uid) {
      // 1. EL DISFRAZ: Vercel inicia sesión con tus credenciales de Admin
      // OJO MARCELO: Reemplaza "TU_CLAVE_DE_ACCESO_AQUI" por tu clave real de Firebase
      await signInWithEmailAndPassword(auth, "marcar1972@gmail.com", "quefuncie");

      // 2. LA MAGIA: Actualizamos Firestore ahora que tenemos permisos
      const userRef = doc(db, "users", uid);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30); // 30 días por defecto

      await updateDoc(userRef, {
        isPro: true,
        proUntil: Timestamp.fromDate(expirationDate),
        lastPaymentDate: serverTimestamp(),
        subscriptionStatus: status || "active"
      });

      console.log(`✅ Usuario ${uid} activado exitosamente en la base de datos.`);
      return NextResponse.json({ message: "Bypass exitoso", uid }, { status: 200 });
    }

    // Si la señal llega pero no trae el UID, registramos todo para auditar
    return NextResponse.json({ 
      message: "Señal recibida, pero no se encontró UID",
      receivedData: body 
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Error Crítico en el Webhook:", error.message);
    return NextResponse.json({ error: "Error en servidor", details: error.message }, { status: 500 });
  }
}