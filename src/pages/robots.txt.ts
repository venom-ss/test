export const prerender = true;
export function GET({ site }: { site?: URL }) {
  const origin = site ?? new URL('https://venom-ss.github.io');
  return new Response(`User-agent: *\nAllow: /test/\nSitemap: ${new URL('/test/sitemap.xml', origin)}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
