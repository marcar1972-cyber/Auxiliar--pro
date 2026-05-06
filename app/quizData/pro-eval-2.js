// app/quizData/pro-eval-2.js

export const proEval2 = {
  id: "pro-eval-2",
  title: "Evaluación PRO 2: Almacenamiento y Condiciones Sanitarias (Módulo 1.2)",
  description: "Resolución de casos situacionales sobre cadena de frío, cuarentena, fraccionamiento y el Decreto Supremo 594.",
  timeLimit: 15, 
  passingScore: 80, 
  questions: [
    {
      question: "(Situacional) Durante el turno de tarde, el auxiliar nota que el termohigrómetro de la bodega marca un 75% de humedad relativa. ¿Cuál es el riesgo técnico inmediato?",
      options: [
        "A) El medicamento perderá su color original únicamente.",
        "B) No hay riesgo si la temperatura se mantiene bajo 25°C.",
        "C) El exceso de humedad puede afectar la estabilidad y velocidad de disolución de formas sólidas.",
        "D) Solo deben preocuparse por los productos de cadena de frío."
      ],
      correctAnswer: 2, 
      explanation: "El control de humedad es crítico. Una humedad relativa alta (generalmente sobre el 65%) puede degradar los principios activos por hidrólisis, afectando gravemente la estabilidad, eficacia y disolución, especialmente en comprimidos y cápsulas."
    },
    {
      question: "(Situacional) Un laboratorio envía una caja de antibióticos por error y la farmacia no trabaja con ese proveedor. El DT le indica al auxiliar que el producto debe ir al área de:",
      options: [
        "A) Sala de alimentación hasta que lo retiren.",
        "B) Bodega general debidamente marcado.",
        "C) Área de Cuarentena, pues es un producto que debe estar aislado de la venta.",
        "D) Oficina del DT bajo llave por ser un error administrativo."
      ],
      correctAnswer: 2, 
      explanation: "El Área de Cuarentena (Art. 13 DS 466) es el sector físicamente separado y señalizado donde debe ubicarse cualquier producto rechazado, devuelto, vencido o recibido por error, asegurando que no llegue a la sala de ventas."
    },
    {
      question: "(Crítico) Según el Art. 14 A del DTO 466, ¿a qué altura mínima deben exhibirse los medicamentos de Venta Directa en góndolas?",
      options: [
        "A) A la altura de la vista del adulto promedio.",
        "B) A 1 metro de altura.",
        "C) A 50 centímetros del suelo.",
        "D) En el mostrador principal solamente."
      ],
      correctAnswer: 1, 
      explanation: "El Artículo 14 A del Decreto 466 establece que, por medidas de seguridad sanitaria y para evitar la manipulación o ingesta accidental por parte de niños pequeños, los medicamentos OTC en góndolas no pueden ubicarse a menos de 1 metro del suelo."
    },
    {
      question: "(Situacional) El refrigerador de la farmacia marca 10°C debido a que se dejó la puerta mal cerrada. ¿Qué fármaco está en riesgo crítico de perder su potencia?",
      options: [
        "A) Amoxicilina en cápsulas.",
        "B) Losartán potásico.",
        "C) Insulina Humana, por ser un producto termolábil.",
        "D) Atorvastatina comprimidos."
      ],
      correctAnswer: 2, 
      explanation: "La Insulina es un medicamento termolábil que requiere estrictamente Cadena de Frío. Una temperatura de 10°C rompe este protocolo, lo que puede inactivar la proteína y dejar al paciente diabético sin el efecto terapéutico vital."
    },
    {
      question: "(Crítico) ¿Qué sector de la farmacia requiere obligatoriamente una superficie de material liso, impermeable y acceso directo a un lavamanos según el Art. 14 bis?",
      options: [
        "A) La sala de ventas.",
        "B) El sector de fraccionamiento.",
        "C) La oficina administrativa.",
        "D) La bodega de psicotrópicos."
      ],
      correctAnswer: 1, 
      explanation: "El fraccionamiento de medicamentos exige un área específica que cumpla con altos estándares de higiene para evitar la contaminación cruzada, incluyendo mesones lisos, lavables e impermeables, y un lavamanos cercano."
    },
    {
      question: "(Situacional) Un cliente solicita que le vendan 5 comprimidos de una receta de Alprazolam (Psicotrópico Lista IV). ¿Qué debe responder el auxiliar basándose en la normativa de fraccionamiento?",
      options: [
        "A) \"Sí, podemos fraccionarlo porque es un envase sólido\".",
        "B) \"No, la ley prohíbe estrictamente fraccionar productos sujetos a control legal\".",
        "C) \"Solo si el Químico Farmacéutico firma la receta ahora mismo\".",
        "D) \"Sí, pero se cobra un recargo por el envase de entrega\"."
      ],
      correctAnswer: 1, 
      explanation: "El reglamento prohíbe expresamente el fraccionamiento de medicamentos estupefacientes y psicotrópicos sujetos a controles legales especiales (Receta Retenida y Receta Cheque), debido al riesgo de desviación y control de inventario."
    },
    {
      question: "(Crítico) ¿Cuál es el rango de temperatura que define legalmente a la \"Cadena de Frío\" en Chile?",
      options: [
        "A) 0°C a 10°C.",
        "B) -2°C a 8°C.",
        "C) +2°C a +8°C.",
        "D) 8°C a 15°C."
      ],
      correctAnswer: 2, 
      explanation: "La normativa chilena y las Buenas Prácticas de Almacenamiento (BPA) definen la cadena de frío para productos farmacéuticos refrigerados en un rango estricto y sin variaciones de entre +2°C y +8°C."
    },
    {
      question: "(Situacional) Un fiscalizador entra a la farmacia y nota que no hay jabón ni toallas de papel en el baño del personal. Esta falta corresponde a un incumplimiento de:",
      options: [
        "A) La Ley de Fármacos solamente.",
        "B) El DS 594 sobre condiciones sanitarias básicas en el lugar de trabajo.",
        "C) El reglamento de recetario magistral.",
        "D) El petitorio mínimo farmacéutico."
      ],
      correctAnswer: 1, 
      explanation: "El Decreto Supremo 594 es el reglamento sobre condiciones sanitarias y ambientales básicas en los lugares de trabajo, el cual exige explícitamente contar con servicios higiénicos provistos de papel, jabón y sistemas de secado."
    },
    {
      question: "(Situacional) Al recibir un pedido, el auxiliar nota que un jarabe tiene la caja de cartón manchada con líquido pero el frasco no se ve quebrado. Usted debe:",
      options: [
        "A) Limpiar la caja y ponerlo a la venta con descuento.",
        "B) Cambiar la caja por otra que esté limpia.",
        "C) Trasladarlo a Cuarentena por sospecha de falla de envase primario.",
        "D) Devolverlo al camión sin registrar nada."
      ],
      correctAnswer: 2, 
      explanation: "Una caja manchada es un indicador visual crítico de que el envase primario (el frasco que toca el líquido) podría estar filtrando o contaminado. Debe ir inmediatamente a cuarentena para evitar su venta y gestionar la merma."
    },
    {
      question: "(Crítico) ¿Qué documento debe custodiar el DT en su oficina y tener disponible \"en todo momento y circunstancia\" para la autoridad?",
      options: [
        "A) El catálogo comercial del laboratorio.",
        "B) Los Registros Oficiales (Inspección, Reclamos, Control de Stock).",
        "C) Los contratos de trabajo de los auxiliares.",
        "D) El manual de marketing de la cadena."
      ],
      correctAnswer: 1, 
      explanation: "El Director Técnico es el responsable legal de mantener actualizados y a disposición de la autoridad sanitaria todos los registros oficiales, tales como el libro de estupefacientes, reclamos, recetas y actas de inspección."
    }
  ]
};