import Head from "next/head";
import ScrollTransition from "@/components/scroll-transition";

import Image from "next/image";
import { FaInstagram, FaLink } from "react-icons/fa";
import Link from "next/link";
import graduatePhotos from "@/data/graduates2020Photos";

interface Alumni {
    name: string;
    year: string;
    bio: string;
    linkedin: string;
  }
  export default async function IndexPage() {
    const graduatesData = [
      {
        title: "Senior Profiles",
        image: "/programs/pickup.JPG",
        description:
          "Check out our seniors to see what they have to say about TASA and what others have to say about them!",
        slug: "senior-profiles",
      },
      {
        title: "Post-Grad Plans",
        image: "/programs/intern_program_cover.jpg",
        description:
          "Check out our seniors' plans for after graduation!",
        slug: "postgradplans",
      },
      
    ];
    
  
    return (
        <div>
            
            <div className="relative h-80 lg:h-[85vh]">
                <Image
                    src="/graduates2020_photos/background.png"
                    alt="Staff Cover Photo"
                    fill
                    quality={100}
                    priority={true}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="relative z-10">
                    <h1 className="text-4xl font-semibold mb-4 uppercase">
                        2020 GRADUATES
                    </h1>
                </div>
            </div>
            
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="bg-gray-100">
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {graduatesData.map((program) => (
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                <div className="mb-2">
                  <Link href={`/graduates2020/${program.slug}`}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={1920}
                      height={1080}
                      priority={true}
                    />
                  </Link>
                </div>
                <h2 className="text-lg font-semibold mb-2">{program.title}</h2>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          
        </div>
      </div>
          <div className="items-center justify-center min-h-screen">
            <div className="px-4 py-8 text-center bg-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 uppercase">
                MEET THE ALUMNI!
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
              {graduatePhotos.map((photo, index) => (
            
                  <div className="group relative cursor-pointer">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={400}
                      height={400}
                      className="transition transform group-hover:scale-105"
                    />
                  </div>
                
              ))}
            </div>
            </div>
          </div>
        </div>
    );
  }