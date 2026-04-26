export const TALLY_DASHBOARD_FORM_ID = "PLACEHOLDER_DASHBOARD";
export const TALLY_OTLDR_FORM_ID = "PLACEHOLDER_OTLDR";

export type SaasProduct = {
  slug: "dashboard" | "otldr";
  title: string;
  subtitle: string;
  description: string;
  formId: string;
};

export const saasProducts: Record<string, SaasProduct> = {
  dashboard: {
    slug: "dashboard",
    title: "otobz-dashboard",
    subtitle: "agent 운영 모니터링 SaaS",
    description: "단일테넌트 → 멀티테넌트 외판 대기 중",
    formId: TALLY_DASHBOARD_FORM_ID,
  },
  otldr: {
    slug: "otldr",
    title: "otldr",
    subtitle: "회의 STT + AI 요약 SaaS",
    description: "베타 외판 waitlist",
    formId: TALLY_OTLDR_FORM_ID,
  },
};

export function tallyEmbedSrc(formId: string): string {
  return `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=0&transparentBackground=1&dynamicHeight=1`;
}

export function isPlaceholderFormId(formId: string): boolean {
  return formId.startsWith("PLACEHOLDER_");
}

export function getSaasProduct(slug: string): SaasProduct | undefined {
  return saasProducts[slug];
}
