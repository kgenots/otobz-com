import HeaderNav from "@/components/HeaderNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-[#dedee5]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight text-[#101114]">OTOBZ</a>
        <HeaderNav />
      </div>
    </header>
  );
}
