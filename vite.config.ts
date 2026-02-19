import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Ensure manifest and sw are not moved/hashed into assets/ if possible
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'manifest.json') return 'manifest.json';
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  publicDir: false, // We are using the root as the source
  server: {
    port: 3000,
    host: true
  }
});