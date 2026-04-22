import { type Locale } from "@/lib/i18n";

export type PostSection = {
  headingKey: string;
  paragraphKeys: string[];
};

export type Post = {
  slug: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  image?: string;
  tags?: string[];
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "ai-agent-infrastructure",
    titleKey: "blog.post.ai-agent-infrastructure.title",
    excerptKey: "blog.post.ai-agent-infrastructure.excerpt",
    date: "2026-03-15",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    tags: ["AI Agent", "Infrastructure"],
    sections: [
      {
        headingKey: "blog.post.ai-agent-infrastructure.h1",
        paragraphKeys: [
          "blog.post.ai-agent-infrastructure.p1",
          "blog.post.ai-agent-infrastructure.p2",
        ],
      },
      {
        headingKey: "blog.post.ai-agent-infrastructure.h2",
        paragraphKeys: [
          "blog.post.ai-agent-infrastructure.p3",
          "blog.post.ai-agent-infrastructure.p4",
        ],
      },
      {
        headingKey: "blog.post.ai-agent-infrastructure.h3",
        paragraphKeys: [
          "blog.post.ai-agent-infrastructure.p5",
          "blog.post.ai-agent-infrastructure.p6",
        ],
      },
      {
        headingKey: "blog.post.ai-agent-infrastructure.h4",
        paragraphKeys: [
          "blog.post.ai-agent-infrastructure.p7",
          "blog.post.ai-agent-infrastructure.p8",
          "blog.post.ai-agent-infrastructure.p9",
        ],
      },
    ],
  },
  {
    slug: "local-ai-vs-cloud-apis",
    titleKey: "blog.post.local-ai-vs-cloud-apis.title",
    excerptKey: "blog.post.local-ai-vs-cloud-apis.excerpt",
    date: "2026-03-10",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80",
    tags: ["AI", "Cost Optimization"],
    sections: [
      {
        headingKey: "blog.post.local-ai-vs-cloud-apis.h1",
        paragraphKeys: [
          "blog.post.local-ai-vs-cloud-apis.p1",
          "blog.post.local-ai-vs-cloud-apis.p2",
        ],
      },
      {
        headingKey: "blog.post.local-ai-vs-cloud-apis.h2",
        paragraphKeys: [
          "blog.post.local-ai-vs-cloud-apis.p3",
        ],
      },
      {
        headingKey: "blog.post.local-ai-vs-cloud-apis.h3",
        paragraphKeys: [
          "blog.post.local-ai-vs-cloud-apis.p4",
          "blog.post.local-ai-vs-cloud-apis.p5",
          "blog.post.local-ai-vs-cloud-apis.p6",
          "blog.post.local-ai-vs-cloud-apis.p7",
        ],
      },
    ],
  },
  {
    slug: "fine-tuning-vast-ai",
    titleKey: "blog.post.fine-tuning-vast-ai.title",
    excerptKey: "blog.post.fine-tuning-vast-ai.excerpt",
    date: "2026-03-05",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    tags: ["Fine-tuning", "Vast.ai"],
    sections: [
      {
        headingKey: "blog.post.fine-tuning-vast-ai.h1",
        paragraphKeys: [
          "blog.post.fine-tuning-vast-ai.p1",
          "blog.post.fine-tuning-vast-ai.p2",
        ],
      },
      {
        headingKey: "blog.post.fine-tuning-vast-ai.h2",
        paragraphKeys: [
          "blog.post.fine-tuning-vast-ai.p3",
          "blog.post.fine-tuning-vast-ai.p4",
        ],
      },
      {
        headingKey: "blog.post.fine-tuning-vast-ai.h3",
        paragraphKeys: [
          "blog.post.fine-tuning-vast-ai.p5",
          "blog.post.fine-tuning-vast-ai.p6",
        ],
      },
      {
        headingKey: "blog.post.fine-tuning-vast-ai.h4",
        paragraphKeys: [
          "blog.post.fine-tuning-vast-ai.p7",
          "blog.post.fine-tuning-vast-ai.p8",
          "blog.post.fine-tuning-vast-ai.p9",
        ],
      },
    ],
  },
  {
    slug: "ai-meeting-summarizer",
    titleKey: "blog.post.ai-meeting-summarizer.title",
    excerptKey: "blog.post.ai-meeting-summarizer.excerpt",
    date: "2026-02-28",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80",
    tags: ["AI Agent", "Automation"],
    sections: [
      {
        headingKey: "blog.post.ai-meeting-summarizer.h1",
        paragraphKeys: [
          "blog.post.ai-meeting-summarizer.p1",
          "blog.post.ai-meeting-summarizer.p2",
        ],
      },
      {
        headingKey: "blog.post.ai-meeting-summarizer.h2",
        paragraphKeys: [
          "blog.post.ai-meeting-summarizer.p3",
          "blog.post.ai-meeting-summarizer.p4",
        ],
      },
      {
        headingKey: "blog.post.ai-meeting-summarizer.h3",
        paragraphKeys: [
          "blog.post.ai-meeting-summarizer.p5",
          "blog.post.ai-meeting-summarizer.p6",
        ],
      },
      {
        headingKey: "blog.post.ai-meeting-summarizer.h4",
        paragraphKeys: [
          "blog.post.ai-meeting-summarizer.p7",
          "blog.post.ai-meeting-summarizer.p8",
          "blog.post.ai-meeting-summarizer.p9",
        ],
      },
    ],
  },
];
