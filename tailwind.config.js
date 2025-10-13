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
      boxShadow: { glow: '0 10px 30px rgba(124, 58, 237, .25)' },
      borderRadius: { xl2: '1.25rem' },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'scale-x': { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
        'fade-in': { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'scale-x': 'scale-x 2s ease-out 1s forwards',
        'fade-in': 'fade-in .6s ease-out both',
        float: 'float 4s ease-in-out infinite',
      },
      backgroundSize: { '300%': '300% 300%' },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
};
