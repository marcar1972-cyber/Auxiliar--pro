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

// Matriz de precios oficiales (Ecosistema AuxiliarPro App 2026)
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

async function registrarPagoHuerfanoEstatico(payment: any, motivo: string, plan: string, dias: number) {
  try {
    // Generamos una bitácora limpia en una colección de atención inmediata
    await db.collection("pagos_pendientes_asignacion").doc(payment.id.toString()).set({
      paymentId: payment.id,
      amount: payment.transaction_amount,
      payerEmail: payment.payer?.email || "N/A",
      planDetectado: plan,
      diasCalculados: dias,
      motivoError: motivo,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      procesado: false,
      instrucciones: "Para activar manualmente: Busca el UID del alumno e incrementa sus días sumando este bloque de forma directa."
    });
    console.log(`⚠️ ALERTA: Link estático detectado sin cuenta vinculada. Almacenado ID de control: ${payment.id}`);
  } catch (error) {
    console.error("❌ Error escribiendo en cola de asignación manual:", error);
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
        // Payload sin body estructural
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
      console.error(`❌ Falló la verificación de pasarela para el ID ${id}.`);
      return NextResponse.json({ error: "Payment verification failed" }, { status: 404 });
    }

    const payment = await response.json();
    const status = payment.status;
    const monto = payment.transaction_amount || 0;
    const payerEmail = payment.payer?.email ? payment.payer.email.toLowerCase().trim() : "";
    
    // Extracción tolerante en capas de metadatos
    let uid = payment.external_reference || payment.metadata?.uid || payment.metadata?.user_id;

    if (status !== "approved") {
      console.log(`⏳ Pago ID ${id} ignorado de forma segura debido a estado no operativo: '${status}'.`);
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // CONTROL DE IDEMPOTENCIA ANTI-RÁFAGAS
    const logRef = db.collection("payments_log").doc(id.toString());
    const logDoc = await logRef.get();

    if (logDoc.exists) {
      console.log(`⚠️ Registro duplicado omitido con éxito para el ID de pago ${id}.`);
      return NextResponse.json({ received: true, message: "Payment already processed" }, { status: 200 });
    }

    let metodoBusqueda = "external_reference";
    const { dias: diasASumar, plan: planDetectado } = determinarDiasPorMonto(monto);

    // 🚀 CAPA DE RESOLUCIÓN PARA LINKS ESTÁTICOS (MANUALES DESDE PANEL MP)
    if (!uid || uid.trim() === "") {
      console.log("⚠️ Transacción de Link Estático (Sin external_reference). Evaluando correos...");
      
      const emailEnMetadatos = payment.metadata?.email || payment.metadata?.user_email;
      let usuarioEncontrado = await buscarUsuarioPorEmail(emailEnMetadatos);

      if (usuarioEncontrado) {
        uid = usuarioEncontrado.uid;
        metodoBusqueda = "metadata_email";
      } else {
        usuarioEncontrado = await buscarUsuarioPorEmail(payerEmail);
        if (usuarioEncontrado) {
          uid = usuarioEncontrado.uid;
          metodoBusqueda = "payer_email";
        }
      }

      // 🛡️ EL SALVAVIDAS DEL MESÓN: Si el correo no existe, no rompemos con 404. 
      // Registramos en una colección de control rápido para que sepa Marcelo y respondemos 200 a MP.
      if (!uid) {
        console.warn(`⚠️ Enlace de pago ciego detectado. Correo pagador: ${payerEmail}. Enviando a cola manual.`);
        await registrarPagoHuerfanoEstatico(payment, "Link estático manual sin coincidencias de correo en la App.", planDetectado, diasASumar);
        return NextResponse.json({ received: true, status: "pending_manual_assignment" }, { status: 200 });
      }
    }

    if (metodoBusqueda === "external_reference" && (uid.length < 10 || uid.length > 128)) {
      console.error(`❌ Estructura de UID inválida detectada en pasarela: ${uid}`);
      return NextResponse.json({ error: "Invalid signature pattern" }, { status: 400 });
    }

    const userRef = db.collection("users").doc(uid);
    const discrepanciaRef = db.collection("pagos_discrepantes").doc(id.toString());

    // EJECUCIÓN TRANSACCIONAL ATÓMICA DE FIREBASE
    await db.runTransaction(async (transaction) => {
      const userSnapshot = await transaction.get(userRef);

      if (!userSnapshot.exists) {
        throw new Error(`UserNotFound: El documento del alumno ${uid} no existe.`);
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

      // Almacenamos diferencias de email para control interno de caja
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
          notas: "Asignación exitosa automática, pero las cuentas difieren."
        });
      }

      // Forzar mutación definitiva del estado Pro
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

      // Registro de cierre contra re-procesamientos
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

    console.log(`🎉 ENTRADA EXITOSA: El usuario ${uid} mutó a PRO de forma correcta.`);

    return NextResponse.json({
      success: true,
      message: `Usuario ${uid} configurado en modo PRO de forma consistente.`
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ EXCEPCIÓN DETECTADA EN EL PIPELINE DEL WEBHOOK:", error.message);

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
      console.error("Falla al escribir reporte en base de datos:", logError);
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