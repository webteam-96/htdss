'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about-us' },
  { label: 'Founders',   href: '/founders' },
  { label: 'Events',     href: '/events' },
  { label: 'Activities', href: '/activities' },
  { label: 'Gallery',    href: '/gallery' },
  { label: 'Webinar',    href: '/webinar' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b" style={{ backgroundColor: '#f8f1a9', borderBottomColor: '#e6dc78' }}>
      <div className="container-page flex items-center justify-between py-2">
        <Link href="/" className="flex items-center">
          <img
            src="/wp-content/uploads/2021/02/logo.jpeg"
            alt="Howrah Town Diabetes Study Society"
            style={{ height: '100px', width: 'auto' }}
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map(item => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-ink-900 hover:text-teal-700 transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link href="/contact-us" className="btn-primary text-sm">Contact</Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
          className="lg:hidden p-2 text-ink-900"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              : <><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-ink-100" style={{ backgroundColor: '#f8f1a9' }}>
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 font-semibold text-ink-900 hover:text-teal-700"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact-us" onClick={() => setOpen(false)} className="btn-primary text-sm mt-2 w-fit">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
