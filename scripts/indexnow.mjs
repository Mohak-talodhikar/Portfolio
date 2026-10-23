/**
 * IndexNow — instantly notify Bing (and Yandex) that pages changed.
 * Run after every deploy: npm run indexnow
 * Dry-run first (prints payload, sends nothing): npm run indexnow -- --dry-run
 *
 * The key file (public/<uuid>.txt) proves domain ownership; IndexNow
 * fetches it automatically from the keyLocation below.
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "./site.mjs";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

const keyFile = readdirSync(join(process.cwd(), "public")).find(
  (f) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.txt$/.test(f)
);
if (!keyFile) {
  console.error("No IndexNow key file found in public/ (expected <uuid>.txt).");
  process.exit(1);
}
const key = keyFile.replace(/\.txt$/, "");
const urlList = [
  `${SITE}/`,
  `${SITE}/about`,
  `${SITE}/projects`,
  `${SITE}/skills`,
  `${SITE}/contact`,
];

const host = new URL(SITE).host;
const payload = {
  host,
  key,
  keyLocation: `${SITE}/${keyFile}`,
  urlList,
};

if (dryRun) {
  console.log("[dry-run] would POST to https://api.indexnow.org/indexnow:");
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});
if (res.status === 200 || res.status === 202) {
  console.log(`IndexNow: accepted (${res.status}) — ${urlList.length} urls pinged.`);
} else {
  console.error(`IndexNow: unexpected status ${res.status} ${await res.text()}`);
  process.exit(1);
}
