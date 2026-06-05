// app/api/create-preference/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  const email = searchParams.get("email");
  const plan = searchParams.get("plan");

  console.log("💳 === CREANDO PREFERENCIA DE PAGO ===");
  console.log("📍 Params recibidos:", { uid, email, plan });

  // Validación de datos obligatorios
  if (!uid || !email) {
    console.error("❌ Faltan datos obligatorios:", { uid: !!uid, email: !!email });
    return NextResponse.json(
      { error: "Faltan datos de usuario (uid o email)" }, 
      { status: 400 }
    );
  }

  // Validación de formato de UID (Firebase UIDs tienen formato específico)
  if (uid.length < 10 || uid.length > 128) {
    console.error("❌ UID con formato inválido:", uid);
    return NextResponse.json(
      { error: "UID de usuario inválido" }, 
      { status: 400 }
    );
  }

  const TOKEN = "APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413";

  // Configuración de planes (precios según tus links de Mercado Pago)
  const planesConfig = {
    sprint: {
      titulo: "Pase Sprint Final - AuxiliarPro (15 Días)",
      descripcion: "Pase Sprint Final 15 días",
      precio: 2990,
      dias: 15
    },
    mensual: {
      titulo: "Suscripción Mensual PRO - AuxiliarPro",
      descripcion: "Acceso completo por 30 días",
      precio: 3990,
      dias: 30
    },
    anual: {
      titulo: "Suscripción Anual PRO - AuxiliarPro",
      descripcion: "Acceso completo por 365 días",
      precio: 19990,
      dias: 365
    }
  };

  const planConfig = planesConfig[plan];

  if (!planConfig) {
    console.error("❌ Plan no válido:", plan);
    return NextResponse.json({ error: "Plan no válido" }, { status: 400 });
  }

  try {
    console.log(`🚀 Creando preferencia para plan: ${plan} ($${planConfig.precio})`);

    // Crear preferencia de pago dinámica para TODOS los planes
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        items: [
          {
            title: planConfig.titulo,
            description: planConfig.descripcion,
            quantity: 1,
            unit_price: planConfig.precio,
            currency_id: "CLP",
          },
        ],
        payer: { 
          email: email,
          name: "Usuario",
          surname: "AuxiliarPro"
        },
        // 🔥 BLINDAJE: UID como external_reference (identificador único e inmutable)
        external_reference: uid,
        // Metadata adicional para debugging y trazabilidad
        metadata: {
          uid: uid,
          email: email,
          plan: plan,
          precio: planConfig.precio,
          dias: planConfig.dias,
          timestamp: new Date().toISOString()
        },
        statement_descriptor: "AUXILIARPRO",
        back_urls: {
          success: "https://www.auxiliaresdefarmacia.cl/success",
          failure: "https://www.auxiliaresdefarmacia.cl/planes",
          pending: "https://www.auxiliaresdefarmacia.cl/planes",
        },
        auto_return: "approved",
        notification_url: "https://www.auxiliaresdefarmacia.cl/api/webhook-mp",
        // Expiración de la preferencia (24 horas para seguridad)
        expires: true,
        expiration_date_to: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
      }),
    });

    const data = await response.json();

    if (data && data.init_point) {
      console.log(`✅ Preferencia creada exitosamente. ID: ${data.id}`);
      return NextResponse.redirect(data.init_point);
    } else {
      console.error("❌ Error de MP:", data);
      return NextResponse.json(
        { error: "Error al crear preferencia", details: data }, 
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("❌ Error en checkout:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}