export const level6 = {
  id: 6,
  title: "Nivel 6: Cálculo de Dosis",
  icon: "Calculator",
  timeLimit: 1200,
  passingScore: 7,
  medal: "Medalla Matemática",
  description: "Transforma gotas, ml y comprimidos.",
  questions: [
    { text: "¿Cuántas gotas hay en 1 ml?", options: ["10", "15", "20", "30"], correctIndex: 2, studyGuide: "Posología" },
    { text: "Si la receta dice 5ml cada 8 horas por 7 días. ¿Volumen total?", options: ["60 ml", "90 ml", "105 ml", "120 ml"], correctIndex: 2, studyGuide: "Posología" },
    { text: "Para pasar de Gramos a Miligramos...", options: ["Divido por 1000", "Multiplico por 1000", "Sumo 100", "Resto 1000"], correctIndex: 1, studyGuide: "Posología" },
    { text: "Si necesita 135 comprimidos y la caja trae 20. ¿Cuántas cajas vendo?", options: ["6", "6.5", "7", "8"], correctIndex: 2, studyGuide: "Posología" },
    { text: "¿A cuánto equivale una cucharadita de té?", options: ["2.5 ml", "5 ml", "10 ml", "15 ml"], correctIndex: 1, studyGuide: "Posología" },
    { text: "23 gotas cada 12 horas. ¿Dosis diaria?", options: ["23 gotas", "36 gotas", "46 gotas", "50 gotas"], correctIndex: 2, studyGuide: "Posología" },
    { text: "Lápiz de insulina de 3ml (100 UI/ml). ¿Total UI?", options: ["100", "300", "1000", "3000"], correctIndex: 1, studyGuide: "Posología" },
    { text: "¿A cuánto equivale una cucharada sopera?", options: ["5 ml", "10 ml", "15 ml", "20 ml"], correctIndex: 2, studyGuide: "Posología" },
    { text: "Tratamiento: 1 comp/noche por 6 meses. Caja de 30. ¿Cuántas cajas?", options: ["3", "4", "5", "6"], correctIndex: 3, studyGuide: "Posología" },
    { text: "¿Por qué se ajusta la dosis en niños?", options: ["Por su peso y metabolismo", "Porque son pequeños", "Para ahorrar", "No se ajusta"], correctIndex: 0, studyGuide: "Posología" }
  ]
};
