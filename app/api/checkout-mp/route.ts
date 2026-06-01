import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  const email = searchParams.get("email");
  const plan = searchParams.get("plan");

  if (!uid || !email) {
    return NextResponse.json({ error: "Faltan datos de usuario" }, { status: 400 });
  }

  // 🚀 CTO FIX: Redirigimos a los enlaces directos pero anexando la referencia externa a la URL de Mercado Pago
  // Esto permite que cuando el usuario pague, MP retorne el parámetro external_reference a tu Webhook.
  
  let redirectUrl = "";

  if (plan === "anual") {
    redirectUrl = `https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=2c643011caec42a0a74d4b139d381f9e&external_reference=${uid}`;
  } else if (plan === "mensual") {
    redirectUrl = `https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=a62216d952f8490c8377e9fb7c1ee4da&external_reference=${uid}`;
  } else if (plan === "sprint") {
    // Para el pase fijo (Payment Normal), creamos la preferencia on the fly con precio Cyber
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
              title: "Pase Sprint Final - AuxiliarPro (15 Días)",
              description: "Pase Sprint Final", 
              quantity: 1,
              unit_price: 2990, // Precio Cyber Oferta
              currency_id: "CLP",
            },
          ],
          payer: { email: email },
          external_reference: uid, 
          statement_descriptor: "AUXILIARPRO", 
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
      if (data && data.init_point) {
        return NextResponse.redirect(data.init_point);
      } else {
         return NextResponse.json({ error: "Error de MP" }, { status: 500 });
      }
    } catch (e) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    }
  }

  // Redirección para suscripciones recurrentes
  return NextResponse.redirect(redirectUrl);
}