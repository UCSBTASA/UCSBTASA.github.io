import NavBar from "../../components/navbar";
import Header from "../../components/header";
import Link from "next/link";
import Footer from "../../components/footer";
import Construction from "../../components/under_construction";

const Graduates = () => {
  return (
    <div>
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <Construction></Construction>
      <Footer />
    </div>
  );
};

export default Graduates;
