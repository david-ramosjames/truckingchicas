// Run against a production build: node scripts/verify-language-routes.cjs http://localhost:3000
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
function load(file, imports = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function('exports', 'require', code)(exports, name => imports[name] || require(name));
  return exports;
}
const constants = load('src/lib/constants.ts');
const { ROUTES, CITY_ROUTE_KEYS } = constants;
const { getAlternateUrl, getLocaleFromPath } = load('src/lib/i18n.ts', { './constants': constants });
const origin = process.argv[2] || 'http://localhost:3000';
async function checkPage(url) {
  const response = await fetch(origin + url, { redirect: 'manual' });
  assert.equal(response.status, 200, url);
  return response.text();
}
async function checkRedirect(source, destination) {
  const response = await fetch(origin + source, { redirect: 'manual' });
  assert.equal(response.status, 301, source);
  assert.equal(new URL(response.headers.get('location'), origin).pathname, destination, source);
}
(async () => {
  for (const key of Object.keys(ROUTES.en)) {
    for (const locale of ['en', 'es']) {
      const other = locale === 'en' ? 'es' : 'en';
      const url = ROUTES[locale][key];
      const destination = ROUTES[other][key];
      assert.equal(getAlternateUrl(url, other), destination);
      assert.equal(getAlternateUrl(url, locale), url);
      const html = await checkPage(url);
      const label = other === 'en' ? 'English' : 'Español';
      const links = html.match(/<a\b[^>]*>/g) || [];
      assert(links.some(tag => tag.includes(`aria-label="${label}"`) && tag.includes(`href="${destination}"`)), url + ' switcher');
      assert.equal((html.match(/<h1\b/g) || []).length, 1, url + ' H1 count');
      if (CITY_ROUTE_KEYS.includes(key)) {
        for (const language of ['en', 'es']) {
          assert(html.includes(`hrefLang="${language}" href="https://truckingchicas.com${ROUTES[language][key]}"`), url + ' hreflang ' + language);
        }
      }
    }
    if (key !== 'home') {
      await checkRedirect('/es' + ROUTES.en[key], ROUTES.es[key]);
      await checkRedirect(ROUTES.es[key].replace(/^\/es/, ''), ROUTES.en[key]);
    }
  }
  for (const slug of ['privacy-policy', 'terms-of-use']) {
    await checkRedirect('/es/' + slug, '/' + slug);
    await checkPage('/' + slug);
    assert.equal(getAlternateUrl('/' + slug, 'es'), '/es');
  }
  assert.equal(getAlternateUrl('/truck-accident-lawyer-waco/', 'es'), ROUTES.es.waco);
  assert.equal(getAlternateUrl('/not-a-page', 'es'), '/es');
  assert.equal(getLocaleFromPath('/estimate'), 'en');
  console.log(`PASS: ${Object.keys(ROUTES.en).length * 2} bilingual pages, switchers and single H1s; all 16 city hreflang pairs; generated 301s and legal fallbacks.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
