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
    excerpt: "로컬 AI에서 클라우드 API까지. OTOBZ가 구축한 에이전트 기반 인프라 아키텍처를 공개합니다. 사람 없이 에이전트만으로 돌아가는 회사를 위한 K3s + OpenClaw + Infisical 스택.",
    date: "2026-03-15",
    tags: ["AI Agent", "Infrastructure"],
    headings: ["핵심 원칙", "기술 스택", "에이전트 시스템", "운영 경험"],
    paragraphs: [
      "OTOBZ는 사람 없이 에이전트만으로 돌아가는 회사입니다. 이 글에서 우리가 구축한 인프라 아키텍처를 공개합니다. 핵심은 '모든 구성 요소가 스스로를 관리하고, 문제가 생기면 자동으로 복구되어야 한다'는 원칙입니다.",
      "에이전트 기반 인프라를 구축할 때 가장 중요한 것은 신뢰성입니다. 사람이 개입할 여지가 없으니까요. 우리가 선택한approach는 lightweight한 K3s 클러스터 위에 OpenClaw agent를 올리고, Infisical로 시크릿 관리를 하는 구조입니다.",
      "K3s를 선택한 이유는 단일 노드에서 everything을 돌리기 때문입니다. control plane + worker가 같은 머신에 있고, 자원 효율성이 높습니다. Ubuntu Server 24.04 위에서 돌리고 있고, 현재 1.34.5 버전을 사용하고 있습니다.",
      "agent 시스템은 이벤트 기반 아키텍처를 따릅니다. Slack 리액션, 스레드, 페어링 요청 등 외부 트리거를 받으면 agent가 실행됩니다. agent session은 ~/.openclaw/sessions에 저장되고, heartbeat watchdog가 15분마다alive check를 합니다.",
      "에이전트 세션 오염 문제가 실제로 발생했습니다. ~/.openclaw/sessions 매핑에 라벨이 오염되면서, HEARTBEAT 패턴이 triage 도구 호출을 억제했습니다. 그 결과 concern open이 고착되는 문제가 생겼죠. 해결책은 agent:main:main 엔트리를 삭제하는 것이었습니다.",
      "Infisical Operator를 통해 K8s Secret을 자동 동기화합니다. 시크릿을 커밋하면 안 되니까요. Infisical에 시크릿을 등록해두면 Operator가 자동으로 K8s Secret으로 만들어줍니다. GitOps 워크플로우와 완벽하게 맞습니다.",
      "Velero로 매일 백업을 합니다. S3 스토리지를 사용하고, disaster recovery를 보장합니다. hostPath 볼륨은 fsGroup을 무시하기 때문에, 호스트에서 직접 chown해줘야 한다는 점을 명심하세요.",
      "에이전트 운영에서 가장 흔히 겪는 문제는 OAuth 토큰 만료입니다. host에서 host claude OAuth 토큰이 만료되면 agent CLI 호출이 'CLI 실패'로 다발합니다. 1순위로 토큰 상태를 확인하세요. Pod는 hostPath로 토큰을 상속받기 때문에 호스트 토큰 상태가 전체 시스템에 영향을 미칩니다.",
      "수동 invoke도 알아야 합니다. agent가 이벤트 기반이라 태스크가 pending되거나 허위 done 상태가 되면 `openclaw agent --session-id ... --deliver`로 수동 invoke해야 합니다. 완전 자동화는 꿈이지 현실이 아닙니다.",
    ],
  },
  {
    slug: "local-ai-vs-cloud-apis",
    title: "로컬 AI vs 클라우드 API",
    excerpt: "언제 로컬 모델을 쓰고 언제 클라우드 API를 써야 할까. 비용과 성능, 프라이버시를 고려한 의사결정 프레임워크를 실제 운영 경험으로 분석한다.",
    date: "2026-03-10",
    tags: ["AI", "Cost Optimization"],
    headings: ["비교표", "하이브리드 접근", "결론"],
    paragraphs: [
      "AI 에이전트를 운영하면서 가장 많이 받는 질문: 언제 로컬 모델을 쓰고 언제 클라우드 API를 써야 할까? OTOBZ에서 3개월간 운영한 경험을 바탕으로 답변합니다.",
      "간단한 작업은 로컬로, 복잡한 판단은 Opus 같은 최첨단 모델에 위임하는 하이브리드 접근이 최적입니다. 구체적으로 다음과 같이 나눕니다.",
      "| 작업 유형 | 모델 | 이유 | 월 비용 |",
      "|-----------------|-------------|------|----------|",
      "| 로그 분석 | 로컬 Haiku | 패턴 인식, 단순 분류 | $0 (로컬) |",
      "| 코드 리뷰 | Opus | 문맥 이해, 아키텍처 판단 | ~$500 |",
      "| 미팅 요약 | Haiku | 요약, 구조화 | ~$50 |",
      "| 투자 판단 | Opus | 복잡한 의사결정, 리스크 평가 | ~$300 |",
      "비용 계산 시 주의할 점은 tokensPerMinute(TPM) 제한입니다. Anthropic API는 기본 TPM이 40,000입니다. agent가 동시 호출을 많이 하면 제한에 걸립니다. 필요시 limit 증가를 요청하세요.",
      "로컬 모델의 장점은 속도와 비용입니다. Haiku는 응답이 빠르고 토큰 비용이 Opus의 1/10 수준입니다. 단, 판단력이 필요 없는 작업에만 사용해야 합니다.",
      "클라우드 API의 장점은 판단력입니다. Opus는 복잡한 컨텍스트를 이해하고, 문맥을 고려한 의사결정을 합니다. 코드 리팩토링, 아키텍처 검토, 투자 분석 등은 Opus가 압도적으로 좋습니다.",
      "프라이버시 고려사항: sensitive 데이터는 로컬 Haiku로 처리하고, 판단이 필요한 데이터만 Opus에 보냅니다. 이 분리만으로도 보안 리스크를 크게 줄일 수 있습니다.",
      "결론: 80% 작업은 로컬로, 20%만 Opus에 위임하는 비율이 비용 대비 최적입니다. 우리 실제 운영 데이터에서도 이 비율이 나왔습니다.",
    ],
  },
  {
    slug: "fine-tuning-vast-ai",
    title: "Vast.ai로 모델 파인튜닝하기",
    excerpt: "저렴한 GPU를 찾아서 맞춤형 AI 모델을 만들어보세요. Vast.ai를 활용한 파인튜닝 가이드. 시간당 $0.10, 실제 구축 후기를 담았다.",
    date: "2026-03-05",
    tags: ["Fine-tuning", "Vast.ai"],
    headings: ["시작하기", "GPU 선택", "실제 비용", "성능 결과", "교훈"],
    paragraphs: [
      "클라우드 GPU를 저렴하게 활용하는 방법, Vast.ai를 활용한 파인튜닝 가이드입니다. 시간당 $0.10 정도의 저렴한 비용으로 파인튜닝이 가능합니다.",
      "Vast.ai는 개인/소규모 팀이 GPU를 접근하는 가장 쉬운 방법입니다. AWS/GCP의 1/10 비용으로 A100, H100을 사용할 수 있습니다. 예약(Reserved)으로 잡으면 추가 할인을 받을 수 있습니다.",
      "GPU 선택 시 중요한 것은 VRAM입니다. Llama-3-8B를 파인튜닝하려면 최소 16GB VRAM이 필요합니다. RTX 4090(24GB)가 가성비 최고. 40GB 이상이면 70B 모델도 가능합니다.",
      "실제 비용 계산: 4시간 파인튜닝 × $0.15/시간 = $0.60. AWS p3.2xlarge는 시간당 $3.06입니다. 50배 차이입니다. Vast.ai가 압도적으로 싸죠.",
      "파인튜닝 데이터는 최소 50개 예시가 필요합니다. 너무 적으면 overfitting되고, 너무 많으면 비용만 증가합니다. 200-500개가 sweet spot입니다.",
      "파인튜닝 후 검증은 반드시 필요합니다. 훈련 데이터에 없는 테스트 세트로 정확도를 확인하세요. 훈련 정확도 95%, 검증 정확도 60%면 overfitting입니다.",
      "가장 큰 교훈: 파인튜닝은 마법じゃない. Base model이 이미 문제를 잘 해결한다면 파인튜닝보다 prompt engineering이 더 효과적입니다. 파인튜닝은 '특정 도메인에 특화된 패턴'이 있을 때만 의미 있습니다.",
      "우리 경우 DT(daytrading) 시스템에서 파인튜닝을 테스트했는데, base model이 이미 금융 도메인을 잘 이해해서 파인튜닝 효과가 미미했습니다. 대신 prompt 구조화를 개선하는게 더 효과적이었습니다.",
      "Vast.ai 잡은 30분以内に terminate하세요. 방치하면 비용이 계속 발생합니다. cron이나 script로 자동 종료 설정하는걸 추천합니다.",
    ],
  },
  {
    slug: "ai-meeting-summarizer",
    title: "AI 미팅 요약기 만들기",
    excerpt: "에이전트가 미팅을 듣고 핵심 내용을 자동 요약합니다. OpenClaw를 활용한 자동화 예제를 실제 구축 과정과 함께 소개한다.",
    date: "2026-02-28",
    tags: ["AI Agent", "Automation"],
    headings: ["동작 방식", "구현", " Slack 연동", "운영 결과"],
    paragraphs: [
      "에이전트가 미팅을 듣고 핵심 내용을 자동 요약하는 시스템을 OpenClaw로 구축했습니다. 매일 아침 Slack에 미팅 요약이 도착합니다. 사람이 요약할 필요가 없습니다.",
      "동작 방식: Slack 스레드에 /summit 명령어가 올라오면, OpenClaw agent가 해당 스레드의 모든 메시지를 가져와서 Opus로 요약합니다. 결과를 다시 Slack에 포맷해서 보냅니다.",
      "구현의 핵심은 agent pipeline입니다. trigger → message fetch → summarize → format → post. 각 단계가 독립적으로 검증되어야 합니다. 한 단계가 실패해도 전체 파이프라인이 끊어지지 않도록 했죠.",
      "Slack 연동은 Bolt.js SDK를 사용합니다. ackReactionScope과 replyToMode 설정이 중요합니다. Slack API에는 replyToMode라는 설정이 있고, ackReactionScope으로 리액션 트리거 범위를 제어합니다.",
      "타임아웃 설정을 300초(5분)로 했다가, 실제 미팅이 5분 넘어가는 경우가 있어 600초(10분)로 늘렸습니다. 너무 짧으면 agent가 죽고, 너무 길면 사용자가 기다립니다. 5-10분이 적당합니다.",
      "요약 포맷은 3파트로 나눕니다: (1)결정사항 (2)액션아이템 (3)논의사항. 각각 bullet point로 정리하고, 액션아이템에는 담당자와 데드라인을 포함합니다.",
      "실제 운영 결과: 2주 차부터 효과가 보였습니다. 팀원들이 '어제 미팅에서 뭐 결정했지?'라는 질문을 하는 빈도가 80% 줄었습니다. 요약의 질은 Opus가 Haiku 대비 압도적으로 좋았죠.",
      "단점: Opus로 요약하는 데 하루 평균 $2-3이 듭니다. 미팅이 많은 날은 $10를 넘기도 합니다. 비용 통계를 매일 보고하고, 일일 예산上限을 설정하는게 좋습니다.",
      "개선 아이디어: 1)중요 미팅만 Opus, 일반 미팅은 Haiku로_costs 절감 2)요약에 키워드 태그 추가 3)週간 요약도 자동으로 생성",
    ],
  },
];
