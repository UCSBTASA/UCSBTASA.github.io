"use client";
import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";
import Footer from "../_components/footer";
import Image from "next/image";
import React, { useState } from 'react';

const FamilyTrees = () => {
    const trees = [
      {
        title: "HuFuWu, Helen's Line",
        image: "/famTrees_photos/hufuwu_1.png",
        slug: "hufuwu",
      },
      {
        title: "HuFuWu, Casidy's Line",
        image: "/famTrees_photos/hufuwu_2.png",
        slug: "hufuwu",
      },
      {
        title: "Flower",
        image: "/famTrees_photos/flower.png",
        slug: "flower",
      },
      {
        title: "Mogu Mogu",
        image: "/famTrees_photos/mogu_mogu.png",
        slug: "mogu-mogu",
      },
      {
        title: "Top 5",
        image: "/famTrees_photos/top_5.png",
        slug: "top-5",
      },
      {
        title: "Elite",
        image: "/famTrees_photos/elite.png",
        slug: "elite",
      },
      {
        title: "Python",
        image: "/famTrees_photos/python.png",
        slug: "python",
      },
      {
        title: "Kangaroo",
        image: "/famTrees_photos/kangaroo.png",
        slug: "kangaroo",
      },
      {
        title: "Dino",
        image: "/famTrees_photos/dino.png",
        slug: "dino",
      },
      {
        title: "Cat",
        image: "/famTrees_photos/cat.png",
        slug: "cat",
      },
      {
        title: "Oolong",
        image: "/famTrees_photos/oolong.png",
        slug: "oolong",
      },
      {
        title: "TT",
        image: "/famTrees_photos/tt.png",
        slug: "tt",
      },
      {
        title: "Dragon",
        image: "/famTrees_photos/dragon.png",
        slug: "dragon",
      },
      {
        title: "Best",
        image: "/famTrees_photos/best.png",
        slug: "best",
      },
      {
        title: "Seal",
        image: "/famTrees_photos/seal.png",
        slug: "seal",
      },
      {
        title: "Van",
        image: "/famTrees_photos/van.png",
        slug: "van",
      },
      // {
      //   title: "",
      //   image: "/famTrees_photos/",
      //   slug: "",
      // },
    ];
    const [isImageClicked, setImageClicked] = useState(false);
    const [clickedImage, setClickedImage] = useState<string | null>(null);
  
    const handleImageClick = (imageSrc: string) => {
      setImageClicked(!isImageClicked);
      setClickedImage(imageSrc);
    };

  return (
    <div>
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 py-8">
          <h1 className="text-2xl text-center font-bold mb-4">TASA's FAMS!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trees.map((famTrees) => (
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

          {/* Display a larger image when clicked */}
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
      <Footer></Footer>
    </div>
  );
};
  
  export default FamilyTrees;
  