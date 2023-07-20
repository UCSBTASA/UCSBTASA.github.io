import Main from "./_components/main";
import NavBar from "./_components/navbar";
import Header from "./_components/header";
import Events from "./_components/events";

const Home = () => {
  return (
    <body className="no-header-page wsite-theme-light wsite-page-index">
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <Main></Main>
      <Events></Events>
    </body>
  );
};

export default Home;
