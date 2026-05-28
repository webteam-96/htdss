import Gallery from '@/components/Gallery';
import { allGalleryImages } from '@/lib/content';

export const metadata = { title: 'Gallery — HTDSS' };

export default function GalleryPage() {
  const images = allGalleryImages();
  return (
    <section className="container-page py-10 sm:py-14 lg:py-16">
      <div className="max-w-2xl mb-8 sm:mb-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink-900">A look back at the moments</h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-600 leading-relaxed">Walkathons, camps, conferences, awareness drives — photos from every HTDSS event.</p>
      </div>
      <Gallery images={images} columns={4} />
    </section>
  );
}
