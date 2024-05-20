"use client";

import Image from "next/image";

const SeniorProfile = (props: any) => {

  return (
    <div className = "flex-row">
        <div className=" ">
            <Image
                src= {props.imageUrl}
                alt= "help"
                // fill
                width={400}
                height = {600}
                style={{objectFit:"cover", objectPosition: "center"}}
                className="rounded-3xl "
            />
        </div>

        <p className ="text-black text-2xl mt-6 font-semibold justify-center">
            {props.name}
        </p>
        <p className="justify-center ">
            {props.major}
        </p>
        
    </div>
    
  );
};

export default SeniorProfile;
