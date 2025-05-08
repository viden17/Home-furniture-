import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-playfair">
              Our Story
            </h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-cream/80 text-lg mb-8">
              Crafting exceptional furniture experiences since 2010. Discover
              the passion and craftsmanship behind ElegantHaven.
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/moddern4.jpg"
                  alt="Our workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-navy-900 rounded-lg -z-10"></div>
            </div>

            <div>
              <span className="text-gold font-medium">Our History</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-playfair">
                From Passion to Excellence
              </h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-navy-900/80 mb-6">
                ElegantHaven was founded in 2010 by a group of passionate
                furniture designers and craftsmen who shared a vision: to create
                furniture that combines timeless elegance with modern
                functionality.
              </p>
              <p className="text-navy-900/80 mb-6">
                What began as a small workshop in a historic district has grown
                into a renowned furniture brand, but our commitment to quality
                and craftsmanship remains unchanged. Each piece in our
                collection is still thoughtfully designed and meticulously
                crafted to bring beauty and comfort to your home.
              </p>
              <p className="text-navy-900/80 mb-6">
                In 2020, we pioneered the use of 3D visualization technology in
                furniture retail, allowing our customers to experience our
                pieces in their space before making a purchase—a testament to
                our dedication to innovation and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-navy-900/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-gold font-medium">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 font-playfair">
              What Guides Us
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-navy-900/80">
              At ElegantHaven, our values are the foundation of everything we
              do. They guide our decisions, shape our culture, and define our
              relationship with our customers and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold h-8 w-8"
                >
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="M6 12h12" />
                  <path d="M12 6v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">
                Craftsmanship
              </h3>
              <p className="text-navy-900/70">
                We believe in the beauty of handcrafted furniture. Our master
                craftsmen combine traditional techniques with modern precision
                to create pieces that stand the test of time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold h-8 w-8"
                >
                  <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                  <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                  <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">
                Sustainability
              </h3>
              <p className="text-navy-900/70">
                We are committed to responsible sourcing and sustainable
                practices. From our FSC-certified woods to our eco-friendly
                finishes, we strive to minimize our environmental footprint.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold h-8 w-8"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-playfair">
                Customer Experience
              </h3>
              <p className="text-navy-900/70">
                We believe in creating exceptional experiences for our
                customers. From our immersive 3D visualization tools to our
                white-glove delivery service, we go above and beyond to ensure
                your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6 font-playfair">
              Experience the ElegantHaven Difference
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              Visit our showroom or explore our collections online to discover
              furniture that transforms your space into a haven of elegance and
              comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gold text-navy-900 hover:bg-gold/90"
              >
                <Link href="/products">Explore Our Collections</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cream text-gray-700 hover:bg-cream/10"
              >
                <Link href="">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
