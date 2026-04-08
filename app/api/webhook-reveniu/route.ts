import { NextResponse } from "next/server";
import { db } from "../../firebase/config"; 
import { doc, updateDoc, Timestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("🚀 Señal recibida de Reveniu:", body);

    const subscriptionId = body.data?.subscription_id;

    if (!subscriptionId) {
      return NextResponse.json({ error: "Falta ID" }, { status: 400 });
    }

    // Volvemos a la URL de API oficial ahora que tu red despertó
    const response = await fetch(`https://api.reveniu.com/api/v1/subscriptions/${subscriptionId}`, {
      method: 'GET',
      headers: {
        'Reveniu-Secret-Key': 'UrSJA1q7kdDgTuQ85k_EyRy_J_jerN_yyzHj',
        'User-Agent': 'AuxiliarPro-Server',
        'Accept': 'application/json'
      }
    });

    const subData = await response.json();
    console.log("📦 Datos de Reveniu recuperados:", subData);

    const uid = subData.customer?.external_id;

    if (uid) {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        isPro: true,
        proUntil: Timestamp.fromDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)),
        lastPayment: Timestamp.now()
      });

      console.log(`✅ ¡SISTEMA AUTOMATIZADO! Usuario ${uid} activado.`);
      return NextResponse.json({ message: "Éxito" }, { status: 200 });
    }

    return NextResponse.json({ error: "UID no encontrado" }, { status: 404 });

  } catch (error) {
    console.error("❌ Error final:", error.message);
    return NextResponse.json({ error: "Reintenta en producción" }, { status: 500 });
  }
}