"use client";
import {
  LayoutGrid,
  Briefcase,
  Building2,
  User,
  Building,
  Layers,
  Globe,
  Monitor,
  Smartphone,
  FolderOpen,
  Tag,
} from "lucide-react";

/* ─── Paleta compartida por posición ─────────────────────────
   Misma posición = mismo color en las dos barras
──────────────────────────────────────────────────────────── */
const POSITION_TEXT = [
  "text-slate-700   dark:text-slate-200",
  "text-violet-600  dark:text-violet-300",
  "text-cyan-600    dark:text-cyan-300",
  "text-rose-600    dark:text-rose-300",
  "text-amber-600   dark:text-amber-300",
];

// Sombra coloreada para botón activo (solo light mode)
const POSITION_SHADOW = [
  "shadow-slate-400/60  dark:shadow-slate-400/30",
  "shadow-violet-500/55 dark:shadow-violet-500/30",
  "shadow-cyan-500/55   dark:shadow-cyan-500/30",
  "shadow-rose-500/55   dark:shadow-rose-500/30",
  "shadow-amber-500/55  dark:shadow-amber-500/30",
];

// Para el chip "activo" en el header
const POSITION_CHIP = [
  "text-slate-700  dark:text-slate-300  bg-slate-100       dark:bg-white/10",
  "text-violet-600 dark:text-violet-400 bg-violet-50       dark:bg-violet-500/15",
  "text-cyan-600   dark:text-cyan-400   bg-cyan-50         dark:bg-cyan-500/15",
  "text-rose-600   dark:text-rose-400   bg-rose-50         dark:bg-rose-500/15",
  "text-amber-600  dark:text-amber-400  bg-amber-50        dark:bg-amber-500/15",
];

/* ─── Configs ────────────────────────────────────────────── */
const CATEGORY_CONFIG = [
  { key: "Todos",                label: "Todos",       icon: LayoutGrid },
  { key: "Freelance",            label: "Freelance",   icon: Briefcase  },
  { key: "Municipio",            label: "Municipio",   icon: Building2  },
  { key: "Personal",             label: "Personal",    icon: User       },
  { key: "Empresarial Estadias", label: "Empresarial", icon: Building   },
];

const TYPE_CONFIG = [
  { key: "Todos los tipos",    label: "Todos",   icon: Layers     },
  { key: "Web Application",    label: "Web App", icon: Globe      },
  { key: "Website",            label: "Website", icon: Monitor    },
  { key: "Mobile Application", label: "Móvil",   icon: Smartphone },
];

/* ─── SectionHeader ──────────────────────────────────────── */

function SectionHeader({ headerIcon: HeaderIcon, headerColor, label, options, activeKey, defaultKey }) {
  const activeIndex  = options.findIndex((o) => o.key === activeKey);
  const activeOption = options[activeIndex];
  const isFiltered   = activeKey !== defaultKey;
  const ActiveIcon   = activeOption?.icon;

  return (
    <div className="flex items-center justify-between mb-2 min-h-[1.5rem]">
      {/* Icono + label de la sección */}
      <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
        <HeaderIcon className={`w-3.5 h-3.5 shrink-0 ${headerColor}`} strokeWidth={2.5} />
        {label}
      </p>

      {/* Chip con el filtro activo (solo cuando no es "Todos") */}
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold
          transition-all duration-200
          ${isFiltered
            ? `${POSITION_CHIP[activeIndex]} opacity-100 translate-x-0`
            : "opacity-0 pointer-events-none"
          }`}
      >
        {ActiveIcon && <ActiveIcon className="w-3 h-3 shrink-0" strokeWidth={2.5} />}
        {activeOption?.label}
      </span>
    </div>
  );
}

/* ─── SegmentedBar ───────────────────────────────────────── */

function SegmentedBar({ options, activeKey, labelBreakpoint = "min-[480px]", onSelect }) {
  return (
    <div className="flex gap-0.5 p-1 bg-gray-100/80 dark:bg-white/[0.05] rounded-xl">
      {options.map((opt, i) => {
        const isActive = activeKey === opt.key;
        const Icon = opt.icon;
        return (
          <button
            key={opt.key}
            onClick={() => onSelect(opt.key)}
            className={`flex-1 inline-flex items-center justify-center gap-1.5 h-8 px-1.5 rounded-[10px]
              text-xs font-semibold transition-all duration-150
              ${isActive
                ? `bg-white dark:bg-white/[0.14] shadow-md ${POSITION_SHADOW[i]} ring-1 ring-gray-200/80 dark:ring-white/[0.10] ${POSITION_TEXT[i]}`
                : "text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
          >
            <Icon className="shrink-0 w-3.5 h-3.5" strokeWidth={isActive ? 2.5 : 2} />
            <span className={`hidden ${labelBreakpoint}:inline truncate`}>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────── */

export default function CategoryFilter({ allProjects, selected, onChange }) {
  const visibleCategories = CATEGORY_CONFIG.filter(
    (c) => c.key === "Todos" || allProjects.some((p) => p.category === c.key)
  );
  const visibleTypes = TYPE_CONFIG.filter(
    (t) => t.key === "Todos los tipos" || allProjects.some((p) => p.type === t.key)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

      {/* ── Categoría ── */}
      <div className="space-y-2">
        <SectionHeader
          headerIcon={FolderOpen}
          headerColor="text-violet-500 dark:text-violet-400"
          label="Categoría"
          options={visibleCategories}
          activeKey={selected.category}
          defaultKey="Todos"
        />
        <SegmentedBar
          options={visibleCategories}
          activeKey={selected.category}
          labelBreakpoint="min-[540px]"
          onSelect={(key) => onChange({ ...selected, category: key })}
        />
      </div>

      {/* ── Tipo de Proyecto ── */}
      <div className="space-y-2">
        <SectionHeader
          headerIcon={Tag}
          headerColor="text-cyan-500 dark:text-cyan-400"
          label="Tipo de Proyecto"
          options={visibleTypes}
          activeKey={selected.type}
          defaultKey="Todos los tipos"
        />
        <SegmentedBar
          options={visibleTypes}
          activeKey={selected.type}
          labelBreakpoint="min-[380px]"
          onSelect={(key) => onChange({ ...selected, type: key })}
        />
      </div>

    </div>
  );
}
