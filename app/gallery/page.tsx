"use client"

import {
  galleryImages2023_2024,
  galleryImages2022_2023,
  galleryImages2021_2022,
  galleryImages2019_2020,
  galleryImages2018_2019,
  galleryImages2017_2018,
} from "@/data/galleryImages";
import React, { useState } from 'react';
import PopUp from "@/components/popup";
import GalleryQuarterComponent from "@/components/gallaryNewComponent";
import GalleryYearSection from "@/components/galleryYearSection";

const GalleryPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal1 = () => {
    setIsModalOpen1(true);
  };
  const closeModal1 = () => {
    setIsModalOpen1(false);
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
  };
  const openModal3 = () => {
    setIsModalOpen3(true);
  };
  const closeModal3 = () => {
    setIsModalOpen3(false);
  };
  const openModal4 = () => {
    setIsModalOpen4(true);
  };
  const closeModal4 = () => {
    setIsModalOpen4(false);
  };
  const openModal5 = () => {
    setIsModalOpen5(true);
  };
  const closeModal5 = () => {
    setIsModalOpen5(false);
  };
  const openModal6 = () => {
    setIsModalOpen6(true);
  };
  const closeModal6 = () => {
    setIsModalOpen6(false);
  };

  return (
    <div className="gallery-container ">
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 pt-4 pb-8">
          <h2 className="text-4xl mt-4 font-semibold text-center">
            Our Favorite Memories
          </h2>

          <h2 className="text-2xl mt-4 font-semibold">
            2023-2024
          </h2>
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mt-4 font-semibold text-center">Winter</h2>
                <button onClick={openModal}>Open</button>
                <PopUp isOpen={isModalOpen} onClose={closeModal}>
                <GalleryYearSection
                  images={galleryImages2023_2024.slice().reverse()}
                  year="2022-2023"
                  quarter="winter"
                  />
                </PopUp>
              </div>
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mt-4 font-semibold text-center">Fall</h2>
                <button onClick={openModal1}>Open</button>
                <PopUp isOpen={isModalOpen1} onClose={closeModal1}>
                <GalleryYearSection
                  images={galleryImages2023_2024.slice().reverse()}
                  year="2022-2023"
                  quarter= "fall"
                  />
                </PopUp>
              </div>

            <h2 className="text-2xl mt-4 font-semibold">
            2022-2023
          </h2>
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mt-4 font-semibold text-center">2022-2023</h2>
                <button onClick={openModal2}>Open</button>
                <PopUp isOpen={isModalOpen2} onClose={closeModal2}>
                <GalleryYearSection
                  images={galleryImages2022_2023}
                  year="2022-2023"
                  quarter = "NA"
                  />
                </PopUp>
              </div>

              <h2 className="text-2xl mt-4 font-semibold">
              2021-2022
              </h2>
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mt-4 font-semibold text-center">2021-2022</h2>
                <button onClick={openModal3}>Open</button>
                <PopUp isOpen={isModalOpen3} onClose={closeModal3}>
                <GalleryYearSection
                  images={galleryImages2021_2022}
                  year="2021-2022"
                  quarter = "NA"
                  />
                </PopUp>
              </div>

              <h2 className="text-2xl mt-4 font-semibold">
              2019-2020
              </h2>
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mt-4 font-semibold text-center">2019-2020</h2>
                <button onClick={openModal4}>Open</button>
                <PopUp isOpen={isModalOpen4} onClose={closeModal4}>
                <GalleryYearSection
                  images={galleryImages2019_2020}
                  year="2019-2020"
                  quarter = "NA"
                  />
                </PopUp>
              </div>

              <h2 className="text-2xl mt-4 font-semibold">
              2018-2019
              </h2>
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mt-4 font-semibold text-center">2018-2019</h2>
                <button onClick={openModal5}>Open</button>
                <PopUp isOpen={isModalOpen5} onClose={closeModal5}>
                <GalleryYearSection
                  images={galleryImages2018_2019}
                  year="2018-2019"
                  quarter = "NA"
                  />
                </PopUp>
              </div>

              <h2 className="text-2xl mt-4 font-semibold">
              2017-2018
              </h2>
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mt-4 font-semibold text-center">2017-2018</h2>
                <button onClick={openModal6}>Open</button>
                <PopUp isOpen={isModalOpen6} onClose={closeModal6}>
                <GalleryYearSection
                  images={galleryImages2017_2018}
                  year="2017-2018"
                  quarter = "NA"
                  />
                </PopUp>
              </div>

        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
