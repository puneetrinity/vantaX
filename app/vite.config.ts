import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // Only apply manual chunks to client build (SSR externalizes these)
      output: !isSsrBuild ? {
        manualChunks: {
          'vendor-motion': ['framer-motion'],
          'vendor-router': ['react-router-dom', 'react', 'react-dom'],
        },
      } : undefined,
    },
  },
  ssr: {
    noExternal: ['react-helmet-async', 'framer-motion', 'lucide-react'],
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
}));
