import { notFound } from 'next/navigation';
import { getPost, getPosts, formatDate } from '@/lib/content';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export function generateStaticParams() {
  return getPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  return { title: p ? `${p.title} — HTDSS` : 'Post — HTDSS' };
}

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <section className="container-page py-16">
      {post.date && <p className="text-sm font-semibold text-teal-700 mb-4">{formatDate(post.date)}</p>}
      {post.excerpt && <p className="text-lg text-ink-600 leading-relaxed max-w-3xl mb-8">{post.excerpt}</p>}
      {post.paragraphs.length > 0 && (
        <div className="prose-clean max-w-3xl">
          {post.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      )}
        {post.images.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display font-bold text-2xl text-ink-900 mb-6">Photos</h2>
            <Gallery images={post.images} />
          </div>
        )}
        <div className="mt-16">
          <Link href="/events" className="text-teal-700 font-semibold hover:underline">← Back to events</Link>
        </div>
    </section>
  );
}
