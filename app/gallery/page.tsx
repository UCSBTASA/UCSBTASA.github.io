import Image from "next/image";
import Header from "../_components/header";
import NavBar from "../_components/navbar";
import Footer from "../_components/footer";
import ScrollTransition from "../_components/scroll-transition";

interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}
let i = 0
const GalleryPage: React.FC = () => {
  const galleryImages2023_2024: GalleryImage[] =[
    {
      id: 1,
      title: "99 RISING",
      imageUrl: "/gallery_photos/2023-2024/99_rising.JPG",
      link: "https://photos.app.goo.gl/zRTubmnRG6VAyxGf7" 
    },
    {
      id: 2,
      title: "SUNSET HIKE",
      imageUrl: "/gallery_photos/2023-2024/sunset_hike_v2.jpg",
      link: "https://photos.app.goo.gl/w1P36VshSBY9hPwg6" 
    },
    {
      id: 3,
      title: "FALL GM #1",
      imageUrl: "/gallery_photos/2023-2024/fall_gm_1.jpeg",
      link: "https://photos.app.goo.gl/jGdTJG6jam3W17jUA" 
    },
    {
      id: 4,
      title: "SPEED-DATING",
      imageUrl: "/gallery_photos/2023-2024/speed_dating.jpeg",
      link: "https://photos.app.goo.gl/sfYwA4i6pjBurXmr7" 
    },
    {
      id: 5,
      title: "BOBA MIXER",
      imageUrl: "/gallery_photos/2023-2024/boba_mixer.jpg",
      link: "https://photos.app.goo.gl/Ntz4qjtexx3ZXMT2A" 
    },
    {
      id: 6,
      title: "BEACH DAY",
      imageUrl: "/gallery_photos/2023-2024/beach_day.jpg",
      link: "https://photos.app.goo.gl/DQNLa3J3rRwX3WPAA" 
    },
    {
      id: 7,
      title: "ARTS AND CRAFTS NIGHT",
      imageUrl: "/gallery_photos/2023-2024/arts_crafts.jpg",
      link: "https://photos.app.goo.gl/kBKUCuU5q7qnXEsx9" 
    },
    {
      id: 8,
      title: "PICKUP REVEAL",
      imageUrl: "/gallery_photos/2023-2024/pickup_reveal.jpg",
      link: "https://photos.app.goo.gl/9iKiirF2Hatk8hibA" 
    },
    {
      id: 9,
      title: "TangHulu Night",
      imageUrl: "/gallery_photos/2023-2024/tanghulu_night.jpg",
      link: "https://photos.app.goo.gl/QAoYYhQhD5HgfxnH7",
    },
    {
      id: 10,
      title: "Fall GM #2",
      imageUrl: "/gallery_photos/2023-2024/fall_gm_2.jpeg",
      link: "https://photos.app.goo.gl/eCW7o7uHKypQ6mio9",
    },
    {
      id: 11,
      title: "Fall Banquet",
      imageUrl: "/gallery_photos/2023-2024/fall_banquet.jpg",
      link: "https://photos.app.goo.gl/JVMRY3DKDW45CRM87",
    },
    {
      id: 12,
      title: "Fall GM #3",
      imageUrl: "/gallery_photos/2023-2024/fall_gm_3.jpg",
      link: "https://photos.app.goo.gl/sHpQCUj34VxgGhnx6",
    },
    {
      id: 13,
      title: "Fall Fundraisers!",
      imageUrl: "/gallery_photos/2023-2024/fall_fundraiser.jpeg",
      link: "https://photos.app.goo.gl/7P7S6eRfPcPuVryW7",
    },
  ]
  const galleryImages2022_2023: GalleryImage[] = [
    {
      id: 1,
      title: "TASA NIGHT MARKET",
      imageUrl: "/gallery_photos/2022-2023/cover_tasa_night_market.jpeg",
      link: "https://photos.app.goo.gl/fxtr9tYq2iVUuMw48",
    },
    {
      id: 2,
      title: "PIE A STAFF!",
      imageUrl: "/gallery_photos/2022-2023/cover_pie_a_staff.jpeg",
      link: "https://photos.google.com/share/AF1QipOU7MuDdpIRaLBgivG1b36e0MUaTxei0uFM_PoP19XpKyUcN8gODa_C_Nl86KHtig?key=cGxxcVRKZFlYTlFtNkxONFdaT0xjM3B3ODRSS1ZB",
    },
    {
      id: 3,
      title: "HOT POT NIGHT",
      imageUrl: "/gallery_photos/2022-2023/cover_hot_pot_night.jpeg",
      link: "https://photos.google.com/share/AF1QipPvefBpB52uzvDiGbIsoHbUD4b2ie1eKx5ZcBJBhmBi9TbOVpDJBotqQQv6JyJnDA?key=eGtOeW9la0pZX09qSVZ0TlNBZFZvM3BmcWFxQjB3",
    },
    {
      id: 4,
      title: "TFTI",
      imageUrl: "/gallery_photos/2022-2023/tfti_pic1.jpeg",
      link: "https://photos.google.com/share/AF1QipOvihJ7pwsQKulGg6Z0H17Yc7zOf-zHlcdN4M7moj-q8DSLIWGi-T8qxM_Ce5q6NQ?key=T3Y3MTJCYTg5T09KS0xzQnVtTGYzT3VMUFZDYTFn",
    },
    {
      id: 5,
      title: "Big-Little Reveal!",
      imageUrl: "/gallery_photos/2022-2023/reveal.JPG",
      link: "https://photos.app.goo.gl/ftun1Z3b2zyNV5hj9 ",
    },
    {
      id: 6,
      title: "Boba Mixer",
      imageUrl: "/gallery_photos/2022-2023/boba_mixer.JPG",
      link: "https://photos.app.goo.gl/J4Bwr6yfXCHx6NvC9 ",
    },
    {
      id: 7,
      title: "Arts and Crafts Night",
      imageUrl: "/gallery_photos/2022-2023/arts_and_crafts_night.JPG",
      link: "https://photos.app.goo.gl/Gv2VYKLW4Evup4Q57 ",
    },
  ];
  const galleryImages2021_2022: GalleryImage[] = [
    {
      id: 1,
      title: "TASA BANQUET",
      imageUrl: "/gallery_photos/2021-2022/tasa_banquet.jpeg",
      link: "https://photos.app.goo.gl/C3VArv3kYLCCyiaE8",
    },
    {
      id: 2,
      title: "TASA NIGHT MARKET 2022",
      imageUrl: "/gallery_photos/2021-2022/tasa_night_market.jpeg",
      link: "https://photos.app.goo.gl/3HYqstDRAwaBbdQM8",
    },
    {
      id: 3,
      title: "SPRING GM #2 ",
      imageUrl: "/gallery_photos/2021-2022/spring_gm_2_2022.jpeg",
      link: "https://photos.app.goo.gl/u9kLJ4LhAtzwNfZM6",
    },
    {
      id: 4,
      title: "TFTI",
      imageUrl: "/gallery_photos/2021-2022/tfti.jpg",
      link: "https://photos.app.goo.gl/dPNG3VNiSp5WD4Zq9",
    },
    {
      id: 5,
      title: "SPRING GM #1",
      imageUrl: "/gallery_photos/2021-2022/spring_gm_1_2022.jpeg",
      link: "https://photos.app.goo.gl/JfUSpPrU1jkftu5r7",
    },
    {
      id: 6,
      title: "IM VOLLEYBALL",
      imageUrl: "/gallery_photos/2021-2022/im_vball_2022.jpeg",
      link: "https://photos.app.goo.gl/yk9jmELhXYUNquct7",
    },
    {
      id: 7,
      title: "TASA AMAZING RACE",
      imageUrl: "/gallery_photos/2021-2022/tasa_amazing_race.jpeg",
      link: "https://photos.app.goo.gl/UPRsroXeUj2SisT77",
    },
    {
      id: 8,
      title: "NIN-TASA OLYMPICS",
      imageUrl: "/gallery_photos/2021-2022/nin_tasa.jpeg",
      link: "https://photos.app.goo.gl/gUcFvehieLjn4rzQ9",
    },
    {
      id: 9,
      title: "WINTER GM #3",
      imageUrl: "/gallery_photos/2021-2022/winter_gm_3_2022.jpeg",
      link: "https://photos.app.goo.gl/4559grdfixcemNp36",
    },
    {
      id: 10,
      title: "TASA X KASA MASHUP",
      imageUrl: "/gallery_photos/2021-2022/tasa_kasa_2021.jpeg",
      link: "https://photos.app.goo.gl/eUJwN9vHWxnXjNTu6",
    },
    {
      id: 11,
      title: "DUMPLING NIGHT",
      imageUrl: "/gallery_photos/2021-2022/dumpling_night_2021.jpeg",
      link: "https://photos.app.goo.gl/wSQFQzbTWtAQy6TXA",
    },
    {
      id: 12,
      title: "CASINO NIGHT",
      imageUrl: "/gallery_photos/2021-2022/casino_night_2021.jpg",
      link: "https://photos.app.goo.gl/p8Qd7AWg3wc1Jp3WA",
    },
    {
      id: 13,
      title: "FIELD DAY",
      imageUrl: "/gallery_photos/2021-2022/field_day.jpeg",
      link: "https://photos.app.goo.gl/XHid9EvMS6xvSVXE9",
    },
    {
      id: 14,
      title: "BIG/LITTLE REVEAL",
      imageUrl: "/gallery_photos/2021-2022/big_little_pickup.jpeg",
      link: "https://photos.app.goo.gl/DwP9oyotjdGSKTdG8",
    },
    {
      id: 15,
      title: "FALL GM #2",
      imageUrl: "/gallery_photos/2021-2022/fall_gm_2.jpeg",
      link: "https://photos.app.goo.gl/xwMHj6PuuJ7LviqL7",
    },
    {
      id: 16,
      title: "ARTS & GAMES NIGHT",
      imageUrl: "/gallery_photos/2021-2022/arts_crafts.jpeg",
      link: "https://photos.app.goo.gl/xjeBZngxRKXJoXEP6",
    },
    {
      id: 17,
      title: "BEACH FIELD DAY",
      imageUrl: "/gallery_photos/2021-2022/beach_field_day.jpeg",
      link: "https://photos.app.goo.gl/NXSf9BKLkkXER2qX6",
    },
    {
      id: 18,
      title: "OUTDOOR DINING - PICKUP",
      imageUrl: "/gallery_photos/2021-2022/outdoor-dining-pickup.jpeg",
      link: "https://photos.app.goo.gl/63o7YrdQX7Ft3Dkm6",
    },
    {
      id: 19,
      title: "FALL GM #1",
      imageUrl: "/gallery_photos/2021-2022/fall_gm_1.jpg",
      link: "https://photos.app.goo.gl/tkxS6kjqoTziYkSP9",
    },
  ];
  const galleryImages2019_2020: GalleryImage[] = [
    {
      id: 1,
      title: "HOT POT NIGHT",
      imageUrl: "/gallery_photos/2019-2020/hot_pot_night.jpg",
      link: "https://flic.kr/s/aHsmLiyxS2",
    },
    {
      id: 2,
      title: "WINTER RETREAT",
      imageUrl: "/gallery_photos/2019-2020/winter_retreat.jpg",
      link: "https://flic.kr/s/aHsmKHAh9C",
    },
    {
      id: 3,
      title: "FALL BANQUET",
      imageUrl: "/gallery_photos/2019-2020/fall_banquet.jpg",
      link: "https://flic.kr/s/aHsmJBWGmQ",
    },
    {
      id: 4,
      title: "GENERAL MEETING #3",
      imageUrl: "/gallery_photos/2019-2020/gm_3.jpg",
      link: "https://flic.kr/s/aHsmJuoHns",
    },
    {
      id: 5,
      title: "DUMPLING NIGHT",
      imageUrl: "/gallery_photos/2019-2020/dumpling_night.jpeg",
      link: "https://flic.kr/s/aHsmJdsutE",
    },
    {
      id: 6,
      title: "REVEAL",
      imageUrl: "/gallery_photos/2019-2020/reveal.jpg",
      link: "https://flic.kr/s/aHsmJ9QVNi",
    },
    {
      id: 7,
      title: "DESTRESS SOCIAL",
      imageUrl: "/gallery_photos/2019-2020/destress_social.jpg",
      link: "https://flic.kr/s/aHsmJ2LuK7",
    },
    {
      id: 8,
      title: "MEET & GREET",
      imageUrl: "/gallery_photos/2019-2020/meet_and_greet.jpg",
      link: "https://flic.kr/s/aHsmHY4Sr9",
    },
    {
      id: 9,
      title: "SPEED DATING",
      imageUrl: "/gallery_photos/2019-2020/speed_dating.jpg",
      link: "https://flic.kr/s/aHsmHTp68i",
    },
    {
      id: 10,
      title: "FIELD DAY",
      imageUrl: "/gallery_photos/2019-2020/field_day.jpg",
      link: "https://flic.kr/s/aHsmHNZgTM",
    },
    {
      id: 11,
      title: "GENERAL MEETING #2",
      imageUrl: "/gallery_photos/2019-2020/gm_2.jpg",
      link: "https://flic.kr/s/aHsmHH616D",
    },
    {
      id: 12,
      title: "GENERAL MEETING #1",
      imageUrl: "/gallery_photos/2019-2020/gm_1.jpg",
      link: "https://flic.kr/s/aHsmHFKKSV",
    },
    {
      id: 13,
      title: "BEACH BBQ",
      imageUrl: "/gallery_photos/2019-2020/beach_bbq.jpg",
      link: "https://flic.kr/s/aHsmHDZpni",
    },
    {
      id: 14,
      title: "INTERN FIELD DAY",
      imageUrl: "/gallery_photos/2019-2020/intern_field_day.jpg",
      link: "https://flic.kr/s/aHsmLGUBrU",
    },
  ];
  const galleryImages2018_2019: GalleryImage[] = [
    {
      id: 1,
      title: "senior appreciation",
      imageUrl: "/gallery_photos/2018-2019/senior_appreciation.jpg",
      link: "https://flic.kr/s/aHsmE2RyvR",
    },
    {
      id: 2,
      title: "bird box field day",
      imageUrl: "/gallery_photos/2018-2019/bird_box_field_day.jpg",
      link: "https://flic.kr/s/aHsmDzxmbj",
    },
    {
      id: 3,
      title: "hot pot night",
      imageUrl: "/gallery_photos/2018-2019/hot_pot_night.jpg",
      link: "https://flic.kr/s/aHskNwUW6K",
    },
    {
      id: 4,
      title: "winter retreat",
      imageUrl: "/gallery_photos/2018-2019/winter_retreat.jpg",
      link: "https://flic.kr/s/aHsmupvPFo",
    },
    {
      id: 5,
      title: "reveal",
      imageUrl: "/gallery_photos/2018-2019/reveal.jpg",
      link: "https://flic.kr/s/aHsmviTR7B",
    },
    {
      id: 6,
      title: "fall gm",
      imageUrl: "/gallery_photos/2018-2019/fall_gm.jpg",
      link: "https://flic.kr/s/aHsmrsQxBM",
    },
    {
      id: 7,
      title: "beach bbq",
      imageUrl: "/gallery_photos/2018-2019/beach_bbq.jpg",
      link: "https://flic.kr/s/aHskKvw8kq",
    },
  ];
  const galleryImages2017_2018: GalleryImage[] = [
    {
      id: 1,
      title: "spring banquet",
      imageUrl: "/gallery_photos/2017-2018/spring_banquet.jpg",
      link: "https://flic.kr/s/aHskzgotik",
    },
    {
      id: 3,
      title: "night market pt.1",
      imageUrl: "/gallery_photos/2017-2018/night_market_1.jpg",
      link: "https://flic.kr/s/aHskBi5H3o",
    },
    {
      id: 2,
      title: "night market pt.2",
      imageUrl: "/gallery_photos/2017-2018/night_market_2.jpg",
      link: "https://flic.kr/s/aHsmb17z1h",
    },
    {
      id: 4,
      title: "winter retreat",
      imageUrl: "/gallery_photos/2017-2018/winter_retreat.jpg",
      link: "https://flic.kr/s/aHskvmtf73",
    },
  ];
  return (
    <div className="gallery-container ">
      <Header title="UCSB TASA" />
      <NavBar />
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 pt-4 pb-8">
          <h2 className="text-4xl font-semibold text-center">
            Our Favorite Memories
          </h2>
          <h3 className="text-lg font-semibold my-4">2023-2024</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages2023_2024.reverse().map((image) => (
              <ScrollTransition>
                <div
                  key={image.id}
                  className="relative hover:shadow-xl transition duration-300"
                >
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                    />
                    <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                      {image.title.toUpperCase()}
                    </div>
                  </a>
                </div>
              </ScrollTransition>
            ))}
          </div>
          <h3 className="text-lg font-semibold my-4">2022-2023</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages2022_2023.map((image) => (
              <ScrollTransition>
                <div
                  key={image.id}
                  className="relative hover:shadow-xl transition duration-300"
                >
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                    />
                    <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                      {image.title.toUpperCase()}
                    </div>
                  </a>
                </div>
              </ScrollTransition>
            ))}
          </div>
          <h3 className="text-lg font-semibold my-4">2021-2022</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages2021_2022.map((image) => (
              <ScrollTransition>
                <div
                  key={image.id}
                  className="relative hover:shadow-xl transition duration-300"
                >
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                    />
                    <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                      {image.title}
                    </div>
                  </a>
                </div>
              </ScrollTransition>
            ))}
          </div>
          <h3 className="text-lg font-semibold my-4">2019-2020</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages2019_2020.map((image) => (
              <ScrollTransition>
                <div
                  key={image.id}
                  className="relative hover:shadow-xl transition duration-300"
                >
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                    />
                    <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                      {image.title}
                    </div>
                  </a>
                </div>
              </ScrollTransition>
            ))}
          </div>
          <h3 className="text-lg font-semibold my-4">2018-2019</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages2018_2019.map((image) => (
              <ScrollTransition>
                <div
                  key={image.id}
                  className="relative hover:shadow-xl transition duration-300"
                >
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                    />
                    <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                      {image.title.toUpperCase()}
                    </div>
                  </a>
                </div>
              </ScrollTransition>
            ))}
          </div>
          <h3 className="text-lg font-semibold my-4">2017-2018</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages2017_2018.map((image) => (
              <ScrollTransition>
                <div
                  key={image.id}
                  className="relative hover:shadow-xl transition duration-300"
                >
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
                  >
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.imageUrl})` }}
                    />
                    <div className="bg-opacity-75 bg-black text-white py-2 text-center">
                      {image.title.toUpperCase()}
                    </div>
                  </a>
                </div>
              </ScrollTransition>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
