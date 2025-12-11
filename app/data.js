// app/data.js

// 1. ARTÍCULOS DEL BLOG (SEO y Contenido)
export const BLOG_POSTS = [
    {
        id: 'art_req_2026',
        slug: 'requisitos-auxiliar-farmacia-2026',
        date: '09 DIC',
        category: 'Guía',
        title: 'Requisitos para ser Auxiliar de Farmacia en Chile (Actualizado 2026)',
        excerpt: 'Si estás pensando en trabajar en farmacia, conoce los requisitos, la experiencia necesaria y el proceso ante la SEREMI.',
        content: `
            <h2>🩺 ¿Qué es un Auxiliar de Farmacia?</h2>
            <p>El Auxiliar de Farmacia apoya al Químico Farmacéutico en la atención de público y manejo de medicamentos.</p>
            <h3>📋 Requisitos Principales (Decreto 466)</h3>
            <ul>
                <li>✅ Ser mayor de 18 años.</li>
                <li>✅ Licencia de Enseñanza Media completa.</li>
                <li>✅ <strong>1 año de experiencia laboral</strong> en farmacia (bodegaje, reposición) certificada por el Q.F.</li>
            </ul>
            <p>El trámite se realiza en <a href="https://seremienlinea.minsal.cl" class="text-aux-green font-bold">SEREMI en Línea</a>.</p>
        `
    },
    {
        id: 'art_dif_tecnico',
        slug: 'diferencia-auxiliar-tecnico',
        date: '09 DIC',
        category: 'Orientación',
        title: 'Diferencia entre Auxiliar y Técnico en Farmacia',
        excerpt: 'Aunque ambos trabajan en farmacias, no son lo mismo. Descubre las diferencias en funciones y sueldos.',
        content: `
            <h2>🎓 Diferencias Clave</h2>
            <p><strong>El Auxiliar:</strong> Aprende trabajando (1 año de experiencia) y rinde un examen de competencia ante la SEREMI.</p>
            <p><strong>El Técnico:</strong> Estudia una carrera formal de 2 años en un instituto (CFT/IP) y obtiene un título.</p>
            <h3>¿Cuál elegir?</h3>
            <p>Si buscas inserción rápida, el camino de Auxiliar es ideal. Si buscas formación académica estructurada, elige Técnico.</p>
        `
    }
];

// 2. PREGUNTAS FRECUENTES (FAQs)
export const FAQS = [
    {
        q: "¿Dónde hago el trámite?",
        a: "En <a href='https://seremienlinea.minsal.cl' target='_blank' class='font-bold text-aux-green'>seremienlinea.minsal.cl</a> con tu ClaveÚnica."
    },
    {
        q: "Requisitos Obligatorios",
        a: "Mayor de 18 años, 4to medio rendido y 1 año de experiencia en farmacia firmado por un Químico Farmacéutico."
    },
    {
        q: "¿Cuánto cuesta el examen?",
        a: "Aproximadamente $19.100 por el derecho a examen y $47.600 por la credencial (valores referenciales UTM)."
    }
];

// 3. NIVELES DEL QUIZ (Tu sistema de juego)
export const LEVELS = [
    { 
        id: 1, 
        title: 'Prueba Diagnóstico', 
        desc: 'Conceptos básicos de farmacia.', 
        icon: '💊', 
        qCount: 10, 
        passingScore: 6,
        timeLimit: 0, // 0 = Sin tiempo
        questions: [
            { id: 101, text: '¿Quién es el responsable técnico de una farmacia?', options: ['El Dueño', 'El Auxiliar', 'El Químico Farmacéutico', 'El Gerente'], correctIndex: 2 }, 
            { id: 102, text: '¿Rango de temperatura para cadena de frío?', options: ['0°C a 5°C', '2°C a 8°C', '8°C a 15°C', 'Ambiente'], correctIndex: 1 },
            { id: 103, text: '¿Qué significa OTC?', options: ['Con receta', 'Venta directa', 'Controlado', 'Uso hospitalario'], correctIndex: 1 },
            { id: 104, text: 'El auxiliar trabaja bajo supervisión de:', options: ['El cliente', 'El Q.F.', 'El cajero', 'Nadie'], correctIndex: 1 },
            { id: 105, text: '¿Qué es el ISP?', options: ['Instituto de Salud Pública', 'Institución Privada', 'Inspección Pública', 'Ninguna'], correctIndex: 0 }
        ] 
    },
    { 
        id: 2, 
        title: 'Legislación (D.S. 466)', 
        desc: 'Normativa sanitaria vigente.', 
        icon: '⚖️', 
        qCount: 10, 
        passingScore: 7,
        timeLimit: 90, // 90 segundos por pregunta
        questions: [
            { id: 201, text: 'Según D.S. 466, la dirección técnica corresponde a:', options: ['Auxiliar', 'Enfermera', 'Químico Farmacéutico', 'Médico'], correctIndex: 2 },
            { id: 202, text: '¿Temperatura máxima ambiental en sala de ventas?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1 }
        ] 
    }
];
