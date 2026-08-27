export const prerender = true;
const routes = ['', 'about','privacy','disclaimer','services','reference/bsp-thread','guides/hose-sizing','guides/pump-identification','calculators/cylinder-force','calculators/pump-flow','calculators/motor-rpm','calculators/hydraulic-power','calculators/motor-torque','calculators/hose-velocity','calculators/cylinder-speed','calculators/pressure-converter','calculators/flow-converter'];
export function GET({ site }: { site?: URL }) {
  const origin = site ?? new URL('https://venom-ss.github.io');
  const base = import.meta.env.BASE_URL;
  const urls = routes.map(route => `<url><loc>${new URL(`${base}${route}`, origin)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
