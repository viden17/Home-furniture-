"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Modern Furniture for Modern Living",
      description:
        "Explore our collection of premium furniture with immersive 3D previews",
      image: "/images/moddern.jpg",
      cta: "Shop Now",
      link: "/products",
    },
    {
      title: "Design Your Perfect Space",
      description: "Visualize our furniture in your home with our 3D models",
      image: "/images/moddern2.jpg",
      cta: "Explore 3D Models",
      link: "/products",
    },
    {
      title: "New Collection: Scandinavian Inspired",
      description: "Minimalist designs with maximum comfort",
      image: "/images/moddern3.jpg",
      cta: "View Collection",
      link: "/products",
    },
  ];

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: currentSlide === index ? 0 : 50,
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: currentSlide === index ? 0 : 50,
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: currentSlide === index ? 0 : 50,
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  asChild
                  className="bg-white text-black hover:bg-gray-200"
                  size="lg"
                >
                  <Link href={slide.link}>
                    {slide.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
