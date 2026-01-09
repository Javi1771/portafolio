"use client";

export default function CategoryFilter({ allProjects, selected, onChange }) {
  const categories = [
    "Todos",
    ...Array.from(new Set(allProjects.map((p) => p.category))),
  ];

  const types = [
    "Todos los tipos",
    ...Array.from(new Set(allProjects.map((p) => p.type))),
  ];

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
              className={`px-3 py-1.5 rounded-xl border transition-all duration-200 ${
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
              className={`px-3 py-1.5 rounded-xl border transition-all duration-200 ${
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