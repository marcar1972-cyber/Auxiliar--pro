export default function sitemap() {
  const baseUrl = 'https://www.auxiliaresdefarmacia.cl';

  // 1. PÁGINAS PRINCIPALES (Estáticas)
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly', 
      priority: 1,
    },
    {
      url: `${baseUrl}/quiz`,
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
      url: `${baseUrl}/guias`, // 🟢 NUEVO: Agregado porque estamos creando esta sección
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

  // 2. ARTÍCULOS DEL BLOG (Slugs deben coincidir con las carpetas en app/blog/)
  const blogPosts = [
    'vision-ley-farmacos', // 🟢 NUEVO: El artículo estratégico de hoy
    'curso-auxiliar-farmacia-gratis-chile-2026', // 🟢 NUEVO: Estaba en tu lista pero no en sitemap
    'requisitos-auxiliar-farmacia-chile-2026',
    'cuanto-gana-auxiliar-farmacia-chile',
    'diferencia-auxiliar-tecnico-farmacia',
    'fecha-examen-auxiliar-farmacia-seremi',
    'examen-competencia-seremi-2025', // ⚠️ OJO: Verifica si tu carpeta termina en 2025 o 2026
    'que-es-el-decreto-466',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...mainRoutes, ...blogPosts];
}
