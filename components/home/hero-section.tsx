"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Timeless Elegance for Modern Living",
      description:
        "Discover furniture that transforms your space into a haven of comfort and style",
      image: "/images/moddern.jpg",
      cta: "Explore Collection",
      link: "/products",
    },
    {
      title: "Craftsmanship in Every Detail",
      description:
        "Experience the perfect blend of artistry and functionality in our premium furniture",
      image: "/images/moddern2.jpg",
      cta: "View Craftsmanship",
      link: "/about",
    },
    {
      title: "Design Your Perfect Space",
      description:
        "Visualize our furniture in your home with immersive 3D previews",
      image: "/images/moddern3.jpg",
      cta: "Try 3D Preview",
      link: "/products",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-cream">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-2 inline-block"
              >
                <span className="bg-gold px-3 py-1 text-sm text-navy-900 font-medium rounded-full">
                  New Collection
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 font-playfair"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-lg text-navy-900/80 mb-8 max-w-md"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex space-x-4"
              >
                <Button
                  asChild
                  className="bg-navy-900 text-cream hover:bg-navy-800"
                  size="lg"
                >
                  <Link href={slides[currentSlide].link}>
                    {slides[currentSlide].cta}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-navy-900 text-navy-900 hover:bg-navy-900/10"
                >
                  <Link href="/collections">View All Collections</Link>
                </Button>
              </motion.div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-navy-900/5" />
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt={slides[currentSlide].title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute inset-0 lg:hidden -z-10">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              priority
              className="object-cover object-center opacity-15"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-gold w-10"
                : "bg-navy-900/20 hover:bg-navy-900/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
