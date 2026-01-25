/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    // Gradientes (from/via/to) que usamos seguido
    { pattern: /(from|via|to)-(violet|purple|cyan|blue|emerald|green|rose|pink)-(100|200|300|400|500|600|700)/ },
    // Variantes de color comunes en el sitio
    { pattern: /(bg|text|border|ring)-(violet|purple|cyan|blue|emerald|green|rose|pink)-(100|200|300|400|500|600|700)/ },
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7c3aed',
          secondary: '#06b6d4',
          accent: '#22c55e',
        },
      },
      boxShadow: { 
        glow: '0 10px 30px rgba(124, 58, 237, .25)',
        // NUEVO: Sombra más ligera para móvil
        'glow-sm': '0 5px 15px rgba(124, 58, 237, .15)',
      },
      borderRadius: { xl2: '1.25rem' },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'scale-x': { 
          '0%': { transform: 'scaleX(0)' }, 
          '100%': { transform: 'scaleX(1)' } 
        },
        'fade-in': { 
          from: { opacity: '0', transform: 'translateY(20px)' }, 
          to: { opacity: '1', transform: 'translateY(0)' } 
        },
        float: { 
          '0%, 100%': { transform: 'translateY(0)' }, 
          '50%': { transform: 'translateY(-6px)' } 
        },
        // NUEVO: Pulse más suave y lento para móvil
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
        },
        // NUEVO: Fade-in más rápido para móvil
        'fade-in-fast': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'scale-x': 'scale-x 2s ease-out 1s forwards',
        'fade-in': 'fade-in .6s ease-out both',
        float: 'float 4s ease-in-out infinite',
        // NUEVAS: Animaciones optimizadas para móvil
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-fast': 'fade-in-fast .3s ease-out both',
      },
      backgroundSize: { '300%': '300% 300%' },
      // NUEVO: Blur más ligero para móvil
      blur: {
        'xs': '2px',
        'sm': '4px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};