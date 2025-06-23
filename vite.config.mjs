import { dirname, resolve, extname } from 'node:path';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import autoprefixer from 'autoprefixer';
import { compression } from 'vite-plugin-compression2';

const __dirname = dirname(fileURLToPath(import.meta.url));

// assume all .html files inside src as entrypoints
const files = readdirSync(resolve(__dirname, 'src/'));
let inputs = {};
for (let file of files) {
  if (extname(file).toLowerCase() === '.html') {
    inputs[file] = resolve(__dirname, 'src/', file);
  }
}

export default defineConfig({
  publicDir: '../public',
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari13'],
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: inputs,
    },
  },
  plugins: [
    handlebars({
      context: {},
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
    compression(),
    compression({ algorithm: 'brotliCompress' }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
