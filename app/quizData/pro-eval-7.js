// app/quizData/pro-eval-7.js

export const proEval7 = {
  id: "pro-eval-7",
  title: "Evaluación PRO 7: Formas Farmacéuticas Líquidas (Módulo 2.3)",
  description: "Resolución de casos sobre jarabes, suspensiones extemporáneas, colirios y normativa de fraccionamiento de líquidos.",
  timeLimit: 15,
  passingScore: 80,
  questions: [
    {
      question: "1. Un paciente solicita que le vendan 5 mL de un jarabe para la tos que viene en frasco de 100 mL. ¿Es legal realizar este fraccionamiento según el Decreto 466?",
      options: [
        "A) Sí, siempre que se use una jeringa estéril.",
        "B) No, solo se pueden fraccionar líquidos que vengan en envases primarios monodosis.",
        "C) Sí, pero el Director Técnico debe firmar el Libro de Reclamos.",
        "D) Solo si el jarabe es de Venta Directa."
      ],
      correctAnswer: 1, // B
      explanation: "Según el Art. 40 del DTO 466, el fraccionamiento de formas farmacéuticas líquidas está prohibido a menos que el producto se presente desde el laboratorio en envases primarios que constituyan dosis unitarias (monodosis), para garantizar la esterilidad y dosis exacta."
    },
    {
      question: "2. ¿Cuál es la advertencia obligatoria que debe llevar el rotulado de una solución parenteral de gran volumen (más de 100 mL) según el Art. 84?",
      options: [
        "A) 'Mantener en lugar fresco y seco'.",
        "B) 'Agítese antes de usar'.",
        "C) 'Desechar en caso de turbidez o precipitado'.",
        "D) 'Venta bajo receta médica retenida'."
      ],
      correctAnswer: 2, // C
      explanation: "El Artículo 84 del Reglamento exige esta advertencia específica para soluciones parenterales (inyectables), ya que la presencia de turbidez o precipitado indica contaminación microbiana o incompatibilidad físico-química, lo cual es letal vía intravenosa."
    },
    {
      question: "3. Caso de Mesón: Una madre pregunta si puede guardar el antibiótico reconstituido (suspensión) por 6 meses para la próxima enfermedad de su hijo. Su respuesta técnica es:",
      options: [
        "A) Sí, mientras esté en el refrigerador.",
        "B) No, las preparaciones extemporáneas tienen un periodo de eficacia limitado tras la reconstitución (usualmente 7-14 días).",
        "C) Sí, si el color no ha cambiado.",
        "D) Debe congelarlo para que dure más."
      ],
      correctAnswer: 1, // B
      explanation: "La estabilidad física y química de los polvos para suspensión (preparaciones extemporáneas) se pierde rápidamente al agregarles agua (hidrólisis). Su período de eficacia post-reconstitución es corto (generalmente 7 a 14 días bajo refrigeración) y luego deben desecharse."
    },
    {
      question: "4. Respecto a los colirios, ¿qué característica garantiza que el paciente no sienta 'ardor' o daño al aplicarlos?",
      options: [
        "A) El color transparente.",
        "B) La isotonía y el ajuste de pH.",
        "C) La alta concentración de azúcar.",
        "D) Que sea un medicamento bioequivalente."
      ],
      correctAnswer: 1, // B
      explanation: "La compatibilidad fisiológica de los preparados oftálmicos (colirios) depende críticamente de que su presión osmótica sea igual a la de las lágrimas (isotonía) y su pH esté ajustado, evitando así irritación, ardor o daño en la córnea."
    },
    {
      question: "5. ¿Qué componente se define técnicamente como 'el líquido en el cual se disuelven o dispersan los principios activos'?",
      options: [
        "A) Excipiente sólido.",
        "B) Vehículo.",
        "C) Principio Activo.",
        "D) Marcador vegetal."
      ],
      correctAnswer: 1, // B
      explanation: "En tecnología farmacéutica de sistemas dispersos líquidos, el 'vehículo' es el excipiente líquido (como agua purificada, alcohol o jarabe simple) utilizado para portar, disolver o suspender el principio activo."
    },
    {
      question: "6. Caso de Mesón: Un inspector de la SEREMI revisa la lista de precios de la farmacia. ¿Cómo debe estar expresado el precio de los jarabes por ley?",
      options: [
        "A) Precio por cada 10 mL.",
        "B) Precio por frasco completo únicamente.",
        "C) Precio por cada 100 mL para facilitar la comparación.",
        "D) Precio sugerido por el laboratorio Milab."
      ],
      correctAnswer: 2, // C
      explanation: "El Artículo 45 C del DTO 466 (modificado por la Ley de Fármacos) exige transparencia tarifaria. Para productos líquidos, el listado debe expresar el precio de venta al público calculado por cada 100 mililitros, permitiendo al consumidor comparar opciones bioequivalentes."
    },
    {
      question: "7. ¿Por qué se prefiere una solución oral frente a un comprimido en un paciente adulto mayor con polifarmacia y disfagia?",
      options: [
        "A) Porque el líquido es siempre más barato.",
        "B) Porque facilita la deglución y permite una absorción más rápida al no requerir desintegración.",
        "C) Porque los líquidos no tienen efectos secundarios.",
        "D) Porque el jarabe tiene mejor olor."
      ],
      correctAnswer: 1, // B
      explanation: "Fundamento biofarmacéutico: En pacientes con disfagia (dificultad para tragar), los líquidos evitan el riesgo de asfixia. Además, al estar el principio activo ya disuelto, se omite la fase de desintegración, acelerando la absorción sistémica."
    },
    {
      question: "8. Según el Decreto 404, ¿qué condición de venta tiene un jarabe que contiene 8 mg de Codeína por cada dosis de 5 mL?",
      options: [
        "A) Venta Directa.",
        "B) Receta Médica Simple (dosis menor a 10 mg por unidad).",
        "C) Receta Médica Retenida.",
        "D) Receta Cheque."
      ],
      correctAnswer: 1, // B
      explanation: "Excepción legal clave: Según el Título V, Art. 24 del Reglamento de Estupefacientes (DS 404), los preparados que contengan Codeína quedan exentos de Receta Cheque (quedando con Receta Simple) si la dosis no excede de 10 miligramos por unidad posológica."
    },
    {
      question: "9. Al preparar una suspensión extemporánea, el nivel del agua debe llegar exactamente a:",
      options: [
        "A) El cuello del frasco.",
        "B) La mitad del envase.",
        "C) La marca de aforo indicada por el fabricante.",
        "D) Donde el paciente prefiera según el sabor."
      ],
      correctAnswer: 2, // C
      explanation: "La marca de aforo es el nivel exacto calibrado por el laboratorio. Respetarla es fundamental porque el volumen final de agua determina la concentración exacta del fármaco (Dosis = Masa/Volumen), evitando sobredosis o subdosis."
    },
    {
      question: "10. ¿Qué significa que un fármaco líquido sea 'Bioequivalente'?",
      options: [
        "A) Que es de origen natural.",
        "B) Que ha demostrado científicamente poseer la misma eficacia, seguridad y biodisponibilidad que el innovador.",
        "C) Que no contiene azúcar en su formulación.",
        "D) Que se puede administrar por cualquier vía."
      ],
      correctAnswer: 1, // B
      explanation: "Definición legal e intercambiabilidad terapéutica según el Art. 5 del DS 3: La bioequivalencia garantiza que el medicamento genérico, en este caso en su forma líquida, se comporta en el organismo exactamente igual que el producto de referencia."
    }
  ]
};