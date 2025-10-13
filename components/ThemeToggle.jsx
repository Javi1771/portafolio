// components/ThemeToggle.jsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";

const PARTICLES = 8;
const STARS = 12;
const RINGS = 3;

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggle } = useTheme();

  //! Evita diferencias SSR/cliente
  const [mounted, setMounted] = useState(false);

  //* Datos generados en cliente (random) para partículas y estrellas
  const [particles, setParticles] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setMounted(true);

    //* Generar partículas del track (no existen en SSR)
    const genParticles = Array.from({ length: PARTICLES }, (_, i) => ({
      key: `p-${i}`,
      width: (Math.random() * 3 + 1).toFixed(3) + "px",
      height: (Math.random() * 3 + 1).toFixed(3) + "px",
      left: (Math.random() * 80 + 10).toFixed(3) + "%",
      top: (Math.random() * 60 + 20).toFixed(3) + "%",
      delay: `${i * 300}ms`,
    }));
    setParticles(genParticles);

    //* Generar estrellas del campo (solo en dark y solo en cliente)
    const genStars = Array.from({ length: STARS }, (_, i) => ({
      key: `s-${i}`,
      width: (Math.random() * 2 + 0.5).toFixed(3) + "px",
      height: (Math.random() * 2 + 0.5).toFixed(3) + "px",
      left: (Math.random() * 100).toFixed(3) + "%",
      top: (Math.random() * 100).toFixed(3) + "%",
      delay: (Math.random() * 3).toFixed(3) + "s",
    }));
    setStars(genStars);
  }, []);

  return (
    <label className={`inline-flex items-center relative cursor-pointer group ${className}`}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={mounted ? isDark : false} //! en SSR siempre false para no desincronizar
        onChange={toggle}
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      />

      {/* Aura exterior resplandeciente (no aleatoria) */}
      <div
        className={`absolute -inset-4 rounded-full blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100 ${
          isDark
            ? "bg-gradient-to-r from-violet-500/30 via-indigo-500/40 to-purple-600/30"
            : "bg-gradient-to-r from-amber-400/40 via-orange-400/50 to-yellow-400/40"
        }`}
      />

      {/* Track principal */}
      <div
        className={`relative w-24 h-12 rounded-full transition-all duration-700 transform group-hover:scale-105 ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6),0_8px_32px_rgba(100,116,139,0.4)]"
            : "bg-gradient-to-br from-amber-200 via-orange-200 to-yellow-300 shadow-[inset_0_4px_8px_rgba(251,191,36,0.3),0_8px_32px_rgba(251,191,36,0.3)]"
        }`}
      >
        {/* Nebulosa estática (determinista → segura para SSR) */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDark
                ? "bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20"
                : "bg-gradient-to-r from-amber-300/30 via-transparent to-orange-300/30"
            }`}
          />

          {/* Partículas: SOLO tras montar (cliente) */}
          {mounted &&
            particles.map((p) => (
              <div
                key={p.key}
                className={`absolute rounded-full transition-all duration-1000 ${
                  isDark ? "bg-gradient-to-r from-violet-400 to-purple-300" : "bg-gradient-to-r from-amber-300 to-yellow-400"
                }`}
                style={{
                  width: p.width,
                  height: p.height,
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animation: "twinkle 2s infinite ease-in-out",
                  opacity: isDark ? 0.8 : 0.6,
                }}
              />
            ))}
        </div>

        {/* Botón deslizante */}
        <div
          className={`absolute w-10 h-10 rounded-full top-1 transition-all duration-700 ease-out transform group-hover:scale-110 ${
            isDark ? "translate-x-12" : "translate-x-1"
          }`}
        >
          {/* Aura del botón */}
          <div
            className={`absolute -inset-1 rounded-full blur-lg transition-all duration-700 ${
              isDark
                ? "bg-gradient-to-br from-violet-400/60 via-indigo-400/70 to-purple-500/60"
                : "bg-gradient-to-br from-amber-400/70 via-orange-400/80 to-yellow-400/70"
            }`}
          />

          {/* Cuerpo principal */}
          <div
            className={`relative w-10 h-10 rounded-full transition-all duration-700 ${
              isDark
                ? "bg-gradient-to-br from-slate-100 via-slate-200 to-white shadow-[0_0_20px_rgba(139,92,246,0.6),inset_0_2px_4px_rgba(255,255,255,0.8)]"
                : "bg-gradient-to-br from-white via-amber-50 to-orange-100 shadow-[0_0_20px_rgba(251,191,36,0.7),inset_0_2px_4px_rgba(255,255,255,0.9)]"
            }`}
          >
            {/* Reflejo */}
            <div className="absolute top-1 left-1 right-1 h-4 bg-gradient-to-b from-white/90 via-white/60 to-transparent rounded-full blur-sm" />

            {/* Icono */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                isDark ? "rotate-0 scale-100" : "rotate-180 scale-90"
              }`}
            >
              {isDark ? (
                <div className="relative">
                  <svg className="w-5 h-5 fill-slate-600 drop-shadow-lg" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-slate-400 rounded-full opacity-60" />
                  <div className="absolute bottom-1.5 left-1.5 w-0.5 h-0.5 bg-slate-500 rounded-full opacity-40" />
                  <div className="absolute -inset-2 bg-violet-400/20 rounded-full blur-md animate-pulse" />
                </div>
              ) : (
                <div className="relative">
                  <svg className="w-5 h-5 fill-amber-500 drop-shadow-lg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
                    <path
                      d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.09-5.09L15.68 8.32M8.32 15.68L6.91 17.09m10.18 0L15.68 15.68M8.32 8.32L6.91 6.91"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="fill-none"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-80" />
                  <div className="absolute -inset-2 bg-amber-400/30 rounded-full blur-md animate-pulse" />
                </div>
              )}
            </div>

            {/* Punto de luz */}
            <div
              className={`absolute w-2 h-2 rounded-full transition-all duration-700 ${
                isDark
                  ? "top-1.5 right-1.5 bg-gradient-to-br from-violet-300 to-indigo-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                  : "top-1.5 left-1.5 bg-gradient-to-br from-white to-amber-100 shadow-[0_0_8px_rgba(255,255,255,0.9)]"
              }`}
            />
          </div>
        </div>

        {/* Campo de estrellas: SOLO en dark y SOLO tras montar */}
        {mounted && isDark && (
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {stars.map((s) => (
              <div
                key={s.key}
                className="absolute bg-white rounded-full opacity-40"
                style={{
                  width: s.width,
                  height: s.height,
                  left: s.left,
                  top: s.top,
                  animationDelay: s.delay,
                  animation: "twinkle 3s infinite ease-in-out",
                }}
              />
            ))}
          </div>
        )}

        {/* Ondas (deterministas) */}
        <div className="absolute inset-0 rounded-full">
          {Array.from({ length: RINGS }).map((_, i) => (
            <div
              key={`r-${i}`}
              className={`absolute rounded-full border transition-all duration-700 ${
                isDark ? "border-violet-400/20" : "border-amber-400/30"
              }`}
              style={{
                width: `${(i + 1) * 25}px`,
                height: `${(i + 1) * 25}px`,
                top: "50%",
                left: isDark ? "70%" : "30%",
                transform: "translate(-50%, -50%)",
                animationDelay: `${i * 500}ms`,
                animation: "pulse-ring 3s infinite ease-out",
              }}
            />
          ))}
        </div>

        {/* Bruma (determinista) */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-700 ${
            isDark
              ? "bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"
          }`}
        />
      </div>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
        /* Focus ring accesible */
        input:focus + div {
          outline: none;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
        }
        /* Micro interacción al presionar */
        .group:active .transform { transform: scale(0.95); }
        /* Transición suave global del componente */
        :global(.group *) { transition-timing-function: cubic-bezier(0.25,0.46,0.45,0.94); }
      `}</style>
    </label>
  );
}
