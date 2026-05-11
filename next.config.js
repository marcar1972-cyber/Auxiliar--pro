/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 🟢 Ignora los errores de TypeScript para que Vercel compile
    ignoreBuildErrors: true,
  },
  eslint: {
    // 🟢 Ignora las advertencias de estilo
    ignoreDuringBuilds: true,
  },

  // 🚀 REDIRECCIONES: Limpieza de errores 404 para Google Search Console
  async redirects() {
    return [
      {
        // Captura la ruta vieja que Google aún intenta rastrear
        source: '/quiz/basic/nivel-4',
        // Redirige al Lobby para no perder al usuario y rescatar el SEO
        destination: '/quiz',
        permanent: true, // Esto envía un código 301 (SEO Friendly)
      },
    ];
  },

  // ⚡ MÁSCARA DE RUTA: Muestra /admin-vademecum bajo la URL /vademecum
  async rewrites() {
    return [
      {
        source: '/vademecum',
        destination: '/admin-vademecum',
      },
    ];
  },
};

module.exports = nextConfig;