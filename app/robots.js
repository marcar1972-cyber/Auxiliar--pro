export default function robots() {
  const baseUrl = 'https://www.auxiliaresdefarmacia.cl'; // <--- CORREGIDO

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
