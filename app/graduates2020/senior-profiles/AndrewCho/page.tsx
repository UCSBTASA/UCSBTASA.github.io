import Link from "next/link";
import Image from "next/image";
import ScrollTransition from "@/components/scroll-transition";

import seniorprofiles from "@/data/seniorprofiles";
const AndrewCho = () => {
return (
    <div>
        <div className="relative h-80 lg:h-[85vh] bg-green-100">
        <div className="items-center justify-center min-h-screen">
        <div className="px-1 py-8 text-center bg-green-100">
          <h2 className="text-5xl font-bold font-serif text-black-900 uppercase">
            Happy Graduation Andrew!
          </h2>
          
        </div>
        
        <div className="relative h-80 lg:h-[85vh]">
                <Image
                    src="/graduates2020_photos/background2.avif"
                    alt="background1"
                    fill
                    quality={100}
                    priority={true}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="mx-4 lg:mx-16 pt-16">
        <div className="p-8 mb-8 flex flex-col md:flex-row">
          <div className="md:w-[60%] md:pr-4 bg-green-100">
            
            <ScrollTransition>
              <h2 className="text-4xl font-bold mb-4">Andrew Cho</h2>
              <p className="text-gray-700">
              Last words for TASA:
              </p>
              <br />
              <p className="text-gray-700">
                ​I am grateful for those I have met in TASA and those who I can drink with and talk about random stuff until late at night. The memories I have made outside of TASA (especially at Royal's apartment) have made me enjoy the last two years of college and if it wasn't for the TASA bois (RIP TFTI) and that fateful lunch at Denny's, I would not have had the same experience in TASA.
              </p>
              <br />
              
            </ScrollTransition>
            
          </div>
          <div className="flex flex-wrap justify-center items-center md:w-[50%] md:pl-4 mt-4">
            <ScrollTransition>
              <span className="table">
                
                  <Image
                    src="/graduates2020_photos/AndrewChoO.jpg"
                    alt="Andrew Cho"
                    width={400}
                    height={1000}
                  />
                  
                
              </span>
            </ScrollTransition>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className="relative h-80 lg:h-[85vh] bg-green-100">
        <div className="items-center justify-center min-h-screen">
        <div className="px-1 py-8 text-left bg-green-100">
          <h2 className="text-5xl font-bold font-serif text-black-900 uppercase">
            Happy Graduation 
          </h2>
          
        </div>
        </div>
        </div>
    </div>
);
};

export default AndrewCho;