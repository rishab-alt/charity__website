"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"
import NewsletterSection from "@/components/newsletter-section"

export default function ProjectsPage() {
  const categories = ["All Projects", "Education", "Healthcare", "Community Development", "Emergency Relief"]
  const [selectedCategory, setSelectedCategory] = useState("All Projects")

  const projects = [
    { id: 1, title: "Education for All", category: "Education", description: "Providing educational resources and support to underprivileged children in eastern Slovakia.", image: "/placeholder.svg?height=300&width=400", location: "Košice Region", status: "Active" },
    { id: 2, title: "Healthcare Access", category: "Healthcare", description: "Improving access to quality healthcare in rural communities through mobile clinics and telemedicine.", image: "/placeholder.svg?height=300&width=400", location: "Prešov Region", status: "Active" },
    { id: 3, title: "Community Center Renovation", category: "Community Development", description: "Renovating community centers to provide safe spaces for gatherings, education, and recreation.", image: "/placeholder.svg?height=300&width=400", location: "Banská Bystrica", status: "Active" },
    { id: 4, title: "Flood Relief Initiative", category: "Emergency Relief", description: "Providing emergency assistance to communities affected by recent flooding in northern Slovakia.", image: "/placeholder.svg?height=300&width=400", location: "Žilina Region", status: "Active" },
    { id: 5, title: "Digital Literacy Program", category: "Education", description: "Teaching digital skills to seniors and adults in underserved communities to bridge the digital divide.", image: "/placeholder.svg?height=300&width=400", location: "Nationwide", status: "Active" },
    { id: 6, title: "Mental Health Support", category: "Healthcare", description: "Providing mental health resources, counseling, and support groups in communities across Slovakia.", image: "/placeholder.svg?height=300&width=400", location: "Bratislava Region", status: "Active" },
    { id: 7, title: "Sustainable Agriculture", category: "Community Development", description: "Supporting local farmers in adopting sustainable agricultural practices to improve food security.", image: "/placeholder.svg?height=300&width=400", location: "Nitra Region", status: "Active" },
    { id: 8, title: "Youth Leadership Program", category: "Education", description: "Empowering young people with leadership skills and opportunities to make a difference in their communities.", image: "/placeholder.svg?height=300&width=400", location: "Trnava Region", status: "Active" },
    { id: 9, title: "Clean Water Initiative", category: "Community Development", description: "Ensuring access to clean and safe drinking water in rural communities through infrastructure improvements.", image: "/placeholder.svg?height=300&width=400", location: "Trenčín Region", status: "Active" },
  ]

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All Projects" ? projects : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <PageHeader
        title="Our Projects"
        description="Discover the initiatives we're currently working on and how they're making a difference in communities."
      />

      {/* Project Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-[#0b4ea2]" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-md"
                >
                  <div className="relative h-48">
                    <div className="absolute top-0 right-0 bg-[#ee1c25] text-white text-xs font-bold px-3 py-1 z-10">
                      {project.status}
                    </div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <span className="text-xs bg-[#0b4ea2]/10 text-[#0b4ea2] px-2 py-1 rounded">{project.category}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{project.location}</span>
                      <Link href={`/projects/${project.id}`} className="text-[#ee1c25] font-medium flex items-center">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No projects found in this category.</p>
          )}
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
