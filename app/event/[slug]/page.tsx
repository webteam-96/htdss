import { notFound } from 'next/navigation';
import { getEvent, getEvents, formatDate } from '@/lib/content';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export function generateStaticParams() {
  return getEvents().map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEvent(slug);
  return { title: e ? `${e.title} — HTDSS` : 'Event — HTDSS' };
}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) notFound();
  return (
    <section className="container-page py-16">
      {ev.date && <p className="text-sm font-semibold text-teal-700 mb-4">{formatDate(ev.date)}</p>}
      {ev.paragraphs.length > 0 && (
        <div className="prose-clean max-w-3xl">
          {ev.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
        {ev.images.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display font-bold text-2xl text-ink-900 mb-6">Photos</h2>
            <Gallery images={ev.images} />
          </div>
        )}
        <div className="mt-16">
          <Link href="/events" className="text-teal-700 font-semibold hover:underline">← Back to all events</Link>
        </div>
    </section>
  );
}
