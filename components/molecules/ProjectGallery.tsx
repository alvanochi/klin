import Image from "next/image"

const projectImages = [
  {
    src: "/aerial-view-of-car-being-washed-at-carwash-facilit.jpg",
    alt: "Aerial view of car washing process",
  },
  {
    src: "/professional-car-wash-worker-using-pressure-washer.jpg",
    alt: "Professional car washing with pressure washer",
  },
  {
    src: "/detailed-car-interior-cleaning-service.jpg",
    alt: "Car interior detailing service",
  },
  {
    src: "/car-tire-maintenance-and-replacement-service.jpg",
    alt: "Tire maintenance service",
  },
]

export default function ProjectGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectImages.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={400}
            height={300}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}
