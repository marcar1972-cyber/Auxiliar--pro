export const level1 = {
  id: 1,
  title: "Prueba Diagnóstico",
  icon: "BookOpen",
  qCount: 10,
  timeLimit: 0, // Sin límite de tiempo
  passingScore: 8,
  questions: [
    {
      text: "¿Cuál es el cuerpo legal que rige el funcionamiento de Farmacias en Chile?",
      options: ["Decreto 404", "Decreto 466", "Decreto 1", "Ley 20.000"],
      correctIndex: 1,
      studyGuide: "El Decreto 466 es el reglamento sanitario fundamental."
    },
    {
      text: "La dirección técnica de una farmacia debe estar a cargo de:",
      options: ["Un Auxiliar con experiencia", "Un Dueño de local", "Un Químico Farmacéutico", "Un Técnico en Enfermería"],
      correctIndex: 2,
      studyGuide: "La ley exige que la Dirección Técnica sea ejercida por un Químico Farmacéutico."
    },
    // ... (Se mantienen las otras 8 preguntas técnicas de nivel diagnóstico)
    {
      text: "¿Qué significa la sigla ISP en el contexto farmacéutico chileno?",
      options: ["Instituto de Salud Pública", "Indice de Salud Primaria", "Instancia de Sanidad Profesional", "Instituto de Seguridad Previsional"],
      correctIndex: 0,
      studyGuide: "El ISP es la autoridad nacional de control de productos farmacéuticos."
    }
  ]
};
