// Prints a Markdown newsletter body listing entries added in the last N days.
// Usage: node scripts/weekly-digest.mjs [--days 7] [--today YYYY-MM-DD]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'src/content/entries');
const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(name); return i >= 0 && args[i + 1] ? args[i + 1] : fallback; };
const days = Number(opt('--days', '7'));
const today = opt('--today', new Date().toISOString().slice(0, 10));
if (!Number.isInteger(days) || days < 1 || !/^\d{4}-\d{2}-\d{2}$/.test(today)) {
  console.error('Usage: node scripts/weekly-digest.mjs [--days 7] [--today YYYY-MM-DD]');
  process.exit(2);
}
const end = new Date(`${today}T00:00:00Z`);
const start = new Date(end.getTime() - (days - 1) * 86400000);

const field = (text, key) => {
  const m = text.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
};

const picks = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
  const text = fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n---\r?\n/)[0];
  return { slug: f.replace(/\.md$/, ''), title: field(text, 'title'), tagline: field(text, 'tagline'), date: field(text, 'date_added') };
}).filter((e) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e.date)) return false;
  const d = new Date(`${e.date}T00:00:00Z`);
  return d >= start && d <= end;
}).sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

if (picks.length === 0) {
  console.error(`No entries added between ${start.toISOString().slice(0, 10)} and ${today}.`);
  process.exit(1);
}
console.log(`# ${picks.length} new Muse skills this week\n`);
for (const e of picks) console.log(`**[${e.title}](https://museskills.dev/entry/${e.slug}/)**  \n${e.tagline}\n`);
console.log('Browse every skill at [museskills.dev](https://museskills.dev/).');
