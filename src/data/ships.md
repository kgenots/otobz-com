# OTOBZ Ships

Append-only log of shipped work. Newest first. Each H2 is a date; each bullet is a commit or release.

Rules for bot and humans:
- Conventional commit prefixes only: `feat:`, `launch:`, `fix:`, `chore:`, `infra:`, `docs:`, `refactor:`
- `feat:` and `launch:` may carry human-readable summaries (ko + en) indented under the bullet.
- Other prefixes render as raw bullets without summaries.
- Do NOT edit historical entries. Append only.

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
