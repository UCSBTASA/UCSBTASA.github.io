import NavBar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import ScrollTransition from "@/components/scroll-transition";
import nightMarketPhotos from "@/data/photoLists/nightMarket";

const NightMarket = () => {
  return (
    <div>
      <div className="relative h-80 lg:h-[85vh]">
        <Image
          src="/programs/night_market_cover.jpeg"
          alt="Big Little Photo"
          fill
          quality={100}
          priority={true}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="relative z-10">
            <h1 className="text-4xl font-semibold mb-4 uppercase">
              TASA ANNUAL NIGHT MARKET
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="mx-4 lg:mx-16 pt-16">
        <div className="p-8 mb-8 flex flex-col md:flex-row">
          <div className="md:w-[60%] md:pr-4">
            <ScrollTransition>
              <h2 className="text-3xl font-bold mb-4 uppercase">
                TASA'S BIGGEST EVENT OF THE YEAR
              </h2>
              <p className="text-gray-700">
                Our night market takes place in late April every year at UCSB's
                Storke Plaza. The event provides a wide array of food, snacks,
                activities, and performances with the collaboration of fellow
                student orgs on campus. TASA strives to give UCSB's community a
                taste of what night markets are like in Taiwan through famous
                Taiwanese dishes like green onion pancake, braised pork over
                rice with tea egg, and popcorn chicken.
              </p>
              <br />
              <p className="text-gray-700">Check out our 2025 Night Market!</p>
              <Link href={"/programs/night-market/2025"}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  2025 Night Market
                </button>
              </Link>
            </ScrollTransition>
          </div>
          <div className="flex flex-wrap justify-center items-center md:w-[40%] md:pl-4 mt-4">
            <ScrollTransition>
              <span className="table">
                <Link
                  href={"https://photos.app.goo.gl/fxtr9tYq2iVUuMw48"}
                  target="_"
                >
                  <Image
                    src="/programs/night_market_image.JPG"
                    alt="Night Market"
                    width={400}
                    height={400}
                    className="hover:scale-[102%] transition duration-300"
                  />
                  <p>TASA Night Market 2023 (click for full album)</p>
                </Link>
              </span>
            </ScrollTransition>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:mx-16">
        <div className="p-8 mb-8">
          <ScrollTransition>
            <h1 className="text-4xl">Night Market 2023 Highlights</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {nightMarketPhotos.map((photo, index) => (
                <Link
                  key={index}
                  href={"https://photos.app.goo.gl/fxtr9tYq2iVUuMw48"}
                  target="_"
                >
                  <div className="group relative cursor-pointer">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={400}
                      className="transition transform group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </ScrollTransition>
        </div>
      </div>
    </div>
  );
};

export default NightMarket;
