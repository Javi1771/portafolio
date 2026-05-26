"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

// Pseudo-random determinista para evitar diferencias entre renders
function pr(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const defaultOrbs = [
  {
    className: "top-20 left-10 w-80 h-80",
    gradient: "from-cyan-200/25 to-blue-300/25 dark:from-cyan-500/25 dark:to-blue-600/25",
    animate: { x: [0, 20, 0], y: [0, -22, 0] },
    duration: 9,
  },
  {
    className: "top-40 right-20 w-96 h-96",
    gradient: "from-violet-200/25 to-purple-300/25 dark:from-violet-500/25 dark:to-purple-600/25",
    animate: { x: [0, -16, 0], y: [0, 20, 0] },
    duration: 12,
  },
  {
    className: "bottom-20 left-1/3 w-72 h-72",
    gradient: "from-emerald-200/25 to-green-300/25 dark:from-emerald-500/25 dark:to-green-600/25",
    animate: { x: [0, 14, 0], y: [0, -16, 0] },
    duration: 10,
  },
  {
    className: "bottom-32 right-16 w-60 h-60",
    gradient: "from-rose-200/20 to-pink-300/20 dark:from-rose-500/20 dark:to-pink-600/20",
    animate: { x: [0, -18, 0], y: [0, -14, 0] },
    duration: 13,
  },
];

const STAR_COUNT = 55;

export default function BackgroundOrbs({ orbs = defaultOrbs }) {
  const shouldReduceMotion = useReducedMotion();

  const stars = useMemo(() =>
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      top:      `${pr(i * 1.7) * 100}%`,
      left:     `${pr(i * 2.3) * 100}%`,
      size:      pr(i * 3.1) * 1.5 + 0.8,        // 0.8px – 2.3px
      delay:     pr(i * 4.3) * 7,                 // 0s – 7s
      duration:  pr(i * 5.7) * 3.5 + 2.5,         // 2.5s – 6s
      maxOpacity: pr(i * 6.1) * 0.45 + 0.2,       // 0.2 – 0.65
    })),
  []);

  return (
    <>
      {/* Noise/grain texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.022] dark:opacity-[0.055] pointer-events-none"
        aria-hidden="true"
      >
        <filter id="bg-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bg-noise)" />
      </svg>

      {/* Orbes de color */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.className} bg-gradient-to-br ${orb.gradient} rounded-full blur-3xl`}
          animate={shouldReduceMotion ? undefined : orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
          }}
        />
      ))}

      {/* Estrellas que parpadean */}
      {!shouldReduceMotion && stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-gray-400 dark:bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{ opacity: [0, star.maxOpacity, 0] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
