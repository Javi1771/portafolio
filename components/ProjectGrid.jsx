// components/ProjectGrid.jsx
"use client";

import { memo, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const ProjectGrid = memo(({ projects }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  //! Evitar flash de contenido en SSR
  if (!mounted) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((p) => (
          <div 
            key={p.id} 
            className="aspect-[4/3] rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, index) => (
        <ProjectCard 
          key={p.id} 
          project={p} 
          isMobile={isMobile}
          // Stagger animation para mejor UX
          style={{ 
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both'
          }}
          className="animate-fade-in-fast"
        />
      ))}
    </div>
  );
});

ProjectGrid.displayName = 'ProjectGrid';

export default ProjectGrid;