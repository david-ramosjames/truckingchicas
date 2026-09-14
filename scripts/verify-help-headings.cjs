// Run against a built preview or production: node scripts/verify-help-headings.cjs <origin>
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const path = require('node:path');
function load(file) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function('exports', 'require', code)(exports, require);
  return exports;
}
const { ROUTES } = load('src/lib/constants.ts');
const esModule = load('src/dictionaries/es.ts');
const dict = esModule.default || esModule.es;
const origin = process.argv[2] || 'http://localhost:3004';
async function page(route) {
  const response = await fetch(origin + route, { redirect: 'manual' });
  assert.equal(response.status, 200, route);
  return response.text();
}
(async () => {
  for (const locale of ['en', 'es']) {
    for (const key of ['faq', 'caseEstimate']) {
      const route = ROUTES[locale][key];
      assert(route, key);
      const html = await page(route);
      const headings = [...html.matchAll(/<h([1-6])\b/g)].map(match => Number(match[1]));
      assert.equal(headings[0], 1, route);
      for (let i = 1; i < headings.length; i++) {
        assert(headings[i] <= headings[i - 1] + 1, route + ': heading level skipped');
      }
      if (key === 'faq') {
        assert.match(html, /<h2><button[^>]+aria-expanded="false"/, route);
        assert(!/<button[^>]*>\s*<h[1-6]/.test(html), route + ': heading inside button');
      }
    }
  }
  for (const question of dict.helpHub.questions) {
    const html = await page(ROUTES.es[question.slug]);
    for (const paragraph of question.fullContent.split('\n\n')) {
      assert(html.includes(paragraph), question.slug + ': missing article paragraph');
    }
    assert(html.includes(question.summary), question.slug + ': missing summary');
  }
  console.log('PASS: heading hierarchy on four FAQ/estimate pages; all Spanish article paragraphs and summaries rendered.');
})().catch(error => { console.error(error); process.exitCode = 1; });
