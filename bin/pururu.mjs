#!/usr/bin/env node
// Serves pururu from the installed package.
// `npx pururu` → http://127.0.0.1:8099
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const production = process.argv.includes("--dist");
const root = production ? path.join(packageRoot, "dist") : packageRoot;
if (production && !fs.existsSync(path.join(root, "index.html"))) {
  console.error("dist/ ainda nao existe. Rode npm run build antes de npm run preview.");
  process.exit(1);
}

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

// Locally defaults to 127.0.0.1:8099. On a PaaS, PORT and HOST are injected
// by the platform (Square Cloud sets them to 80 and 0.0.0.0), so the same file
// doubles as the Node.js entrypoint if you ever need it.
const port = process.env.PORT ? Number(process.env.PORT) : 8099;
const host = process.env.HOST || "127.0.0.1";
const open = process.argv.includes("--open") && host === "127.0.0.1";

const dataDir = path.join(packageRoot, ".pururu");
let companionApi;
async function getCompanionApi() {
  companionApi ??= import("./companion/api.mjs")
    .then(({ createCompanionApi }) => createCompanionApi({ dataDir }))
    .catch(error => { companionApi = null; throw error; });
  return companionApi;
}

const server = http.createServer(async (req, res) => {
  let pathname, url;
  try {
    url = new URL(req.url, "http://localhost");
    pathname = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400).end("bad request");
    return;
  }
  if (pathname.startsWith("/api/pururu/")) {
    try { await (await getCompanionApi())(req, res, url); }
    catch (error) {
      console.error("Serviço de conversa indisponível:", error);
      res.writeHead(503, { "Content-Type": "application/json; charset=utf-8" })
        .end(JSON.stringify({ error: "O chat local precisa de Node.js 22.13 ou mais recente." }));
    }
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { allow: "GET, HEAD" }).end("method not allowed");
    return;
  }
  if (pathname === "/") pathname = "/index.html";

  // Configuration, hidden files and production source maps are not web assets.
  const segments = pathname.split(/[\\/]/);
  if (segments[1] === "bin" || segments.some((part) => part.startsWith(".")) ||
      segments.some((part) => /^squarecloud\.(?:app|config|ignore)$/.test(part)) ||
      (production && pathname.endsWith(".map"))) {
    res.writeHead(404).end("not found");
    return;
  }

  const file = path.join(root, pathname);
  // never serve anything outside the package directory
  if (!file.startsWith(root + path.sep) && file !== path.join(root, "index.html")) {
    res.writeHead(403).end("forbidden");
    return;
  }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    const notFound = path.join(root, "404.html");
    if (req.method === "HEAD") return res.end();
    if (fs.existsSync(notFound)) return fs.createReadStream(notFound).pipe(res);
    return res.end("404 — não encontrado");
  }

  res.writeHead(200, {
    "content-type": TYPES[path.extname(file)] || "application/octet-stream",
    "cache-control": production && /^\/(?:assets)\/(?:app|styles)-[a-f0-9]{12}\.(?:js|css)$/.test(pathname)
      ? "public, max-age=31536000, immutable"
      : "no-cache",
  });
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(file).pipe(res);
});

server.listen(port, host, () => {
  const url = `http://${host}:${server.address().port}`;
  console.log(`\n  ぷるる — a tua bolhinha de geleia`);
  console.log(`  ${url}\n`);
  if (production) console.log("  Preview de producao: servindo somente dist/.\n");
  console.log(`  Ctrl+C para parar.\n`);

  if (open) {
    const cmd = process.platform === "darwin" ? "open" : process.platform === "win32" ? "start" : "xdg-open";
    spawn(cmd, [url], { stdio: "ignore", detached: true, shell: process.platform === "win32" }).unref();
  }
});
