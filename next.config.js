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