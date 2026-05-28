'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const TITLES: Record<string, string> = {
  'about-us': 'About Us',
  founders: 'Founders',
  events: 'Scientific Events',
  activities: 'Activities',
  gallery: 'Gallery',
  'contact-us': 'Contact Us',
  webinar: 'Upcoming Events',
  '10th-conference': '10th National Conference',
  '11th-conference': '11th National Conference',
};

// strips a trailing " — HTDSS" / " - HTDSS" / " | HTDSS" from document.title
const SITE_SUFFIX_RE = /\s*[—\-|]\s*HTDSS\s*$/i;

function titleCase(slug: string) {
  return decodeURIComponent(slug)
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

export default function Breadcrumb() {
  const pathname = usePathname() || '/';
  const segments = pathname.split('/').filter(Boolean);
  const last = segments[segments.length - 1] || '';
  const mapped = TITLES[last];

  // For dynamic detail pages (events/posts) the slug isn't in the map — fall
  // back to the slug for SSR, then upgrade to the real page title once mounted.
  const [docTitle, setDocTitle] = useState<string | null>(null);
  useEffect(() => {
    if (mapped) {
      setDocTitle(null);
      return;
    }
    const dt = document.title.replace(SITE_SUFFIX_RE, '').trim();
    setDocTitle(dt || null);
  }, [pathname, mapped]);

  if (pathname === '/') return null;

  const title = mapped || docTitle || titleCase(last);

  return (
    <nav className="hd-breadcrumb" aria-label="Breadcrumb">
      <div className="hd-breadcrumb__shape" />
      <div className="hd-breadcrumb__inner">
        <h1 className="hd-breadcrumb__title">{title}</h1>
        <ol className="hd-breadcrumb__trail">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-hidden="true" className="hd-breadcrumb__sep">
            <span className="icon-angle-right">›</span>
          </li>
          <li aria-current="page">{title}</li>
        </ol>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
.hd-breadcrumb { position:relative; overflow:hidden;
  background:
    radial-gradient(700px 300px at 100% 0%, rgba(232,122,30,0.10), transparent 60%),
    linear-gradient(180deg,#f3f7fd 0%,#e7eef9 100%);
  border-bottom:1px solid #dde7f3; }
.hd-breadcrumb__shape { position:absolute; width:240px; height:240px; border-radius:50%;
  top:-120px; left:-70px;
  background:radial-gradient(circle at 40% 40%, rgba(24,96,168,0.12), transparent 70%);
  pointer-events:none; }
.hd-breadcrumb__inner { position:relative; z-index:1; max-width:1200px; margin:0 auto;
  padding:38px 24px; display:flex; align-items:center; justify-content:space-between;
  flex-wrap:wrap; gap:14px; }
.hd-breadcrumb__title { margin:0; font-size:clamp(22px,3.2vw,34px); font-weight:800; color:#0b2e56;
  font-family:"Nunito","Nunito Sans",system-ui,sans-serif; max-width:100%; line-height:1.2;
  overflow-wrap:anywhere; }
.hd-breadcrumb__trail { list-style:none; margin:0; padding:0; display:flex; align-items:center;
  flex-wrap:wrap; gap:8px; font-size:14px; font-weight:600; }
.hd-breadcrumb__trail a { color:#1860a8; text-decoration:none; transition:color .2s; }
.hd-breadcrumb__trail a:hover { color:#e87a1e; }
.hd-breadcrumb__trail li[aria-current] { color:#5b7088; }
.hd-breadcrumb__sep { color:#e87a1e; font-weight:700; line-height:1; }
@media (max-width:767px){ .hd-breadcrumb__inner{ padding:28px 18px; gap:8px; }
  .hd-breadcrumb__trail{ font-size:13px; } }
@media (max-width:480px){ .hd-breadcrumb__inner{ padding:22px 16px; } }
`,
        }}
      />
    </nav>
  );
}
