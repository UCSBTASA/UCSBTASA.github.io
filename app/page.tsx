import Main from "../components/main";
import Events from "../components/events";
import Carousel from "../components/carousel";
import FakeCarousel from "@/components/fakecarousel"

const Home = () => {
  return (
    <div className="">
      <Main></Main>
      <FakeCarousel/>
      <Events></Events>
    </div>
  );
};

export default Home;
