/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://auxiliaresdefarmacia.cl',
  generateRobotsTxt: true, // Esto crea el archivo robots.txt automáticamente
  exclude: ['/admin/*', '/api/*'], // Evita que Google entre a tus carpetas privadas
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
}