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
const filterImagesByQuarter = (images: any, quarter: any) => {
  return images.filter((image: any) => image.quarter === quarter);
};
const GalleryPage: React.FC = () => {
  const renderGallerySection = (images: any, year: any, quarter: any) => {
    const filteredImages = filterImagesByQuarter(images, quarter);
    if (filteredImages.length > 0) {
      return (
        <>
          {/* <h2 className="text-2xl mt-4 font-semibold">{year}</h2> */}
          <GalleryYearSection
            images={filteredImages}
            year={year}
            quarter={quarter}
          />
        </>
      );
    }
    return null; // Don't render anything if no images are present
  };
  return (
    <div className="gallery-container ">
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 pt-4 pb-8">
          <h2 className="text-4xl mt-4 font-semibold text-center">
            Our Favorite Memories
          </h2>
          <div>
            {/* 2023-2024 */}
            <h2 className="text-2xl mt-4 font-semibold">2023-2024</h2>
            {renderGallerySection(
              galleryImages2023_2024.slice().reverse(),
              "2023-2024",
              "Spring"
            )}
            {renderGallerySection(
              galleryImages2023_2024.slice().reverse(),
              "2023-2024",
              "Winter"
            )}
            {renderGallerySection(
              galleryImages2023_2024.slice().reverse(),
              "2023-2024",
              "Fall"
            )}

            {/* 2022-2023 */}
            <h2 className="text-2xl mt-4 font-semibold">2022-2023</h2>
            {renderGallerySection(
              galleryImages2022_2023,
              "2022-2023",
              "Spring"
            )}
            {renderGallerySection(
              galleryImages2022_2023,
              "2022-2023",
              "Winter"
            )}
            {renderGallerySection(galleryImages2022_2023, "2022-2023", "Fall")}

            {/* 2021-2022 */}
            <h2 className="text-2xl mt-4 font-semibold">2021-2022</h2>
            {renderGallerySection(
              galleryImages2021_2022,
              "2021-2022",
              "Spring"
            )}
            {renderGallerySection(
              galleryImages2021_2022,
              "2021-2022",
              "Winter"
            )}
            {renderGallerySection(galleryImages2021_2022, "2021-2022", "Fall")}

            {/* 2019-2020 */}
            <h2 className="text-2xl mt-4 font-semibold">2019-2020</h2>
            {renderGallerySection(
              galleryImages2019_2020,
              "2019-2020",
              "Spring"
            )}
            {renderGallerySection(
              galleryImages2019_2020,
              "2019-2020",
              "Winter"
            )}
            {renderGallerySection(galleryImages2019_2020, "2019-2020", "Fall")}

            {/* 2018-2019 */}
            <h2 className="text-2xl mt-4 font-semibold">2018-2019</h2>
            {renderGallerySection(
              galleryImages2018_2019,
              "2018-2019",
              "Spring"
            )}
            {renderGallerySection(
              galleryImages2018_2019,
              "2018-2019",
              "Winter"
            )}
            {renderGallerySection(galleryImages2018_2019, "2018-2019", "Fall")}

            {/* 2017-2018 */}
            <h2 className="text-2xl mt-4 font-semibold">2017-2018</h2>
            {renderGallerySection(
              galleryImages2017_2018,
              "2017-2018",
              "Spring"
            )}
            {renderGallerySection(
              galleryImages2017_2018,
              "2017-2018",
              "Winter"
            )}
            {renderGallerySection(galleryImages2017_2018, "2017-2018", "Fall")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
