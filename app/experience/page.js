// app/experience/page.js

"use client";

import { useState, useEffect } from "react";
import Section from "@/components/Section";
import Experience from "@/components/Experience";

export default function ExperiencePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-violet-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-violet-950/20 relative overflow-hidden">
      {/* Background orbs - solo desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-200/20 to-green-300/20 dark:from-emerald-500/10 dark:to-green-600/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" />
        </>
      )}

      {/* Pattern overlay - solo desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.500)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.400)_1px,transparent_1px)] bg-[length:48px_48px]" />
        </div>
      )}

      <Section
        title={
          <div className="space-y-6 relative">
            <div className="relative inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-rose-800 to-gray-900 dark:from-white dark:via-rose-200 dark:to-white bg-clip-text text-transparent leading-tight">
                Experiencia
              </h1>

              {/* Decorative elements - solo desktop */}
              {!isMobile && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-60 animate-bounce"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-40 animate-bounce"></div>
                </>
              )}

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 animate-scale-x"></div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
              Mi trayectoria profesional: freelance, contrato, estadías y emprendimiento
            </p>
          </div>
        }
        subtitle=""
        className="relative z-10"
      >
        <Experience isMobile={isMobile} />
      </Section>
    </div>
  );
}
