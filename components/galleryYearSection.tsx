import Link from "next/link";
import ScrollTransition from "./scroll-transition";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  quarter: string;
}

interface GalleryYearSectionProps {
  images: GalleryImage[];
  year: string;
  quarter: string;
}

const GalleryYearSection = ({
  images,
  year,
  quarter,
}: GalleryYearSectionProps) => {
  const filteredImages = images.filter((image) => image.quarter === quarter);
  return (
    <>
      {quarter !== "NA" && (
        <h3 className="flex justify-center font-jacques text-4xl font-semibold my-4">
          {quarter} Quarter
        </h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
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
                <h3 className="font-jacques text-xl md:text-2xl">
                  {image.title.toUpperCase()}
                </h3>
                {/* <p className="text-base text-gray-500 ">{image.title}</p> */}
              </div>
            </div>
          </ScrollTransition>
        ))}
      </div>
    </>
  );
};

export default GalleryYearSection;
