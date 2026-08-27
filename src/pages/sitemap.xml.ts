export const prerender = true;
const paths = ['/test/', '/test/about','/test/privacy','/test/disclaimer','/test/services','/test/reference/bsp-thread','/test/guides/hose-sizing','/test/guides/pump-identification','/test/calculators/cylinder-force','/test/calculators/pump-flow','/test/calculators/motor-rpm','/test/calculators/hydraulic-power','/test/calculators/motor-torque','/test/calculators/hose-velocity','/test/calculators/cylinder-speed','/test/calculators/pressure-converter','/test/calculators/flow-converter'];
export function GET({ site }: { site?: URL }) {
  const origin = site ?? new URL('https://venom-ss.github.io');
  const urls = paths.map(p => `<url><loc>${new URL(p, origin)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
