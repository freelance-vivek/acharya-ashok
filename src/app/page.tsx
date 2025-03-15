import FeaturedPoojaCard from "@/components/FeaturedPoojaCard"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Card from "@/components/Card"
import Marquee from "react-fast-marquee"

export default function Home() {
  return (
    <main className="min-h-screen  antialiased bg-grid-white/[0.02]">
      <Marquee className="movingTitle">
        contact us : 9981933791 / 9922180610{" "}
      </Marquee>
      <Hero />
      <FeaturedPoojaCard />
      <Card />
      <Footer />
    </main>
  )
}
