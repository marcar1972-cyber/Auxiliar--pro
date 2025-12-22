export const level2 = {
  id: 2,
  title: "Almacenamiento y Cadena de Frío",
  questions: [
    {
      id: 1,
      question: "¿Cuál es el rango de temperatura estándar exigido para medicamentos que requieren refrigeración?",
      options: ["0°C a 4°C", "2°C a 8°C", "10°C a 15°C", "Entre 15°C y 25°C"],
      answer: "2°C a 8°C",
      feedback: "La cadena de frío oficial se sitúa estrictamente entre los 2°C y los 8°C."
    },
    {
      id: 2,
      question: "En caso de un corte prolongado de energía eléctrica, ¿cuál es la primera acción técnica que debe realizar el auxiliar?",
      options: ["Abrir las puertas para ventilar.", "Mantener el equipo sellado para conservar el frío.", "Trasladar todo a una caja de cartón.", "Apagar el termómetro."],
      answer: "Mantener el equipo sellado para conservar el frío.",
      feedback: "Preservar la inercia térmica es vital. Solo se traslada si el corte supera el tiempo de seguridad del equipo."
    },
    {
      id: 3,
      question: "¿Qué indica el sistema de gestión de inventario FEFO (First Expired, First Out)?",
      options: ["Lo primero que llega se vende primero.", "Lo primero que vence es lo primero que debe salir a la venta.", "Se vende lo más caro primero.", "Se ordena por tamaño de envase."],
      answer: "Lo primero que vence es lo primero que debe salir a la venta.",
      feedback: "FEFO prioriza la seguridad del paciente evitando la presencia de productos caducados."
    },
    {
      id: 4,
      question: "Respecto a la humedad relativa en la bodega de fármacos, ¿cuál es el porcentaje máximo recomendado generalmente?",
      options: ["30%", "65%", "90%", "No se controla la humedad"],
      answer: "65%",
      feedback: "La humedad excesiva puede degradar las formas sólidas y las cajas de cartón."
    },
    {
      id: 5,
      question: "¿En qué posición deben almacenarse los medicamentos dentro de un refrigerador para evitar la congelación accidental?",
      options: ["Pegados a la placa del fondo.", "En los estantes centrales, sin tocar las paredes.", "En la puerta del equipo.", "En el piso del refrigerador."],
      answer: "En los estantes centrales, sin tocar las paredes.",
      feedback: "El contacto con las paredes puede transmitir temperaturas bajo 0°C inactivando el producto."
    },
    {
      id: 6,
      question: "¿Con qué frecuencia se deben registrar las temperaturas máximas y mínimas en la planilla oficial de la farmacia?",
      options: ["Una vez a la semana.", "Dos veces al día (mañana y tarde).", "Solo cuando hay inspecciones.", "Cada 15 minutos de forma manual."],
      answer: "Dos veces al día (mañana y tarde).",
      feedback: "El registro diario es obligatorio para demostrar la continuidad de la cadena de frío."
    },
    {
      id: 7,
      question: "¿Qué sucede técnicamente con una insulina que ha sido congelada por error?",
      options: ["Se puede usar una vez descongelada.", "Se debe agitar fuerte y volver a refrigerar.", "Pierde su efectividad biológica y debe ser eliminada.", "Se vuelve más potente."],
      answer: "Pierde su efectividad biológica y debe ser eliminada.",
      feedback: "La congelación rompe la estructura molecular de las proteínas como la insulina."
    },
    {
      id: 8,
      question: "¿Cuál es la función de los 'geles refrigerantes' en el transporte de medicamentos?",
      options: ["Actuar como medicamento de respaldo.", "Mantener la temperatura del producto durante el traslado.", "Decorar la caja térmica.", "Evitar que los frascos se golpeen."],
      answer: "Mantener la temperatura del producto durante el traslado.",
      feedback: "Los geles actúan como acumuladores de frío esenciales para el despacho a domicilio."
    },
    {
      id: 9,
      question: "¿Dónde deben almacenarse los medicamentos considerados 'Sustancias Controladas'?",
      options: ["Junto a los analgésicos comunes.", "En una caja de seguridad o sala bajo llave.", "En la vitrina de mayor visibilidad.", "En el refrigerador común."],
      answer: "En una caja de seguridad o sala bajo llave.",
      feedback: "La ley exige custodia estricta para estupefacientes y psicotrópicos."
    },
    {
      id: 10,
      question: "¿Qué es la 'Temperatura Ambiente Controlada' según los estándares actuales?",
      options: ["Bajo los 10°C.", "Entre 15°C y 25°C.", "Sobre los 30°C.", "Ambiente sin climatización."],
      answer: "Entre 15°C y 25°C.",
      feedback: "La mayoría de los fármacos requieren este rango para mantener su estabilidad."
    },
    {
      id: 11,
      question: "Si recibe un pedido de vacunas y el termómetro de transporte marca 12°C, ¿qué debe hacer el auxiliar?",
      options: ["Guardarlas rápido para que se enfríen.", "Rechazar el pedido y notificar la rotura de cadena de frío.", "Ignorar el dato si el hielo aún está sólido.", "Ponerlas en el congelador."],
      answer: "Rechazar el pedido y notificar la rotura de cadena de frío.",
      feedback: "Sobre los 8°C la seguridad del producto ya no está garantizada."
    },
    {
      id: 12,
      question: "¿Cuál es el propósito de dejar espacios entre las cajas en las estanterías de almacenamiento?",
      options: ["Para que quepan más productos.", "Para permitir la libre circulación de aire.", "Para facilitar la limpieza.", "Por estética visual."],
      answer: "Para permitir la libre circulación de aire.",
      feedback: "La ventilación evita la creación de microclimas de calor o humedad."
    },
    {
      id: 13,
      question: "¿Qué herramienta es obligatoria para el monitoreo de temperatura en el recetario magistral?",
      options: ["Termómetro de mercurio antiguo.", "Termohigrómetro calibrado.", "Sensación térmica del personal.", "No requiere monitoreo."],
      answer: "Termohigrómetro calibrado.",
      feedback: "Se debe medir temperatura y humedad con equipos certificados."
    },
    {
      id: 14,
      question: "En la recepción de productos, ¿cuál es el primer paso antes de ubicar el stock en estantería?",
      options: ["Poner los precios.", "Verificar integridad de envases y fecha de vencimiento.", "Llamar al dueño.", "Guardar todo rápido."],
      answer: "Verificar integridad de envases y fecha de vencimiento.",
      feedback: "La inspección visual previene el ingreso de productos dañados al stock de venta."
    },
    {
      id: 15,
      question: "¿Por qué se deben proteger los medicamentos fotosensibles de la luz directa?",
      options: ["Porque se destiñe la caja.", "Porque la luz puede causar reacciones químicas que degradan el principio activo.", "Porque se calientan mucho.", "Para que el cliente no vea el nombre."],
      answer: "Porque la luz puede causar reacciones químicas que degradan el principio activo.",
      feedback: "La fotodegradación altera la seguridad y eficacia del medicamento."
    }
  ]
};
