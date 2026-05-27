export default function SectionHeader({
  kicker,
  title,
  description,
  align = 'left',
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {kicker && <div className="eyebrow">{kicker}</div>}
      <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink-900 leading-tight">{title}</h2>
      {description && <p className="mt-4 text-ink-600 text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
