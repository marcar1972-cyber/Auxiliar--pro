export const level1 = {
  id: 1,
  title: "Nivel 1: Diagnóstico Inicial",
  icon: "ThermometerSnowflake",
  timeLimit: 600, // 10 min
  passingScore: 5,
  medal: "Medalla de Iniciación",
  description: "¿Cuánto sabes antes de empezar? Mide tu base.",
  questions: [
    { text: "¿Cuál es la función principal de una farmacia?", options: ["Vender productos de belleza", "Centro de salud para dispensación", "Almacén de abarrotes", "Consultorio médico"], correctIndex: 1, studyGuide: "Conceptos Básicos" },
    { text: "¿Quién es el responsable técnico de la farmacia?", options: ["El dueño", "El contador", "El Químico Farmacéutico", "El Auxiliar más antiguo"], correctIndex: 2, studyGuide: "Decreto 466" },
    { text: "¿Qué significa que un medicamento sea 'bioequivalente'?", options: ["Que es más barato", "Que tiene el mismo efecto terapéutico que el original", "Que es natural", "Que se vende sin receta"], correctIndex: 1, studyGuide: "Decreto 3" },
    { text: "¿Dónde se deben guardar las vacunas?", options: ["En el estante", "En el refrigerador (2-8°C)", "En el congelador", "Al sol"], correctIndex: 1, studyGuide: "Cadena de Frío" },
    { text: "¿Qué es una receta retenida?", options: ["Una receta que se devuelve al paciente", "Una receta que la farmacia debe archivar", "Una receta para lentes", "Una receta de cocina"], correctIndex: 1, studyGuide: "Tipos de Receta" },
    { text: "¿Puede un auxiliar recetar medicamentos?", options: ["Sí, si sabe mucho", "Solo antibióticos", "No, es ilegal (Ejercicio ilegal de la profesión)", "Solo a familiares"], correctIndex: 2, studyGuide: "Código Sanitario" },
    { text: "¿Qué indica una estrella verde en la caja de un remedio?", options: ["Producto natural", "Psicotrópico", "Estupefaciente", "Oferta"], correctIndex: 1, studyGuide: "Decreto 405" },
    { text: "¿Cuántas gotas hay aproximadamente en 1 ml?", options: ["10 gotas", "20 gotas", "50 gotas", "5 gotas"], correctIndex: 1, studyGuide: "Posología" }
  ]
};
