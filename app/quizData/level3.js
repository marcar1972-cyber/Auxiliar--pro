export const level3 = {
  id: 3,
  title: "Controlados (D.S. 404 y 405)",
  icon: "ThermometerSnowflake",
  qCount: 25,
  timeLimit: 1800, // 30 minutos
  passingScore: 20,
  questions: [
    {
      text: "¿Qué tipo de receta se requiere para el despacho de Psicotrópicos de la Lista B?",
      options: ["Receta Simple", "Receta Retenida", "Receta Cheque", "Venta Directa"],
      correctIndex: 1,
      studyGuide: "Los psicotrópicos generalmente requieren receta retenida con control de stock."
    },
    // ... (Este archivo debe contener las 25 preguntas de estupefacientes y psicotrópicos)
    {
      text: "¿Por cuánto tiempo deben custodiarse las recetas de productos controlados?",
      options: ["6 meses", "1 año", "2 años", "5 años"],
      correctIndex: 2,
      studyGuide: "El libro de controlados y sus recetas deben guardarse por 2 años."
    }
  ]
};
