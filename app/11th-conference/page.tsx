import Gallery from '@/components/Gallery';

export const metadata = { title: '11th National Conference — HTDSS' };

const FLYERS = ['/uploads/2026/11th-conference.jpg'];

export default function EleventhConferencePage() {
  return (
    <>
      <section className="container-page py-16">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display font-bold text-3xl text-ink-900">Staying Well in Diabetes</h2>
          <p className="mt-4 text-ink-600 leading-relaxed">12th &amp; 13th September 2026 · Hyatt Regency, Kolkata.</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 prose-clean">
            <p>
              <strong>HDSCON-11</strong> — the 11th National Conference of the Howrah Town Diabetes Study Society —
              continues our annual tradition of bringing together physicians and researchers around the latest
              science of diabetes care.
            </p>
            <p>
              Block your dates: <strong>12th and 13th September 2026</strong> at the <strong>Hyatt Regency,
              Kolkata</strong>. Programme and registration details will follow.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-ink-50 p-6">
              <h3 className="font-display font-bold text-lg text-ink-900">Conference at a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Title</dt><dd className="text-right font-semibold text-ink-900">HDSCON-11</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Theme</dt><dd className="text-right font-semibold text-ink-900">Staying Well in Diabetes</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Dates</dt><dd className="text-right font-semibold text-ink-900">12–13 September 2026</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-ink-500">Venue</dt><dd className="text-right font-semibold text-ink-900">Hyatt Regency, Kolkata</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink-50 py-16">
        <div className="container-page">
          <h2 className="font-display font-bold text-2xl text-ink-900 mb-6">Conference flyer</h2>
          <Gallery images={FLYERS} columns={2} />
        </div>
      </section>
    </>
  );
}
