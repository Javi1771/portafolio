// components/AntiTranslate.jsx
"use client";

import { useEffect } from "react";

export default function AntiTranslate() {
  useEffect(() => {
    const clean = () => {
      const html = document.documentElement;
      //! Si Chrome añadió clases de traducción, quítalas
      if (html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")) {
        html.classList.remove("translated-ltr", "translated-rtl");
      }
      //! Des-envolver <font> que rompe estilos (Chrome Translate los inserta)
      document.querySelectorAll("font").forEach((el) => {
        const parent = el.parentNode;
        if (!parent) return;
        while (el.firstChild) parent.insertBefore(el.firstChild, el);
        parent.removeChild(el);
      });
    };

    clean();
    const mo = new MutationObserver(clean);
    mo.observe(document.documentElement, { attributes: true, childList: true, subtree: true });

    return () => mo.disconnect();
  }, []);

  return null;
}
