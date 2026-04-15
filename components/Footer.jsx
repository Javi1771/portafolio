"use client";
import { Heart, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <footer className="border-t border-gray-400 dark:border-white/10 bg-gray-200 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-gray-600 dark:text-white/70 text-sm flex items-center justify-center gap-1.5 flex-wrap">
        <span>{new Date().getFullYear()} Javier. Hecho con</span>

        {/* Corazón clickeable */}
        <span ref={containerRef} className="relative inline-flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Un mensaje sobre mi trabajo"
            className="relative z-10 transition-transform duration-200 hover:scale-125 active:scale-105 focus:outline-none"
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                open
                  ? "text-rose-500 fill-rose-500 scale-110"
                  : "text-rose-400 fill-rose-400/70 hover:fill-rose-500 hover:text-rose-500"
              }`}
            />
          </button>

          {/* Tooltip con fondo sólido */}
          {open && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 max-w-[calc(100vw-2rem)] pointer-events-none z-50 animate-fade-in">
              {/* Cuerpo */}
              <span className="block rounded-2xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/50 border border-rose-200 dark:border-gray-700">
                {/* Header */}
                <span className="relative flex flex-col items-center gap-1.5 px-4 pt-4 pb-3 bg-rose-50 dark:bg-gray-900">
                  {/* Toque rose en dark mode */}
                  <span className="hidden dark:block absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent pointer-events-none" />
                  <span className="relative w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-500/15 border dark:border-rose-500/25 flex items-center justify-center shrink-0">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  </span>
                  <span className="relative text-[11px] font-bold uppercase tracking-widest text-rose-400 dark:text-rose-400">
                    Mi compromiso
                  </span>
                  <span className="relative text-[13px] text-gray-700 dark:text-gray-100 leading-relaxed text-center">
                    Pienso en todos los detalles — el código es solo el medio.
                  </span>
                </span>

                {/* Separador */}
                <span className="block h-px bg-rose-200 dark:bg-gray-700" />

                {/* Footer */}
                <span className="flex items-center justify-center gap-1.5 px-4 py-3 bg-white dark:bg-gray-800">
                  <Sparkles className="w-3 h-3 text-violet-400 dark:text-violet-300 shrink-0" />
                  <span className="text-[12px] text-gray-500 dark:text-gray-300">
                    Fácil, claro e intuitivo desde el primer segundo.
                  </span>
                </span>
              </span>

              {/* Flecha */}
              <span className="block w-0 h-0 mx-auto border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800" />
            </span>
          )}
        </span>

        <span>y Next.js + Tailwind.</span>
      </div>
    </footer>
  );
}
