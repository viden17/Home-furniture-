"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this to your API
    console.log("Subscribing email:", email)
    setIsSubmitted(true)
    setEmail("")
    // Reset the submitted state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-gold/20 rounded-full mb-6">
            <Mail className="h-6 w-6 text-gold" />
          </div>
          <h2 className="text-3xl font-bold mb-4 font-playfair">Join Our Community</h2>
          <p className="text-navy-900/70 mb-8">
            Subscribe to our newsletter for exclusive offers, design inspiration, and first access to new collections.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white border-gray-200 text-navy-900 focus:border-gold"
            />
            <Button type="submit" className="bg-navy-900 text-cream hover:bg-navy-800" disabled={isSubmitted}>
              {isSubmitted ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Subscribed
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-navy-900/50 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}
