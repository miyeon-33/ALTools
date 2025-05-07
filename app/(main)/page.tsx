import MainSlider from '@/app/components/home/MainSlider';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-[80px]">
      <MainSlider />
      {/* <Link href="/products">products</Link>
      <Link href="/articles/breaking-news-123">read in korean</Link>
      <Link href="/articles/breaking-news-123?lang=en">read in english</Link>
      <Link href="/articles/breaking-news-123?lang=fr">read in franch</Link> */}
    </main>
  );
}
