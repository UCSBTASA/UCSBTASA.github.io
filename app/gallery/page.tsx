"use client";
import { useState } from "react";
import {
  galleryImages2023_2024,
  galleryImages2022_2023,
  galleryImages2021_2022,
  galleryImages2019_2020,
  galleryImages2018_2019,
  galleryImages2017_2018,
  GalleryImage,
} from "@/data/galleryImages";
import GalleryYearSection from "@/components/galleryYearSection";
import { Button } from "@/components/ui/button";
import { ESLINT_DEFAULT_DIRS } from "next/dist/lib/constants";
const GalleryPage = () => {
  // State to manage active years
  const [activeYears, setActiveYears] = useState(["2023-2024"]);

  // Handler function to toggle active years
  const handleYearClick = (year: string) => {
    console.log(year)
    if (activeYears.includes(year)) {
      // Year is already active, remove it
      setActiveYears(activeYears.filter((activeYear) => activeYear !== year));
    } else {
      // Year is not active, add it
      setActiveYears([...activeYears, year]);
    }
    console.log("Active years = ", activeYears);
  };
  function getGalleryImagesForYear(year: any): GalleryImage[] {
    if (year == "2023-2024") {
      return galleryImages2023_2024;
    } else if (year == "2022-2023") {
      return galleryImages2022_2023;
    } else if (year == "2021-2022") {
      return galleryImages2021_2022;
    } else if (year == "2019-2020") {
      return galleryImages2019_2020;
    } else if (year == "2018-2019") {
      return galleryImages2018_2019;
    } else if (year == "2017-2018") {
      return galleryImages2017_2018;
    } else {
      return galleryImages2023_2024;
    }
  }
  return (
    <div className="gallery-container ">
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 pt-4 pb-8">
          <h2 className="text-4xl mt-4 font-semibold text-center">
            Our Favorite Memories
          </h2>
          <div className="flex justify-center grid-cols-6 mx-auto">
            <Button
              onClick={() => handleYearClick("2023-2024")}
              className="col-span-1 bg-gray-200 mx-auto"
            >
              2023-2024
            </Button>
            <Button
              onClick={() => handleYearClick("2022-2023")}
              className="col-span-1 bg-gray-200 mx-auto"
            >
              2022-2023
            </Button>
            <Button
              onClick={() => handleYearClick("2021-2022")}
              className="col-span-1 bg-gray-200 mx-auto"
            >
              2021-2022
            </Button>
            <Button
              onClick={() => handleYearClick("2019-2020")}
              className="col-span-1 bg-gray-200 mx-auto"
            >
              2019-2020
            </Button>
            <Button
              onClick={() => handleYearClick("2018-2019")}
              className="col-span-1 bg-gray-200 mx-auto"
            >
              2018-2019
            </Button>
            <Button
              onClick={() => handleYearClick("2017-2018")}
              className="col-span-1 bg-gray-200 mx-auto"
            >
              2017-2018
            </Button>
          </div>
          {activeYears.map((year) => (
            <GalleryYearSection
              key={year}
              images={getGalleryImagesForYear(year)}
              year={year}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
