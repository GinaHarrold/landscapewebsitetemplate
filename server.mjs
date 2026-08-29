import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";
import handler from "./dist/server/server.js";

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";
const CLIENT_DIR = join(process.cwd(), "dist/client");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function toRequest(req) {
  const host = req.headers.host || `localhost:${PORT}`;
  const proto = req.headers["x-forwarded-proto"] || "http";
  const url = `${proto}://${host}${req.url || "/"}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
    } else if (value != null) {
      headers.set(key, value);
    }
  }

  const method = req.method || "GET";
  const hasBody = method !== "GET" && method !== "HEAD";

  return new Request(url, {
    method,
    headers,
    ...(hasBody
      ? { body: req, duplex: "half" }
      : {}),
  });
}

async function tryStatic(pathname, res) {
  const relative = pathname.replace(/^\/+/, "");
  if (!relative) return false;

  const filePath = join(CLIENT_DIR, relative);

  try {
    const info = await stat(filePath);
    if (!info.isFile()) return false;

    const data = await readFile(filePath);
    res.statusCode = 200;
    res.setHeader(
      "content-type",
      contentTypes[extname(filePath).toLowerCase()] ||
        "application/octet-stream"
    );
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

const server = createServer(async (req, res) => {
  try {
    const pathname = new URL(
      req.url || "/",
      `http://${req.headers.host || "localhost"}`
    ).pathname;

    if (await tryStatic(pathname, res)) return;

    const webResponse = await handler.fetch(toRequest(req));

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (!webResponse.body) {
      res.end();
      return;
    }

    const reader = webResponse.body.getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`LawnPress serving at http://localhost:${PORT}`);
});
