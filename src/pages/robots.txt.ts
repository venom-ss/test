export const prerender = true;
export function GET({ site }: { site?: URL }) {
  const origin = site ?? new URL('https://venom-ss.github.io');
  const base = import.meta.env.BASE_URL;
  return new Response(`User-agent: *\nAllow: ${base}\nSitemap: ${new URL(`${base}sitemap.xml`, origin)}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
