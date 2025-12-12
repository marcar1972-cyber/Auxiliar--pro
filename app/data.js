export const BLOG_POSTS = [
    {
        id: 'art_req_2026',
        slug: 'requisitos-auxiliar-farmacia-2026',
        date: '09 DIC',
        category: 'Guía',
        title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
        excerpt: 'Si estás pensando en trabajar en farmacia, conoce los requisitos, la experiencia necesaria y el proceso ante la SEREMI.',
        content: '<h2>🩺 ¿Qué es un Auxiliar de Farmacia?</h2><p>El Auxiliar de Farmacia apoya al Químico Farmacéutico en la atención de público y manejo de medicamentos.</p>'
    }
];

export const FAQS = [
    { q: "¿Dónde hago el trámite?", a: "En seremienlinea.minsal.cl" },
    { q: "Requisitos", a: "Mayor de 18 años y 4to medio rendido." }
];

export const LEVELS = [
    { 
        id: 1, 
        title: 'Prueba Diagnóstico', 
        desc: 'Conceptos básicos.', 
        icon: '💊', 
        qCount: 2, 
        passingScore: 1, 
        timeLimit: 0, 
        questions: [
            { id: 101, text: '¿Quién es el responsable técnico?', options: ['El Dueño', 'El Auxiliar', 'El Q.F.', 'El Gerente'], correctIndex: 2 }, 
            { id: 102, text: '¿Rango de temperatura cadena frío?', options: ['0-5°C', '2-8°C', '8-15°C', 'Ambiente'], correctIndex: 1 }
        ] 
    },
    { 
        id: 2, 
        title: 'Legislación (D.S. 466)', 
        desc: 'Normativa sanitaria.', 
        icon: '⚖️', 
        qCount: 2, 
        passingScore: 1, 
        timeLimit: 90, 
        questions: [
            { id: 201, text: 'Dirección técnica corresponde a:', options: ['Auxiliar', 'Enfermera', 'Químico Farmacéutico', 'Médico'], correctIndex: 2 },
            { id: 202, text: '¿Temp. ambiental máxima sala ventas?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1 }
        ] 
    }
];
