import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Carousel from "./carousel";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "400",
});

export default function Welcome() {
  const [sectionHeight, setSectionHeight] = useState("auto");

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1450;
      const maxHeight = 975; // Maximum height in pixels

      if (isLargeScreen) {
        const minHeight = window.innerHeight - 100;
        setSectionHeight(
          minHeight > maxHeight ? `${maxHeight}px` : `calc(100vh - 100px)`
        );
      } else {
        setSectionHeight("auto");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`${nanumMyeongjo.className} relative overflow-hidden`}
      style={{ minHeight: sectionHeight }}
    >
      <div className="mx-auto sm:px-16 lg:px-8 xl:px-32 xl:pt-12 md:pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative space-y-4 text-center lg:text-left">
            <h1
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
              className="leading-tight text-gray-900 font-bold"
            >
              <span className="block">Welcome to</span>
              <span className="block text-[#CC4A4A]">UCSB TASA</span>
                <span className="block font-light">台美學生會</span>
            </h1>

            <h2
              style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}
              className="text-gray-800 font-bold"
            >
              Friendship. Culture. Connection.
            </h2>
            <p
              style={{ fontSize: "clamp(0.875rem, 1vw, 1.25rem)" }}
              className="text-gray-600 leading-relaxed lg:max-w-xl"
            >
              Join our vibrant community at UC Santa Barbara and experience the
              warmth of Taiwanese culture.
              <br />
              Build friendships and create lasting memories together.
            </p>

            <div className="flex flex-col sm:flex-row mt-12 gap-6 lg:gap-8 justify-center lg:justify-start px-4 sm:px-0">
              <Button
                size="lg"
                className="font-bold bg-[#CC4A4A] hover:bg-[#FF6B35] text-white px-8 rounded-full w-full sm:w-auto"
              >
                <a href="/staff" className="w-full sm:w-auto">
                  Meet the Staff!
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold border-primary text-primary hover:bg-primary hover:text-white rounded-full w-full sm:w-auto"
              >
                <a href="/staff" className="w-full sm:w-auto">
                  Our Events
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 lg:pr-32 xl:pr-48">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-base text-gray-600 leading-snug">
                  Active Members
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-base text-gray-600 leading-snug">
                  Annual Events
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <p className="text-base text-gray-600 leading-snug">
                  Years of History
                </p>
              </div>
            </div>
          </div>

          <Carousel />
        </div>
      </div>
    </section>
  );
}
