import { posts } from "@/data/blog-posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPost from "@/components/BlogPost";
import { DEFAULT_LOCALE, isLocale, t, type Locale } from "@/lib/i18n";

const BASE = "https://otobz.com";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// markdown filesystem: 새 글 추가 시 즉시 반영 (재빌드 없이 SSR)
export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found — OTOBZ" };
  return {
    title: `${t(post.titleKey, locale)} — OTOBZ`,
    description: t(post.excerptKey, locale),
    openGraph: {
      type: "article",
      title: t(post.titleKey, locale),
      description: t(post.excerptKey, locale),
      url: `${BASE}/${locale}/blog/${post.slug}`,
      images: [
        {
          url: `${BASE}/${locale}/blog/${post.slug}/og`,
          width: 1200,
          height: 630,
          alt: t(post.titleKey, locale),
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: t(post.titleKey, locale),
      description: t(post.excerptKey, locale),
      images: [`${BASE}/${locale}/blog/${post.slug}/og`],
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: t(post.titleKey, locale),
            description: t(post.excerptKey, locale),
            image: `${BASE}/${locale}/blog/${post.slug}/og`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "OTOBZ",
              url: BASE,
            },
            publisher: {
              "@type": "Organization",
              name: "OTOBZ",
              logo: {
                "@type": "ImageObject",
                url: `${BASE}/favicon.ico`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE}/${locale}/blog/${post.slug}`,
            },
          }),
        }}
      />
      <Header locale={locale} />
      <BlogPost post={post} locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
