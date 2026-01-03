export const level1 = {
  id: 1,
  title: "Prueba Diagnóstico",
  icon: "BookOpen",
  qCount: 10,
  timeLimit: 0, // Sin límite de tiempo
  passingScore: 8,
  questions: [
    { text: "¿Cuál es el cuerpo legal que rige el funcionamiento de Farmacias en Chile?", options: ["Decreto 404", "Decreto 466", "Decreto 1", "Ley 20.000"], correctIndex: 1, studyGuide: "El Decreto 466 es el reglamento sanitario fundamental." },
    { text: "La dirección técnica de una farmacia debe estar a cargo de:", options: ["Auxiliar de Farmacia", "Dueño del local", "Químico Farmacéutico", "Técnico en Enfermería"], correctIndex: 2, studyGuide: "La ley exige presencia permanente del Q.F." },
    { text: "¿Qué establecimiento puede realizar fraccionamiento de medicamentos?", options: ["Almacén Farmacéutico", "Farmacia", "Droguería", "Depósito Dental"], correctIndex: 1, studyGuide: "Solo la farmacia cuenta con resolución para fraccionar." },
    { text: "¿Cuál es la función del ISP?", options: ["Pagar sueldos", "Fiscalizar locales", "Registrar y controlar fármacos", "Atender pacientes"], correctIndex: 2, studyGuide: "El ISP otorga los Registros Sanitarios." },
    { text: "¿Qué significa que un fármaco sea Bioequivalente?", options: ["Que es más barato", "Que tiene la misma eficacia que el original", "Que es natural", "Que no tiene vencimiento"], correctIndex: 1, studyGuide: "Demuestra misma biodisponibilidad que el referente." },
    { text: "¿A qué temperatura debe estar el refrigerador de la farmacia?", options: ["0°C a 5°C", "2°C a 8°C", "8°C a 15°C", "15°C a 25°C"], correctIndex: 1, studyGuide: "Rango estándar de la cadena de frío." },
    { text: "¿Qué debe hacer ante un quiebre de cadena de frío?", options: ["Seguir vendiendo", "Informar al DT y apartar productos", "Volver a congelar", "No hacer nada"], correctIndex: 1, studyGuide: "Protocolo de seguridad sanitaria obligatorio." },
    { text: "El auxiliar de farmacia debe trabajar bajo la supervisión de:", options: ["El cajero", "El Director Técnico", "La SEREMI", "El contador"], correctIndex: 1, studyGuide: "El Q.F. es el responsable directo del personal técnico." },
    { text: "¿Qué documento acredita su calidad de Auxiliar ante la autoridad?", options: ["Contrato de trabajo", "Resolución Sanitaria", "Título de bachiller", "Cédula de identidad"], correctIndex: 1, studyGuide: "La resolución emitida por SEREMI es su carnet profesional." },
    { text: "¿Cuál es el periodo de vigencia de una receta simple?", options: ["3 meses", "6 meses", "Indefinida", "1 mes"], correctIndex: 0, studyGuide: "Por norma general son 90 días desde su emisión." }
  ]
};
