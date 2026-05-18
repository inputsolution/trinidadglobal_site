/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta azul corporativo (referencia Uzbek-Oman)
        ink: '#0F1B2D',        // azul marino casi negro (texto/titulares)
        navy: '#13294B',       // azul marino (botones, acentos)
        navy2: '#1E3A6E',
        graphite: '#5B6577',   // texto secundario
        line: '#E5E8EE',       // bordes finos
        haze: '#F4F6F8',       // fondo de secciones alternas
        accent: '#2F5BD7',     // azul vivo (links, detalles)
        accentSoft: '#EAF0FD',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,27,45,0.04), 0 10px 30px -16px rgba(15,27,45,0.16)',
        cardHover: '0 2px 6px rgba(15,27,45,0.06), 0 28px 56px -24px rgba(15,27,45,0.28)',
      },
    },
  },
  plugins: [],
};
