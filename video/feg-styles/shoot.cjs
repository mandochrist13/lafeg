// Photographie chaque aperçu de style (page HTML 1920 × 1080) en JPEG net (échelle 2).
// Les pages sont servies par un petit serveur local (les modules JavaScript ne se chargent pas en file://).
// Usage : node shoot.cjs s1 s2 …   (sans argument : tous les fichiers s*.html)
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const http = require("http");
const { execFileSync } = require("child_process");

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2" };

(async () => {
  const dir = __dirname;
  const server = http.createServer((req, res) => {
    const p = path.normalize(path.join(dir, decodeURIComponent(req.url.split("?")[0])));
    if (!p.startsWith(dir) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) {
      res.writeHead(404);
      return res.end();
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(p)] || "application/octet-stream" });
    fs.createReadStream(p).pipe(res);
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const base = `http://127.0.0.1:${server.address().port}/`;

  let ids = process.argv.slice(2);
  if (!ids.length) ids = fs.readdirSync(dir).filter((f) => /^s\d.*\.html$/.test(f)).map((f) => f.replace(/\.html$/, ""));
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
  for (const id of ids) {
    const file = fs.readdirSync(dir).find((f) => f.startsWith(id) && f.endsWith(".html"));
    if (!file) continue;
    const page = await ctx.newPage();
    page.on("console", (m) => {
      if (m.type() === "error") console.log(`[${id}] console:`, m.text());
    });
    page.on("pageerror", (e) => console.log(`[${id}] erreur:`, e.message));
    const t0 = Date.now();
    await page.goto(base + file);
    await page.waitForFunction(() => window.__ready === true, null, { timeout: 240000, polling: 500 });
    const png = path.join(dir, "apercus", file.replace(/\.html$/, ".png"));
    const fullPage = await page.evaluate(() => !!window.__fullPage);
    await page.screenshot({ path: png, timeout: 240000, fullPage });
    const jpg = png.replace(/\.png$/, ".jpg");
    execFileSync("python3", ["-c", `from PIL import Image; Image.open(${JSON.stringify(png)}).convert("RGB").save(${JSON.stringify(jpg)}, quality=90)`]);
    fs.unlinkSync(png);
    console.log("ok", path.basename(jpg), `${((Date.now() - t0) / 1000).toFixed(1)} s`);
    await page.close();
  }
  await browser.close();
  server.close();
})();
