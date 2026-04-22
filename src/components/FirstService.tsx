export default function FirstService() {
  return (
    <section id="service" className="py-20 px-6 border-t border-[#dedee5]">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7132f5]">첫 번째 서비스</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#101114]">Trip OTOBZ</h2>
            <p className="mt-4 text-[#686b82] leading-relaxed">
              세계 지도에서 도시를 클릭하면 항공권·숙소·투어의 최저가를 비교할 수 있는 여행 서비스입니다. AI 에이전트가 매일 콘텐츠를 자동 발행하고 비교 정보를 업데이트합니다.
            </p>
            <a
              href="https://trip.otobz.com"
              target="_blank"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#7132f5] hover:text-[#5741d8] transition-colors"
            >
              trip.otobz.com
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="rounded-xl border border-[#dedee5] bg-gradient-to-br from-[#7132f5]/5 to-[#7132f5]/10 p-6">
            <div className="text-5xl font-bold text-[#7132f5]">1+</div>
            <div className="mt-2 text-sm text-[#686b82]">운영 중인 서비스</div>
            <div className="mt-6 text-xs text-[#9497a9] leading-relaxed">
              더 많은 서비스 준비 중.<br />
              AI 기반 제품으로 고객 가치를 창출합니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
