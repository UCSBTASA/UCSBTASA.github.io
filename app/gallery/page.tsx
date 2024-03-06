import {
  galleryImages2023_2024,
  galleryImages2022_2023,
  galleryImages2021_2022,
  galleryImages2019_2020,
  galleryImages2018_2019,
  galleryImages2017_2018,
} from "@/data/galleryImages";
import GalleryYearSection from "@/components/galleryYearSection";

const GalleryPage = () => {
  return (
    <div className="gallery-container ">
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 pt-4 pb-8">
          <h2 className="text-5xl mt-4 font-semibold">OUR FAVORITE MEMORIES</h2>
          <GalleryYearSection
            images={galleryImages2023_2024.slice().reverse()}
            year="2023-2024"
          />
          <GalleryYearSection
            images={galleryImages2022_2023}
            year="2022-2023"
          />
          <GalleryYearSection
            images={galleryImages2021_2022}
            year="2021-2022"
          />
          <GalleryYearSection
            images={galleryImages2019_2020}
            year="2019-2020"
          />
          <GalleryYearSection
            images={galleryImages2018_2019}
            year="2018-2019"
          />
          <GalleryYearSection
            images={galleryImages2017_2018}
            year="2017-2018"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
