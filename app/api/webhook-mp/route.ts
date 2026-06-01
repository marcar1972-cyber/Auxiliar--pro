import { NextResponse } from "next/server";
import admin from "firebase-admin";

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

export async function POST(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("data.id") || searchParams.get("id");
    const type = searchParams.get("type");

    if (id) {
      let uid = null;
      let diasASumar = 30; // Por defecto mensual
      let status = "";

      // Si es un pago único (Pase 15 días o primera cuota procesada)
      if (type === "payment") {
        const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
          headers: { Authorization: `Bearer APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413` },
        });
        const payment = await response.json();
        uid = payment.external_reference;
        status = payment.status;
        
        const descripcion = payment.description ? payment.description.toLowerCase() : "";
        if (descripcion.includes("anual") || (payment.transaction_amount && payment.transaction_amount > 10000)) {
          diasASumar = 365;
        } else if (descripcion.includes("15 días") || descripcion.includes("sprint")) {
          diasASumar = 15;
        }
      } 
      // Si es la confirmación directa de la suscripción (Preapproval)
      else if (type === "subscription_preapproval") {
        const response = await fetch(`https://api.mercadopago.com/preapproval/${id}`, {
          headers: { Authorization: `Bearer APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413` },
        });
        const sub = await response.json();
        uid = sub.external_reference;
        status = sub.status; // "authorized"
        
        if (sub.auto_recurring && sub.auto_recurring.frequency === 12) {
            diasASumar = 365;
        }
      }

      // Si tenemos UID y el pago/suscripción está aprobado
      if (uid && (status === "approved" || status === "authorized")) {
        const proUntil = new Date();
        proUntil.setDate(proUntil.getDate() + diasASumar);

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
  } catch (error) {
    console.error("❌ Error en Webhook:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}