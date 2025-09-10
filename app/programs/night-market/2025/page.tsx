"use client";

import Image from "next/image";
import Link from "next/link";

const graphicSources = [
    "/nm_2025/cover.jpg",
    "/nm_2025/food_1.jpg",
    "/nm_2025/food_2.jpg",
    "/nm_2025/food_3.jpg",
    "/nm_2025/food_4.jpg",
    "/nm_2025/food_5.jpg",
    "/nm_2025/food_6.jpg",
    "/nm_2025/food_7.jpg",
    "/nm_2025/food_8.jpg",
    "/nm_2025/food_9.jpg",
    "/nm_2025/food_10.jpg",
    "/nm_2025/food_11.jpg",
    "/nm_2025/food_12.jpg"
];

const NightMarket =() => {
  return (
    <div className="px-4 py-8 text-center w-screen h-auto bg-gray-100 flex-col flex items-center">
      <h2 className="text-3xl font-bold text-gray-900 uppercase">
        Night Market
      </h2>
      <p className="text-gray-600">
        Come to our Night Market to see all the amazing clubs and vendors we
        have to offer!
      </p>

      {/* <Link href="/programs/night-market/2025/map">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Map!
        </button>
      </Link> */}

    <Link href="/nm_2025/nm-map-2025.pdf">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Map!
        </button>
    </Link>

      {graphicSources.map((source, index) => (
        <Image
          src={source}
          alt="Night Market Image"
          key={index}
          width={500}
          height={300}
          className="bg-cover m-10 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
        />
      ))}
    </div>
  );
};

export default NightMarket;
