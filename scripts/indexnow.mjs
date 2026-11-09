#!/usr/bin/env node
// Submit museskills.dev URLs to IndexNow (Bing, Yandex, Seznam, Naver and others).
//
// Usage:
//   node scripts/indexnow.mjs <url> [<url> ...]   submit these URLs
//   node scripts/indexnow.mjs --all               submit every URL in the live sitemap
//   add --dry-run to print the payload without sending it
//
// The key is the public/<32 hex>.txt file. IndexNow keys are public by design:
// the engines fetch https://museskills.dev/<key>.txt to confirm ownership.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const HOST = 'museskills.dev';
export const ENDPOINT = 'https://api.indexnow.org/indexnow';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function findKey(dir = path.join(root, 'public')) {
  const keys = fs.readdirSync(dir)
    .filter((f) => /^[a-f0-9]{32}\.txt$/.test(f))
    .filter((f) => fs.readFileSync(path.join(dir, f), 'utf8').trim() === f.slice(0, -4));
  if (keys.length !== 1) throw new Error(`expected one IndexNow key file in ${dir}, found ${keys.length}`);
  return keys[0].slice(0, -4);
}

export function parseLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
}

export function buildPayload(key, urls) {
  const list = [...new Set(urls)];
  if (list.length === 0) throw new Error('no URLs to submit');
  if (list.length > 10000) throw new Error('IndexNow accepts at most 10,000 URLs per request');
  for (const u of list) {
    const { protocol, host } = new URL(u);
    if (protocol !== 'https:' || host !== HOST) throw new Error(`URL is not on https://${HOST}: ${u}`);
  }
  return { host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: list };
}

async function sitemapUrls() {
  const index = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  const urls = [];
  for (const child of parseLocs(index)) {
    if (child.endsWith('.xml')) urls.push(...parseLocs(await (await fetch(child)).text()));
    else urls.push(child);
  }
  return urls;
}

async function main(argv) {
  const dry = argv.includes('--dry-run');
  const args = argv.filter((a) => !a.startsWith('--'));
  const urls = argv.includes('--all') ? await sitemapUrls() : args;
  const payload = buildPayload(findKey(), urls);
  if (dry) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });
  // 200 = accepted, 202 = accepted and key validation pending.
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow returned ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  console.log(`IndexNow ${res.status}: submitted ${payload.urlList.length} URLs`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
