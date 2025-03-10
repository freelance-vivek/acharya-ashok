import FeaturedPoojaCard from "@/components/FeaturedPoojaCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen  antialiased bg-grid-white/[0.02]">
      <Hero />
      <FeaturedPoojaCard />
      <Card />
      <Footer />
    </main>
  );
}
