// app/quizData/pro-eval-6.js

export const proEval6 = {
  id: "pro-eval-6",
  title: "Evaluación PRO 6: Estabilidad, Fraccionamiento y Biofarmacia (Módulo 2.2)",
  description: "Análisis normativo y técnico sobre fraccionamiento legal, recubrimientos, cuarentena y biodisponibilidad.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. (Situacional) Una madre pregunta si puede moler un comprimido con recubrimiento entérico para dárselo a su hijo en una cuchara con yogurt. ¿Cuál es la instrucción técnica correcta?",
      options: [
        "A) Sí, siempre que el yogurt sea natural.",
        "B) No, al romper el recubrimiento el fármaco puede ser destruido por el ácido gástrico o causar irritación severa en el estómago.",
        "C) Sí, pero debe tomarlo con abundante agua después.",
        "D) Solo si el médico lo autorizó verbalmente."
      ],
      correctAnswer: 1, // B
      explanation: "El diseño entérico es una barrera de tecnología farmacéutica estructurada específicamente para resistir el pH ácido del estómago. Su destrucción mecánica anula la seguridad del producto, exponiendo al paciente a irritación gástrica o inactivando el principio activo antes de su absorción intestinal."
    },
    {
      question: "2. (Conocimiento Crítico) Según el Artículo 40 del Decreto 466, ¿cuál de estos grupos de medicamentos tiene prohibido el fraccionamiento en farmacias?",
      options: [
        "A) Analgésicos simples en envase clínico.",
        "B) Antibióticos betalactámicos sólidos.",
        "C) Productos psicotrópicos y estupefacientes sujetos a control legal.",
        "D) Vitaminas y suplementos minerales."
      ],
      correctAnswer: 2, // C
      explanation: "El Art. 40 del DTO 466 establece una prohibición taxativa e inexcusable de fraccionar cualquier producto regulado bajo el Reglamento de Estupefacientes (DS 404) y el Reglamento de Psicotrópicos (DS 405)."
    },
    {
      question: "3. (Situacional) Al recibir un pedido de bodega, usted nota que una caja de cápsulas de gelatina blanda ha estado expuesta al calor y las unidades se encuentran pegadas entre sí. ¿Qué acción de control de calidad corresponde?",
      options: [
        "A) Agitar la caja para separarlas y ponerlas a la venta.",
        "B) Trasladarlas al área de Cuarentena e informar al Director Técnico, ya que la estabilidad física está comprometida.",
        "C) Meterlas al refrigerador para que recuperen su forma.",
        "D) Abrir las cápsulas y vender el contenido como solución oral."
      ],
      correctAnswer: 1, // B
      explanation: "Los cambios en las propiedades físicas (como adherencia o fusión de cápsulas) indican una falla crítica de estabilidad termodinámica. Normativamente, cualquier producto con sospecha de alteración exige su inmediato aislamiento en el área de Cuarentena o Rechazados."
    },
    {
      question: "4. (Situacional) Un cliente trae una receta de 'Alprazolam 0,5 mg' (Psicotrópico Lista IV) por 10 comprimidos. El envase de la farmacia es de 30. ¿Puede usted fraccionar el envase para venderle los 10 que necesita?",
      options: [
        "A) Sí, para ayudar a la economía del paciente.",
        "B) No, el Decreto 466 prohíbe el fraccionamiento de productos psicotrópicos.",
        "C) Solo si el cliente deja su cédula de identidad en custodia.",
        "D) Sí, siempre que el Director Técnico realice el corte."
      ],
      correctAnswer: 1, // B
      explanation: "Los productos psicotrópicos no son fraccionables bajo ninguna circunstancia. La ley impone esta medida de seguridad para evitar el desvío ilícito y asegurar una trazabilidad y un control de stock estricto en el Libro Oficial correspondiente."
    },
    {
      question: "5. (Conocimiento Crítico) ¿Qué término define la 'fracción de principio activo que llega a la sangre y la velocidad con que ocurre'?",
      options: [
        "A) Farmacocinética.",
        "B) Biodisponibilidad.",
        "C) Potencia biológica.",
        "D) Estabilidad."
      ],
      correctAnswer: 1, // B
      explanation: "Definición técnica y legal establecida en el Artículo 5 del Decreto Supremo 3 (Reglamento del Sistema Nacional de Control de Productos Farmacéuticos). La biodisponibilidad es el parámetro fundamental para evaluar la equivalencia terapéutica."
    },
    {
      question: "6. (Situacional) Durante el proceso de fraccionamiento de un envase clínico de Losartán, un colega le pide usar el mismo mesón para fraccionar otro medicamento simultáneamente. ¿Qué indica la normativa técnica (Art. 14 bis)?",
      options: [
        "A) Se puede hacer si el mesón es grande.",
        "B) Está prohibido; el fraccionamiento debe ser un proceso continuo por producto para evitar confusiones o contaminación.",
        "C) Solo se puede si ambos son para el mismo paciente.",
        "D) Es posible si ambos usan guantes de látex."
      ],
      correctAnswer: 1, // B
      explanation: "El Art. 14 bis exige que las operaciones de fraccionamiento aseguren la calidad. Para evitar el riesgo gravísimo de contaminación cruzada o confusión de envases y rótulos, el fraccionamiento debe realizarse como un proceso continuo y exclusivo por producto (limpieza de despeje de línea)."
    },
    {
      question: "7. (Conocimiento Crítico) ¿Cuál es la función principal de un excipiente 'desintegrante' en un comprimido sólido?",
      options: [
        "A) Darle un color llamativo para identificarlo.",
        "B) Asegurar que el comprimido se rompa rápidamente al contacto con los fluidos gástricos para liberar el fármaco.",
        "C) Hacer que el medicamento sepa a fruta.",
        "D) Impedir que el medicamento venza antes de tiempo."
      ],
      correctAnswer: 1, // B
      explanation: "Los desintegrantes son excipientes críticos en biofarmacia. Al expandirse o canalizar el agua, rompen la matriz sólida, aumentando drásticamente la superficie de contacto para que el principio activo se disuelva y pueda ser absorbido."
    },
    {
      question: "8. (Situacional) Usted está dispensando una receta fraccionada. ¿Qué documento es obligatorio entregar al paciente junto con el nuevo envase, según el Art. 40 E del DTO 466?",
      options: [
        "A) Una copia del Libro de Reclamos.",
        "B) El folleto de información al paciente (inserto) autorizado en el registro.",
        "C) Una muestra médica de regalo.",
        "D) El catálogo comercial de los productos de marca."
      ],
      correctAnswer: 1, // B
      explanation: "Para garantizar el Derecho a la Información y el Uso Racional de Medicamentos, el Art. 40 E establece la obligatoriedad de adjuntar u otorgar la información contenida en el folleto al paciente (inserto) aprobado por el ISP en el registro sanitario."
    },
    {
      question: "9. (Situacional) Al organizar la estantería, encuentra cápsulas de Amoxicilina vencidas hace un mes. El dueño le sugiere ponerlas en oferta. ¿Cuál es su respuesta basada en el Art. 221 del DTO 466?",
      options: [
        "A) Se pueden vender con un 50% de descuento.",
        "B) Deben ser retiradas de circulación de inmediato por haber terminado su período de eficacia y no garantizar estabilidad.",
        "C) Se pueden vender si el cliente firma un consentimiento.",
        "D) Se deben donar a un hospital cercano."
      ],
      correctAnswer: 1, // B
      explanation: "El Art. 221 letra k) del DTO 466 obliga al Director Técnico y al personal a retirar de circulación de forma inmediata cualquier producto vencido, prohibiendo su tenencia en sala de ventas y comercialización, ya que su eficacia y seguridad han caducado legalmente."
    },
    {
      question: "10. (Situacional) ¿Qué información debe contener obligatoriamente el rótulo de un envase de medicamento fraccionado para garantizar la seguridad del paciente?",
      options: [
        "A) Nombre del dueño de la farmacia y su RUT.",
        "B) DCI, número de lote, fecha de vencimiento y nombre del paciente.",
        "C) Precio de costo y margen de ganancia.",
        "D) Solo el nombre de fantasía del medicamento."
      ],
      correctAnswer: 1, // B
      explanation: "El Art. 40 detalla los requisitos mínimos e ineludibles del rotulado del envase de entrega durante el fraccionamiento para mantener la trazabilidad y la seguridad clínica del paciente post-dispensación."
    }
  ]
};