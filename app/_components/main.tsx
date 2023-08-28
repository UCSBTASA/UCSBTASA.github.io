import Image from "next/image";

const Main = () => {
  return (
    <div>
      <div className="relative h-80 lg:h-[70vh]">
        <Image
          src="/homepage/staff.jpg"
          alt="Big Little Photo"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="relative z-10">
            <h1 className="text-4xl font-semibold mb-4 uppercase">
              WELCOME TO UCSB&apos;S TASA!
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="w-full text-center bg-gray-100 py-8">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="my-8">
            {/* <div className="relative w-full h-80 mb-4 rounded-lg overflow-hidden">
            <Image
              src="/homepage/staff.jpg"
              fill={true}
              alt="TASA Staff Photo"
              className="rounded-lg object-cover bg-bottom bg-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg" />
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-5xl font-bold text-white uppercase">
                WELCOME TO UCSB&apos;S TASA!
              </h1>
            </div>
          </div> */}
            <h2 className="text-3xl font-bold text-gray-900 uppercase">
              OUR MISSION STATEMENT
            </h2>
            <p className="text-md lg:text-lg max-w-3xl mx-auto text-gray-600 mt-4 px-4">
              We are dedicated to enriching the college experience through
              Taiwanese culture. Our organization fosters community, friendship,
              and cultural awareness. We bring together like-minded individuals
              to explore Taiwanese traditions, language, and history. Through
              events, workshops, and service initiatives, we encourage dialogue
              and understanding. We prioritize creating a supportive network
              through study groups, mentorship, and social gatherings. Join us
              to immerse yourself in Taiwanese culture, whether you have roots
              or a curiosity. Let&apos;s celebrate and promote Taiwanese
              culture, making lasting memories and connections. Together, we
              create a vibrant community where college life is enhanced by the
              richness of Taiwanese heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
