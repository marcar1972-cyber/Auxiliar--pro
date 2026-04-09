import { NextResponse } from "next/server";
import admin from "firebase-admin";

// Inicialización del Admin SDK con la Llave Maestra
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: "auxiliar-pro",
        clientEmail: "firebase-adminsdk-fbsvc@auxiliar-pro.iam.gserviceaccount.com",
        // La llave privada con el fix de saltos de línea
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEe/MEzeDj06yP\nCNwGr4EiAiCnAgFknYwHiafozdBbxWD1r3udHbKNiLVKzgtbHLa84x57AaLlHK/h\ngoHTSXpenLcv7FYiB9XW40u1Fc6m6mWErS3IEwUdoH1RpdL7j/oMmloP0ytlBdND\n/HmO8/BBq56925jxTNuEH/Y+Y6+5jJU+mFSglqk3zNTsbia7TRvGVn/hUtTJ8j6r\nTbcX5kUKFYl0fkMt0tnz76j+7uzpQQ3s3UjItvjIFv4OyCJJoZywmZuOKU1uHsmJ\nWg4ZplcAbJ0Vtts7e1ji2608udMW+GBQFceZ6PMVlmme547c7NgPiinEgH6jQtjK\nk9047Yr3AgMBAAECggEAPoFR237lIoT1maEPYb8WPOvhWE+ugsQNxl4XwNssg+1D\n/ZSAJgjLAvRw++WVPjxhs7Aqw6XPHMSl/P7n7v+qgounSQMNmZDViaFQNcDEt1vM\nxMrUzBek4npqM32loyp3uOena+5ZGS+juDaKsxvOHA4NF0fTHTw+fwct7kYHImbU\nMek5ixzi9NKTmO8cqtH3DwO2EPnIe9RK1xVUNcje8Srx9K55vDLUQ6YC9FK1YPgy\nXTZ9qrGGNzJERy8hfsmqQ20umT2K6CqJ8jAefVAcbGUsxqvrnDpOSnE/RIt1aTx9\nu38TB6PqVMaJibOzuxw+6G1bO3cuAuEADaEmz8GW2QKBgQDsxrhAwucaQlbxlo8Z\nTZFGpvlMKF6yGrQHVN+FzcsraaJNWY3CzgmZ/OxR0GPYcdso0WxIRZQaWhVAloTx\n6Ph8DMnwFlZdSPJSiHsZVYCCY/qZYPwwzRKxU0CSowGWKv7h6PicEhoRIA14ACAV\nWCH+xtZ6+wAYVwtOpNXmjGQ8nwKBgQDUb8c7QlmyPXoOyOYi3/bVuwdPG87eeRU1\nSd3sGHd9uaXtaDyrZEeL7fjm709tAJwF6WyoHO9rtChEF4RQngRkGAI1yVfKIG2y\nLGSsQ+wlj40YBghVX1ZYol4pDKFn1a7i9loADDbDjDTuywk/kFjmG3sivyIKm/gk\nyD2ZV4q6qQKBgBWm4miBqjJ7iInVE8bjkfpdAIUXV/l/eaEGAN6yf/a7VS0vmEgN\nIVGkkFO287pyRvFHnVhKjI2QWUsruIKKpFZrsPe0gzdKmWY0ttUNPZAu5laqSMWJ\nq0Dt9QSzxUxfKCmubTWQbjPMs46arFRnV8x9kFV0qICRTSZm6myHwA7PAoGBAMLT\nYJxwVWKqDu7QQH9rdyy8wg9DKY3O7ixY+jY0miGryQjZuApXhWZHcSYaA3WsQWsK\nkKP9JXZZWzRXfPmSceR6QEyjwueUpgXpwMpb4I7yACwwHCRvsvjGsCRleQGJb0Kn\nPBMfIHpmc4Usn+azs1QVj/Bl6gpg0EqrehLPvmNBAoGBAKvWOV/fb8JtwR2xxfWx\nfU5rH+xik4ZvJuv9sqQdN73Y8FuX+o40gYUk0p6Tq+KCktjW/VBoXYc9pZdThhEc\nvNkRj4bbEm84DARpOsWMJIWnKXGXCsHCkKuyA35CQyMWfN2oe4YTDGnxM35khI3H\n22YlQbKMpWCBoKw7OGcGGhJQ\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
      }),
    });
  } catch (error) {
    console.error("❌ Error inicializando Admin SDK:", error);
  }
}

const db = admin.firestore();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("🚀 Webhook Admin Recibido:", JSON.stringify(body, null, 2));

    const uid = body.external_id || body.data?.external_id || body.customer?.external_id;
    const status = body.status || body.data?.status;

    if (uid) {
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 30);

      // Usamos el SDK de Admin para actualizar (Ignora las Rules)
      await db.collection("users").doc(uid).update({
        isPro: true,
        proUntil: admin.firestore.Timestamp.fromDate(expirationDate),
        lastPaymentDate: admin.firestore.FieldValue.serverTimestamp(),
        subscriptionStatus: status || "active",
        activatedBy: "Reveniu-Admin-SDK"
      });

      console.log(`✅ ACTIVACIÓN EXITOSA: Usuario ${uid} es ahora PRO.`);
      
      return NextResponse.json({ 
        message: "Activación exitosa con Admin SDK", 
        uid: uid 
      }, { status: 200 });
    }

    return NextResponse.json({ error: "UID no encontrado" }, { status: 400 });

  } catch (error: any) {
    console.error("❌ Error Crítico:", error.message);
    return NextResponse.json({ error: "Error en el servidor", details: error.message }, { status: 500 });
  }
}