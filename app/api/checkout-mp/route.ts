import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  const email = searchParams.get("email");
  const plan = searchParams.get("plan");

  if (!uid || !email) {
    return NextResponse.json({ error: "Faltan datos de usuario" }, { status: 400 });
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
    return NextResponse.json({ error: "Plan no válido" }, { status: 400 });
  }

  try {
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
          email: email 
        },
        external_reference: uid, // 🔥 CLAVE: Esto permite que el webhook identifique al usuario
        statement_descriptor: "AUXILIARPRO",
        back_urls: {
          success: "https://www.auxiliaresdefarmacia.cl/success",
          failure: "https://www.auxiliaresdefarmacia.cl/planes",
          pending: "https://www.auxiliaresdefarmacia.cl/planes",
        },
        auto_return: "approved",
        notification_url: "https://www.auxiliaresdefarmacia.cl/api/webhook-mp", // 🔥 Webhook para notificaciones
      }),
    });

    const data = await response.json();

    if (data && data.init_point) {
      return NextResponse.redirect(data.init_point);
    } else {
      console.error("Error de MP:", data);
      return NextResponse.json({ error: "Error al crear preferencia", details: data }, { status: 500 });
    }
  } catch (e) {
    console.error("Error en checkout:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}