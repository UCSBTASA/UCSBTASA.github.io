"use client";

import Image from "next/image";

const graphicSources = [
  "/nm_visuals/img1.jpeg",
  "/nm_visuals/img2.jpeg",
  "/nm_visuals/img3.jpeg",
  "/nm_visuals/img4.jpeg",
  "/nm_visuals/img5.jpeg",
];

const NightMarket = () => {
  return (
    <div className="px-4 py-8 text-center w-screen h-auto bg-gray-100 flex-col flex items-center">
      <h2 className="text-3xl font-bold text-gray-900 uppercase">
        Night Market
      </h2>
      <p className="text-gray-600">
        Come to our Night Market to see all the amazing clubs and vendors we
        have to offer!
      </p>
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
