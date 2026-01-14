/* eslint-disable react-hooks/exhaustive-deps */
// app/projects/[id]/page.js

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  //* Gallery state
  const [images, setImages] = useState(null);
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const startX = useRef(null);
  const trackRef = useRef(null);

  //* Load images
  useEffect(() => {
    if (!project) return;
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(`/api/project-images?id=${project.id}`, {
          cache: "force-cache",
        });
        if (!res.ok) throw new Error("No images");
        const data = await res.json();
        if (!cancelled) {
          const list =
            Array.isArray(data) && data.length
              ? data
              : project.image
              ? [project.image]
              : [];
          setImages(list);
          setActive(0);
        }
      } catch {
        if (!cancelled) {
          setImages(project?.image ? [project.image] : []);
          setActive(0);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  //* Navigation functions
  const prev = useCallback(() => {
    setActive((i) =>
      images && images.length ? (i - 1 + images.length) % images.length : 0
    );
  }, [images?.length]);

  const next = useCallback(() => {
    setActive((i) => (images && images.length ? (i + 1) % images.length : 0));
  }, [images?.length]);

  //* Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (!images || !images.length) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === " " || e.key === "Enter") setIsFullscreen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images?.length, next, prev]);

  //* Drag/swipe functionality
  const onPointerDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX || e.touches?.[0]?.clientX;
  };

  const onPointerMove = (e) => {
    if (!isDragging || startX.current == null) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    if (!clientX) return;

    const dx = clientX - startX.current;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(${
        -active * 100
      }% + ${dx}px))`;
    }
  };

  const endDrag = (e) => {
    if (!isDragging || startX.current == null) return;
    const clientX = e.clientX || e.changedTouches?.[0]?.clientX;
    if (!clientX) return;

    const dx = clientX - startX.current;
    setIsDragging(false);
    startX.current = null;
    if (trackRef.current) {
      trackRef.current.style.transition = "";
      trackRef.current.style.transform = `translateX(${-active * 100}%)`;
    }
    if (Math.abs(dx) > 60) dx < 0 ? next() : prev();
  };

  //! 404 page
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-rose-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-rose-950/20 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-rose-200/20 to-pink-300/20 dark:from-rose-500/10 dark:to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-violet-200/20 to-purple-300/20 dark:from-violet-500/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <Section className="text-center relative z-10 px-4">
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-full flex items-center justify-center border border-rose-200/50 dark:border-rose-700/50">
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-rose-500 dark:text-rose-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29 1.009-5.659 2.571M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 dark:from-rose-400 dark:via-pink-400 dark:to-rose-400 bg-clip-text text-transparent">
                Proyecto no encontrado
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                El proyecto que buscas no existe o ha sido movido.
              </p>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold rounded-xl md:rounded-2xl shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm md:text-base"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Volver a proyectos
            </Link>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-violet-50/30 dark:from-gray-900 dark:via-gray-800/50 dark:to-violet-950/20 relative overflow-hidden">
      {/* Enhanced floating orbs - scaled down for mobile */}
      <div className="absolute top-4 left-4 w-48 h-48 md:top-10 md:left-10 md:w-72 md:h-72 bg-gradient-to-br from-violet-200/30 to-purple-300/25 dark:from-violet-500/15 dark:to-purple-600/12 rounded-full blur-2xl md:blur-3xl opacity-80"></div>
      <div className="absolute top-8 right-4 w-56 h-56 md:top-20 md:right-10 md:w-80 md:h-80 bg-gradient-to-br from-cyan-200/25 to-blue-300/30 dark:from-cyan-500/12 dark:to-blue-600/15 rounded-full blur-2xl md:blur-3xl opacity-75"></div>
      <div className="absolute bottom-16 left-1/4 w-40 h-40 md:bottom-20 md:left-1/3 md:w-64 md:h-64 bg-gradient-to-br from-emerald-200/28 to-green-300/22 dark:from-emerald-500/14 dark:to-green-600/11 rounded-full blur-2xl md:blur-3xl opacity-70"></div>

      {/* Enhanced pattern background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.500)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_2px_2px,theme(colors.violet.400)_1px,transparent_1px)] bg-[length:30px_30px] md:bg-[length:40px_40px]"></div>

      {/* Fullscreen Modal */}
      {isFullscreen && images && images.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full h-full max-w-7xl mx-auto p-4 md:p-8 flex items-center justify-center">
            <Image
              src={images[active]}
              alt={`${project.title} - imagen completa`}
              fill
              className="object-contain"
              priority
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Contador fullscreen */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 group">
              <div className="flex items-center gap-2 md:gap-4 px-3 py-2 md:px-6 md:py-3 bg-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex gap-1 md:gap-1.5">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`transition-all duration-300 cursor-pointer ${
                        idx === active
                          ? "w-5 h-1.5 md:w-8 md:h-2 bg-white rounded-full"
                          : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/40 hover:bg-white/60 rounded-full hover:scale-125"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(idx);
                      }}
                    />
                  ))}
                </div>
                <div className="w-px h-3 md:h-4 bg-white/30"></div>
                <span className="text-white font-semibold text-xs md:text-sm">
                  {active + 1} de {images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Section className="relative z-10 px-3 sm:px-4 md:px-6 max-w-full overflow-hidden">
        {/* Breadcrumbs */}
        <div className="mb-4 sm:mb-6 md:mb-12">
          <nav className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
            <Link
              href="/projects"
              className="group flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-200/50 dark:border-slate-700/50 hover:border-violet-300/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <svg
                className="w-3 h-3 md:w-4 md:h-4 group-hover:-translate-x-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="hidden xs:inline">Proyectos</span>
            </Link>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-violet-400/60 rounded-full"></div>
            <span className="text-slate-700 dark:text-slate-300 font-semibold px-2 py-1 md:px-3 md:py-1 bg-violet-100/80 dark:bg-violet-900/30 rounded-full text-xs md:text-sm truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">
              {project.title}
            </span>
          </nav>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-16 mb-8 sm:mb-12 md:mb-20 max-w-full">
          {/* IMAGE GALLERY */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 min-w-0 max-w-full">
            <div className="group relative rounded-2xl md:rounded-3xl border-2 border-slate-200/60 dark:border-slate-700/50 shadow-2xl overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
              {/* glows */}
              <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-violet-500/30 via-purple-500/40 to-cyan-500/30 dark:from-violet-400/20 dark:via-purple-400/25 dark:to-cyan-400/20 rounded-2xl md:rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-violet-400/20 via-purple-400/25 to-cyan-400/20 dark:from-violet-300/10 dark:via-purple-300/15 dark:to-cyan-300/10 rounded-2xl md:rounded-3xl blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>

              <div
                className="relative w-full h-[35vh] xs:h-[40vh] sm:h-[45vh] md:h-[55vh] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] max-h-[400px] sm:max-h-[500px] md:max-h-[700px] overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer"
                style={{ touchAction: "pan-y" }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onPointerLeave={endDrag}
                onTouchStart={onPointerDown}
                onTouchMove={onPointerMove}
                onTouchEnd={endDrag}
                onClick={() => images && setIsFullscreen(true)}
              >
                {/* Image track */}
                <div
                  ref={trackRef}
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(${-active * 100}%)` }}
                >
                  {(images ?? Array.from({ length: 1 })).map((src, idx) => (
                    <div
                      key={idx}
                      className="relative shrink-0 grow-0 basis-full group/image"
                    >
                      {!images ? (
                        <div className="absolute inset-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-200/80 via-slate-300/60 to-slate-200/80 dark:from-slate-700/80 dark:via-slate-600/60 dark:to-slate-700/80 animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent animate-shimmer"></div>
                          <div className="absolute top-3 md:top-8 left-3 md:left-8 w-14 md:w-24 h-3 md:h-6 bg-slate-300/60 dark:bg-slate-600/60 rounded-full animate-pulse"></div>
                          <div className="absolute top-3 md:top-8 right-3 md:right-8 w-10 md:w-16 h-3 md:h-6 bg-slate-300/60 dark:bg-slate-600/60 rounded-full animate-pulse delay-200"></div>
                          <div className="absolute bottom-3 md:bottom-8 left-1/2 -translate-x-1/2 w-14 md:w-20 h-4 md:h-8 bg-slate-300/60 dark:bg-slate-600/60 rounded-full animate-pulse delay-400"></div>
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-3 md:inset-6">
                            <Image
                              src={src}
                              alt={`${project.title} - imagen ${idx + 1}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
                              className="object-contain transition-all duration-700 group-hover/image:scale-105"
                              priority={idx === active}
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Navigation arrows - AÑADIR ESTO */}
                {images && images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                    >
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                    >
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}

                {/* Dots + counter */}
                {images && images.length > 1 && (
                  <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 group">
                    <div className="flex items-center gap-2 md:gap-4 px-3 py-1.5 md:px-5 md:py-3 bg-gradient-to-r from-black/70 via-black/80 to-black/70 backdrop-blur-xl rounded-lg md:rounded-2xl border border-white/20 shadow-2xl">
                      <div className="flex gap-1 md:gap-1.5">
                        {images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`transition-all duration-300 cursor-pointer ${
                              idx === active
                                ? "w-4 h-1.5 md:w-6 md:h-2 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full shadow-lg shadow-violet-500/50"
                                : "w-1.5 h-1.5 md:w-2 md:h-2 bg-white/40 hover:bg-white/60 rounded-full hover:scale-125 hover:shadow-md"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActive(idx);
                            }}
                          />
                        ))}
                      </div>
                      <div className="w-px h-3 md:h-4 bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>
                      <div className="flex items-center gap-1 md:gap-2 text-white">
                        <span className="text-xs md:text-sm font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                          {active + 1}
                        </span>
                        <span className="text-[10px] md:text-xs text-white/60">
                          de
                        </span>
                        <span className="text-xs md:text-sm font-semibold text-white/80">
                          {images.length}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/30 to-violet-500/20 rounded-lg md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                )}

                {/* corner badges */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4">
                  <span className="px-2 py-1 md:px-4 md:py-2 bg-gradient-to-r from-black/70 to-black/60 backdrop-blur-md text-white text-xs md:text-sm font-bold rounded-full border border-white/20 shadow-lg">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-2 md:top-4 right-2 md:right-4">
                  <span className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-black/70 to-black/60 backdrop-blur-md text-white dark:text-slate-200 text-xs font-bold rounded-full border border-slate-200/50 dark:border-slate-600/50 shadow-lg">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* thumbnails */}
            {images && images.length > 1 && (
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300/60 dark:via-slate-600/60 to-transparent"></div>
                  <span className="px-2 py-1 md:px-3 md:py-1 bg-violet-100/80 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-bold rounded-full">
                    {images.length} imágenes
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300/60 dark:via-slate-600/60 to-transparent"></div>
                </div>

                <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 -mx-2 px-2">
                  {images.map((src, idx) => (
                    <button
                      key={src + idx}
                      onClick={() => setActive(idx)}
                      className={`group relative h-12 w-16 xs:h-14 xs:w-20 md:h-20 md:w-28 rounded-lg md:rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                        active === idx
                          ? "border-violet-400 ring-2 md:ring-4 ring-violet-200/60 dark:ring-violet-800/60 shadow-lg shadow-violet-500/25"
                          : "border-slate-200/60 dark:border-slate-700/60 hover:border-violet-300/60 dark:hover:border-violet-500/60 shadow-md hover:shadow-lg"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${project.title} miniatura ${idx + 1}`}
                        fill
                        sizes="(max-width: 480px) 64px, (max-width: 768px) 80px, 120px"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          active === idx
                            ? "bg-violet-500/20"
                            : "bg-black/0 group-hover:bg-black/10"
                        }`}
                      ></div>
                      {active === idx && (
                        <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-violet-400 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* links */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
                  Enlaces del Proyecto
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
              </div>

              <div className="grid gap-3 md:gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold rounded-xl md:rounded-2xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden text-sm md:text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                      {/* GitHub icon */}
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Ver Código
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                )}

                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative px-4 py-3 md:px-6 md:py-4 bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl border-2 border-cyan-300/60 dark:border-cyan-500/50 text-cyan-700 dark:text-cyan-300 font-bold rounded-xl md:rounded-2xl hover:border-cyan-500/80 dark:hover:border-cyan-400/80 hover:bg-cyan-50/90 dark:hover:bg-cyan-950/30 hover:text-cyan-800 dark:hover:text-cyan-200 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 overflow-hidden text-sm md:text-base"
                  >
                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Ver Demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                )}

                <Link
                  href="/projects"
                  className="group relative px-4 py-3 md:px-6 md:py-4 bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl border-2 border-emerald-300/60 dark:border-emerald-500/50 text-emerald-700 dark:text-emerald-300 font-bold rounded-xl md:rounded-2xl hover:border-emerald-500/80 dark:hover:border-emerald-400/80 hover:bg-emerald-50/90 dark:hover:bg-emerald-950/30 hover:text-emerald-800 dark:hover:text-emerald-200 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 overflow-hidden text-sm md:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2 md:gap-3">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Todos los Proyectos
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
            <div className="space-y-4 md:space-y-8">
              <div className="relative">
                <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-slate-900 via-violet-800 to-slate-900 dark:from-white dark:via-violet-200 dark:to-white bg-clip-text text-transparent leading-tight">
                  {project.title}
                </h1>
                <div className="absolute -top-1 -right-1 md:-top-3 md:-right-3 w-2 h-2 md:w-4 md:h-4 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-70 animate-bounce delay-500"></div>
                <div className="absolute bottom-1 left-2 md:bottom-2 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full animate-[scale-x_1.5s_ease-out_0.5s_forwards] origin-left"></div>
              </div>

              <div className="text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium space-y-3 md:space-y-4">
                {String(project.summary)
                  .split(/\n\s*/g)
                  .filter(Boolean)
                  .map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
              </div>
            </div>

            {/* tech stack */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"></div>
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
                  Stack Tecnológico
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-violet-500/20 to-transparent"></div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-4">
                {project.stack.map((tech, index) => (
                  <span
                    key={tech}
                    className="group relative px-3 py-2 md:px-5 md:py-3 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-semibold rounded-xl md:rounded-2xl hover:border-violet-400/60 dark:hover:border-violet-500/50 hover:bg-white/95 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-violet-500/25 overflow-hidden cursor-default text-xs md:text-sm"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/8 to-violet-500/5 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{tech}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity"></div>
                  </span>
                ))}
              </div>
            </div>

            {/* description */}
            {project.description && (
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-1.5 h-6 md:h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                  <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-700 dark:from-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
                    Descripción del Proyecto
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent"></div>
                </div>

                <div className="relative group p-4 md:p-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-xl md:rounded-3xl border border-slate-200/60 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/8 to-cyan-500/5 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg space-y-3 md:space-y-4">
                    {String(project.description)
                      .split(/\n\s*/g)
                      .filter(Boolean)
                      .map((p, i) => (
                        <p key={i}>{p.trim()}</p>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Styled-JSX: NO pisar utilidades de Tailwind */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 2s infinite;
        }
        /* ⛔️ Eliminadas las reglas que sobrescribían .transform y .transition-all de Tailwind */
      `}</style>
    </div>
  );
}
