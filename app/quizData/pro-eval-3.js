// app/quizData/pro-eval-3.js

export const proEval3 = {
  id: "pro-eval-3",
  title: "Evaluación PRO 3: Dispensación, Legislación y Ética (Módulo 1.3)",
  description: "Casos prácticos de alta exigencia sobre dispensación de estupefacientes, bioequivalencia, uso racional de medicamentos y fiscalización SEREMI.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "(SITUACIONAL) El Químico Farmacéutico sale por 30 minutos a un trámite bancario. Llega un paciente urgente con una receta de Morfina (Estupefaciente). ¿Qué debe hacer el auxiliar?",
      options: [
        "A) Despacharla para no interrumpir el tratamiento del dolor.",
        "B) Pedirle al paciente que espere o regrese cuando el DT esté presente, ya que el despacho de estupefacientes es exclusivo del profesional.",
        "C) Llamar al DT por teléfono para que autorice el despacho verbalmente.",
        "D) Pedirle a otro auxiliar con más años de experiencia que firme la receta."
      ],
      correctAnswer: 1, // B
      explanation: "Según el Reglamento de Estupefacientes (DS 404) y el DS 466, el despacho, registro y custodia de medicamentos bajo condición de Receta Cheque o Receta Retenida es responsabilidad directa e indelegable del Químico Farmacéutico."
    },
    {
      question: "(TÉCNICA) ¿Cuál es el requisito de experiencia laboral que exige el Art. 28 del DTO 466 (modificado por el DS 38) para obtener la resolución de auxiliar?",
      options: [
        "A) 6 meses de práctica en un hospital.",
        "B) Al menos un año de desempeño certificado por un Químico Farmacéutico.",
        "C) 5 años de desempeño como vendedor de farmacia.",
        "D) Haber aprobado un curso de 1.600 horas cronológicas."
      ],
      correctAnswer: 1, // B
      explanation: "El Decreto Supremo 38 (que modifica el DS 466) establece que para rendir el examen ante la SEREMI, el postulante debe contar con licencia de enseñanza media y acreditar un desempeño práctico de al menos un año mediante un certificado de idoneidad firmado por el Químico Farmacéutico."
    },
    {
      question: "(SITUACIONAL) Un paciente compra Amoxicilina y le comenta que 'siempre le da diarrea con los antibióticos'. ¿Cuál es la acción ética y técnica del auxiliar?",
      options: [
        "A) Decirle que es normal y que aguante los 7 días.",
        "B) Sugerirle suspender el antibiótico si le duele el estómago.",
        "C) Realizar educación sanitaria sugiriendo el uso de probióticos para restaurar la flora intestinal.",
        "D) Decirle que la marca que compró es de mala calidad."
      ],
      correctAnswer: 2, // C
      explanation: "Dentro del rol sanitario de la farmacia, el auxiliar bajo supervisión debe promover el Uso Racional de Medicamentos (URM). Ante una Reacción Adversa a Medicamentos (RAM) esperable como la disbiosis por antibióticos, la recomendación de probióticos es una intervención técnica adecuada para asegurar la adherencia al tratamiento."
    },
    {
      question: "(TÉCNICA) Según el Código Sanitario y la Ley de Fármacos, si una receta viene por nombre de fantasía, es deber del auxiliar:",
      options: [
        "A) Vender solo la marca indicada para no tener problemas legales.",
        "B) Informar al paciente que la receta autoriza el intercambio por bioequivalentes certificados si existen.",
        "C) Llamar al médico para preguntarle si puede cambiar la marca.",
        "D) Cobrar un extra por entregar un medicamento distinto al escrito."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 101 del Código Sanitario (modificado por la Ley 20.724) establece que si existe un equivalente terapéutico (bioequivalente certificado), el profesional de la farmacia tiene la obligación de dispensarlo a solicitud del paciente, informando sobre la intercambiabilidad."
    },
    {
      question: "(SITUACIONAL) Al reponer estanterías, usted encuentra una caja de insulina cuya fecha de vencimiento fue ayer. ¿Qué acción corresponde?",
      options: [
        "A) Dejarla al frente para que se venda rápido (sistema FEFO).",
        "B) Borrar la fecha con un marcador y venderla con descuento.",
        "C) Trasladarla de inmediato al área de productos no aptos e informar al DT para su retiro de circulación.",
        "D) Usarla como muestra de exhibición en la vitrina."
      ],
      correctAnswer: 2, // C
      explanation: "El Reglamento de Farmacias (DS 466) prohíbe estrictamente la tenencia y expendio de medicamentos vencidos o alterados. Estos deben ser retirados de inmediato de las estanterías de venta y ubicados en el sector de Cuarentena o Rechazados para su posterior destrucción autorizada."
    },
    {
      question: "(SITUACIONAL) Un cliente llega molesto exigiendo que usted le recomiende 'algo fuerte' para una infección urinaria porque no quiere ir al médico. Su respuesta ética es:",
      options: [
        "A) Sugerirle Ciprofloxacino Milab, ya que es muy efectivo.",
        "B) Explicar que el diagnóstico y prescripción de antibióticos es facultad exclusiva del médico y que el uso inadecuado causa resistencia bacteriana.",
        "C) Venderle un analgésico y decirle que con eso se le pasará.",
        "D) Decirle que use remedios caseros como jugo de arándano solamente."
      ],
      correctAnswer: 1, // B
      explanation: "La venta de antimicrobianos exige receta médica retenida. Además, el Uso Racional de Medicamentos instruye que el equipo de farmacia debe desincentivar activamente la automedicación de antibióticos para combatir la crisis global de resistencia antimicrobiana (RAM)."
    },
    {
      question: "(TÉCNICA) ¿Qué organismo tiene la facultad de cancelar la autorización sanitaria de un auxiliar si este comete infracciones graves?",
      options: [
        "A) El propietario de la farmacia.",
        "B) La Secretaría Regional Ministerial de Salud (SEREMI).",
        "C) El Instituto de Salud Pública (ISP).",
        "D) El Colegio de Químicos Farmacéuticos."
      ],
      correctAnswer: 1, // B
      explanation: "El Decreto Supremo 38 establece que el Secretario Regional Ministerial de Salud podrá, previo sumario sanitario en el que se acredite fehacientemente la infracción, suspender o cancelar la autorización sanitaria del auxiliar de farmacia."
    },
    {
      question: "(SITUACIONAL) Usted recibe un pedido de psicotrópicos del laboratorio. ¿Quién debe firmar la guía de recepción y custodiar las llaves del armario metálico?",
      options: [
        "A) El guardia de seguridad.",
        "B) El auxiliar con más antigüedad.",
        "C) El Director Técnico (Químico Farmacéutico).",
        "D) El administrador del local."
      ],
      correctAnswer: 2, // C
      explanation: "El Decreto Supremo 405 sobre productos psicotrópicos establece que la persona natural o jurídica propietaria y el Director Técnico del establecimiento responderán legalmente de la adquisición, mantenimiento, custodia y entrega a cualquier título de estos productos controlados."
    },
    {
      question: "(SITUACIONAL) Al leer una receta, nota que la letra del médico es totalmente ilegible en la dosis. El paciente dice que cree que es 'una al día'. ¿Qué hace usted?",
      options: [
        "A) Anota '1 al día' en la etiqueta basándose en lo que dice el paciente.",
        "B) Le pide a un compañero que adivine qué dice.",
        "C) Consulta obligatoriamente al Químico Farmacéutico para validar la receta antes de despachar.",
        "D) Le entrega el envase sin etiqueta para no equivocarse."
      ],
      correctAnswer: 2, // C
      explanation: "El Art. 5 del DS 90 instruye que el auxiliar actúa bajo la supervigilancia del profesional químico-farmacéutico. Ante prescripciones erróneas, enmendadas o ilegibles que presenten dudas o peligrosidad, el DT tiene la facultad legal exclusiva de rechazar o visar el documento médico."
    },
    {
      question: "(SITUACIONAL) Un inspector de la SEREMI le pide su identificación y carnet de auxiliar autorizado durante una visita. Usted:",
      options: [
        "A) Se niega porque no es carabinero.",
        "B) Le entrega los documentos de inmediato, ya que la autorización debe estar disponible en todo momento.",
        "C) Le dice que sus papeles los tiene el dueño en la oficina central.",
        "D) Le pide que vuelva cuando esté el abogado de la empresa."
      ],
      correctAnswer: 1, // B
      explanation: "Todo el personal que ejerce labores en una farmacia, en especial los auxiliares paramédicos, deben mantener su certificado de competencias o carnet a disposición permanente para la verificación por parte de la autoridad fiscalizadora sanitaria."
    }
  ]
};