// app/api/webhook-mp/route.ts
import { NextResponse } from "next/server";
import admin from "firebase-admin";

export const runtime = "nodejs";

// 1. Inicialización idempotente y segura usando variables de entorno de Vercel
if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID || "auxiliar-pro";
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-fbsvc@auxiliar-pro.iam.gserviceaccount.com";
  const fallbackKey = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdlXNjBN7KQ3UT\n5AuSGzSR8a7FtncW/fHq91flqbKSynkuifUrikUn/7rzaxahtgF+P9eWovywEtUg\noI1PwSBkA55fXUwUUWqz156AIJfz8c0VtBLV8GEFLBlY2Mbr1wSj7N3n20+AzXOl\nGiZ4ZUONIFuGttoYjahuei1P6Ku3bWk8I4AOuMTxzRvLTCIgY5UBvBQLyw0aJBrW\nDt/KQbSV5bLymUCmIdNPEjbPQaI8gCsqPXdb8OARtrvFoMXPQkXbsq5BnbAzyqv7\nJAJhF18FZ7gkmLTgX53TUXu/WLkiEc6OJSeSu3bDbGXh+DYLUvH4x8pXkHwoSy2a\nQ5hQdTFlAgMBAAECggEADnPG7dVkA2PVaHoZL5CsLRhfwYU+/c5Tcgu2NXtvQ7Qr\nEgAYCqK3PfhfsnRnUnRpRaVgRdHz38gSYNgoraBWMqX8T920HQbshMrpH/IdTYOn\nHe7ybUmK9Fj7iCD1eWqyY8BVB68e5v6wtPslfRQ4ckh97Gh3rxnK0TsGTdZWbU+I\nJxe9kq2nIq+4CJaTHcNRjIyID8O64WwJw8M69vBCQwQEPxa42V0ypOI/jovZutRh\nrs4KPcAZrdjZ5fa7jQ6J77PbP8p9A1F3060hu5cySTQf7wFfqOHs2q4LyyoLfDaa\nMjl0PVF0G381h4LxbnGPjFaPo0lw6cQGh08UYAAusQKBgQDMH0e64+xDWta7r+2S\ne2j7/vZnMci1iF0eMij3T2kam7s5OE++l8Lpp1lMreQEKYDEOWIZ1HyHH05tpmrr\na+b/9YxLkOgQHL1I/9PFgF+eLX9rhG/nf7STqPLRgHS2/SfvA4zDTxDpY7a6J4r6\nI/UyB5gGhlWes4QwjCuqxQudfQKBgQDFokL2v3UCNBdKLiBpFY18EzsIedhRmZ4i\nEN7JGoO08pgNy3P/D3RxVDQoTWN7wjIWEl4OrcBmEUkTHk9zSBKMGhQdlAjsMGqt\ntBRxPEBUiS3+2Ms4ZpW2VvfOYEouN09Eg27zeAD0G7KlSZR8LhywzhCRM/n3qa3p\nFh4TG3/ICQKBgBzg8A0I4gxFdcvn//yRaTD9yW6gJH1KZaI4BoO2wG/7SGm4BdA5\nOGJGQuQOVgwgsw8P70koPtX/H+Fzgfz8rxnXa5nlTm+5IS6KwzNWDjEazsQvYIWo\nE6wwYuow+lJJTrUKE4guT341lUyQ+6CYJcCGQoPpzYM+cp1Lt4HZjuMhAoGAEJeE\nw65jJmI1KlchBXF3xVjf9eA01vTsn7OG4J9HO2O6fD3+aQVlIzaMgm2s0nEFP3Ef\nUGAp7Oe6mM5MoUMFu5lc4vbQoPOXoSmjJbaHOBGkOOb+eKe0HfDDMSJIWATwtLHM\nGMiUW+oPX20D+EDuy7EhFu+kJrSqEw12TOhcG/ECgYA6rsak+ngB2LjwwrcMe7Uk\nH54Xiiq6g7SxaCt9KdDqISTaR+CIRO5zbCDpUbvqlEog8ugTrfws0L2x/c2+acAK\n9pUz8bx3lMq7PsPtbczAGfAXubp/azLd8UR0eLDXUzzwUrbRTBAaG0FZq3xDXsgC\nQg3KG/E+3cgEmPDIKfPcSg==\n-----END PRIVATE KEY-----\n";
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || fallbackKey).replace(/\\n/g, "\n");

  admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  });
}

const db = admin.firestore();
const TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN || "APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413";

// 2. MATRIZ DE PRECIOS OFICIALES DE AUXILIARPRO APP CALIBRADA
const PLANES_PRECIOS = {
  sprint: { montoExacto: 3990, dias: 15, plan: "sprint" },
  mensual: { montoExacto: 5990, dias: 30, plan: "mensual" },
  anual: { montoExacto: 49990, dias: 365, plan: "anual" }
};

function determinarDiasPorMonto(monto: number) {
  if (monto >= 40000) {
    return { dias: PLANES_PRECIOS.anual.dias, plan: PLANES_PRECIOS.anual.plan };
  } else if (monto >= 5000) {
    return { dias: PLANES_PRECIOS.mensual.dias, plan: PLANES_PRECIOS.mensual.plan };
  } else {
    return { dias: PLANES_PRECIOS.sprint.dias, plan: PLANES_PRECIOS.sprint.plan };
  }
}

async function buscarUsuarioPorEmail(email: string) {
  if (!email) return null;
  const emailNormalizado = email.toLowerCase().trim();
  const snapshot = await db.collection("users")
    .where("email", "==", emailNormalizado)
    .limit(1)
    .get();

  if (!snapshot.empty) {
    const doc = snapshot.docs[0];
    return { uid: doc.id, data: doc.data() };
  }
  return null;
}

export async function POST(request: Request) {
  console.log("🔔 === WEBHOOK INBOUND MERCADO PAGO (PROCESANDO PREFERENCIA DINÁMICA) ===");
  
  let id: string | null = null;
  let type: string | null = null;

  try {
    const { searchParams } = new URL(request.url);
    id = searchParams.get("data.id") || searchParams.get("id") || searchParams.get("payment_id");
    type = searchParams.get("type") || searchParams.get("topic");

    if (!id || !type) {
      try {
        const body = await request.json();
        id = body.data?.id || body.id || id;
        type = body.type || body.action || type;
      } catch {}
    }

    if (type === "payment" || id) {
      if (!id) {
        return NextResponse.json({ received: false, error: "Missing ID" }, { status: 400 });
      }

      const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      if (!response.ok) {
        return NextResponse.json({ error: "Payment not found in MP API" }, { status: 404 });
      }

      const payment = await response.json();
      const status = payment.status;
      const monto = payment.transaction_amount || 0;
      const mpPayerEmail = payment.payer?.email ? payment.payer.email.toLowerCase().trim() : "";
      
      let uid = payment.external_reference || payment.metadata?.uid || payment.metadata?.external_reference;

      if (status === "approved") {
        const logRef = db.collection("payments_log").doc(id.toString());
        const logDoc = await logRef.get();

        if (logDoc.exists) {
          return NextResponse.json({ received: true, message: "Already processed" }, { status: 200 });
        }

        let metodoBusqueda = "external_reference";
        const { dias: diasASumar, plan: planDetectado } = determinarDiasPorMonto(monto);

        if (!uid || uid.trim() === "") {
          let usuarioEncontrado = await buscarUsuarioPorEmail(mpPayerEmail);
          if (usuarioEncontrado) {
            uid = usuarioEncontrado.uid;
            metodoBusqueda = "mp_payer_email";
          }

          if (!uid && payment.additional_info?.payer?.email) {
            usuarioEncontrado = await buscarUsuarioPorEmail(payment.additional_info.payer.email);
            if (usuarioEncontrado) {
              uid = usuarioEncontrado.uid;
              metodoBusqueda = "additional_info_email";
            }
          }
        }

        if (uid) {
          const userRef = db.collection("users").doc(uid);
          
          await db.runTransaction(async (transaction) => {
            const userSnapshot = await transaction.get(userRef);
            const userData = userSnapshot.exists ? (userSnapshot.data() || {}) : {};
            let proUntilBase = new Date();

            if (userData.proUntil) {
              const fechaActual = new Date();
              const fechaProUntilExistente = typeof userData.proUntil.toDate === "function"
                ? userData.proUntil.toDate()
                : new Date(userData.proUntil);

              if (fechaProUntilExistente > fechaActual) {
                proUntilBase.setTime(fechaProUntilExistente.getTime());
              }
            }

            proUntilBase.setDate(proUntilBase.getDate() + diasASumar);

            transaction.set(userRef, {
              isPro: true,
              proUntil: admin.firestore.Timestamp.fromDate(proUntilBase),
              lastPayment: admin.firestore.FieldValue.serverTimestamp(),
              activatedBy: `MercadoPago-Webhook-Dinamico-via-${metodoBusqueda}`,
              planActual: planDetectado
            }, { merge: true });

            transaction.set(logRef, {
              transactionId: id,
              uid: uid,
              mercadoPagoEmail: mpPayerEmail,
              amount: monto,
              plan: planDetectado,
              createdAt: admin.firestore.FieldValue.serverTimestamp()
            });
          });

          console.log(`🎉 Webhook Éxito: Alumno ${uid} activado automáticamente en modo PRO.`);
        } else {
          await db.collection("pagos_pendientes_asignacion").doc(id.toString()).set({
            paymentId: id,
            amount: monto,
            payerEmail: mpPayerEmail || "N/A",
            plan: planDetectado,
            timestamp: new Date(),
            procesado: false,
            notas: "Recaudado. UID ausente y correo sin coincidencias en base de datos."
          });
        }
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Error crítico en pipeline de webhook:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  return NextResponse.json({ status: "online", route: "webhook-mp", integration: "Checkout Pro Dinámico" }, { status: 200 });
}