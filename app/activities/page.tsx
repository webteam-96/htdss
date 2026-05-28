import EventCard from '@/components/EventCard';
import { getEvents, getPosts } from '@/lib/content';

export const metadata = { title: 'Activities — HTDSS' };

type ActivityCard = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  href: string;
};

export default function ActivitiesPage() {
  const eventCards: ActivityCard[] = getEvents().map(e => ({
    slug: e.slug,
    title: e.title,
    date: e.date,
    image: e.images[0],
    href: `/event/${e.slug}`,
  }));

  // Activity-style posts (non-conference) that live in the posts collection.
  const postCards: ActivityCard[] = getPosts()
    .filter(p => !/conference/i.test(p.title))
    .map(p => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      image: p.images[0],
      href: `/${p.slug}`,
    }));

  const activities = [...eventCards, ...postCards]
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  return (
    <>
      <section className="container-page py-10 sm:py-14 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900">Walkathons, camps &amp; awareness drives</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-600 leading-relaxed">From quiet awareness camps to large public walkathons — every field activity HTDSS has run since 2018.</p>
          </div>
          <p className="text-sm text-ink-500">{activities.length} activities</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activities.map(a => (
            <EventCard
              key={a.href}
              href={a.href}
              title={a.title}
              date={a.date}
              image={a.image}
              kicker="Activity"
            />
          ))}
        </div>
      </section>
    </>
  );
}
