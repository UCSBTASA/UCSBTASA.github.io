import Image from "next/image";
import Header from "../_components/header";
import NavBar from "../_components/navbar";

import "./gallery.css";

// interface GalleryImage {
//   id: number;
//   title: string;
//   imageUrl: string;
//   link: string;
// }

// const GalleryPage = () => {
//   // Sample gallery images data
//   const galleryImages: GalleryImage[] = [

    // Add more images here
  

//   return (
//     <div>
//       <Header title="UCSB TASA"></Header>
//       <NavBar></NavBar>
//       <div className="gallery-container">
//         <h2>Our Favorite Memories </h2>
//         <div className="gallery-grid grid-cols-1 gap-y-`0 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {galleryImages.map((image) => (
//             <div key={image.id} className="gallery-item">
//               <a href={image.link} target="_blank" rel="noopener noreferrer">
//                 <Image
//                   width={500}
//                   height={500}
//                   src={image.imageUrl}
//                   alt={image.title}
//                 ></Image>
//                 <div className="image-title">{image.title}</div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default function Gallery(){

// // }
 
// // function Image(url: string, title: string){
// //   return(
// //     <a href="#" className="group">
// //       <div className = "aspect-w-1 aspect-h-1 xl:aspect-w-7 xlaspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
// //         <img
// //           alt = {title} 
// //           src = {url}
// //           className = "group-hover:opacity-75"
// //          /> 
// //       </div>
// //     </a>

// //   )
// // }
// // export default GalleryPage;
// import React from 'react';

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const GalleryPage: React.FC = () => {
  // Sample gallery images data
  const galleryImages: GalleryImage[] = [    {
    id: 1,
    title: "TASA NIGHT MARKET",
    imageUrl: "/gallery_photos/cover_tasa_night_market.jpeg",
    link: "https://photos.app.goo.gl/fxtr9tYq2iVUuMw48",
  },
  {
    id: 2,
    title: "PIE A STAFF!",
    imageUrl: "/gallery_photos/cover_pie_a_staff.jpeg",
    link: "https://photos.google.com/share/AF1QipOU7MuDdpIRaLBgivG1b36e0MUaTxei0uFM_PoP19XpKyUcN8gODa_C_Nl86KHtig?key=cGxxcVRKZFlYTlFtNkxONFdaT0xjM3B3ODRSS1ZB",
  },
  {
    id: 3,
    title: "HOT POT NIGHT",
    imageUrl: "/gallery_photos/cover_hot_pot_night.jpeg",
    link: "https://photos.google.com/share/AF1QipPvefBpB52uzvDiGbIsoHbUD4b2ie1eKx5ZcBJBhmBi9TbOVpDJBotqQQv6JyJnDA?key=eGtOeW9la0pZX09qSVZ0TlNBZFZvM3BmcWFxQjB3",
  },
  {
    id: 4,
    title: "TFTI",
    imageUrl: "/gallery_photos/tfti_pic1.jpeg",
    link: "https://photos.google.com/share/AF1QipOvihJ7pwsQKulGg6Z0H17Yc7zOf-zHlcdN4M7moj-q8DSLIWGi-T8qxM_Ce5q6NQ?key=T3Y3MTJCYTg5T09KS0xzQnVtTGYzT3VMUFZDYTFn",
  },
    // Your image data here...
  ];

  const galleryItemStyle: React.CSSProperties = {
    position: 'relative',
    width: '480px', // Fixed width for each image
    height: '270px', // Fixed height for each image
    // Add any other styles specific to gallery items here...
  };

  const imageTitleStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    padding: '5px 10px',
    width: '100%',
    // Add any other styles specific to image titles here...
  };

  return (
    <div className="gallery-container">
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <h2>Our Favorite Memories</h2>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item" style={galleryItemStyle}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <div className="gallery-image" style={{ backgroundImage: `url(${image.imageUrl})` }} />
            <div className="image-title">{image.title}</div>
          </a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;