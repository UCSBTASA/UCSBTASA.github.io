'use client'
import Image from "next/image";
import ScrollTransition from "./scroll-transition";
import { useState } from 'react'


const FakeCarousel = () => {
    const [index, setIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);

    const onLoadCallback = () => {
      setIsReady(true);
    };

    const images = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg",
    "image5.jpeg",
    "image6.jpeg",
    "image7.jpeg",
    ];
    


    return(
        <div className =  "bg-gray-100 flex flex-row justify-center items-center">
    
            <ScrollTransition>
                <div className = "bg-black flex">

                </div>
    
                <div className = "m-32 px-72 py-36" >
                    
                    <Image  
                        src={`/carousel/${images[index]}`}
                        alt="Carousel"
                        fill
                        style={{objectFit:"cover", objectPosition: "center"}}
                        //onLoadingComplete = {onLoadCallback}
                        className="rounded-3xl"
                    />       

                <button className="absolute left-4 p-4 rounded-full bg-gray-100 opacity-50 hover:opacity-10  "
                onClick={() => setIndex(index > 0 ? index - 1 : 6)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button> 

                <button className="absolute right-4 p-4 rounded-full bg-gray-100 opacity-50 hover:opacity-10"
                    onClick={() => setIndex(index < 6 ? index + 1 : 0)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
                </div>         

                <div className="bg-black">
                    
                </div>
                </ScrollTransition>
                

            </div>
    )
} 
export default FakeCarousel;

