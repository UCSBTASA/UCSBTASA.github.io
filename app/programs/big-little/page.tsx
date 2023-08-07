import NavBar from "@/app/_components/navbar";
import Header from "@/app/_components/header";
import Link from "next/link";
import Image from "next/image";

const BigLittle = () => {
  return (
    <div>
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      {/* <div className="block">
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-cover bg-center">
          <Image
            src="/homepage/staff.jpg"
            height={1920}
            width={1080}
            alt="Big Little Pickup Photo"
            className="absolute z-0"
          />

          <div className="absolute top-0 left-0 z-0 w-full h-full"></div>
        </div>
      </div> */}
      <div className="container mx-auto pt-16">
        {/* Header section */}
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold mb-8">
            BIG LITTLE PROGRAM
          </h1>
        </div>

        {/* "WHAT IS BIG-LITTLE?" section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">WHAT IS BIG-LITTLE?</h2>
          <p className="text-gray-700">
            The Big-Little Program is an exciting initiative that brings
            together new and existing members in a mentorship relationship. It
            fosters a sense of community and support within our organization.
            Bigs act as mentors, guiding and providing advice to their Littles,
            who, in turn, learn and grow in the TASA community. Through this
            program, we aim to build lasting connections and create an inclusive
            environment for all members.
          </p>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Replace these Image components with your actual photos */}
          <Image
            src="/homepage/staff.jpg"
            alt="Pickup Photo 1"
            width={400}
            height={400}
          />
          <Image
            src="/homepage/staff.jpg"
            alt="Pickup Photo 2"
            width={400}
            height={400}
          />
          <Image
            src="/homepage/staff.jpg"
            alt="Pickup Photo 3"
            width={400}
            height={400}
          />
          {/* Add more photos as needed */}
        </div>
      </div>
    </div>
  );
};

export default BigLittle;
