import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Для GitHub Pages в проектном репо установи VITE_BASE="/reading-service-mvp/"
  base: process.env.VITE_BASE || '/',
});
