const {
  Given,
  Then
} = require('@cucumber/cucumber');

const assert = require('assert');

Given('user membuka browser ke {string}', async function (url) {
  await this.page.goto(url);
});

Then('user dapat melihat halaman Google terbuka', async function () {
  const title = await this.page.title();
  console.log(`✅ Judul halaman: ${title}`);
  assert.ok(title.length > 0, 'Halaman tidak memiliki judul');
});