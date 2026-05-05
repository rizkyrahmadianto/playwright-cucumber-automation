const {
  Before,
  After
} = require('@cucumber/cucumber');

const {
  chromium
} = require('playwright');

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });

  this.context = await this.browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: {
      width: 1280,
      height: 720
    }
  });

  this.page = await this.context.newPage();
});

After(async function () {
  await this.browser.close();
});