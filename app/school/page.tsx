import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, CheckCircle, Download,  Info } from "lucide-react"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"
import slovak_image_3 from '../images/Slovak_Image_3.jpg'

export default function SchoolPage() {
  return (
    <>
      <PageHeader
        title="Slovak Language School"
        description="Learn Slovak language and culture in a supportive and engaging environment"
      />

      {/* Our Approach Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0b4ea2]">Our Approach</h2>
              <p className="text-gray-600 mb-4">
                At Slovenské Vzdelávacie Centrum – South Manchester, we are proud to be qualified educators with extensive experience across various educational settings. Our goal is to provide a student-centred, engaging, and culturally enriching learning environment, where language learning goes hand in hand with cultural education.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that language and culture are inseparable, which is why our curriculum aligns with our cultural events and workshops. This approach ensures that students not only learn Slovak in the classroom but also experience it in real-life situations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Immersive Learning</h3>
                    <p className="text-gray-600">
                      Language learning integrated with Slovak culture, history, and traditions. Students experience the language in real-life situations through cultural events and workshops.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Practical Focus</h3>
                    <p className="text-gray-600">
                      Emphasis on practical, everyday language use that you can immediately apply in real-life situations through task-based learning and group activities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Cultural Integration</h3>
                    <p className="text-gray-600">
                      Students not only learn Slovak language but also get a deep connection to the culture through content and language integrated learning (CLIL).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Supportive Environment</h3>
                    <p className="text-gray-600">
                      A friendly, encouraging atmosphere where mistakes are seen as part of the learning process, ensuring active participation and communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src={slovak_image_3}
                alt="Students learning Slovak"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Dates and Fees Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Dates and Fees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer flexible course schedules and competitive pricing to accommodate different needs and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                level: "Beginner (A1)",
                schedule: "Mondays & Wednesdays, 18:00-19:30",
                startDate: "September 5, 2023",
                duration: "12 weeks",
                fee: "€360",
                materials: "€40",
              },
              {
                level: "Intermediate (B1)",
                schedule: "Mondays & Wednesdays, 19:45-21:15",
                startDate: "September 5, 2023",
                duration: "12 weeks",
                fee: "€380",
                materials: "€45",
              },
              {
                level: "Intensive Course",
                schedule: "Monday to Friday, 9:00-13:00",
                startDate: "July 3, 2023",
                duration: "4 weeks",
                fee: "€680",
                materials: "€60",
              },
            ].map((course, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader className="bg-[#0b4ea2] text-white">
                  <CardTitle>{course.level}</CardTitle>
                  <CardDescription className="text-gray-100">{course.schedule}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Start Date:</span>
                      <span className="font-medium">{course.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Course Fee:</span>
                      <span className="font-medium">{course.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Materials:</span>
                      <span className="font-medium">{course.materials}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t mt-2">
                      <span className="text-gray-500">Total:</span>
                      <span className="font-bold">
                        €{Number.parseInt(course.fee.substring(1)) + Number.parseInt(course.materials.substring(1))}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white">Register Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Additional Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                <span>10% discount for returning students and family members.</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                <span>
                  Payment can be made in two installments (50% before the course starts, 50% at the midpoint).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                <span>Private lessons available at €30 per hour.</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                <span>Online courses available at a 15% discount from the regular price.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Registration and Consent Forms Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Registration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the registration form below to secure your place in one of our Slovak language courses.
            </p>
          </div>

          <Tabs defaultValue="registration" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="registration">Registration Form</TabsTrigger>
              <TabsTrigger value="consent">Consent Form</TabsTrigger>
            </TabsList>

            <TabsContent value="registration" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Registration Form</CardTitle>
                  <CardDescription>Please fill out all required fields to register for a course.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg">Personal Information</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone *</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input id="postalCode" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input id="country" defaultValue="Slovakia" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-bold text-lg">Course Selection</h3>

                      <div className="space-y-2">
                        <Label htmlFor="courseLevel">Course Level *</Label>
                        <Select required>
                          <SelectTrigger id="courseLevel">
                            <SelectValue placeholder="Select a level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a1">Beginner (A1)</SelectItem>
                            <SelectItem value="a2">Elementary (A2)</SelectItem>
                            <SelectItem value="b1">Intermediate (B1)</SelectItem>
                            <SelectItem value="b2">Upper Intermediate (B2)</SelectItem>
                            <SelectItem value="c1">Advanced (C1)</SelectItem>
                            <SelectItem value="intensive">Intensive Course</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="previousExperience">Previous Experience with Slovak</Label>
                        <Textarea
                          id="previousExperience"
                          placeholder="Please describe any previous experience with the Slovak language"
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="specialRequirements" />
                        <Label htmlFor="specialRequirements">I have special requirements or learning needs</Label>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialRequirementsDetails">Special Requirements Details</Label>
                        <Textarea
                          id="specialRequirementsDetails"
                          placeholder="Please describe any special requirements or learning needs"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-bold text-lg">Additional Information</h3>

                      <div className="space-y-2">
                        <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                        <Select>
                          <SelectTrigger id="hearAboutUs">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="friend">Friend or Family</SelectItem>
                            <SelectItem value="search">Search Engine</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="termsAndConditions" required />
                        <Label htmlFor="termsAndConditions" className="text-sm">
                          I agree to the{" "}
                          <Link href="/terms" className="text-[#0b4ea2] hover:underline">
                            terms and conditions
                          </Link>{" "}
                          *
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="marketingConsent" />
                        <Label htmlFor="marketingConsent" className="text-sm">
                          I would like to receive information about future courses and events
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white">
                      Submit Registration
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consent" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Consent Form</CardTitle>
                  <CardDescription>Please read and sign the consent form below.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200 max-h-60 overflow-y-auto">
                      <h3 className="font-bold mb-2">Consent for Data Processing</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        By signing this form, I consent to SlovakAid processing my personal data for the purpose of
                        providing language education services. I understand that my data will be handled in accordance
                        with the General Data Protection Regulation (GDPR) and will only be used for the purposes stated
                        in the Privacy Policy.
                      </p>
                      <h3 className="font-bold mb-2">Photography and Video Consent</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        I understand that SlovakAid may take photographs or record videos during classes and events for
                        promotional purposes. I consent to the use of my image in such materials, which may be published
                        on the SlovakAid website, social media channels, or printed materials.
                      </p>
                      <h3 className="font-bold mb-2">Course Policies</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        I acknowledge that I have read and agree to the course policies, including the attendance
                        policy, cancellation policy, and refund policy. I understand that fees are non-refundable after
                        the course has started, except in exceptional circumstances at the discretion of SlovakAid.
                      </p>
                      <h3 className="font-bold mb-2">Health and Safety</h3>
                      <p className="text-sm text-gray-600">
                        I confirm that I will inform SlovakAid of any health conditions or special needs that may affect
                        my participation in the course. I understand that SlovakAid will make reasonable accommodations
                        where possible, but cannot guarantee that all needs can be met.
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="consentName">Full Name *</Label>
                          <Input id="consentName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="consentDate">Date *</Label>
                          <div className="relative">
                            <Input id="consentDate" type="date" required />
                            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="digitalSignature">Digital Signature *</Label>
                        <Textarea
                          id="digitalSignature"
                          placeholder="Type your full name as your digital signature"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="consentAgreement" required />
                        <Label htmlFor="consentAgreement" className="text-sm">
                          I have read and agree to the terms outlined in this consent form *
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="photoConsent" />
                        <Label htmlFor="photoConsent" className="text-sm">
                          I specifically consent to the use of my image in photographs and videos
                        </Label>
                      </div>

                      <Button type="submit" className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white">
                        Submit Consent Form
                      </Button>
                    </form>

                    <div className="flex justify-center">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download PDF Version
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Payment Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer several convenient payment methods. Please use your full name as the payment reference to avoid delays.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bank Transfer Card */}
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle>Bank Transfer</CardTitle>
                  <CardDescription>Make a direct transfer to our bank account.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Account Name:</span>
                      <span className="font-medium">SlovakAid Language School</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Bank:</span>
                      <span className="font-medium">Slovenská sporiteľňa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">IBAN:</span>
                      <span className="font-medium">SK12 3456 7890 1234 5678 9012</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">SWIFT/BIC:</span>
                      <span className="font-medium">GIBASKBX</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Reference:</span>
                      <span className="font-medium">Your Full Name</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Copy Bank Details
                  </Button>
                </CardFooter>
              </Card>

              {/* Online Payment Card */}
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle>Online Payment</CardTitle>
                  <CardDescription>Pay securely online with credit card or PayPal.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      After submitting your registration form, you will receive an email with a payment link. You can pay securely online using:
                    </p>
                    <div className="flex justify-center gap-4">
                      <div className="bg-gray-100 p-2 rounded-md">
                        <Image src="/placeholder.svg?height=40&width=60" alt="Visa" width={60} height={40} />
                      </div>
                      <div className="bg-gray-100 p-2 rounded-md">
                        <Image src="/placeholder.svg?height=40&width=60" alt="Mastercard" width={60} height={40} />
                      </div>
                      <div className="bg-gray-100 p-2 rounded-md">
                        <Image src="/placeholder.svg?height=40&width=60" alt="PayPal" width={60} height={40} />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0b4ea2] hover:bg-[#093d81] text-white">Pay Online Now</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Payment Policies Section */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Payment Policies</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <span>
                    Full payment must be received at least 7 days before the course start date to secure your place.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <span>
                    Payment in two installments is available upon request (50% before the course starts, 50% at the midpoint).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <span>
                    Cancellations made more than 14 days before the course start date are eligible for a full refund minus a €30 administration fee.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <span>
                    Cancellations made 7-14 days before the course start date are eligible for a 50% refund.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="h-5 w-5 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <span>
                    No refunds are available for cancellations made less than 7 days before the course start date.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* SEN (Special Educational Needs) Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Special Educational Needs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to making our language courses accessible to all learners, including those with special educational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Support Approach</h3>
              <p className="text-gray-600 mb-6">
                We believe that everyone should have the opportunity to learn Slovak, regardless of their learning differences or disabilities. Our teachers are trained to adapt their teaching methods to accommodate various learning needs.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Personalized Learning Plans</h4>
                    <p className="text-gray-600">
                      We develop individualized learning plans for students with special educational needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Accessible Materials</h4>
                    <p className="text-gray-600">
                      Course materials are available in alternative formats, including digital, large print, and audio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Flexible Assessment</h4>
                    <p className="text-gray-600">
                      Assessment methods can be adapted to suit individual needs, with additional time or alternative formats available.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Supportive Environment</h4>
                    <p className="text-gray-600">
                      We create an inclusive classroom environment where all students feel valued and supported.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="bg-[#0b4ea2] hover:bg-[#093d81] text-white">Request SEN Support</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">SEN Support Request Form</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="senName">Full Name</Label>
                  <Input id="senName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senEmail">Email</Label>
                  <Input id="senEmail" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senNeeds">Please describe your learning needs</Label>
                  <Textarea
                    id="senNeeds"
                    placeholder="Provide details about your specific learning needs and how we can support you"
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senCourse">Preferred Course</Label>
                  <Select>
                    <SelectTrigger id="senCourse">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a1">Beginner (A1)</SelectItem>
                      <SelectItem value="a2">Elementary (A2)</SelectItem>
                      <SelectItem value="b1">Intermediate (B1)</SelectItem>
                      <SelectItem value="b2">Upper Intermediate (B2)</SelectItem>
                      <SelectItem value="c1">Advanced (C1)</SelectItem>
                      <SelectItem value="intensive">Intensive Course</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senAccommodations">Specific Accommodations Needed</Label>
                  <Textarea
                    id="senAccommodations"
                    placeholder="E.g., extra time for assignments, visual aids, seating preferences, etc."
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

