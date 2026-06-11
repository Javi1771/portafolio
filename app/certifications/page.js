// app/certifications/page.js

"use client";

import Section from "@/components/Section";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import { Anthropic } from "@/components/icons/Anthropic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Calendar, Hash } from "lucide-react";

const certifications = [
  {
    num: "01",
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "jun. 2026",
    credentialId: "i83skgcg8gat",
    verifyUrl: "https://verify.skilljar.com/c/i83skgcg8gat",
    gradient: "from-amber-400 to-amber-600",
    glowColor: "#f59e0b",  // amber-500
    darkGlow: "#fbbf24",   // amber-400
  },
  {
    num: "02",
    title: "Certificate of completion: Claude 101",
    issuer: "Anthropic",
    date: "jun. 2026",
    credentialId: "6gceeqvh49pk",
    verifyUrl: "https://verify.skilljar.com/c/6gceeqvh49pk",
    gradient: "from-orange-400 to-orange-600",
    glowColor: "#f97316",  // orange-500
    darkGlow: "#fb923c",   // orange-400
  },
  {
    num: "03",
    title: "Certificate of Completion: AI Fluency Framework & Foundations",
    issuer: "Anthropic",
    date: "jun. 2026",
    credentialId: "35iq46657333",
    verifyUrl: "https://verify.skilljar.com/c/35iq46657333",
    gradient: "from-red-400 to-red-600",
    glowColor: "#ef4444",  // red-500
    darkGlow: "#f87171",   // red-400
  },
  {
    num: "04",
    title: "Certificate of completion: Introduction to Subagents",
    issuer: "Anthropic",
    date: "jun. 2026",
    credentialId: "jh29oeenjenq",
    verifyUrl: "https://verify.skilljar.com/c/jh29oeenjenq",
    gradient: "from-amber-500 to-orange-600",
    glowColor: "#d97706",  // amber-600
    darkGlow: "#f59e0b",   // amber-500
  },
  {
    num: "05",
    title: "Certificate of completion: AI Capabilities and Limitations",
    issuer: "Anthropic",
    date: "jun. 2026",
    credentialId: "7xgb386y38p3",
    verifyUrl: "https://verify.skilljar.com/c/7xgb386y38p3",
    gradient: "from-orange-500 to-red-600",
    glowColor: "#ea580c",  // orange-600
    darkGlow: "#f97316",   // orange-500
  },
  {
    num: "06",
    title: "Certificate of Completion: AI Fluency for Small Businesses",
    issuer: "Anthropic",
    date: "jun. 2026",
    credentialId: "bgb5brspyao7",
    verifyUrl: "https://verify.skilljar.com/c/bgb5brspyao7",
    gradient: "from-red-500 to-red-700",
    glowColor: "#dc2626",  // red-600
    darkGlow: "#ef4444",   // red-500
  },
];

export default function CertificationsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  const activeGlow = (cert) => isDark ? cert.darkGlow : cert.glowColor;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950/30 relative overflow-hidden">
      {!isMobile && <BackgroundOrbs />}

      {/* Dot pattern */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.06]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,theme(colors.amber.600)_1px,transparent_1px)] bg-[length:38px_38px]" />
        </div>
      )}

      {/* Warm glow orbs fijos en esquinas - solo desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-20 -left-32 w-80 h-80 bg-amber-400/10 dark:bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-40 -right-32 w-96 h-96 bg-orange-400/10 dark:bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <Section
        title={
          <div className="space-y-6">
            <div className="relative inline-block">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-amber-700 to-orange-800 dark:from-white dark:via-amber-300 dark:to-orange-300 bg-clip-text text-transparent leading-tight">
                Certificaciones
              </h1>
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 animate-scale-x rounded-full" />
              {!isMobile && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-70 animate-bounce" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-50 animate-bounce" />
                </>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Credenciales verificables obtenidas a través de programas oficiales de Anthropic.
              </p>

              {/* Stats pills */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/25 border border-amber-200/70 dark:border-amber-700/40 text-amber-700 dark:text-amber-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {certifications.length} certificados
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/25 border border-orange-200/70 dark:border-orange-700/40 text-orange-700 dark:text-orange-300 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  jun. 2026
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/25 border border-red-200/70 dark:border-red-700/40 text-red-700 dark:text-red-300 font-medium">
                  <Anthropic className="w-3.5 h-3.5" />
                  Anthropic
                </span>
              </div>
            </div>
          </div>
        }
        subtitle=""
        className="relative z-10"
      >
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Header de sección Anthropic */}
          <motion.div
            className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-gray-900/60 border border-amber-200/50 dark:border-amber-800/30 shadow-sm shadow-amber-100/40 dark:shadow-amber-900/20"
            style={!isMobile ? { backdropFilter: "blur(8px)" } : {}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo container */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200/60 dark:border-amber-700/40 shadow-inner">
              <Anthropic className="w-6 h-6 text-amber-700 dark:text-amber-400" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Anthropic</h3>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-xs text-gray-400 dark:text-gray-500">skilljar.com</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                Programas de certificación oficial en IA y productos Claude
              </p>
            </div>

            {/* Color swatches */}
            {!isMobile && (
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {certifications.map((c) => (
                  <div
                    key={c.credentialId}
                    className={`w-3 h-3 rounded-full bg-gradient-to-br ${c.gradient}`}
                    title={c.num}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Grid de cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.credentialId}
                className="h-full"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer
                    bg-white dark:bg-gray-900/70
                    border-amber-100 dark:border-gray-700/60
                    shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.35)]
                    ${!isMobile ? "hover:-translate-y-2" : ""}`}
                  onMouseEnter={
                    !isMobile
                      ? (e) => {
                          const g = activeGlow(cert);
                          e.currentTarget.style.boxShadow = `0 12px 40px ${g}30, 0 4px 16px ${g}18`;
                          e.currentTarget.style.borderColor = `${g}55`;
                        }
                      : undefined
                  }
                  onMouseLeave={
                    !isMobile
                      ? (e) => {
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.borderColor = "";
                        }
                      : undefined
                  }
                >
                  {/* Top gradient bar */}
                  <div className={`h-[3px] w-full bg-gradient-to-r ${cert.gradient} flex-shrink-0`} />

                  {/* Inner bg glow - light mode */}
                  <div
                    className="absolute inset-0 pointer-events-none dark:hidden"
                    style={{
                      background: `radial-gradient(ellipse at 60% 0%, ${cert.glowColor}0e, transparent 60%)`,
                    }}
                  />
                  {/* Inner bg glow - dark mode */}
                  <div
                    className="absolute inset-0 pointer-events-none hidden dark:block"
                    style={{
                      background: `radial-gradient(ellipse at 60% 0%, ${cert.darkGlow}22, transparent 60%)`,
                    }}
                  />

                  {/* Shine sweep on hover */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                  )}

                  <div className="relative flex flex-col flex-1 p-5 gap-4">
                    {/* Row: número + badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-black tracking-widest tabular-nums"
                        style={{ color: activeGlow(cert) }}
                      >
                        {cert.num}
                      </span>
                      <span
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide"
                        style={{
                          backgroundColor: `${cert.glowColor}14`,
                          color: cert.glowColor,
                          border: `1px solid ${cert.glowColor}38`,
                        }}
                      >
                        <ShieldCheck className="w-2.5 h-2.5" />
                        Verificado
                      </span>
                    </div>

                    {/* Icono con glow */}
                    <div className="flex justify-center py-1">
                      <div className="relative">
                        {/* Glow halo detrás del icono */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                          style={{ backgroundColor: activeGlow(cert) }}
                        />
                        <div
                          className="relative w-14 h-14 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${cert.glowColor}18`,
                            border: `2px solid ${cert.glowColor}45`,
                            boxShadow: `0 0 0 4px ${cert.glowColor}10, 0 4px 16px ${cert.glowColor}25`,
                          }}
                        >
                          <Anthropic
                            className="w-7 h-7"
                            style={{ color: activeGlow(cert) }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Texto */}
                    <div className="text-center space-y-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400 dark:text-gray-500">
                        {cert.issuer}
                      </p>
                      <h4 className="text-[14px] font-bold text-gray-900 dark:text-white leading-snug transition-colors duration-300">
                        {cert.title}
                      </h4>
                    </div>

                    {/* Separador */}
                    <div
                      className={`h-px bg-gradient-to-r ${cert.gradient} opacity-25 rounded-full mx-2`}
                    />

                    {/* Meta */}
                    <div className="space-y-1.5 px-1">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: cert.glowColor }}
                        />
                        <span>Expedición: <span className="font-medium text-gray-700 dark:text-gray-300">{cert.date}</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                        <Hash
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: cert.glowColor }}
                        />
                        <span className="font-mono">{cert.credentialId}</span>
                      </div>
                    </div>

                    {/* CTA button */}
                    <div className="mt-auto pt-1">
                      <div
                        className="w-full py-2.5 rounded-xl text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-opacity duration-200 group-hover:opacity-95"
                        style={{
                          background: `linear-gradient(to right, ${cert.glowColor}, ${cert.darkGlow})`,
                          boxShadow: `0 4px 14px ${cert.glowColor}35`,
                        }}
                      >
                        Ver credencial
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Más por venir */}
          <motion.div
            className="text-center py-10 rounded-2xl border border-dashed border-amber-200/60 dark:border-amber-800/30 bg-amber-50/30 dark:bg-amber-950/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center justify-center gap-1.5 mb-2">
              {["bg-amber-400", "bg-orange-400", "bg-red-400"].map((c, i) => (
                <div key={i} className={`w-2 h-2 ${c} rounded-full opacity-50`} />
              ))}
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500">Más certificaciones en camino</p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
