import fs from 'node:fs';
import path from 'node:path';
import HtmlBlock from '@/components/HtmlBlock';

export const metadata = { title: 'About us — HTDSS' };

export default function AboutPage() {
  const bodyHtml = fs.readFileSync(
    path.join(process.cwd(), 'donatix-about.html'),
    'utf-8'
  );
  return <HtmlBlock html={bodyHtml} />;
}
