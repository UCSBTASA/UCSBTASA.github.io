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
      hometown: "San Ramon, CA",
      major: "Biopsychology and Pharmacology",
      year: "Class of 2024",
      favMovie: "Under the Red Hood",
      funFact: "You'll never know my next move",
      imageUrl: "/staff_photos/andrew.jpg",
    },
    {
      id: 2,
      name: "Jacqueline Vuong",
      position: "CO-PRESIDENT",
      hometown: "San Ramon, CA",
      major: "Computer Science",
      year: "Class of 2024",
      funFact: "I eat Cheetos with chopsticks :>",
      favFood: "Braised pork belly",
      favMovie: "A Beautiful Mind",
      imageUrl: "/staff_photos/jacqueline.JPG",
    },
    {
      id: 3,
      name: "Charliene Lien",
      position: "External Vice President",
      hometown: "Chino, CA",
      major: "Biopsychology",
      year: "Class of 2025",
      funFact: "I am sorta psychic, like i have a fifth sense (like karen smith from mean girls) ",
      favFood: "My mom's dumplings",
      favMovie: "Crazy Rich Asians",
      imageUrl: "/staff_photos/charliene.jpg",
    },
    {
      id: 4,
      name: "Chloe Wang",
      position: "Internal Vice President",
      hometown: "Fremont, CA",
      year: "Class of 2025",
      major: "Cell and Developmental Biology",
      favMovie: "Grown-Ups",
      funFact: "I sneeze 3.5 times in a row when I eat too much",
      imageUrl: "/staff_photos/chloe.jpg",
    },
    {
      id: 5,
      name: "Winbert Zhang",
      position: "Treasurer",
      major: "Computer Science",
      hometown: "Cupertino, CA",
      favMovie: "WALL-E",
      funFact: "I play poker!",      
      imageUrl: "/staff_photos/winbert.JPG",
    },
    {
      id: 6,
      name: "Kaitlyn Pham",
      position: "Secretary",
      major: "General Biology",
      hometown: "Los Altos, CA",
      favMovie: "The Glory",
      funFact: "Certified muscle mommy, in n out order is a double meat w/ grilled onions only ",      
      imageUrl: "/staff_photos/kaitlyn.jpeg",
    },
    {
      id: 6,
      name: "Brandon Liang",
      position: "Board Advisor",
      major: "Biology / Econ & Accounting",
      hometown: "Los Angeles",
      favMovie: "Spirited Away",
      funFact: "I can read and write in 4 different languages!",
      imageUrl: "/staff_photos/brandon.jpeg"
    },
    {
      id: 7,
      name: "Sophia Yu",
      major: "History of Public Policy and Law",
      position: "Co-Activities Chair",
      hometown: "Charlottesville, VA",
      favMovie: "Ocean's 11",
      funFact: "I am anti purple grapes, green grapes are superior and I will die on that hill.",   
      imageUrl: "/staff_photos/sophia.jpg",
    },
    {
      id: 8,
      name: "Kyle Volpp",
      position: "Co-Activities Chair",
      major: "Statistics and Data Science",
      hometown: "Hacienda Heights, CA",
      favMovie: "Tenet",
      funFact: "elite from the free throw line😤",      
      imageUrl: "/staff_photos/kyle.jpeg",
    },
    {
      id: 9,
      name: "Austin Chen",
      position: "Co-Recruitment Chair",
      major: "Mechanical Engineering",
      hometown: "San Jose, CA",
      favMovie: "Black Panther",
      funFact: "I can juggle three tennis balls",      
      imageUrl: "/staff_photos/austin.jpeg",
    },
    {
      id: 10,
      name: "Max Wu",
      position: "Co-Recruitment Chair",
      major: "Electrical Engineering",
      hometown: "San Jose, CA",
      favMovie: "3 Idiots",
      funFact: "I can wiggle my ears",      
      imageUrl: "/staff_photos/max.jpeg",
    },
    {
      id: 11,
      name: "Yelena Tao",
      position: "Co-Publicity Chair",
      major: "Cell and Developmental Biology",
      hometown: "Palo Alto, CA",
      favMovie: "Jujutsu Kaisen 0",
      funFact: "I sneeze in chains",    
      imageUrl: "/staff_photos/yelena.jpg",
    },
    {
      id: 12,
      name: "Cleo Chen",
      position: "Co-Publicity Chair",
      major: "Economics and Communication",
      hometown: "Sunnyvale, CA",
      favMovie: "Incantation",
      funFact: "I have 15 piercings :-D",    
      imageUrl: "/staff_photos/cleo.JPG",
    },
    {
      id: 13,
      name: "Justin Lang",
      position: "Co-Historian",
      major: "Computer Science",
      hometown: "San Jose, CA",
      favMovie: "Your Name",
      funFact: "I have accidental ER trips every year :D",      
      imageUrl: "/staff_photos/justin.jpg",

    },
    {
      id: 14,
      name: "Emma Wang",
      position: "Co-Historian",
      major: "Pre-Biology",
      hometown: "Fremont, CA",
      favMovie: "Frozen",
      funFact: "I learned Taiwanese entirely from listening in on my family's conversations 😌",
      imageUrl: "/staff_photos/emma.jpeg",

    },
    {
      id: 15,
      name: "Fiona Hosmer-Hughes",
      position: "Cultural Chair",
      major: "History of Art and Architecture / Psychological and Brain Sciences",
      hometown: "San Francisco, CA",
      favMovie: "Kiki's Delivery Service",
      funFact: "I have 5 jobs",
      imageUrl: "/staff_photos/fiona.jpeg",

    },
    {
      id: 16,
      name: "Kelly Wang",
      position: "Philanthropy Chair",
      major: "Pharmacology",
      hometown: "Palo Alto, CA",
      favMovie: "The Wind Rises",
      funFact: "I love walking around the parks in sf",
      imageUrl: "/staff_photos/kelly.jpeg",

    },
    {
      id: 17,
      name: "Ethan Lin",
      position: "Logistics and Events Chair",
      major: "Communication / Applied Psychology",
      hometown: "San Jose, CA",
      favMovie: "Everything Everywhere All At Once",
      funFact: "I look like the good dinosaur",
      imageUrl: "/staff_photos/ethan.jpg",
    },
    {
      id: 18,
      name: "Deanna Hu",
      position: "Logistics and Events Chair",
      major: "Economics / Statistics and Data Science",
      hometown: "San Diego, CA",
      favMovie: "Everything Everywhere All At Once",
      funFact: "I have old people joints and am always cracking my back or neck",
      imageUrl: "/staff_photos/deanna.jpeg",
    },
    {
      id: 19,
      name: "Samuel Zhu",
      position: "General Staff",
      major: "Computer Science",
      hometown: "San Jose",
      favMovie: "12 Angry Men",
      funFact: "I have perfect pitch",
      imageUrl: "/staff_photos/samuel.JPG",
    },
    {
      id: 20,
      name: "Michelle Li",
      position: "General Staff",
      major: "Communication",
      hometown: "San Gabriel, CA",
      favMovie: "Ratatouille",
      funFact: "I can lucid dream",
      imageUrl: "/staff_photos/michelle.jpeg",
    },
    {
      id: 21,
      name: "Kevin Deng",
      position: "General Staff",
      major: "Computer Science",
      hometown: "San Jose, CA",
      favMovie: "The Hangover",
      funFact: "I like seeing the world through hiking, even the cardio part",
      imageUrl: "/staff_photos/kevin.jpeg",
    },
    {
      id: 22,
      name: "Grace Chen",
      position: "General Staff",
      major: "Economics and Accounting",
      hometown: "San Diego, CA",
      favMovie: "Howl's Moving Castle",
      funFact: "I have a resting sad face but I promise I'm happy",
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
              <div key={staff.id} className="flex flex-col items-center justify-center">
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
                  {staff.position.toUpperCase()}
                </p>
                {/* <p className="text-md text-[#00000080] mt-3 leading-16">
                  {staff.year}
                </p> */}
                <p className="text-md text-[#00000080] mt-2 leading-16">
                  <strong>Major: </strong>
                  {staff.major}
                </p>
                <p className="text-md text-[#00000080] leading-16">
                  <strong>Hometown: </strong>
                  {staff.hometown}
                </p>                
                <p className="text-md text-[#00000080] leading-16">
                  <strong>Favorite Movie: </strong>
                  {staff.favMovie}
                </p>
                <p className="text-md text-[#00000080] leading-16">
                  <strong>Fun Fact: </strong>
                  {staff.funFact}
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
