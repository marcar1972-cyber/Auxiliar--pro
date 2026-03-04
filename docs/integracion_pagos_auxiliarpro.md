# AuxiliarPro – Informe Técnico de Integración del Sistema de Suscripciones y Activación Automática

Fecha: 04 Marzo 2026  
Proyecto: AuxiliarPro  
Autor: Marcelo Carreño (MACZ)

---

# 1. Contexto del sistema

AuxiliarPro es una plataforma EdTech orientada a la capacitación de Auxiliares de Farmacia en Chile.

El sistema incluye:

- simulador de examen SEREMI
- guías de estudio
- herramientas profesionales para farmacia
- contenido educativo estructurado por niveles

Para monetizar el servicio se implementó un sistema de suscripciones que permite desbloquear niveles avanzados dentro de la plataforma.

El objetivo técnico es:

Automatizar el proceso desde el pago hasta la activación del acceso PRO del usuario.

---

# 2. Arquitectura implementada

Se diseñó una arquitectura desacoplada basada en servicios cloud.

Flujo general del sistema:

Usuario paga suscripción  
↓  
Reveniu procesa el pago  
↓  
Reveniu envía webhook  
↓  
Make recibe el webhook  
↓  
Make ejecuta solicitud HTTP  
↓  
Backend en Cloud Run recibe el evento  
↓  
Firebase actualiza el usuario  
↓  
Se activa acceso PRO

Arquitectura técnica:

Reveniu  
↓  
Webhook  
↓  
Make Automation  
↓  
Google Cloud Run  
↓  
Firebase Firestore

---

# 3. Integración de pagos con Reveniu

Se configuró Reveniu como proveedor de pagos para AuxiliarPro.

Características utilizadas:

- Checkout personalizado
- Integración con Webpay (Transbank)
- Links de pago
- Sistema de suscripciones

Durante las pruebas se utilizó un producto de prueba con valor simbólico.

Ejemplo:

Pago de prueba CLP $1.

El objetivo fue validar todo el circuito de automatización antes de lanzar el sistema real de suscripciones.

---

# 4. Integración Webhook

Reveniu envía eventos mediante Webhooks cuando ocurren acciones relacionadas con pagos.

Evento detectado durante pruebas:

subscription_payment_in_recovery

Payload recibido en el webhook:

subscription_id  
buy_order  
issued_on  
gateway_response  
status  
subscription_external_id  
amount  

Durante la inspección del webhook se detectó que el campo email del cliente no estaba presente.

Esto generó la necesidad de utilizar el campo:

subscription_external_id

como identificador del usuario.

---

# 5. Automatización con Make

Make se configuró como middleware para procesar los eventos enviados por Reveniu.

Escenario implementado:

Webhook (entrada de eventos)  
↓  
HTTP request hacia backend

Configuración del módulo HTTP:

Método:

POST

Body:

{
 "email": "{{1.data.data.subscription_external_id}}"
}

Header de seguridad:

x-api-key

Este header permite validar que solo el sistema autorizado puede activar usuarios PRO.

---

# 6. Backend en Google Cloud Run

Se implementó una función backend que recibe el email del usuario y actualiza su estado en Firebase.

Código implementado:

const admin = require("firebase-admin");

admin.initializeApp();

exports.activarPro = async (req, res) => {

  if (req.method !== "POST") {
    return res.status(405).send({ error: "Método no permitido." });
  }

  const apiKey = req.headers["x-api-key"];

  if (apiKey !== "CLAVE_SECRETA_AUXILIAR_PRO_2026") {
    return res.status(401).send({ error: "Acceso denegado." });
  }

  const email = (req.body.email || "").trim().toLowerCase();

  if (!email) {
    return res.status(400).send({ error: "Falta enviar el correo (email)." });
  }

  try {

    const snapshot = await admin.firestore()
      .collection("users")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return res.status(404).send({ error: `Usuario ${email} no encontrado.` });
    }

    const userDoc = snapshot.docs[0].ref;

    await userDoc.update({ isPro: true });

    return res.status(200).send({
      success: true,
      mensaje: "Usuario actualizado a PRO exitosamente."
    });

  } catch (error) {

    return res.status(500).send({ error: "Error interno en Firebase." });

  }

};

---

# 7. Integración con Firebase

Firebase se utiliza como base de datos principal de usuarios.

Colección utilizada:

users

Campo de control de suscripción:

isPro

Cuando el pago se confirma:

isPro = true

Esto desbloquea los niveles avanzados dentro de la plataforma AuxiliarPro.

---

# 8. Pruebas realizadas

Durante la sesión se realizaron múltiples pruebas técnicas.

Prueba 1

Solicitud HTTP sin email.

Resultado

Error:

Falta enviar el correo (email)

Diagnóstico

El webhook no estaba enviando el campo email.

---

Prueba 2

Solicitud HTTP con email manual.

Body utilizado:

{
 "email": "macz8372@gmail.com"
}

Resultado

Status Code: 200

Usuario actualizado correctamente en Firebase.

Conclusión

La integración Make → Cloud Run → Firebase funciona correctamente.

---

Prueba 3

Inspección del webhook recibido desde Reveniu.

Resultado

El webhook no contiene email del cliente.

Campos detectados:

subscription_id  
buy_order  
issued_on  
gateway_response  
status  
subscription_external_id  
amount  

Conclusión

Se utilizará subscription_external_id para identificar al usuario.

---

# 9. Estado actual del sistema

Componentes funcionando:

Sistema de pagos Reveniu  
Webhook activo  
Automatización en Make  
Backend Cloud Run  
Actualización de Firebase  

El circuito completo ya puede activar usuarios PRO cuando recibe un email válido.

---

# 10. Punto pendiente detectado

Actualmente el webhook no entrega el email del cliente directamente.

Por esta razón el campo email en el módulo HTTP quedó temporalmente vacío:

{
 "email": ""
}

La integración se detuvo para revisar con mayor detalle el payload completo del webhook en la siguiente sesión.

---

# 11. Próximos pasos

En la próxima sesión se realizará lo siguiente:

1. Analizar el payload completo del webhook de Reveniu.
2. Identificar el campo que contiene el email del cliente.
3. Mapear correctamente ese campo en Make.
4. Probar nuevamente el flujo completo con un pago real.
5. Confirmar activación automática del usuario en Firebase.

---

# 12. Conclusión

Se logró implementar el sistema base de monetización de AuxiliarPro.

El sistema permite conectar:

pagos  
automatización  
backend  
base de datos  

Aunque falta completar el mapeo definitivo del email del cliente, la infraestructura principal del sistema ya se encuentra operativa.

Este avance constituye un hito importante para el desarrollo del proyecto AuxiliarPro y valida la arquitectura SaaS del sistema.
