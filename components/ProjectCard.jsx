// components/ProjectCard.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useMemo, useState } from "react";

const ProjectCard = memo(({ project, isMobile = false, style, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  //* Memoizar colores para evitar recalcular en cada render
  const colors = useMemo(() => ({
    primary: project.colors?.primary || "#8b5cf6",
    secondary: project.colors?.secondary || "#9333ea"
  }), [project.colors]);

  //* Memoizar funciones de utilidad
  const hexToRgb = useMemo(() => (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 139, g: 92, b: 246 };
  }, []);

  //* Memoizar estilos de gradiente (solo si no es móvil)
  const gradientStyle = useMemo(() => {
    if (isMobile) return null;
    const fromRgb = hexToRgb(colors.primary);
    const toRgb = hexToRgb(colors.secondary);
    return {
      background: `linear-gradient(to right, rgba(${fromRgb.r}, ${fromRgb.g}, ${fromRgb.b}, 0.1), rgba(${toRgb.r}, ${toRgb.g}, ${toRgb.b}, 0.1))`
    };
  }, [colors, hexToRgb, isMobile]);

  //* Memoizar estilos de la barra de progreso
  const progressBarStyle = useMemo(() => {
    const fromRgb = hexToRgb(colors.primary);
    const toRgb = hexToRgb(colors.secondary);
    return {
      background: `linear-gradient(to right, rgba(${fromRgb.r}, ${fromRgb.g}, ${fromRgb.b}, 1), rgba(${toRgb.r}, ${toRgb.g}, ${toRgb.b}, 1))`
    };
  }, [colors, hexToRgb]);

  //* Badge optimizado - SIN backdrop-blur en móvil
  const badge = (t, index) => (
    <span 
      key={t}
      className={`text-[11px] px-3 py-1.5 rounded-lg bg-white/10 dark:bg-gray-800/60 border border-gray-200/30 dark:border-white/10 text-gray-700 dark:text-white/90 ${!isMobile && 'backdrop-blur-sm'} transition-colors duration-200 hover:border-violet-300/50 dark:hover:border-violet-400/50`}
    >
      <span className="font-medium">{t}</span>
    </span>
  );

  return (
    <article 
      className={`group relative rounded-2xl overflow-hidden bg-white/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 ${!isMobile && 'hover:-translate-y-1'} ${!isMobile && 'backdrop-blur-sm'} will-change-transform flex flex-col ${className}`}
      style={style}
    >
      
      {/* Imagen optimizada con Next.js Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        {/* Placeholder mientras carga */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
        )}
        
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 ${!isMobile && 'group-hover:scale-105'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          quality={isMobile ? 60 : 75} // Menor calidad en móvil
          onLoadingComplete={() => setImageLoaded(true)}
        />
        
        {/* Overlay simplificado - Solo en desktop */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
        
        {/* Badges superiores - SIN backdrop-blur en móvil */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black/60 ${!isMobile && 'backdrop-blur-md'} border border-white/20`}>
            {project.category}
          </span>
          <span className={`px-3 py-1.5 rounded-full text-xs font-medium text-white/90 bg-black/50 ${!isMobile && 'backdrop-blur-md'} border border-white/10`}>
            {project.year}
          </span>
        </div>

        {/* Type badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-medium text-white/90 bg-black/50 ${!isMobile && 'backdrop-blur-md'} border border-white/20`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* Contenido - con flex-grow para empujar botones abajo */}
      <div className="relative p-6 space-y-4 flex-grow flex flex-col">
        {/* Título */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-xl leading-tight text-gray-900 dark:text-white line-clamp-2">
            {project.title}
          </h3>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-600 dark:text-white/80 line-clamp-3 leading-relaxed">
          {project.summary}
        </p>

        {/* Tech stack optimizado */}
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.slice(0, isMobile ? 4 : 6).map((t, index) => badge(t, index))}
          {project.stack.length > (isMobile ? 4 : 6) && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-700">
              +{project.stack.length - (isMobile ? 4 : 6)}
            </span>
          )}
        </div>

        {/* Divider simplificado */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent"></div>

        {/* Spacer para empujar botones al fondo */}
        <div className="flex-grow"></div>

        {/* Botones de acción - Optimizados para móvil */}
        <div className="flex gap-3 mt-auto">
          {project.repo && (
            <a
              className={`group/btn relative flex-1 px-4 py-2.5 rounded-xl text-white text-sm font-semibold text-center transition-all duration-300 ${!isMobile && 'hover:scale-105 hover:-translate-y-0.5'} overflow-hidden`}
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(to right, #24292e, #1a1e22)',
                boxShadow: isMobile ? '0 2px 8px rgba(36, 41, 46, 0.3)' : '0 4px 14px 0 rgba(36, 41, 46, 0.39)'
              }}
              onMouseEnter={!isMobile ? (e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(36, 41, 46, 0.6)';
              } : undefined}
              onMouseLeave={!isMobile ? (e) => {
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(36, 41, 46, 0.39)';
              } : undefined}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                Código
              </span>
              {/* Efecto shine solo en desktop */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              )}
            </a>
          )}
          
          {project.site && (
            <a
              className={`group/btn relative flex-1 px-4 py-2.5 rounded-xl text-white text-sm font-semibold text-center transition-all duration-300 ${!isMobile && 'hover:scale-105 hover:-translate-y-0.5'} overflow-hidden`}
              href={project.site}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(to right, #0891b2, #0e7490)',
                boxShadow: isMobile ? '0 2px 8px rgba(8, 145, 178, 0.3)' : '0 4px 14px 0 rgba(8, 145, 178, 0.39)'
              }}
              onMouseEnter={!isMobile ? (e) => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(8, 145, 178, 0.6)';
              } : undefined}
              onMouseLeave={!isMobile ? (e) => {
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(8, 145, 178, 0.39)';
              } : undefined}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Demo
              </span>
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              )}
            </a>
          )}
          
          <Link
            className={`group/btn relative flex-1 px-4 py-2.5 rounded-xl text-white text-sm font-semibold text-center transition-all duration-300 ${!isMobile && 'hover:scale-105 hover:-translate-y-0.5'} overflow-hidden`}
            href={`/projects/${project.id}`}
            style={{
              background: 'linear-gradient(to right, #0d9488, #0f766e)',
              boxShadow: isMobile ? '0 2px 8px rgba(13, 148, 136, 0.3)' : '0 4px 14px 0 rgba(13, 148, 136, 0.39)'
            }}
            onMouseEnter={!isMobile ? (e) => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(13, 148, 136, 0.6)';
            } : undefined}
            onMouseLeave={!isMobile ? (e) => {
              e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(13, 148, 136, 0.39)';
            } : undefined}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Detalles
            </span>
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            )}
          </Link>
        </div>
      </div>

      {/* Barra de progreso inferior - Solo en desktop */}
      {!isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-b-2xl">
          <div 
            className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out"
            style={progressBarStyle}
          ></div>
        </div>
      )}
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;