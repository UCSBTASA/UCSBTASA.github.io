import Image from "next/image";
import ScrollTransition from "./scroll-transition";
import { FaInstagram, FaLink } from "react-icons/fa";

const Main = () => {
  return (
    <div>
      <div className="relative h-80 lg:h-[85vh]">
        <Image
          src="/homepage/staff25-26.jpg"
          alt="Staff Cover Photo"
          fill
          quality={100}
          priority={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="relative z-10">
            <h1 className="text-4xl font-semibold mb-4 uppercase">
              TAIWANESE AMERICAN STUDENT ASSOCIATION
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="w-full text-center bg-gray-100 py-8">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  );
};

export default Main;
