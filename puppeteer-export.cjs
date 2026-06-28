/**
 * puppeteer-export.cjs
 * Script untuk mengekspor seluruh halaman portofolio React menjadi PDF
 *
 * Cara pakai: node puppeteer-export.cjs
 */

const puppeteer = require("puppeteer");
const { PDFDocument } = require("pdf-lib");
const fs = require("fs");

// ============================================================
//  KONFIGURASI — sesuaikan sebelum menjalankan
// ============================================================
const CONFIG = {
  baseUrl: "http://localhost:5173", // Ganti jika port berbeda (cek terminal dev server)

  // Daftar route/halaman yang ingin diekspor
  routes: ["/home", "/about", "/projects", "/certificates"],

  outputFile: "portfolio-umar-tilmisani.pdf",

  viewport: { width: 1440, height: 900 },

  pdf: {
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  },

  waitAfterLoad: 1500,
};
// ============================================================

async function exportPortfolioPDF() {
  console.log("🚀 Memulai export PDF portofolio...\n");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport(CONFIG.viewport);

  const mergedPdf = await PDFDocument.create();

  for (const route of CONFIG.routes) {
    const url = `${CONFIG.baseUrl}${route}`;
    console.log(`📄 Mengekspor halaman: ${url}`);

    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      await sleep(CONFIG.waitAfterLoad);
      await autoScroll(page);
      await sleep(500);

      const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

      await page.setViewport({ width: CONFIG.viewport.width, height: bodyHeight });
      await sleep(300);

      const pdfBuffer = await page.pdf({
        ...CONFIG.pdf,
        height: `${bodyHeight}px`,
        width: `${CONFIG.viewport.width}px`,
      });

      const srcDoc = await PDFDocument.load(pdfBuffer);
      const copiedPages = await mergedPdf.copyPages(srcDoc, srcDoc.getPageIndices());
      copiedPages.forEach((p) => mergedPdf.addPage(p));

      console.log(`   ✅ Selesai: ${route}`);

      await page.setViewport(CONFIG.viewport);
    } catch (err) {
      console.error(`   ❌ Gagal mengekspor ${route}:`, err.message);
    }
  }

  await browser.close();

  const pdfBytes = await mergedPdf.save();
  fs.writeFileSync(CONFIG.outputFile, pdfBytes);

  console.log(`\n✨ PDF berhasil disimpan: ${CONFIG.outputFile}`);
  console.log(`   Total halaman: ${mergedPdf.getPageCount()}`);
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

exportPortfolioPDF().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});
