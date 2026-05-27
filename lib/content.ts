import site from '@/data/site.json';

export type PageRecord = {
  slug: string;
  title: string;
  paragraphs: string[];
  headings: { level: number; text: string }[];
  images: string[];
  raw_text: string;
};

export type EventRecord = {
  slug: string;
  title: string;
  date: string;
  paragraphs: string[];
  images: string[];
};

export type PostRecord = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
  images: string[];
};

type SiteData = {
  generated_at: string;
  pages: Record<string, PageRecord>;
  events: EventRecord[];
  posts: PostRecord[];
};

const data = site as unknown as SiteData;

export function getPage(slug: string): PageRecord | undefined {
  return data.pages[slug];
}
export function getEvents(): EventRecord[] {
  return [...data.events].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}
export function getEvent(slug: string): EventRecord | undefined {
  return data.events.find(e => e.slug === slug);
}
export function getPosts(): PostRecord[] {
  return [...data.posts].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}
export function getPost(slug: string): PostRecord | undefined {
  return data.posts.find(p => p.slug === slug);
}

export function allGalleryImages(): string[] {
  const set = new Set<string>();
  for (const e of data.events) for (const img of e.images) set.add(img);
  for (const p of data.posts) for (const img of p.images) set.add(img);
  return [...set];
}

export function formatDate(iso: string) {
  if (!iso) return '';
  const d = new Date(iso.replace(' ', 'T'));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
