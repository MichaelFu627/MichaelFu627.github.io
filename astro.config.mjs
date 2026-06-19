import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// IMPORTANT: change `site` to your real URL.
// GitHub Pages (user site): https://MichaelFu627.github.io
// Netlify:                  https://your-name.netlify.app
export default defineConfig({
  site: 'https://MichaelFu627.github.io',
  base: '/',
  integrations: [tailwind(), mdx()],
});
