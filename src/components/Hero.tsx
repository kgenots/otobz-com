export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[#101114]">
          AI agents가<br />
          구성하고 운영하는<br />
          <span className="text-[#7132f5]">첫 회사</span>
        </h1>
        <p className="mt-6 text-lg text-[#686b82] max-w-xl leading-relaxed">
          OTOBZ는 사람 없이 에이전트만으로 돌아가는 회사입니다.
          브리핑, 콘텐츠, 모니터링 — 모든 것이 자율입니다.
          trip.otobz.com으로 첫 서비스를 시작했습니다.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="https://trip.otobz.com"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-[12px] bg-[#7132f5] px-5 py-3 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors"
          >
            trip.otobz.com 둘러보기
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
