import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:3000";
const pages = [
  ["home", "/"],
  ["programs", "/programs"],
  ["campus", "/campus"],
  ["faculty", "/faculty"],
  ["short-courses", "/short-courses"],
  ["events", "/events"],
  ["contact", "/contact"],
];
const widths = [320, 375, 768, 1440];
const shotWidths = new Set([375, 1440]);

const outDir = "scripts/shots";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
let problems = 0;

for (const [name, path] of pages) {
  for (const w of widths) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: 900 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce", // force scroll-reveal content visible for shots
    });
    const page = await ctx.newPage();
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    // reveal-on-scroll: scroll to bottom then back so content is visible
    await page.evaluate(async () => {
      await new Promise((r) => {
        let y = 0;
        const t = setInterval(() => {
          window.scrollTo(0, y);
          y += 600;
          if (y > document.body.scrollHeight) {
            clearInterval(t);
            window.scrollTo(0, 0);
            r();
          }
        }, 30);
      });
    });
    await page.waitForTimeout(250);

    const { scrollW, innerW } = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      innerW: window.innerWidth,
    }));
    const overflow = scrollW - innerW;
    const flag = overflow > 1 ? `  ⚠️ OVERFLOW +${overflow}px` : "  ok";
    if (overflow > 1) problems++;
    console.log(`${name.padEnd(15)} ${String(w).padStart(4)}px  scrollW=${scrollW}${flag}`);

    if (shotWidths.has(w)) {
      await page.screenshot({
        path: `${outDir}/${name}-${w}.png`,
        fullPage: true,
      });
    }
    await ctx.close();
  }
}

await browser.close();
console.log(problems === 0 ? "\n✅ No horizontal overflow at any width." : `\n❌ ${problems} overflow issue(s).`);
