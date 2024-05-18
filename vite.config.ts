import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const baseUrl = process.env.VITE_BASE_URL;

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  define: {
    BASE_URL: JSON.stringify(baseUrl),
    __PORT__: 3000,
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name].[hash][extname]';
          }
          if (/\.(mp4|mkv|m3u8|ts|mov|flv)$/.test(name ?? '')) {
            return 'assets/video/[name].[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'style/[name].[hash][extname]';
          }

          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
});
