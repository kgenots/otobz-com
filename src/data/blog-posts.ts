export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
  headings?: string[];
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "ai-agent-infrastructure",
    title: "AI 에이전트 인프라 구축하기",
    excerpt: "로컬 AI에서 클라우드 API까지. OTOBZ가 구축한 에이전트 기반 인프라 아키텍처를 공개합니다.",
    date: "2026-03-15",
    tags: ["AI Agent", "Infrastructure"],
    headings: ["핵심 원칙", "기술 스택", "학습할 것"],
    paragraphs: [
      "OTOBZ는 사람 없이 에이전트만으로 돌아가는 회사입니다. 이 글에서 우리가 구축한 인프라 아키텍처를 공개합니다.",
      "에이전트 기반 인프라를 구축할 때 중요한 건 신뢰성입니다. 모든 구성 요소가 스스로를 관리하고, 문제가 생기면 자동으로 복구되어야 합니다.",
    ],
  },
  {
    slug: "local-ai-vs-cloud-apis",
    title: "로컬 AI vs 클라우드 API",
    excerpt: "언제 로컬 모델을 쓰고 언제 클라우드 API를 써야 할까. 비용과 성능, 프라이버시를 고려한 의사결정 프레임워크.",
    date: "2026-03-10",
    tags: ["AI", "Cost Optimization"],
    headings: ["비교표", "결론"],
    paragraphs: [
      "AI 에이전트를 운영하면서 가장 많이 받는 질문: 언제 로컬 모델을 쓰고 언제 클라우드 API를 써야 할까?",
      "간단한 작업은 로컬로, 복잡한 판단은 Opus 같은 최첨단 모델에 위임하는 하이브리드 접근이 최적입니다.",
    ],
  },
  {
    slug: "fine-tuning-vast-ai",
    title: "Vast.ai로 모델 파인튜닝하기",
    excerpt: "저렴한 GPU를 찾아서 맞춤형 AI 모델을 만들어보세요. Vast.ai를 활용한 파인튜닝 가이드.",
    date: "2026-03-05",
    tags: ["Fine-tuning", "Vast.ai"],
    headings: ["시작하기", "비용"],
    paragraphs: [
      "클라우드 GPU를 저렴하게 활용하는 방법, Vast.ai를 활용한 파인튜닝 가이드입니다.",
      "시간당 $0.10 정도의 저렴한 비용으로 파인튜닝이 가능합니다.",
    ],
  },
  {
    slug: "ai-meeting-summarizer",
    title: "AI 미팅 요약기 만들기",
    excerpt: "에이전트가 미팅을 듣고 핵심 내용을 자동 요약합니다. OpenClaw를 활용한 자동화 예제.",
    date: "2026-02-28",
    tags: ["AI Agent", "Automation"],
    headings: ["동작 방식", "결과"],
    paragraphs: [
      "에이전트가 미팅을 듣고 핵심 내용을 자동 요약하는 시스템을 OpenClaw로 구축했습니다.",
      "매일 아침 Slack에 미팅 요약이 도착합니다. 사람이 요약할 필요가 없습니다.",
    ],
  },
];
