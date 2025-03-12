import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"
import childrenSmiling from '../images/free-photo-of-young-girls-in-traditional-dress-in-rice-field.jpeg'

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        description="Join us in making a difference through our upcoming events and activities"
      />

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#0b4ea2]">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Charity Gala",
                date: "June 15, 2023",
                time: "19:00 - 23:00",
                location: "Grand Hotel, Bratislava",
                image: { childrenSmiling },
                description:
                  "Join us for an evening of elegance and giving, featuring live music, auctions, and inspiring stories.",
              },
              {
                title: "Summer Volunteer Day",
                date: "July 8, 2023",
                time: "10:00 - 16:00",
                location: "City Park, Košice",
                image: "/placeholder.svg?height=400&width=600",
                description: "Help us clean up and beautify our local park. All ages welcome!",
              },
              {
                title: "Education Fundraiser",
                date: "August 20, 2023",
                time: "14:00 - 18:00",
                location: "Community Center, Žilina",
                image: "/placeholder.svg?height=400&width=600",
                description:
                  "Support our education initiatives with a fun-filled afternoon of activities and performances.",
              },
            ].map((event, index) => (
              <Card key={index} className="flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={typeof event.image === "string" ? event.image : "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />

                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#0b4ea2]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#0b4ea2]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#0b4ea2]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="#" className="text-[#0b4ea2]">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#0b4ea2]">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Spring Charity Run",
                date: "April 22, 2023",
                participants: 500,
                amountRaised: "€15,000",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Youth Leadership Workshop",
                date: "May 5, 2023",
                participants: 100,
                amountRaised: "N/A",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((event, index) => (
              <div key={index} className="flex bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative w-1/3">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <div className="space-y-1">
                    <p>
                      <strong>Participants:</strong> {event.participants}
                    </p>
                    <p>
                      <strong>Amount Raised:</strong> {event.amountRaised}
                    </p>
                  </div>
                  <Link href="#" className="text-[#ee1c25] font-medium flex items-center mt-4">
                    View Event Recap <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#0b4ea2]">Event Calendar</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-center text-gray-600 mb-4">
              Our interactive event calendar is coming soon. In the meantime, check out our upcoming events above or
              follow us on social media for the latest updates.
            </p>
            <div className="flex justify-center gap-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <Link key={social} href="#" className="text-[#0b4ea2] hover:text-[#ee1c25]">
                  <span className="sr-only">{social}</span>
                  <div className="h-10 w-10 border-2 border-current rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold">{social.charAt(0).toUpperCase()}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-[#0b4ea2] text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="max-w-2xl mx-auto">
              We're always looking for passionate volunteers to help make our events a success. Here are some ways you
              can contribute:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Event Planning",
                description: "Help us organize and coordinate our charity events.",
              },
              {
                title: "Day-of Volunteer",
                description: "Assist with setup, registration, and various tasks during events.",
              },
              {
                title: "Fundraising",
                description: "Support our cause by helping us raise funds for our initiatives.",
              },
            ].map((role, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{role.title}</h3>
                <p className="mb-4">{role.description}</p>
                <Button className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white">Sign Up</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

