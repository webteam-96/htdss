import type { Metadata } from 'next';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'HTDSS — Howrah Town Diabetes Study Society',
  description:
    'A community of physicians and volunteers working to reduce diabetes in Howrah through awareness camps, walkathons, conferences and outreach.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Nunito+Sans:wght@400;500;600;700&family=Caveat:wght@400;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
