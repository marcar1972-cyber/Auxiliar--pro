import { NextResponse } from "next/server";
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("data.id") || searchParams.get("id");
    const type = searchParams.get("type");

    if (type === "payment" && id) {
      // Consultamos el pago a Mercado Pago
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: { Authorization: `Bearer APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413` },
      });

      const payment = await response.json();
      const uid = payment.external_reference;

      if (uid && payment.status === "approved") {
        
        // --- INICIO CTO FIX: LÓGICA DE DÍAS SEGÚN EL PLAN ---
        // Buscamos si en la descripción del pago viene el plan anual o el de 15 días
        const descripcion = payment.description ? payment.description.toLowerCase() : "";
        let diasASumar = 30; // Por defecto es mensual (30 días)

        if (descripcion.includes("anual")) {
          diasASumar = 365;
        } else if (descripcion.includes("15 días") || descripcion.includes("pase sprint")) {
          diasASumar = 15;
        }
        
        const proUntil = new Date();
        proUntil.setDate(proUntil.getDate() + diasASumar);
        // --- FIN CTO FIX ---

        await db.collection("users").doc(uid).update({
          isPro: true,
          proUntil: admin.firestore.Timestamp.fromDate(proUntil),
          lastPayment: admin.firestore.FieldValue.serverTimestamp(),
          activatedBy: "MercadoPago-Automático"
        });

        console.log(`✅ Usuario ${uid} activado por ${diasASumar} días.`);
      }
    }
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error en Webhook:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}