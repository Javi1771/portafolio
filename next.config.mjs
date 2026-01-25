/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //* CRÍTICO: AVIF + WebP para máxima optimización
    formats: ['image/avif', 'image/webp'],
    
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    //* Cache de 7 días
    minimumCacheTTL: 60 * 60 * 24 * 7,
    
    // Remote patterns
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "images.unsplash.com" 
      },
    ],
    
    //* Configuración de seguridad para SVG
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  //* Optimizaciones del compilador
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  //* Habilita compresión
  compress: true,
  
  //* No generar sourcemaps en producción
  productionBrowserSourceMaps: false,
  
  //* NUEVO EN NEXT.JS 16: Configuración de Turbopack
  turbopack: {
    // Silencia el warning y habilita optimizaciones
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  //* Headers para cache de imágenes
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;