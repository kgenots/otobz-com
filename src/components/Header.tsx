import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">OTOBZ</div>
        <nav className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#agents" className="hover:text-white transition-colors">에이전트</a>
          <a href="#service" className="hover:text-white transition-colors">서비스</a>
          <a href="https://trip.otobz.com" target="_blank" className="text-sky-400 hover:text-sky-300 transition-colors">trip.otobz.com →</a>
        </nav>
      </div>
    </header>
  );
}
