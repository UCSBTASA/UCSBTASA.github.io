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
        <div className =  "bg-gray-100 flex justify-center items-center">
            <ScrollTransition>
                <div className = "flex justify-center items-center m-20 px-60 py-32" >
                    <Image  
                        src={`/carousel/${images[index]}`}
                        alt="Carousel"
                        fill
                        style={{objectFit:"cover", objectPosition: "center"}}
                        onLoadingComplete = {onLoadCallback}
                        className="rounded-xl"
                    />                
               </div>

                <button className="absolute inset-y-0 right-0 p-40 rounded-xl bg-gray-600 opacity-10 hover:opacity-5"
                onClick={() => setIndex(index < 6 ? index + 1 : 0)}></button>
                
                <button className="absolute inset-y-0 left-0 p-40 rounded-xl bg-gray-600 opacity-10 hover:opacity-5"
                onClick={() => setIndex(index > 0 ? index - 1 : 6)}></button>
                </ScrollTransition>
            </div>
    )
} 
export default FakeCarousel;

