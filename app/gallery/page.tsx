import Image from "next/image";
import Header from "../_components/header";
import NavBar from "../_components/navbar";

import "./gallery.css";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const GalleryPage: React.FC = () => {
  // Sample gallery images data
  const galleryImages2022_2023: GalleryImage[] = [
    {
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
  ];
  const galleryImages2021_2022: GalleryImage[] = [
    {
      id: 1,
      title: "TASA BANQUET",
      imageUrl: "/gallery_photos/tasa_banquet.jpeg",
      link: "https://photos.app.goo.gl/C3VArv3kYLCCyiaE8",
    },
    {
      id: 2,
      title: "TASA NIGHT MARKET 2022",
      imageUrl: "/gallery_photos/tasa_night_market.jpeg",
      link: "https://photos.app.goo.gl/3HYqstDRAwaBbdQM8",
    },
    {
      id: 3,
      title: "SPRING GM #2 ",
      imageUrl: "/gallery_photos/spring_gm_2_2022.jpeg",
      link: "https://photos.app.goo.gl/u9kLJ4LhAtzwNfZM6",
    },
    {
      id: 4,
      title: "TFTI",
      imageUrl: "/gallery_photos/tfti_2022.jpeg",
      link: "https://photos.app.goo.gl/dPNG3VNiSp5WD4Zq9",
    },
    {
      id: 5,
      title: "SPRING GM #1",
      imageUrl: "/gallery_photos/spring_gm_1_2022.jpeg",
      link: "https://photos.app.goo.gl/JfUSpPrU1jkftu5r7",
    },
    {
      id: 6,
      title: "IM VOLLEYBALL",
      imageUrl: "/gallery_photos/im_vball_2022.jpeg",
      link: "https://photos.app.goo.gl/yk9jmELhXYUNquct7",
    },
    {
      id: 7,
      title: "TASA AMAZING RACE",
      imageUrl: "/gallery_photos/tasa_amazing_race.jpeg",
      link: "https://photos.app.goo.gl/UPRsroXeUj2SisT77",
    },
    {
      id: 8,
      title: "NIN-TASA OLYMPICS",
      imageUrl: "/gallery_photos/nin_tasa.jpeg",
      link: "https://photos.app.goo.gl/gUcFvehieLjn4rzQ9",
    },
    {
      id: 9,
      title: "WINTER GM #3",
      imageUrl: "/gallery_photos/winter_gm_3_2022.jpeg",
      link: "https://photos.app.goo.gl/4559grdfixcemNp36",
    },
    {
      id: 10,
      title: "TASA X KASA MASHUP",
      imageUrl: "/gallery_photos/tasa_kasa_2021.jpeg",
      link: "https://photos.app.goo.gl/eUJwN9vHWxnXjNTu6",
    },
    {
      id: 11,
      title: "DUMPLING NIGHT",
      imageUrl: "/gallery_photos/dumpling_night_2021.jpeg",
      link: "https://photos.app.goo.gl/wSQFQzbTWtAQy6TXA",
    },
    {
      id: 12,
      title: "CASINO NIGHT",
      imageUrl: "/gallery_photos/casino_night_2021.jpeg",
      link: "https://photos.app.goo.gl/p8Qd7AWg3wc1Jp3WA",
    },
    {
      id: 13,
      title: "FIELD DAY",
      imageUrl: "/gallery_photos/field_day.jpeg",
      link: "https://photos.app.goo.gl/XHid9EvMS6xvSVXE9",
    },
    {
      id: 14,
      title: "BIG/LITTLE REVEAL",
      imageUrl: "/gallery_photos/big_little_pickup.jpeg",
      link: "https://ucsbtasa.weebly.com/gallery.html#:~:text=DUMPLING%20NIGHT-,BIG/LITTLE%20REVEAL,-BEACH%20FIELD%20DAY",
    },
    {
      id: 15,
      title: "FALL GM #2",
      imageUrl: "/gallery_photos/fall_gm_2.jpeg",
      link: "https://photos.app.goo.gl/xwMHj6PuuJ7LviqL7",
    },
    {
      id: 16,
      title: "ARTS & GAMES NIGHT",
      imageUrl: "/gallery_photos/arts_crafts.jpeg",
      link: "https://photos.app.goo.gl/xjeBZngxRKXJoXEP6",
    },
    {
      id: 17,
      title: "BEACH FIELD DAY",
      imageUrl: "/gallery_photos/beach_field_day.jpeg",
      link: "https://photos.app.goo.gl/NXSf9BKLkkXER2qX6",
    },
    {
      id: 18,
      title: "OUTDOOR DINING - PICKUP",
      imageUrl: "/gallery_photos/outdoor-dining-pickup.jpeg",
      link: "https://photos.app.goo.gl/63o7YrdQX7Ft3Dkm6",
    },
    {
      id: 19,
      title: "FALL GM #1",
      imageUrl: "/gallery_photos/fall_gm_1.jpg",
      link: "https://photos.app.goo.gl/tkxS6kjqoTziYkSP9",
    },
    // Your image data here...
  ];

  const galleryItemStyle: React.CSSProperties = {
    position: "relative",
    width: "500px", // Fixed width for each image
    height: "281px", // Fixed height for each image
    // Add any other styles specific to gallery items here...
  };

  const imageTitleStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    padding: "5px 10px",
    width: "100%",
    // Add any other styles specific to image titles here...
  };

  return (
    <div className="gallery-container">
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <h2>Our Favorite Memories</h2>
      <h3>2022-2023</h3>
      <div className="gallery-grid">
        {galleryImages2022_2023.map((image) => (
          <div key={image.id} className="gallery-item" style={galleryItemStyle}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <div
                className="gallery-image"
                style={{ backgroundImage: `url(${image.imageUrl})` }}
              />
              <div className="image-title">{image.title}</div>
            </a>
          </div>
        ))}
      </div>
      <h3> 2021-2022 </h3>
      <div className="gallery-grid">
        {galleryImages2021_2022.map((image) => (
          <div key={image.id} className="gallery-item" style={galleryItemStyle}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <div
                className="gallery-image"
                style={{ backgroundImage: `url(${image.imageUrl})` }}
              />
              <div className="image-title">{image.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
