import { NextResponse } from "next/server";
import { db } from "../../firebase/config"; 
import { doc, updateDoc, Timestamp, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("🚀 Señal recibida de Reveniu:", body);

    // Reveniu envía el ID de la suscripción dentro de data
    const subscriptionId = body.data?.subscription_id;

    if (!subscriptionId) {
      console.error("❌ Error: No se recibió subscription_id");
      return NextResponse.json({ error: "Falta ID de suscripción" }, { status: 400 });
    }

    // 1. CONSULTA A LA API DE REVENIU PARA VERIFICAR EL PAGO
    const response = await fetch(`https://api.reveniu.com/api/v1/subscriptions/${subscriptionId}`, {
      method: 'GET',
      headers: {
        'Reveniu-Secret-Key': 'UrSJA1q7kdDgTuQ85k_EyRy_J_jerN_yyzHj',
        'User-Agent': 'AuxiliarPro-Server',
        'Accept': 'application/json'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Error en API Reveniu: ${response.statusText}`);
    }

    const subData = await response.json();
    console.log("📦 Datos de Reveniu recuperados:", subData);

    // 2. EXTRAER EL UID (external_id) Y EL PLAN
    const uid = subData.customer?.external_id;
    const planName = subData.plan?.name?.toLowerCase() || ""; // Para saber si es anual o mensual

    if (!uid) {
      console.error("❌ Error: El pago no tiene vinculada la external_id (UID)");
      return NextResponse.json({ error: "UID no encontrado en la suscripción" }, { status: 404 });
    }

    // 3. CÁLCULO DE FECHA DE EXPIRACIÓN (Lógica integrada)
    // Si el nombre del plan contiene "anual", damos 365 días, de lo contrario 30.
    const isAnnual = planName.includes("anual");
    const daysToAdd = isAnnual ? 365 : 30;
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToAdd);

    // 4. ACTUALIZACIÓN DE FIRESTORE
    const userRef = doc(db, "users", uid);
    
    await updateDoc(userRef, {
      isPro: true,
      proUntil: Timestamp.fromDate(expirationDate),
      lastPaymentDate: serverTimestamp(),
      planType: isAnnual ? "Anual" : "Mensual",
      subscriptionStatus: subData.status // Guardamos el estado que reporta Reveniu
    });

    console.log(`✅ ¡ÉXITO! Usuario ${uid} activado como PRO hasta ${expirationDate.toLocaleDateString()}`);
    
    return NextResponse.json({ 
      message: "Usuario activado correctamente", 
      uid: uid,
      expires: expirationDate 
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Error Crítico Webhook:", error.message);
    return NextResponse.json({ 
      error: "Error interno del servidor", 
      details: error.message 
    }, { status: 500 });
  }
}