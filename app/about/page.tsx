import Image from "next/image"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"
import { CheckCircle } from "lucide-react"
import slovak_image_1 from '../images/Slovak_Image_1.jpg'

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
                src={slovak_image_1}
                alt="Our mission in action"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals who drive our mission forward. Each member brings unique expertise, dedication, and vision to ensure we provide the best support to our community.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0b4ea2] text-center mb-6">Leadership Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Mgr. Mária Mušutová",
                  role: "Co-Founder | Chair of the Charity | Trustee | Curriculum & Slovak Language Teaching Developer | Lead Teacher (AM Sessions)",
                  bio: "Originally from the Orava region in Slovakia, Mária has lived in Manchester for 17 years and holds a PGCE in Modern Foreign Languages from Manchester Metropolitan University. She teaches Spanish and French at a secondary school while also offering private Slovak lessons and translation services.",
                  quote: "Slovenské Vzdelávacie Centrum - South Manchester allows us to unite the Slovak community, share educational and cultural opportunities, and build lifelong friendships with those who cherish our traditions.",
                  responsibilities: [
                    "Chairing the charity and overseeing its development",
                    "Developing the Slovak language curriculum for all age groups",
                    "Leading and teaching the AM session for mixed-ability students (ages 4+ to adults)",
                    "Managing administrative tasks and charity operations",
                    "Organising cultural events, trips, and workshops",
                  ],
                  image: "/images/maria.jpg",
                },
                {
                  name: "Mgr. Denisa Amini",
                  role: "Co-Founder | Trustee | Advisor for Families Moving to Slovakia | International School Educator & Project Coordinator",
                  bio: "Originally from Prešov, Denisa lived in Manchester for nearly 20 years before moving back to Slovakia, where she now works at an International School in Košice. With a degree in History and Civics Education, she bridges the Slovak and UK education systems.",
                  quote: "I believe that Slovenské Vzdelávacie Centrum - South Manchester is more than just a school—it's a place where we can connect, support one another, and celebrate the traditions that are important for us and our children.",
                  responsibilities: [
                    "Advising families preparing to return to Slovakia",
                    "Supporting students transitioning between Slovak and UK education systems",
                    "Developing partnerships with Slovak schools and institutions",
                    "Creating projects that connect Slovak students abroad with schools in Slovakia",
                    "Introducing Slovak history in an engaging way",
                  ],
                  image: "/images/denisa.jpg",
                },
                {
                  name: "Ingrid Harandza",
                  role: "Co-Founder | Trustee | Early Years Educator | SEN Specialist | Creative & Cultural Programs",
                  bio: "Born in Rimavská Sobota, Ingrid has lived in Manchester for over 20 years. She is a qualified Early Years Educator and works as a teaching assistant in a UK primary school, focusing on young learners.",
                  quote: "I am excited that Slovenské Vzdelávacie Centrum - South Manchester allows me to combine my two passions—working with children and preserving our Slovak heritage—into a meaningful and supportive space for our community.",
                  responsibilities: [
                    "Providing specialized support for SEN students",
                    "Teaching Slovak to young children through play, music, and movement",
                    "Leading creative, literary, and sports activities",
                    "Organizing cultural events that bring Slovak traditions to life",
                  ],
                  image: "/images/ingrid.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#0b4ea2]">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                    <ul className="text-gray-600 text-sm text-left mt-4">
                      {member.responsibilities.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#0b4ea2] font-bold mr-2">•</span> {task}
                        </li>
                      ))}
                    </ul>
                    <p className="italic text-gray-500 mt-4">"{member.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Team */}
          <div>
            <h3 className="text-2xl font-bold text-[#0b4ea2] text-center mb-6">Support Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Zuzana Hanuliaková",
                  role: "Volunteer | Teaching Assistant | Social Media Coordinator",
                  bio: "Zuzana is a dedicated volunteer and mother of three, deeply passionate about Slovak culture and education. She plays a vital role in supporting teachers and students in the classroom, ensuring lessons run smoothly.",
                  responsibilities: [
                    "Assisting teachers and students in lessons as a teaching assistant",
                    "Managing social media content to keep families informed and engaged",
                    "Helping coordinate events and activities",
                  ],
                  image: "/images/zuzana.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#0b4ea2]">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                    <ul className="text-gray-600 text-sm text-left mt-4">
                      {member.responsibilities.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#0b4ea2] font-bold mr-2">•</span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-[#0b4ea2]">Meet Us in Person!</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We look forward to welcoming you to Slovenské Vzdelávacie Centrum – South Manchester! Our team is here to support you and your children on their bilingual journey, helping them stay connected to Slovak language, education, and traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0b4ea2]">Our Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At <strong>Slovenské Vzdelávacie Centrum – South Manchester</strong>, we believe in the power of collaboration. Thanks to the support of our partners, we can continue to provide high-quality Slovak language education, cultural events, and community programs for Slovak-speaking families in the UK.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "Úrad pre Slovákov žijúcich v zahraničí", logo: "" },
              { name: "ISEIA", logo: "https://iseai.org/wp-content/uploads/2020/02/ISEAI-LOGO-Alt-240px.png" },
              { name: "Association of Slovak Schools and Community Centers in the UK", logo: "https://lh6.googleusercontent.com/idJbNBVVVaoSVTt4BewxHWwq7qqmxnFi8Pt4suEg-bc_rB83XwJxPkx57JBfRIrmhM1Cch1T0kzonqP1a2-wkw=w16383" },
              { name: "Univerzita Mateja Bela", logo: "https://www.umb.sk/cms/images/logo.png?v=1.0.1" },
              { name: "Morrisons", logo: "https://www.cfroberts.co.uk/wp-content/uploads/2014/09/1280px-Morrisons_Logo.svg_-1024x609.png" },
              { name: "Manchester College", logo: "https://b3044747.smushcdn.com/3044747/wp-content/uploads/2022/06/The-Manchester-College-1024x576.jpg?lossy=1&strip=1&webp=1" },
              { name: "Porta134 Café", logo: "/partner-7.svg" },
            ].map((partner, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={70}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
                />
                <p className="mt-2 text-gray-700 text-sm">{partner.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 max-w-3xl mx-auto">
              We are always looking to expand our network and build new partnerships that align with our mission. If you or your organization are interested in supporting our work, please <strong>get in touch</strong>.
            </p>
          </div>
        </div>
      </section>


      <NewsletterSection />
    </>
  )
}

