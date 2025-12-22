// app/quizData/level4.js
export const level4 = {
  id: 4,
  title: "Cálculos Farmacéuticos",
  description: "Determinación de stock, dosis máximas y conversiones métricas.",
  questions: [
    {
      id: 1,
      question: "Un tratamiento médico indica la administración de 1 comprimido cada 8 horas. Si el paciente adquiere una caja con 30 unidades, ¿para cuántos días de tratamiento tiene stock?",
      options: ["5 días", "10 días", "15 días", "30 días"],
      answer: "10 días",
      feedback: "Si se toma 1 cada 8 horas, son 3 al día. 30 dividido en 3 resulta en 10 días de stock."
    },
    {
      id: 2,
      question: "La dosis máxima diaria de Paracetamol recomendada en adultos es de 4 g. Si el medicamento se presenta en comprimidos de 1 g, ¿cuál es el número máximo de comprimidos que el paciente puede ingerir en 24 horas?",
      options: ["2 comprimidos", "4 comprimidos", "6 comprimidos", "8 comprimidos"],
      answer: "4 comprimidos",
      feedback: "Dosis diaria (4g) dividida por la concentración (1g) da un máximo de 4 unidades al día."
    },
    {
      id: 3,
      question: "Se debe dispensar un jarabe cuya concentración es de 250 mg por cada 5 ml. Si la receta indica una dosis única de 500 mg, ¿cuántos mililitros (ml) debe medir el paciente?",
      options: ["5 ml", "10 ml", "15 ml", "20 ml"],
      answer: "10 ml",
      feedback: "Por regla de tres: si 250mg están en 5ml, 500mg están en 10ml."
    }
  ]
};
