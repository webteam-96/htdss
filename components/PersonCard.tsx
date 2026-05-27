import type { Person } from '@/lib/founders';

export default function PersonCard({ person, variant = 'card' }: { person: Person; variant?: 'card' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="text-center">
        <div className="aspect-square overflow-hidden rounded-full ring-4 ring-ink-50 bg-ink-100 max-w-[140px] mx-auto">
          <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
        </div>
        <div className="mt-3 font-semibold text-ink-900 text-sm">{person.name}</div>
        <div className="text-xs text-ink-500">{person.role}</div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl border border-ink-100 shadow-sm overflow-hidden hover:shadow-lg transition">
      <div className="aspect-[4/5] overflow-hidden bg-ink-100">
        <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="text-[11px] uppercase tracking-wider font-semibold text-teal-700">{person.role}</div>
        <div className="mt-1 font-display font-bold text-ink-900">{person.name}</div>
        {person.affiliation && <div className="mt-1 text-xs text-ink-500">{person.affiliation}</div>}
      </div>
    </div>
  );
}
