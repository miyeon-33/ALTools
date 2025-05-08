import Integration from '@/app/components/home/Integration';
import License from '@/app/components/home/License';
import MainSlider from '@/app/components/home/MainSlider';
import ProductList from '@/app/components/home/ProductList';
import Subscribe from '@/app/components/home/Subscribe';

export default function Home() {
  return (
    <main className="pt-[80px]">
      <MainSlider />
      <ProductList />
      <Subscribe />
      <License />
      <Integration />
      {/* <Link href="/products">products</Link>
      <Link href="/articles/breaking-news-123">read in korean</Link>
      <Link href="/articles/breaking-news-123?lang=en">read in english</Link>
      <Link href="/articles/breaking-news-123?lang=fr">read in franch</Link> */}
    </main>
  );
}
