"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    "/homepage/staff_2024.png",
    "/gallery_photos/2023-2024/hot_pot_night.jpeg",
    "/gallery_photos/2023-2024/tfti.jpg",
    "/gallery_photos/2023-2024/arts_crafts.jpg",
    "/gallery_photos/2023-2024/pickup_reveal.jpg",
    "/gallery_photos/2023-2024/winter_retreat.jpeg",
  ];

  // Function to preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;git 
    });
  }, []);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    resetAutoScroll();
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
  }, []);

  return (
    <div className="flex flex-col items-center px-4 md:px-0">
      <div className="relative flex items-center flex-col">
        <Image
          src={images[activeIndex]}
          alt={`Carousel Image ${activeIndex + 1}`}
          width={1920}
          height={1080}
          className="mb-4 rounded-2xl shadow-lg bg-cover bg-center object-cover max-w-full h-auto"
          priority
          loading="eager" // Ensure images load immediately
        />
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
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-full border ${
              activeIndex === index ? "border-blue-500" : "border-gray-300"
            } focus:outline-none focus:border-blue-500 transition duration-300`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image}
              alt={`Carousel Thumbnail ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-full"
              priority
              loading="eager" // Force all images to load upfront
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
