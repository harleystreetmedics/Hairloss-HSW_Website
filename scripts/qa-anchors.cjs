/* eslint-disable @typescript-eslint/no-require-imports */
// Browser QA for the in-page menu: every menu item scrolls to its section on the home page.
// Needs playwright-core and Chrome; serve ./out first (npx serve out -l 4183), BASE_URL to override.
const { chromium } = require('playwright-core');
const B = process.env.BASE_URL || 'http://127.0.0.1:4183';
const ok = (c, m) => console.log((c ? 'PASS ' : 'FAIL ') + m);
(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  const ctx = await b.newContext({ viewport: { width: 1600, height: 900 } });
  await ctx.addInitScript(() => localStorage.setItem('hsw-cookie-consent', JSON.stringify({ analytics: false, marketing: false, ts: 'qa', v: 1 })));
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(String(e).slice(0, 200)));
  await p.goto(B + '/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);

  const labels = ['Conditions', 'Treatments', 'Diagnosis', 'Treatment finder', 'Results', 'Pricing', 'FAQ', 'Clinics'];
  for (const label of labels) {
    const link = p.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: label, exact: true });
    const href = await link.getAttribute('href');
    await link.click();
    await p.waitForTimeout(900);
    const url = p.url();
    const id = href.split('#')[1];
    const box = await p.locator(`#${id}`).boundingBox();
    const samePage = url.endsWith('/#' + id);
    const inView = box && box.y > -20 && box.y < 200;
    ok(samePage && inView, `${label} -> #${id}: stays on home (${samePage}), section at top (y=${box ? Math.round(box.y) : 'n/a'})`);
  }

  // the quiz works in its new home-page section
  await p.goto(B + '/#treatment-finder', { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.locator('#treatment-finder').getByRole('button', { name: 'Man', exact: true }).click();
  await p.waitForTimeout(400);
  ok((await p.locator('#treatment-finder').innerText()).includes('What have you noticed most?'), 'home-page quiz advances');

  // menu from another page comes back to the home section
  await p.goto(B + '/london/', { waitUntil: 'networkidle' });
  await p.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Pricing', exact: true }).click();
  await p.waitForTimeout(3000);
  const box = await p.locator('#pricing').boundingBox();
  ok(p.url().endsWith('/#pricing') && box && box.y < 200, `from /london/ -> home #pricing (y=${box ? Math.round(box.y) : 'n/a'})`);

  // the full pages are still reachable
  await p.goto(B + '/conditions/', { waitUntil: 'networkidle' });
  ok((await p.locator('h1').innerText()).includes('Types of hair loss'), 'full conditions page still works');
  ok(errs.length === 0, 'no page errors' + (errs.length ? ': ' + errs[0] : ''));
  await b.close();
})();
