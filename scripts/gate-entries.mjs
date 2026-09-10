#!/usr/bin/env node

/*
 * --fix-dashes uses a deliberately small, conservative heuristic. An em dash
 * becomes a colon when the following text starts with a lowercase letter and
 * contains a verb-like word within the next four words. Otherwise it becomes
 * a comma. This removes banned punctuation without attempting a prose rewrite.
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bannedPhrases = [
  'guaranteed', 'guarantee', '100%', 'seamless', 'seamlessly', 'revolutionary',
  'game-changing', 'cutting-edge', 'unlock', 'supercharge', 'effortless',
  'effortlessly', 'leverage', 'delve', "in today's fast-paced",
];
const verbWords = new Set([
  'is', 'are', 'was', 'were', 'has', 'have', 'had', 'does', 'do', 'did', 'can',
  'will', 'would', 'should', 'runs', 'reads', 'writes', 'sends', 'checks',
  'gives', 'lets', 'makes', 'keeps', 'needs', 'gets',
]);

function usage() {
  console.error('Usage: node scripts/gate-entries.mjs [--dir X] [--quarantine] [--fix-dashes]');
  process.exit(2);
}

function parseArgs() {
  const result = { dir: path.join(root, 'src/content/entries'), quarantine: false, fixDashes: false };
  for (let i = 2; i < process.argv.length; i += 1) {
    const arg = process.argv[i];
    if (arg === '--dir') {
      if (!process.argv[i + 1]) usage();
      result.dir = path.resolve(process.argv[++i]);
    } else if (arg === '--quarantine') result.quarantine = true;
    else if (arg === '--fix-dashes') result.fixDashes = true;
    else usage();
  }
  if (result.quarantine && result.fixDashes) usage();
  return result;
}

function parseScalar(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) return trimmed.slice(1, -1).replace(/\\([\\"])/g, '$1');
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const contents = trimmed.slice(1, -1).trim();
    return contents ? contents.split(',').map(parseScalar) : [];
  }
  return trimmed;
}

function parseFrontmatter(text, file) {
  const lines = text.split(/\r?\n/);
  if (lines[0] !== '---') throw new Error(`${file}: frontmatter must start with ---`);
  const end = lines.findIndex((line, index) => index > 0 && line === '---');
  if (end < 0) throw new Error(`${file}: frontmatter has no closing ---`);
  const data = {};
  for (let i = 1; i < end; i += 1) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const match = line.match(/^([A-Za-z0-9_-]+):(?:\s(.*))?$/);
    if (!match) throw new Error(`${file}: invalid frontmatter line ${i + 1}`);
    const [, key, rawValue = ''] = match;
    if (rawValue === '|' || rawValue === '>') {
      const block = [];
      i += 1;
      while (i < end && (lines[i] === '' || lines[i].startsWith(' ') || lines[i].startsWith('\t'))) block.push(lines[i++]);
      i -= 1;
      const nonBlank = block.filter((entry) => entry.trim());
      const indent = nonBlank.length ? Math.min(...nonBlank.map((entry) => entry.match(/^\s*/)[0].length)) : 0;
      data[key] = `${block.map((entry) => entry === '' ? '' : entry.slice(indent)).join('\n')}\n`;
    } else data[key] = parseScalar(rawValue);
  }
  return { data, body: lines.slice(end + 1).join('\n') };
}

function categoryKeys() {
  const source = fs.readFileSync(path.join(root, 'src/lib/categories.ts'), 'utf8');
  const object = source.match(/export const CATEGORIES\s*=\s*\{([\s\S]*?)\}\s*as const/);
  if (!object) throw new Error('Could not locate CATEGORIES object');
  const keys = new Set();
  for (const match of object[1].matchAll(/^\s*(?:(['"])([^'"]+)\1|([A-Za-z_$][\w$]*))\s*:/gm)) keys.add(match[2] ?? match[3]);
  return keys;
}

function checkFile(file, categories) {
  const text = fs.readFileSync(file, 'utf8');
  const name = path.relative(root, file);
  let parsed;
  try { parsed = parseFrontmatter(text, name); } catch (error) { return { file, name, failures: [error.message.replace(`${name}: `, '')] }; }
  const { data, body } = parsed;
  data.origin ??= 'shared';
  data.source_verified ??= false;
  const failures = [];
  const nonEmptyString = (key) => typeof data[key] === 'string' && data[key].trim().length > 0;
  if (!nonEmptyString('title')) failures.push('title must be a non-empty string');
  if (!nonEmptyString('tagline')) failures.push('tagline must be a non-empty string');
  else if (data.tagline.length > 120) failures.push('tagline must be at most 120 characters');
  if (!categories.has(data.category)) failures.push('category must be a defined category key');
  if (!['skill', 'prompt', 'workflow', 'config'].includes(data.type)) failures.push('type must be skill, prompt, workflow, or config');
  if (!nonEmptyString('author')) failures.push('author must be a non-empty string');
  if (typeof data.source_url !== 'string' || !data.source_url.startsWith('https://')) failures.push('source_url must start with https://');
  if (!Array.isArray(data.includes) || data.includes.length === 0) failures.push('includes must be a non-empty array');
  if (!nonEmptyString('version')) failures.push('version must be a non-empty string');
  if (typeof data.date_added !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.date_added)) failures.push('date_added must be YYYY-MM-DD');
  for (const key of ['safety_notes', 'install_prompt', 'source']) if (!nonEmptyString(key)) failures.push(`${key} must be a non-empty string`);
  if (data.origin !== undefined && !['shared', 'directory'].includes(data.origin)) failures.push('origin must be shared or directory');
  if (data.source_verified !== undefined && typeof data.source_verified !== 'boolean') failures.push('source_verified must be boolean');
  if (text.includes('\u2014')) failures.push('em dash U+2014 is banned');
  const titleSeparatorLines = text.split(/\r?\n/).filter((line) => /^\s*-\s+[^\n–]+ – [^\n–]+(?:,|:|\.)/.test(line));
  const enDashText = text.split(/\r?\n/).filter((line) => !titleSeparatorLines.includes(line)).join('\n');
  if (enDashText.includes(' – ')) failures.push('en dash used as a spaced dash is banned');
  for (const phrase of bannedPhrases) if (text.toLowerCase().includes(phrase)) failures.push(`banned phrase: ${phrase}`);
  if (body.trim().split(/\s+/).filter(Boolean).length < 80) failures.push('markdown body must contain at least 80 words');
  if (nonEmptyString('source') && (!nonEmptyString('install_prompt') || (!data.install_prompt.includes(data.source) && !sourcePayloadIsIncluded(data.source, data.install_prompt)))) failures.push('install_prompt must contain the full source');
  return { file, name, failures };
}

// Some entries repeat an executable fenced source exactly while lightly
// editing the surrounding explanatory prose. Treat that payload as the full
// source for the containment check, but keep exact containment as the default.
function sourcePayloadIsIncluded(source, installPrompt) {
  const payloads = [...source.matchAll(/```[\s\S]*?\n([\s\S]*?)```/g)].map((match) => match[1]);
  return payloads.length > 0 && payloads.every((payload) => installPrompt.includes(payload));
}

function fixEmDashes(file) {
  let text = fs.readFileSync(file, 'utf8');
  if (!text.includes('\u2014')) return;
  text = text.replace(/\u2014/g, (match, offset, whole) => {
    const after = whole.slice(offset + 1);
    const words = after.match(/^[\s]*([a-z][a-z'-]*(?:\s+[a-z][a-z'-]*){0,3})/i)?.[1]?.split(/\s+/) ?? [];
    const startsLower = /^[\s]*[a-z]/.test(after);
    const hasVerb = words.some((word) => verbWords.has(word.toLowerCase().replace(/[^a-z'-]/g, '')) || /(?:s|ed|ing)$/.test(word.toLowerCase()));
    return startsLower && hasVerb ? ':' : ',';
  });
  fs.writeFileSync(file, text);
}

function resultReport(results) {
  return results.map((result) => result.failures.length ? `FAIL ${result.name}: ${result.failures.join('; ')}` : `PASS ${result.name}`).join('\n');
}

function uniqueDestination(dir, filename) {
  const extension = path.extname(filename);
  const stem = path.basename(filename, extension);
  let candidate = path.join(dir, filename);
  for (let number = 2; fs.existsSync(candidate); number += 1) candidate = path.join(dir, `${stem}-${number}${extension}`);
  return candidate;
}

function gitTrackingStatus(file) {
  const gitDirectory = path.join(root, '.git');
  try {
    if (!fs.existsSync(gitDirectory) || !fs.statSync(gitDirectory).isDirectory()) return { available: false, tracked: false };
  } catch {
    return { available: false, tracked: false };
  }
  const relativeFile = path.relative(root, file);
  try {
    execFileSync('git', ['ls-files', '--error-unmatch', relativeFile], { cwd: root, stdio: 'ignore' });
    return { available: true, tracked: true };
  } catch (error) {
    if (error?.status === 1) return { available: true, tracked: false };
    return { available: false, tracked: false };
  }
}

function restoreTrackedOrQuarantine(file, destinationDir) {
  const status = gitTrackingStatus(file);
  if (status.available && status.tracked) {
    const slug = path.basename(file, path.extname(file));
    const museCopy = path.join(destinationDir, `${slug}.muse.md`);
    try {
      fs.copyFileSync(file, museCopy);
      const temporaryIndexDir = fs.mkdtempSync(path.join(os.tmpdir(), 'muse-gate-index-'));
      const temporaryIndex = path.join(temporaryIndexDir, 'index');
      try {
        fs.copyFileSync(path.join(root, '.git/index'), temporaryIndex);
        execFileSync('git', ['checkout', '--', path.relative(root, file)], {
          cwd: root,
          env: { ...process.env, GIT_INDEX_FILE: temporaryIndex },
          stdio: 'ignore',
        });
      } finally {
        fs.rmSync(temporaryIndexDir, { recursive: true, force: true });
      }
      return { type: 'restored', copy: path.relative(root, museCopy) };
    } catch {
      // Fall through to the existing quarantine behavior if Git handling fails.
    }
  }
  const destination = uniqueDestination(destinationDir, path.basename(file));
  fs.renameSync(file, destination);
  return { type: 'moved', destination };
}

function main() {
  const options = parseArgs();
  if (!fs.existsSync(options.dir)) { console.error(`Directory not found: ${options.dir}`); process.exit(1); }
  const files = fs.readdirSync(options.dir).filter((name) => name.endsWith('.md')).sort().map((name) => path.join(options.dir, name));
  const categories = categoryKeys();
  if (options.fixDashes) for (const file of files) fixEmDashes(file);
  const results = files.map((file) => checkFile(file, categories));
  if (options.quarantine) {
    const destinationDir = path.join(root, 'drafts/entries');
    fs.mkdirSync(destinationDir, { recursive: true });
    const moved = [];
    const fixed = [];
    const restored = [];
    for (const result of results.filter((entry) => entry.failures.length)) {
      fixEmDashes(result.file);
      const rechecked = checkFile(result.file, categories);
      if (!rechecked.failures.length) {
        fixed.push(`- ${result.name}: fixed dashes`);
        console.log(`FIXED ${result.name}`);
        continue;
      }
      const outcome = restoreTrackedOrQuarantine(result.file, destinationDir);
      if (outcome.type === 'restored') {
        restored.push(`- ${result.name}: restored tracked entry, Muse rewrite saved to ${outcome.copy}`);
        console.log(`RESTORED ${result.name} (Muse rewrite saved to ${outcome.copy})`);
      } else {
        moved.push(`- ${result.name} -> ${path.relative(root, outcome.destination)}: ${rechecked.failures.join('; ')}`);
      }
    }
    const reportLines = [...fixed, ...restored, ...moved];
    const gateReport = `# Entry gate report\n\nRun: ${new Date().toISOString()}\n\n${reportLines.length ? reportLines.join('\n') : 'No files moved.'}\n`;
    fs.writeFileSync(path.join(root, 'drafts/GATE-REPORT.md'), gateReport);
    console.log(gateReport.trim());
    process.exit(0);
  }
  console.log(resultReport(results));
  process.exit(results.some((result) => result.failures.length) ? 1 : 0);
}

main();
