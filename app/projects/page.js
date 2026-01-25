// app/projects/page.js - VERSIÓN OPTIMIZADA

"use client";
import Section from "@/components/Section";
import ProjectGrid from "@/components/ProjectGrid";
import CategoryFilter from "@/components/CategoryFilter";
import { PROJECTS } from "@/data/projects";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [filters, setFilters] = useState({
    category: "Todos",
    type: "Todos los tipos",
  });

  //! Detectar si es móvil para reducir animaciones
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filtered = PROJECTS.filter((p) => {
    const matchCategory =
      filters.category === "Todos" || p.category === filters.category;
    const matchType =
      filters.type === "Todos los tipos" || p.type === filters.type;
    return matchCategory && matchType;
  });

  const totalProjects = PROJECTS.length;
  const categories = [...new Set(PROJECTS.map((p) => p.category))];
  const types = [...new Set(PROJECTS.map((p) => p.type))];
  const currentYear = new Date().getFullYear();
  const recentProjects = PROJECTS.filter((p) => p.year === currentYear).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-violet-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-violet-950/20 relative overflow-hidden">
      {/* OPTIMIZACIÓN: Orbs solo en desktop, sin blur en móvil */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl motion-reduce:animate-none"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl motion-reduce:animate-none"></div>
        </>
      )}

      {/* OPTIMIZACIÓN: Pattern overlay solo en desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.500)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.400)_1px,transparent_1px)] bg-[length:50px_50px]" />
        </div>
      )}

      <Section
        title={
          <div className="space-y-4">
            <div className="relative inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 dark:from-white dark:via-violet-200 dark:to-white bg-clip-text text-transparent leading-tight">
                Proyectos Destacados
              </h1>
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 animate-scale-x"></div>

              {/* OPTIMIZACIÓN: Decoraciones solo en desktop */}
              {!isMobile && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40"></div>
                </>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Filtra por categoría o tipo, o explora los detalles de cada
                proyecto
              </p>

              {/* OPTIMIZACIÓN: Estadísticas sin animaciones en móvil */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full ${!isMobile && "animate-pulse"}`}
                  ></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {totalProjects}
                    </span>{" "}
                    proyectos totales
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full ${!isMobile && "animate-pulse"}`}
                  ></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {categories.length}
                    </span>{" "}
                    categorías
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full ${!isMobile && "animate-pulse"}`}
                  ></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {types.length}
                    </span>{" "}
                    tipos
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full ${!isMobile && "animate-pulse"}`}
                  ></div>
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
        <div className="mb-12">
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Filtrar proyectos
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {filters.category === "Todos" &&
                    filters.type === "Todos los tipos"
                      ? "Mostrando todos los proyectos"
                      : `${filters.category !== "Todos" ? filters.category : "Todas las categorías"} • ${filters.type !== "Todos los tipos" ? filters.type : "Todos los tipos"}`}{" "}
                    <span className="ml-2 px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium">
                      {filtered.length}
                    </span>
                  </p>
                </div>
              </div>

              {(filters.category !== "Todos" ||
                filters.type !== "Todos los tipos") && (
                <button
                  onClick={() =>
                    setFilters({ category: "Todos", type: "Todos los tipos" })
                  }
                  className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            {/* OPTIMIZACIÓN CRÍTICA: Backdrop-blur solo en desktop */}
            <div
              className={`relative p-6 bg-white/60 dark:bg-gray-800/30 ${!isMobile && "backdrop-blur-md"} rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow`}
            >
              {/* OPTIMIZACIÓN: Gradiente de fondo solo en desktop */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-transparent to-cyan-50/50 dark:from-violet-950/20 dark:via-transparent dark:to-cyan-950/20 rounded-2xl"></div>
              )}

              {/* OPTIMIZACIÓN: Decoraciones solo en desktop */}
              {!isMobile && (
                <>
                  <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-50"></div>
                  <div className="absolute bottom-3 left-3 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30"></div>
                </>
              )}

              <div className="relative">
                <CategoryFilter
                  allProjects={PROJECTS}
                  selected={filters}
                  onChange={setFilters}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* OPTIMIZACIÓN: Puntos sin animación en móvil */}
              <div className="flex gap-1">
                <div
                  className={`w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full ${!isMobile && "animate-pulse"}`}
                ></div>
                <div
                  className={`w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full ${!isMobile && "animate-pulse"}`}
                ></div>
                <div
                  className={`w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full ${!isMobile && "animate-pulse"}`}
                ></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {filters.category === "Todos" &&
                filters.type === "Todos los tipos"
                  ? "Todos los proyectos"
                  : "Proyectos filtrados"}
              </h3>
            </div>
          </div>

          <div className="relative">
            <ProjectGrid projects={filtered} />

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg
                      className="w-12 h-12 text-gray-400 dark:text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    No hay proyectos con estos filtros
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Prueba ajustando los filtros o explora todos los proyectos
                  </p>

                  <button
                    onClick={() =>
                      setFilters({ category: "Todos", type: "Todos los tipos" })
                    }
                    className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg font-medium transition-transform hover:scale-105 shadow-lg"
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
