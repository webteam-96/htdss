import Gallery from '@/components/Gallery';

export const metadata = { title: '10th National Conference — HTDSS' };

const FLYERS = [
  '/wp-content/uploads/2025/06/001.jpg',
  '/wp-content/uploads/2025/06/002.jpg',
  '/wp-content/uploads/2025/06/003.jpg',
  '/wp-content/uploads/2025/06/004.jpg',
  '/wp-content/uploads/2025/06/005.jpg',
];

export default function TenthConferencePage() {
  return (
    <>
      <section className="container-page py-16">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display font-bold text-3xl text-ink-900">Diabetes &amp; Health</h2>
          <p className="mt-4 text-ink-600 leading-relaxed">23&ndash;24 August 2025 · 9 a.m. to 6 p.m. · Hyatt Regency, Kolkata.</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 prose-clean">
            <p>
              The 10th National Conference of the Howrah Town Diabetes Study Society brings together physicians,
              endocrinologists, dietitians and researchers for two days of scientific discussion on diabetes care.
            </p>
            <p>
              The conference will be held on <strong>23rd and 24th August 2025</strong> from <strong>9:00 a.m.
              to 6:00 p.m.</strong> at the <strong>Hyatt Regency, Kolkata</strong>.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-50 p-6">
              <h3 className="font-display font-bold text-lg text-ink-900">Conference at a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Theme</dt><dd className="text-right font-semibold text-ink-900">Diabetes &amp; Health</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Dates</dt><dd className="text-right font-semibold text-ink-900">23–24 August 2025</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Time</dt><dd className="text-right font-semibold text-ink-900">9 a.m. – 6 p.m.</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Venue</dt><dd className="text-right font-semibold text-ink-900">Hyatt Regency, Kolkata</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="container-page">
          <h2 className="font-display font-bold text-2xl text-ink-900 mb-6">Conference flyers</h2>
          <Gallery images={FLYERS} columns={3} />
        </div>
      </section>
    </>
  );
}
