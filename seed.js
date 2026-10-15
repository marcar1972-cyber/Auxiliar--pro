// seed.js — Migración masiva de medicamentos a Firestore (colección: vademecum)
// Uso: node seed.js  (desde la raíz del proyecto)
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./vademecum_seed.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Replica EXACTA de la lógica de tu app (BuscadorVademecum / sincronizarBloque)
const normalizarTexto = (texto) => {
  if (!texto) return "";
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
};

const generarDocId = (nombre) =>
  normalizarTexto(nombre)
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

async function seedVademecum() {
  console.log(`🚀 Iniciando migración de ${data.length} medicamentos...`);

  const batch = db.batch();
  let creados = 0;
  let omitidos = 0;

  for (const med of data) {
    const id = generarDocId(med.nombre);
    const ref = db.collection("vademecum").doc(id);
    const snap = await ref.get();

    if (snap.exists) {
      omitidos++;
      console.log(`⚠️  OMITIDO (ya existe): ${med.nombre} [id: ${id}]`);
      continue;
    }

    batch.set(ref, {
      ...med,
      creadoEl: admin.firestore.FieldValue.serverTimestamp(),
      origen: "seed_core_pack_2026",
    });
    creados++;
    console.log(`➕ AGENDADO: ${med.nombre} [id: ${id}]`);
  }

  if (creados > 0) {
    await batch.commit();
  }

  console.log(`\n✅ ÉXITO TOTAL: ${creados} medicamentos creados, ${omitidos} omitidos (duplicados).`);
  console.log("🎯 Verifica en tu app: modo Auditoría ('Ver Todos') o busca 'Dextrometorfano'.");
  process.exit(0);
}

seedVademecum().catch((error) => {
  console.error("❌ Error en la migración:", error);
  process.exit(1);
});