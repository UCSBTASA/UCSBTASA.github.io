import events from "../data/eventData";
import { galleryImages2024_2025 } from "@/data/galleryImages";
import Image from "next/image";
import Link from "next/link";
import { Nanum_Myeongjo } from "next/font/google";
import { useState, useEffect } from "react";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "400",
});

const EventGallery = () => {

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() - 1);
  const galleryImages = [...galleryImages2024_2025].reverse();

  return (
    <section
      className={`${nanumMyeongjo.className} bg-[#FDE8F1] relative overflow-hidden `}
    >
      <div className="container mx-auto px-4 my-16">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Recent Events
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4  gap-8 mb-8 sm:mx-16 md:mx-8 lg:mx-16">
          {galleryImages
            .slice(
              0,
              screenWidth < 768 ? 2 : screenWidth < 976 ? 4 : 3
            )
            .map((image) => (
              <div key={image.id} className="border rounded-2xl overflow-hidden shadow-lg">
          <Link href={image.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={image.imageUrl}
              alt={image.title}
              width={200}
              height={150}
              className="w-full h-auto rounded-lg object-cover"
              style={{ objectFit: "cover", aspectRatio: "16/9" }}
            />
          </Link>
          <div className="bg-white py-2 text-center">
            <h3 className="font-semibold text-lg md:text-xl">
              {image.title}
            </h3>
          </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
