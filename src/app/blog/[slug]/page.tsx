import { posts } from "@/data/blog-posts";
import BlogPost from "@/components/BlogPost";
import { getLocale, t } from "@/lib/i18n";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found — OTOBZ" };
  return {
    title: `${post.title} — OTOBZ`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    const locale = getLocale();
    return (
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-[#101114]">{t("blog.notFound", locale)}</h1>
          <a href="/blog" className="mt-4 inline-block text-[#7132f5]">← {t("blog.title", locale)}</a>
        </div>
      </section>
    );
  }
  return <BlogPost post={post} />;
}
