// app/api/webhook-mp/route.js
import { NextResponse } from "next/server";
import admin from "firebase-admin";

// Inicialización de Firebase Admin (idempotente)
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

// 🔥 CONFIGURACIÓN DE PLANES ACTUALIZADA (Precios Oficiales 2026)
const PLANES_PRECIOS = {
  sprint: { min: 3500, max: 4999, dias: 15, nombre: "Sprint 15 Días" },
  mensual: { min: 5000, max: 19999, dias: 30, nombre: "Mensual PRO" },
  anual: { min: 20000, max: Infinity, dias: 365, nombre: "Anual PRO" }
};

/**
 * Determina los días de suscripción según el monto pagado
 */
function determinarDiasPorMonto(monto) {
  if (monto >= PLANES_PRECIOS.anual.min) {
    return { dias: PLANES_PRECIOS.anual.dias, plan: "anual" };
  } else if (monto >= PLANES_PRECIOS.mensual.min) {
    return { dias: PLANES_PRECIOS.mensual.dias, plan: "mensual" };
  } else if (monto >= PLANES_PRECIOS.sprint.min) {
    return { dias: PLANES_PRECIOS.sprint.dias, plan: "sprint" };
  }
  return { dias: 30, plan: "mensual (por defecto)" }; // Fallback
}

/**
 * 🔥 NUEVA FUNCIÓN: Busca usuario por email en Firestore (fallback cuando no hay UID)
 */
async function buscarUsuarioPorEmail(email) {
  try {
    if (!email) return null;
    
    const snapshot = await db.collection("users")
      .where("email", "==", email.toLowerCase().trim())
      .limit(1)
      .get();
    
    if (!snapshot.empty) {
      const doc = snapshot.docs[0];
      return { uid: doc.id, data: doc.data() };
    }
    return null;
  } catch (error) {
    console.error("⚠️ Error al buscar usuario por email:", error);
    return null;
  }
}

/**
 * Guarda pago huérfano en colección especial para revisión manual
 */
async function guardarPagoHuerfano(payment, motivo) {
  try {
    await db.collection("pagos_huerfanos").add({
      paymentId: payment.id,
      status: payment.status,
      amount: payment.transaction_amount,
      payerEmail: payment.payer?.email || "N/A",
      externalReference: payment.external_reference || "N/A",
      metadata: payment.metadata || {},
      motivo: motivo,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      procesado: false,
      notas: "Requiere revisión manual"
    });
    console.log("💾 Pago huérfano guardado en colección 'pagos_huerfanos'");
  } catch (error) {
    console.error("❌ Error al guardar pago huérfano:", error);
  }
}

/**
 * Verifica si el pago ya fue procesado (evita duplicados)
 */
async function verificarPagoDuplicado(paymentId) {
  try {
    const snapshot = await db.collection("users")
      .where("paymentDetails.id", "==", paymentId)
      .limit(1)
      .get();
    
    return !snapshot.empty;
  } catch (error) {
    console.error("⚠️ Error al verificar duplicado:", error);
    return false;
  }
}

export async function POST(request) {
  try {
    console.log("🔔 === WEBHOOK RECIBIDO ===");
    console.log("⏰ Timestamp:", new Date().toISOString());

    // Mercado Pago envía el ID en los query params
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("data.id") || searchParams.get("id");
    const type = searchParams.get("type");

    console.log("📍 Query Params:", { id, type });

    // Validación inicial
    if (!id || type !== "payment") {
      console.log("⚠️ No es un pago o falta ID");
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // Obtener información del pago desde la API de Mercado Pago
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: {
        Authorization: `Bearer APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413`,
      },
    });

    if (!response.ok) {
      console.error(`❌ Error al obtener payment: ${response.status}`);
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    const payment = await response.json();
    console.log("💰 Payment data:", {
      id: payment.id,
      status: payment.status,
      external_reference: payment.external_reference,
      amount: payment.transaction_amount,
      payer_email: payment.payer?.email,
      description: payment.description
    });

    let uid = payment.external_reference;
    const status = payment.status;
    const monto = payment.transaction_amount || 0;
    const payerEmail = payment.payer?.email;

    // Solo procesar si está aprobado
    if (status !== "approved") {
      console.log(`⏳ Pago no aprobado aún. Status: ${status}`);
      return NextResponse.json({ received: true }, { status: 200 });
    }

    // 🔥 VALIDACIÓN 1: Verificar si el pago ya fue procesado
    const esDuplicado = await verificarPagoDuplicado(payment.id);
    if (esDuplicado) {
      console.log(`⚠️ Pago ${payment.id} ya fue procesado anteriormente. Ignorando duplicado.`);
      return NextResponse.json({ 
        received: true, 
        message: "Payment already processed" 
      }, { status: 200 });
    }

    // 🔥 VALIDACIÓN 2: Si no hay external_reference (UID), buscar por email del payer
    let metodoBusqueda = "external_reference";
    
    if (!uid || uid.trim() === "") {
      console.log("⚠️ Pago sin external_reference. Buscando usuario por email del payer...");
      metodoBusqueda = "email";
      
      if (payerEmail) {
        const usuarioPorEmail = await buscarUsuarioPorEmail(payerEmail);
        
        if (usuarioPorEmail) {
          uid = usuarioPorEmail.uid;
          console.log(`✅ Usuario encontrado por email: ${uid} (${payerEmail})`);
        } else {
          console.error(`❌ No se encontró usuario con email: ${payerEmail}`);
          await guardarPagoHuerfano(payment, `No se encontró usuario con email: ${payerEmail}`);
          return NextResponse.json(
            { error: "User not found by email" }, 
            { status: 404 }
          );
        }
      } else {
        console.error("❌ CRÍTICO: Pago sin external_reference Y sin email del payer");
        await guardarPagoHuerfano(payment, "Falta external_reference (UID) y email del payer");
        return NextResponse.json(
          { error: "Missing external_reference and payer email" }, 
          { status: 400 }
        );
      }
    }

    // 🔥 VALIDACIÓN 3: Validar formato del UID (solo si vino por external_reference)
    if (metodoBusqueda === "external_reference" && (uid.length < 10 || uid.length > 128)) {
      console.error(`❌ UID con formato inválido: ${uid}`);
      await guardarPagoHuerfano(payment, `UID con formato inválido: ${uid}`);
      return NextResponse.json(
        { error: "Invalid UID format" }, 
        { status: 400 }
      );
    }

    // Determinar días según el monto pagado
    const { dias: diasASumar, plan: planDetectado } = determinarDiasPorMonto(monto);
    console.log(`📊 Plan detectado: ${planDetectado} (${diasASumar} días) por monto $${monto}`);

    // Calcular fecha de expiración
    const proUntil = new Date();
    proUntil.setDate(proUntil.getDate() + diasASumar);

    // 🔥 VALIDACIÓN 4: Verificar si el usuario existe en Firestore
    const userDoc = await db.collection("users").doc(uid).get();

    if (!userDoc.exists) {
      console.error(`❌ CRÍTICO: El usuario ${uid} no existe en Firestore`);
      await guardarPagoHuerfano(payment, `Usuario no existe en Firestore: ${uid}`);
      return NextResponse.json(
        { error: "User not found in Firestore" }, 
        { status: 404 }
      );
    }

    const userData = userDoc.data();
    console.log(`👤 Usuario encontrado:`, {
      uid: uid,
      email: userData.email,
      isPro: userData.isPro,
      proUntil: userData.proUntil?.toDate()?.toISOString() || "N/A"
    });

    // 🔥 VALIDACIÓN 5: Verificar si el usuario ya tiene suscripción activa
    if (userData.isPro && userData.proUntil) {
      const fechaActual = new Date();
      const fechaProUntil = userData.proUntil.toDate();
      
      if (fechaProUntil > fechaActual) {
        console.log(`ℹ️ Usuario ya tiene suscripción activa hasta ${fechaProUntil.toISOString()}`);
        console.log(`🔄 Sumando ${diasASumar} días adicionales a la suscripción existente`);
        
        // Sumar días a la fecha actual de expiración (no desde hoy)
        proUntil.setTime(fechaProUntil.getTime());
        proUntil.setDate(proUntil.getDate() + diasASumar);
      }
    }

    // Actualizar usuario en Firestore
    await db.collection("users").doc(uid).update({
      isPro: true,
      proUntil: admin.firestore.Timestamp.fromDate(proUntil),
      lastPayment: admin.firestore.FieldValue.serverTimestamp(),
      activatedBy: `MercadoPago-Automático-via-${metodoBusqueda}`,
      planActual: planDetectado,
      paymentDetails: {
        id: payment.id,
        amount: monto,
        dias: diasASumar,
        plan: planDetectado,
        payerEmail: payerEmail || "N/A",
        status: payment.status,
        metodoBusqueda: metodoBusqueda,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      },
      // Historial de pagos (array)
      historialPagos: admin.firestore.FieldValue.arrayUnion({
        id: payment.id,
        amount: monto,
        dias: diasASumar,
        plan: planDetectado,
        metodoBusqueda: metodoBusqueda,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
      })
    });

    console.log(`🎉 Usuario ${uid} activado exitosamente hasta ${proUntil.toISOString()}`);
    console.log(`📧 Email de pago: ${payerEmail || "N/A"}`);
    console.log(`💳 Monto: $${monto} CLP`);
    console.log(`🔍 Método de búsqueda: ${metodoBusqueda}`);

    return NextResponse.json({
      success: true,
      message: `Usuario ${uid} activado por ${diasASumar} días`,
      plan: planDetectado,
      proUntil: proUntil.toISOString(),
      metodoBusqueda: metodoBusqueda
    }, { status: 200 });

  } catch (error) {
    console.error("❌ ERROR CRÍTICO EN WEBHOOK:", error);
    console.error("Stack trace:", error.stack);
    
    // Intentar guardar el error en colección de errores para debugging
    try {
      await db.collection("webhook_errors").add({
        error: error.message,
        stack: error.stack,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        url: request.url
      });
    } catch (logError) {
      console.error("No se pudo guardar el error en Firestore:", logError);
    }
    
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Manejar GET por si Mercado Pago hace verificaciones
export async function GET(request) {
  console.log("🔍 GET request al webhook (posible verificación)");
  return NextResponse.json({ 
    status: "ok", 
    message: "Webhook activo",
    timestamp: new Date().toISOString()
  }, { status: 200 });
}