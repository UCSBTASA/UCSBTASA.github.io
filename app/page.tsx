import Main from "./_components/main";
import NavBar from "./_components/navbar";
import Header from "./_components/header";
import Events from "./_components/events";
import Carousel from "./_components/carousel";
import Footer from "./_components/footer";

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
