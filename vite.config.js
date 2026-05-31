import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import magicalSvg from 'vite-plugin-magical-svg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: '/vvshop/',
  plugins: [
    react(),
    magicalSvg({
      target: 'react',
      preserveWidthHeight: true,
      setFillStrokeColor: true,
      restoreMissingViewBox: true,
    }),
  ],

  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use './src/styles/variables' as *;\n`,
  //     },
  //   },
  // },
});
