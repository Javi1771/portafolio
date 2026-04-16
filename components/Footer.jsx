"use client";
import { Heart, Sparkles, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function HeartModal({ onClose }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden w-full max-w-sm"
        style={{
          boxShadow: "0 0 0 1.5px rgba(244,63,94,0.27), 0 30px 60px rgba(0,0,0,0.22), 0 8px 30px rgba(244,63,94,0.12)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Línea superior rose */}
        <div className="h-1 w-full bg-gradient-to-r from-rose-500 to-pink-600" />

        {/* Gradiente de fondo sutil */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 15% 0%, rgba(244,63,94,0.12), transparent 55%)" }}
        />

        <div className="relative p-7">
          {/* Botón cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer"
          >
            <X size={14} strokeWidth={2.5} />
          </button>

          {/* Icono */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(244,63,94,0.16), rgba(244,63,94,0.05))",
              border: "1.5px solid rgba(244,63,94,0.26)",
              boxShadow: "0 6px 20px rgba(244,63,94,0.21)",
            }}
          >
            <Heart size={28} className="text-rose-500 fill-rose-500" strokeWidth={1.7} />
          </div>

          {/* Título */}
          <h3 className="font-bold text-gray-900 dark:text-white text-xl leading-tight mb-2">
            Mi compromiso
          </h3>

          {/* Tagline */}
          <p className="text-sm font-semibold mb-4 text-rose-500">
            Así soy: cada detalle cuenta — el código es solo el medio.
          </p>

          {/* Separador */}
          <div className="h-px bg-gradient-to-r from-rose-500 to-pink-600 mb-4 opacity-30 rounded-full" />

          {/* Descripción */}
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Sé que siempre esperas que cada elemento sea funcional, que te sorprenda, que tenga un propósito. Por eso pienso en lo que el usuario siente al abrir tu app, no solo en que funcione.
          </p>

          {/* Footer pill */}
          <div className="mt-5 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gray-200 dark:bg-gray-800">
            <Sparkles className="w-3.5 h-3.5 text-violet-400 dark:text-violet-300 shrink-0" />
            <span className="text-[12px] text-gray-500 dark:text-gray-300">
              Tecnología con corazón, siempre.
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

const HEART_COLORS = [
  "#3b82f6", // blue
  "#06b6d4", // cyan
  "#8b5cf6", // violet
  "#a855f7", // purple
  "#ec4899", // pink
  "#f43f5e", // rose
  "#ef4444", // red
  "#d946ef", // fuchsia
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setColorIndex((i) => (i + 1) % HEART_COLORS.length);
    }, 700);
    return () => clearInterval(interval);
  }, [open]);

  const heartColor = open ? "#f43f5e" : HEART_COLORS[colorIndex];

  return (
    <footer className="border-t border-gray-400 dark:border-white/10 bg-gray-200 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-gray-600 dark:text-white/70 text-sm flex items-center justify-center gap-1.5 flex-wrap">
        <span>{new Date().getFullYear()} Javier. Hecho con</span>

        <button
          onClick={() => setOpen(true)}
          aria-label="Un mensaje sobre mi trabajo"
          className="relative z-10 transition-transform duration-200 hover:scale-125 active:scale-105 focus:outline-none"
        >
          <Heart
            className="w-4 h-4"
            style={{
              color: heartColor,
              fill: heartColor,
              transition: "color 0.5s ease, fill 0.5s ease",
            }}
          />
        </button>

        {open && <HeartModal onClose={() => setOpen(false)} />}

        <span>y Next.js + Tailwind.</span>
      </div>
    </footer>
  );
}
