import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <div className="bg-gray-100">
        <div className="flex justify-center">
          <h1>Upcoming Events</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
