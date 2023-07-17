import Main from "./components/main";
import NavBar from "./components/navbar";
import Header from "./components/header";

const Home = () => {
  return (
    <body className="no-header-page wsite-theme-light wsite-page-index">
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <Main></Main>
    </body>
  );
};

export default Home;
