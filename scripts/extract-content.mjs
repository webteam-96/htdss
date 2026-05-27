// Reads ../htdss-nextjs/data/wp_posts.json and writes a clean structured
// content snapshot to data/site.json — titles, dates, plain-text bodies,
// and image lists per page/event/post. Keeps the redesign decoupled from
// the Elementor HTML soup.
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('../htdss-nextjs/data/wp_posts.json');
const OUT = path.resolve('data/site.json');

const STRIP_TAGS = /<\/?(?:p|div|span|h[1-6]|ul|ol|li|br|strong|em|b|i|section|article|figure|figcaption|a|button|hr|center)[^>]*>/gi;
const STYLE_BLOCK = /<style[\s\S]*?<\/style>/gi;
const SCRIPT_BLOCK = /<script[\s\S]*?<\/script>/gi;
const IMG_TAG = /<img[^>]*src="([^"]+)"[^>]*>/gi;
const HREF_IMG = /href="(https?:\/\/[^"]+\.(?:jpg|jpeg|png|webp|gif|JPG|JPEG|PNG))"/gi;

function rewriteUrl(u) {
  return u
    .replace(/^https?:\/\/(?:www\.)?htdss\.com\//, '/')
    .replace(/^https?:\/\/htdss\.com\//, '/');
}

function extractImages(html) {
  const out = new Set();
  for (const m of html.matchAll(IMG_TAG)) out.add(rewriteUrl(m[1]));
  for (const m of html.matchAll(HREF_IMG)) out.add(rewriteUrl(m[1]));
  return [...out];
}

function toPlainText(html) {
  return html
    .replace(STYLE_BLOCK, '')
    .replace(SCRIPT_BLOCK, '')
    .replace(/<img[^>]*>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(STRIP_TAGS, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractParagraphs(html) {
  const blocks = html
    .replace(STYLE_BLOCK, '')
    .replace(SCRIPT_BLOCK, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '');
  const paras = [];
  const re = /<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(blocks)) !== null) {
    const t = toPlainText(m[1]);
    if (t && t.length > 20) paras.push(t);
  }
  return paras;
}

function extractHeadings(html) {
  const out = [];
  const re = /<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const t = toPlainText(m[2]);
    if (t) out.push({ level: Number(m[1]), text: t });
  }
  return out;
}

const ALL = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const PUBLISHED = ALL.filter(p => p.post_status === 'publish');

function findOne(type, name) {
  return PUBLISHED.find(p => p.post_type === type && p.post_name === name);
}
function findAll(type) {
  return PUBLISHED.filter(p => p.post_type === type);
}

function pageRecord(slug) {
  const p = findOne('page', slug);
  if (!p) return null;
  return {
    slug,
    title: p.post_title,
    paragraphs: extractParagraphs(p.post_content),
    headings: extractHeadings(p.post_content),
    images: extractImages(p.post_content),
    raw_text: toPlainText(p.post_content).slice(0, 4000),
  };
}

function eventRecord(p) {
  return {
    slug: p.post_name,
    title: p.post_title,
    date: p.post_date,
    paragraphs: extractParagraphs(p.post_content),
    images: extractImages(p.post_content),
  };
}

function postRecord(p) {
  return {
    slug: p.post_name,
    title: p.post_title,
    date: p.post_date,
    excerpt: toPlainText(p.post_excerpt || '').slice(0, 280) ||
             extractParagraphs(p.post_content).slice(0, 1).join(' ').slice(0, 280),
    paragraphs: extractParagraphs(p.post_content),
    images: extractImages(p.post_content),
  };
}

const PAGE_SLUGS = ['home-1','about-us','founders','events','activities-2','gallery','contact-us','webinar'];

const out = {
  generated_at: new Date().toISOString(),
  pages: {},
  events: findAll('event').map(eventRecord),
  posts: findAll('post').map(postRecord),
};

for (const slug of PAGE_SLUGS) {
  const rec = pageRecord(slug);
  if (rec) out.pages[slug] = rec;
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2), 'utf8');
console.log(`Wrote ${OUT}`);
console.log(`  pages:  ${Object.keys(out.pages).length}`);
console.log(`  events: ${out.events.length}`);
console.log(`  posts:  ${out.posts.length}`);
