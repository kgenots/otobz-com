import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import FirstService from "@/components/FirstService";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Agents />
      <FirstService />
      <BlogSection />
      <Footer />
    </main>
  );
}
