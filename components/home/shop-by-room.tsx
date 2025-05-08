"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

const rooms = [
  {
    name: "Living Room",
    image: "/placeholder.svg?height=800&width=1200&text=Living+Room+Setup",
    description:
      "Create a welcoming living space with our modern sofas, coffee tables, and accent chairs. Our 3D preview lets you visualize how each piece will look in your home.",
    products: [
      { name: "Modern Sofa", price: "$1,299.99", image: "/placeholder.svg?height=300&width=300&text=Modern+Sofa" },
      {
        name: "Minimalist Coffee Table",
        price: "$499.99",
        image: "/placeholder.svg?height=300&width=300&text=Coffee+Table",
      },
      { name: "Accent Armchair", price: "$449.99", image: "/placeholder.svg?height=300&width=300&text=Armchair" },
    ],
  },
  {
    name: "Bedroom",
    image: "/placeholder.svg?height=800&width=1200&text=Bedroom+Setup",
    description:
      "Transform your bedroom into a peaceful retreat with our platform beds, nightstands, and dressers. Experience the comfort and style through our interactive 3D models.",
    products: [
      { name: "Platform Bed Frame", price: "$799.99", image: "/placeholder.svg?height=300&width=300&text=Bed+Frame" },
      { name: "Modern Nightstand", price: "$349.99", image: "/placeholder.svg?height=300&width=300&text=Nightstand" },
      { name: "Minimalist Dresser", price: "$899.99", image: "/placeholder.svg?height=300&width=300&text=Dresser" },
    ],
  },
  {
    name: "Dining",
    image: "/placeholder.svg?height=800&width=1200&text=Dining+Room+Setup",
    description:
      "Gather around beautiful dining furniture for memorable meals. Our dining tables and chairs combine style with functionality, all viewable in immersive 3D.",
    products: [
      {
        name: "Scandinavian Dining Table",
        price: "$899.99",
        image: "/placeholder.svg?height=300&width=300&text=Dining+Table",
      },
      {
        name: "Modern Dining Chair (Set of 2)",
        price: "$399.99",
        image: "/placeholder.svg?height=300&width=300&text=Dining+Chairs",
      },
      {
        name: "Contemporary Sideboard",
        price: "$749.99",
        image: "/placeholder.svg?height=300&width=300&text=Sideboard",
      },
    ],
  },
  {
    name: "Office",
    image: "/placeholder.svg?height=800&width=1200&text=Home+Office+Setup",
    description:
      "Enhance productivity with our ergonomic office solutions. From standing desks to comfortable chairs, see how our furniture can transform your workspace with 3D visualization.",
    products: [
      {
        name: "Adjustable Standing Desk",
        price: "$599.99",
        image: "/placeholder.svg?height=300&width=300&text=Standing+Desk",
      },
      {
        name: "Ergonomic Office Chair",
        price: "$349.99",
        image: "/placeholder.svg?height=300&width=300&text=Office+Chair",
      },
      { name: "Modern Bookshelf", price: "$299.99", image: "/placeholder.svg?height=300&width=300&text=Bookshelf" },
    ],
  },
]

export default function ShopByRoom() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Room</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore complete furniture solutions for every room in your home, with immersive 3D previews
          </p>
        </div>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-900 p-1 max-w-md mx-auto mb-12">
            {rooms.map((room) => (
              <Tab
                key={room.name}
                className={({ selected }) =>
                  cn(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-gray-900 focus:outline-none focus:ring-2",
                    selected ? "bg-white text-gray-900 shadow" : "text-gray-400 hover:bg-white/[0.12] hover:text-white",
                  )
                }
              >
                {room.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {rooms.map((room, idx) => (
              <Tab.Panel key={idx} className="rounded-xl bg-black p-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      width={1200}
                      height={800}
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-white">{room.name}</h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-6">{room.description}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {room.products.map((product, index) => (
                        <div key={index} className="text-center">
                          <div className="bg-gray-900 rounded-lg p-4 mb-2">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              width={300}
                              height={300}
                              className="w-full h-32 object-contain"
                            />
                          </div>
                          <h4 className="text-sm font-medium">{product.name}</h4>
                          <p className="text-sm text-gray-400">{product.price}</p>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-white text-black hover:bg-gray-200">
                      <Link href={`/categories/${room.name.toLowerCase().replace(" ", "-")}`}>
                        Shop {room.name} Collection
                      </Link>
                    </Button>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
