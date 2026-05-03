// app/quizData/pro-eval-15.js

export const proEval15 = {
  id: "pro-eval-15",
  title: "Evaluación PRO 15: Cálculos Posológicos y Normativa de Dispensación (Módulo 4.2)",
  description: "Casos prácticos de cálculo de dosis, matemáticas de farmacia, validez de recetas y fraccionamiento legal.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. Un paciente presenta una receta que indica: 'Paracetamol 500 mg, tomar 1 comprimido cada 8 horas por 5 días'. ¿Cuántos comprimidos debe dispensar el auxiliar para cubrir el tratamiento completo?",
      options: [
        "A) 10 comprimidos.",
        "B) 15 comprimidos.",
        "C) 8 comprimidos.",
        "D) 20 comprimidos."
      ],
      correctAnswer: 1, // B
      explanation: "Cálculo posológico básico: Frecuencia de cada 8 horas equivale a 3 tomas diarias (24 / 8 = 3). Por lo tanto: 1 comprimido x 3 veces al día = 3 comprimidos diarios. Multiplicado por 5 días de tratamiento = 15 comprimidos en total."
    },
    {
      question: "2. Según el Artículo 40 del Decreto Supremo 466, ¿cuál de los siguientes grupos de medicamentos tiene prohibido el fraccionamiento en farmacias?",
      options: [
        "A) Antibióticos en comprimidos.",
        "B) Analgésicos de venta directa.",
        "C) Productos psicotrópicos y estupefacientes.",
        "D) Vitaminas en cápsulas duras."
      ],
      correctAnswer: 2, // C
      explanation: "El Art. 40 del DTO 466 establece una prohibición taxativa de fraccionar cualquier producto regulado bajo la ley de controlados (Decretos 404 y 405), con el fin de asegurar una trazabilidad hermética y evitar desvíos ilícitos."
    },
    {
      question: "3. (CASO DE MESÓN) Se recibe una receta de una suspensión de Amoxicilina para un niño que pesa 10 kg. La indicación es '50 mg/kg/día' repartido en 2 tomas (cada 12 horas). La concentración es de 250 mg/5 ml. ¿Cuántos miligramos le corresponden al día?",
      options: [
        "A) 250 mg.",
        "B) 500 mg.",
        "C) 100 mg.",
        "D) 1000 mg."
      ],
      correctAnswer: 1, // B
      explanation: "Cálculo pediátrico: La dosis es de 50 mg por cada kilogramo de peso al día. Si el niño pesa 10 kg, la operación es: 50 mg x 10 kg = 500 mg diarios totales (los cuales se administrarán en 2 tomas de 250 mg, equivalentes a 5 ml cada 12 horas)."
    },
    {
      question: "4. ¿Qué información es obligatoria en el registro de fraccionamiento según el Artículo 19 A del Reglamento de Farmacias?",
      options: [
        "A) El color de la caja original.",
        "B) El número de lote y fecha de vencimiento del medicamento.",
        "C) El precio de costo del producto.",
        "D) La dirección comercial del laboratorio fabricante."
      ],
      correctAnswer: 1, // B
      explanation: "El registro oficial de fraccionamiento exige mantener la trazabilidad absoluta del medicamento. El lote y la fecha de vencimiento son datos críticos y obligatorios para poder retirar el producto en caso de alertas de calidad del ISP."
    },
    {
      question: "5. Un tratamiento indica 'medio comprimido en la mañana y 1 comprimido en la noche por 30 días'. ¿Cuántas unidades totales requiere el paciente?",
      options: [
        "A) 30 comprimidos.",
        "B) 45 comprimidos.",
        "C) 60 comprimidos.",
        "D) 15 comprimidos."
      ],
      correctAnswer: 1, // B
      explanation: "Cálculo de unidades: El paciente consume 0,5 comprimidos AM + 1 comprimido PM = 1,5 comprimidos diarios. Multiplicado por 30 días de tratamiento continuo: 1,5 x 30 = 45 comprimidos totales a dispensar."
    },
    {
      question: "6. ¿Qué condición debe cumplir el envase primario para que un medicamento sólido sea fraccionable en farmacia?",
      options: [
        "A) Que sea de color ámbar.",
        "B) Que permita la separación individual de cada unidad sin exponer el fármaco al ambiente.",
        "C) Que sea un frasco de vidrio de gran volumen.",
        "D) Que no tenga etiquetas impresas."
      ],
      correctAnswer: 1, // B
      explanation: "El fraccionamiento solo está permitido si el envase clínico (como un blíster alveolado) permite separar la unidad mediante corte, manteniendo la indemnidad absoluta del sello para que el fármaco no tenga contacto con el ambiente antes de su consumo."
    },
    {
      question: "7. (CASO DE MESÓN) Un fiscalizador de la SEREMI observa que usted está fraccionando un fármaco que requiere refrigeración (2°C-8°C). Esta acción es:",
      options: [
        "A) Legal si el auxiliar usa guantes.",
        "B) Ilegal, porque está prohibido fraccionar productos cuya condición de almacenamiento sea refrigerado.",
        "C) Permitida si el Químico Farmacéutico lo supervisa fuera del refrigerador.",
        "D) Legal solo si se hace en una farmacia móvil itinerante."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 40 prohíbe expresamente el fraccionamiento de cualquier producto farmacéutico termolábil. Fraccionar un medicamento refrigerado implica romper la cadena de frío, comprometiendo gravemente la estabilidad del principio activo."
    },
    {
      question: "8. ¿Cuál es el plazo máximo de validez de una receta médica para ser presentada en una farmacia para su despacho, según la normativa general?",
      options: [
        "A) 15 días.",
        "B) 60 días.",
        "C) 30 días desde su emisión.",
        "D) Un año."
      ],
      correctAnswer: 2, // C
      explanation: "Normativa de prescripción: Salvo excepciones de tratamientos prolongados indicados por el médico, las recetas (especialmente las retenidas y cheques) tienen una validez de 30 días desde su emisión, ya que la condición clínica del paciente puede variar y requiere reevaluación."
    },
    {
      question: "9. (CASO DE MESÓN) Usted debe dispensar una receta de Insulina que indica '40 UI diarias por 30 días'. La presentación es de 100 UI/ml en frascos de 10 ml. ¿Cuántos frascos debe entregar?",
      options: [
        "A) 1 frasco.",
        "B) 2 frascos.",
        "C) 5 frascos.",
        "D) 10 frascos."
      ],
      correctAnswer: 1, // B
      explanation: "Cálculo de biológicos: Necesidad total = 40 UI/día x 30 días = 1200 UI. Capacidad del envase = 100 UI/ml x 10 ml = 1000 UI por frasco. Al dividir 1200 / 1000, el paciente requiere 1,2 frascos. Por lo tanto, se deben dispensar 2 frascos para cubrir íntegramente el tratamiento."
    },
    {
      question: "10. ¿Qué debe entregarse obligatoriamente al paciente junto con un medicamento fraccionado para asegurar su información?",
      options: [
        "A) Una muestra médica de regalo.",
        "B) El folleto de información al paciente (inserto) autorizado en el registro.",
        "C) Una tarjeta de descuento para la próxima compra.",
        "D) Solo la boleta de venta."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 40 E del DTO 466 establece que, en el acto de fraccionamiento, la farmacia está obligada a entregar o adjuntar la información contenida en el folleto al paciente (inserto), asegurando el derecho a la información y el uso racional del medicamento."
    }
  ]
};