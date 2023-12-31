"use client";

import React, { useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg",
    "image5.jpeg",
    "image6.jpeg",
    "image7.jpeg",
  ];

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center m-10">
      <div className="flex items-center flex-col max-w-4xl">
        <Image
          src={`/carousel/${images[activeIndex]}`}
          alt={`Carousel Image ${activeIndex + 1}`}
          width={1920}
          height={1080}
          className="mb-4 rounded-lg shadow-md bg-cover bg-center h-96 object-cover"
        />
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`w-10 h-10 rounded-full border ${
                activeIndex === index ? "border-blue-500" : "border-gray-300"
              } focus:outline-none focus:border-blue-500 transition duration-300`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={`/carousel/${image}`}
                alt={`Carousel Thumbnail ${index + 1}`}
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-full mb-4"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
