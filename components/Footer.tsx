import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-100 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="max-w-md text-sm text-ink-300 leading-relaxed">
            Howrah Town Diabetes Study Society — a community of physicians and volunteers
            working to make Howrah a healthier place to live with and beyond diabetes.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-ink-300">
            <li><Link href="/about-us" className="hover:text-white">About us</Link></li>
            <li><Link href="/founders" className="hover:text-white">Founders</Link></li>
            <li><Link href="/events" className="hover:text-white">Events</Link></li>
            <li><Link href="/activities" className="hover:text-white">Activities</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-ink-300">
            <li><Link href="/contact-us" className="hover:text-white">Contact</Link></li>
            <li><Link href="/webinar" className="hover:text-white">Webinars</Link></li>
            <li>Howrah, West Bengal</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-800">
        <div className="container-page py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-ink-400">
          <span>© {new Date().getFullYear()} Howrah Town Diabetes Study Society. All rights reserved.</span>
          <span>Made with care for the Howrah community.</span>
        </div>
      </div>
    </footer>
  );
}
