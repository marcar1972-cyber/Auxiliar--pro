const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Inicializamos con permisos
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Lista actualizada con la fecha exacta de pago
const usuariosParaRescate = [
  { fechaPago: '09/04/26', email: 'cardenask670@gmail.com', plan: 'Mensual' },
  { fechaPago: '08/04/26', email: 'superfaby13@gmail.com', plan: 'Mensual' },
  { fechaPago: '08/04/26', email: 'pamelita.diaz.19@gmail.com', plan: 'Mensual' },
  { fechaPago: '07/04/26', email: 'evelyn.belmar.16@gmail.com', plan: 'Mensual' },
  { fechaPago: '07/04/26', email: 'msleiva42@gmail.com', plan: 'Mensual' },
  { fechaPago: '07/04/26', email: 'pconstanza.angel@gmail.com', plan: 'Mensual' },
  { fechaPago: '07/04/26', email: 'aranza2004.brooks@gmail.com', plan: 'Mensual' },
  { fechaPago: '07/04/26', email: 'yenifercamposc19@gmail.com', plan: 'Mensual' },
  { fechaPago: '07/04/26', email: 'marcar1972@gmail.com', plan: 'Mensual' }, 
  { fechaPago: '07/04/26', email: 'gonzalo22figueroa2211@gmail.com', plan: 'Mensual' },
  { fechaPago: '06/04/26', email: 'antoniocalfulen30@gmail.com', plan: 'Mensual' },
  { fechaPago: '06/04/26', email: 'juan57@gmail.com', plan: 'Mensual' },
  { fechaPago: '06/04/26', email: 'jocebaeza@gmail.com', plan: 'Mensual' },
  { fechaPago: '05/04/26', email: 'anaisaguirre1996@gmail.com', plan: 'Mensual' },
  { fechaPago: '05/04/26', email: 'irisguilleen@gmail.com', plan: 'Mensual' },
  { fechaPago: '05/04/26', email: 'elizabetharayacepeda@gmail.com', plan: 'Mensual' },
  { fechaPago: '05/04/26', email: 'e.jaram93@gmail.com', plan: 'Mensual' },
  { fechaPago: '05/04/26', email: 'mdrq2010@gmail.com', plan: 'Mensual' },
  { fechaPago: '05/04/26', email: 'macz8372@gmail.com', plan: 'Mensual' },
  { fechaPago: '04/04/26', email: 'cortesgallardo1986@gmail.com', plan: 'Anual' }, 
  { fechaPago: '03/04/26', email: 'e.camila028@gmail.com', plan: 'Mensual' },
  { fechaPago: '02/04/26', email: 'desmax.32@gmail.com', plan: 'Mensual' },
  { fechaPago: '02/04/26', email: 'albina.diaz@gmail.com', plan: 'Mensual' },
  { fechaPago: '01/04/26', email: 'pabloaraya7311@gmail.com', plan: 'Mensual' },
  { fechaPago: '01/04/26', email: 'godoyvictor058@gmail.com', plan: 'Mensual' },
  { fechaPago: '01/04/26', email: 'nicole.carolinatm@gmail.com', plan: 'Mensual' },
  { fechaPago: '01/04/26', email: 'constanzaignacia15@gmail.com', plan: 'Mensual' },
  { fechaPago: '01/04/26', email: 's.riveros.olmedo@gmail.com', plan: 'Mensual' },
  { fechaPago: '01/04/26', email: 'embonycastillo1@gmail.com', plan: 'Mensual' },
  { fechaPago: '01/04/26', email: 'f.corradifernndez@gmail.com', plan: 'Mensual' }
];

// Función para transformar "DD/MM/YY" en una fecha real de Javascript
function parsearFecha(fechaStr) {
  const [dia, mes, anio] = fechaStr.split('/');
  // El mes empieza en 0 en JS (enero es 0), por eso le restamos 1. Asumimos año 2026.
  return new Date(2000 + parseInt(anio), parseInt(mes) - 1, parseInt(dia));
}

async function ejecutarRescatePreciso() {
  console.log("🛠️ Iniciando corrección de fechas de suscripción en AuxiliarPro...");
  
  for (const usuario of usuariosParaRescate) {
    // 1. Calculamos la fecha en base al pago real
    const fechaExpiracion = parsearFecha(usuario.fechaPago);
    
    // 2. Sumamos el tiempo correspondiente
    if (usuario.plan === 'Anual') {
      fechaExpiracion.setFullYear(fechaExpiracion.getFullYear() + 1);
    } else {
      fechaExpiracion.setMonth(fechaExpiracion.getMonth() + 1);
    }

    try {
      // Búsqueda táctica por email
      const usuariosSnapshot = await db.collection('users').where('email', '==', usuario.email).get();
      
      if (usuariosSnapshot.empty) {
        // Silenciamos este log para que la consola quede más limpia, solo mostramos los éxitos.
        continue; 
      }

      for (const doc of usuariosSnapshot.docs) {
        await doc.ref.update({
          untilPro: fechaExpiracion.toISOString(),
          isPro: true,
          rol: 'estudiante_pro'
        });
        console.log(`✅ Corregido: ${usuario.email} -> Nueva expiración: ${fechaExpiracion.toLocaleDateString()}`);
      }

    } catch (error) {
      console.log(`❌ Error con ${usuario.email}:`, error);
    }
  }
  console.log("🏁 Corrección de fechas terminada con precisión milimétrica.");
}

ejecutarRescatePreciso();