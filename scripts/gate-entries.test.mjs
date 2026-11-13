import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gate = path.join(root, 'scripts/gate-entries.mjs');
const base = fs.readFileSync(path.join(root, 'src/content/entries/debt-payoff-planner.md'), 'utf8');

function runGate(text) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'gate-'));
  fs.writeFileSync(path.join(dir, 'entry.md'), text);
  try {
    return execFileSync('node', [gate, '--dir', dir], { encoding: 'utf8', stdio: 'pipe' });
  } catch (error) {
    return `${error.stdout}${error.stderr}`;
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function withIncludes(block) {
  const replaced = base.replace(/^includes: .*$/m, block);
  assert.notEqual(replaced, base, 'fixture must contain an inline includes line');
  return replaced;
}

test('inline includes array passes', () => {
  assert.match(runGate(base), /^PASS /m);
});

test('YAML block list for includes passes', () => {
  const out = runGate(withIncludes('includes:\n  - "Payoff order"\n  - Monthly plan\n  - \'Template\''));
  assert.match(out, /^PASS /m, out);
});

test('block list items keep commas inside quotes', () => {
  const out = runGate(withIncludes('includes:\n  - "Order, plan, and date"'));
  assert.match(out, /^PASS /m, out);
});

test('empty includes still fails', () => {
  const out = runGate(withIncludes('includes:'));
  assert.match(out, /includes must be a non-empty array/, out);
});

function withTagline(text) {
  const replaced = base.replace(/^tagline: .*$/m, `tagline: ${JSON.stringify(text)}`);
  assert.notEqual(replaced, base, 'fixture must contain a tagline line');
  return replaced;
}

test('tagline of 90 characters passes', () => {
  const out = runGate(withTagline('a'.repeat(90)));
  assert.match(out, /^PASS /m, out);
});

test('tagline over 90 characters fails', () => {
  const out = runGate(withTagline('a'.repeat(91)));
  assert.match(out, /tagline must be at most 90 characters/, out);
});

function withType(type) {
  const replaced = base.replace(/^type: .*$/m, `type: ${JSON.stringify(type)}`);
  assert.notEqual(replaced, base.replace(/^type: .*$/m, 'type: "__"'), 'fixture must contain a type line');
  return replaced;
}

test('type space passes', () => {
  const out = runGate(withType('space'));
  assert.match(out, /^PASS /m, out);
});

test('unknown type fails', () => {
  const out = runGate(withType('dashboard'));
  assert.match(out, /type must be skill, prompt, workflow, config, or space/, out);
});
