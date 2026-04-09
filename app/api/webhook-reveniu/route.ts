import { NextResponse } from "next/server";
import { db } from "../../firebase/config"; 
import { doc, updateDoc, Timestamp, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // LOG MAESTRO: Esto aparecerá en tu panel de Vercel Logs
    console.log("🚀 DATOS RECIBIDOS DESDE REVENIU:", JSON.stringify(body, null, 2));

    // Intentamos extraer el UID de diferentes formas por si Reveniu cambió el formato
    const uid = body.external_id || body.data?.external_id || body.customer?.external_id;
    const status = body.status || body.data?.status;

    // SI TENEMOS UID, ACTIVAMOS DE UNA (Bypass de verificación para pruebas)
    if (uid) {
      const userRef = doc(db, "users", uid);
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30); // 30 días por defecto

      await updateDoc(userRef, {
        isPro: true,
        proUntil: Timestamp.fromDate(expirationDate),
        lastPaymentDate: serverTimestamp(),
        subscriptionStatus: status || "active"
      });

      console.log(`✅ Usuario ${uid} activado vía Bypass.`);
      return NextResponse.json({ message: "Bypass exitoso", uid }, { status: 200 });
    }

    // Si no hay UID, al menos devolvemos lo que recibimos para debugear
    return NextResponse.json({ 
      message: "Señal recibida, pero no se encontró UID",
      receivedData: body 
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Error en el Webhook:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}