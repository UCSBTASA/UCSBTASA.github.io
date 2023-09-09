import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";
import Footer from "../_components/footer";
import Construction from "../_components/under_construction";

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
