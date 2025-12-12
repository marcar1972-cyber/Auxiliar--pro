// app/data.js

// 1. ARTÍCULOS DEL BLOG (SEO)
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
        a: "En <a href='https://seremienlinea.minsal.cl' target='_blank' class='font-bold text-aux-green'>seremienlinea.minsal.cl</a> con tu Cl
