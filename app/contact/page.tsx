import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"
import GoogleMapComponent from '../../components/GoogleMap'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have questions or want to get involved? Reach out to us using the contact information below."
      />

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0b4ea2]">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions or want to get involved? Reach out to us using the contact information below or fill out
                the form. We`ll get back to you as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[#0b4ea2] mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">info@slovakaid.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[#0b4ea2] mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">+421 2 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[#0b4ea2] mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">Hlavná 123, 811 01 Bratislava, Slovakia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[#0b4ea2] mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="bg-[#0b4ea2] text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#093d81] transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <span className="text-xs">{social.charAt(0).toUpperCase()}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input type="text" id="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input type="email" id="email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input type="text" id="subject" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" rows={4} required />
                </div>
                <Button type="submit" className="w-full bg-[#0b4ea2] hover:bg-[#093d81] text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Bratislava. We&apos;re located in the city center, which has  easily accessible by public transportation.
            </p>

          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-gray-200">
            <GoogleMapComponent />
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about contacting and working with us.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How quickly will you respond to my inquiry?",
                answer:
                  "We aim to respond to all inquiries within 1-2 business days. For urgent matters, please call our office directly.",
              },
              {
                question: "Can I visit your office without an appointment?",
                answer:
                  "While we welcome visitors, we recommend scheduling an appointment to ensure that the appropriate staff member is available to meet with you.",
              },
              {
                question: "How can I volunteer with SlovakAid?",
                answer:
                  "We're always looking for dedicated volunteers! Please fill out the contact form and specify your interest in volunteering, or email us directly at volunteer@slovakaid.org.",
              },
              {
                question: "Do you offer internships?",
                answer:
                  "Yes, we offer internships for students and recent graduates. Please send your resume and a cover letter to internships@slovakaid.org.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

