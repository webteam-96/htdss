import EventCard from '@/components/EventCard';
import { getPosts } from '@/lib/content';

const UPCOMING_CONFERENCES = [
  {
    slug: '11th-conference',
    title: 'HDSCON-11 — Staying Well in Diabetes',
    date: '2026-09-12',
    excerpt: '',
    image: '/uploads/2026/11th-conference.jpg',
    upcoming: true,
  },
  {
    slug: '10th-conference',
    title: '10th National Conference — Diabetes & Health',
    date: '2025-08-23',
    excerpt: '',
    image: '/wp-content/uploads/2025/06/001.jpg',
    upcoming: false,
  },
];

export const metadata = { title: 'Scientific Events — HTDSS' };

export default function EventsPage() {
  const published = getPosts().filter(p => /conference/i.test(p.title));
  const conferences = [
    ...UPCOMING_CONFERENCES,
    ...published.map(p => ({ slug: p.slug, title: p.title, date: p.date, excerpt: p.excerpt, image: p.images[0], upcoming: false })),
  ];
  return (
    <>
      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl text-ink-900">Annual conferences</h2>
            <p className="mt-4 text-ink-600 leading-relaxed">From the very first scientific conference in 2018 at ITC Fortune to the most recent — a record of every HTDSS national conference.</p>
          </div>
          <p className="text-sm text-ink-500">{conferences.length} conferences</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferences.map(p => (
            <div key={p.slug} className="relative h-full">
              <EventCard
                href={`/${p.slug}`}
                title={p.title}
                date={p.date}
                image={p.image}
                excerpt={undefined}
                kicker="Conference"
              />
              {p.upcoming && (
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-accent text-ink-900 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 shadow">
                  Upcoming
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
