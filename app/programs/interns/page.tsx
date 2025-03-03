import Image from "next/image";
import internTestimonials from "@/data/internTestimonials";
import Link from "next/link";

const Interns = () => {
  return (
    <div>
      <div className="relative h-80 lg:h-[85vh]">
        <Image
          src="/programs/intern_2025.JPG"
          alt="Staff Cover Photo"
          fill
          quality={100}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="relative z-10 md:px-24 lg:px-48">
            <h1 className="text-4xl font-semibold mb-4 uppercase">
              TASA INTERN PROGRAM
            </h1>
            <h2 className="text-lg lg:text-2xl mb-4">
              Get firsthand experience working with TASA staff and learn about
              the behind-the-scenes of your favorite TASA events!
            </h2>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
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
            <p className="text-gray-700 mb-4">
              Intern applications closed for 2024! Please check back next year!
              {/* <strong> 11:59 PM on Sunday, January 14th, 2024.</strong> */}
            </p>
            {/* <Link
              href="https://forms.gle/TcsDn8EGMSZ9KhSt8"
              className="inline-block bg-blue-400 text-white font-bold mt-2 py-2 px-4 rounded hover:bg-blue-300 transition-colors duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now!
            </Link> */}
          </div>
          <div className="flex flex-wrap justify-center items-center md:w-[40%] md:pl-4 mt-4 b">
            <span className="table">
              <Image
                src="/programs/intern_program_cover.jpg"
                alt="Intern Program"
                width={400}
                height={400}
              />
              <p className="mt-4">TASA Interns Class of 2023</p>
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
                className="bg-white p-6 rounded-lg shadow-md  border-2 hover:shadow-lg transition duration-300"
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
    </div>
  );
};

export default Interns;
