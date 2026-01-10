export default function robots() {
  const baseUrl = 'https://www.auxiliaresdefarmacia.cl';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Bloqueamos la carpeta API para que Google no pierda tiempo ahí
      disallow: ['/api/', '/_next/'], 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
