// components/ImageCollage.js
import React from "react";
import Image from "next/image";

const ImageCollage = ({ photos }: any) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {photos.map((photo: any, index: any) => (
        <div key={index}>
          <Image
            src={photo.url}
            alt={`Photo ${index + 1}`}
            // layout="responsive"
            width={100}
            height={100}
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-full h-auto rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;
