"use client";

export default function CategoryFilter({ allProjects, selected, onChange }) {
  const categories = [
    "Todos",
    ...Array.from(new Set(allProjects.map((p) => p.category))),
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-1.5 rounded-xl border transition-all duration-200 ${
            selected === c
              ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white border-violet-600 shadow-lg"
              : "bg-white/60 dark:bg-white/5 text-gray-700 dark:text-white/90 border-gray-200/50 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}