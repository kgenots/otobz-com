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
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
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
  {
    slug: "how-openclaw-pairing-works",
    titleKey: "blog.post.how-openclaw-pairing-works.title",
    excerptKey: "blog.post.how-openclaw-pairing-works.excerpt",
    date: "2026-04-20",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    tags: ["OpenClaw", "Device Management"],
    sections: [
      {
        headingKey: "blog.post.how-openclaw-pairing-works.h1",
        paragraphKeys: [
          "blog.post.how-openclaw-pairing-works.p1",
          "blog.post.how-openclaw-pairing-works.p2",
        ],
      },
      {
        headingKey: "blog.post.how-openclaw-pairing-works.h2",
        paragraphKeys: [
          "blog.post.how-openclaw-pairing-works.p3",
          "blog.post.how-openclaw-pairing-works.p4",
        ],
      },
      {
        headingKey: "blog.post.how-openclaw-pairing-works.h3",
        paragraphKeys: [
          "blog.post.how-openclaw-pairing-works.p5",
          "blog.post.how-openclaw-pairing-works.p6",
        ],
      },
      {
        headingKey: "blog.post.how-openclaw-pairing-works.h4",
        paragraphKeys: [
          "blog.post.how-openclaw-pairing-works.p7",
          "blog.post.how-openclaw-pairing-works.p8",
        ],
      },
    ],
  },
  {
    slug: "why-i-use-vast-for-gpu",
    titleKey: "blog.post.why-i-use-vast-for-gpu.title",
    excerptKey: "blog.post.why-i-use-vast-for-gpu.excerpt",
    date: "2026-04-15",
    image: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?w=1200&q=80",
    tags: ["GPU", "Cost Optimization"],
    sections: [
      {
        headingKey: "blog.post.why-i-use-vast-for-gpu.h1",
        paragraphKeys: [
          "blog.post.why-i-use-vast-for-gpu.p1",
          "blog.post.why-i-use-vast-for-gpu.p2",
        ],
      },
      {
        headingKey: "blog.post.why-i-use-vast-for-gpu.h2",
        paragraphKeys: [
          "blog.post.why-i-use-vast-for-gpu.p3",
          "blog.post.why-i-use-vast-for-gpu.p4",
        ],
      },
      {
        headingKey: "blog.post.why-i-use-vast-for-gpu.h3",
        paragraphKeys: [
          "blog.post.why-i-use-vast-for-gpu.p5",
          "blog.post.why-i-use-vast-for-gpu.p6",
        ],
      },
    ],
  },
  {
    slug: "openclaw-state-management",
    titleKey: "blog.post.openclaw-state-management.title",
    excerptKey: "blog.post.openclaw-state-management.excerpt",
    date: "2026-04-22",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    tags: ["OpenClaw", "Architecture"],
    sections: [
      {
        headingKey: "blog.post.openclaw-state-management.h1",
        paragraphKeys: [
          "blog.post.openclaw-state-management.p1",
          "blog.post.openclaw-state-management.p2",
        ],
      },
      {
        headingKey: "blog.post.openclaw-state-management.h2",
        paragraphKeys: [
          "blog.post.openclaw-state-management.p3",
          "blog.post.openclaw-state-management.p4",
        ],
      },
      {
        headingKey: "blog.post.openclaw-state-management.h3",
        paragraphKeys: [
          "blog.post.openclaw-state-management.p5",
          "blog.post.openclaw-state-management.p6",
        ],
      },
    ],
  },
  {
    slug: "k3s-deploy-pipeline",
    titleKey: "blog.post.k3s-deploy-pipeline.title",
    excerptKey: "blog.post.k3s-deploy-pipeline.excerpt",
    date: "2026-04-18",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    tags: ["Infrastructure", "CI/CD"],
    sections: [
      {
        headingKey: "blog.post.k3s-deploy-pipeline.h1",
        paragraphKeys: [
          "blog.post.k3s-deploy-pipeline.p1",
          "blog.post.k3s-deploy-pipeline.p2",
        ],
      },
      {
        headingKey: "blog.post.k3s-deploy-pipeline.h2",
        paragraphKeys: [
          "blog.post.k3s-deploy-pipeline.p3",
          "blog.post.k3s-deploy-pipeline.p4",
        ],
      },
      {
        headingKey: "blog.post.k3s-deploy-pipeline.h3",
        paragraphKeys: [
          "blog.post.k3s-deploy-pipeline.p5",
          "blog.post.k3s-deploy-pipeline.p6",
        ],
      },
    ],
  },
  {
    slug: "cloudflared-tunnel-security",
    titleKey: "blog.post.cloudflared-tunnel-security.title",
    excerptKey: "blog.post.cloudflared-tunnel-security.excerpt",
    date: "2026-04-12",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    tags: ["Security", "Infrastructure"],
    sections: [
      {
        headingKey: "blog.post.cloudflared-tunnel-security.h1",
        paragraphKeys: [
          "blog.post.cloudflared-tunnel-security.p1",
          "blog.post.cloudflared-tunnel-security.p2",
        ],
      },
      {
        headingKey: "blog.post.cloudflared-tunnel-security.h2",
        paragraphKeys: [
          "blog.post.cloudflared-tunnel-security.p3",
          "blog.post.cloudflared-tunnel-security.p4",
        ],
      },
      {
        headingKey: "blog.post.cloudflared-tunnel-security.h3",
        paragraphKeys: [
          "blog.post.cloudflared-tunnel-security.p5",
          "blog.post.cloudflared-tunnel-security.p6",
        ],
      },
    ],
  },
];
