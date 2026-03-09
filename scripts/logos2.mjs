import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });

// Torno Metal - try harder
const page1 = await browser.newPage();
await page1.setViewport({ width: 1440, height: 900 });
await page1.goto('https://tornometalevertonlopes.com.br/', { waitUntil: 'networkidle2', timeout: 30000 });
const tornoLogo = await page1.$('img');
if (tornoLogo) {
  await tornoLogo.screenshot({ path: 'public/logos/torno-metal.png' });
  console.log('✓ torno-metal');
}
await page1.close();

// TecnoPlay - try harder
const page2 = await browser.newPage();
await page2.setViewport({ width: 1440, height: 900 });
await page2.goto('https://tecnoplay.app.br/', { waitUntil: 'networkidle2', timeout: 30000 });

const allImgs = await page2.evaluate(() => {
  return Array.from(document.querySelectorAll('img')).slice(0, 10).map(i => ({
    src: i.src,
    alt: i.alt,
    width: i.width,
    height: i.height,
  }));
});
console.log('TecnoPlay images:', JSON.stringify(allImgs, null, 2));

const tecnoLogo = await page2.$('img');
if (tecnoLogo) {
  await tecnoLogo.screenshot({ path: 'public/logos/tecnoplay.png' });
  console.log('✓ tecnoplay');
}
await page2.close();

await browser.close();
