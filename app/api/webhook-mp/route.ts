// app/api/webhook-mp/route.ts
import { NextResponse } from "next/server";
import admin from "firebase-admin";

// Inicialización de Firebase Admin de forma segura e idempotente
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
const MP_TOKEN = "APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413";

const PLANES_PRECIOS = {
  sprint: { min: 3500, max: 4999, dias: 15, nombre: "Sprint 15 Días" },
  mensual: { min: 5000, max: 19999, dias: 30, nombre: "Mensual PRO" },
  anual: { min: 20000, max: Infinity, dias: 365, nombre: "Anual PRO" }
};

function determinarDiasPorMonto(monto: number) {
  if (monto >= PLANES_PRECIOS.anual.min) {
    return { dias: PLANES_PRECIOS.anual.dias, plan: "anual" };
  } else if (monto >= PLANES_PRECIOS.mensual.min) {
    return { dias: PLANES_PRECIOS.mensual.dias, plan: "mensual" };
  } else if (monto >= PLANES_PRECIOS.sprint.min) {
    return { dias: PLANES_PRECIOS.sprint.dias, plan: "sprint" };
  }
  return { dias: 30, plan: "mensual (fallback)" };
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

async function guardarPagoHuerfano(payment: any, motivo: string) {
  try {
    await db.collection("pagos_huerfanos").doc(payment.id.toString()).set({
      paymentId: payment.id,
      status: payment.status,
      amount: payment.transaction_amount,
      payerEmail: payment.payer?.email || "N/A",
      externalReference: payment.external_reference || "N/A",
      metadata: payment.metadata || {},
      motivo: motivo,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      procesado: false,
      notas: "Requiere vinculación forzada"
    });
    console.log(`💾 Pago huérfano guardado con ID: ${payment.id}`);
  } catch (error) {
    console.error("❌ Error al guardar log de pago huérfano:", error);
  }
}

export async function POST(request: Request) {
  const timestampEntrada = new Date();
  console.log("🔔 === WEBHOOK INBOUND MERCADO PAGO ===");

  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get("data.id") || searchParams.get("id");
    let type = searchParams.get("type");

    if (!id || !type) {
      try {
        const body = await request.json();
        id = body.data?.id || body.id || id;
        type = body.type || body.action || type;
      } catch {
        // Payload no parseable
      }
    }

    const esTipoPayment = type && (type.includes("payment") || type === "payment");

    if (!id || !esTipoPayment) {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: { Authorization: `Bearer ${MP_TOKEN}` },
    });

    if (!response.ok) {
      console.error(`❌ Falló la verificación para el ID ${id}.`);
      return NextResponse.json({ error: "Payment verification failed" }, { status: 404 });
    }

    const payment = await response.json();
    const status = payment.status;
    const monto = payment.transaction_amount || 0;
    const payerEmail = payment.payer?.email ? payment.payer.email.toLowerCase().trim() : "";
    
    // Extracción ultra-tolerante de Identificadores (Capa de Inteligencia del Backend)
    let uid = payment.external_reference || payment.metadata?.uid || payment.metadata?.user_id;

    if (status !== "approved") {
      console.log(`⏳ Pago ID ${id} ignorado de forma segura debido a estado: '${status}'.`);
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // CONTROL DE IDEMPOTENCIA
    const logRef = db.collection("payments_log").doc(id.toString());
    const logDoc = await logRef.get();

    if (logDoc.exists) {
      console.log(`⚠️ Clon asíncrono interceptado para el ID de pago ${id}.`);
      return NextResponse.json({ received: true, message: "Payment already processed" }, { status: 200 });
    }

    let metodoBusqueda = "external_reference";

    // 🚀 MEJORA DE CONTINGENCIA AVANZADA (Evita fallos como el de Nataly)
    if (!uid || uid.trim() === "") {
      console.log("⚠️ Transacción sin UID en pasarela. Extrayendo vía correos cruzados...");
      
      // Intentamos primero con el correo que viene de los metadatos de la aplicación
      const emailEnMetadatos = payment.metadata?.email || payment.metadata?.user_email;
      let usuarioEncontrado = await buscarUsuarioPorEmail(emailEnMetadatos);

      if (usuarioEncontrado) {
        uid = usuarioEncontrado.uid;
        metodoBusqueda = "metadata_email";
      } else {
        // Si falla, probamos con el correo del pagador de Mercado Pago
        usuarioEncontrado = await buscarUsuarioPorEmail(payerEmail);
        if (usuarioEncontrado) {
          uid = usuarioEncontrado.uid;
          metodoBusqueda = "payer_email";
        }
      }

      if (!uid) {
        console.error(`❌ Alerta Crítica: El comprador '${payerEmail}' no pudo ser asociado a ninguna cuenta.`);
        await guardarPagoHuerfano(payment, `No se encontró usuario para correo MP: ${payerEmail} ni metadatos.`);
        return NextResponse.json({ error: "User profile missing" }, { status: 404 });
      }
    }

    if (metodoBusqueda === "external_reference" && (uid.length < 10 || uid.length > 128)) {
      console.error(`❌ Formato de UID de Firebase corrupto: ${uid}`);
      await guardarPagoHuerfano(payment, `UID corrupto: ${uid}`);
      return NextResponse.json({ error: "Invalid signature pattern" }, { status: 400 });
    }

    const { dias: diasASumar, plan: planDetectado } = determinarDiasPorMonto(monto);
    const userRef = db.collection("users").doc(uid);
    const discrepanciaRef = db.collection("pagos_discrepantes").doc(id.toString());

    // EJECUCIÓN ATÓMICA CON TRANSACCIÓN DE FIREBASE
    await db.runTransaction(async (transaction) => {
      const userSnapshot = await transaction.get(userRef);

      if (!userSnapshot.exists) {
        throw new Error(`UserNotFound: El documento de usuario ${uid} no existe.`);
      }

      const userData = userSnapshot.data() || {};
      const userEmailApp = userData.email ? userData.email.toLowerCase().trim() : "";
      let proUntilBase = new Date();

      if (userData.isPro && userData.proUntil) {
        const fechaActual = new Date();
        const fechaProUntilExistente = typeof userData.proUntil.toDate === "function"
          ? userData.proUntil.toDate()
          : new Date(userData.proUntil);

        if (fechaProUntilExistente > fechaActual) {
          proUntilBase.setTime(fechaProUntilExistente.getTime());
        }
      }

      proUntilBase.setDate(proUntilBase.getDate() + diasASumar);

      // Guardar discrepancia de correo de forma limpia sin tumbar la pasarela
      if (payerEmail && userEmailApp && payerEmail !== userEmailApp) {
        transaction.set(discrepanciaRef, {
          paymentId: payment.id,
          uid: uid,
          emailEnApp: userEmailApp,
          emailEnMercadoPago: payerEmail,
          monto: monto,
          plan: planDetectado,
          diasAsignados: diasASumar,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          revisado: false,
          notas: "Cruce automático exitoso por ID/Metadatos, pero los correos difieren."
        });
      }

      // Mutación garantizada del estado Pro del Alumno
      transaction.update(userRef, {
        isPro: true,
        proUntil: admin.firestore.Timestamp.fromDate(proUntilBase),
        lastPayment: admin.firestore.FieldValue.serverTimestamp(),
        activatedBy: `MercadoPago-Automático-via-${metodoBusqueda}`,
        planActual: planDetectado,
        paymentDetails: {
          id: payment.id,
          amount: monto,
          dias: diasASumar,
          plan: planDetectado,
          payerEmail: payerEmail || "N/A",
          status: status,
          timestamp: admin.firestore.FieldValue.serverTimestamp()
        },
        historialPagos: admin.firestore.FieldValue.arrayUnion({
          id: payment.id,
          amount: monto,
          dias: diasASumar,
          plan: planDetectado,
          metodoBusqueda: metodoBusqueda,
          timestamp: admin.firestore.FieldValue.serverTimestamp()
        })
      });

      // Insertar el recibo definitivo (Garantía contra re-intentos)
      transaction.set(logRef, {
        transactionId: payment.id,
        uid: uid,
        auxiliarProEmail: userEmailApp || "No registrado",
        mercadoPagoEmail: payerEmail || "No registrado en MP",
        plan: planDetectado,
        daysAdded: diasASumar,
        amount: monto,
        status: status,
        metodoBusqueda: metodoBusqueda,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    });

    console.log(`🎉 COMPRA PROCESADA: El alumno ${uid} ha sido mutado a PRO automáticamente.`);

    return NextResponse.json({
      success: true,
      message: `Usuario ${uid} configurado en modo PRO de forma consistente.`
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ ERROR EXCEPCIONAL DENTRO DEL WEBHOOK:", error.message);

    try {
      if (error.message && !error.message.includes("UserNotFound")) {
        await db.collection("webhook_errors").add({
          error: error.message,
          stack: error.stack,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          url: request.url
        });
      }
    } catch (logError) {
      console.error("Falla al escribir log de error en base de datos:", logError);
    }

    if (error.message && error.message.includes("UserNotFound")) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  return NextResponse.json({
    status: "online",
    message: "AuxiliarPro Webhook Gate v4.0 activo",
    timestamp: new Date().toISOString()
  }, { status: 200 });
}