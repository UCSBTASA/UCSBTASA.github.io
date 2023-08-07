import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full text-center bg-gray-100 py-8">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="my-8">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <Image
              src="/homepage/staff.jpg"
              fill={true}
              alt="TASA Staff Photo"
              className="rounded-lg fill"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg" />
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="text-5xl font-bold text-white uppercase">
                WELCOME TO UCSB&apos;S TASA!
              </h1>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 uppercase">
            OUR MISSION STATEMENT
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-4 px-4">
            We are dedicated to enriching the college experience through
            Taiwanese culture. Our organization fosters community, friendship,
            and cultural awareness. We bring together like-minded individuals to
            explore Taiwanese traditions, language, and history. Through events,
            workshops, and service initiatives, we encourage dialogue and
            understanding. We prioritize creating a supportive network through
            study groups, mentorship, and social gatherings. Join us to immerse
            yourself in Taiwanese culture, whether you have roots or a
            curiosity. Let&apos;s celebrate and promote Taiwanese culture,
            making lasting memories and connections. Together, we create a
            vibrant community where college life is enhanced by the richness of
            Taiwanese heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
