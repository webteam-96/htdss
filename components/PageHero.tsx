export default function PageHero({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-teal-800 via-ink-800 to-ink-900 text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl"
      />
      <div className="container-page relative py-20 lg:py-24">
        {kicker && <div className="text-teal-200 text-xs font-semibold tracking-[0.12em] uppercase">{kicker}</div>}
        <h1 className="mt-3 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-ink-100 leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
