import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  site: 'https://jrojat.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});