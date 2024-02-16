import Head from "next/head";
import ScrollTransition from "@/components/scroll-transition";
import { getGoogleSheetsData } from "@/server/gsheets";
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
    const alumniData = await getGoogleSheetsData("alumni");
    const alumni = alumniData
      ?.map(
        (alum: any[]) =>
          ({
            name: alum[0],
            year: alum[1],
            bio: alum[2],
            linkedin: alum[3],
          } as Alumni)
      )
      .slice(1, alumniData.length); // remove the header
  
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