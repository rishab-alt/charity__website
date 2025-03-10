import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Events", path: "/event" },
  { name: "School", path: "/school" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-white"></div>
            <div className="absolute inset-y-0 left-0 right-1/3 rounded-l-full bg-[#0b4ea2]"></div>
            <div className="absolute inset-y-0 left-2/3 right-0 rounded-r-full bg-[#ee1c25]"></div>
          </div>
          <span className="text-xl font-bold">SlovakAid</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className="text-sm font-medium hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/donate" className="hidden lg:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Donate Now</Button>
          </Link>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/donate" className="mt-4">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Donate Now
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
