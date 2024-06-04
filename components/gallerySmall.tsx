import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";
import ScrollTransition from "./scroll-transition";
import Link from "next/link";
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
  const lastFourImages = filteredImages.slice(-8); // Get the last 4 images

  return (
    <ScrollArea className="whitespace-nowrap rounded-2xl">
      <div className="flex w-max space-x-4">
        {lastFourImages.map((image) => (
          <figure key={image.id}>
            <Link href={image.link}>
              <div className="max-w-full overflow-hidden rounded-md">
                <Image
                  src={image.imageUrl}
                  alt={`Photo by ${image.title}`}
                  className="aspect-[4/3] object-cover"
                  sizes="max-height:100px"
                  width={400}
                  height={300}
                />
              </div>
            </Link>
            <div className="bg-opacity-75 bg-black text-white py-2 text-center">
              {image.title.toUpperCase()}
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default GalleryYearSection;
