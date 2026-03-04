# Bitácora Técnica – Integración Reveniu → Make
Fecha: 03-03-2026

## Objetivo
Conectar pagos realizados en Reveniu con un escenario en Make mediante Webhook para automatizar acciones posteriores al pago.

---

# Arquitectura de la Integración

Reveniu (evento de pago)
↓
Webhook
↓
Make (escenario automatizado)
↓
Procesamiento de datos
↓
Acciones posteriores (Cloud Function / Firebase)

---

# Plataformas Involucradas

- Reveniu
- Make

---

# Situación Inicial

- Webhook configurado en Reveniu con URL de Make.
- Escenario en Make creado y activado.
- Pagos realizados pero no se recibían datos en el webhook.
- En Make aparecía vacío “Run with existing data”.
- No existían ejecuciones registradas.

---

# Diagnóstico

Se detectó que:

1. El webhook estaba configurado correctamente.
2. Make estaba activo y escuchando.
3. El problema era que no se había creado el API Secret en Reveniu.
4. Reveniu exige API Secret para completar la integración.

Conclusión:

Sin API Secret, los eventos no se enviaban al webhook.

---

# Acciones Realizadas

1. Se creó el API Secret en Reveniu.
2. Se guardaron los cambios.
3. En Make se ejecutó “Run once”.
4. Se realizó un nuevo pago de prueba.
5. El webhook recibió correctamente el evento.

---

# Resultado

- Make recibió el webhook exitosamente.
- Se registró 1 operación.
- Se utilizó 1 crédito.
- Se capturó correctamente la estructura de datos del pago.

---

# Estado Final

Webhook operativo  
API Secret creado  
Flujo validado con pago real  
Escenario listo para automatizaciones adicionales

---

# Próximo Paso

Enviar los datos desde Make hacia Firebase mediante Cloud Function para activar suscripción PRO.

Flujo esperado:

Reveniu  
↓  
Make  
↓  
Cloud Function  
↓  
Firestore  
↓  
isPro = true  
↓  
desbloqueo niveles 3–7
