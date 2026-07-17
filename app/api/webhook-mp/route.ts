import { NextResponse } from "next/server";
import admin from "firebase-admin";

export const runtime = "nodejs";

// 1. Inicialización segura. La fallbackKey se eliminó por seguridad. 
// Si las variables están en Vercel (como confirmaste), esto funcionará perfectamente.
if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Faltan variables de entorno críticas de Firebase Admin en Vercel.");
  }

  admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey }),
  });
}

const db = admin.firestore();
const TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;

if (!TOKEN) {
  console.warn("⚠️ MERCADO_PAGO_ACCESS_TOKEN no está definido en las variables de entorno.");
}

// 2. MATRIZ DE PRECIOS OFICIALES DE AUXILIARPRO APP CALIBRADA (Intacta)
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

    if (type === "payment" && id) {
      // FIX 3: AbortController para evitar fugas de memoria (corta la conexión de red real)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      let payment;
      try {
        const res = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
          headers: { Authorization: `Bearer ${TOKEN}` },
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        
        if (!res.ok) throw new Error("Payment not found in MP API");
        payment = await res.json();
      } catch (fetchError: any) {
        clearTimeout(timeoutId);
        throw new Error(`Fallo al consultar MP: ${fetchError.message}`);
      }

      const status = payment.status;
      const monto = payment.transaction_amount || 0;
      const mpPayerEmail = payment.payer?.email ? payment.payer.email.toLowerCase().trim() : "";
      
      let uid = payment.external_reference || payment.metadata?.uid || payment.metadata?.external_reference;

      if (status === "approved") {
        const logRef = db.collection("payments_log").doc(id.toString());
        const { dias: diasASumar, plan: planDetectado } = determinarDiasPorMonto(monto);

        // Lógica de fallback de búsqueda por email (Intacta)
        let metodoBusqueda = "external_reference";
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
          
          // FIX 2: Transacción atómica que INCLUYE la verificación de duplicados
          // Esto garantiza 100% de idempotencia, evitando race conditions.
          await db.runTransaction(async (transaction) => {
            // 1. Verificar duplicado DENTRO de la transacción
            const logDoc = await transaction.get(logRef);
            if (logDoc.exists) {
              console.log(`✅ Idempotencia: Pago ${id} ya fue procesado anteriormente.`);
              return; // Salir sin hacer nada, ya está procesado
            }

            // 2. Actualizar usuario
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

            // 3. Registrar el log (esto bloquea futuros duplicados en esta misma transacción)
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
          // Fallback de pagos pendientes
          await db.collection("pagos_pendientes_asignacion").doc(id.toString()).set({
            paymentId: id,
            amount: monto,
            payerEmail: mpPayerEmail || "N/A",
            plan: planDetectado,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            procesado: false,
            notas: "Recaudado. UID ausente y correo sin coincidencias en base de datos."
          });
          console.warn(`⚠️ Pago huérfano registrado: ${id}`);
        }
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });

  } catch (error: any) {
    console.error("❌ Error crítico mitigado en pipeline de webhook:", error.message);
    
    // Registro de auditoría en caso de fallo
    try {
      await db.collection("webhook_audit_errors").add({
        paymentId: id || "unknown",
        error: error.message,
        type,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (logError) {
      console.error("Fallo al registrar error de auditoría:", logError);
    }

    // Devolvemos 200 OK para que MP no siga reintentando infinitamente
    return NextResponse.json({ received: true, error: "Internal processing error logged" }, { status: 200 });
  }
}

export async function GET(request: Request) {
  return NextResponse.json({ status: "online", route: "webhook-mp", integration: "Checkout Pro Dinámico" }, { status: 200 });
}