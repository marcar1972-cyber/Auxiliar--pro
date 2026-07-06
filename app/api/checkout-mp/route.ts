// app/api/checkout-mp/route.ts
import { NextResponse } from "next/server";
import admin from "firebase-admin";

export const runtime = "nodejs";

// Inicialización inteligente y robusta (Híbrida para Local y Producción)
if (!admin.apps.length) {
  const projectId = process.env.FIREBASE_PROJECT_ID || "auxiliar-pro";
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk-fbsvc@auxiliar-pro.iam.gserviceaccount.com";
  
  // Clave privada de respaldo directa para evitar quiebres en entornos de desarrollo locales
  const fallbackKey = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdlXNjBN7KQ3UT\n5AuSGzSR8a7FtncW/fHq91flqbKSynkuifUrikUn/7rzaxahtgF+P9eWovywEtUg\noI1PwSBkA55fXUwUUWqz156AIJfz8c0VtBLV8GEFLBlY2Mbr1wSj7N3n20+AzXOl\nGiZ4ZUONIFuGttoYjahuei1P6Ku3bWk8I4AOuMTxzRvLTCIgY5UBvBQLyw0aJBrW\nDt/KQbSV5bLymUCmIdNPEjbPQaI8gCsqPXdb8OARtrvFoMXPQkXbsq5BnbAzyqv7\nJAJhF18FZ7gkmLTgX53TUXu/WLkiEc6OJSeSu3bDbGXh+DYLUvH4x8pXkHwoSy2a\nQ5hQdTFlAgMBAAECggEADnPG7dVkA2PVaHoZL5CsLRhfwYU+/c5Tcgu2NXtvQ7Qr\nEgAYCqK3PfhfsnRnUnRpRaVgRdHz38gSYNgoraBWMqX8T920HQbshMrpH/IdTYOn\nHe7ybUmK9Fj7iCD1eWqyY8BVB68e5v6wtPslfRQ4ckh97Gh3rxnK0TsGTdZWbU+I\nJxe9kq2nIq+4CJaTHcNRjIyID8O64WwJw8M69vBCQwQEPxa42V0ypOI/jovZutRh\nrs4KPcAZrdjZ5fa7jQ6J77PbP8p9A1F3060hu5cySTQf7wFfqOHs2q4LyyoLfDaa\nMjl0PVF0G381h4LxbnGPjFaPo0lw6cQGh08UYAAusQKBgQDMH0e64+xDWta7r+2S\ne2j7/vZnMci1iF0eMij3T2kam7s5OE++l8Lpp1lMreQEKYDEOWIZ1HyHH05tpmrr\na+b/9YxLkOgQHL1I/9PFgF+eLX9rhG/nf7STqPLRgHS2/SfvA4zDTxDpY7a6J4r6\nI/UyB5gGhlWes4QwjCuqxQudfQKBgQDFokL2v3UCNBdKLiBpFY18EzsIedhRmZ4i\nEN7JGoO08pgNy3P/D3RxVDQoTWN7wjIWEl4OrcBmEUkTHk9zSBKMGhQdlAjsMGqt\ttBRxPEBUiS3+2Ms4ZpW2VvfOYEouN09Eg27zeAD0G7KlSZR8LhywzhCRM/n3qa3p\nFh4TG3/ICQKBgBzg8A0I4gxFdcvn//yRaTD9yW6gJH1KZaI4BoO2wG/7SGm4BdA5\nOGJGQuQOVgwgsw8P70koPtX/H+Fzgfz8rxnXa5nlTm+5IS6KwzNWDjEazsQvYIWo\nE6wwYuow+lJJTrUKE4guT341lUyQ+6CYJcCGQoPpzYM+cp1Lt4HZjuMhAoGAEJeE\nw65jJmI1KlchBXF3xVjf9eA01vTsn7OG4J9HO2O6fD3+aQVlIzaMgm2s0nEFP3Ef\nUGAp7Oe6mM5MoUMFu5lc4vbQoPOXoSmjJbaHOBGkOOb+eKe0HfDDMSJIWATwtLHM\nGMiUW+oPX20D+EDuy7EhFu+kJrSqEw12TOhcG/ECgYA6rsak+ngB2LjwwrcMe7Uk\nH54Xiiq6g7SxaCt9KdDqISTaR+CIRO5zbCDpUbvqlEog8ugTrfws0L2x/c2+acAK\n9pUz8bx3lMq7PsPtbczAGfAXubp/azLd8UR0eLDXUzzwUrbRTBAaG0FZq3xDXsgC\nQg3KG/E+3cgEmPDIKfPcSg==\n-----END PRIVATE KEY-----\n";

  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || fallbackKey).replace(/\\n/g, "\n");

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

// Token de respaldo local si no detecta la variable de entorno de Vercel
const MERCADO_PAGO_ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN || "APP_USR-6296117002447975-040718-d1a2cd392dac4324a4875784375a14d9-3319774413";

const PLANES = {
  sprint: { monto: 3990, dias: 15, nombre: "Sprint 15 Días" },
  mensual: { monto: 5990, dias: 30, nombre: "Mensual PRO" },
  anual: { monto: 49990, dias: 365, nombre: "Anual PRO" },
};

export async function POST(request: Request) {
  try {
    const { planKey, uid, email } = await request.json();

    if (!planKey || !uid || !email) {
      return NextResponse.json({ error: "Faltan parámetros obligatorios." }, { status: 400 });
    }

    const planSeleccionado = PLANES[planKey as keyof typeof PLANES];
    if (!planSeleccionado) {
      return NextResponse.json({ error: "El plan no es válido." }, { status: 400 });
    }

    const preferenceBody = {
      items: [
        {
          id: planKey,
          title: `AuxiliarPro - ${planSeleccionado.nombre}`,
          description: `Acceso Premium por ${planSeleccionado.dias} días`,
          quantity: 1,
          currency_id: "CLP",
          unit_price: planSeleccionado.monto,
        },
      ],
      payer: {
        email: email.trim().toLowerCase(),
      },
      external_reference: uid.trim(),
      metadata: {
        uid: uid.trim(),
        plan_key: planKey,
      },
      back_urls: {
        success: "https://www.auxiliaresdefarmacia.cl/dashboard",
        pending: "https://www.auxiliaresdefarmacia.cl/dashboard",
        failure: "https://www.auxiliaresdefarmacia.cl/dashboard",
      },
      auto_return: "approved",
      notification_url: "https://www.auxiliaresdefarmacia.cl/api/webhook-mp",
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferenceBody),
    });

    if (!response.ok) {
      throw new Error("Error con la API de Mercado Pago.");
    }

    const preference = await response.json();

    return NextResponse.json({
      success: true,
      initPoint: preference.init_point,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}