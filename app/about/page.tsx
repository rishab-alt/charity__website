import Image from "next/image"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"
import { CheckCircle } from "lucide-react"
import aboutImage from '../images/pexels-photo-30928559.webp'

export default function AboutPage() {
  return (
    <>

      <PageHeader title="About Us" description="Learn about our mission, vision, and the team behind SlovakAid"

      />


      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0b4ea2]">Our Mission & Vision</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, SlovakAid is dedicated to improving lives across Slovakia and neighboring countries. We
                focus on education, healthcare, and community development.
              </p>
              <p className="text-gray-600 mb-6">
                Our vision is a Slovakia where every person has access to quality education, healthcare, and
                opportunities to thrive regardless of their background or circumstances.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Provide educational resources to underprivileged children</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Improve access to healthcare in rural communities</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Support local initiatives and community development</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">Advocate for policies that benefit vulnerable populations</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={aboutImage}
                alt="Our mission in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Our History</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a nationwide organization, our journey has been driven by a passion to serve.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Foundation",
                  description:
                    "SlovakAid was founded by a group of passionate individuals who wanted to make a difference in their local communities.",
                },
                {
                  year: "2013",
                  title: "First Major Project",
                  description:
                    "Launched our first major educational initiative, providing resources to 10 schools in eastern Slovakia.",
                },
                {
                  year: "2016",
                  title: "Expansion",
                  description:
                    "Expanded our operations to include healthcare initiatives and opened our second office in Košice.",
                },
                {
                  year: "2019",
                  title: "International Recognition",
                  description:
                    "Received international recognition for our work and began collaborating with organizations across Europe.",
                },
                {
                  year: "2022",
                  title: "Today",
                  description:
                    "Currently operating 24 active projects across Slovakia and neighboring countries, impacting thousands of lives.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="inline-block rounded-full bg-[#0b4ea2] text-white px-3 py-1 font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who work tirelessly to fulfill our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Martina Kováčová",
                role: "Executive Director",
                bio: "With over 15 years of experience in the nonprofit sector, Martina leads our organization with passion and vision.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Peter Novák",
                role: "Operations Director",
                bio: "Peter ensures that our projects are executed efficiently and effectively, maximizing our impact.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jana Horváthová",
                role: "Programs Manager",
                bio: "Jana develops and oversees our educational and healthcare initiatives across Slovakia.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Tomáš Balog",
                role: "Fundraising Manager",
                bio: "Tomáš builds relationships with donors and partners to secure the resources needed for our work.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#0b4ea2] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at SlovakAid.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We are committed to transparency, accountability, and ethical practices in all our operations.",
              },
              {
                title: "Compassion",
                description:
                  "We approach our work with empathy and a genuine desire to improve the lives of those we serve.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly seek new and better ways to address challenges and create sustainable solutions.",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of partnerships and working together to achieve greater impact.",
              },
              {
                title: "Respect",
                description:
                  "We honor the dignity, culture, and autonomy of every individual and community we work with.",
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards of quality and professionalism in everything we do.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-[#0b4ea2]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to collaborate with these organizations to amplify our impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Partner ${index + 1}`}
                  width={140}
                  height={70}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

