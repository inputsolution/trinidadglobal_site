import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    // Railway asigna el puerto vía $PORT; permitir el host del dominio.
    allowedHosts: true,
  },
});
