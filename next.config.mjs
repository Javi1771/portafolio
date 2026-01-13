// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
//   },
// };
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //* Configuración optimizada para imágenes
    formats: ['image/webp'], // Usar WebP que es más ligero
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    
    // Mantener tus remote patterns existentes + agregar más si necesitas
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "images.unsplash.com" 
      },
      // Agrega más aquí si usas otros servicios:
      // { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  
  // Optimizaciones adicionales
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Eliminar console.logs en producción
  },
  
  // Habilitar SWC minification (más rápido que Terser)
  swcMinify: true,
  
  // Optimización de fuentes
  optimizeFonts: true,
  
  // Experimental: Optimizar CSS
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
