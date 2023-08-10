import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";
import Footer from "../_components/footer";

const Contact = () => {
  return (
    <div>
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <div className="flex justify-center bg-gray-100">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe1JBIyMeI2X0OKbRKIPac3BV3QbagNKLmAsSoPuNs71ATUvg/viewform?embedded=true"
          width="640"
          height="1000"
          className="m-4"
        >
          Loading…
        </iframe>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
