"use client";
import { useEffect } from "react";

export default function Lightbox({
  open,
  onClose,
  srcs = [],
  index = 0,
  setIndex,
}) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex?.((i) => (i + 1) % srcs.length);
      if (e.key === "ArrowLeft")
        setIndex?.((i) => (i - 1 + srcs.length) % srcs.length);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, srcs.length, onClose, setIndex]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={srcs[index]}
          alt=""
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white"
        >
          Cerrar ✕
        </button>
        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={() =>
              setIndex?.((i) => (i - 1 + srcs.length) % srcs.length)
            }
            className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10"
          >
            ← Anterior
          </button>
          <div className="flex gap-2 overflow-x-auto">
            {srcs.map((s, i) => (
              <button key={s + i} onClick={() => setIndex?.(i)}>
                <img
                  src={s}
                  className={`h-14 w-24 object-cover rounded-lg border ${
                    i === index ? "border-white" : "border-white/20"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => setIndex?.((i) => (i + 1) % srcs.length)}
            className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}
