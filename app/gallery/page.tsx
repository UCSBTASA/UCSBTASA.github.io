"use client";

import {
  galleryImages2023_2024,
  galleryImages2022_2023,
  galleryImages2021_2022,
  galleryImages2019_2020,
  galleryImages2018_2019,
  galleryImages2017_2018,
} from "@/data/galleryImages";
import React, { useState } from "react";
import GalleryYearSection from "@/components/galleryYearSection";

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-container ">
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 pt-4 pb-8">
          {/* <h2 className="text-4xl mt-4 font-semibold text-center">
            Our Favorite Memories
          </h2> */}

          <h2 className="text-5xl flex justify-center mt-4 font-jacques font-bold">
            2023-2024
          </h2>
          <GalleryYearSection
            images={galleryImages2023_2024.slice().reverse()}
            year="2022-2023"
            quarter="Spring"
          />
          <GalleryYearSection
            images={galleryImages2023_2024.slice().reverse()}
            year="2022-2023"
            quarter="Winter"
          />
          <GalleryYearSection
            images={galleryImages2023_2024.slice().reverse()}
            year="2022-2023"
            quarter="Fall"
          />

          <h2 className="text-4xl flex justify-center mt-4 font-jacques font-bold">
            2022-2023
          </h2>
          <GalleryYearSection
            images={galleryImages2022_2023}
            year="2022-2023"
            quarter="NA"
          />

          <h2 className="text-4xl flex justify-center mt-4 font-jacques font-bold">
            2021-2022
          </h2>
          <GalleryYearSection
            images={galleryImages2021_2022}
            year="2021-2022"
            quarter="NA"
          />

          <h2 className="text-4xl flex justify-center mt-4 font-jacques font-bold">
            2019-2020
          </h2>
          <GalleryYearSection
            images={galleryImages2019_2020}
            year="2019-2020"
            quarter="NA"
          />

          <h2 className="text-4xl flex justify-center mt-4 font-jacques font-bold">
            2018-2019
          </h2>
          <GalleryYearSection
            images={galleryImages2018_2019}
            year="2018-2019"
            quarter="NA"
          />

          <h2 className="text-4xl flex justify-center mt-4 font-jacques font-bold">
            2017-2018
          </h2>
          <GalleryYearSection
            images={galleryImages2017_2018}
            year="2017-2018"
            quarter="NA"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
