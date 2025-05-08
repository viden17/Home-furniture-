import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const inspirations = [
  {
    title: "Minimalist Living",
    description: "Clean lines, neutral colors, and functional furniture for a clutter-free lifestyle.",
    image: "/placeholder.svg?height=600&width=800&text=Minimalist+Interior",
    link: "/inspiration/minimalist",
  },
  {
    title: "Scandinavian Style",
    description: "Light, airy spaces with natural materials and simple, functional designs.",
    image: "/placeholder.svg?height=600&width=800&text=Scandinavian+Interior",
    link: "/inspiration/scandinavian",
  },
  {
    title: "Industrial Chic",
    description: "Raw materials, exposed elements, and vintage-inspired pieces for an urban feel.",
    image: "/placeholder.svg?height=600&width=800&text=Industrial+Interior",
    link: "/inspiration/industrial",
  },
]

export default function DesignInspiration() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Design Inspiration</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore curated collections and design ideas to transform your space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {inspirations.map((inspiration, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={inspiration.image || "/placeholder.svg"}
                  alt={inspiration.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{inspiration.title}</h3>
                <p className="text-gray-300 mb-4">{inspiration.description}</p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href={inspiration.link}>Explore Ideas</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
            <Link href="/inspiration">View All Design Ideas</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
