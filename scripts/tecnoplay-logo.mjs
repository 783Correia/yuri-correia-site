import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('https://tecnoplay.app.br/', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 3000));

// Get all elements that might be a logo
const svgOrText = await page.evaluate(() => {
  const els = document.querySelectorAll('svg, [class*="logo"], [id*="logo"], header *');
  return Array.from(els).slice(0, 5).map(e => e.tagName + ' ' + (e.className || ''));
});
console.log('Elements:', svgOrText);

// Just crop the top-left corner as logo
await page.screenshot({
  path: 'public/logos/tecnoplay.png',
  clip: { x: 20, y: 15, width: 200, height: 55 },
});
console.log('✓ tecnoplay (cropped)');
await browser.close();
