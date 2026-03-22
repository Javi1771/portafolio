// components/HobbyCard.jsx
"use client";

import { memo } from "react";

const HobbyCard = memo(({ hobby }) => {
  const IconComponent = hobby.icon;
  return (
    <div className="group relative overflow-hidden p-6 rounded-xl bg-white/70 dark:bg-gray-800/70 border border-gray-200/60 dark:border-gray-700/60 shadow hover:shadow-lg hover:scale-105 transition-all duration-300">
      {/* Gradiente animado de fondo */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Burbujas decorativas con estilos inline optimizados */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl transform translate-x-8 -translate-y-8"
        style={{
          backgroundColor: hobby.bubbleColor1,
          opacity: 0.3
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-20 h-20 rounded-full blur-xl transform -translate-x-6 translate-y-6"
        style={{
          backgroundColor: hobby.bubbleColor2,
          opacity: 0.3
        }}
      />

      <div className="relative z-10">
        <div className="mb-4">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-xl${hobby.iconDarkClass ? " dark:!bg-white/10 dark:!border-white/25" : ""}`}
            style={{
              backgroundColor: `${hobby.bubbleColor1}28`,
              border: `1.5px solid ${hobby.bubbleColor1}90`,
              boxShadow: `0 0 10px ${hobby.bubbleColor1}45, 0 0 3px ${hobby.bubbleColor1}30`,
            }}
          >
            <span className={hobby.iconDarkClass || ""}>
              <IconComponent
                size={26}
                strokeWidth={2}
                color={hobby.bubbleColor1}
              />
            </span>
          </div>
        </div>
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          {hobby.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {hobby.desc}
        </p>
      </div>
    </div>
  );
});

HobbyCard.displayName = 'HobbyCard';

export default HobbyCard;