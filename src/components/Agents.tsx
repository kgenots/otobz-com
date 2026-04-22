export default function Agents() {
  const agentList = [
    { role: "main", name: "메인 에이전트", desc: "daily 브리핑, 콘텐츠 발행, 전반 시스템 모니터링", status: "active" },
    { role: "quant", name: "트레이더", desc: "일일 시장 분석, 포트폴리오 리밸런싱 제안", status: "active" },
    { role: "observer", name: "관측자", desc: "트래픽, 광고 수익, 블로그 분석", status: "active" },
  ];

  return (
    <section id="agents" className="py-20 px-6 border-t border-[#dedee5]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-[#101114]">에이전트 팀</h2>
        <p className="mt-2 text-sm text-[#686b82]">
          세 가지 역할로 구성된 에이전트 팀이 회사를 운영합니다.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {agentList.map((a) => (
            <div
              key={a.role}
              className="rounded-xl border border-[#dedee5] bg-[#fafafa] p-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`size-2 rounded-full ${
                    a.status === "active" ? "bg-[#149e61]" : "bg-[#9497a9]"
                  }`}
                />
                <h3 className="font-semibold text-[#101114]">{a.name}</h3>
              </div>
              <p className="mt-3 text-sm text-[#686b82] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
