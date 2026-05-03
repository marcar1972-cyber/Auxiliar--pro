const basicEval2 = {
  id: 2,
  title: "Nivel Inicial 2: Recetas y Expendio",
  description: "Normativa básica sobre la validación y tipos de recetas médicas.",
  questions: [
    {
      question: "¿Qué tipo de receta se exige obligatoriamente para despachar productos estupefacientes y psicotrópicos de las Listas II y III?",
      options: [
        "A) Receta Médica Retenida.",
        "B) Receta Cheque.",
        "C) Receta Simple.",
        "D) Receta Magistral sin control."
      ],
      correctAnswer: 1,
      explanation: "Según los DS 404 y 405, los productos de las Listas II y III requieren Receta Cheque. La Lista IV de psicotrópicos usa Receta Retenida."
    },
    {
      question: "Si una receta médica presenta enmendaduras (borrones o correcciones no timbradas por el médico), el Auxiliar debe:",
      options: [
        "A) Despacharla si logra entender la letra del médico.",
        "B) Romperla frente al paciente para evitar falsificaciones.",
        "C) Derivar la receta al Químico Farmacéutico para su evaluación y posible rechazo.",
        "D) Corregir el error con lápiz pasta."
      ],
      correctAnswer: 2,
      explanation: "La revisión minuciosa y el rechazo de una receta adulterada o con enmendaduras es facultad exclusiva y responsabilidad del Químico Farmacéutico (DS 404, Art 30)."
    },
    {
      question: "¿Cuál es el cuerpo legal (Decreto) que regula específicamente el control de los productos Estupefacientes?",
      options: [
        "A) Decreto Supremo 466.",
        "B) Decreto Supremo 404.",
        "C) Decreto Supremo 405.",
        "D) Ley 20.724."
      ],
      correctAnswer: 1,
      explanation: "El Decreto Supremo 404 aprueba el reglamento de productos estupefacientes en Chile, mientras que el DS 405 regula los psicotrópicos."
    },
    {
      question: "Al despachar una receta cheque o una receta retenida, ¿qué debe exigir siempre la persona a cargo del despacho?",
      options: [
        "A) Que el portador firme un pagaré.",
        "B) Que el paciente venga acompañado de un familiar.",
        "C) Que el portador sea mayor de 18 años y exhiba su Cédula de Identidad.",
        "D) Un certificado médico adicional."
      ],
      correctAnswer: 2,
      explanation: "La ley indica que estas recetas deben despacharse a personas mayores de 18 años que exhiban su cédula de identidad para el registro."
    },
    {
      question: "¿Cuál es el Decreto Supremo que regula el funcionamiento de Farmacias, Droguerías y Almacenes Farmacéuticos?",
      options: [
        "A) Decreto Supremo 466.",
        "B) Decreto Supremo 404.",
        "C) Decreto Supremo 594.",
        "D) Norma Técnica 147."
      ],
      correctAnswer: 0,
      explanation: "El DS 466 es el Reglamento de Farmacias, Droguerías, Almacenes Farmacéuticos, Botiquines y Depósitos Autorizados."
    },
    {
      question: "¿Por cuánto tiempo deben permanecer archivadas de forma correlativa las recetas despachadas de estupefacientes y psicotrópicos en el establecimiento?",
      options: [
        "A) Al menos durante 1 año siguiente a su despacho.",
        "B) Por 6 meses.",
        "C) Por 5 años.",
        "D) No se archivan, se devuelven al paciente."
      ],
      correctAnswer: 0,
      explanation: "El artículo 31 del DS 404 y correlativos exigen que estas recetas se inutilicen y archiven por al menos un año."
    },
    {
      question: "En relación a la venta a través de medios electrónicos (farmacias digitales), ¿qué tipo de receta NO está permitida para este formato según el DS 466?",
      options: [
        "A) Receta Simple.",
        "B) Receta Retenida.",
        "C) Receta Magistral.",
        "D) Receta Cheque."
      ],
      correctAnswer: 3,
      explanation: "El DS 466, Art 87 L, indica explícitamente: 'Los medicamentos cuya condición de venta es receta-cheque no están comprendidos entre aquellos que pueden expenderse por medios electrónicos'."
    },
    {
      question: "Si el Químico Farmacéutico estimare fundadamente que una receta cheque ha sido falsificada, ¿cuál es el procedimiento legal?",
      options: [
        "A) Llamar a Carabineros de inmediato.",
        "B) Devolverla al paciente y pedirle que traiga una nueva.",
        "C) No despacharla, retenerla en su poder, tomar datos del portador y dar cuenta al Servicio de Salud.",
        "D) Despacharla pero anotar el rut en el reverso."
      ],
      correctAnswer: 2,
      explanation: "El artículo 30 del DS 404 instruye retener la receta falsificada o adulterada, tomar los datos y notificar a la autoridad sanitaria correspondiente."
    },
    {
      question: "¿Está permitido elaborar o distribuir muestras médicas de productos estupefacientes (Listas I y II)?",
      options: [
        "A) Sí, pero solo a médicos especialistas.",
        "B) Estrictamente prohibido efectuar promoción o distribución de muestras médicas de estos productos.",
        "C) Sí, si lo autoriza el Director Técnico del laboratorio.",
        "D) Solo en congresos médicos."
      ],
      correctAnswer: 1,
      explanation: "El artículo 34 del DS 404 prohíbe elaborar, distribuir muestras médicas o efectuar promoción comercial de estupefacientes."
    },
    {
      question: "Legalmente, ¿quién debe despachar personalmente las recetas cheque y recetas retenidas de estupefacientes y psicotrópicos?",
      options: [
        "A) El Auxiliar de Farmacia.",
        "B) El Director Técnico de la farmacia (Químico Farmacéutico).",
        "C) El Cajero del establecimiento.",
        "D) Cualquier profesional de salud presente."
      ],
      correctAnswer: 1,
      explanation: "Los DS 404 y 405 establecen que estas recetas deben ser despachadas personalmente por el Director Técnico."
    }
  ]
};

export default basicEval2;