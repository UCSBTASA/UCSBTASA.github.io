import Main from "../components/main";
import NavBar from "../components/navbar";
import Header from "../components/header";
import Events from "../components/events";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="">
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <Main></Main>
      {/* <Carousel></Carousel> */}
      <Events></Events>
      <Footer></Footer>
    </div>
  );
};

export default Home;
