"use client";
import Image from "next/image";
import ScrollTransition from "./scroll-transition";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { FaInstagram, FaLink } from "react-icons/fa";
import { Link } from "@mui/material";
import { galleryImages2023_2024 } from "@/data/galleryImages";
import GallerySmall from "./gallerySmall";
import Events from "./events";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Youtube from "./youtube";
const Main = () => {
  const leftContainerRef = useRef<HTMLDivElement>(null); // Specify the type explicitly
  const [leftContainerHeight, setLeftContainerHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (leftContainerRef.current) {
        setLeftContainerHeight(leftContainerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    console.log(leftContainerHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/homepage/all_staff.jpg"
            alt="Featured Image"
            width={800}
            height={600}
            className="object-cover w-full h-[400px] md:h-full"
          />
          <Link href="/staff" style={{ textDecoration: "none" }}>
            <a
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"
              style={{ paddingBottom: "55%" }}
            >
              <h2 className="text-4xl font-bold text-white">
                Meet your Staff!
              </h2>
            </a>
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <GallerySmall
            images={galleryImages2023_2024.slice().reverse()}
            year="2022-2023"
            quarter="Spring"
          />
          <div className="flex flex-col">
            <Events />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 text-center py-8 gap-6 p-4 md:p-6">

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-xl ml:4">
          <div className="my-8">
            <ScrollTransition>
              <h2 className="text-3xl font-bold font-raleway text-gray-900 uppercase">
                Welcome to UCSB&apos;s TASA!
              </h2>
              <p className="text-raleway text-md lg:text-lg max-w-3xl mx-auto text-gray-600 mt-4 px-4">
                We are dedicated to enriching the college experience through
                Taiwanese culture. Our organization fosters community,
                friendship, and cultural awareness. We bring together
                like-minded individuals to explore Taiwanese traditions,
                language, and history. Through events, workshops, and service
                initiatives, we encourage dialogue and understanding. We
                prioritize creating a supportive network through study groups,
                mentorship, and social gatherings. Join us to immerse yourself
                in Taiwanese culture, whether you have roots or a curiosity.
                Let&apos;s celebrate and promote Taiwanese culture, making
                lasting memories and connections. Together, we create a vibrant
                community where college life is enhanced by the richness of
                Taiwanese heritage.
              </p>
              <p className="text-raleway text-md lg:text-lg max-w-3xl mx-auto text-gray-600 mt-4 px-4">
                To learn more about us, you can check out our upcoming events,
                meet our officers and TASA fams. Stay updated by following our
                Instagram and Facebook, or by subscribing to our Mailing List!
              </p>
              <div className="flex justify-center space-x-6 mt-6">
                <a
                  href="https://www.instagram.com/tasa.ucsb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-4xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                </a>
                <a
                  href="https://linktr.ee/tasaucsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linktree"
                >
                  <FaLink className="text-4xl text-gray-600 hover:text-gray-800 transition-colors duration-200" />
                </a>
              </div>
            </ScrollTransition>
          </div>
        </div>
        <div className="relative flex justify-center bg-gray-100 rounded-xl mr:4">
          <div className="my-auto">
            <Youtube></Youtube>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
