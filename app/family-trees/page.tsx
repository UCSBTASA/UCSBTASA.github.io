"use client";
import { useState } from "react";
import familyTrees from "@/data/familytrees";

const FamilyTrees = () => {
  const [isImageClicked, setImageClicked] = useState(false);
  const [clickedImage, setClickedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setImageClicked(!isImageClicked);
    setClickedImage(imageSrc);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 py-8">
          <h1 className="text-2xl text-center font-bold mb-4">TASA's FAMS!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyTrees.map((famTrees) => (
              <div
                className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 cursor-pointer ${
                  isImageClicked ? "h-full" : ""
                }`}
                onClick={() => handleImageClick(famTrees.image)}
              >
                <div className="mb-2">
                  <img
                    src={famTrees.image}
                    alt={famTrees.title}
                    className={`w-full ${isImageClicked ? "h-full" : ""}`}
                  />
                </div>
                <h2 className="text-xl text-center font-semibold mb-2">
                  {famTrees.title}
                </h2>
              </div>
            ))}
          </div>

          {isImageClicked && clickedImage && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
              <img
                src={clickedImage}
                alt="Clicked Image"
                className="max-h-screen max-w-screen"
                onClick={() => setImageClicked(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyTrees;
