import Link from "next/link";
import ScrollTransition from "./scroll-transition";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

interface GalleryYearSectionProps {
  images: GalleryImage[];
  year: string;
}

const GalleryYearSection = ({ images, year }: GalleryYearSectionProps) => {
  return (
    <>
      <h2 className=" text-4xl mt-4 font-semibold ">{year}</h2>
      <div className="min-w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
        {images.map((image) => (
          <ScrollTransition key={image.id}>
            <div className="relative group overflow-hidden rounded-lg">
              <Link href={image.link}>
                <div className="absolute inset-0 z-10">
                  <span className="sr-only">View</span>
                </div>
              </Link>
              <img
                alt={image.title}
                className="object-cover w-full h-60"
                height={400}
                src={image.imageUrl}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
              <div className="bg-white p-4 ">
                <h3 className="font-semibold text-xl md:text-2xl">
                  {image.title}
                </h3>
                <p className="text-base text-gray-500 ">{image.title}</p>
              </div>
            </div>
          </ScrollTransition>
        ))}
      </div>
    </>
  );
};

export default GalleryYearSection;
