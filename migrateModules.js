const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// 1. Configuración de Llaves (Ruta hacia tu carpeta scripts)
const serviceAccount = require('./scripts/serviceAccountKey.json');

// 2. Inicialización
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // AQUÍ ESTÁ TU BUCKET REAL CORREGIDO SEGÚN TU CONSOLA
  storageBucket: 'auxiliar-pro.firebasestorage.app' 
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

// 3. Ruta exacta de tus módulos en Windows
const BASE_PATH = path.join('C:', 'Dev', 'Auxiliar--pro', 'data', 'modules');

async function processModules() {
  console.log("🚀 Iniciando migración masiva desde:", BASE_PATH);

  try {
    const modules = fs.readdirSync(BASE_PATH);

    for (const modFolder of modules) {
      const modFolderPath = path.join(BASE_PATH, modFolder);
      
      // Procesar solo si es una carpeta (ej: mod-1, mod-2)
      if (fs.lstatSync(modFolderPath).isDirectory()) {
        console.log(`\n📂 Procesando: ${modFolder}`);
        const files = fs.readdirSync(modFolderPath);

        for (const file of files) {
          if (file.endsWith('.pdf')) {
            const filePath = path.join(modFolderPath, file);
            const fileName = path.parse(file).name;
            const destination = `modules/${modFolder}/${file}`;

            // A. Subir a Firebase Storage
            console.log(`   ⬆️ Subiendo: ${file}...`);
            await bucket.upload(filePath, {
              destination: destination,
              metadata: { contentType: 'application/pdf' }
            });

            // B. Registrar en Firestore (Actualiza si ya existe)
            const docId = `${modFolder}-${fileName}`;
            await db.collection('modules').doc(docId).set({
              id: docId,
              title: fileName.replace(/-/g, ' '),
              storagePath: destination,
              modId: modFolder,
              isPro: true,
              createdAt: admin.firestore.FieldValue.serverTimestamp()
            });

            console.log(`   ✅ Cargado: ${docId}`);
          }
        }
      }
    }
    console.log('\n🎉 ¡Migración completada con éxito!');
  } catch (error) {
    console.error("❌ Error en la migración:", error);
  }
}

processModules();