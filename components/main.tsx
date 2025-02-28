"use client";

import ScrollTransition from "./scroll-transition";
import { FaInstagram, FaLink, FaDiscord } from "react-icons/fa";
import { Link } from "@mui/material";
import Youtube from "@/components/youtube";
import Instagram from "@/components/instagram";
import EventGallery from "@/components/eventGallery";
import Carousel from "@/components/carousel";
import { useEffect, useState } from "react";
import Events from "./events";
import Welcome from "./welcome";
import UpcomingEvents from "./upcoming_events";
import FAQ from "./faq";

const Main = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="">
      <Welcome />
      <div className="mt-4"></div>
      <UpcomingEvents />
      {/* <div className="flex min-h-screen flex-col">

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">TASA UCSB</span>
          </Link>
        </div>
      </header>
      </div> */}
      <main className="flex-1">
        {/* <section className="relative bg-gradient-to-b from-background via-background/90 to-background py-24">
          <div className="container space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Welcome to UCSB's TASA!
            </h2>
            <div className="max-w-3xl mx-auto text-center text-md lg:text-lg text-muted-foreground mt-4 px-4">
              We are dedicated to enriching the college experience through
              Taiwanese culture. Our organization fosters{" "}
              <strong>community, friendship, and cultural awareness. </strong>{" "}
              We bring together like-minded individuals to{" "}
              <strong>explore Taiwanese traditions</strong>, language, and
              history. Through events, workshops, and service initiatives, we
              encourage dialogue and understanding. We{" "}
              <strong> prioritize creating a supportive network </strong>
              through study groups, mentorship, and social gatherings. Join us
              to immerse yourself in Taiwanese culture, whether you have roots
              or curiosity. Let&apos;s celebrate and promote Taiwanese culture,
              making <strong>lasting memories and connections!</strong>
            </div>

            <div className="text-center text-md lg:text-lg text-muted-foreground mt-4 px-4">
              To learn more about us, you can check out our upcoming events,
              meet our officers, and stay updated by following our Instagram and
              Facebook or by subscribing to our Mailing List!
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/tasa.ucsb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-300 transition duration-300"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://linktr.ee/tasaucsb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-300 transition duration-300"
              >
                <FaLink className="w-8 h-8" />
              </a>
              <a
                href="https://discord.com/invite/UgEcTEs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-300 transition duration-300"
              >
                <FaDiscord className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section> */}

        {/* <section className=" bg-muted/50">
          <div className="container space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                  Our Recent Events
                </h2>
                <div className="flex justify-center max-w-4xl mx-auto">
                  {isClient && <EventGallery />}
                </div>
              </div>

              <div>
                <div className="text-3xl text-center font-bold mb-10 text-gray-900">
                  A Year in Review: What You Missed
                </div>
                <div className="relative flex justify-center mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-8 rounded-xl">
                  {isClient && <Youtube />}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container space-y-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Join Us and Stay Connected
            </h2>
            <div className="flex justify-center mt-8">
              <Carousel />
            </div>
          </div>
        </section> */}

        {/* <Events /> */}
      </main>

      {/* <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 TASA UCSB. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer> */}
      <FAQ />
    </div>
  );
};

export default Main;
