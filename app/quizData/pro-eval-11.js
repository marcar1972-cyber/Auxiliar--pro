// app/quizData/pro-eval-11.js

export const proEval11 = {
  id: "pro-eval-11",
  title: "Evaluación PRO 11: Almacenamiento y Cadena de Frío (Módulo 3.1)",
  description: "Resolución de casos críticos sobre excursiones de temperatura, planes de contingencia, fotosensibilidad y control de humedad ambiental.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. Un paciente devuelve una caja de Insulina porque la dejó por error en el congelador toda la noche. ¿Qué debe indicarle técnicamente?",
      options: [
        "A) Que puede usarla una vez que se descongele a temperatura ambiente.",
        "B) Que la insulina nunca debe ser congelada, ya que pierde su estructura biológica y eficacia; el producto debe desecharse.",
        "C) Que la agite bien antes de usarla para recuperar la mezcla.",
        "D) Que solo sirve para uso externo si se congeló."
      ],
      correctAnswer: 1, // B
      explanation: "La insulina es un medicamento termolábil de origen proteico. La congelación (temperaturas bajo 0°C) causa una desnaturalización irreversible de la proteína, destruyendo por completo su efecto hipoglicemiante. Una insulina congelada es inútil y peligrosa para el paciente diabético."
    },
    {
      question: "2. ¿Cuál es el rango de humedad relativa (H.R.) máximo permitido para un almacenamiento estándar de medicamentos según las normas técnicas?",
      options: [
        "A) 80% H.R.",
        "B) 60% H.R. (+/- 5%).",
        "C) 40% H.R.",
        "D) No existe límite de humedad mientras la temperatura sea baja."
      ],
      correctAnswer: 1, // B
      explanation: "Las Buenas Prácticas de Almacenamiento (BPA) establecen un estándar técnico riguroso. Mantener la humedad relativa en torno al 60% (zona de confort) previene reacciones de hidrólisis que degradan los fármacos sólidos y evita la proliferación microbiana o de hongos en los envases."
    },
    {
      question: "3. Al realizar el registro AM del refrigerador, el auxiliar nota que marca 1°C. Según la definición de Cadena de Frío, esta situación es:",
      options: [
        "A) Óptima, porque mientras más frío mejor se conservan.",
        "B) Una excursión de temperatura, ya que el rango obligatorio es entre 2°C y 8°C.",
        "C) Normal en invierno.",
        "D) Solo preocupante si sube de 10°C."
      ],
      correctAnswer: 1, // B
      explanation: "La Cadena de Frío exige un margen estrecho e inflexible de temperatura entre +2°C y +8°C. Cualquier registro por debajo de 2°C (riesgo de congelación) o por encima de 8°C (pérdida de potencia) constituye una 'excursión de temperatura' que obliga a aislar el producto y evaluar su viabilidad."
    },
    {
      question: "4. ¿Con qué frecuencia se deben registrar obligatoriamente las temperaturas en las dependencias de la farmacia según los procedimientos normativos?",
      options: [
        "A) Una vez por semana.",
        "B) Al menos dos veces al día, por la mañana y por la tarde.",
        "C) Solo cuando el auxiliar sienta calor en el local.",
        "D) Cada vez que se reciba un pedido de laboratorio."
      ],
      correctAnswer: 1, // B
      explanation: "Es una exigencia legal de las Buenas Prácticas de Almacenamiento para garantizar la trazabilidad ininterrumpida de las condiciones ambientales. El control debe ser constante y el registro en planilla debe efectuarse, como mínimo, dos veces durante la jornada laboral (AM y PM)."
    },
    {
      question: "5. (SITUACIONAL) Un fiscalizador nota que las estanterías de la farmacia están frente a un ventanal recibiendo luz solar directa durante la tarde. ¿Qué norma se está incumpliendo?",
      options: [
        "A) Solo una norma estética del local.",
        "B) La obligación de proteger los medicamentos de la luz para evitar su degradación fotosensible.",
        "C) Ninguna, la luz solar es desinfectante.",
        "D) El reglamento de pesos y medidas."
      ],
      correctAnswer: 1, // B
      explanation: "La luz (especialmente la radiación UV) es un poderoso agente degradante. La normativa de almacenamiento exige la protección total de los medicamentos contra la luz solar directa, ya que induce reacciones fotoquímicas (oxidación) que anulan la potencia del fármaco o generan compuestos tóxicos."
    },
    {
      question: "6. ¿Qué documento oficial define las condiciones específicas de almacenamiento (temperatura, luz, envase) de cada medicamento en particular?",
      options: [
        "A) El catálogo de ventas del mes.",
        "B) El Registro Sanitario otorgado por el ISP para ese producto.",
        "C) El manual de funciones del auxiliar.",
        "D) La boleta de compra del paciente."
      ],
      correctAnswer: 1, // B
      explanation: "El Registro Sanitario es el 'carnet de identidad' técnico del medicamento aprobado por el Instituto de Salud Pública (ISP). En él, basándose en exhaustivos estudios de estabilidad, el laboratorio fabricante establece las condiciones obligatorias de temperatura, envase y resguardo lumínico."
    },
    {
      question: "7. (SITUACIONAL) Durante un corte de energía prolongado, el auxiliar debe activar el Plan de Contingencia. ¿Cuál es la primera acción técnica respecto al refrigerador?",
      options: [
        "A) Abrir las puertas para que circule aire fresco.",
        "B) No abrir el refrigerador para mantener la temperatura interna el mayor tiempo posible.",
        "C) Sacar los productos y ponerlos en una cubeta con agua.",
        "D) Regalar las vacunas antes de que se venzan."
      ],
      correctAnswer: 1, // B
      explanation: "Protocolo crítico de contingencia: Mantener la inercia térmica es la prioridad absoluta. Un refrigerador cerrado y en buen estado puede conservar la temperatura interna entre 2° y 8°C durante varias horas. Abrir la puerta acelera drásticamente la pérdida de la cadena de frío."
    },
    {
      question: "8. ¿Qué término define la 'fracción de principio activo que llega a la circulación sistémica y la velocidad con que ocurre'?",
      options: [
        "A) Estabilidad.",
        "B) Biodisponibilidad.",
        "C) Trazabilidad.",
        "D) Farmacotecnia."
      ],
      correctAnswer: 1, // B
      explanation: "La biodisponibilidad es la definición técnica y el parámetro fundamental en biofarmacia (Art. 5 del DS 3) que determina qué porcentaje de la dosis administrada logra llegar a la sangre para ejercer su efecto terapéutico, permitiendo comparar productos bioequivalentes."
    },
    {
      question: "9. (SITUACIONAL) Usted recibe un pedido de jarabes y nota que la caja secundaria está empapada por humedad excesiva en el transporte. Según el control de calidad, usted debe:",
      options: [
        "A) Secar la caja y ponerla a la venta.",
        "B) Trasladar el producto al área de Cuarentena e informar al DT por sospecha de pérdida de estabilidad.",
        "C) Venderlo con descuento por daño de empaque.",
        "D) Guardarlo en el refrigerador para que recupere la dureza."
      ],
      correctAnswer: 1, // B
      explanation: "La humedad excesiva altera el envase secundario (cartón) y es un indicador crítico de que las condiciones de transporte fallaron. Esto levanta una alerta por potencial alteración del envase primario (contaminación) o hidrólisis, exigiendo aislamiento preventivo inmediato en Cuarentena."
    },
    {
      question: "10. Según el Art. 221 del Decreto 466, ¿quién es el responsable legal de velar porque el sistema de almacenamiento asegure la conservación de los medicamentos?",
      options: [
        "A) El Auxiliar de Farmacia exclusivamente.",
        "B) El Director Técnico (Químico Farmacéutico).",
        "C) El guardia de seguridad del local.",
        "D) El proveedor del sistema de aire acondicionado."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 221 del DTO 466 es categórico: la responsabilidad técnica, legal y sanitaria del correcto almacenamiento, así como de la revisión de vigencia (fechas de vencimiento) y condiciones de conservación, es indelegable y recae sobre el profesional Químico Farmacéutico a cargo de la Dirección Técnica."
    }
  ]
};