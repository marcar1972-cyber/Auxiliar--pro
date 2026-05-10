import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  const email = searchParams.get("email");
  const plan = searchParams.get("plan");

  if (!uid || !email) {
    return NextResponse.json({ error: "Faltan datos de usuario" }, { status: 400 });
  }

  // Configuración del plan según lo que pinchó el alumno
  let nombrePlan = "";
  let precio = 0;

  if (plan === "anual") {
    nombrePlan = "Plan Anual AuxiliarPro PRO";
    precio = 49990;
  } else if (plan === "sprint") {
    nombrePlan = "Pase Sprint Final - AuxiliarPro (15 Días)";
    precio = 3990;
  } else {
    nombrePlan = "Plan Mensual AuxiliarPro PRO";
    precio = 5990;
  }

  try {
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413`,
      },
      body: JSON.stringify({
        items: [
          {
            title: nombrePlan,
            quantity: 1,
            unit_price: precio,
            currency_id: "CLP",
          },
        ],
        payer: {
          email: email,
        },
        // 🔥 ESTO ES LO QUE REVENIU PERDÍA Y MP NO:
        external_reference: uid, 
        
        back_urls: {
          success: "https://www.auxiliaresdefarmacia.cl/success",
          failure: "https://www.auxiliaresdefarmacia.cl/planes",
          pending: "https://www.auxiliaresdefarmacia.cl/planes",
        },
        auto_return: "approved",
        notification_url: "https://www.auxiliaresdefarmacia.cl/api/webhook-mp",
      }),
    });

    const data = await response.json();

    // Redirigimos al alumno directamente al Checkout Seguro de Mercado Pago
    if (data.init_point) {
      return NextResponse.redirect(data.init_point);
    } else {
      throw new Error("No se pudo generar el punto de inicio de pago");
    }
  } catch (error) {
    console.error("❌ Error creando preferencia:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}