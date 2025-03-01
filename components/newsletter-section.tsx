import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl">
        <div className="bg-[#0b4ea2] text-white rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on our projects, impact stories, and ways to get involved.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ee1c25]"
              required
            />
            <Button type="submit" className="bg-[#ee1c25] hover:bg-[#d01920] text-white whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

