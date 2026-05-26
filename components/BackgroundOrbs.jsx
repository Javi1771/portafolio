"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";

function pr(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const defaultOrbs = [
  {
    className: "top-20 left-10 w-80 h-80",
    gradient: "from-cyan-400/35 to-blue-500/35 dark:from-cyan-500/25 dark:to-blue-600/25",
    animate: { x: [0, 20, 0], y: [0, -22, 0] },
    duration: 9,
  },
  {
    className: "top-40 right-20 w-96 h-96",
    gradient: "from-violet-400/35 to-purple-500/35 dark:from-violet-500/25 dark:to-purple-600/25",
    animate: { x: [0, -16, 0], y: [0, 20, 0] },
    duration: 12,
  },
  {
    className: "bottom-20 left-1/3 w-72 h-72",
    gradient: "from-emerald-400/30 to-green-500/30 dark:from-emerald-500/25 dark:to-green-600/25",
    animate: { x: [0, 14, 0], y: [0, -16, 0] },
    duration: 10,
  },
  {
    className: "bottom-32 right-16 w-60 h-60",
    gradient: "from-rose-400/28 to-pink-500/28 dark:from-rose-500/20 dark:to-pink-600/20",
    animate: { x: [0, -18, 0], y: [0, -14, 0] },
    duration: 13,
  },
];

const STAR_COUNT = 30;

export default function BackgroundOrbs({ orbs = defaultOrbs }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => setMounted(true), []);

  const stars = useMemo(() =>
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      top:        `${(pr(i * 1.7) * 100).toFixed(4)}%`,
      left:       `${(pr(i * 2.3) * 100).toFixed(4)}%`,
      size:       (pr(i * 3.1) * 1.5 + 0.8).toFixed(3),
      delay:      (pr(i * 4.3) * 7).toFixed(2),
      duration:   (pr(i * 5.7) * 3.5 + 2.5).toFixed(2),
      maxOpacity: (pr(i * 6.1) * 0.45 + 0.2).toFixed(3),
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

      {/* Estrellas — solo modo oscuro, CSS animation */}
      {mounted && isDark && !shouldReduceMotion && stars.map((star, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-black dark:bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            "--star-max-op": star.maxOpacity,
            animationName: "star-twinkle",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </>
  );
}
