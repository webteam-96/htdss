'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Renders a string of HTML inside a div, but only after the client mounts.
 * Server-side it renders an empty placeholder so React's hydration sees a
 * matching empty subtree. Once mounted, the HTML is injected, then any
 * `<script>` tags inside are NOT executed (they never are via innerHTML);
 * instead the donatix loader in DonatixChrome handles all JS init.
 */
export default function HtmlBlock({ html, className }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = html;
      setReady(true);
    }
  }, [html]);

  return <div ref={ref} className={className} suppressHydrationWarning data-html-ready={ready ? '1' : '0'} />;
}
