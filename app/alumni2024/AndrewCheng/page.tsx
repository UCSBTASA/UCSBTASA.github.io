"use client";

import Image from "next/image";
import ScrollTransition from "@/components/scroll-transition";

const AndrewCheng = () => {
    return (
        <div>
            <div className="grid grid-cols-2 items-center gap-4 p-4">
            <div className="flex justify-center items-center p-4">
                <ScrollTransition>
                    <Image
                    src={"/staff_photos/andrew.jpg"}
                    alt={"Andrew Cheng"}
                    width={400}
                    height={250}
                    className="py-4"
                /></ScrollTransition>
            </div>
                
                <div className="font-sans">
                    <h1 className="">Andrew Cheng</h1>
                    <h2 className="">super senior</h2>
                    <h2 className="">biopsych</h2>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mt-16 mx-16">
            <div className="px-1 py-8 text-left ml-6">
          <p className="text-1xl font-serif text-black-900 font-bold">
          ANDREW,
          Ima touch you so bad cuz u cute as hell and everything
          u better watch urself u aint running away

            Sam 
          </p>
          
        </div>
        <div className="px-1 py-8 text-left ml-6">
          <p className="text-1xl font-serif text-black-900 font-bold">
          Bitch stfu u aint getting a quote
          </p>
          
        </div>
            </div>
            
        </div>
    );
};
export default AndrewCheng;