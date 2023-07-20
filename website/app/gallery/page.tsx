import Header from "../components/header";
import NavBar from "../components/navbar";

import "./gallery.css";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const GalleryPage: React.FC = () => {
  // Sample gallery images data
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: 'TASA NIGHT MARKET',
      imageUrl: "./gallery_images/cover_tasa_night_market.jpeg",
      link: 'https://photos.app.goo.gl/fxtr9tYq2iVUuMw48',
    },
    {
      id: 2,
      title: 'PIE A STAFF!',
      imageUrl: './gallery_images/cover_pie_a_staff.jpeg',
      link: 'https://photos.google.com/share/AF1QipOU7MuDdpIRaLBgivG1b36e0MUaTxei0uFM_PoP19XpKyUcN8gODa_C_Nl86KHtig?key=cGxxcVRKZFlYTlFtNkxONFdaT0xjM3B3ODRSS1ZB',
    },
    {
      id: 3,
      title: 'HOT POT NIGHT',
      imageUrl: './gallery_images/cover_hot_pot_night.jpeg',
      link: 'https://photos.google.com/share/AF1QipPvefBpB52uzvDiGbIsoHbUD4b2ie1eKx5ZcBJBhmBi9TbOVpDJBotqQQv6JyJnDA?key=eGtOeW9la0pZX09qSVZ0TlNBZFZvM3BmcWFxQjB3',
    },
    // Add more images here
  ];

  return (
    <body className="">
    <Header title="UCSB TASA"></Header>
    <NavBar></NavBar>
    <div className="gallery-container">
      <h2>Gallery Page</h2>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.imageUrl} alt={image.title} />
              <div className="image-title">{image.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};

export default GalleryPage;