import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function CharityHomepage() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">HelpingHands</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["Home", "About", "Impact", "Programs", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button className="hidden md:inline-flex shadow-lg hover:shadow-xl transition-all duration-300">
            Donate Now
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 z-0" />
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Making a difference, <span className="text-primary">together</span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Join us in our mission to create positive change in communities around the world.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About HelpingHands</h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2010, HelpingHands has been dedicated to improving lives and building stronger communities.
                  Our organization focuses on sustainable development, education, and healthcare initiatives.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe that everyone deserves access to basic necessities and opportunities for growth. Through
                  our programs and with the support of generous donors like you, we've been able to make a significant
                  impact in communities across the globe.
                </p>
                <Button variant="outline" className="group">
                  Our Story
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-300">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Volunteers working together"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="bg-muted py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Impact</h2>
              <p className="text-xl text-muted-foreground">
                Through the generosity of our donors and the dedication of our volunteers, we've been able to make a
                real difference in the lives of thousands.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Users, title: "10,000+", description: "Lives impacted through our programs" },
                { icon: Globe, title: "25", description: "Countries where we've implemented projects" },
                { icon: Heart, title: "$2.5M", description: "Raised for community development projects" },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="flex flex-col items-center gap-4 p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-center text-2xl font-bold">{item.title}</h3>
                    <p className="text-center text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Support Our Cause</h2>
              <p className="text-xl text-muted-foreground">
                Your donation, no matter the size, can make a significant impact in the lives of those we serve.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "One-time Donation",
                  description: "Make a one-time contribution to support our ongoing projects.",
                  button: "Donate Now",
                },
                {
                  title: "Monthly Giving",
                  description: "Become a sustaining donor with a monthly contribution.",
                  button: "Become a Monthly Donor",
                  featured: true,
                },
                {
                  title: "Corporate Sponsorship",
                  description: "Partner with us to make a lasting impact in communities.",
                  button: "Contact Us",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden transition-all duration-300 ${item.featured ? "border-primary shadow-lg hover:shadow-xl" : "hover:shadow-md"}`}
                >
                  <CardContent className="flex flex-col items-center gap-4 p-6">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-center text-muted-foreground">{item.description}</p>
                    {item.featured ? (
                      <div className="flex gap-2 mt-4">
                        {["$10", "$25", "$50", "Other"].map((amount) => (
                          <Button key={amount} variant="outline" size="sm">
                            {amount}
                          </Button>
                        ))}
                      </div>
                    ) : null}
                    <Button className="w-full mt-4" variant={item.featured ? "default" : "outline"}>
                      {item.button}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="bg-muted py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Programs</h2>
              <p className="text-xl text-muted-foreground">
                We focus on sustainable initiatives that create lasting change in communities.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Education for All",
                  description: "Providing access to quality education for children in underserved communities.",
                },
                {
                  title: "Healthcare Access",
                  description: "Improving access to essential healthcare services in remote areas.",
                },
                {
                  title: "Clean Water Initiative",
                  description: "Providing sustainable access to clean water in drought-affected regions.",
                },
              ].map((program, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=400&text=${program.title}`}
                      alt={program.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                    <Button variant="link" className="mt-4 p-0 group">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Hear from the communities and individuals whose lives have been transformed.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {[
                {
                  quote:
                    "Thanks to the education program, my children now have access to quality education. This has opened up opportunities we never thought possible for our family.",
                  name: "Maria",
                  location: "Colombia",
                },
                {
                  quote:
                    "The clean water initiative has transformed our village. We no longer have to walk miles for water, and waterborne diseases have significantly decreased.",
                  name: "Joseph",
                  location: "Kenya",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex flex-col gap-4">
                      <p className="italic text-muted-foreground">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 overflow-hidden rounded-full">
                          <img
                            src={`/placeholder.svg?height=50&width=50&text=${testimonial.name[0]}`}
                            alt={`${testimonial.name} from ${testimonial.location}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-20 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="text-xl text-muted-foreground">
                  Have questions or want to learn more about our work? We'd love to hear from you.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: "info@helpinghands.org" },
                    { icon: Phone, text: "+1 (555) 123-4567" },
                    { icon: MapPin, text: "123 Charity Lane, New York, NY 10001" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus:border-primary"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus:border-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus:border-primary"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus:border-primary"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Updated</h2>
              <p className="text-xl text-muted-foreground">
                Subscribe to our newsletter to receive updates on our projects and impact.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-colors focus:border-primary sm:max-w-xs"
                />
                <Button className="shadow-lg hover:shadow-xl transition-all duration-300">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HelpingHands</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Making a difference in communities around the world through sustainable development, education, and
                healthcare initiatives.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {["Home", "About Us", "Our Programs", "Donate", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Programs</h3>
              <ul className="space-y-2 text-sm">
                {["Education for All", "Healthcare Access", "Clean Water Initiative", "Community Development"].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 HelpingHands. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

