import { Zap, Smartphone, Layout, Shield } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-violet-100 px-3 py-1 text-sm text-violet-600">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides all the tools you need to build exceptional digital experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-violet-100 p-3">
              <Zap className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="text-center text-gray-500">
              Optimized for speed with server-side rendering and static generation.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-violet-100 p-3">
              <Smartphone className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold">Fully Responsive</h3>
            <p className="text-center text-gray-500">
              Looks great on any device, from mobile phones to desktop monitors.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-violet-100 p-3">
              <Layout className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold">Modern UI</h3>
            <p className="text-center text-gray-500">Beautiful, intuitive interfaces that enhance user experience.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-violet-100 p-3">
              <Shield className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold">Secure</h3>
            <p className="text-center text-gray-500">Built with security best practices to protect your data.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
