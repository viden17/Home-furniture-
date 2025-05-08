import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Raleway } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { ThemeProvider } from "@/context/theme-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" })

export const metadata: Metadata = {
  title: "ElegantHaven - Premium Furniture",
  description: "Discover timeless furniture pieces for your elegant living spaces",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${raleway.variable} font-sans bg-cream text-navy-900`}>
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
