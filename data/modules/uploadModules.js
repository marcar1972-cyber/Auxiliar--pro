const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Inicialización de Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'TU_PROJECT_ID.appspot.com' // Cambia esto por tu bucket real
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

async function uploadModule(modFolder) {
  const modId = path.basename(modFolder);
  const files = fs.readdirSync(modFolder);

  for (const file of files) {
    const filePath = path.join(modFolder, file);
    const destination = `modules/${modId}/${file}`;

    console.log(`🚀 Procesando: ${file}...`);

    // 1. Subir a Storage
    await bucket.upload(filePath, {
      destination: destination,
      metadata: { contentType: 'application/pdf' } // Ajusta según el tipo de archivo
    });

    // 2. Registrar en Firestore
    await db.collection('modules').doc(`${modId}-${file.split('.')[0]}`).set({
      title: `Contenido de ${modId} - ${file}`,
      storagePath: destination,
      isPro: true,
      modId: modId,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`✅ ${file} cargado y registrado.`);
  }
}

async function run() {
  const baseDir = path.join(__dirname, 'data', 'modules');
  const modFolders = fs.readdirSync(baseDir).map(name => path.join(baseDir, name));

  for (const folder of modFolders) {
    if (fs.lstatSync(folder).isDirectory()) {
      await uploadModule(folder);
    }
  }
  console.log('🎉 Migración completada con éxito.');
}

run().catch(console.error);