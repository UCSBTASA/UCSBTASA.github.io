import Image from "next/image";
import SeniorProfile from "@/components/seniorProfiles";
import alumni from "@/data/alumni";

const alumniPage = () => {
  return (
    <div>
      <div className="relative h-80 lg:h-[85vh]">
        <Image
          src="/alumni_2024/cover.png"
          alt="Alumni 2024 Cover Photo"
          fill
          quality={100}
          priority={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="relative z-10">
            <h1 className="font-jacques text-4xl font-semibold mb-4 uppercase">
              CONGRATS CLASS OF 2024!!
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <h1 className="text-4xl font-semibold mb-4 uppercase flex justify-center text-center m-8">
        SENIOR PROFILES!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mt-16 mx-8">
        {alumni.map((alumni) => (
          <div className="flex flex-col items-center text-center">
            <SeniorProfile
              key={alumni.id}
              imageUrl={alumni.imageUrl}
              name={alumni.name}
              major={alumni.major}
              // position={alumni.position}
              slug={alumni.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default alumniPage;
