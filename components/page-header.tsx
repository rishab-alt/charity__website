import Image from "next/image"

interface PageHeaderProps {
  title: string
  description?: string
  backgroundImage?: string
}

export default function PageHeader({
  title,
  description,
  backgroundImage = "/placeholder.svg?height=400&width=1600",
}: PageHeaderProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b4ea2]/80 to-[#0b4ea2]/60 z-10"></div>
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt={title}
        width={1600}
        height={400}
        className="w-full h-[300px] md:h-[400px] object-cover"
      />
      <div className="container relative z-20 flex flex-col items-center justify-center h-[300px] md:h-[400px] text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg md:text-xl max-w-2xl">{description}</p>}
      </div>
    </section>
  )
}

