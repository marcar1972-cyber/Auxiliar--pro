// app/quizData/pro-eval-5.js

export const proEval5 = {
  id: "pro-eval-5",
  title: "Evaluación PRO 5: Tecnología Farmacéutica y Formas de Dosificación (Módulo 2.1)",
  description: "Conceptos sobre excipientes, formas farmacéuticas, fórmulas magistrales, estabilidad y Buenas Prácticas de Manufactura (BPM).",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. Un paciente le consulta si puede disolver una cápsula de Amoxicilina en agua para dársela a su hijo. ¿Cuál es la respuesta técnicamente correcta?",
      options: [
        "A) Sí, siempre que se use agua tibia.",
        "B) No, las cápsulas están diseñadas para proteger el fármaco y asegurar su liberación en el tracto digestivo; al abrirla se altera su biodisponibilidad.",
        "C) Sí, pero debe tomarlo de inmediato.",
        "D) Solo si la cápsula es de color transparente."
      ],
      correctAnswer: 1, // B
      explanation: "La integridad de la forma farmacéutica es crítica para la farmacocinética. Abrir una cápsula puede exponer el principio activo a los ácidos estomacales, degradándolo o alterando gravemente su absorción y eficacia."
    },
    {
      question: "2. ¿Cuál es la función principal de los excipientes en la formulación de un medicamento?",
      options: [
        "A) Curar la enfermedad de forma secundaria.",
        "B) Dar forma, estabilidad, sabor y permitir que el principio activo llegue adecuadamente a la sangre.",
        "C) Reemplazar al principio activo cuando este es muy caro.",
        "D) Actuar solo como colorante para identificar el laboratorio."
      ],
      correctAnswer: 1, // B
      explanation: "Definición técnica de excipiente: son sustancias farmacológicamente inertes que acompañan al principio activo para facilitar su administración, absorción, conservación y preparación de la forma farmacéutica."
    },
    {
      question: "3. Según el Decreto 466 (Art. 8), ¿cuál de las siguientes es una facultad exclusiva de las farmacias respecto a la tecnología farmacéutica?",
      options: [
        "A) Exportar medicamentos a granel.",
        "B) Fabricar especialidades farmacéuticas de forma industrial.",
        "C) Preparar fórmulas magistrales y oficinales prescritas por profesionales.",
        "D) Cambiar la dosis de los medicamentos sin informar al médico."
      ],
      correctAnswer: 2, // C
      explanation: "Según el Art. 8 del DTO 466, las farmacias y recetarios magistrales son los únicos establecimientos autorizados para elaborar preparados farmacéuticos no industriales (fórmulas magistrales u oficinales) bajo prescripción."
    },
    {
      question: "4. El concepto que define la 'forma física en la cual se presenta un medicamento para facilitar su fraccionamiento, dispensación y administración' es:",
      options: [
        "A) Registro Sanitario.",
        "B) Posología.",
        "C) Forma Farmacéutica.",
        "D) Materia Prima."
      ],
      correctAnswer: 2, // C
      explanation: "Definición legal según el Decreto 3 (Art. 5): La forma farmacéutica es la disposición individualizada a que se adaptan los principios activos y excipientes para constituir un medicamento."
    },
    {
      question: "5. Caso de Mesón: Llega un pedido de jarabes y nota que uno de ellos presenta turbidez no habitual. Usted debe:",
      options: [
        "A) Agitarlo fuerte hasta que se aclare.",
        "B) Trasladarlo de inmediato al área de Cuarentena e informar al Director Técnico, por sospecha de pérdida de estabilidad.",
        "C) Ponerlo a la venta con un descuento.",
        "D) Cambiarle la etiqueta por una de 'Suspensión'."
      ],
      correctAnswer: 1, // B
      explanation: "Los cambios organolépticos (color, olor, turbidez en soluciones) son indicadores primarios de falla de estabilidad físico-química. El aislamiento en Cuarentena es obligatorio y preventivo."
    },
    {
      question: "6. ¿Qué garantiza el cumplimiento de las Buenas Prácticas de Manufactura (BPM) en un laboratorio de producción?",
      options: [
        "A) Que los medicamentos tengan el precio más bajo del mercado.",
        "B) La calidad uniforme y satisfactoria de los productos farmacéuticos en cada lote.",
        "C) Que el laboratorio pueda vender directamente al público.",
        "D) Que no se necesite un Químico Farmacéutico como Director Técnico."
      ],
      correctAnswer: 1, // B
      explanation: "Las BPM aseguran estándares de calidad mínimos y uniformes, minimizando los riesgos inherentes a cualquier producción farmacéutica (como la contaminación cruzada o confusiones) que no pueden detectarse mediante la prueba del producto final."
    },
    {
      question: "7. Un paciente le pregunta por qué su medicamento es 'Bioequivalente'. Su explicación técnica se basa en que:",
      options: [
        "A) Es un medicamento fabricado artesanalmente.",
        "B) Ha demostrado científicamente que tiene la misma eficacia, seguridad y biodisponibilidad que el original.",
        "C) Es un medicamento que no tiene efectos secundarios.",
        "D) Es un producto que se puede comprar sin receta médica."
      ],
      correctAnswer: 1, // B
      explanation: "La bioequivalencia garantiza la intercambiabilidad terapéutica. Significa que el medicamento genérico libera la misma cantidad de principio activo, a la misma velocidad, alcanzando la misma concentración en la sangre que el referente."
    },
    {
      question: "8. Si un médico prescribe una 'Fórmula Magistral', ¿qué característica debe tener esta preparación según la normativa?",
      options: [
        "A) Ser una fórmula secreta que solo el farmacéutico conoce.",
        "B) Ser elaborada extemporáneamente para un paciente determinado siguiendo la receta.",
        "C) Estar disponible en grandes cantidades en la estantería de venta directa.",
        "D) Ser importada directamente desde el extranjero."
      ],
      correctAnswer: 1, // B
      explanation: "Definición legal de fórmula magistral: preparado farmacéutico elaborado por el químico farmacéutico o bajo su dirección, para atender una prescripción médica destinada a un paciente individualizado."
    },
    {
      question: "9. ¿Cuál de los siguientes factores ambientales es el que más comúnmente afecta la estabilidad de los medicamentos en bodega?",
      options: [
        "A) El ruido ambiental.",
        "B) La temperatura, la humedad y la luz.",
        "C) La altitud geográfica exclusivamente.",
        "D) El tipo de estantería metálica."
      ],
      correctAnswer: 1, // B
      explanation: "Estos tres son los factores ambientales críticos descritos en las normas de Buenas Prácticas de Almacenamiento (BPA). Pueden causar reacciones de degradación como hidrólisis (humedad), oxidación (luz) y pérdida de potencia (temperatura)."
    },
    {
      question: "10. La liberación del principio activo desde una forma sólida depende principalmente de:",
      options: [
        "A) El color del envase secundario.",
        "B) El proceso de desintegración y disolución en los fluidos corporales.",
        "C) La hora en que el paciente se toma la presión.",
        "D) El número de serie o lote impreso."
      ],
      correctAnswer: 1, // B
      explanation: "Para que el principio activo de una forma sólida (ej. comprimido) pase a la sangre (absorción sistémica), primero debe desintegrarse en partículas más pequeñas y luego disolverse en los fluidos gastrointestinales."
    }
  ]
};