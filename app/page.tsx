import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Heart, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import childrenSmiling from './images/free-photo-of-young-girls-in-traditional-dress-in-rice-field.jpeg'
import volunteer_Image from './images/Volunteers.jpeg'
import commmunity_Image from './images/community.webp'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header is now handled by the layout component */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b4ea2]/80 to-[#0b4ea2]/60 z-10"></div>
          <Image
            src={childrenSmiling}
            alt="Children smiling"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
              Making a difference in Slovakia and beyond
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Join us in our mission to create positive change and support communities in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#ee1c25] hover:bg-[#d01920] text-white px-8">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 px-8"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="bg-[#0b4ea2]/10 p-3 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-[#0b4ea2]" />
                </div>
                <h3 className="text-3xl font-bold mb-2">€1.2M</h3>
                <p className="text-gray-500">Donated to causes</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="bg-[#0b4ea2]/10 p-3 rounded-full mb-4">
                  <Globe className="h-6 w-6 text-[#0b4ea2]" />
                </div>
                <h3 className="text-3xl font-bold mb-2">24</h3>
                <p className="text-gray-500">Active projects</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="bg-[#0b4ea2]/10 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-[#0b4ea2]" />
                </div>
                <h3 className="text-3xl font-bold mb-2">5,000+</h3>
                <p className="text-gray-500">Lives impacted</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0b4ea2]">About SlovakAid</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, SlovakAid is dedicated to improving lives across Slovakia and neighboring countries.
                  We focus on education, healthcare, and community development.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of dedicated volunteers and staff work tirelessly to ensure that every donation makes the
                  maximum impact where it`s needed most.
                </p>
                <Button className="bg-[#0b4ea2] hover:bg-[#093d81] text-white">
                  Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={volunteer_Image}
                  alt="Team of volunteers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}

        <section className="py-16 bg-[#0b4ea2] text-white">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
                <p className="text-lg mb-6">
                  Your support, no matter the amount, has the power to change lives. Every donation is tax-deductible and
                  directly funds our life-changing projects.
                </p>

                {/* Donation Amounts */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[10, 25, 50, 100, 250, "Custom"].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-[#0b4ea2] transition"
                    >
                      {typeof amount === "number" ? `€${amount}` : amount}
                    </Button>
                  ))}
                </div>

                {/* Donate Button */}
                <Button
                  size="lg"
                  className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white font-semibold transition"
                >
                  Donate Now
                </Button>
              </div>

              {/* Image Section */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={commmunity_Image}
                  alt="Children in a classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

