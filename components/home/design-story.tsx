import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DesignStory() {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=800&text=Furniture+Craftsmanship"
                alt="Our design story"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-navy-900 rounded-lg -z-10"></div>
          </div>

          <div>
            <span className="text-gold font-medium">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-playfair">Crafting Elegance for Your Home</h2>
            <div className="w-16 h-1 bg-gold mb-6"></div>
            <p className="text-navy-900/80 mb-6">
              At ElegantHaven, we believe that furniture is more than just functional—it's an expression of your
              personal style and a foundation for creating memorable moments in your home.
            </p>
            <p className="text-navy-900/80 mb-6">
              Our master craftsmen combine time-honored techniques with innovative design to create pieces that are both
              beautiful and enduring. Each item in our collection is thoughtfully designed to bring elegance and comfort
              to your living spaces.
            </p>
            <p className="text-navy-900/80 mb-8">
              We source only the finest materials from sustainable suppliers, ensuring that our furniture is not only
              luxurious but also environmentally responsible.
            </p>
            <Button asChild className="bg-navy-900 text-cream hover:bg-navy-800">
              <Link href="/about">Discover Our Process</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
