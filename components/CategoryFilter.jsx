"use client";
import { useState, useEffect } from "react";

export default function CategoryFilter({ allProjects, selected, onChange }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories = [
    "Todos",
    ...Array.from(new Set(allProjects.map((p) => p.category))),
  ];

  const types = [
    "Todos los tipos",
    ...Array.from(new Set(allProjects.map((p) => p.type))),
  ];

  if (isMobile) {
    return (
      <div className="space-y-3">
        {/* Filtro por Categoría - Select Estilizado */}
        <div>
          <label
            htmlFor="category-select"
            className="text-sm font-medium text-gray-700 dark:text-white/70 mb-2 block"
          >
            Categoría
          </label>
          <div className="relative">
            <select
              id="category-select"
              value={selected.category}
              onChange={(e) =>
                onChange({ ...selected, category: e.target.value })
              }
              className="w-full px-4 py-3 pr-10 rounded-xl border-2 border-gray-200/50 dark:border-white/10 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 focus:ring-4 focus:ring-violet-500/20 dark:focus:ring-violet-400/20 appearance-none cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a855f7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25rem",
              }}
            >
              {categories.map((c) => (
                <option key={c} value={c} className="py-2">
                  {c}
                </option>
              ))}
            </select>
            {/* Indicador visual de selección */}
            {selected.category !== "Todos" && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            )}
          </div>
        </div>

        {/* Filtro por Tipo - Select Estilizado */}
        <div>
          <label
            htmlFor="type-select"
            className="text-sm font-medium text-gray-700 dark:text-white/70 mb-2 block"
          >
            Tipo de Proyecto
          </label>
          <div className="relative">
            <select
              id="type-select"
              value={selected.type}
              onChange={(e) => onChange({ ...selected, type: e.target.value })}
              className="w-full px-4 py-3 pr-10 rounded-xl border-2 border-gray-200/50 dark:border-white/10 bg-white/80 dark:bg-white/5 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 appearance-none cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1.25rem",
              }}
            >
              {types.map((t) => (
                <option key={t} value={t} className="py-2">
                  {t}
                </option>
              ))}
            </select>
            {/* Indicador visual de selección */}
            {selected.type !== "Todos los tipos" && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            )}
          </div>
        </div>
      </div>
    );
  }

  // Desktop - Botones
  return (
    <div className="space-y-4">
      {/* Filtro por Categoría */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
          Categoría
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => onChange({ ...selected, category: c })}
              className={`px-4 py-2 rounded-xl border transition-all duration-200 ${
                selected.category === c
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-600 shadow-lg"
                  : "bg-white/60 dark:bg-white/5 text-gray-700 dark:text-white/90 border-gray-200/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por Tipo */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-white/70 mb-2">
          Tipo de Proyecto
        </h3>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => onChange({ ...selected, type: t })}
              className={`px-4 py-2 rounded-xl border transition-all duration-200 ${
                selected.type === t
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-600 shadow-lg"
                  : "bg-white/60 dark:bg-white/5 text-gray-700 dark:text-white/90 border-gray-200/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}