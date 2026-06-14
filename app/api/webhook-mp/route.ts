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
const TOKEN = "APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413";

// Matriz de precios oficiales e inmutables del ecosistema 2026
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

export async function POST(request: Request) {
  const timestampEntrada = new Date();
  console.log("🔔 === WEBHOOK INBOUND MERCADO PAGO ===");

  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get("data.id") || searchParams.get("id");
    let type = searchParams.get("type");

    // Lector tolerante de ráfagas asíncronas en el Body JSON
    if (!id || !type) {
      try {
        const body = await request.json();
        id = body.data?.id || body.id || id;
        type = body.type || body.action || type;
      } catch {
        // Petición sin body ejecutable
      }
    }

    // El parámetro del inyector del frontend también puede viajar en la URL de la notificación
    const queryPayerEmail = searchParams.get("payer_email");
    const queryUid = searchParams.get("external_reference");

    const esTipoPayment = type && (type.includes("payment") || type === "payment");

    if (!id || !esTipoPayment) {
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // 1. Consulta directa de validación a la API oficial de Mercado Pago
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    });

    if (!response.ok) {
      console.error(`❌ Falló la validación HTTP para el ID ${id} en la API de MP.`);
      return NextResponse.json({ error: "Payment not found in pasarela" }, { status: 404 });
    }

    const payment = await response.json();
    const status = payment.status;
    const monto = payment.transaction_amount || 0;
    const mpPayerEmail = payment.payer?.email ? payment.payer.email.toLowerCase().trim() : "";
    
    // Extractor de ID en cascada descendente de seguridad
    let uid = payment.external_reference || queryUid || payment.metadata?.uid || payment.metadata?.user_id;

    if (status !== "approved") {
      console.log(`⏳ Pago ID ${id} retenido. Estatus actual: '${status}'.`);
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // 🛡️ CONTROL DE IDEMPOTENCIA: Bloqueo de duplicados por ID único de documento
    const logRef = db.collection("payments_log").doc(id.toString());
    const logDoc = await logRef.get();

    if (logDoc.exists) {
      console.log(`⚠️ Operación clonada interceptada con éxito para el ID de pago ${id}.`);
      return NextResponse.json({ received: true, message: "Payment already consolidated" }, { status: 200 });
    }

    let metodoBusqueda = "external_reference";
    const { dias: diasASumar, plan: planDetectado } = determinarDiasPorMonto(monto);

    // 🚀 MOTOR DE CONTINGENCIA PARA LINKS ESTÁTICOS MANUALES
    if (!uid || uid.trim() === "") {
      console.log("⚠️ Transacción sin UID nativo. Activando rastreo cruzado por emails...");
      
      // Intentamos cruzar con el correo inyectado por el frontend en la URL
      let usuarioEncontrado = await buscarUsuarioPorEmail(queryPayerEmail);
      
      if (usuarioEncontrado) {
        uid = usuarioEncontrado.uid;
        metodoBusqueda = "query_param_email";
      } else {
        // Intentamos con los metadatos internos
        const emailEnMetadatos = payment.metadata?.email || payment.metadata?.user_email;
        usuarioEncontrado = await buscarUsuarioPorEmail(emailEnMetadatos);

        if (usuarioEncontrado) {
          uid = usuarioEncontrado.uid;
          metodoBusqueda = "metadata_email";
        } else {
          // Último recurso: El correo pagador de la cuenta de Mercado Pago
          usuarioEncontrado = await buscarUsuarioPorEmail(mpPayerEmail);
          if (usuarioEncontrado) {
            uid = usuarioEncontrado.uid;
            metodoBusqueda = "mp_payer_email";
          }
        }
      }

      // Salvavidas absoluto: Si nadie coincide, enviamos a cola manual sin reventar la pasarela
      if (!uid) {
        console.error(`❌ Imposible asociar pago ${id}. Correo MP: ${mpPayerEmail}. Almacenando en cola manual.`);
        await db.collection("pagos_pendientes_asignacion").doc(id.toString()).set({
          paymentId: id,
          amount: monto,
          payerEmail: mpPayerEmail || "N/A",
          queryEmail: queryPayerEmail || "N/A",
          plan: planDetectado,
          diasCalculados: diasASumar,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          procesado: false,
          notas: "El correo pagador no coincide con ningún alumno de la plataforma. Asignar manualmente."
        });
        return NextResponse.json({ received: true, status: "queued_for_manual_check" }, { status: 200 });
      }
    }

    const userRef = db.collection("users").doc(uid);
    const discrepanciaRef = db.collection("pagos_discrepantes").doc(id.toString());

    // 🔥 EJECUCIÓN ATÓMICA TRANSACCIONAL DE FIREBASE (Garantiza el cambio de false a true)
    await db.runTransaction(async (transaction) => {
      const userSnapshot = await transaction.get(userRef);

      if (!userSnapshot.exists) {
        throw new Error(`UserNotFound: El perfil del alumno ${uid} no existe en Firestore.`);
      }

      const userData = userSnapshot.data() || {};
      const userEmailApp = userData.email ? userData.email.toLowerCase().trim() : "";
      let proUntilBase = new Date();

      // Validación reactiva de acumulación de suscripciones vigentes
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

      // Si el correo que pagó es diferente al de la app, registramos la discrepancia para auditoría rápida
      if (mpPayerEmail && userEmailApp && mpPayerEmail !== userEmailApp) {
        transaction.set(discrepancyRef, {
          paymentId: id,
          uid: uid,
          emailEnApp: userEmailApp,
          emailEnMercadoPago: mpPayerEmail,
          monto: monto,
          plan: planDetectado,
          diasAsignados: diasASumar,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          revisado: false,
          notas: "Usuario activado con éxito. Los correos difieren."
        });
      }

      // MUTACIÓN TOTAL DEL ESTADO DEL USUARIO
      transaction.update(userRef, {
        isPro: true,
        proUntil: admin.firestore.Timestamp.fromDate(proUntilBase),
        lastPayment: admin.firestore.FieldValue.serverTimestamp(),
        activatedBy: `MercadoPago-Automático-via-${metodoBusqueda}`,
        planActual: planDetectado,
        paymentDetails: {
          id: id,
          amount: monto,
          dias: diasASumar,
          plan: planDetectado,
          payerEmail: mpPayerEmail || "N/A",
          status: status,
          timestamp: admin.firestore.FieldValue.serverTimestamp()
        },
        historialPagos: admin.firestore.FieldValue.arrayUnion({
          id: id,
          amount: monto,
          dias: diasASumar,
          plan: planDetectado,
          metodoBusqueda: metodoBusqueda,
          timestamp: admin.firestore.FieldValue.serverTimestamp()
        })
      });

      // Escribir el recibo final (Candado definitivo de control)
      transaction.set(logRef, {
        transactionId: id,
        uid: uid,
        auxiliarProEmail: userEmailApp || "No registrado",
        mercadoPagoEmail: mpPayerEmail || "No registrado en MP",
        plan: planDetectado,
        daysAdded: diasASumar,
        amount: monto,
        status: status,
        metodoBusqueda: metodoBusqueda,
        createdAt: admin.firestore.FieldValue.serverTimestamp()
      });
    });

    console.log(`🎉 EXITO: El alumno ${uid} ha pasado a estado PRO de forma automática.`);

    return NextResponse.json({
      success: true,
      message: `Usuario ${uid} mutado a PRO de forma consistente por ${diasASumar} días.`
    }, { status: 200 });

  } catch (error: any) {
    console.error("❌ ERROR EXCEPCIONAL EN EL PIPELINE DEL WEBHOOK:", error.message);

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
      console.error("Falla en cascada al escribir log en Firebase:", logError);
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
    message: "AuxiliarPro Webhook Gate v4.0 operativo",
    timestamp: new Date().toISOString()
  }, { status: 200 });
}