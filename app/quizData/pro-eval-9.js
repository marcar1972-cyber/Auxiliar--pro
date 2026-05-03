9
// app/quizData/pro-eval-9.js

export const proEval9 = {
  id: "pro-eval-9",
  title: "Evaluación PRO 9: Formas Farmacéuticas Especiales y Estériles (Módulo 2.5)",
  description: "Manejo técnico y normativo de inyectables, colirios, parches transdérmicos, inhaladores y preservación de la cadena de frío.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. (Situacional) Una madre trae un frasco de antibiótico inyectable (Polvo para solución) de 500 mL y usted nota que al moverlo se ven partículas blancas flotando tras haberlo mezclado. Según el Art. 84 del DTO 466, ¿qué debe hacer?",
      options: [
        "A) Agitarlo más fuerte hasta que desaparezcan.",
        "B) Entregarlo, ya que los antibióticos suelen ser así.",
        "C) Desecharlo o llevarlo a Cuarentena por sospecha de inestabilidad o contaminación, ya que debe ser una solución límpida.",
        "D) Sugerir al paciente que lo filtre con una gasa antes de usarlo."
      ],
      correctAnswer: 2, // C
      explanation: "Según el Art. 84 del DTO 466, las soluciones parenterales (inyectables) deben ser límpidas. La presencia de partículas en suspensión en una forma que debe ser una solución es una falla crítica de calidad, indicando precipitación o contaminación, lo que puede ser letal vía intravenosa. Debe ser aislado en Cuarentena."
    },
    {
      question: "2. (Conocimiento Crítico) ¿Qué característica técnica es indispensable en los colirios para evitar dolor e irritación al contacto con la mucosa ocular?",
      options: [
        "A) Que tengan un color transparente.",
        "B) Que sean medicamentos bioequivalentes certificados.",
        "C) Que mantengan la esterilidad y la isotonía con el fluido lagrimal.",
        "D) Que se puedan fraccionar en el mesón de la farmacia."
      ],
      correctAnswer: 2, // C
      explanation: "La seguridad y tolerancia de los preparados oftálmicos dependen críticamente de dos factores: la esterilidad (para no causar infecciones oculares) y la isotonía (tener la misma presión osmótica y pH que las lágrimas) para evitar que el fármaco dañe la delicada mucosa corneal."
    },
    {
      question: "3. (Situacional) Un paciente le pregunta por qué debe usar una aerocámara con su inhalador si él 'ya es adulto'. Su explicación profesional es:",
      options: [
        "A) Es solo para que el inhalador se vea más profesional.",
        "B) Sirve para que el medicamento no manche los dientes.",
        "C) Permite que las partículas del fármaco queden suspendidas y lleguen mejor al pulmón, reduciendo los efectos secundarios en la boca y garganta.",
        "D) Solo es obligatoria para los niños menores de 5 años."
      ],
      correctAnswer: 2, // C
      explanation: "Biofarmacéuticamente, la aerocámara (espaciador) desacelera la velocidad de salida de las partículas. Esto optimiza el depósito pulmonar profundo y reduce drásticamente el impacto orofaríngeo, minimizando la absorción sistémica indeseada y los efectos adversos locales, independientemente de la edad del paciente."
    },
    {
      question: "4. (Conocimiento Crítico) Según el Decreto 466 (Art. 40), ¿qué forma farmacéutica estéril o especial tiene prohibido el fraccionamiento en farmacias?",
      options: [
        "A) Óvulos vaginales.",
        "B) Supositorios rectales.",
        "C) Medicamentos que requieran cadena de frío (refrigeración).",
        "D) Comprimidos de venta directa."
      ],
      correctAnswer: 2, // C
      explanation: "El Artículo 40 del Reglamento de Farmacias prohíbe expresamente fraccionar cualquier producto termolábil. Abrir envases de productos que requieren refrigeración rompe la cadena de frío certificada, comprometiendo irreparablemente la estabilidad y eficacia del medicamento."
    },
    {
      question: "5. (Situacional) Un cliente llega buscando 'óvulos de Clotrimazol' pero nota que la caja que usted le entrega está blanda y deformada por el calor del mostrador. ¿Qué acción corresponde?",
      options: [
        "A) Decirle que los meta al refrigerador para que recuperen su forma.",
        "B) Trasladar el producto al área de productos no aptos, ya que el calor altera la estabilidad física y la dosis de las formas moldeadas.",
        "C) Venderlos con descuento por daño de empaque.",
        "D) Abrir uno para verificar si el olor es normal."
      ],
      correctAnswer: 1, // B
      explanation: "Las formas farmacéuticas semisólidas moldeadas dependen de su integridad física para garantizar la dosis unitaria. La deformación por calor indica pérdida de estabilidad y alteración del punto de fusión, imposibilitando su correcta administración y absorción. Debe ser aislado."
    },
    {
      question: "6. (Situacional) Un paciente compra parches transdérmicos para el dolor crónico y le pregunta si puede 'cortar el parche por la mitad' para que le dure el doble. Según la tecnología de estos sistemas:",
      options: [
        "A) Sí, siempre que use una tijera desinfectada.",
        "B) No, al cortarlo se destruye el sistema de liberación controlada, lo que puede causar una absorción masiva y tóxica del fármaco.",
        "C) Sí, pero debe pegarlo con cinta adhesiva extra.",
        "D) Solo si el parche es de una marca genérica."
      ],
      correctAnswer: 1, // B
      explanation: "Los parches transdérmicos son sistemas terapéuticos de alta tecnología. Cortarlos rompe la membrana de control de velocidad, provocando un vaciamiento repentino de la dosis total (fenómeno de 'dose dumping'), lo que puede causar una intoxicación severa o letal en el paciente."
    },
    {
      question: "7. (Conocimiento Crítico) ¿Cuál es la principal ventaja biológica de la vía de administración intravenosa (IV) frente a la vía oral?",
      options: [
        "A) Es más barata.",
        "B) No requiere que el paciente esté despierto.",
        "C) Proporciona una biodisponibilidad del 100% de forma inmediata al saltar el proceso de absorción.",
        "D) No tiene riesgo de reacciones adversas."
      ],
      correctAnswer: 2, // C
      explanation: "Definición técnica de farmacocinética: Al inyectar el fármaco directamente en el torrente sanguíneo, se omite por completo la fase de absorción y el metabolismo de primer paso hepático, logrando una biodisponibilidad del 100% y un inicio de acción terapéutica inmediato."
    },
    {
      question: "8. (Situacional) Al dispensar un inhalador preventivo (Corticoides), ¿qué recomendación de autocuidado es vital darle al paciente para evitar efectos secundarios locales?",
      options: [
        "A) Tomar un vaso de leche después del uso.",
        "B) Enjuagarse la boca con agua tras la aplicación para evitar candidiasis (hongos) u otras irritaciones.",
        "C) Aplicar el puf directamente sobre la lengua.",
        "D) Usarlo solo cuando sienta falta de aire."
      ],
      correctAnswer: 1, // B
      explanation: "Parte del rol de educación sanitaria: Los corticoides inhalatorios generan inmunosupresión local en la mucosa bucal. El enjuague posterior a la administración elimina los restos del fármaco, siendo la medida preventiva más eficaz contra la candidiasis orofaríngea."
    },
    {
      question: "9. (Conocimiento Crítico) El término 'Isotónico' aplicado a un inyectable de gran volumen significa que:",
      options: [
        "A) Tiene la misma densidad que el agua.",
        "B) Posee una presión osmótica igual a la de la sangre para no dañar los glóbulos rojos.",
        "C) Es un medicamento que no requiere receta médica.",
        "D) Ha sido fabricado bajo luz ultravioleta."
      ],
      correctAnswer: 1, // B
      explanation: "Parámetro crítico de seguridad biológica para fluidoterapia. La isotonía garantiza que el inyectable posea la misma presión osmótica que el plasma sanguíneo, previniendo la hemólisis (destrucción) o el encogimiento de los glóbulos rojos al infundir grandes volúmenes."
    },
    {
      question: "10. (Situacional) Un fiscalizador de la SEREMI observa que usted está entregando 3 óvulos fraccionados de una tira de 6. ¿Es esto legal según el Art. 40 del DTO 466?",
      options: [
        "A) No, el fraccionamiento de óvulos está prohibido.",
        "B) Sí, los óvulos y supositorios son formas farmacéuticas que la ley permite fraccionar de un envase clínico bajo supervisión del DT.",
        "C) Solo si se trata de una farmacia de hospital.",
        "D) Sí, pero debe regalarle el resto de la tira al cliente."
      ],
      correctAnswer: 1, // B
      explanation: "El Artículo 40 del Reglamento de Farmacias faculta explícitamente el fraccionamiento de formas farmacéuticas semisólidas moldeadas (como supositorios y óvulos) desde envases clínicos, siempre y cuando se respete la integridad del blíster o envase primario individual."
    }
  ]
};