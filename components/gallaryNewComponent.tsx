"use client"
import React from 'react';

interface ContainerProps {
    onOpenModal: () => void;
    quarter:string;
  }


const GalleryQuarterComponent= ({onOpenModal, quarter}:ContainerProps) =>{
    return (
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl mt-4 font-semibold text-center">{quarter}</h2>
            <button onClick={onOpenModal}>Open</button>
          </div>
        
    );
};
export default GalleryQuarterComponent;