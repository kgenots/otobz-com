# OTOBZ Ships

Append-only log of shipped work. Newest first. Each H2 is a date; each bullet is a commit or release.

Rules for bot and humans:
- Conventional commit prefixes only: `feat:`, `launch:`, `fix:`, `chore:`, `infra:`, `docs:`, `refactor:`
- `feat:` and `launch:` may carry human-readable summaries (ko + en) indented under the bullet.
- Other prefixes render as raw bullets without summaries.
- Do NOT edit historical entries. Append only.

## 2026-04-25
- `feat(openclaw): librarian + wiki-linter agent 등록` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: openclaw에 librarian + wiki-linter 에이전트 등록
  - summary_en: Added librarian + wiki-linter agents to openclaw

- `feat(wiki): LLM Wiki (Karpathy 패턴) 도입 — librarian agent + /wiki UI` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 라이브러리언 에이전트로 LLM 위키 제공
  - summary_en: LLM Wiki with librarian agent & /wiki UI

- `feat(chat): wiki context auto-injection toggle (📚 wiki ON/OFF)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 위키 컨텍스트 자동 주입을 토글할 수 있어요
  - summary_en: Wiki context auto-injection now toggleable

- `fix(ui): 모바일 반응형 개선 (chat·artifacts·usage·agents·wiki·concerns)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `fix(ui): TabsList 모바일 horizontal scroll (schedule + agents/[id])` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `fix(chat): agent 선택 inline buttons → dropdown Select (12+ agents 모바일 대응)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `refactor(ui): AgentSelect 공통 컴포넌트 (chat·artifacts·activity·schedule)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `fix(wiki): 상세 페이지 가독성 개선 (간격·헤더·코드 padding)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `feat(obot-dashboard): openclaw-shared mount RW (wiki/persona 직접 편집)` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: Wiki/Persona 직접 편집 가능
  - summary_en: Direct wiki/persona editing now available

- `feat(maint): K3s CronJob bridge-tmp-cleanup (30일+ jsonl 삭제)` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: 30일+ 오래된 bridge 임시 파일 정리
  - summary_en: Automated cleanup for 30+ day old bridge files

- `feat(editor): Monaco 기반 wiki·agent persona 직접 편집` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: Wiki·agent persona를 Monaco로 직접 편집
  - summary_en: Edit wiki and agent personas with Monaco editor

## 2026-04-24
- `feat: 메인 히어로 훅 레이어 + 도시 카드 최저가 배지` — [trip-otobz](https://github.com/kgenots/trip-otobz)
  - summary_ko: 메인 히어로에 훅 레이어와 도시 카드 최저가 배지 추가
  - summary_en: Hook layer in main hero and lowest price badges

- `fix: hero-summary를 flight_price_history 테이블로 전환` — [trip-otobz](https://github.com/kgenots/trip-otobz)

- `feat: AI 큐레이터 위젯 — 3문항 퀴즈 → 맞춤 추천 TOP3` — [trip-otobz](https://github.com/kgenots/trip-otobz)
  - summary_ko: AI 큐레이터가 3문항 퀴즈로 맞춤 TOP3 추천
  - summary_en: AI curator recommends top 3 personalized picks

- `feat: freshness 라벨 + "급락" 핫 배지` — [trip-otobz](https://github.com/kgenots/trip-otobz)
  - summary_ko: 신선도 라벨과 급락 핫 배지가 나갔어요
  - summary_en: Freshness labels and sharp-drop hot badges

- `feat: 인기 도시 카드 최저가순 정렬 + '저렴한 순' 라벨` — [trip-otobz](https://github.com/kgenots/trip-otobz)
  - summary_ko: 인기 도시를 저렴한 순으로 정렬
  - summary_en: Popular cities sorted cheapest first

- `feat: 날짜 선택 + 어필 CTA + localStorage 개인화` — [trip-otobz](https://github.com/kgenots/trip-otobz)
  - summary_ko: 날짜 선택, 어필 CTA, localStorage 개인화
  - summary_en: Date picker, appeal CTA, and local personalization

- `fix: 어필 CTA 404 — 실제 검색 URL 패턴으로 교정` — [trip-otobz](https://github.com/kgenots/trip-otobz)

- `fix: Agoda URL = city page 패턴 + '왕복' 라벨 명확화` — [trip-otobz](https://github.com/kgenots/trip-otobz)

- `feat: impact.com Skyscanner 어필 래퍼 env-gated 준비` — [trip-otobz](https://github.com/kgenots/trip-otobz)
  - summary_ko: impact.com Skyscanner 어필 env-gated 래퍼 준비
  - summary_en: Prepared env-gated impact.com Skyscanner wrapper

- `fix: curator 기간 hard filter + empty state 힌트` — [trip-otobz](https://github.com/kgenots/trip-otobz)

- `fix: TP marker 521399 → 721495 (정확한 affiliate ID)` — [trip-otobz](https://github.com/kgenots/trip-otobz)

- `fix: TP marker 521399 → 721495 하드코딩 잔여 일괄 교체` — [trip-otobz](https://github.com/kgenots/trip-otobz)

- `fix: TP passive tracker 스크립트 제거 — 403/404 spam 정리` — [trip-otobz](https://github.com/kgenots/trip-otobz)

- `feat(openclaw): add 5 role agents (marketer, pm, researcher, weekly-report, slack-summarizer)` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: openclaw에 역할별 에이전트 5개 추가
  - summary_en: Added 5 role agents to openclaw

- `fix(obot-dashboard): probe path /api/health (middleware가 / 차단해 502)` — [obot-infra](https://github.com/kgenots/obot-infra)

- `fix(obot-dashboard): openclaw-data/agents mount readOnly 해제 (CRUD 쓰기 허용)` — [obot-infra](https://github.com/kgenots/obot-infra)

- `feat(openclaw): bootstrap merge configmap framework + state agents` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: 병합 configmap 및 상태 에이전트 프레임워크 추가
  - summary_en: Added merge configmap framework and state agents

- `feat(auth): Cloudflare Access edge-trust + per-user session isolation` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 엣지 트러스트로 사용자 세션 격리
  - summary_en: Edge-trust auth with isolated user sessions

- `fix(auth): add /api/health endpoint for kubelet probes` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `feat(agents): /agents index + /activity 내 세션 필터` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 에이전트 색인과 활동 세션 필터 추가
  - summary_en: Agents index and activity session filtering

- `feat(agents): CRUD from dashboard (POST create, DELETE soft)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 대시보드에서 에이전트 생성·삭제 가능
  - summary_en: Create and delete agents directly from dashboard

- `docs(agents): 배너·confirm 문구 갱신 (영구 반영 확정)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `feat(obot-dashboard): mount claude-bridge-home for /usage aggregation` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: /usage 수집을 위해 claude-bridge-home 마운트
  - summary_en: Mounted claude-bridge-home for /usage aggregation

- `feat(ia): task-first 홈 + persona Tab + 사이드바 재편` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 홈이 task-first로 개편, persona Tab 추가, 사이드바 재편됨
  - summary_en: Task-first home with persona Tab and new sidebar

- `feat(artifacts): /artifacts 결과물 아카이브 + /concerns mine 필터` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 결과물 아카이브와 내 관심사 필터링
  - summary_en: Archive artifacts and filter owned concerns added

- `feat(usage): /usage Claude API 토큰·비용 집계 대시보드` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: /usage 대시보드로 Claude API 토큰·비용 관리
  - summary_en: Added /usage dashboard for Claude API token costs

- `fix(data): dedup 같은 sessionId 중복 반환 (cron job level + run level)` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

- `refactor(ui): /pnl 제거 + /usage 로 통합` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)

## 2026-04-23
- `launch: otobz.com live ships log + halo seeding plan` — [otobz-com](https://github.com/kgenots/otobz-com)
  - summary_ko: otobz.com에 쉬핑 로그 페이지 공개. halo 브랜드 시작점.
  - summary_en: Public ships log live on otobz.com. Halo-brand seeding begins.

- `launch: ship-append-sweep CronJob — halo feedback loop` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: ship-append-sweep CronJob 할로 피드백 루프 시작
  - summary_en: Launched ship-append-sweep CronJob halo feedback

- `refactor: rename middleware.ts → proxy.ts (Next 16 convention)` — [otobz-com](https://github.com/kgenots/otobz-com)

- `fix(ship-append-cron): SSH auth + npm devDeps install in pod` — [obot-infra](https://github.com/kgenots/obot-infra)

## 2026-04-19
- `launch: obot-dashboard task queue + agent heartbeat pickup` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 에이전트가 태스크를 들고 실행하는 큐 시스템 라이브.
  - summary_en: Task queue where agents pick up and execute work is live.

## 2026-04-17
- `launch: control tower phase 4 — unified P&L dashboard` — [obot-dashboard](https://github.com/kgenots/obot-dashboard)
  - summary_ko: 수익·비용 한눈에 보는 대시보드. 아침에 한 숫자.
  - summary_en: Revenue and cost in one view. One number in the morning.

## 2026-04-16
- `launch: AI agent control tower v1` — [obot-infra](https://github.com/kgenots/obot-infra)
  - summary_ko: 에이전트 기반 자율 수익 시스템 관제탑 첫 버전 가동.
  - summary_en: First version of the agent-run autonomous income control tower is running.
