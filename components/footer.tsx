import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-navy-900 text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4 font-playfair">
              ELEGANT<span className="text-gold">HAVEN</span>
            </h3>
            <p className="text-cream/80 text-sm">
              Curating the finest furniture for your elegant living spaces.
              Experience furniture in 3D before you buy.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/products" className="hover:text-gold">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Living Room
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Office
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link href="/about" className="hover:text-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <Link href="" className="hover:text-gold">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-gold">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-navy-800 pt-8 text-center text-sm text-cream/80">
          <p>© {new Date().getFullYear()} ElegantHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
