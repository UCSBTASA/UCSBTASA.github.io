import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";
import Link from "next/link";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  quarter: string;
}

interface GallerySmallProps {
  images: GalleryImage[];
  year: string;
  quarter: string;
}

const GallerySmall = ({ images, year, quarter }: GallerySmallProps) => {
  const filteredImages = images.filter((image) => image.quarter === quarter);
  const lastFourImages = filteredImages.slice(-8);

  return (
    <div className="bg-gray-100 py-8 rounded-2xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Recent Events
        </h2>
        <ScrollArea className="w-full max-w-full h-auto rounded-2xl">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {lastFourImages.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg"
              >
                <Link href={image.link}>
                  <div className="max-w-full overflow-hidden rounded-t-md">
                    <Image
                      src={image.imageUrl}
                      alt={`Photo by ${image.title}`}
                      className="object-cover w-full h-[200px]"
                      width={600}
                      height={400}
                    />
                  </div>
                </Link>
                <div className="p-4 rounded-lg">
                  <h3 className="rounded-lg text-lg font-semibold text-center text-white bg-black bg-opacity-75 py-2 rounded-b-md">
                    {image.title.toUpperCase()}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default GallerySmall;
