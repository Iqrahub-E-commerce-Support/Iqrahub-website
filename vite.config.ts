import react from '@vitejs/plugin-react-swc'; // Switch to '@vitejs/plugin-react' if needed
import { defineConfig } from 'vite';
import * as path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest,
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      devOptions: {
        enabled: true,
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg}'], // Limit patterns
        cleanupOutdatedCaches:true,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        globIgnores: ['**/About-Us-DDAOD_3D.jpg', '**/Image Skeleton-BEKqKSLe.png'], // Exclude large assets
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    sourcemap: true, // Enable sourcemaps for debugging
    minify: 'esbuild', // Ensure using esbuild for minification
  },
});
