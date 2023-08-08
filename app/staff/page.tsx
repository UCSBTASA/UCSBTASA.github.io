import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";
import Image from "next/image";

const staffMembers = [
  {
    id: 1,
    name: "Andrew Cheng",
    position: "Co-President",
    hometown: "Santa Barbara, CA",
    major: "Computer Science",
    year: "Senior",
    funFact: "I like trains",
    bio: "Hi, I'm Andrew Cheng a senior studying Computer Science with a passion for innovation. Hailing from Santa Barbara, CA, they bring a unique perspective to our team. When they're not leading our club, they enjoy exploring the world of trains. Join us in celebrating their leadership and dedication to technology.",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 2,
    name: "Jacqueline Vuong",
    position: "Co-President",
    hometown: "Santa Barbara, CA",
    major: "Computer Science",
    year: "Senior",
    funFact: "I like trains",
    bio: "Hi, I'm Andrew Cheng a senior studying Computer Science with a passion for innovation. Hailing from Santa Barbara, CA, they bring a unique perspective to our team. When they're not leading our club, they enjoy exploring the world of trains. Join us in celebrating their leadership and dedication to technology.",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 3,
    name: "Charliene Lien",
    position: "External Vice President",
    hometown: "Santa Barbara, CA",
    major: "Computer Science",
    year: "Senior",
    funFact: "I like trains",
    bio: "Hi, I'm Andrew Cheng a senior studying Computer Science with a passion for innovation. Hailing from Santa Barbara, CA, they bring a unique perspective to our team. When they're not leading our club, they enjoy exploring the world of trains. Join us in celebrating their leadership and dedication to technology.",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 4,
    name: "Chloe Wang",
    position: "Internal Vice President",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 5,
    name: "Winbert Zhang",
    position: "Treasurer",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 6,
    name: "Kaitlyn Pham",
    position: "Secretary",
    imageUrl: "/staff_photos/kaitlyn_pham.jpeg",
  },
  {
    id: 7,
    name: "Sophia Yu",
    position: "Co-Activities Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 8,
    name: "Kyle Volpp",
    position: "Co-Activities Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 9,
    name: "Austin Chen",
    position: "Co-Recruitment Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 10,
    name: "Max Wu",
    position: "Co-Recruitment Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 11,
    name: "Yelena Tao",
    position: "Co-Publicity Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 12,
    name: "Cleo Chen",
    position: "Co-Publicity Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 13,
    name: "Justin Lang",
    position: "Co-Historian",
    imageUrl: "/staff_photos/justin_lang.jpeg",
  },
  {
    id: 14,
    name: "Emma Wang",
    position: "Co-Historian",
    imageUrl: "/staff_photos/emma_wang.jpeg",
  },
  {
    id: 15,
    name: "Fiona Hosmer-Hughes",
    position: "Cultural Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 16,
    name: "Kelly Wang",
    position: "Philanthropy Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
];

const StaffPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header title="UCSB TASA" />
      <NavBar />
      <div className="px-4 py-8 text-center w-screen bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 uppercase">
          Meet the Staff!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="">
              <div className="mx-auto">
                <Image
                  src={staff.imageUrl}
                  alt={staff.name}
                  width={250}
                  height={250}
                  className="max-w-[100%] w-auto mx-auto mb-2 rounded-full"
                />
              </div>
              <h2 className="text-black text-lg mt-6 font-semibold">
                {staff.name}
              </h2>
              <p className="text-md text-[#00000080] leading-16">
                {staff.position}
              </p>
              <p className="text-md mt-6 text-[#00000080] leading-16">
                {staff.bio}
              </p>
              {/* <p className="text-md text-[#00000080] leading-16">
                {staff.year}
              </p>
              <p className="text-md text-[#00000080] leading-16">
                {staff.major}
              </p>
              <p className="text-md text-[#00000080] leading-16">
                {staff.funFact}
              </p>
              <p className="text-md text-[#00000080] leading-16">
                {staff.hometown}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
