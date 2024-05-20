import Image from "next/image";

const alumniPage = () => {
    return(
        <div>
            <div className="relative h-80 lg:h-[85vh]">
            <Image
              src="/homepage/all_staff.jpg"
              alt="Staff Cover Photo"
              fill
              quality={100}
              priority={true}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="relative z-10">
                <h1 className="text-4xl font-semibold mb-4 uppercase">
                  CONGRATS CLASS OF 2024
                </h1>
              </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>    
        </div>
    );
};
export default alumniPage;