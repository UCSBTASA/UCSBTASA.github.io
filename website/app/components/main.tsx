const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-5 flex justify-center">
        {/* <div className="w-screen">
          <Image
            src="/logo.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div> */}
        <div>
          <h1 className="text-5xl uppercase">WELCOME TO UCSB'S TASA!</h1>
          <h2 className="text-3xl uppercase">OUR MISSION STATEMENT</h2>
          <p className="text-med max-w-[70%] m-auto text-gray-600 p-2">
            We are dedicated to enriching the college experience through
            Taiwanese culture. Our organization fosters community, friendship,
            and cultural awareness. We bring together like-minded individuals to
            explore Taiwanese traditions, language, and history. Through events,
            workshops, and service initiatives, we encourage dialogue and
            understanding. We prioritize creating a supportive network through
            study groups, mentorship, and social gatherings. Join us to immerse
            yourself in Taiwanese culture, whether you have roots or a
            curiosity. Let's celebrate and promote Taiwanese culture, making
            lasting memories and connections. Together, we create a vibrant
            community where college life is enhanced by the richness of
            Taiwanese heritage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
