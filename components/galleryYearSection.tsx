import Image from "next/image";
import ScrollTransition from "./scroll-transition";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "400",
});

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
  p: string;
}

const GalleryYearSection = ({
  images,
  year,
  quarter,
  p,
}: GalleryYearSectionProps) => {
  const filteredImages = images.filter((image) => image.quarter === quarter);
  return (
    <>
      {quarter !== "NA" && (
        <h3 className="text-lg font-semibold my-4">{quarter}</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <ScrollTransition key={image.id}>
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  fill = {true}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={p === "high" ? "eager" : "lazy"} // High priority images load eagerly
                />
              </div>
              <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                {image.title.toUpperCase()}
              </div>
            </a>
          </ScrollTransition>
        ))}
      </div>
    </>
  );
};

export default GalleryYearSection;
