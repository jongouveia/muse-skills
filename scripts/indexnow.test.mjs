import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { buildPayload, findKey, parseLocs } from './indexnow.mjs';

const KEY = 'e999fd1535d54b22e41c5d7c3d3d2238';

test('parseLocs reads every loc from a sitemap', () => {
  const xml = '<urlset><url><loc>https://museskills.dev/</loc></url><url><loc> https://museskills.dev/packs/ </loc></url></urlset>';
  assert.deepEqual(parseLocs(xml), ['https://museskills.dev/', 'https://museskills.dev/packs/']);
});

test('buildPayload dedupes URLs and points keyLocation at the key file', () => {
  const p = buildPayload(KEY, ['https://museskills.dev/a/', 'https://museskills.dev/a/']);
  assert.deepEqual(p, {
    host: 'museskills.dev',
    key: KEY,
    keyLocation: `https://museskills.dev/${KEY}.txt`,
    urlList: ['https://museskills.dev/a/'],
  });
});

test('buildPayload rejects URLs off the canonical host', () => {
  assert.throws(() => buildPayload(KEY, ['https://www.museskills.dev/a/']), /not on https:\/\/museskills.dev/);
  assert.throws(() => buildPayload(KEY, ['http://museskills.dev/a/']), /not on/);
  assert.throws(() => buildPayload(KEY, []), /no URLs/);
});

test('findKey returns the one key file whose content matches its name', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'indexnow-'));
  fs.writeFileSync(path.join(dir, `${KEY}.txt`), KEY);
  fs.writeFileSync(path.join(dir, `${'0'.repeat(32)}.txt`), 'not the key');
  fs.writeFileSync(path.join(dir, 'robots.txt'), 'User-agent: *');
  try {
    assert.equal(findKey(dir), KEY);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('the repo ships exactly one key file', () => {
  assert.equal(findKey(), KEY);
});
