import Link from "next/link";
import Image from "next/image";

const Programs = () => {
  const programsData = [
    {
      title: "Big Little",
      image: "/programs/pickup.JPG",
      description:
        "Engage in our highly anticipated big-little mentorship program held each fall, fostering meaningful connections between experienced members and newcomers.",
      slug: "big-little",
    },
    {
      title: "Intern Program!",
      image: "/programs/intern_program_cover.jpg",
      description:
        "Join our immersive organization intern program and gain hands-on experience, mentorship, and insights into the inner workings of our staff.",
      slug: "interns",
    },
    {
      title: "Night Market",
      image: "/programs/nm_cover.jpeg",
      description:
        "Experience the vibrant cultural exchange at our yearly night market event, where we bring together diverse Asian organizations for an unforgettable Taiwanese-themed night market extravaganza.",
      slug: "night-market",
    },
  ];

  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-4 lg:mx-16 py-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Our Programs</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsData.map((program) => (
              <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                <div className="relative pb-[60%]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    objectFit="cover"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    priority={true}
                  />
                </div>
                <h2 className="text-xl font-semibold mt-2 mb-2">
                  {program.title}
                </h2>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
