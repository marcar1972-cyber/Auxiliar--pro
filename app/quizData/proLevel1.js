// quizData/proLevel1.js

export const proLevel1 = {
  id: 1,
  title: "Nivel 1 PRO: Conocimientos Básicos y Conceptos Generales",
  description: "Cápsulas de normativa avanzada y excepciones legales para poner a prueba la atención del profesional.",
  questions: [
    {
      question: "Un paciente presenta una receta de Clonazepam en comprimidos (producto comercial) indicando un tratamiento por 60 días. La receta fue emitida ayer. ¿Se puede despachar?",
      options: [
        "A) No, la ley prohíbe tratamientos de más de 30 días para cualquier medicamento psicotrópico.",
        "B) Sí, pero obligatoriamente se debe entregar fraccionado de 30 en 30 días.",
        "C) Sí, porque la restricción legal de máximo 30 días aplica solo a las fórmulas magistrales, no a las especialidades farmacéuticas ya fabricadas.",
        "D) No, porque el Clonazepam requiere Receta Cheque y esta solo permite 30 días."
      ],
      correctAnswer: 2, // C
      explanation: "La restricción de un máximo de 30 días de tratamiento rige exclusivamente para las recetas magistrales de productos psicotrópicos. Para especialidades farmacéuticas (productos de laboratorio), se puede despachar la cantidad indicada por el médico siempre que la receta esté vigente (30 días desde su emisión)."
    },
    {
      question: "¿Quién tiene la facultad legal exclusiva para revisar minuciosamente y rechazar el despacho de una receta que presenta enmendaduras u omisiones?",
      options: [
        "A) El Auxiliar de Farmacia, derivando el caso al médico tratante.",
        "B) El Director Técnico (Químico Farmacéutico).",
        "C) El Auxiliar de Farmacia, siempre que tenga más de 3 años de experiencia certificada por la SEREMI.",
        "D) El dueño de la farmacia o representante legal del establecimiento."
      ],
      correctAnswer: 1, // B
      explanation: "Según el Reglamento de Farmacias, la revisión, validación y la facultad de rechazar el despacho de una receta médica es una labor exclusiva e indelegable del Químico Farmacéutico en su rol de Director Técnico o profesional de turno."
    },
    {
      question: "¿Cuál es la condición de venta legal de un jarabe cuya fórmula contiene Codeína en una dosis exacta de 10 mg por unidad de administración, mezclada con otros ingredientes?",
      options: [
        "A) Receta Médica Retenida.",
        "B) Receta Cheque.",
        "C) Venta Directa (Sin receta).",
        "D) Receta Médica Simple."
      ],
      correctAnswer: 3, // D
      explanation: "Aunque la codeína es un opiáceo, el Decreto 404 establece una excepción: cuando la dosis es de hasta 10 mg por unidad de administración y se encuentra asociada a otros principios activos, su condición de venta baja a Receta Médica Simple."
    },
    {
      question: "Si al mesón de la farmacia llega un paciente con una receta de un estupefaciente que, a juicio fundado, es evidentemente falsa o adulterada, ¿cuál es el procedimiento legal correcto?",
      options: [
        "A) Devolver la receta al paciente y negarse a vender el medicamento para evitar problemas legales.",
        "B) Retener la receta, anotar los datos del portador y dar cuenta (denunciar) a la SEREMI de Salud correspondiente.",
        "C) Retener la receta y llamar a Carabineros de inmediato para realizar una detención ciudadana en el local.",
        "D) Despacharla para evitar un altercado con el paciente, pero anotar el incidente en el libro de reclamos de la farmacia."
      ],
      correctAnswer: 1, // B
      explanation: "El reglamento de estupefacientes obliga al Químico Farmacéutico a retener cualquier receta sospechosa de falsificación o adulteración, registrar los datos del portador y realizar la denuncia formal ante la autoridad sanitaria (SEREMI)."
    },
    {
      question: "Según la normativa vigente, ¿cuáles son los requisitos mínimos exigidos para rendir el examen ante la SEREMI y obtener el certificado de Auxiliar de Farmacia?",
      options: [
        "A) Poseer el título de Técnico en Enfermería Nivel Superior (TENS) vigente.",
        "B) Licencia de Enseñanza Media (4° medio), acreditar al menos 1 año de experiencia en farmacia y presentar un certificado de idoneidad firmado por el Químico Farmacéutico.",
        "C) Ser estudiante universitario de una carrera de salud con al menos 6 semestres aprobados.",
        "D) Licencia de Enseñanza Media y aprobar un curso de formación técnica de 1.600 horas exigido por el Ministerio de Salud."
      ],
      correctAnswer: 1, // B
      explanation: "El postulante debe presentar el Certificado de Enseñanza Media (4° medio). En cuanto a la experiencia, no se exige una carga de horas de formación específica, sino acreditar un desempeño laboral efectivo de al menos 1 año, respaldado mediante un Certificado de Idoneidad emitido y firmado por el Químico Farmacéutico, además de la copia del contrato de trabajo."
    },
    {
      question: "Respecto a la venta mediante medios electrónicos (farmacias por internet), la normativa prohíbe estrictamente el expendio de:",
      options: [
        "A) Cualquier tipo de medicamento que requiera receta médica.",
        "B) Medicamentos psicotrópicos de la Lista IV (como el Diazepam o Alprazolam).",
        "C) Medicamentos cuya condición de venta sea \"Receta Cheque\".",
        "D) Especialidades farmacéuticas que requieran refrigeración."
      ],
      correctAnswer: 2, // C
      explanation: "El comercio electrónico de medicamentos permite la venta de productos con receta simple o retenida mediante la validación digital del documento, pero prohíbe expresamente el expendio a domicilio de medicamentos sujetos a control de Receta Cheque."
    }
  ]
};