import React from "react";
import Image from "next/image";
import Link from "next/link";

const AlumniPage = () => {
  const alumniData = [
    {
      title: "2024 Alumni",
      image: "/alumni_2024/cover.png",
      slug: "2024",
    },
  ];
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 py-8">
          <h1 className="text-4xl text-center font-bold mb-8">Alumni</h1>
          <h2 className="text-xl text-center mb-8">Check out our alumni pages!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumniData.map((alumnis: any) => (
              <div
                className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 ${
                  alumniData.length === 1 ? "md:col-start-2" : ""
                }`}
              >
                <div className="relative pb-[60%]">
                  <Link href={`/alumni/${alumnis.slug}`}>
                    <Image
                      src={alumnis.image}
                      alt={alumnis.title}
                      fill
                      objectFit="cover"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      priority={true}
                    />
                  </Link>
                </div>
                <h2 className="text-xl font-semibold mt-2 mb-2">
                  {alumnis.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
