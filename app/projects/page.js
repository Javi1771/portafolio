// app/projects/page.js

"use client";
import Section from "@/components/Section";
import ProjectGrid from "@/components/ProjectGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { PROJECTS } from "@/data/projects";
import { useState } from "react";

export default function ProjectsPage() {
  const [selected, setSelected] = useState("Todos");
  const filtered =
    selected === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selected);

  //* Estadísticas generales
  const totalProjects = PROJECTS.length;
  const categories = [...new Set(PROJECTS.map((p) => p.category))];
  const currentYear = new Date().getFullYear();
  const recentProjects = PROJECTS.filter((p) => p.year === currentYear).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-violet-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-violet-950/20 relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000 motion-reduce:animate-none"></div>
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-500/10 dark:to-green-600/10 rounded-full blur-3xl animate-pulse delay-2000 motion-reduce:animate-none"></div>

      {/* Subtle pattern overlay (Tailwind arbitrary values) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.500)_1px,transparent_1px)]
            dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.400)_1px,transparent_1px)]
            bg-[length:50px_50px]
          "
        />
      </div>

      {/* Enhanced Section with custom styling */}
      <Section
        title={
          <div className="space-y-4">
            {/* Main title with gradient and effects */}
            <div className="relative inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 dark:from-white dark:via-violet-200 dark:to-white bg-clip-text text-transparent leading-tight">
                Proyectos Destacados
              </h1>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40 animate-bounce"></div>

              {/* Animated underline (requires custom animate-scale-x in tailwind.config) */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 animate-scale-x"></div>
            </div>

            {/* Enhanced subtitle with stats */}
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Filtra por categoría o explora los detalles de cada proyecto
              </p>

              {/* Statistics bar */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {totalProjects}
                    </span>{" "}
                    proyectos totales
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {categories.length}
                    </span>{" "}
                    categorías
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {recentProjects}
                    </span>{" "}
                    en {currentYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        }
        subtitle=""
        className="relative z-10"
      >
        {/* Enhanced filter section */}
        <div className="mb-12">
          <div className="relative">
            {/* Filter header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Filtrar proyectos
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selected === "Todos"
                      ? "Mostrando todos los proyectos"
                      : `Mostrando proyectos de ${selected}`}{" "}
                    <span className="ml-2 px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium">
                      {filtered.length}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced filter wrapper */}
            <div className="relative p-6 bg-white/60 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-transparent to-cyan-50/50 dark:from-violet-950/20 dark:via-transparent dark:to-cyan-950/20 rounded-2xl"></div>

              {/* Decorative corner elements */}
              <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute bottom-3 left-3 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 animate-pulse"></div>

              <div className="relative">
                <CategoryFilter
                  allProjects={PROJECTS}
                  selected={selected}
                  onChange={setSelected}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced results section */}
        <div className="space-y-8">
          {/* Results header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selected === "Todos" ? "Todos los proyectos" : `Proyectos de ${selected}`}
              </h3>
            </div>
          </div>

          {/* Projects grid with enhanced wrapper */}
          <div className="relative">
            {/* Fade-in animation wrapper (requires custom animate-fade-in in tailwind.config) */}
            <div className="animate-fade-in">
              <ProjectGrid projects={filtered} />
            </div>

            {/* Empty state enhancement */}
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29 1.009-5.659 2.571M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No hay proyectos en esta categoría
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Prueba seleccionando otra categoría o explora todos los proyectos
                  </p>
                  <button
                    onClick={() => setSelected("Todos")}
                    className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg font-medium transition-transform hover:scale-105"
                  >
                    Ver todos los proyectos
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}