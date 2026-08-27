export const prerender = true;
const paths = ['/', '/about','/privacy','/disclaimer','/services','/reference/bsp-thread','/guides/hose-sizing','/guides/pump-identification','/calculators/cylinder-force','/calculators/pump-flow','/calculators/motor-rpm','/calculators/hydraulic-power','/calculators/motor-torque','/calculators/hose-velocity','/calculators/cylinder-speed','/calculators/pressure-converter','/calculators/flow-converter'];
export function GET({ site }: { site?: URL }) {
  const base = site ?? new URL('https://example.com');
  const urls = paths.map(p => `<url><loc>${new URL(p, base)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
