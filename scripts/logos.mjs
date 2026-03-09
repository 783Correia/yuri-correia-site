import puppeteer from 'puppeteer';

const sites = [
  { name: 'torno-metal', url: 'https://tornometalevertonlopes.com.br/' },
  { name: 'sales-emb', url: 'https://salesemb.com.br/' },
  { name: 'jaco-locadora', url: 'https://www.jacolocadora.com.br/' },
  { name: 'agilizza', url: 'https://agilizzasolucoes.com.br/' },
  { name: 'tecnoplay', url: 'https://tecnoplay.app.br/' },
];

const browser = await puppeteer.launch({ headless: true });

for (const site of sites) {
  console.log(`Getting logo for ${site.name}...`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  try {
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Try to find logo image
    const logoUrl = await page.evaluate(() => {
      // Try common logo selectors
      const selectors = [
        'header img[src*="logo"]',
        'header img',
        'nav img[src*="logo"]',
        'nav img',
        '.logo img',
        'img[alt*="logo"]',
        'img[class*="logo"]',
        'a[class*="logo"] img',
        'img[src*="logo"]',
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel);
        if (el && el.src) return el.src;
      }
      // Fallback: first img in header area
      const firstImg = document.querySelector('header img, nav img');
      if (firstImg) return firstImg.src;
      return null;
    });

    if (logoUrl) {
      console.log(`  Found logo: ${logoUrl}`);
      // Screenshot just the logo area - crop the header
      const logoEl = await page.$('header img, nav img, img[src*="logo"], .logo img');
      if (logoEl) {
        await logoEl.screenshot({ path: `public/logos/${site.name}.png` });
        console.log(`  ✓ Saved ${site.name}.png`);
      }
    } else {
      console.log(`  No logo found, taking header crop`);
      await page.screenshot({
        path: `public/logos/${site.name}.png`,
        clip: { x: 0, y: 0, width: 300, height: 80 },
      });
    }
  } catch (e) {
    console.log(`  ✗ ${site.name}: ${e.message}`);
  }
  await page.close();
}

await browser.close();
console.log('Done!');
