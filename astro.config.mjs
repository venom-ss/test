import { defineConfig } from 'astro/config';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const pagesBase = process.env.GITHUB_ACTIONS === 'true' && repoName ? `/${repoName}` : '/';

export default defineConfig({
  site: 'https://venom-ss.github.io',
  base: pagesBase,
  output: 'static',
  trailingSlash: 'never'
});
