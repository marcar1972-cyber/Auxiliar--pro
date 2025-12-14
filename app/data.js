// --- NIVELES DEL QUIZ (SOLO REEMPLAZA ESTA PARTE EN data.js) ---
export const LEVELS = [
    { 
        id: 1, 
        title: 'Prueba Diagnóstico', 
        desc: 'Conceptos generales para calentar motores.', 
        icon: '💊', 
        qCount: 10, 
        passingScore: 6,
        timeLimit: 0, // 0 = Sin tiempo (Modo estudio relajado)
        questions: [ /* ... tus preguntas ... */ ] 
    },
    { 
        id: 2, 
        title: 'Legislación (D.S. 466 y Ley Fármacos)', 
        desc: 'Normativa general y funcionamiento de farmacia.', 
        icon: '⚖️', 
        qCount: 15, 
        passingScore: 9,
        timeLimit: 1200, // 20 Minutos (1200 seg) para 15 preguntas
        questions: [ /* ... tus preguntas ... */ ] 
    },
    { 
        id: 3, 
        title: 'Controlados (D.S. 404 y 405)', 
        desc: 'Estupefacientes, Psicotrópicos y sus reglas de oro.', 
        icon: '🔐', 
        qCount: 25, 
        passingScore: 15, 
        timeLimit: 1800, // 30 Minutos (1800 seg) para 25 preguntas
        questions: [ /* ... tus preguntas ... */ ] 
    },
    { 
        id: 4, 
        title: 'Simulacro Final (Teoría + Ejercicios)', 
        desc: 'Examen completo con preguntas legales y cálculo de dosis.', 
        icon: '🎓', 
        qCount: 40, 
        passingScore: 24, 
        timeLimit: 3600, // 60 Minutos (3600 seg) - Examen Real
        questions: [ /* ... tus preguntas ... */ ] 
    }
];
