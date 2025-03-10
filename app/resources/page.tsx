import Image from "next/image"
import Link from "next/link"
import { FileText, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Access educational materials, downloadable resources, and helpful links to support our cause"
      />

      {/* Educational Materials Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#0b4ea2]">Educational Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Slovak Language Basics",
                description: "Learn the fundamentals of the Slovak language with our comprehensive guide.",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                title: "Slovak Culture and Traditions",
                description: "Explore the rich cultural heritage and traditions of Slovakia.",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
              {
                title: "Volunteering 101",
                description: "Everything you need to know about volunteering with our organization.",
                image: "/placeholder.svg?height=200&width=300",
                link: "#",
              },
            ].map((resource, index) => (
              <Card key={index} className="flex flex-col">
                <div className="relative h-40">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full bg-[#0b4ea2] hover:bg-[#093d81] text-white">
                    <Link href={resource.link}>
                      Access Resource <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#0b4ea2]">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Annual Report 2022",
                description: "Our comprehensive report on activities and impact for the year 2022.",
                fileType: "PDF",
                fileSize: "2.5 MB",
              },
              {
                title: "Volunteer Handbook",
                description: "Essential information for all volunteers working with our organization.",
                fileType: "PDF",
                fileSize: "1.8 MB",
              },
              {
                title: "Donation Guide",
                description: "Learn about the various ways you can support our cause through donations.",
                fileType: "PDF",
                fileSize: "1.2 MB",
              },
              {
                title: "Project Impact Summary",
                description: "A brief overview of the impact of our key projects in the past year.",
                fileType: "PDF",
                fileSize: "3.1 MB",
              },
            ].map((resource, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="mr-4">
                  <FileText className="h-10 w-10 text-[#0b4ea2]" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                  <div className="text-xs text-gray-500 mt-1">
                    {resource.fileType} • {resource.fileSize}
                  </div>
                </div>
                <Button variant="outline" className="ml-4 flex-shrink-0">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#0b4ea2]">External Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Slovak Government Portal",
                description:
                  "Official website of the Slovak government with information on public services and policies.",
                link: "https://www.slovensko.sk/en/titulna-stranka",
              },
              {
                title: "Slovakia.travel",
                description: "Official travel guide to Slovakia, showcasing tourist attractions and cultural events.",
                link: "https://slovakia.travel/en",
              },
              {
                title: "EU Funding Opportunities",
                description: "Information on EU funding programs available for non-profit organizations in Slovakia.",
                link: "https://ec.europa.eu/info/funding-tenders/find-funding/eu-funding-programmes_en",
              },
            ].map((link, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={link.link} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-[#0b4ea2]">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "How can I volunteer with SlovakAid?",
                answer:
                  "To volunteer with SlovakAid, visit our 'Get Involved' page and fill out the volunteer application form. We'll then contact you with available opportunities that match your skills and interests.",
              },
              {
                question: "What types of projects does SlovakAid support?",
                answer:
                  "SlovakAid supports a wide range of projects focused on education, healthcare, community development, and emergency relief in Slovakia and neighboring countries.",
              },
              {
                question: "How can I make a donation?",
                answer:
                  "You can make a donation through our website's 'Donate' page, where you'll find options for one-time or recurring donations via credit card, bank transfer, or PayPal.",
              },
              {
                question: "Are donations to SlovakAid tax-deductible?",
                answer:
                  "Yes, donations to SlovakAid are tax-deductible in Slovakia. We provide receipts for all donations that can be used for tax purposes.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

