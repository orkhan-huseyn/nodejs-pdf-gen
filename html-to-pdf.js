const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });

  const page = await browser.newPage();
  const buffer = await fs.readFile(path.resolve('templates', 'example.html'));

  await page.setContent(buffer.toString('utf-8'), {
    waitUntil: 'networkidle0',
  });

  await page.emulateMediaType('screen');

  await page.pdf({
    path: 'output/result.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });

  await browser.close();
})();
