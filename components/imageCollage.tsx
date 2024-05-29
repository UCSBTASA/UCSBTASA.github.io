// components/ImageCollage.js
import React from 'react';
import Image from 'next/image';

const ImageCollage = ({ photos }: any) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {photos.map((photo: any, index: any) => (
        <div key={index}>
          <Image 
            src={photo.url} 
            alt={`Photo ${index + 1}`} 
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;
