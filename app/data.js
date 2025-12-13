// app/data.js

// 1. ARTÍCULOS DEL BLOG (Contenido Real y SEO)
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
            <p>El Auxiliar de Farmacia apoya al Químico Farmacéutico en la atención de público y manejo de medicamentos. Es un rol vital en la cadena de salud.</p>
            <h3>📋 Requisitos Principales (Decreto 466)</h3>
            <ul>
                <li>✅ Ser mayor de 18 años.</li>
                <li>✅ Licencia de Enseñanza Media completa.</li>
                <li>✅ <strong>1 año de experiencia laboral</strong> en farmacia (bodegaje, reposición) certificada por el Q.F.</li>
            </ul>
            <p>El trámite se realiza en <a href="https://seremienlinea.minsal.cl" class="text-aux-green font-bold" target="_blank">SEREMI en Línea</a>.</p>
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
            <p><strong>El Auxiliar:</strong> Aprende trabajando (1 año de experiencia práctica) y rinde un examen de competencia ante la SEREMI para obtener su credencial.</p>
            <p><strong>El Técnico (TENS):</strong> Estudia una carrera formal de 2 años en un instituto (CFT/IP) y obtiene un título técnico de nivel superior.</p>
            <h3>¿Cuál elegir?</h3>
            <p>Si buscas inserción rápida, el camino de Auxiliar es ideal. Si buscas formación académica estructurada, elige Técnico.</p>
        `
    }
];

// 2. PREGUNTAS FRECUENTES (FAQs completas)
export const FAQS = [
    {
        q: "¿Dónde hago el trámite del examen?",
        a: "Todo se realiza digitalmente en <a href='https://seremienlinea.minsal.cl' target='_blank' class='font-bold text-aux-green hover:underline'>seremienlinea.minsal.cl</a> ingresando con tu ClaveÚnica."
    },
    {
        q: "¿Cuáles son los requisitos obligatorios?",
        a: "Debes ser mayor de 18 años, haber rendido 4to medio y acreditar <strong>1 año de experiencia</strong> trabajando en farmacia (firmado por un Químico Farmacéutico)."
    },
    {
        q: "¿Cuánto cuesta el examen?",
        a: "Aproximadamente <strong>$19.100</strong> por el derecho a examen y $47.600 por la credencial (valores referenciales según la UTM vigente)."
    },
    {
        q: "¿Qué pasa si repruebo?",
        a: "Según el <strong>Artículo 71 del Decreto 466</strong>, si repruebas, la normativa establece que debes esperar un plazo (históricamente 1 año) para rendirlo nuevamente. Además, al ser un nuevo trámite administrativo, deberás <strong>volver a pagar el arancel</strong> de derecho a examen."
    }
];

// 3. NIVELES DEL QUIZ (Estructura Final)
export const LEVELS = [
    { 
        id: 1, 
        title: 'Prueba Diagnóstico', 
        desc: 'Conceptos básicos de farmacia.', 
        icon: '💊', 
        qCount: 5, 
        passingScore: 3, // Se aprueba con 3 de 5
        timeLimit: 0, // Sin tiempo
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
        qCount: 2, 
        passingScore: 1, // Mantenemos la lógica de aprobar con 1 para este ejemplo corto
        timeLimit: 90, // 90 segundos de presión
        questions: [
            { id: 201, text: 'Según D.S. 466, la dirección técnica corresponde a:', options: ['Auxiliar', 'Enfermera', 'Químico Farmacéutico', 'Médico'], correctIndex: 2 },
            { id: 202, text: '¿Temperatura máxima ambiental en sala de ventas?', options: ['20°C', '25°C', '30°C', '18°C'], correctIndex: 1 }
        ] 
    }
];
