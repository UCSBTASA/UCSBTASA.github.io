import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";
import Image from "next/image";

const staffMembers = [
  {
    id: 1,
    name: "Andrew Cheng",
    position: "Co-President",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 2,
    name: "Jacqueline Vuong",
    position: "Co-President",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 3,
    name: "Charliene Lien",
    position: "External Vice President",
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
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
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
    name: "Austin Chen",
    position: "Co-Recruitment Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
  {
    id: 14,
    name: "Max Wu",
    position: "Co-Recruitment Chair",
    imageUrl: "/staff_photos/sam-staff-photo_orig.jpeg",
  },
];

const StaffPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header title="UCSB TASA" />
      <NavBar />
      <div className="px-4 py-8 text-center w-screen bg-gray-100">
        <div className="container mx-auto p-12 bg-white rounded-lg">
          <h1 className="text-5xl font-bold mb-4 uppercase">Meet The Staff</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="">
                <div className="mx-auto">
                  <Image
                    src={staff.imageUrl}
                    alt={staff.name}
                    width={300}
                    height={300}
                    className="max-w-[100%] w-auto mx-auto mb-2"
                  />
                </div>
                <h2 className="text-black text-[0.9375rem]">{staff.name}</h2>
                <p className="text-[0.9375rem] text-[#00000080]">
                  {staff.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
