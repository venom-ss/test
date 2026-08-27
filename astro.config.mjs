import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://venom-ss.github.io',
  base: '/test',
  output: 'static',
  trailingSlash: 'never'
});
