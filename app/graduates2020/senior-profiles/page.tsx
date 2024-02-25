import Link from "next/link";
import Image from "next/image";
import ScrollTransition from "@/components/scroll-transition";
import events from "@/data/bigLittleEvents";
import seniorprofiles from "@/data/seniorprofiles";


const SeniorProfiles = () => {
    const spData = [
        {
          title: "Andrew Cho",
          image: "/graduates2020_photos/seniorprofiles1.png",         
        
          slug: "AndrewCho",
        },
        {
          title: "Barbara Lin",
          image: "/graduates2020_photos/seniorprofiles2.png",
          slug: "BarbaraLin",
        },
        
      ];
  return (
    <div>
      <div className="items-center justify-center min-h-screen">
        <div className="px-1 py-8 text-center bg-white-100">
          <h2 className="text-5xl font-bold font-serif text-blue-900 uppercase">
            Senior Profiles
          </h2>
          <div className="bg-white-100">
        
        <div className="grid grid-cols-6 md:grid-cols-3 gap-8">
          {spData.map((program) => (
            <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
              <div className="mb-2">
                <Link href={`/graduates2020/senior-profiles/${program.slug}`}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={1920}
                    height={1080}
                    
                    objectFit="contain"
                    priority={true}
                  />
                </Link>
              </div>
              <h2 className="text-lg font-semibold mb-2">{program.title}</h2>
              
            </div>
          ))}
        
      </div>
        </div>
        
      </div>
      
    </div>
    </div>
  );
};

export default SeniorProfiles;
