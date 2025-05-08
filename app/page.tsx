import HeroSection from "@/components/home/hero-section"
import Newsletter from "@/components/home/newsletter"
import FurnitureCanvas from "@/components/canvas/furniture-canvas"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FurnitureCanvas />
      <Newsletter />
    </main>
  )
}
