import { posts } from "@/data/blog-posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import { DEFAULT_LOCALE, isLocale, t, type Locale } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found — OTOBZ" };
  return {
    title: `${t(post.titleKey, DEFAULT_LOCALE)} — OTOBZ`,
    description: t(post.excerptKey, DEFAULT_LOCALE),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <main>
        <Header locale={locale} />
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-[#101114]">{t("blog.notFound", locale)}</h1>
            <a href={`/${locale}/blog`} className="mt-4 inline-block text-[#7132f5]">
              {t("blog.back", locale)}
            </a>
          </div>
        </section>
        <Footer locale={locale} />
      </main>
    );
  }
  return (
    <main>
      <Header locale={locale} />
      <BlogPost post={post} locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
