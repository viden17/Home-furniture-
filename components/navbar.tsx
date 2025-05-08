"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useCart } from "@/context/cart-context";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200 bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-cream/50 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold font-playfair">
              ELEGANT<span className="text-gold">HAVEN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-gold relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium hover:text-gold relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium hover:text-gold relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-900/50" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 bg-cream border-gray-200 focus:border-gold"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <User className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-medium text-navy-900"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-gray-200 bg-cream"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium hover:text-gold">
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-gold"
              >
                Products
              </Link>

              <Link
                href="/about"
                className="text-sm font-medium hover:text-gold"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-900/50" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-8 bg-cream border-gray-200"
                />
              </div>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-medium text-navy-900">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
