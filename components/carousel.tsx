"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const imagePaths = [
    "/homepage/staff_2024.png",
    "/gallery_photos/2023-2024/hot_pot_night.jpeg",
    "/gallery_photos/2023-2024/tfti.jpg",
    "/gallery_photos/2023-2024/arts_crafts.jpg",
    "/gallery_photos/2023-2024/pickup_reveal.jpg",
    "/gallery_photos/2023-2024/winter_retreat.jpeg",
  ];

  // Preload images using a custom hook
  const preloadedImages = usePreloadImages(imagePaths);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? preloadedImages.length - 1 : prevIndex - 1
    );
    resetAutoScroll();
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === preloadedImages.length - 1 ? 0 : prevIndex + 1
    );
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [preloadedImages]);

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <div className="relative flex items-center flex-col">
        {/* Render preloaded image */}
        {preloadedImages.length > 0 && (
          <Image
            src={imagePaths[activeIndex]} // Use imagePaths directly to avoid reloading
            alt={`Carousel Image ${activeIndex + 1}`}
            width={1920}
            height={1080}
            className="mb-4 rounded-2xl shadow-lg bg-cover bg-center object-cover max-w-full h-auto"
            priority // Ensures the current image is preloaded
          />
        )}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 rounded-full"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-black bg-opacity-50 rounded-full"
        >
          &#9654;
        </button>
      </div>
      <div className="flex space-x-2 mt-4">
        {imagePaths.map((src, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-full border ${
              activeIndex === index ? "border-blue-500" : "border-gray-300"
            } focus:outline-none focus:border-blue-500 transition duration-300`}
            onClick={() => handleThumbnailClick(index)}
          >
            {/* Use Next.js Image for thumbnails */}
            <Image
              src={src}
              alt={`Carousel Thumbnail ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-full"
              priority={index === activeIndex} // Preload only the active thumbnail
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// Custom hook for preloading images
const usePreloadImages = (imagePaths: string[]) => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const preload = async () => {
      const promises = imagePaths.map((src) =>
        new Promise<void>((resolve) => {
          const img = document.createElement('img') as HTMLImageElement; // Explicitly typed as HTMLImageElement
          img.src = src;
          img.onload = () => resolve();
        })
      );
      await Promise.all(promises);
      setLoadedImages(imagePaths); // Set only after all images are preloaded
    };
    preload();
  }, [imagePaths]);

  return loadedImages;
};

export default Carousel;
