export const prerender = true;
export function GET({ site }: { site?: URL }) {
  const base = site ?? new URL('https://example.com');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', base)}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
