import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../_components/footer";

const StaffPage = () => {
  const staffMembers = [
    {
      id: 1,
      name: "Andrew Cheng",
      position: "CO-PRESIDENT",
      hometown: "Santa Barbara, CA",
      major: "Biopsychology and Pharmacology, 2024",
      year: "Class of 2024",
      funFact: "I like trains",
      imageUrl: "/staff_photos/andrew.jpg",
    },
    {
      id: 2,
      name: "Jacqueline Vuong",
      position: "Co-President",
      hometown: "San Ramon, CA",
      major: "Computer Science",
      year: "Class of 2024",
      funFact: "I eat Cheetos with chopsticks :>",
      favFood: "Braised pork belly",
      favMovie: "A Beautiful Mind",
      imageUrl: "/staff_photos/jacqueline.jpg",
    },
    {
      id: 3,
      name: "Charliene Lien",
      position: "External Vice President",
      hometown: "Chino, CA",
      major: "Biopsychology",
      year: "Class of 2025",
      funFact: "I like ",
      favFood: "My mom's dumplings",
      favMovie: "Crazy Rich Asians",
      imageUrl: "/staff_photos/charliene.jpg",
    },
    {
      id: 4,
      name: "Chloe Wang",
      position: "Internal Vice President",
      year: "Class of 2025",
      major: "Cell and Developmental Biology",
      imageUrl: "/staff_photos/chloe.jpg",
    },
    {
      id: 5,
      name: "Winbert Zhang",
      position: "Treasurer",
      imageUrl: "/staff_photos/winbert.jpg",
    },
    {
      id: 6,
      name: "Kaitlyn Pham",
      position: "Secretary",
      imageUrl: "/staff_photos/kaitlyn.jpeg",
    },
    {
      id: 7,
      name: "Sophia Yu",
      position: "Co-Activities Chair",
      imageUrl: "/staff_photos/sophia.jpg",
    },
    {
      id: 8,
      name: "Kyle Volpp",
      position: "Co-Activities Chair",
      imageUrl: "/staff_photos/kyle.jpeg",
    },
    {
      id: 9,
      name: "Austin Chen",
      position: "Co-Recruitment Chair",
      imageUrl: "/staff_photos/austin.jpeg",
    },
    {
      id: 10,
      name: "Max Wu",
      position: "Co-Recruitment Chair",
      imageUrl: "/staff_photos/max.jpeg",
    },
    {
      id: 11,
      name: "Yelena Tao",
      position: "Co-Publicity Chair",
      imageUrl: "/staff_photos/yelena.jpg",
    },
    {
      id: 12,
      name: "Cleo Chen",
      position: "Co-Publicity Chair",
      imageUrl: "/staff_photos/cleo.jpg",
    },
    {
      id: 13,
      name: "Justin Lang",
      position: "Co-Historian",
      imageUrl: "/staff_photos/justin.jpg",
    },
    {
      id: 14,
      name: "Emma Wang",
      position: "Co-Historian",
      imageUrl: "/staff_photos/emma.jpeg",
    },
    {
      id: 15,
      name: "Fiona Hosmer-Hughes",
      position: "Cultural Chair",
      imageUrl: "/staff_photos/fiona.jpeg",
    },
    {
      id: 16,
      name: "Kelly Wang",
      position: "Philanthropy Chair",
      imageUrl: "/staff_photos/kelly.jpeg",
    },
    {
      id: 17,
      name: "Ethan Lin",
      position: "Logistics and Events Chair",
      imageUrl: "/staff_photos/ethan.jpg",
    },
    {
      id: 18,
      name: "Deanna Hu",
      position: "Logistics and Events Chair",
      imageUrl: "/staff_photos/deanna.jpeg",
    },
    {
      id: 19,
      name: "Samuel Zhu",
      position: "General Staff",
      imageUrl: "/staff_photos/samuel.jpg",
    },
    {
      id: 20,
      name: "Michelle Li",
      position: "General Staff",
      imageUrl: "/staff_photos/michelle.jpeg",
    },
    {
      id: 21,
      name: "Kevin Deng",
      position: "General Staff",
      imageUrl: "/staff_photos/kevin.jpeg",
    },
    {
      id: 22,
      name: "Grace Chen",
      position: "General Staff",
      imageUrl: "/staff_photos/grace.jpeg",
    },
  ];

  return (
    <div>
      <div className="items-center justify-center min-h-screen">
        <Header title="UCSB TASA" />
        <NavBar />
        <div className="px-4 py-8 text-center bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 uppercase">
            Meet the Staff!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 mx-16">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="">
                <div className="">
                  <Image
                    src={staff.imageUrl}
                    alt={staff.name}
                    width={250}
                    height={250}
                    className="max-w-[300px] lg:max-w-[75%] w-auto mx-auto mb-2 rounded-full hover:scale-95 transition duration-300 ease-in-out"
                  />
                </div>
                <h2 className="text-black text-2xl mt-6 font-semibold">
                  {staff.name}
                </h2>
                <p className="text-md text-[#8888888] mt-3 font-bold leading-20">
                  {staff.position}
                </p>
                <p className="text-md text-[#00000080] mt-3 leading-16">
                  {staff.year}
                </p>
                <p className="text-md text-[#00000080] leading-16">
                  <strong>Major: </strong>
                  {staff.major}
                </p>
                <p className="text-md text-[#00000080] leading-16">
                  <strong>Hometown: </strong>
                  {staff.hometown}
                </p>
                <p className="text-md text-[#00000080] leading-16">
                  <strong>Fun Fact: </strong>
                  {staff.funFact}
                </p>
                <p className="text-md text-[#00000080] leading-16">
                  <strong>Favorite Movie: </strong>
                  {staff.favMovie}
                </p>
                {/* <p className="text-md text-[#00000080] leading-16">
                <strong>Favorite Food: </strong>{staff.favFood}
              </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StaffPage;
