import fs from 'node:fs';
import path from 'node:path';
import HtmlBlock from '@/components/HtmlBlock';

export const metadata = { title: 'HTDSS — Howrah Town Diabetes Study Society' };

export default function HomePage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), 'donatix-home.html'),
    'utf-8'
  );
  return <HtmlBlock html={bodyHtml} />;
}
