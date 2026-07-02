/**
 * Post-build prerender for / and /consulting — improves crawlability and AI extraction.
 * Uses bundled Chromium locally and @sparticuz/chromium on Linux (Vercel/GitHub Actions).
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const port = 4173;
const baseUrl = `http://127.0.0.1:${port}`;
const routes = [
  { path: "/", outFile: "index.html" },
  { path: "/consulting", outFile: path.join("consulting", "index.html") },
];

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const proc = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort"], {
      cwd: root,
      stdio: "pipe",
      env: { ...process.env, NODE_ENV: "production" },
    });

    let ready = false;
    const onData = (chunk) => {
      const text = chunk.toString();
      if (!ready && text.includes("Local:")) {
        ready = true;
        resolve(proc);
      }
    };

    proc.stdout.on("data", onData);
    proc.stderr.on("data", onData);
    proc.on("error", reject);

    setTimeout(() => {
      if (!ready) {
        ready = true;
        resolve(proc);
      }
    }, 8000);
  });
}

function useLinuxChromium() {
  return process.platform === "linux";
}

function isStrictPrerenderEnvironment() {
  return useLinuxChromium() || process.env.VERCEL === "1";
}

async function launchBrowser() {
  const sandboxArgs = ["--no-sandbox", "--disable-setuid-sandbox"];

  if (useLinuxChromium()) {
    const chromium = await import("@sparticuz/chromium");
    const puppeteerCore = await import("puppeteer-core");

    chromium.default.setGraphicsMode = false;

    return puppeteerCore.default.launch({
      args: await puppeteerCore.default.defaultArgs({
        args: [...chromium.default.args, ...sandboxArgs],
        headless: "shell",
      }),
      executablePath: await chromium.default.executablePath(),
      headless: "shell",
    });
  }

  const puppeteer = await import("puppeteer");
  return puppeteer.default.launch({
    headless: true,
    args: sandboxArgs,
  });
}

async function prerenderRoute(browser, routePath, outFile) {
  const page = await browser.newPage();
  await page.goto(`${baseUrl}${routePath}`, { waitUntil: "networkidle0", timeout: 60000 });
  await wait(500);
  const html = await page.content();
  await page.close();

  const outPath = path.join(distDir, outFile);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
  console.log(`Prerendered ${routePath} -> ${outFile}`);
}

async function main() {
  if (!fs.existsSync(distDir)) {
    console.error("dist/ not found. Run vite build first.");
    process.exit(1);
  }

  const preview = await startPreview();
  await wait(1500);

  let browser;
  try {
    browser = await launchBrowser();
    for (const route of routes) {
      await prerenderRoute(browser, route.path, route.outFile);
    }
    console.log("Prerender complete.");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (isStrictPrerenderEnvironment()) {
      console.error("Prerender failed on serverless environment:", message);
      process.exit(1);
    }
    console.warn(
      "Prerender skipped — deployment will continue with the Vite SPA build.",
      message,
    );
  } finally {
    if (browser) {
      await browser.close();
    }
    preview.kill("SIGTERM");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
