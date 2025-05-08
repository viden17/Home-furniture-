import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-violet-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-white/80 md:text-xl">
              Join thousands of satisfied customers building amazing websites with our Next.js solutions.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
              <Link href="#features">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="#contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
