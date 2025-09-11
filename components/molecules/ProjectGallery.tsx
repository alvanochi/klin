import Image from "next/image"

const projectImages = [
  {
    src: "/images/project-1.png",
    alt: "Project Car Wash 1",
  },
  {
    src: "/images/project-2.png",
    alt: "Project Car Wash 2",
  },
  {
    src: "/images/project-3.png",
    alt: "Project Car Wash 3",
  },
  {
    src: "/images/project-4.png",
    alt: "Project Car Wash 4",
  },
]

export default function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectImages.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className=" h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}
