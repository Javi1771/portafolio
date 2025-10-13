// components/ProjectCard.jsx

import Link from "next/link";

export default function ProjectCard({ project }) {
  // Extraer colores del proyecto (hex codes)
  const primaryColor = project.colors?.primary || "#8b5cf6";
  const secondaryColor = project.colors?.secondary || "#9333ea";

  // Función para convertir hex a rgb
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Crear gradientes CSS
  const createGradientStyle = (from, to, opacity = 1) => {
    const fromRgb = hexToRgb(from);
    const toRgb = hexToRgb(to);
    return {
      background: `linear-gradient(to right, rgba(${fromRgb.r}, ${fromRgb.g}, ${fromRgb.b}, ${opacity}), rgba(${toRgb.r}, ${toRgb.g}, ${toRgb.b}, ${opacity}))`
    };
  };

  // Crear sombras dinámicas
  const createShadowStyle = (color, opacity = 0.25) => {
    const rgb = hexToRgb(color);
    return {
      boxShadow: `0 10px 25px -5px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
    };
  };

  // Enhanced badge component with gradient effects
  const badge = (t, index) => (
    <span 
      className="group/badge relative text-[11px] px-3 py-1.5 rounded-lg bg-white/10 dark:bg-gray-800/60 border border-gray-200/30 dark:border-white/10 text-gray-700 dark:text-white/90 hover:border-violet-300/50 dark:hover:border-violet-400/50 hover:bg-white/20 dark:hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 overflow-hidden backdrop-blur-sm"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Subtle gradient background on hover using dynamic colors */}
      <div 
        className="absolute inset-0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"
        style={createGradientStyle(primaryColor, secondaryColor, 0.1)}
      ></div>
      <span className="relative font-medium">{t}</span>
    </span>
  );

  return (
    <article className="group relative rounded-2xl overflow-hidden bg-white/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
      {/* Floating gradient orb on hover with dynamic colors */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={createGradientStyle(primaryColor, secondaryColor, 0.2)}
      ></div>
      <div 
        className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"
        style={createGradientStyle(secondaryColor, primaryColor, 0.2)}
      ></div>

      {/* Glowing border effect with dynamic colors */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"
        style={createGradientStyle(primaryColor, secondaryColor, 0.2)}
      ></div>

      {/* Image section with enhanced effects */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Enhanced category and year badges */}
        <div className="absolute top-4 left-4 flex gap-3">
          <span className="relative px-4 py-2 rounded-full text-xs font-semibold text-white bg-black/60 backdrop-blur-md border border-white/20 hover:bg-black/70 transition-all duration-300 group-hover:scale-105">
            <span className="relative z-10">{project.category}</span>
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={createGradientStyle(primaryColor, secondaryColor, 0.3)}
            ></div>
          </span>
          <span className="relative px-4 py-2 rounded-full text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/60 transition-all duration-300 group-hover:scale-105">
            <span className="relative z-10">{project.year}</span>
          </span>
        </div>

        {/* Corner decorative elements with dynamic colors */}
        <div 
          className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-pulse"
          style={createGradientStyle(primaryColor, secondaryColor)}
        ></div>
        <div 
          className="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-40 group-hover:opacity-80 group-hover:scale-125 transition-all duration-300 animate-pulse delay-500"
          style={createGradientStyle(secondaryColor, primaryColor)}
        ></div>
      </div>

      {/* Content section with enhanced styling */}
      <div className="relative p-6 space-y-4">
        {/* Title section */}
        <div className="flex items-start justify-between gap-3">
          <h3 
            className="font-bold text-xl leading-tight text-gray-900 dark:text-white transition-colors duration-300"
            onMouseEnter={(e) => {
              e.target.style.color = primaryColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '';
            }}
          >
            {project.title}
          </h3>
          
          {/* Status indicator with dynamic color */}
          <div 
            className="flex-shrink-0 w-3 h-3 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-pulse"
            style={createGradientStyle(primaryColor, secondaryColor)}
          ></div>
        </div>

        {/* Description with enhanced styling */}
        <p className="text-sm text-gray-600 dark:text-white/80 line-clamp-3 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-white/90 transition-colors duration-300">
          {project.summary}
        </p>

        {/* Enhanced tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t, index) => (
            <span key={t}>{badge(t, index)}</span>
          ))}
        </div>

        {/* Decorative divider with dynamic colors */}
        <div className="flex items-center gap-2 py-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"></div>
          <div 
            className="w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
            style={createGradientStyle(primaryColor, secondaryColor)}
          ></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 dark:via-white/20 to-transparent"></div>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex gap-3">
          {project.repo && (
            <a
              className="group/btn relative px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(to right, #24292e, #1a1e22)',
                boxShadow: '0 10px 25px -5px rgba(36, 41, 46, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) translateY(-2px)';
                e.target.style.background = 'linear-gradient(to right, #1a1e22, #0d1117)';
                e.target.style.boxShadow = '0 20px 40px -5px rgba(36, 41, 46, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = '';
                e.target.style.background = 'linear-gradient(to right, #24292e, #1a1e22)';
                e.target.style.boxShadow = '0 10px 25px -5px rgba(36, 41, 46, 0.25)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Código
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            </a>
          )}
          
          {project.site && (
            <a
              className="group/btn relative px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden"
              href={project.site}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(to right, #0891b2, #0e7490)',
                boxShadow: '0 10px 25px -5px rgba(8, 145, 178, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) translateY(-2px)';
                e.target.style.background = 'linear-gradient(to right, #0e7490, #155e75)';
                e.target.style.boxShadow = '0 20px 40px -5px rgba(8, 145, 178, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = '';
                e.target.style.background = 'linear-gradient(to right, #0891b2, #0e7490)';
                e.target.style.boxShadow = '0 10px 25px -5px rgba(8, 145, 178, 0.25)';
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            </a>
          )}
          
          <Link
            className="group/btn relative px-4 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 overflow-hidden"
            href={`/projects/${project.id}`}
            style={{
              background: 'linear-gradient(to right, #0d9488, #0f766e)',
              boxShadow: '0 10px 25px -5px rgba(13, 148, 136, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05) translateY(-2px)';
              e.target.style.background = 'linear-gradient(to right, #0f766e, #134e4a)';
              e.target.style.boxShadow = '0 20px 40px -5px rgba(13, 148, 136, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = '';
              e.target.style.background = 'linear-gradient(to right, #0d9488, #0f766e)';
              e.target.style.boxShadow = '0 10px 25px -5px rgba(13, 148, 136, 0.25)';
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Detalles
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
          </Link>
        </div>

        {/* Bottom decorative element with dynamic colors */}
        <div 
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to right, transparent, ${primaryColor}50, transparent)`
          }}
        ></div>
      </div>

      {/* Floating corner accent with dynamic colors */}
      <div 
        className="absolute -top-1 -left-1 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
        style={createGradientStyle(primaryColor, secondaryColor, 0.6)}
      ></div>
      
      {/* Custom styles for enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-5px) translateX(2px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        .group:hover {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Enhanced line-clamp for better text handling */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </article>
  );
}