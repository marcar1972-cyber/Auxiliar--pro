export default function sitemap() {
  const baseUrl = 'https://www.auxiliaresdefarmacia.cl';

  // 1. PÁGINAS PRINCIPALES (Estáticas)
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', // Cambiado a semanal para que Google revise novedades
      priority: 1,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // Subimos prioridad por ser herramienta core
    },
    {
      url: `${baseUrl}/dermocheck`, // FALTABA ESTA (Importante)
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biblioteca`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. ARTÍCULOS DEL BLOG (Vital para el SEO de contenido)
  // Agregamos manualmente tus carpetas actuales para asegurar que se indexen.
  const blogPosts = [
    'requisitos-auxiliar-farmacia-chile-2026',
    'cuanto-gana-auxiliar-farmacia-chile',
    'diferencia-auxiliar-tecnico-farmacia',
    'fecha-examen-auxiliar-farmacia-seremi',
    'examen-competencia-seremi-2026',
    'que-es-el-decreto-466',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...mainRoutes, ...blogPosts];
}
