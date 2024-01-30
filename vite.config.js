import { defineConfig } from 'vite';
import mdPlugin from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [mdPlugin({ mode: 'markdown' })],
  resolve: {
    alias: {
      components: '/src/components',
      articles: '/src/articles',
    },
  },
  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
});
