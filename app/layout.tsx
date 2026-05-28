import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const viewport: Viewport = {
  themeColor: '#1860a8',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://htdss.vercel.app'),
  title: {
    default: 'HTDSS — Howrah Town Diabetes Study Society',
    template: '%s — HTDSS',
  },
  description:
    'A community of physicians and volunteers working to reduce diabetes in Howrah through awareness camps, walkathons, conferences and outreach.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/wp-content/uploads/2021/02/logo.jpeg',
    apple: '/wp-content/uploads/2021/02/logo.jpeg',
  },
  openGraph: {
    type: 'website',
    siteName: 'HTDSS',
    title: 'HTDSS — Howrah Town Diabetes Study Society',
    description:
      'A community of physicians and volunteers working to reduce diabetes in Howrah through awareness camps, walkathons, conferences and outreach.',
    images: ['/wp-content/uploads/2021/02/logo.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTDSS — Howrah Town Diabetes Study Society',
    description:
      'A community of physicians and volunteers working to reduce diabetes in Howrah.',
    images: ['/wp-content/uploads/2021/02/logo.jpeg'],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalOrganization',
              name: 'Howrah Town Diabetes Study Society',
              alternateName: 'HTDSS',
              url: 'https://htdss.vercel.app',
              logo: 'https://htdss.vercel.app/wp-content/uploads/2021/02/logo.jpeg',
              foundingDate: '2018-07-01',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '20, Round Tank Lane',
                addressLocality: 'Howrah',
                postalCode: '711101',
                addressCountry: 'IN',
              },
              email: 'howrahdiabetessociety@gmail.com',
              telephone: '+91-98308-77675',
              sameAs: [
                'https://www.facebook.com/HTDSSkolkata/',
                'https://www.youtube.com/channel/UC4K_JctXcHPDLE-Vao-OBPQ',
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
