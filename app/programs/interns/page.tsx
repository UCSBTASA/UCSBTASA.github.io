import NavBar from "@/app/_components/navbar";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Link from "next/link";
import Image from "next/image";

const Interns = () => {
  const internTestimonials = [
    {
      name: "Charliene Lien",
      imageSrc: "/staff_photos/charliene.jpg",
      internYear: "2021-2022",
      experience:
        "Being a tasa intern was one of the coolest experiences I've ever been a part of at UCSB. Not only was I able to meet some of my closest friends, but I was also able to learn how TASA runs their events behind the scenes. My favorite part of it all was the ability to express my creativity in a productive and fun environment towards exciting events such as night market and the intern event (Nin-TASA Olympics). Being an intern has inspired me to continue to work on cool projects for the community as a tasa staff member!",
    },
    {
      name: "Justin Lang",
      imageSrc: "/staff_photos/justin.jpg",
      internYear: "2021-2022",
      experience:
        "At first I was a little hesitant to apply, since I was unsure if I would be accepted as part of the intern team. However, in the end I decided to give it a shot and I’m so thankful that I did. The intern program gave me a deep insight into how TASA staff works in the background and also gave me the opportunity to create my closest friends I have in UCSB! Even during the busiest moments during the intern program, I still had so much fun because we weren't just working as a team, but as friends.",
    },
    {
      name: "Winbert Zhang",
      imageSrc: "/staff_photos/winbert.JPG",
      internYear: "2021-2022",
      experience:
        "My TASA intern experience was really rewarding as I got a chance to work with a group of passionate individuals to create events for our community. I was able to learn a lot about the inner workings of TASA and the amount of effort that goes into planning events. I also got to meet a lot of new people and make new friends. My favorite projects were working on the 2022 TASA Merch and helping plan the Night Market! Overall, I had a great time and would definitely recommend applying to be an intern!",
    },
  ];

  return (
    <div>
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <div className="relative h-80 lg:h-[50vh] bg-[#ECCEA8]">
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="relative z-10 md:px-24 lg:px-48">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4 uppercase">
              TASA INTERN PROGRAM
            </h1>
            <h2 className="text-lg lg:text-2xl mb-4">
              Get firsthand experience working with TASA staff and learn about
              the behind-the-scenes of your favorite TASA events!
            </h2>
          </div>
        </div>
      </div>

      <div className="mx-4 lg:mx-16 pt-16">
        <div className="p-8 mb-8 flex flex-col md:flex-row">
          <div className="md:w-[60%] md:pr-4">
            <h2 className="text-3xl font-bold mb-4 uppercase">
              WHY BECOME A TASA INTERN?
            </h2>
            <p className="text-gray-700">
              Interning with TASA is the easiest way to explore roles and
              responsibilities within TASA staff while also contributing back to
              the club's community and members! Whether you're interested in
              running for a full-year staff position or simply passionate about
              TASA and eager to help out, here's why you should consider
              applying to become a TASA intern!
            </p>
            <br />
            <p className="text-gray-700">
              Applications open Winter, keep an eye out for announcements!
            </p>
            {/* <Link href="/apply">
              <button
                type="button"
                class="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Check back in Fall!
              </button>
            </Link> */}
          </div>
          <div className="flex flex-wrap justify-center items-center md:w-[40%] md:pl-4 mt-4">
            <span className="table">
              <Image
                src="/programs/intern_program_cover.jpg"
                alt="Intern Program"
                width={400}
                height={400}
              />
              <p>TASA Interns Class of 2023</p>
            </span>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:mx-16">
        <div className="p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4 uppercase decoration-[#f3dab9]">
            Intern Testimonials
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {internTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-[#ECCEA8] border-2 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <p className="mt-2 font-semibold">{testimonial.name}</p>
                <p className="mt-2 font-semibold">
                  Intern class of {testimonial.internYear}
                </p>
                <p className="mt-2 text-gray-700">{testimonial.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Interns;
