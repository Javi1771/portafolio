// components/ToasterProvider.jsx
"use client";

import { useState, useEffect } from "react";
import { Toaster } from "sileo";

export default function ToasterProvider() {
  const [position, setPosition] = useState("top-right");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const update = (e) => setPosition(e.matches ? "top-right" : "top-center");
    update(mediaQuery);

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <Toaster
      position={position}
      options={{
        duration: 4000,
      }}
    />
  );
}
