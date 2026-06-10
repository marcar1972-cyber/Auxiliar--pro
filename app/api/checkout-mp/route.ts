import { NextResponse } from "next/server";
import admin from "firebase-admin";

// Inicialización segura de Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "auxiliar-pro",
      clientEmail: "firebase-adminsdk-fbsvc@auxiliar-pro.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdlXNjBN7KQ3UT\n5AuSGzSR8a7FtncW/fHq91flqbKSynkuifUrikUn/7rzaxahtgF+P9eWovywEtUg\noI1PwSBkA55fXUwUUWqz156AIJfz8c0VtBLV8GEFLBlY2Mbr1wSj7N3n20+AzXOl\nGiZ4ZUONIFuGttoYjahuei1P6Ku3bWk8I4AOuMTxzRvLTCIgY5UBvBQLyw0aJBrW\nDt/KQbSV5bLymUCmIdNPEjbPQaI8gCsqPXdb8OARtrvFoMXPQkXbsq5BnbAzyqv7\nJAJhF18FZ7gkmLTgX53TUXu/WLkiEc6OJSeSu3bDbGXh+DYLUvH4x8pXkHwoSy2a\nQ5hQdTFlAgMBAAECggEADnPG7dVkA2PVaHoZL5CsLRhfwYU+/c5Tcgu2NXtvQ7Qr\nEgAYCqK3PfhfsnRnUnRpRaVgRdHz38gSYNgoraBWMqX8T920HQbshMrpH/IdTYOn\nHe7ybUmK9Fj7iCD1eWqyY8BVB68e5v6wtPslfRQ4ckh97Gh3rxnK0TsGTdZWbU+I\nJxe9kq2nIq+4CJaTHcNRjIyID8O64WwJw8M69vBCQwQEPxa42V0ypOI/jovZutRh\nrs4KPcAZrdjZ5fa7jQ6J77PbP8p9A1F3060hu5cySTQf7wFfqOHs2q4LyyoLfDaa\nMjl0PVF0G381h4LxbnGPjFaPo0lw6cQGh08UYAAusQKBgQDMH0e64+xDWta7r+2S\ne2j7/vZnMci1iF0eMij3T2kam7s5OE++l8Lpp1lMreQEKYDEOWIZ1HyHH05tpmrr\na+b/9YxLkOgQHL1I/9PFgF+eLX9rhG/nf7STqPLRgHS2/SfvA4zDTxDpY7a6J4r6\nI/UyB5gGhlWes4QwjCuqxQudfQKBgQDFokL2v3UCNBdKLiBpFY18EzsIedhRmZ4i\nEN7JGoO08pgNy3P/D3RxVDQoTWN7wjIWEl4OrcBmEUkTHk9zSBKMGhQdlAjsMGqt\ntBRxPEBUiS3+2Ms4ZpW2VvfOYEouN09Eg27zeAD0G7KlSZR8LhywzhCRM/n3qa3p\nFh4TG3/ICQKBgBzg8A0I4gxFdcvn//yRaTD9yW6gJH1KZaI4BoO2wG/7SGm4BdA5\nOGJGQuQOVgwgsw8P70koPtX/H+Fzgfz8rxnXa5nlTm+5IS6KwzNWDjEazsQvYIWo\nE6wwYuow+lJJTrUKE4guT341lUyQ+6CYJcCGQoPpzYM+cp1Lt4HZjuMhAoGAEJeE\nw65jJmI1KlchBXF3xVjf9eA01vTsn7OG4J9HO2O6fD3+aQVlIzaMgm2s0nEFP3Ef\nUGAp7Oe6mM5MoUMFu5lc4vbQoPOXoSmjJbaHOBGkOOb+eKe0HfDDMSJIWATwtLHM\nGMiUW+oPX20D+EDuy7EhFu+kJrSqEw12TOhcG/ECgYA6rsak+ngB2LjwwrcMe7Uk\nH54Xiiq6g7SxaCt9KdDqISTaR+CIRO5zbCDpUbvqlEog8ugTrfws0L2x/c2+acAK\n9pUz8bx3lMq7PsPtbczAGfAXubp/azLd8UR0eLDXUzzwUrbRTBAaG0FZq3xDXsgC\nQg3KG/E+3cgEmPDIKfPcSg==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();
const TOKEN = "APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413";

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("data.id") || searchParams.get("id");
    const type = searchParams.get("type");

    if (id && type === "payment") {
      // 1. Consultamos el pago directo a la API de Mercado Pago
      const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });
      
      const payment = await response.json();
      const status = payment.status;

      if (status === "approved") {
        // 2. Extraer datos del pago para la auditoría y actualización
        const uid = payment.external_reference; 
        const mpPayerEmail = payment.payer?.email || "No registrado en MP";
        const metadata = payment.metadata || {};
        const originalUserEmail = metadata.email || "No registrado en metadata";
        const planContratado = metadata.plan || "No especificado";
        const descripcion = payment.description ? payment.description.toLowerCase() : "";

        // 3. Determinar los días a sumar
        let diasASumar = 30; // Por defecto
        if (descripcion.includes("anual") || planContratado === "anual") {
          diasASumar = 365;
        } else if (descripcion.includes("15 días") || descripcion.includes("sprint") || planContratado === "sprint") {
          diasASumar = 15;
        }

        if (uid) {
          const proUntil = new Date();
          proUntil.setDate(proUntil.getDate() + diasASumar);

          // 4. Actualizar el perfil del usuario en Firestore
          await db.collection("users").doc(uid).update({
            isPro: true,
            proUntil: admin.firestore.Timestamp.fromDate(proUntil),
            lastPayment: admin.firestore.FieldValue.serverTimestamp(),
            activatedBy: "MercadoPago-Automático"
          });

          // 5. 🛡️ BLINDAJE CTO: Registro de Auditoría (Recibo)
          await db.collection("payments_log").doc(id).set({
            transactionId: id,
            uid: uid,
            auxiliarProEmail: originalUserEmail,
            mercadoPagoEmail: mpPayerEmail,
            plan: planContratado,
            daysAdded: diasASumar,
            amount: payment.transaction_amount,
            status: status,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
          });

          console.log(`✅ Auditory Log creado. Usuario ${uid} (${originalUserEmail}) activado por ${diasASumar} días.`);
        } else {
          console.error(`❌ Pago aprobado pero sin external_reference (UID). ID de pago: ${id}`);
        }
      }
    }
    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error: any) {
    console.error("❌ Error en Webhook:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}