"use client";

import ScrollTransition from "./scroll-transition";
import { FaInstagram, FaLink } from "react-icons/fa";
import { Link } from "@mui/material";
import Youtube from "@/components/youtube";
import Instagram from "@/components/instagram";
import EventGallery from "@/components/eventGallery";
import Carousel from "@/components/carousel";
import { useEffect, useState } from "react";

const Main = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 ">
        <div className="relative rounded-2xl mt-8">
          <Carousel></Carousel>
        </div>

        <div className="flex flex-col mt-8">
          <h2 className="text-3xl text-center font-bold font-raleway text-gray-900 uppercase">
            Welcome to UCSB&apos;s TASA!
          </h2>
          <div className="text-center text-md lg:text-lg max-w-3xl mx-auto text-gray-600 mt-4 px-4">
            We are dedicated to enriching the college experience through
            Taiwanese culture. Our organization fosters{" "}
            <strong>community, friendship, and cultural awareness. </strong> We
            bring together like-minded individuals to{" "}
            <strong>explore Taiwanese traditions</strong>, language, and
            history. Through events, workshops, and service initiatives, we
            encourage dialogue and understanding. We
            <strong> prioritize creating a supportive network </strong> through
            study groups, mentorship, and social gatherings. Join us to immerse
            yourself in Taiwanese culture, whether you have roots or a
            curiosity. Let&apos;s celebrate and promote Taiwanese culture,
            making <strong>lasting memories and connections!</strong>
          </div>
          <div className="text-raleway text-center text-md lg:text-lg max-w-3xl mx-auto text-gray-600 mt-4 px-4">
            To learn more about us, you can check out our upcoming events, meet
            our officers and TASA fams. Stay updated by following our Instagram
            and Facebook, or by subscribing to our Mailing List!
          </div>
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
        </div>
      </div>

      <div className="w-full grid grid-cols-1 xl:grid-cols-2 text-center bg-gray-100">
        
        <div className="my-8 mx-auto w-full xl:w-11/12">
          <div className="bg-gray-100 rounded-2xl pl-4 grid justify-center">
            
            <Link href="/gallery">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Recent Events
              </h2>
            </Link>
            <div className="mx-auto max-w-4xl">
              {isClient && <EventGallery />}
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl my-8 bg-gray-100 rounded-xl pt-4">
          {isClient && <Instagram />}
        </div>
      </div>
      <h2 className="text-3xl text-center font-bold font-montserrat text-gray-900 my-8">
        A Year in Review: What You Missed
      </h2>
      <div className="relative flex justify-center mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-8 rounded-xl">
        <div className="my-8 xl:my-auto ">{isClient && <Youtube />}</div>
      </div>
    </div>
  );
};

export default Main;
