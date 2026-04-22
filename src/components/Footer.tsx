export default function Footer() {
  return (
    <footer className="border-t border-[#dedee5] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#686b82]">
        <div>OTOBZ · AI-First Company</div>
        <div className="flex gap-4">
          <a href="https://trip.otobz.com" target="_blank" className="hover:text-[#101114] transition-colors">trip</a>
          <a href="/blog" className="hover:text-[#101114] transition-colors">blog</a>
        </div>
      </div>
    </footer>
  );
}
