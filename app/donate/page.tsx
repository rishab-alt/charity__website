import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, CreditCard, Calendar, Lock } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function DonatePage() {
  return (
    <>
      <PageHeader
        title="Donate"
        description="Your contribution can make a real difference in the lives of those we serve."
      />

      {/* Donation Options */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#0b4ea2]">Make a Donation</h2>
              <p className="text-gray-600 mb-6">
                Your contribution helps us:
                <ul>
                  <li>Provide affordable Slovak language classes for children and adults.</li>
                  <li>Organise cultural events, workshops, and community activities.</li>
                  <li>Develop educational resources for our students.</li>
                  <li>Offer support and guidance for Slovak families in the UK.</li>
                </ul>
                Every donation, no matter the amount, makes a real difference in ensuring that Slovak heritage thrives abroad.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Transparent Use of Funds</h3>
                    <p className="text-gray-600">
                      We're committed to transparency. 90% of all donations go directly to our projects, with only 10%
                      used for administrative costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Tax-Deductible</h3>
                    <p className="text-gray-600">
                      All donations are tax-deductible. You'll receive a receipt for your records.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0b4ea2] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Secure Transactions</h3>
                    <p className="text-gray-600">
                      Your payment information is secure. We use industry-standard encryption to protect your data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold mb-4">How Your Donation Helps</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>€25</span>
                    <span>Provides school supplies for one child</span>
                  </div>
                  <div className="flex justify-between">
                    <span>€50</span>
                    <span>Provides medical supplies for a rural clinic</span>
                  </div>
                  <div className="flex justify-between">
                    <span>€100</span>
                    <span>Supports a community development project</span>
                  </div>
                  <div className="flex justify-between">
                    <span>€250</span>
                    <span>Funds a scholarship for a student in need</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Children in a classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Donation Form</h3>

              <form className="space-y-6">
                <div>
                  <h4 className="font-bold mb-4">Donation Amount</h4>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {[25, 50, 100, 250, 500, "Custom"].map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={amount === 50 ? "default" : "outline"}
                        className={amount === 50 ? "bg-[#0b4ea2]" : ""}
                      >
                        {typeof amount === "number" ? `€${amount}` : amount}
                      </Button>
                    ))}
                  </div>
                  <Input type="number" placeholder="Enter custom amount" className={`${true ? "hidden" : ""}`} />
                </div>

                <div>
                  <h4 className="font-bold mb-4">Donation Type</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Button type="button" variant="default" className="bg-[#0b4ea2]">
                      One-time
                    </Button>
                    <Button type="button" variant="outline">
                      Monthly
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Personal Information</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone (Optional)
                      </label>
                      <Input id="phone" type="tel" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Payment Information</h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <div className="relative">
                          <Input id="expiry" placeholder="MM/YY" required />
                          <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                          CVC
                        </label>
                        <div className="relative">
                          <Input id="cvc" placeholder="123" required />
                          <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Leave a message or specify which project you'd like to support"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-[#ee1c25] hover:bg-[#d01920] text-white text-lg py-6">
                  Donate €50 Now
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <p>
                    By donating, you agree to our{" "}
                    <a href="/privacy-policy" className="text-[#0b4ea2]">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
