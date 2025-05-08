"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShoppingCart, Eye } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { products } from "@/data/products"

export default function FeaturedProducts() {
  const { addToCart } = useCart()
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const featuredProducts = products.filter((product) => product.featured).slice(0, 4)

  return (
    <section className="py-20 bg-navy-900/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Featured Collection</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-navy-900/70 max-w-2xl mx-auto">
            Discover our most popular pieces, crafted with exceptional attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Quick actions overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-navy-900/40 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex gap-2">
                    <Link href={`/products/${product.id}`}>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full bg-cream text-navy-900 hover:bg-cream/90"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </Link>
                    <Button
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-gold text-navy-900 hover:bg-gold/90"
                      size="sm"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-lg font-playfair">{product.name}</h3>
                <p className="text-navy-900/60 text-sm">{product.category}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-navy-900">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-navy-900/50 line-through text-sm">${product.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-navy-900 text-cream hover:bg-navy-800">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
