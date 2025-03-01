import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-white"></div>
                <div className="absolute inset-y-0 left-0 right-1/3 rounded-l-full bg-[#0b4ea2]"></div>
                <div className="absolute inset-y-0 left-2/3 right-0 rounded-r-full bg-[#ee1c25]"></div>
              </div>
              <span className="text-xl font-bold">SlovakAid</span>
            </div>
            <p className="text-gray-400 mb-4">Making a difference in Slovakia and beyond since 2010.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Impact", path: "/impact" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {[
                { name: "Donate", path: "/donate" },
                { name: "Volunteer", path: "/volunteer" },
                { name: "Partner with us", path: "/partner" },
                { name: "Fundraise", path: "/fundraise" },
                { name: "Corporate giving", path: "/corporate" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Cookie Policy", path: "/cookies" },
                { name: "Accessibility", path: "/accessibility" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SlovakAid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

