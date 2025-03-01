import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        title="Our Impact"
        description="See how your donations have made a real difference in the lives of people across Slovakia and beyond."
      />

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "€1.2M", label: "Donated to causes" },
              { number: "24", label: "Active projects" },
              { number: "5,000+", label: "Lives impacted" },
              { number: "12", label: "Communities served" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <h3 className="text-4xl font-bold mb-2 text-[#0b4ea2]">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Impact Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories of how our work has transformed lives and communities across Slovakia.
            </p>
          </div>
          <div className="space-y-12">
            {[
              {
                title: "New School in Košice",
                description:
                  "Built a new school that now serves over 300 children in the eastern region, providing quality education and a safe learning environment.",
                impact: "300 children now have access to quality education",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Medical Supplies for Rural Clinics",
                description:
                  "Provided essential medical supplies to 12 rural clinics, serving over 5,000 people who previously had limited access to healthcare services.",
                impact: "5,000 people now have access to better healthcare",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Community Center Renovation",
                description:
                  "Renovated a community center in Banská Bystrica that now serves as a hub for educational programs, social services, and community gatherings.",
                impact: "A vibrant community space serving 1,200 residents",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((story, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm">
                <div className="relative w-full md:w-1/3 h-64 md:h-auto rounded-lg overflow-hidden">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="bg-[#0b4ea2]/10 text-[#0b4ea2] px-4 py-2 rounded-md inline-block mb-4">
                    <strong>Impact:</strong> {story.impact}
                  </div>
                  <Link href="#" className="text-[#ee1c25] font-medium flex items-center">
                    Read full story <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been touched by our work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The new school has transformed our community. Our children now have a safe and inspiring place to learn.",
                name: "Mária Kováčová",
                role: "Parent, Košice",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Thanks to the medical supplies provided by SlovakAid, we can now offer better care to our patients in this rural area.",
                name: "Dr. Ján Novák",
                role: "Rural Clinic Director",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The community center has become the heart of our town. It's where we gather, learn, and support each other.",
                name: "Elena Horváthová",
                role: "Community Member, Banská Bystrica",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-[#0b4ea2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Annual Reports</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparency is one of our core values. Review our annual reports to see how we use donations and the
              impact we've made.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[2022, 2021, 2020].map((year) => (
              <div key={year} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3">{year} Annual Report</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive overview of our activities, finances, and impact for the year {year}.
                </p>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Map */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Where We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our projects span across Slovakia, focusing on areas where support is most needed.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden border border-gray-200">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Map of Slovakia showing project locations"
              fill
              className="object-cover"
            />
            {/* Map pins would be added here in a real implementation */}
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-[#0b4ea2] hover:bg-[#093d81] text-white">View Detailed Impact Report</Button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

