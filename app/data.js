// app/data.js
import { LEVELS as QUIZ_LEVELS } from './quizData';

export const BLOG_POSTS = [
  {
    id: 4,
    slug: 'que-es-el-decreto-466',
    title: '¿Qué es el Decreto 466? La "Biblia" que todo Auxiliar debe conocer',
    excerpt: 'Explora el reglamento fundamental de farmacias en Chile. Conoce los tipos de establecimientos, requisitos para el personal y normas de expendio.',
    date: '19 Dic 2025',
    readTime: '7 min',
    image: 'https://placehold.co/600x400/0f172a/ffffff?text=Decreto+466+Chile',
    content: `
      <div class="blog-content">
        <p>El Decreto Supremo N° 466 es el reglamento sanitario fundamental que rige a todos los establecimientos farmacéuticos en Chile. Su objetivo es establecer las condiciones sanitarias para la instalación, funcionamiento y fiscalización de estos recintos para asegurar la calidad de la atención.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">A. Clasificación de Establecimientos Farmacéuticos</h2>
        <p>La normativa organiza los lugares de expendio según su complejidad y funciones específicas, definiendo a las farmacias como centros de salud:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Farmacia:</strong> Establecimiento destinado a la venta de productos, fraccionamiento y preparación de recetas magistrales.</li>
          <li><strong>Almacén Farmacéutico:</strong> Dirigido por un Práctico de Farmacia; vende medicamentos de venta directa y un listado limitado de fármacos con receta.</li>
          <li><strong>Droguería:</strong> Recinto destinado a la importación y distribución mayorista; no realiza venta directa al público.</li>
          <li><strong>Botiquín:</strong> Recintos destinados a mantener productos farmacéuticos para uso interno en clínicas, hospitales o naves.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-6 mb-3">B. Roles del Director Técnico y el Auxiliar</h2>
        <p>Todo establecimiento debe funcionar bajo la responsabilidad de un Director Técnico, rol que debe ser ejercido por un Químico Farmacéutico. Por su parte, para desempeñarse legalmente como Auxiliar de Farmacia, el decreto exige:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li>Haber rendido satisfactoriamente el 4° año de enseñanza media.</li>
          <li>Acreditar un año de práctica laboral efectiva en farmacia, debidamente certificada por el Director Técnico.</li>
          <li>Rendir y aprobar un examen de competencia ante la autoridad sanitaria (SEREMI de Salud).</li>
        </ul>
        <p>Para más detalles sobre los documentos necesarios, visita nuestra guía de <a href="/requisitos-auxiliar-farmacia-chile-2026" class="text-blue-600 font-bold underline">REQUISITOS LEGALES</a>.</p>

        <h2 class="text-2xl font-bold mt-6 mb-3">C. Expendio de Recetas y Bioequivalencia</h2>
        <p>El expendio de productos farmacéuticos debe ajustarse estrictamente a la condición de venta establecida en el registro sanitario. La normativa regula los siguientes tipos de despacho:</p>
        <ul class="list-disc ml-6 mb-4 space-y-2">
          <li><strong>Venta Directa:</strong> Productos que no requieren receta médica para su adquisición.</li>
          <li><strong>Receta Simple, Retenida y Cheque:</strong> Modalidades que exigen la presentación de la orden médica según el nivel de control del fármaco.</li>
          <li><strong>Bioequivalencia:</strong> El personal tiene la obligación legal de informar al paciente sobre las alternativas bioequivalentes certificadas antes de finalizar la venta.</li>
        </ul>
        <p>Entender estas normas es vital para diferenciar tu cargo; consulta la <a href="/diferencia-auxiliar-tecnico-farmacia" class="text-blue-600 font-bold underline">DIFERENCIA ENTRE AUXILIAR Y TÉCNICO</a>.</p>

        <div class="mt-10 p-8 bg-blue-700 rounded-xl text-center text-white shadow-lg">
          <h3 class="text-2xl font-bold mb-4">¿Preparado para tu examen?</h3>
          <p class="mb-6 text-lg">El Decreto 466 es la base fundamental de la evaluación SEREMI.</p>
          <a href="/examen-competencia-seremi-2025" class="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Ver GUÍA DEL EXAMEN SEREMI 2025
          </a>
        </div>
      </div>
    `
  }
];

export const FAQS = [ /* ... Mantener FAQs existentes ... */ ];
export const LEVELS = QUIZ_LEVELS;
