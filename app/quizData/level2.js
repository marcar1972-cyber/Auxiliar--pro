export const level2 = {
  id: 2,
  title: "Legislación (D.S. 466 y Ley Fármacos)",
  icon: "Scale",
  qCount: 15,
  timeLimit: 1200, // 20 minutos
  passingScore: 12,
  questions: [
    {
      text: "Según el D.S. 466, ¿qué establecimiento NO puede realizar fraccionamiento?",
      options: ["Farmacia Privada", "Farmacia Asistencial", "Almacén Farmacéutico", "Farmacia Popular"],
      correctIndex: 2,
      studyGuide: "Los Almacenes Farmacéuticos solo pueden vender productos en envases originales."
    },
    // ... (Este archivo debe contener las 15 preguntas completas de normativa)
    {
      text: "¿Cuál es el plazo máximo para informar un cambio de Director Técnico a la SEREMI?",
      options: ["En el mismo momento", "48 horas", "5 días hábiles", "15 días"],
      correctIndex: 0,
      studyGuide: "Cualquier cambio en la DT debe ser notificado de inmediato."
    }
  ]
};
