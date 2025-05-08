import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-violet-600 to-indigo-600">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Transform Your Digital Experience
              </h1>
              <p className="max-w-[600px] text-white md:text-xl">
                Build stunning, high-performance websites with our modern Next.js solutions. Fast, responsive, and
                beautifully designed.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-gray-100">
                <Link href="#features">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="#contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-lg border border-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white/5 rounded-lg border border-white/10 shadow-2xl flex items-center justify-center">
                    <div className="text-white text-opacity-80 font-mono text-sm">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-2">next-app.tsx</div>
                      </div>
                      <div className="space-y-1 text-xs">
                        <div>
                          <span className="text-blue-400">import</span>{" "}
                          <span className="text-green-400">&#123; useState &#125;</span>{" "}
                          <span className="text-blue-400">from</span> <span className="text-yellow-400">'react'</span>;
                        </div>
                        <div></div>
                        <div>
                          <span className="text-blue-400">export default function</span>{" "}
                          <span className="text-purple-400">Home</span>() &#123;
                        </div>
                        <div>
                          &nbsp;&nbsp;<span className="text-blue-400">return</span> (
                        </div>
                        <div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-green-400">div</span>&gt;Next.js App&lt;/
                          <span className="text-green-400">div</span>&gt;
                        </div>
                        <div>&nbsp;&nbsp;);</div>
                        <div>&#125;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
