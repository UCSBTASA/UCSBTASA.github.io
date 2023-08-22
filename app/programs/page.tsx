import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";
import Footer from "../_components/footer";

const Programs = () => {
  const programsData = [
    {
      title: "Program 1",
      image: "/program1.jpg",
      description:
        "Description of Program 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "big-little",
    },
    {
      title: "Program 2",
      image: "/program2.jpg",
      description:
        "Description of Program 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "night-market",
    },
    {
      title: "Program 3",
      image: "/program3.jpg",
      description:
        "Description of Program 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "interns",
    },
  ];

  return (
    <div>
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Our Programs</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsData.map((program, index) => (
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                <Link href={`/programs/${program.slug}`} key={index}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                </Link>
                <h2 className="text-lg font-semibold mb-2">{program.title}</h2>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Programs;
