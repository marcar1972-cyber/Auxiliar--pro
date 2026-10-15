// app/quizData/pro-eval-12.js

export const proEval12 = {
  id: "pro-eval-12",
  title: "Evaluación PRO 12: Cadena de Frío Avanzada y Biológicos (Módulo 3.2)",
  description: "Manejo de excursiones de temperatura, recepción de vacunas, transporte isotérmico y cumplimiento de la Norma Técnica 208.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. Un paciente acude a la farmacia a consultar por su insulina, la cual estuvo olvidada durante 2 horas sobre el mostrador de su cocina a temperatura ambiente (22 °C). ¿Qué orientación técnica corresponde realizar por parte del personal de farmacia?",
      options: [
        "A) Decirle que la guarde en el refrigerador y la use normalmente.",
        "B) Educar al paciente explicando que por normativa los medicamentos no tienen devolución una vez retirados, y consultar la ficha del fabricante o al Químico Farmacéutico para orientarlo sobre si la excursión térmica afecta la estabilidad de su uso personal.",
        "C) Recibir el producto, ingresarlo a la zona de Cuarentena de la farmacia y emitir una nota de crédito para devolverlo al stock.",
        "D) Indicarle que guarde la insulina en el congelador durante 10 minutos para recuperar el frío perdido antes de usarla."
      ],
      correctAnswer: 1, // B
      explanation: "Por normativa sanitaria (D.S. 466), un medicamento que ha salido de la farmacia pierde su trazabilidad y no puede ser devuelto ni reingresado a la cadena de custodia del establecimiento. La labor del personal es educar al usuario sobre esta prohibición y, en el plano de la atención farmacéutica, evaluar la ficha técnica del fabricante para asesorarlo sobre si la excursión térmica compromete la estabilidad del producto para su uso individual."
    },
    {
      question: "2. Según la normativa técnica, ¿cuál es el rango de temperatura estricto para productos en refrigeración?",
      options: [
        "A) 0°C a 10°C.",
        "B) 2°C a 8°C.",
        "C) 8°C a 15°C.",
        "D) Temperatura ambiente controlada."
      ],
      correctAnswer: 1, // B
      explanation: "Es el rango oficial y universal definido en la Norma Técnica 208 y en los manuales de Buenas Prácticas de Almacenamiento (BPA) para garantizar la integridad de las formas farmacéuticas termolábiles."
    },
    {
      question: "3. ¿Con qué frecuencia mínima deben registrarse las temperaturas de los refrigeradores de la farmacia según los procedimientos vigentes?",
      options: [
        "A) Una vez al día al abrir el local.",
        "B) Una vez por semana.",
        "C) Al menos dos veces al día (Mañana y Tarde), incluyendo festivos.",
        "D) Solo cuando el auxiliar note que el equipo hace ruidos extraños."
      ],
      correctAnswer: 2, // C
      explanation: "Para garantizar la trazabilidad ininterrumpida de las condiciones sanitarias, la normativa exige un registro documentado al menos dos veces al día (AM y PM). Los sistemas automatizados registran continuamente, pero la validación manual sigue siendo obligatoria en la mayoría de los protocolos."
    },
    {
      question: "4. ¿Qué sucede biológicamente si una insulina se congela accidentalmente?",
      options: [
        "A) Se vuelve más potente.",
        "B) Pierde su estructura proteica y su actividad farmacológica de forma irreversible, debiendo ser desechada.",
        "C) No pasa nada, solo debe descongelarse a temperatura ambiente.",
        "D) Se puede usar solo si se agita vigorosamente antes de la aplicación."
      ],
      correctAnswer: 1, // B
      explanation: "La congelación causa la cristalización del agua en la formulación, lo que desnaturaliza irreversiblemente la estructura tridimensional de la proteína (insulina o vacuna), destruyendo por completo su función terapéutica y volviéndola un producto inútil."
    },
    {
      question: "5. Ante un corte de energía eléctrica prolongado en la farmacia, la primera medida de resguardo de los biológicos es:",
      options: [
        "A) Abrir las puertas del refrigerador para que no se acumule humedad.",
        "B) Trasladar todo a una cubeta con agua fría.",
        "C) Mantener el refrigerador cerrado para conservar la inercia térmica interna.",
        "D) Poner los medicamentos en la sala de ventas donde hay más ventilación."
      ],
      correctAnswer: 2, // C
      explanation: "Este es el paso inicial en todo Procedimiento Técnico de Contingencia. El aislamiento térmico de los refrigeradores farmacéuticos permite mantener el rango seguro por varias horas si la puerta no se abre, evitando la pérdida del aire frío (inercia térmica)."
    },
    {
      question: "6. Caso de Mesón: Al recibir un pedido de vacunas, usted nota que el sensor de temperatura del camión marca 12°C. Usted debe:",
      options: [
        "A) Aceptar el pedido y meterlo rápido al refrigerador.",
        "B) Rechazar la recepción por ruptura de la cadena de frío, ya que excede el límite legal de 8°C.",
        "C) Recibirlo solo si el chofer le firma un documento de responsabilidad.",
        "D) Poner las vacunas en el congelador para compensar el calor."
      ],
      correctAnswer: 1, // B
      explanation: "La recepción sobre 8°C constituye una falta grave a las Buenas Prácticas de Distribución. Según el Art. 121 del DTO 466, la farmacia no puede ingresar a su stock un biológico cuya cadena de frío ha sido rota durante el transporte; debe rechazarse documentando la desviación."
    },
    {
      question: "7. ¿Qué requisito de equipamiento es obligatorio para el almacenamiento de termolábiles según la Norma Técnica 208?",
      options: [
        "A) Un sistema de aire acondicionado ambiental solamente.",
        "B) Un sistema de alarma calibrado que indique excursiones de temperatura o fallas.",
        "C) Una vitrina de vidrio con llave en la sala de ventas.",
        "D) Un termómetro de mercurio doméstico."
      ],
      correctAnswer: 1, // B
      explanation: "La NT 208 establece exigencias técnicas de alto estándar. Los equipos frigoríficos deben contar con un sistema de alarma, idealmente visual y sonoro, calibrado para advertir inmediatamente si la temperatura sale del rango de +2°C a +8°C, previniendo daños silenciosos."
    },
    {
      question: "8. Según el Artículo 121 del Decreto 466, los establecimientos que manejan productos biológicos deben:",
      options: [
        "A) Venderlos siempre a mitad de precio.",
        "B) Mantener registros de temperatura permanentes hasta el momento de su distribución.",
        "C) Tener un médico cirujano permanentemente en el local.",
        "D) Cambiar las etiquetas de vencimiento cada mes."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 121 del Reglamento de Farmacias impone la obligación legal de asegurar la eficacia de sueros, vacunas y biológicos, exigiendo mantener un registro ininterrumpido de las condiciones de temperatura desde su recepción hasta su dispensación al paciente."
    },
    {
      question: "9. Al dispensar una vacuna, ¿qué información es vital entregar al paciente respecto a su transporte?",
      options: [
        "A) Que puede llevarla en el bolsillo del pantalón para que tome calor corporal.",
        "B) Que debe transportarse en una unidad isotérmica con gel refrigerante, sin que este toque directamente el envase para evitar congelación.",
        "C) Que no es necesario el frío si llega a su casa en menos de 2 horas.",
        "D) Que debe guardarla en el compartimento de la puerta del refrigerador de su casa."
      ],
      correctAnswer: 1, // B
      explanation: "Educación sanitaria de última milla. Tan dañino como el calor excesivo es el contacto directo del medicamento con el gel refrigerante (-20°C), lo que puede congelar y desnaturalizar el biológico en minutos. Debe aislarse con cartón o papel dentro de la unidad isotérmica."
    },
    {
      question: "10. El término 'Actividad Biológica' se refiere técnicamente a:",
      options: [
        "A) La cantidad de pastillas que vienen en la caja.",
        "B) La respuesta medible de la potencia del producto farmacéutico con respecto a un patrón de referencia.",
        "C) La fecha en que el laboratorio fabricó el lote.",
        "D) El precio del medicamento en el Formulario Nacional."
      ],
      correctAnswer: 1, // B
      explanation: "Definición técnica legal establecida en el Artículo 5 del Decreto Supremo 3. La actividad biológica determina la potencia y capacidad terapéutica de productos como vacunas, insulinas y heparinas, garantizando que producirán el efecto inmunológico o fisiológico esperado."
    }
  ]
};