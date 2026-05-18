/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta minimalista clara — SaaS B2B serio (Stripe/Mercury)
        ink: '#0A0A0B',        // texto principal casi negro
        graphite: '#52525B',   // texto secundario
        line: '#E4E4E7',       // bordes finos
        haze: '#FAFAFA',       // fondo de secciones alternas
        accent: '#1D4ED8',     // azul sobrio (no eléctrico chillón)
        accentSoft: '#EFF4FF', // fondo de acento muy tenue
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
