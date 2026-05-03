// app/quizData/pro-eval-10.js

export const proEval10 = {
  id: "pro-eval-10",
  title: "Evaluación PRO 10: Recetario Magistral y Aseguramiento de Calidad (Módulo 2.6)",
  description: "Normativa sobre recetario magistral, preparados oficinales, trazabilidad de libros y Buenas Prácticas de Manufactura.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. Un paciente presenta una receta para un jarabe personalizado con una dosis de antibiótico no disponible comercialmente. ¿A qué área de la farmacia debe derivarse esta solicitud?",
      options: [
        "A) Al área de fraccionamiento.",
        "B) Al sector de Bodega para pedido especial.",
        "C) Al Recetario Magistral, sector destinado a la elaboración de fórmulas personalizadas.",
        "D) A la oficina administrativa para validación de precios."
      ],
      correctAnswer: 2, // C
      explanation: "El Artículo 8 del Reglamento de Farmacias (DS 466) faculta exclusivamente a las farmacias que cuentan con un Recetario Magistral autorizado para elaborar preparados farmacéuticos no industriales (fórmulas magistrales) prescritos específicamente para un paciente individualizado."
    },
    {
      question: "2. Durante la recepción de materias primas para el recetario, el auxiliar nota que un envase no tiene el boletín de análisis del proveedor. ¿Qué acción de calidad corresponde?",
      options: [
        "A) Usar la materia prima si el aspecto es normal.",
        "B) Trasladarla de inmediato al área de Cuarentena hasta que se obtenga la documentación técnica que avale su calidad.",
        "C) Registrarla en el Libro de Inspección como 'pendiente'.",
        "D) Mezclarla con stock antiguo para uniformar la calidad."
      ],
      correctAnswer: 1, // B
      explanation: "El área de Cuarentena es el sector de retención obligatoria para materias primas o productos que carecen de liberación de control de calidad. Sin el certificado analítico del proveedor, es ilegal y peligroso utilizar la materia prima en formulaciones."
    },
    {
      question: "3. ¿Qué garantiza legalmente que un medicamento sea fabricado con una 'calidad uniforme y satisfactoria' en cada uno de sus lotes?",
      options: [
        "A) El precio fijado por el Ministerio.",
        "B) El cumplimiento de las Buenas Prácticas de Manufactura (BPM).",
        "C) Que sea un producto importado.",
        "D) El color del envase secundario."
      ],
      correctAnswer: 1, // B
      explanation: "El Decreto Supremo 3 define las Buenas Prácticas de Manufactura (BPM) como el conjunto de normas y procedimientos obligatorios destinados a garantizar que los productos farmacéuticos se fabriquen con calidad uniforme, reduciendo los riesgos inherentes a la producción."
    },
    {
      question: "4. Un inspector de la SEREMI solicita ver el 'Registro Oficial de Elaboración'. ¿Qué información debe contener este libro según la normativa?",
      options: [
        "A) Solo los precios de venta de los magistrales.",
        "B) La lista de cumpleaños del personal del recetario.",
        "C) La fórmula numerada correlativamente, los principios activos (base, sales, ésteres) y el procedimiento de elaboración.",
        "D) El inventario de productos de venta directa."
      ],
      correctAnswer: 2, // C
      explanation: "Para garantizar la trazabilidad técnica y clínica ante cualquier reacción adversa, los artículos que regulan el Recetario Magistral exigen que el Libro Oficial registre el número correlativo, el médico prescriptor, el paciente y el detalle cuali-cuantitativo exacto de la elaboración."
    },
    {
      question: "5. El concepto de 'Aptitud del medicamento para el uso al cual se destina, determinada por su eficacia, seguridad y estabilidad' corresponde a:",
      options: [
        "A) Registro Sanitario.",
        "B) Calidad de un medicamento.",
        "C) Farmacovigilancia.",
        "D) Biodisponibilidad."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 5 del DS 3 establece esta definición exacta para la 'Calidad de un medicamento', indicando que depende indivisiblemente de que el producto sea seguro, eficaz, mantenga su estabilidad y posea las características de identidad aprobadas."
    },
    {
      question: "6. Caso de Mesón: Un cliente consulta por qué su receta magistral dice que vence en 30 días, mientras que una caja de marca dura 2 años. Usted explica técnicamente que:",
      options: [
        "A) Las farmacias usan ingredientes de menor calidad.",
        "B) Los preparados magistrales son elaboraciones extemporáneas cuya estabilidad es más limitada que la de una especialidad industrial.",
        "C) Es una estrategia para que el cliente vuelva más seguido.",
        "D) El vencimiento lo elige el auxiliar de turno."
      ],
      correctAnswer: 1, // B
      explanation: "Los preparados magistrales (extemporáneos) carecen de los conservantes complejos y los rigurosos ensayos de estabilidad acelerada a largo plazo que realiza la industria farmacéutica, por lo que su período de eficacia es clínico y a corto plazo."
    },
    {
      question: "7. ¿Qué requisito de infraestructura es obligatorio para el recetario según el Art. 14 del Decreto 466?",
      options: [
        "A) Estar ubicado en la sala de ventas para que el público lo vea.",
        "B) Ser una sección aparte y diferenciada que facilite la mantención de condiciones higiénicas permanentes.",
        "C) Tener alfombras para reducir el ruido del instrumental.",
        "D) Estar junto a los servicios higiénicos para fácil acceso al agua."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 14 del DTO 466 exige que, para evitar la contaminación cruzada y proteger las materias primas, el Recetario Magistral sea un recinto físicamente separado, independiente y de acceso restringido, construido con materiales lavables e impermeables."
    },
    {
      question: "8. Si una farmacia elabora un preparado oficinal basándose estrictamente en la Farmacopea Chilena, se denomina:",
      options: [
        "A) Fórmula Magistral.",
        "B) Especialidad Farmacéutica.",
        "C) Preparado Oficinal o Galénico.",
        "D) Producto Biológico Recombinante."
      ],
      correctAnswer: 2, // C
      explanation: "A diferencia de la fórmula magistral (hecha a medida para un paciente específico), el preparado oficinal se elabora bajo la dirección del farmacéutico basándose en las monografías oficiales de la Farmacopea para su entrega directa en la farmacia."
    },
    {
      question: "9. ¿Cuál es el plazo máximo para que el Director Técnico conteste un reclamo sobre la calidad de un producto en el Libro de Reclamos?",
      options: [
        "A) 24 horas.",
        "B) 3 días.",
        "C) Una semana.",
        "D) Un mes."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 64 del DS 466 establece que el Director Técnico tiene un plazo legal y perentorio de 3 días para revisar, investigar y dar respuesta por escrito a los reclamos sanitarios dejados por el público en el Libro Oficial de Reclamos."
    },
    {
      question: "10. Usted está dispensando una crema elaborada en el recetario. ¿Qué información es crítica entregar al paciente según las buenas prácticas?",
      options: [
        "A) Solo el precio total.",
        "B) Información verbal o escrita sobre su correcta utilización, administración y conservación.",
        "C) La dirección de la SEREMI local.",
        "D) Una muestra médica de un perfume similar."
      ],
      correctAnswer: 1, // B
      explanation: "La dispensación informada es un acto clínico y una obligación profesional (Art. 40 E y normativas de URM). Informar sobre la conservación (ej. cadena de frío o resguardo de la luz) es crítico para preparados magistrales, ya que su estabilidad es altamente frágil."
    }
  ]
};