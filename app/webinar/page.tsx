import Link from 'next/link';

export const metadata = { title: 'Upcoming Events — HTDSS' };

export default function UpcomingEventsPage() {
  return (
    <section className="container-page py-10 sm:py-14 lg:py-16">
      <div className="max-w-3xl mb-8 sm:mb-10">
        <div className="eyebrow">What&apos;s next</div>
        <p className="mt-3 text-sm sm:text-base text-ink-600 leading-relaxed">Mark your calendar — here&apos;s what&apos;s coming up next at HTDSS.</p>
      </div>

      {/* Featured upcoming event — 11th National Conference */}
      <article className="grid lg:grid-cols-2 rounded-2xl border border-ink-100 bg-white overflow-hidden shadow-sm">
        <div className="bg-ink-50 flex items-center justify-center p-3 sm:p-4">
          <img
            src="/uploads/2026/11th-conference.jpg"
            alt="HDSCON-11 — 11th National Conference flyer"
            className="w-full h-auto max-h-[360px] sm:max-h-[480px] lg:max-h-[560px] object-contain"
          />
        </div>
        <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
          <span className="self-start inline-flex items-center rounded-full bg-accent text-ink-900 text-[11px] font-bold uppercase tracking-wider px-3 py-1">
            Upcoming
          </span>
          <div className="eyebrow mt-4">11th National Conference · HDSCON-11</div>
          <h3 className="mt-2 font-display font-bold text-xl sm:text-2xl lg:text-3xl text-ink-900">
            Staying Well in Diabetes
          </h3>
          <dl className="mt-5 space-y-2.5 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-500">Dates</dt>
              <dd className="font-semibold text-ink-900">12&ndash;13 September 2026</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-500">Venue</dt>
              <dd className="font-semibold text-ink-900">Hyatt Regency, Kolkata</dd>
            </div>
          </dl>
          <Link href="/11th-conference" className="btn-primary mt-6 sm:mt-7 w-fit">View details</Link>
        </div>
      </article>
    </section>
  );
}
