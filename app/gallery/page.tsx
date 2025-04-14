"use client";

import {
  galleryImages2023_2024,
  galleryImages2022_2023,
  galleryImages2021_2022,
  galleryImages2019_2020,
  galleryImages2018_2019,
  galleryImages2017_2018,
  galleryImages2024_2025,
} from "@/data/galleryImages";
import React, { useState } from "react";
import GalleryYearSection from "@/components/galleryYearSection";

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-container ">
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 pt-4 pb-8">
          <h2 className="text-4xl mt-4 font-semibold text-center">
            Our Favorite Memories
          </h2>
          <h2 className="text-2xl mt-4 font-semibold">2024-2025</h2>
          <GalleryYearSection
            images={galleryImages2024_2025.slice().reverse()}
            year="2024-2025"
            quarter="Spring"
            p = "high"
          />
          <GalleryYearSection
            images={galleryImages2024_2025.slice().reverse()}
            year="2024-2025"
            quarter="Winter"
            p="high"
          />
          <GalleryYearSection
            images={galleryImages2024_2025.slice().reverse()}
            year="2024-2025"
            quarter="Fall"
            p="high"
          />

          <h2 className="text-2xl mt-4 font-semibold">2023-2024</h2>
          <GalleryYearSection
            images={galleryImages2023_2024.slice().reverse()}
            year="2022-2023"
            quarter="Spring"
            p="low"
          />
          <GalleryYearSection
            images={galleryImages2023_2024.slice().reverse()}
            year="2022-2023"
            quarter="Winter"
            p="low"
          />
          <GalleryYearSection
            images={galleryImages2023_2024.slice().reverse()}
            year="2022-2023"
            quarter="Fall"
            p="low"
          />

          <h2 className="text-2xl mt-4 font-semibold">2022-2023</h2>
          <GalleryYearSection
            images={galleryImages2022_2023}
            year="2022-2023"
            quarter="NA"
            p="low"
          />

          <h2 className="text-2xl mt-4 font-semibold">2021-2022</h2>
          <GalleryYearSection
            images={galleryImages2021_2022}
            year="2021-2022"
            quarter="NA"
            p="low"
          />

          <h2 className="text-2xl mt-4 font-semibold">2019-2020</h2>
          <GalleryYearSection
            images={galleryImages2019_2020}
            year="2019-2020"
            quarter="NA"
            p="low"
          />

          <h2 className="text-2xl mt-4 font-semibold">2018-2019</h2>
          <GalleryYearSection
            images={galleryImages2018_2019}
            year="2018-2019"
            quarter="NA"
            p="low"
          />

          <h2 className="text-2xl mt-4 font-semibold">2017-2018</h2>
          <GalleryYearSection
            images={galleryImages2017_2018}
            year="2017-2018"
            quarter="NA"
            p="low"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
