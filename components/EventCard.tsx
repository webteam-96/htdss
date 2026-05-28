import Link from 'next/link';

type Props = {
  href: string;
  title: string;
  date?: string;
  image?: string;
  excerpt?: string;
  kicker?: string;
};

export default function EventCard({ href, title, date, image, excerpt, kicker }: Props) {
  const d = date ? new Date(date) : null;
  const valid = d && !Number.isNaN(d.getTime());
  const day = valid ? String(d!.getUTCDate()).padStart(2, '0') : null;
  const mon = valid ? d!.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }) : null;
  const year = valid ? d!.getUTCFullYear() : null;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl bg-ink-50 p-3 pb-6 sm:p-[15px] sm:pb-7 transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Image with hover plus overlay */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-4xl font-bold text-ink-300">HTDSS</div>
        )}
        <span
          aria-hidden
          className="absolute inset-0 z-10 flex -translate-y-4 items-center justify-center bg-teal-900/70 text-3xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <span className="icon-plus leading-none" />
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-3 pt-5 sm:px-[15px] sm:pt-6">
        <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
          {day && (
            <div className="flex h-[52px] w-[52px] sm:h-[62px] sm:w-[62px] shrink-0 flex-col items-center justify-center rounded-2xl bg-accent leading-none text-white transition-colors duration-300 group-hover:bg-teal-600">
              <span className="text-xl sm:text-2xl font-bold">{day}</span>
              <span className="mt-1 text-[11px] sm:text-[13px] font-semibold">{mon}</span>
            </div>
          )}
          {(kicker || year) && (
            <div className="eyebrow text-[10px] sm:text-xs">{[kicker, year].filter(Boolean).join(' · ')}</div>
          )}
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold leading-snug text-ink-900 transition-colors group-hover:text-teal-700">
          {title}
        </h3>
        {excerpt && <p className="mt-2 text-sm text-ink-600 line-clamp-3">{excerpt}</p>}

        <div className="mt-auto pt-5 sm:pt-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-700 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-ink-900">
            View details <span className="icon-diagonal-arrow1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
