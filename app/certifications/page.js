// app/certifications/page.js

"use client";

import Section from "@/components/Section";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import { Anthropic } from "@/components/icons/Anthropic";
import { Vercel } from "@/components/icons/Vercel";
import { BigSchool } from "@/components/icons/BigSchool";
import { MoureDev } from "@/components/icons/MoureDev";
import { OpenAI } from "@/components/icons/ChatGPT";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Calendar, Hash, Eye, ChevronDown, ChevronUp } from "lucide-react";

const certificationSections = [
  {
    id: "bigschool",
    issuer: "BIG school",
    url: "thebigschool.com",
    desc: "Programas de formación en desarrollo con Inteligencia Artificial, Marketing y Negocios",
    icon: BigSchool,
    colorClass: "blue",
    borderClass: "border-blue-300/70 dark:border-blue-500/65",
    bgClass: "bg-white/70 dark:bg-gray-900/60",
    bannerShadow: "shadow-[0_16px_40px_rgba(0,26,255,0.25)] dark:shadow-[0_16px_40px_rgba(59,130,246,0.18)]",
    cardShadow: "shadow-[0_8px_30px_rgba(0,26,255,0.15)] dark:shadow-[0_8px_30px_rgba(59,130,246,0.1)]",
    iconBgClass: "from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border-blue-200/60 dark:border-blue-700/40",
    iconColorClass: "text-blue-700 dark:text-blue-400",
    dotColorClass: "bg-blue-500",
    items: [
      {
        num: "01",
        title: "CERTIFICADO DE INICIACIÓN AL DESARROLLO CON IA",
        issuer: "BIG school",
        instructor: "Brais Moure",
        instructorIcon: MoureDev,
        date: "jun. 2026",
        credentialId: "cxjz3593",
        verifyUrl: "https://certificados.thebigschool.com/wp-content/uploads/certs/MDEV3/Certificado-Javier-Lopez-Camacho-cxjz3593.pdf",
        pdfUrl: "/certs/Certificado-Javier-Lopez-Camacho-cxjz3593.pdf",
        gradient: "from-blue-500 to-indigo-600",
        glowColor: "#001AFF",
        darkGlow: "#3b82f6",
      }
    ]
  },
  {
    id: "vercel",
    issuer: "Vercel",
    url: "nextjs.org",
    desc: "Certificaciones oficiales de Next.js y el ecosistema de Vercel",
    icon: Vercel,
    colorClass: "zinc",
    borderClass: "border-zinc-300/70 dark:border-zinc-400/65",
    bgClass: "bg-white/70 dark:bg-gray-900/60",
    bannerShadow: "shadow-[0_16px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_16px_40px_rgba(255,255,255,0.12)]",
    cardShadow: "shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.06)]",
    iconBgClass: "from-zinc-50 to-neutral-200 dark:from-zinc-900/30 dark:to-neutral-900/30 border-zinc-200/60 dark:border-zinc-700/40",
    iconColorClass: "text-zinc-800 dark:text-zinc-200",
    dotColorClass: "bg-zinc-600 dark:bg-zinc-300",
    items: [
      {
        num: "01",
        title: "Next.js App Router Fundamentals",
        issuer: "Vercel",
        date: "jun. 2026",
        credentialId: "dashboard-app",
        verifyUrl: "https://nextjs.org/learn/certificate?course=dashboard-app&user=164089&certId=dashboard-app-164089-1781221086452",
        pdfUrl: "/certs/learn-certificate-og.pdf",
        gradient: "from-zinc-800 via-neutral-900 to-black dark:from-zinc-200 dark:via-neutral-100 dark:to-white",
        glowColor: "#000000",
        darkGlow: "#ffffff",
      }
    ]
  },
  {
    id: "openai",
    issuer: "OpenAI",
    url: "academy.openai.com",
    desc: "Certificaciones oficiales de OpenAI Academy en fundamentos de IA",
    icon: OpenAI,
    colorClass: "emerald",
    borderClass: "border-emerald-300/70 dark:border-emerald-500/65",
    bgClass: "bg-white/70 dark:bg-gray-900/60",
    bannerShadow: "shadow-[0_16px_40px_rgba(16,163,127,0.25)] dark:shadow-[0_16px_40px_rgba(52,211,153,0.18)]",
    cardShadow: "shadow-[0_8px_30px_rgba(16,163,127,0.15)] dark:shadow-[0_8px_30px_rgba(52,211,153,0.1)]",
    iconBgClass: "from-emerald-50 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 border-emerald-200/60 dark:border-emerald-700/40",
    iconColorClass: "text-emerald-700 dark:text-emerald-400",
    dotColorClass: "bg-emerald-500",
    items: [
      {
        num: "01",
        title: "AI Foundations",
        issuer: "OpenAI",
        date: "jul. 2026",
        credentialId: "lc5l92f1rq",
        verifyUrl: "https://academy.openai.com/home/certificate/lc5l92f1rq",
        pdfUrl: "/certs/certificate-lc5l92f1rq.pdf",
        gradient: "from-emerald-500 to-teal-600",
        glowColor: "#10a37f",
        darkGlow: "#34d399",
      }
    ]
  },
  {
    id: "anthropic",
    issuer: "Anthropic",
    url: "skilljar.com",
    desc: "Programas de certificación oficial en IA y productos Claude",
    icon: Anthropic,
    colorClass: "amber",
    borderClass: "border-amber-300/70 dark:border-amber-500/65",
    bgClass: "bg-white/70 dark:bg-gray-900/60",
    bannerShadow: "shadow-[0_16px_40px_rgba(245,158,11,0.25)] dark:shadow-[0_16px_40px_rgba(251,191,36,0.18)]",
    cardShadow: "shadow-[0_8px_30px_rgba(245,158,11,0.15)] dark:shadow-[0_8px_30px_rgba(251,191,36,0.1)]",
    iconBgClass: "from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-200/60 dark:border-amber-700/40",
    iconColorClass: "text-amber-700 dark:text-amber-400",
    dotColorClass: "bg-amber-500",
    items: [
      {
        num: "01",
        title: "Claude Code in Action",
        issuer: "Anthropic",
        date: "jun. 2026",
        credentialId: "i83skgcg8gat",
        verifyUrl: "https://verify.skilljar.com/c/i83skgcg8gat",
        pdfUrl: "/certs/certificate-i83skgcg8gat-1781206527.pdf",
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
        pdfUrl: "/certs/certificate-6gceeqvh49pk-1781206525.pdf",
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
        pdfUrl: "/certs/certificate-35iq46657333-1781207007.pdf",
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
        pdfUrl: "/certs/certificate-jh29oeenjenq-1781207650.pdf",
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
        pdfUrl: "/certs/certificate-7xgb386y38p3-1781208859.pdf",
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
        pdfUrl: "/certs/certificate-bgb5brspyao7-1781210934.pdf",
        gradient: "from-red-500 to-red-700",
        glowColor: "#dc2626",  // red-600
        darkGlow: "#ef4444",   // red-500
      },
      {
        num: "07",
        title: "Certificate of completion: Claude Platform 101",
        issuer: "Anthropic",
        date: "jun. 2026",
        credentialId: "fa7q5ttq4zqe",
        verifyUrl: "https://verify.skilljar.com/c/fa7q5ttq4zqe",
        pdfUrl: "/certs/certificate-fa7q5ttq4zqe-1781561677.pdf",
        gradient: "from-amber-400 via-orange-400 to-orange-600",
        glowColor: "#f97316",  // orange-500
        darkGlow: "#fb923c",   // orange-400
      },
      {
        num: "08",
        title: "Certificate of completion: Claude code 101",
        issuer: "Anthropic",
        date: "jun. 2026",
        credentialId: "6gbhxootpzve",
        verifyUrl: "https://verify.skilljar.com/c/6gbhxootpzve",
        pdfUrl: "/certs/certificate-6gbhxootpzve-1781562133.pdf",
        gradient: "from-orange-500 via-red-500 to-red-700",
        glowColor: "#ef4444",  // red-500
        darkGlow: "#f87171",   // red-400
      },
      {
        num: "09",
        title: "Certificate of completion: Introduction to Claude Cowork",
        issuer: "Anthropic",
        date: "jul. 2026",
        credentialId: "3ukksxbku3mw",
        verifyUrl: "https://verify.skilljar.com/c/3ukksxbku3mw",
        pdfUrl: "/certs/certificate-3ukksxbku3mw-1783026568.pdf",
        gradient: "from-amber-500 via-orange-500 to-red-500",
        glowColor: "#f59e0b",  // amber-500
        darkGlow: "#fbbf24",   // amber-400
      },
    ]
  }
];

const VISIBLE_LIMIT = 4;

export default function CertificationsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [expandedSections, setExpandedSections] = useState(() => new Set());

  const toggleFilter = (id) => setActiveFilter((prev) => (prev === id ? null : id));

  const toggleExpanded = (id) =>
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

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

  const closePdfModal = () => setPreviewUrl(null);

  const anthropicCertsCount = certificationSections.find(s => s.id === "anthropic")?.items.length || 0;
  const vercelCertsCount = certificationSections.find(s => s.id === "vercel")?.items.length || 0;
  const bigschoolCertsCount = certificationSections.find(s => s.id === "bigschool")?.items.length || 0;
  const openaiCertsCount = certificationSections.find(s => s.id === "openai")?.items.length || 0;
  const totalCerts = anthropicCertsCount + vercelCertsCount + bigschoolCertsCount + openaiCertsCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950/30 relative overflow-hidden">
      {/* PDF Preview Modal */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closePdfModal}
        >
          <div
            className="relative w-full max-w-4xl h-[85vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Vista previa del certificado</span>
              <button
                onClick={closePdfModal}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
            <embed
              src={previewUrl}
              type="application/pdf"
              className="flex-1 w-full"
              style={{ height: '100%' }}
            />
          </div>
        </div>
      )}

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
                Credenciales verificables obtenidas a través de programas oficiales de Anthropic, Vercel, BIG school y OpenAI.
              </p>

              {/* Info pills */}
              <div className="flex flex-wrap items-center gap-2.5 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/25 border border-amber-200/70 dark:border-amber-700/40 text-amber-700 dark:text-amber-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {totalCerts} certificados
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/25 border border-orange-200/70 dark:border-orange-700/40 text-orange-700 dark:text-orange-300 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  jul. 2026
                </span>
              </div>

              {/* Filter bar */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500 select-none">
                  Filtrar por
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {/* Todos / Clear */}
                  <button
                    onClick={() => setActiveFilter(null)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 active:scale-95 ${
                      activeFilter === null
                        ? "bg-gray-900 dark:bg-white border-gray-900 dark:border-white text-white dark:text-gray-900 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-600 dark:hover:text-gray-200"
                    }`}
                  >
                    Todos
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] tabular-nums font-bold transition-colors ${
                      activeFilter === null ? "bg-white/20 dark:bg-black/20" : "bg-gray-100 dark:bg-gray-800"
                    }`}>
                      {totalCerts}
                    </span>
                  </button>

                  <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-0.5" />

                  {certificationSections.map((section) => {
                    const FilterIcon = section.icon;
                    const isActive = activeFilter === section.id;
                    const color = isDark ? section.items[0].darkGlow : section.items[0].glowColor;
                    return (
                      <button
                        key={section.id}
                        onClick={() => toggleFilter(section.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 active:scale-95 ${
                          isActive ? "scale-105" : "hover:scale-[1.03]"
                        }`}
                        style={isActive ? {
                          background: `${color}14`,
                          borderColor: `${color}65`,
                          color: color,
                          boxShadow: `0 4px 20px ${color}28`,
                        } : {
                          borderColor: "rgba(209,213,219,0.5)",
                          color: "rgb(156,163,175)",
                        }}
                      >
                        <FilterIcon className="w-3.5 h-3.5" />
                        <span>{section.issuer}</span>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] tabular-nums font-bold"
                          style={{ background: isActive ? `${color}22` : "rgba(156,163,175,0.12)" }}
                        >
                          {section.items.length}
                        </span>
                        {isActive && (
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] leading-none"
                            style={{ background: `${color}22` }}
                          >
                            ✕
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        }
        subtitle=""
        className="relative z-10"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {certificationSections.filter(s => !activeFilter || s.id === activeFilter).map((section) => {
            const SectionIcon = section.icon;
            const accent = isDark ? section.items[0].darkGlow : section.items[0].glowColor;
            return (
              <div key={section.id} className="space-y-6">
                {/* Header de sección */}
                <motion.div
                  className={`flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-gray-900/60 border ${section.borderClass} ${section.bgClass} ${section.bannerShadow}`}
                  style={!isMobile ? { backdropFilter: "blur(8px)" } : {}}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Logo container */}
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br border shadow-inner ${section.iconBgClass}`}>
                    <SectionIcon className={`w-6 h-6 ${section.iconColorClass}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{section.issuer}</h3>
                      <span className={`w-1.5 h-1.5 rounded-full ${section.dotColorClass}`} />
                      <span className="text-xs text-gray-400 dark:text-gray-500">{section.url}</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {section.desc}
                    </p>
                  </div>

                  {/* Color swatches */}
                  {!isMobile && (
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {section.items.map((c) => (
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
                  {(expandedSections.has(section.id)
                    ? section.items
                    : section.items.slice(0, VISIBLE_LIMIT)
                  ).map((cert, i) => (
                    <motion.div
                      key={cert.credentialId}
                      className="h-full"
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.07 }}
                    >
                      <div
                        className={`group relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300
                          bg-white dark:bg-gray-900/70
                          border-gray-200/50 dark:border-gray-800/60
                          ${section.cardShadow}
                          ${!isMobile ? "hover:-translate-y-2" : ""}`}
                        style={{ transition: "all 300ms ease" }}
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
                                backgroundColor: `${activeGlow(cert)}14`,
                                color: activeGlow(cert),
                                border: `1px solid ${activeGlow(cert)}38`,
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
                                  backgroundColor: `${activeGlow(cert)}18`,
                                  border: `2px solid ${activeGlow(cert)}45`,
                                  boxShadow: `0 0 0 4px ${activeGlow(cert)}10, 0 4px 16px ${activeGlow(cert)}25`,
                                }}
                              >
                                <SectionIcon
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
                            {cert.instructor && (
                              <div className="flex items-center justify-center gap-1.5 mt-1 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                                <span>Impartido por {cert.instructor}</span>
                                {cert.instructorIcon && (
                                  <cert.instructorIcon className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
                                )}
                              </div>
                            )}
                          </div>

                          {/* Separador */}
                          <div
                            className="rounded-full mx-2 flex-shrink-0"
                            style={{
                              height: '2px',
                              background: `linear-gradient(to right, ${activeGlow(cert)}99, ${activeGlow(cert)}33)`,
                            }}
                          />

                          {/* Meta */}
                          <div className="space-y-1.5 px-1">
                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                              <Calendar
                                className="w-3.5 h-3.5 flex-shrink-0"
                                style={{ color: activeGlow(cert) }}
                              />
                              <span>Expedición: <span className="font-medium text-gray-700 dark:text-gray-300">{cert.date}</span></span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                              <Hash
                                className="w-3.5 h-3.5 flex-shrink-0"
                                style={{ color: activeGlow(cert) }}
                              />
                              <span className="font-mono">{cert.credentialId}</span>
                            </div>
                          </div>

                          {/* CTA buttons */}
                          <div className="mt-auto pt-1 flex gap-2">
                            <a
                              href={cert.verifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 hover:opacity-90 active:scale-95 text-center"
                              style={{
                                background: cert.issuer.toLowerCase() === "vercel"
                                  ? (isDark ? "#ffffff" : "#000000")
                                  : cert.issuer.toLowerCase() === "big school"
                                  ? "#001AFF"
                                  : `linear-gradient(to right, ${cert.glowColor}, ${cert.darkGlow})`,
                                color: cert.issuer.toLowerCase() === "vercel"
                                  ? (isDark ? "#000000" : "#ffffff")
                                  : "#ffffff",
                                boxShadow: `0 4px 14px ${activeGlow(cert)}35`,
                              }}
                            >
                              Ver en línea
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            {cert.pdfUrl && (
                              <button
                                onClick={() => setPreviewUrl(cert.pdfUrl)}
                                className="px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 active:scale-95"
                                style={{
                                  color: activeGlow(cert),
                                  borderColor: `${activeGlow(cert)}30`,
                                }}
                                title="Vista previa del PDF"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Ver PDF</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Ver más / Ver menos */}
                {section.items.length > VISIBLE_LIMIT && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => toggleExpanded(section.id)}
                      className="group flex items-center gap-1.5 pl-4 pr-3 py-2 rounded-full text-xs font-bold tracking-wide border transition-all duration-200 active:scale-95 hover:scale-105"
                      style={{
                        color: accent,
                        borderColor: `${accent}40`,
                        background: `${accent}10`,
                      }}
                    >
                      {expandedSections.has(section.id) ? (
                        <>
                          Ver menos
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          Ver {section.items.length - VISIBLE_LIMIT}+
                          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}

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
