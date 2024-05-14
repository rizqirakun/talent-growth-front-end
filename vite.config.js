import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { alias } from './config/vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
      fastRefresh: process.env.VITE_NODE_ENV !== 'test'
    })
  ],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: alias
  },
  define: {
    'process.env': {}
  }
});
