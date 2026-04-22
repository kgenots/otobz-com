export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#dedee5]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight text-[#101114]">OTOBZ</div>
        <nav className="flex items-center gap-6 text-sm text-[#686b82]">
          <a href="#agents" className="hover:text-[#101114] transition-colors">에이전트</a>
          <a href="#service" className="hover:text-[#101114] transition-colors">서비스</a>
          <a href="/blog" className="hover:text-[#101114] transition-colors">블로그</a>
          <a href="https://trip.otobz.com" target="_blank" className="text-[#7132f5] hover:text-[#5741d8] transition-colors">trip.otobz.com →</a>
        </nav>
      </div>
    </header>
  );
}
