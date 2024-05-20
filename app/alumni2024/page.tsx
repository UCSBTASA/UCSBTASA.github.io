import Image from "next/image";
import SeniorProfile from "@/components/seniorProfiles";
import alumni from "@/data/alumni";


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
                  CONGRATS CLASS OF 2024!!
                </h1>
              </div>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            </div>   
            <h1 className="text-4xl font-semibold mb-4 uppercase flex items-center justify-center text-center m-8"> SENIOR PROFILES!</h1>
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 mx-16">

            {alumni.map((alumniz) => ( 
              <div className="flex flex-col ">
              
              <SeniorProfile 
                key = {alumniz.id}
                imageUrl={alumniz.imageUrl}
                name = {alumniz.name}
                major = {alumniz.major}
              />
              
              </div>               


            ))}
         </div>
        </div>
    );
};
export default alumniPage;