import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Living Room",
    image: "/placeholder.svg?height=600&width=800&text=Living+Room+Furniture",
    description: "Create a welcoming space with our stylish living room furniture",
    link: "/categories/living-room",
  },
  {
    name: "Bedroom",
    image: "/placeholder.svg?height=600&width=800&text=Bedroom+Furniture",
    description: "Transform your bedroom into a peaceful retreat",
    link: "/categories/bedroom",
  },
  {
    name: "Dining",
    image: "/placeholder.svg?height=600&width=800&text=Dining+Room+Furniture",
    description: "Gather around beautiful dining furniture for memorable meals",
    link: "/categories/dining",
  },
  {
    name: "Office",
    image: "/placeholder.svg?height=600&width=800&text=Office+Furniture",
    description: "Enhance productivity with ergonomic office solutions",
    link: "/categories/office",
  },
]

export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated collections of premium furniture for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900 transition-all hover:border-gray-700"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {category.description}
                </p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                  <Link href={category.link}>Explore {category.name}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
