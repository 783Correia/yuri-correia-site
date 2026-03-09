import puppeteer from 'puppeteer';

const sites = [
  { name: 'torno-metal', url: 'https://tornometalevertonlopes.com.br/' },
  { name: 'jaco-locadora', url: 'https://www.jacolocadora.com.br/' },
  { name: 'jaco-maquinario', url: 'https://www.jacolocadora.com.br/maquinario' },
  { name: 'jaco-plataformas', url: 'https://www.jacolocadora.com.br/plataformaselevatorias' },
  { name: 'agilizza', url: 'https://agilizzasolucoes.com.br/' },
  { name: 'tecnoplay', url: 'https://tecnoplay.app.br/' },
  { name: 'sales-emb', url: 'https://salesemb.com.br/' },
];

const browser = await puppeteer.launch({ headless: true });

for (const site of sites) {
  console.log(`Capturing ${site.name}...`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  try {
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({
      path: `public/projects/${site.name}.png`,
      type: 'png',
    });
    console.log(`✓ ${site.name}`);
  } catch (e) {
    console.log(`✗ ${site.name}: ${e.message}`);
  }
  await page.close();
}

await browser.close();
console.log('Done!');
